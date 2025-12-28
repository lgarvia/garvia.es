export enum OptionType {
  Call = 'CALL',
  Put = 'PUT'
}

export interface BSParams {
  S: number; // Spot Price (Precio actual del activo)
  K: number; // Strike Price (Precio de ejercicio)
  T: number; // Time to maturity in years (Tiempo al vencimiento)
  r: number; // Risk-free interest rate (Tasa libre de riesgo)
  sigma: number; // Volatility (Volatilidad)
}

export interface ChartPoint {
  spot: number;
  price: number;
  payoff: number;
  intrinsic: number;
}