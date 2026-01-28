export interface StockData {
  ticker: string;
  expectedReturn: number; // Annualized
  volatility: number;     // Annualized
  beta: number;           // Sensitivity to Market
  color: string;
}

export interface SimulationResult {
  stats: StockData[];
  marketStats: { return: number; volatility: number };
  correlationMatrix: number[][];
  dailyPrices: { day: number;[ticker: string]: number }[];
  portfolios: PortfolioPoint[];
  efficientFrontier: PortfolioPoint[];
  maxSharpeRatioPortfolio?: PortfolioPoint;
}

export interface PortfolioPoint {
  return: number;
  volatility: number;
  sharpe: number;
  weights: number[];
}

export interface FinancialDataResponse {
  stats: {
    ticker: string;
    annualizedReturn: number;
    annualizedVolatility: number;
    beta: number;
  }[];
  marketStats: {
    annualizedReturn: number;
    annualizedVolatility: number;
  };
  correlationMatrix: number[][];
}