
export type Language = 'es' | 'en';

export interface Point {
  x: number;
  pdf: number;
  cdf: number;
}

export interface DistributionParams {
  mean: number;
  stdDev: number;
}

export interface TranslationStrings {
  title: string;
  subtitle: string;
  pdfTitle: string;
  cdfTitle: string;
  controls: string;
  mean: string;
  stdDev: string;
  intervals: string;
  interval1: string;
  interval2: string;
  interval3: string;
  formulaTitle: string;
  explanation: string;
  currentValue: string;
  accumulatedProb: string;
  aiExplanation: string;
  askAi: string;
  loading: string;
}

export interface Translations {
  es: TranslationStrings;
  en: TranslationStrings;
}
