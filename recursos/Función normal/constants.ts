
import { Translations } from './types';

export const TRANSLATIONS: Translations = {
  es: {
    title: "NormalDist Pro",
    subtitle: "Simulador Estadístico",
    pdfTitle: "Densidad (PDF)",
    cdfTitle: "Acumulada (CDF)",
    controls: "Parámetros",
    mean: "Media (μ)",
    stdDev: "Desv. Estándar (σ)",
    intervals: "Intervalos",
    interval1: "1σ (68.3%)",
    interval2: "2σ (95.5%)",
    interval3: "3σ (99.7%)",
    formulaTitle: "Matemáticas",
    explanation: "Explora la distribución normal interactuando con las gráficas.",
    currentValue: "Valor X",
    accumulatedProb: "P(X ≤ x)",
    aiExplanation: "",
    askAi: "",
    loading: ""
  },
  en: {
    title: "NormalDist Pro",
    subtitle: "Statistical Simulator",
    pdfTitle: "Density (PDF)",
    cdfTitle: "Cumulative (CDF)",
    controls: "Parameters",
    mean: "Mean (μ)",
    stdDev: "Std. Dev (σ)",
    intervals: "Intervals",
    interval1: "1σ (68.3%)",
    interval2: "2σ (95.5%)",
    interval3: "3σ (99.7%)",
    formulaTitle: "Mathematics",
    explanation: "Explore the normal distribution by interacting with the charts.",
    currentValue: "X Value",
    accumulatedProb: "P(X ≤ x)",
    aiExplanation: "",
    askAi: "",
    loading: ""
  }
};

export const CHART_MARGINS = { top: 15, right: 25, bottom: 35, left: 45 };
export const PLOT_WIDTH = 700;
export const PLOT_HEIGHT = 220;
