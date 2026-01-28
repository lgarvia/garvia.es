
export const translations = {
  es: {
    nav: {
      mortality: "Mortalidad",
      annuities: "Anualidades",
      risk: "Riesgo",
      ruin: "Ruina"
    },
    hero: {
      title: "Aprende Actuaria de forma",
      accent: "Visual y Práctica",
      description: "De la probabilidad de vida a la probabilidad de ruina. Entiende por qué las aseguradoras son las arquitectas de la estabilidad financiera global.",
      badge1: "p_x + q_x = 1",
      badge2: "Solvencia II",
      badge3: "Ruina 0.05%"
    },
    mortality: {
      title: "1. Vida vs Muerte",
      description: "En actuaria, la base es binaria: o se sobrevive ($p_x$) o se fallece ($q_x$). La suma de ambas probabilidades siempre es exactamente 1 (100%).",
      px: "Prob. de Vida (px)",
      qx: "Prob. de Muerte (qx)",
      lx: "Curva de Supervivientes (lx)",
      goldenRule: "La Regla de Oro",
      ruleDesc: "A medida que envejecemos, el área roja (qx) 'consume' el área verde (px).",
      popDesc: "Descenso de la población base de 100,000"
    },
    annuity: {
      title: "2. Anualidad Vitalicia (a_x)",
      age: "Edad de Inicio",
      interest: "Interés Técnico",
      apv: "VPA",
      fixed: "Renta cierta",
      conceptTitle: "El Descuento por Mortalidad",
      conceptDesc: "Descontamos por tiempo y por la probabilidad de estar vivo. Esto hace que las rentas vitalicias sean más baratas que las ciertas.",
      labelFinancial: "VP Financiero",
      labelActuarial: "VP Actuarial"
    },
    lgn: {
      title: "3. Grandes Números",
      description: "¿Cómo puede una aseguradora prometer pagar? Individualmente es azar, colectivamente es estadística.",
      portfolio: "Cartera",
      button: "Simular",
      realClaims: "Siniestros",
      deviation: "Desviación",
      pooling: "Agrupación",
      poolingQuote: "La contribución de muchos a la desgracia de pocos.",
      poolingDesc: "Al aumentar la cartera, la desviación porcentual disminuye."
    },
    ruin: {
      title: "4. Teoría del Riesgo",
      description: "El capital inicial y el recargo de seguridad protegen de la ruina. Bajo Solvencia II, buscamos una ruina ínfima (0.05% anual).",
      initialCapital: "Capital (U_0)",
      safetyLoading: "Recargo (theta)",
      estimatedProb: "Prob. Ruina",
      solvencyTarget: "SOLVENCIA OK",
      claimsVol: "Aleatoriedad",
      claimsVolDesc: "Los siniestros siguen procesos estocásticos.",
      loadingDesc: "Spread que absorbe desviaciones.",
      targetDesc: "Confianza del 99.95%, estándar regulatorio."
    },
  },
  en: {
    nav: {
      mortality: "Mortality",
      annuities: "Annuities",
      risk: "Risk",
      ruin: "Ruin"
    },
    hero: {
      title: "Learn Actuarial Science",
      accent: "Visually",
      description: "From survival probability to ruin probability. Understand why insurers are architects of global stability.",
      badge1: "p_x + q_x = 1",
      badge2: "Solvency II",
      badge3: "Ruin 0.05%"
    },
    mortality: {
      title: "1. Life vs Death",
      description: "Actuarial base is binary: survive ($p_x$) or die ($q_x$). Sum is always 1 (100%).",
      px: "Life Prob. (px)",
      qx: "Death Prob. (qx)",
      lx: "Survivors (lx)",
      goldenRule: "Golden Rule",
      ruleDesc: "As we age, red area (qx) 'consumes' green area (px).",
      popDesc: "100,000 base population"
    },
    annuity: {
      title: "2. Life Annuity (a_x)",
      age: "Entry Age",
      interest: "Interest Rate",
      apv: "APV",
      fixed: "Annuity certain",
      conceptTitle: "Mortality Discount",
      conceptDesc: "We discount for time and for the probability of being alive. This makes life annuities cheaper.",
      labelFinancial: "Financial PV",
      labelActuarial: "Actuarial PV"
    },
    lgn: {
      title: "3. Large Numbers",
      description: "Individually it is chance, collectively it is statistics.",
      portfolio: "Portfolio",
      button: "Simulate",
      realClaims: "Claims",
      deviation: "Deviation",
      pooling: "Pooling",
      poolingQuote: "The many supporting the few.",
      poolingDesc: "Larger portfolios mean smaller deviation percentages."
    },
    ruin: {
      title: "4. Risk Theory",
      description: "Initial capital and safety loading protect from ruin. Solvency II seeks 0.05% annual ruin probability.",
      initialCapital: "Capital (U_0)",
      safetyLoading: "Loading (theta)",
      estimatedProb: "Ruin Prob.",
      solvencyTarget: "SOLVENCY MET",
      claimsVol: "Randomness",
      claimsVolDesc: "Claims follow stochastic processes.",
      loadingDesc: "Spread to absorb negative deviations.",
      targetDesc: "99.95% confidence level standard."
    },
  }
};
