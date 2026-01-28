import { FinancialDataResponse, PortfolioPoint, SimulationResult, StockData } from "../types";

// Helper to generate random normal distribution (Box-Muller transform)
const randn = () => {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
};

// Cholesky Decomposition for correlating random variables
const cholesky = (matrix: number[][]): number[][] => {
  const n = matrix.length;
  const ret = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c <= r; c++) {
      if (c === r) {
        let sum = 0;
        for (let j = 0; j < c; j++) {
          sum += ret[c][j] * ret[c][j];
        }
        ret[c][c] = Math.sqrt(matrix[c][c] - sum);
      } else {
        let sum = 0;
        for (let j = 0; j < c; j++) {
          sum += ret[r][j] * ret[c][j];
        }
        ret[r][c] = (1.0 / ret[c][c]) * (matrix[r][c] - sum);
      }
    }
  }
  return ret;
};

// Matrix multiplication vector x matrix
const multiplyMatrixVector = (matrix: number[][], vector: number[]): number[] => {
  return matrix.map(row =>
    row.reduce((sum, val, idx) => sum + val * vector[idx], 0)
  );
};

const colors = [
  "#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6",
  "#ec4899", "#14b8a6", "#f97316", "#6366f1", "#84cc16"
];

export const runSimulation = (data: FinancialDataResponse, riskFreeRate: number): SimulationResult => {
  const numAssets = data.stats.length;
  const numDays = 252;
  const dt = 1 / 252;

  // 1. Prepare Stats
  const stocks: StockData[] = data.stats.map((s, i) => ({
    ticker: s.ticker,
    expectedReturn: s.annualizedReturn,
    volatility: s.annualizedVolatility,
    beta: s.beta,
    color: colors[i % colors.length]
  }));

  // 2. Simulate Price Paths (Correlated Geometric Brownian Motion)
  const corrMatrix = data.correlationMatrix;
  const L = cholesky(corrMatrix); // Lower triangular matrix

  const prices: { day: number;[ticker: string]: number }[] = [];
  const currentPrices = new Array(numAssets).fill(100);
  prices.push({ day: 0, ...Object.fromEntries(stocks.map((s, i) => [s.ticker, 100])) });

  for (let t = 1; t <= numDays; t++) {
    const Z = new Array(numAssets).fill(0).map(randn);
    const X = multiplyMatrixVector(L, Z);

    const dayData: any = { day: t };

    for (let i = 0; i < numAssets; i++) {
      const mu = stocks[i].expectedReturn;
      const sigma = stocks[i].volatility;
      const drift = (mu - 0.5 * sigma * sigma) * dt;
      const diffusion = sigma * Math.sqrt(dt) * X[i];

      currentPrices[i] = currentPrices[i] * Math.exp(drift + diffusion);
      dayData[stocks[i].ticker] = currentPrices[i];
    }
    prices.push(dayData);
  }

  // 3. Markowitz Portfolio Generation (Monte Carlo)
  const portfolios: PortfolioPoint[] = [];
  const numPortfolios = 4000;
  let maxSharpe = -Infinity;
  let maxSharpePortfolio: PortfolioPoint | undefined;

  const covMatrix = corrMatrix.map((row, i) =>
    row.map((val, j) => val * stocks[i].volatility * stocks[j].volatility)
  );

  for (let k = 0; k < numPortfolios; k++) {
    let weights = new Array(numAssets).fill(0).map(() => Math.random());
    const weightSum = weights.reduce((a, b) => a + b, 0);
    weights = weights.map(w => w / weightSum);

    const portReturn = weights.reduce((sum, w, i) => sum + w * stocks[i].expectedReturn, 0);

    const sigmaW = multiplyMatrixVector(covMatrix, weights);
    const variance = weights.reduce((sum, w, i) => sum + w * sigmaW[i], 0);
    const portVol = Math.sqrt(variance);

    const sharpe = (portReturn - riskFreeRate) / portVol;

    const point: PortfolioPoint = {
      return: portReturn,
      volatility: portVol,
      sharpe,
      weights
    };

    portfolios.push(point);

    if (sharpe > maxSharpe) {
      maxSharpe = sharpe;
      maxSharpePortfolio = point;
    }
  }

  // 4. Approximate Efficient Frontier (Smoothed)

  // Sort by return
  portfolios.sort((a, b) => a.return - b.return);

  const minRet = portfolios[0].return;
  const maxRet = portfolios[portfolios.length - 1].return;
  const bins = 50;
  const binSize = (maxRet - minRet) / bins;

  const rawFrontier: PortfolioPoint[] = [];

  for (let i = 0; i < bins; i++) {
    const binStart = minRet + i * binSize;
    const binEnd = binStart + binSize;

    const pointsInBin = portfolios.filter(p => p.return >= binStart && p.return < binEnd);

    if (pointsInBin.length > 0) {
      pointsInBin.sort((a, b) => a.volatility - b.volatility);
      rawFrontier.push(pointsInBin[0]);
    }
  }

  let globalMinVar = rawFrontier[0];
  rawFrontier.forEach(p => {
    if (p.volatility < globalMinVar.volatility) {
      globalMinVar = p;
    }
  });

  let upperLimb = rawFrontier.filter(p => p.return >= globalMinVar.return);

  upperLimb.sort((a, b) => a.return - b.return);

  const efficientFrontier: PortfolioPoint[] = [upperLimb[0]];
  for (let i = 1; i < upperLimb.length; i++) {
    const last = efficientFrontier[efficientFrontier.length - 1];
    const current = upperLimb[i];

    if (current.volatility > last.volatility) {
      efficientFrontier.push(current);
    }
  }

  return {
    stats: stocks,
    marketStats: {
      return: data.marketStats.annualizedReturn,
      volatility: data.marketStats.annualizedVolatility
    },
    correlationMatrix: corrMatrix,
    dailyPrices: prices,
    portfolios,
    efficientFrontier,
    maxSharpeRatioPortfolio: maxSharpePortfolio
  };
};