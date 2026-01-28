export const translations = {
    es: {
        title: "El Balancín de Macaulay",
        subtitle: "Duración como centro de masa de los flujos",
        inputs: {
            coupon: "Cupón Anual (%)",
            maturity: "Vencimiento (años)",
            yield: "TIR / Yield (%)",
            nominal: "Nominal",
            settings: "Configuración del Bono"
        },
        seesaw: {
            fulcrumPos: "Duración Macaulay (años)",
            price: "Precio Actual (PV)",
            years: "años",
            legendCoupon: "Cupón (PV)",
            legendPrincipal: "Principal (PV)",
            balancePoint: "PUNTO DE EQUILIBRIO"
        },
        table: {
            year: "Año",
            cf: "Flujo (CF)",
            pv: "Valor Actual (PV)",
            weight: "Peso (w)",
            contribution: "Contribución (t · w)",
            total: "TOTAL",
            formula: "Fórmula de Macaulay:"
        },
        intuition: {
            title: "¿Cómo funciona el balancín?",
            lines: [
                "1. Cada flujo de caja es un peso colocado en su fecha exacta.",
                "2. La magnitud del peso no es el flujo nominal, sino su Valor Actual (PV).",
                "3. El punto donde el balancín se equilibra es la Duración de Macaulay.",
                "4. Si subes el cupón, los pesos del principio pesan más y el apoyo se mueve a la izquierda.",
                "5. Si subes el vencimiento, añades pesos a la derecha y el apoyo se aleja.",
                "6. Si subes la yield, el 'viento del descuento' encoge más los pesos lejanos, moviendo el apoyo a la izquierda."
            ]
        },
        labels: {
            switchLanguage: "Switch to English",
        }
    },
    en: {
        title: "Macaulay's Seesaw",
        subtitle: "Duration as the center of mass of cash flows",
        inputs: {
            coupon: "Annual Coupon (%)",
            maturity: "Maturity (years)",
            yield: "YTM / Yield (%)",
            nominal: "Face Value",
            settings: "Bond Settings"
        },
        seesaw: {
            fulcrumPos: "Macaulay Duration (years)",
            price: "Current Price (PV)",
            years: "years",
            legendCoupon: "Coupon (PV)",
            legendPrincipal: "Principal (PV)",
            balancePoint: "BALANCE POINT"
        },
        table: {
            year: "Year",
            cf: "Cash Flow (CF)",
            pv: "Present Value (PV)",
            weight: "Weight (w)",
            contribution: "Contribution (t · w)",
            total: "TOTAL",
            formula: "Macaulay Formula:"
        },
        intuition: {
            title: "How does the seesaw work?",
            lines: [
                "1. Each cash flow is a weight placed at its exact date.",
                "2. The weight's magnitude is not the nominal flow, but its Present Value (PV).",
                "3. The point where the seesaw balances is the Macaulay Duration.",
                "4. If you increase the coupon, the early weights become heavier, moving the fulcrum left.",
                "5. If you increase maturity, you add weights to the right, pulling the fulcrum further away.",
                "6. If you increase the yield, the 'discount wind' shrinks far weights more, moving the fulcrum left."
            ]
        },
        labels: {
            switchLanguage: "Cambiar a Español",
        }
    }
};
