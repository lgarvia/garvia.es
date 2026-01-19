
/**
 * Normal Distribution PDF: f(x) = (1 / (σ * sqrt(2π))) * exp(-0.5 * ((x - μ) / σ)^2)
 */
export const calculatePDF = (x: number, mean: number, stdDev: number): number => {
  const exponent = -0.5 * Math.pow((x - mean) / stdDev, 2);
  const coefficient = 1 / (stdDev * Math.sqrt(2 * Math.PI));
  return coefficient * Math.exp(exponent);
};

/**
 * Approximation of the error function (erf)
 */
const erf = (x: number): number => {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = x < 0 ? -1 : 1;
  const absX = Math.abs(x);

  const t = 1.0 / (1.0 + p * absX);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);

  return sign * y;
};

/**
 * Normal Distribution CDF: F(x) = 0.5 * (1 + erf((x - μ) / (σ * sqrt(2))))
 */
export const calculateCDF = (x: number, mean: number, stdDev: number): number => {
  return 0.5 * (1 + erf((x - mean) / (stdDev * Math.sqrt(2))));
};

export const generateDataPoints = (mean: number, stdDev: number, range: [number, number], steps: number = 200) => {
  const points = [];
  const start = range[0];
  const end = range[1];
  const stepSize = (end - start) / steps;

  for (let i = 0; i <= steps; i++) {
    const x = start + i * stepSize;
    points.push({
      x,
      pdf: calculatePDF(x, mean, stdDev),
      cdf: calculateCDF(x, mean, stdDev)
    });
  }
  return points;
};
