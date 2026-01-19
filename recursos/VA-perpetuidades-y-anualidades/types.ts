
export interface FinancialParams {
  fv: number;       // Future Value / Cash Flow
  i: number;        // Interest Rate (decimal)
  n: number;        // Periods
}

export enum Level {
  PresentValue = 1,
  Perpetuity = 2,
  Annuity = 3,
  Comparison = 4
}

export enum Language {
  ES = 'es',
  EN = 'en'
}
