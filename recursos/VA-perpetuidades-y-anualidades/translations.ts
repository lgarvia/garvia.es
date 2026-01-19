
export const translations = {
  es: {
    title: "Lab de Matemáticas Financieras",
    subtitle: "Entiende el valor del dinero en el tiempo de forma visual",
    footer: "Herramienta Didáctica para Universidades",
    levels: {
      1: "1. Valor Actual",
      2: "2. Perpetuidad",
      3: "3. Anualidad",
      4: "4. Diferencia"
    },
    pv: {
      title: "1. Valor Actual (PV)",
      desc: "¿Cuánto vale hoy un pago que recibirás en el futuro? El dinero hoy vale más que mañana debido a la capacidad de generar intereses.",
      fv: "Monto Futuro (FV)",
      rate: "Tasa de Interés (i)",
      periods: "Periodos (n)",
      result: "Valor Actual Resultante",
      formulaTitle: "La Fórmula",
      formulaDesc: "Descontamos el flujo futuro trayéndolo al presente dividiendo por el factor de capitalización.",
      analysisTitle: "Análisis Didáctico",
      analysisItems: [
        "A mayor Tasa (i), menor es el PV.",
        "A mayor Tiempo (n), menor es el PV.",
        "El PV representa el 'precio justo' hoy."
      ],
      chartTitle: "Línea de Tiempo del Descuento"
    },
    perp: {
      title: "2. Perpetuidad",
      desc: "Una serie infinita de pagos constantes. Aunque los pagos nunca terminan, su valor actual es finito porque los pagos muy lejanos tienden a valer cero hoy.",
      payment: "Pago Periódico (C)",
      rate: "Tasa de Interés (i)",
      vizPeriods: "Periodos a Visualizar",
      result: "Valor Actual de la Perpetuidad",
      note: "* Se asume que el primer pago ocurre en el periodo 1 (Perpetuidad vencida).",
      formulaTitle: "La Fórmula",
      formulaDesc: "Es la fórmula más simple de las finanzas. Representa la capitalización de una renta constante.",
      effectTitle: "Efecto del Descuento",
      effectDesc: "Observa cómo el valor que cada pago aporta al PV total disminuye rápidamente a medida que nos alejamos en el tiempo.",
      legendPayment: "Pago (C)",
      legendPV: "Valor Presente del pago",
      chartTitle: "Visualización de la Perpetuidad"
    },
    annuity: {
      title: "3. Anualidad",
      desc: "A diferencia de la perpetuidad, la anualidad tiene un fin definido (n). Es lo que usamos para calcular préstamos o ahorros programados.",
      payment: "Renta Periódica (C)",
      rate: "Tasa (i)",
      duration: "Duración (n)",
      result: "Valor Actual de la Anualidad",
      formulaTitle: "La Fórmula",
      formulaDesc: "El término en el paréntesis se conoce como 'Factor de Valor Presente de una Anualidad'.",
      obsTitle: "Observación Visual",
      obsDesc: "Nota que la anualidad es simplemente un 'fragmento' de una perpetuidad. Si aumentas n hasta el infinito, el valor convergerá al de una perpetuidad (C/i).",
      legendNominal: "Pago Nominal",
      legendDiscounted: "Valor Descontado"
    },
    comp: {
      title: "4. El 'Truco' de las Perpetuidades",
      desc: "Una anualidad de n años es equivalente a comprar una perpetuidad hoy y 'venderla' o 'restar' otra perpetuidad que comience en el año n+1.",
      payment: "Renta (C)",
      rate: "Tasa (i)",
      cut: "Corte (n)",
      step1: "1. Perpetuidad Total (Desde t=1)",
      step2: "2. Perpetuidad Diferida (Desde t=n+1)",
      step3: "3. Resultado: Anualidad (1 - 2)",
      analysisTitle: "Demostración Analítica",
      analysisNote: "Esta visualización muestra cómo la 'cola' de la perpetuidad que empieza en n+1 cancela exactamente los flujos infinitos de la primera perpetuidad, dejando solo los primeros n pagos."
    }
  },
  en: {
    title: "Financial Math Lab",
    subtitle: "Understand the time value of money visually",
    footer: "Educational Tool for Universities",
    levels: {
      1: "1. Present Value",
      2: "2. Perpetuity",
      3: "3. Annuity",
      4: "4. Difference"
    },
    pv: {
      title: "1. Present Value (PV)",
      desc: "How much is a future payment worth today? Money today is worth more than tomorrow due to its interest-earning capacity.",
      fv: "Future Value (FV)",
      rate: "Interest Rate (i)",
      periods: "Periods (n)",
      result: "Resulting Present Value",
      formulaTitle: "The Formula",
      formulaDesc: "We discount the future flow by bringing it to the present, dividing by the capitalization factor.",
      analysisTitle: "Didactic Analysis",
      analysisItems: [
        "Higher Rate (i), lower PV.",
        "Longer Time (n), lower PV.",
        "PV represents the 'fair price' today."
      ],
      chartTitle: "Discount Timeline"
    },
    perp: {
      title: "2. Perpetuity",
      desc: "An infinite series of constant payments. Although payments never end, their present value is finite because far-off payments tend toward zero value today.",
      payment: "Periodic Payment (C)",
      rate: "Interest Rate (i)",
      vizPeriods: "Periods to Visualize",
      result: "Present Value of Perpetuity",
      note: "* Assumes the first payment occurs at period 1 (Ordinary perpetuity).",
      formulaTitle: "The Formula",
      formulaDesc: "The simplest finance formula. Represents the capitalization of a constant income stream.",
      effectTitle: "Discounting Effect",
      effectDesc: "Observe how the value each payment contributes to the total PV decreases rapidly as we move further in time.",
      legendPayment: "Payment (C)",
      legendPV: "Present Value of Payment",
      chartTitle: "Perpetuity Visualization"
    },
    annuity: {
      title: "3. Annuity",
      desc: "Unlike a perpetuity, an annuity has a defined end (n). Used for loan calculations or structured savings.",
      payment: "Periodic Rent (C)",
      rate: "Rate (i)",
      duration: "Duration (n)",
      result: "Present Value of Annuity",
      formulaTitle: "The Formula",
      formulaDesc: "The term in parentheses is known as the 'Present Value Interest Factor of an Annuity'.",
      obsTitle: "Visual Observation",
      obsDesc: "Note that an annuity is simply a 'fragment' of a perpetuity. If n increases to infinity, the value converges to C/i.",
      legendNominal: "Nominal Payment",
      legendDiscounted: "Discounted Value"
    },
    comp: {
      title: "4. The 'Perpetuity Trick'",
      desc: "An n-year annuity is equivalent to buying a perpetuity today and 'selling' or 'subtracting' another perpetuity starting at year n+1.",
      payment: "Rent (C)",
      rate: "Rate (i)",
      cut: "Cutoff (n)",
      step1: "1. Total Perpetuity (From t=1)",
      step2: "2. Deferred Perpetuity (From t=n+1)",
      step3: "3. Result: Annuity (1 - 2)",
      analysisTitle: "Analytical Proof",
      analysisNote: "This visualization shows how the 'tail' starting at n+1 exactly cancels the infinite flows of the first perpetuity, leaving only the first n payments."
    }
  }
};
