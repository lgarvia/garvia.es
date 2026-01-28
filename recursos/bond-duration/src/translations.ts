export const translations = {
    es: {
        title: "Duración y Duración Modificada",
        subtitle: "Sensibilidad del precio de los bonos",
        inputs: {
            nominal: "Nominal (Fijo)",
            coupon: "Cupón (%)",
            frequency: "Frecuencia (pagos/año)",
            maturity: "Vencimiento (años)",
            yield: "TIR / Yield (%)",
            calculate: "Calcular",
        },
        results: {
            price: "Precio del Bono",
            macaulay: "Duración Macaulay",
            modified: "Duración Modificada",
            approximation: "Aproximación ΔP/P",
            currentYield: "Yield Actual",
            newYield: "Nuevo Yield",
            years: "años",
            tangent: "Aproximación Lineal (Tangente)",
            originalPrice: "Precio Original",
            predictedPrice: "Precio Estimado (Lineal)",
            actualPrice: "Precio Real (Curva)",
            convexityEffect: "Efecto Convexidad (Error)",
            timeline: "Visualización de Flujos de Caja",
        },
        chart: {
            title: "Relación Precio vs Yield (Convexidad vs Tangencia)",
            yieldAxis: "Yield (%)",
            priceAxis: "Precio",
            deltaY: "Cambio en Yield (Δy):",
            zoomLevels: {
                micro: "Micro (±2.5%)",
                standard: "Estándar (0-12%)",
                macro: "Macro (0-40%)"
            }
        },
        intuition: {
            title: "Intuición en 10 líneas",
            lines: [
                "1. La duración es la sensibilidad del precio ante cambios en los tipos de interés.",
                "2. Si los tipos suben, el precio del bono baja (y viceversa).",
                "3. La Duración Modificada nos indica el % de cambio en el precio ante una variación del 1% en los tipos.",
                "4. A mayor cupón, menor duración (el flujo de caja llega antes).",
                "5. A mayor vencimiento, mayor duración (más riesgo de tipo de interés).",
                "6. La fórmula ΔP/P ≈ -Dmod · Δy es una aproximación lineal (línea recta).",
                "7. El precio real del bono tiene curvatura (convexidad).",
                "8. Los bonos con mayor duración son más volátiles y sensibles.",
                "9. En cambios grandes de tipos, la aproximación de la duración subestima el precio real.",
                "10. Es la herramienta fundamental para la inmunización y gestión de carteras de renta fija."
            ]
        },
        labels: {
            switchLanguage: "Switch to English",
        }
    },
    en: {
        title: "Duration & Modified Duration",
        subtitle: "Bond price sensitivity",
        inputs: {
            nominal: "Face Value (Fixed)",
            coupon: "Coupon (%)",
            frequency: "Frequency (pmts/year)",
            maturity: "Maturity (years)",
            yield: "YTM / Yield (%)",
            calculate: "Calculate",
        },
        results: {
            price: "Bond Price",
            macaulay: "Macaulay Duration",
            modified: "Modified Duration",
            approximation: "Price Change ΔP/P",
            currentYield: "Current Yield",
            newYield: "New Yield",
            years: "years",
            tangent: "Linear Approximation (Tangent)",
            originalPrice: "Original Price",
            predictedPrice: "Predicted Price (Linear)",
            actualPrice: "Actual Price (Curve)",
            convexityEffect: "Convexity Effect (Error)",
            timeline: "Cash Flow Timeline",
        },
        chart: {
            title: "Price vs Yield Relationship (Convexity vs Tangency)",
            yieldAxis: "Yield (%)",
            priceAxis: "Price",
            deltaY: "Yield Change (Δy):",
            zoomLevels: {
                micro: "Micro (±2.5%)",
                standard: "Standard (0-12%)",
                macro: "Macro (0-40%)"
            }
        },
        intuition: {
            title: "Intuition in 10 lines",
            lines: [
                "1. Duration is the price sensitivity to changes in interest rates.",
                "2. If rates rise, the bond price falls (and vice versa).",
                "3. Modified Duration tells us the % price change for a 1% change in rates.",
                "4. Higher coupon means lower duration (cash flows arrive sooner).",
                "5. Longer maturity means higher duration (greater interest rate risk).",
                "6. The formula ΔP/P ≈ -Dmod · Δy is a linear approximation (straight line).",
                "7. The actual bond price has curvature (convexity).",
                "8. Bonds with higher duration are more volatile and sensitive.",
                "9. For large rate changes, the duration approximation underestimates the actual price.",
                "10. It is the fundamental tool for immunization and fixed income portfolio management."
            ]
        },
        labels: {
            switchLanguage: "Cambiar a Español",
        }
    }
};

