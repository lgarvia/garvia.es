export type Lang = 'es' | 'en';

const T = {
  /* ── header ── */
  title:        { es: 'Redington: Inmunización de Carteras',   en: 'Redington: Portfolio Immunization' },
  subtitle:     { es: 'Blindaje frente al riesgo de tipos de interés mediante la gestión de duraciones y convexidad',
                  en: 'Hedging interest-rate risk through duration and convexity management' },
  tab1:         { es: 'Nivel 1 — Conceptos Básicos',          en: 'Level 1 — Core Concepts' },
  tab2:         { es: 'Nivel 2 — Múltiples Flujos',           en: 'Level 2 — Multiple Cash Flows' },

  /* ── controles nivel 1 ── */
  interestRate: { es: 'Tipo de Interés',                       en: 'Interest Rate' },
  targetYield:  { es: 'Target Yield',                          en: 'Target Yield' },
  liability:    { es: 'Pasivo (Obligación)',                   en: 'Liability (Obligation)' },
  liabMat:      { es: 'Vencimiento ($1 M)',                    en: 'Maturity ($1 M)' },
  years:        { es: 'años',                                  en: 'years' },
  portfolio:    { es: 'Cartera (Bonos ZCB)',                   en: 'Portfolio (ZCB Bonds)' },
  shortBond:    { es: 'Bono Corto (A₁)',                       en: 'Short Bond (A₁)' },
  longBond:     { es: 'Bono Largo (A₂)',                       en: 'Long Bond (A₂)' },
  bracketWarn:  { es: 'Los vencimientos deben rodear al pasivo: T₁ < T_L < T₂',
                  en: 'Maturities must bracket the liability: T₁ < T_L < T₂' },

  /* ── KPIs ── */
  pvLiab:       { es: 'PV Pasivo',                             en: 'PV Liability' },
  pvPortf:      { es: 'PV Cartera',                            en: 'PV Portfolio' },
  status:       { es: 'Estado',                                en: 'Status' },
  immunized:    { es: '✓ Inmunizada',                          en: '✓ Immunized' },
  vulnerable:   { es: '✗ Vulnerable',                          en: '✗ Vulnerable' },
  dur:          { es: 'Dur',                                   en: 'Dur' },
  conv:         { es: 'Conv',                                  en: 'Conv' },

  /* ── gráficos nivel 1 ── */
  cfTitle:      { es: 'Flujos de Caja en el Tiempo',           en: 'Cash Flows Over Time' },
  pvTitle:      { es: 'Sensibilidad PV vs Tipo de Interés',    en: 'PV Sensitivity vs Interest Rate' },
  yearLabel:    { es: 'Año',                                   en: 'Year' },
  actual:       { es: 'Actual',                                en: 'Current' },
  assets:       { es: 'Activos',                               en: 'Assets' },
  liabSing:     { es: 'Pasivo',                                en: 'Liability' },

  /* ── condiciones ── */
  c1Title:      { es: 'PV Iguales',                            en: 'Equal PVs' },
  c1Desc:       { es: 'El valor actual de la cartera iguala al del pasivo.',
                  en: 'The present value of the portfolio equals that of the liability.' },
  c2Title:      { es: 'Duraciones Iguales',                    en: 'Equal Durations' },
  c2Desc:       { es: 'La duración de Macaulay de ambos lados coincide.',
                  en: 'Macaulay duration of both sides matches.' },
  c3Title:      { es: 'Conv. Cartera > Conv. Pasivo',          en: 'Portfolio Conv. > Liability Conv.' },
  c3Desc:       { es: 'Mayor convexidad garantiza ganancia ante cualquier desplazamiento.',
                  en: 'Higher convexity ensures gains under any parallel shift.' },

  /* ── nivel 2 ── */
  complex:      { es: 'Múltiples Flujos',                      en: 'Multiple Cash Flows' },
  complexSub:   { es: '3 pasivos × 4 activos: escoge estrategia',
                  en: '3 liabilities × 4 assets: choose strategy' },
  liabsToCover: { es: 'Pasivos a Cubrir',                      en: 'Liabilities to Cover' },
  colYear:      { es: 'Año',                                   en: 'Year' },
  colAmount:    { es: 'Importe',                               en: 'Amount' },
  strategy:     { es: 'Estrategia de Asignación',              en: 'Allocation Strategy' },
  preShort:     { es: '100 % Corto (1Y)',                      en: '100 % Short (1Y)' },
  preShortSub:  { es: 'Riesgo de reinversión máximo',          en: 'Maximum reinvestment risk' },
  preLong:      { es: '100 % Largo (20Y)',                     en: '100 % Long (20Y)' },
  preLongSub:   { es: 'Riesgo de precio máximo',               en: 'Maximum price risk' },
  preBarbell:   { es: 'Barbell (1Y + 20Y)',                    en: 'Barbell (1Y + 20Y)' },
  preBarbellSub:{ es: 'Duración alineada pero exceso de convexidad',
                  en: 'Duration matched but excess convexity' },
  preImmunize:  { es: 'Inmunizada Óptima',                     en: 'Optimal Immunization' },
  preImmSub:    { es: 'Dur = Dur_L, Conv ≥ Conv_L',            en: 'Dur = Dur_L, Conv ≥ Conv_L' },
  weights:      { es: 'Pesos Resultantes',                     en: 'Resulting Weights' },
  liabsComb:    { es: 'Pasivos Combinados',                    en: 'Combined Liabilities' },
  portfProj:    { es: 'Cartera Proyectada',                    en: 'Projected Portfolio' },
  globalResult: { es: 'Resultado Global',                      en: 'Overall Result' },
  partial:      { es: '⚠ Parcial',                             en: '⚠ Partial' },
  durGap:       { es: 'Gap Dur',                               en: 'Dur Gap' },
  convInsuf:    { es: 'Conv insuf.',                            en: 'Conv insuf.' },
  cfMap:        { es: 'Mapeo de Flujos de Caja',               en: 'Cash Flow Mapping' },
  stressTitle:  { es: 'Stress Test: PV bajo distintos yields', en: 'Stress Test: PV under different yields' },
  surplusTitle: { es: 'Superávit (Activos − Pasivos) por Yield',
                  en: 'Surplus (Assets − Liabilities) by Yield' },
  base:         { es: 'Base',                                  en: 'Base' },

  /* ── tooltips ── */
  ttYear:       { es: 'Año',                                   en: 'Year' },
  ttPayment:    { es: 'Pago',                                  en: 'Payment' },
  ttReceipt:    { es: 'Cobro',                                 en: 'Receipt' },
  ttSurplus:    { es: 'Superávit',                             en: 'Surplus' },
} as const;

export type TKey = keyof typeof T;

export function t(key: TKey, lang: Lang): string {
  return T[key][lang];
}

export default T;
