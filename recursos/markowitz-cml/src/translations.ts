const greek = {
    mu: "r",
    sigma: "σ",
    rho: "ρ"
};

export const translations = {
    es: {
        title: "CML Lab: Markowitz + Activo Libre de Riesgo",
        subtitle: "Capital Market Line y el Teorema de Separación",
        modes: {
            single: "RF + 1 Activo",
            multi: "RF + 2 Activos"
        },
        inputs: {
            rf: `Tasa Libre de Riesgo (rf) %`,
            asset1: "Activo A",
            asset2: "Activo B",
            return: `Retorno Esperado (${greek.mu}) %`,
            risk: `Riesgo / Volatilidad (${greek.sigma}) %`,
            correlation: `Correlación (${greek.rho})`,
            settings: "Parámetros de Mercado",
            targetRisk: "Riesgo Objetivo (%)"
        },
        results: {
            sharpe: "Ratio de Sharpe",
            tangency: "Cartera Tangente (Óptima)",
            composition: "Composición de la Cartera",
            w_rf: "Peso en RF",
            w_risky: "Peso en Riesgo",
            w_a: "Proporción Activo A",
            w_b: "Proporción Activo B",
            expectedReturn: "Retorno Esperado",
            totalRisk: "Riesgo Total"
        },
        chart: {
            x: `Riesgo (Desviación Típica ${greek.sigma}) %`,
            y: `Retorno Esperado (${greek.mu}) %`,
            cml: "Capital Market Line (CML)",
            frontier: "Frontera Eficiente",
            tangency: "Punto de Tangencia",
            target: "Tu Cartera Objetivo"
        },
        intuition: {
            title: "El Teorema de Separación",
            lines: [
                "1. La decisión de inversión se divide en dos pasos independientes (separación de dos fondos).",
                "2. Primero: Identificar la Cartera Tangente, que es la combinación de activos con mayor Ratio de Sharpe.",
                "3. Segundo: Combinar esa cartera óptima con el Activo Libre de Riesgo (rf) según tu tolerancia al riesgo.",
                "4. La CML representa todas las combinaciones posibles entre rf y la Cartera Tangente.",
                "5. Cualquier punto en la CML es superior a cualquier punto en la frontera de Markowitz (excepto la tangencia).",
                "6. El Ratio de Sharpe es la pendiente de la CML y representa el 'precio del riesgo'.",
                "7. Préstamo: Si buscas un riesgo mayor al de la Cartera Tangente, pides prestado al rf para invertir más del 100%.",
                "8. Ahorro: Si buscas menos riesgo, dejas una parte del capital en el activo libre de riesgo.",
                "9. Todos los inversores racionales deberían tener la misma proporción de activos riesgosos (la tangencia).",
                "10. La diferencia entre perfiles es solo el peso relativo entre liquidez y riesgo total.",
                "11. La CML simplifica el universo de inversión de una curva compleja a una línea recta eficiente."
            ]
        },
        labels: {
            switchLanguage: "Switch to English",
        }
    },
    en: {
        title: "CML Lab: Markowitz + Risk-Free Asset",
        subtitle: "Capital Market Line and Separation Theorem",
        modes: {
            single: "RF + 1 Asset",
            multi: "RF + 2 Assets"
        },
        inputs: {
            rf: `Risk-Free Rate (rf) %`,
            asset1: "Asset A",
            asset2: "Asset B",
            return: `Expected Return (${greek.mu}) %`,
            risk: `Risk / Volatility (${greek.sigma}) %`,
            correlation: `Correlation (${greek.rho})`,
            settings: "Market Parameters",
            targetRisk: "Target Risk (%)"
        },
        results: {
            sharpe: "Sharpe Ratio",
            tangency: "Tangency Portfolio (Optimal)",
            composition: "Portfolio Composition",
            w_rf: "RF Weight",
            w_risky: "Risky Weight",
            w_a: "Asset A Proportion",
            w_b: "Asset B Proportion",
            expectedReturn: "Expected Return",
            totalRisk: "Total Risk"
        },
        chart: {
            x: `Risk (Standard Deviation ${greek.sigma}) %`,
            y: `Expected Return (${greek.mu}) %`,
            cml: "Capital Market Line (CML)",
            frontier: "Efficient Frontier",
            tangency: "Tangency Point",
            target: "Your Target Portfolio"
        },
        intuition: {
            title: "The Separation Theorem",
            lines: [
                "1. The investment decision is split into two independent steps (two-fund separation).",
                "2. Step One: Identify the Tangency Portfolio, which has the highest Sharpe Ratio.",
                "3. Step Two: Combine that optimal portfolio with the Risk-Free Asset (rf) based on risk tolerance.",
                "4. The CML represents all possible combinations between rf and the Tangency Portfolio.",
                "5. Any point on the CML is superior to any point on the Markowitz frontier (except tangency).",
                "6. The Sharpe Ratio is the slope of the CML and represents the 'price of risk'.",
                "7. Borrowing: If you seek higher risk than tangency, you borrow at rf to invest more than 100%.",
                "8. Lending: If you seek lower risk, you keep part of your capital in the risk-free asset.",
                "9. All rational investors should hold the same risky asset proportions (the tangency).",
                "10. The difference between profiles is just the relative weight between liquidity and total risk.",
                "11. The CML simplifies the investment universe from a complex curve to a straight efficient line."
            ]
        },
        labels: {
            switchLanguage: "Cambiar a Español",
        }
    }
};
