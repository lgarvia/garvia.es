
export interface BondParams {
  parValue: number;
  couponRate: number; // as percentage (e.g., 5 for 5%)
  yearsToMaturity: number;
  marketInterestRate: number; // as percentage (Yield to Maturity)
}

export interface CashFlow {
  period: number;
  payment: number;
  presentValue: number;
}

export interface ChartDataPoint {
  yield: number;
  price: number;
}
