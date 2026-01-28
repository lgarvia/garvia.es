const greek = {
    mu: "r",
    sigma: "σ",
    rho: "ρ"
};

export const translations = {
    es: {
        title: "Markowitz: El Poder de la Diversificación",
        subtitle: "Relación Riesgo-Retorno con 2 Activos",
        inputs: {
            asset1: "Activo A",
            asset2: "Activo B",
            return: `Retorno Esperado (${greek.mu}) %`,
            risk: `Riesgo / Volatilidad (${greek.sigma}) %`,
            correlation: `Correlación (${greek.rho})`,
            settings: "Configuración de Activos"
        },
        simulator: {
            title: "Simulador de Pesos",
            weightA: "Peso A (%)",
            weightB: "Peso B (%)",
            resultRisk: "Riesgo de Cartera",
            resultReturn: "Retorno de Cartera"
        },
        formulas: {
            title: "Modelo Matemático",
            return: `E[Rp] = wA·${greek.mu}A + wB·${greek.mu}B`,
            variance: `σp² = wA²σA² + wB²σB² + 2wAwBσAσB${greek.rho}`
        },
        results: {
            mvp: "Cartera de Mínima Varianza (MVP)",
            mvpRisk: "Riesgo MVP",
            mvpReturn: "Retorno MVP",
            diversificationLabel: "Beneficio de Diversificación",
            weightA: "Peso Activo A",
            weightB: "Peso Activo B",
        },
        chart: {
            x: `Riesgo (Desviación Típica ${greek.sigma}) %`,
            y: `Retorno Esperado (${greek.mu}) %`,
            tooltip: "Cartera",
            mvpLabel: "MVP",
            longOnly: "Solo Largo",
            shortSelling: "Venta en Corto"
        },
        intuition: {
            title: "¿Por qué la diversificación?",
            lines: [
                "1. Si ρ = 1, los activos se mueven igual. Es el único caso sin beneficio de diversificación: una línea recta.",
                "2. Si ρ < 1, la curva se desplaza a la izquierda: el riesgo de la cartera es menor que la media ponderada de sus activos.",
                "3. El beneficio máximo ocurre al minimizar la volatilidad conjunta, creando la Cartera de Mínima Varianza (MVP).",
                "4. Si ρ = -1, la diversificación es perfecta: es posible crear una cartera con riesgo puramente nulo.",
                "5. Las ventas en corto (pesos < 0 o > 1) extienden la frontera, permitiendo buscar retornos más altos a cambio de mayor riesgo.",
                "6. La diversificación no elimina el riesgo individual, pero sí reduce la exposición a la varianza conjunta."
            ]
        },
        labels: {
            switchLanguage: "Switch to English",
        }
    },
    en: {
        title: "Markowitz: The Power of Diversification",
        subtitle: "Risk-Return Relationship with 2 Assets",
        inputs: {
            asset1: "Asset A",
            asset2: "Asset B",
            return: `Expected Return (${greek.mu}) %`,
            risk: `Risk / Volatility (${greek.sigma}) %`,
            correlation: `Correlation (${greek.rho})`,
            settings: "Asset Settings"
        },
        simulator: {
            title: "Weight Simulator",
            weightA: "Weight A (%)",
            weightB: "Weight B (%)",
            resultRisk: "Portfolio Risk",
            resultReturn: "Portfolio Return"
        },
        formulas: {
            title: "Mathematical Model",
            return: `E[Rp] = wA·${greek.mu}A + wB·${greek.mu}B`,
            variance: `σp² = wA²σA² + wB²σB² + 2wAwBσAσB${greek.rho}`
        },
        results: {
            mvp: "Minimum Variance Portfolio (MVP)",
            mvpRisk: "MVP Risk",
            mvpReturn: "MVP Return",
            diversificationLabel: "Diversification Benefit",
            weightA: "Weight Asset A",
            weightB: "Weight Asset B",
        },
        chart: {
            x: `Risk (Standard Deviation ${greek.sigma}) %`,
            y: `Expected Return (${greek.mu}) %`,
            tooltip: "Portfolio",
            mvpLabel: "MVP",
            longOnly: "Long Only",
            shortSelling: "Short Selling"
        },
        intuition: {
            title: "Why Diversification?",
            lines: [
                "1. If ρ = 1, assets move together. It's the only case without diversification benefit: a straight line.",
                "2. If ρ < 1, the curve shifts left: portfolio risk is lower than the weighted average of its assets.",
                "3. The maximum benefit occurs by minimizing joint volatility, creating the Minimum Variance Portfolio (MVP).",
                "4. If ρ = -1, diversification is perfect: it's possible to create a purely zero-risk portfolio.",
                "5. Short selling (weights < 0 or > 1) extends the frontier, allowing for higher returns at the cost of higher risk.",
                "6. Diversification doesn't eliminate individual risk, but it does reduce exposure to joint variance."
            ]
        },
        labels: {
            switchLanguage: "Cambiar a Español",
        }
    }
};
