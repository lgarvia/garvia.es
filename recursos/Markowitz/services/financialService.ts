import { FinancialDataResponse } from "../types";

export const fetchFinancialParameters = async (tickers: string[]): Promise<FinancialDataResponse> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const stats = tickers.map(ticker => {
        // Generate semi-deterministic metrics based on the ticker name 
        // to provide consistent results for the same ticker
        const seed = ticker.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

        // Annualized Return: 5% to 25%
        const annualizedReturn = 0.05 + (seed % 20) / 100;

        // Annualized Volatility: 15% to 45%
        const annualizedVolatility = 0.15 + (seed % 30) / 100;

        // Beta: 0.5 to 1.8
        const beta = 0.5 + (seed % 13) / 10;

        return {
            ticker,
            annualizedReturn,
            annualizedVolatility,
            beta
        };
    });

    // Market Stats (Fixed)
    const marketStats = {
        annualizedReturn: 0.10, // 10% market return
        annualizedVolatility: 0.18 // 18% market vol
    };

    // Generate a plausible symmetric correlation matrix
    const n = tickers.length;
    const correlationMatrix: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        correlationMatrix[i][i] = 1.0;
        for (let j = i + 1; j < n; j++) {
            const combinedSeed = (tickers[i] + tickers[j]).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            // Correlations typically between 0.1 and 0.7 for stocks
            const corr = 0.1 + (combinedSeed % 60) / 100;
            correlationMatrix[i][j] = corr;
            correlationMatrix[j][i] = corr;
        }
    }

    return {
        stats,
        marketStats,
        correlationMatrix
    };
};
