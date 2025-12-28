import { OptionType, BSParams } from '../types';

/**
 * Standard Normal Cumulative Distribution Function
 */
export function cumulativeDistribution(x: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989422804014337 * Math.exp(-x * x / 2);
  let p = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  if (x > 0) {
    p = 1 - p;
  }
  return p;
}

/**
 * Calculate Black-Scholes Option Price
 */
export const calculateOptionPrice = (
  params: BSParams,
  type: OptionType
): number => {
  const { S, K, T, r, sigma } = params;

  // Handle edge cases
  if (T <= 0) {
    if (type === OptionType.Call) return Math.max(0, S - K);
    return Math.max(0, K - S);
  }
  if (sigma === 0) {
    // Intrinsic value discounted
    if (type === OptionType.Call) return Math.max(0, S - K * Math.exp(-r * T));
    return Math.max(0, K * Math.exp(-r * T) - S);
  }

  const d1 = (Math.log(S / K) + (r + 0.5 * Math.pow(sigma, 2)) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);

  if (type === OptionType.Call) {
    return S * cumulativeDistribution(d1) - K * Math.exp(-r * T) * cumulativeDistribution(d2);
  } else {
    return K * Math.exp(-r * T) * cumulativeDistribution(-d2) - S * cumulativeDistribution(-d1);
  }
};

/**
 * Calculate The Greeks (Delta, Gamma, Vega, Theta, Rho)
 * Useful for educational display
 */
export const calculateGreeks = (params: BSParams, type: OptionType) => {
  const { S, K, T, r, sigma } = params;
  
  if (T <= 0) return { delta: 0, gamma: 0, vega: 0, theta: 0, rho: 0 };

  const d1 = (Math.log(S / K) + (r + 0.5 * Math.pow(sigma, 2)) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);
  const nd1 = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * d1 * d1);
  const N_d1 = cumulativeDistribution(d1);
  const N_d2 = cumulativeDistribution(d2);
  const N_neg_d1 = cumulativeDistribution(-d1);
  const N_neg_d2 = cumulativeDistribution(-d2);

  let delta, theta, rho;
  const gamma = nd1 / (S * sigma * Math.sqrt(T));
  const vega = S * Math.sqrt(T) * nd1 / 100; // Divided by 100 to show change per 1% vol

  if (type === OptionType.Call) {
    delta = N_d1;
    theta = (- (S * sigma * nd1) / (2 * Math.sqrt(T)) - r * K * Math.exp(-r * T) * N_d2) / 365;
    rho = (K * T * Math.exp(-r * T) * N_d2) / 100;
  } else {
    delta = N_d1 - 1;
    theta = (- (S * sigma * nd1) / (2 * Math.sqrt(T)) + r * K * Math.exp(-r * T) * N_neg_d2) / 365;
    rho = (-K * T * Math.exp(-r * T) * N_neg_d2) / 100;
  }

  return { delta, gamma, vega, theta, rho };
};