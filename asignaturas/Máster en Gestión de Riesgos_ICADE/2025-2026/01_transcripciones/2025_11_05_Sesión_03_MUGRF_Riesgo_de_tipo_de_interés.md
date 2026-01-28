# 🧾 **Informe de Sesión – 5 de noviembre de 2025**

**Duración:** 2 h 25 min  
**Asignatura:** Riesgos Financieros  
**Profesor:** Luis Garvía Vega  
**Temas tratados:** Teoría de la información (Shannon), entropía, riesgo de tipo de interés, duración y duración modificada, convexidad, valoración de bonos, curva de tipos, riesgos financieros, contexto macroeconómico actual (EE.UU. y Europa).

Sesión realizada después de [[2025_11_05_NYU_Foundations_of_Finance_Session_20_Ficha]]
. En NYU les expliqué la duración y aquí volví a repetir la explicación.

---

## 🎯 1. Objetivos de la sesión

- Comprender **qué son las finanzas** desde una perspectiva esencial: _gestión del futuro incierto a través de la información_.
    
- Introducir la **teoría de la información de Shannon** y su vínculo con el riesgo y la previsión financiera.
    
- Analizar en profundidad el **riesgo de tipo de interés**: cómo los cambios en los tipos afectan al precio de los bonos.
    
- Calcular y **entender la duración y la duración modificada**, y su papel como medida de sensibilidad.
    
- Diferenciar entre **valoración, riesgo de crédito y riesgo de mercado** dentro del marco general de gestión de riesgos.
    
- Anticipar los temas siguientes: **curva de tipos, política monetaria e inmunización de carteras**.
    

---

## 🧩 2. Ideas centrales

### 🔹 Finanzas = Confianza + Futuro + Información

- Las finanzas se dedican a **gestionar el futuro incierto**, no a predecirlo.
    
- Lo que permite hacerlo es la **información ordenada**: cuanto más orden (menos entropía), mejor capacidad de anticipar escenarios.
    
- Se introdujo la **teoría de la información de Claude Shannon (1948)**:
    
    > La información es una medida del orden. La entropía mide el grado de incertidumbre o desorden en un sistema.
    

### 🔹 Información y Entropía

- Cuanta más entropía (desorden), **mayor incertidumbre** y más difícil es predecir.
    
- Cuanta más información relevante, **menor entropía** y más capacidad de gestionar el riesgo.
    
- Ejemplo práctico con series numéricas: un conjunto predecible requiere menos bits de información que uno aleatorio.
    

---

## 💹 3. Bloque técnico: Riesgo de tipo de interés y duración

### a) Valoración de bonos

- **Precio = Valor actual de los flujos futuros**  
    ( P = \sum \frac{C_t}{(1 + r)^t} )
    
- Si **sube el tipo de interés (r)** → el **precio del bono baja**.
    
- Si **baja el tipo de interés** → el **precio del bono sube**.
    
- Este efecto es **inverso y no lineal**, de ahí la importancia de medir su sensibilidad.
    

### b) Derivadas y sensibilidad

- Se repasó el concepto de **derivada** aplicado a precios y rendimientos.
    
- La pendiente de la curva precio–tipo de interés mide **cómo cambia el precio del bono ante variaciones en el tipo**.
    

### c) Duración de Macaulay

- **Duración ≠ tiempo**  
    Es la **media ponderada del plazo de los flujos de caja** del bono.
    
- Interpreta **cuán sensible es el precio del bono a cambios en los tipos de interés**.
    
- Fórmula conceptual:  
    [  
    D_M = \frac{\sum t \cdot PV(C_t)}{P}  
    ]
    

### d) Duración modificada

- Ajusta la Macaulay por el tipo de interés actual:  
    [  
    D_{mod} = \frac{D_M}{1 + r}  
    ]
    
- Indica el **porcentaje aproximado de variación en el precio del bono por cada 1% de cambio en los tipos**.
    
- Ejemplo trabajado:  
    Si ( D_{mod} = 4.38 ),  
    entonces un aumento de 1% en los tipos → caída ≈ 4.38% en el precio del bono.
    

### e) Convexidad

- Introduce la **segunda derivada**: corrige la linealidad aproximada de la duración.
    
- La relación entre precio y tipos **no es una línea recta sino una curva convexa**.
    
- La duración modificada **aproxima**, pero no captura del todo, esta curvatura.
    

---

## 🧮 4. Factores que afectan la duración

|Factor|Efecto sobre la duración|Explicación|
|:--|:--|:--|
|Plazo al vencimiento|↑|Cuanto más largo, más sensible el bono|
|Cupones (cupón rate)|↓|Cupones altos devuelven antes el dinero|
|TIR / rendimiento (yield)|↓|A mayores rendimientos, menor duración|
|Tipo de bono|Cupón cero = duración = vencimiento|Sirve de referencia pura|

---

## 🏦 5. Aplicaciones prácticas

- **Gestión bancaria:**  
    La duración permite igualar los plazos de activos y pasivos para **evitar desequilibrios** cuando cambian los tipos.  
    → Ejemplo: _Silicon Valley Bank_ colapsa porque su duración de activos (bonos a largo plazo) era mucho mayor que la de sus pasivos (depósitos a corto plazo).
    
- **Renta fija ≠ sin riesgo:**  
    Aunque los flujos sean fijos, el precio es variable con los tipos.  
    Se puede **ganar o perder dinero** con bonos según el contexto de tipos.
    

---

## 🌍 6. Bloque complementario: Curva de tipos y riesgos

- Introducción a la **curva de tipos** (yield curve): relación entre el plazo y la rentabilidad.
    
    - Normal (positiva): más plazo → más rendimiento.
        
    - Invertida: suele anticipar **recesión** (ejemplo 2006 → crisis 2008).
        
- Mención a **política monetaria** y a los tipos de interés oficiales (Lagarde, Powell).  
    Se enlazará con detalle en la próxima clase.
    

### Tipos de riesgo repasados

|Tipo|Definición|
|:--|:--|
|Mercado|Cambios en precios, tipos o divisas|
|Crédito|Incumplimiento del emisor (ratings: S&P, Moody’s, Fitch)|
|Liquidez|Dificultad de vender un activo sin pérdida|
|Operativo|Fallos humanos o tecnológicos|
|Estratégico / reputacional|Riesgos derivados de decisiones o imagen|

---

## 🧠 7. Conceptos y anécdotas didácticas

- “Las finanzas son la ciencia de la **confianza en el futuro incierto**”.
    
- “La información ordena el caos. Sin orden, solo hay ruido.”
    
- “Si sube el tipo de interés y no sabes qué pasa con el precio del bono… ¡te tiro algo a la cabeza!” 😄
    
- Ejemplo histórico: **Silicon Valley Bank**, **Lehman Brothers**, **curvas invertidas**.
    
- Conexiones con la **física** (entropía) y la **teoría del caos**: desorden, probabilidad, incertidumbre.
    

---

## 🧾 8. Material complementario

- **Excel**: simulador de duración y duración modificada (compartido en clase).
    
- **Diapositivas**:
    
    - “Riesgo de tipo de interés” (Luis Garvía)
        
    - “Gestión del riesgo” (Antonio Mota)
        
- **Referencias teóricas:**
    
    - Claude Shannon (1948), _A Mathematical Theory of Communication_
        
    - Macaulay, _The Measurement of Interest Rate Risk_
        
    - Fabozzi, _Fixed Income Analysis_
        

---

## 📚 9. Próximas sesiones

|Fecha|Tema previsto|Objetivo|
|:--|:--|:--|
|12 nov|**Política monetaria y curva de tipos**|Entender el impacto de los bancos centrales sobre la estructura temporal de los tipos|
|19 nov|**Inmunización de carteras**|Aplicar duración y convexidad a la gestión del riesgo en bancos|
|26 nov|**Swaps y derivados de tipos**|Extender la gestión del riesgo a instrumentos sintéticos|

---

## 🧩 10. Para los alumnos

### ✅ **Tareas**

1. Repasar fórmulas de duración y duración modificada.
    
2. Reproducir el ejemplo del bono con Excel y observar la variación del precio cuando el tipo cambia del 4% al 5%.
    
3. Buscar un ejemplo real de **curva de tipos invertida** y explicarlo en 5 líneas.
    
4. Leer las diapositivas de **Antonio Mota** sobre riesgo de interés y crédito.
    
5. Preparar dudas sobre **convexidad e inmunización** para la siguiente clase.
    

### 💡 **Claves cognitivas**

- “Ordenar información es reducir entropía.”
    
- “La duración mide sensibilidad, no tiempo.”
    
- “Renta fija no significa rentabilidad fija.”
    
- “Gestión del riesgo = gestionar el tiempo.”
    

---

¿Quieres que te prepare también la **ficha visual para los alumnos** (versión breve tipo “resumen de WhatsApp” con emojis y puntos clave) para acompañar este informe?


# Transcripción
5 de noviembre de 2025, 7:15p.m.

2 h 25 min 44 s

No vamos a Ah, mira esto me lo esto se le he hecho una copia al a un capitán que he conocido hoy del Ejército, ese Eh. Pero lo de hoy lo de hoy ha sido curioso, me dice luego, al final jeje no torturo a nadie de broma, primero ha dicho que lo que sí y luego.  
¿Además, ese señor y la ironía, no?  
A ver, Ah, voy al sabía, yo voy al señor, son voy al señor Sannon Sannon Sannon. Le suena bien salón y la teoría de la información de salon.  
Vale, voy para atrás. Por un lado, mira, esto lo repetiré y esto lo repito mucho, pero es el máster que tenemos. ¿Qué son las finanzas? Por supuesto, la adivino sí vale, fenomenal. ¿Qué son las finanzas? Confianza.  
Vale, tengo una esto, ya estoy haciendo un spoiler, pero me da igual porque como no, o sea mis ya tengo asumido que mis diapositivas van por un lado y yo voy por otro y luego nos juntaremos en algún sitio. ¿Qué es qué qué son las finanzas? Las finanzas tienen que ver con el futuro. ¿Me puedes predecir el futuro? Sí, sí que dice que sí. Andrés dice que sí, perfecto, me alegra porque.  
Vídeo del adivino sí, sí, sí, sí, siempre, siempre, siempre, siempre, a ver.  
Es francés, es francés, los tengo a todos concentrados, es un adivino. ¿Usted puede predecir el futuro?  
¿Entendéis?  
¿Se puede predecir el futuro?  
Feliz y la del viernes.  
La primera hola. Prevenir a base de información.  
Ahora no, ahora no se puede o no se puede. A ver, vamos a salir del hoyo. ¿Andrés a veces te tendré que ignorar, EH? Sí, perdón.  
No, no, no se puede, vale, es un vídeo. Me encantan los vídeos de menos de de 20 segundos. ¿Os podéis en algún momento a Juan Carlos, al rey, al de las memorias?  
A ver, no, a ver y hay alarmas para que salgan. Y luego hay políticos que dicen.  
¿Se puede predecir el futuro? No, no se puede *****. María Andrea, no se puede gestionar.  
Sí.  
Tiraban el ojo si puedes.  
Se puede precio de futuro, no se puede gestionar de un futuro incierto, absolutamente sí. A qué se dedican las finanzas a gestionar el futuro incierto es eso de gestionar, pues modelos.  
Probabilidad. ¿Yo no sé si mañana voy a estar vivo o no, pero si quiero cubrir la eventualidad de de calle y de que mis hijos puedan seguir estudiando, qué hago? Contrato un seguro de vida. ¿Yo no sé si mañana podré coger el tren o no y claro contrato un seguro asociado con el tren o con el viaje, sí o no? Claro. Las finanzas.  
¿De qué tal de predecir el futuro?  
¿Cuál es la herramienta básica que se que tenemos para predecir el futuro? Eso lo veremos otro día. Eso tiene que ver con mercados, con acciones, pero fundamentos y análisis técnicos. Tiene que ver con la hipótesis del mercado deficiente.  
Cuando tú hablas del análisis técnico, estás hablando de los precios históricos cuando hablas de análisis, fundamentalmente toda la información pública es disponible, pero entiendes que los precios históricos son información claro y la información pública disponible de información y hasta la información privilegiada de esa información.  
¿Cómo predecimos el futuro?  
Con información, información, información. Al final salen en los 40 que dijo que la información.  
No es que no sé cómo me la dijo, a ver, me me olvido de.  
¿Me olvido de esto? Teoría de la información de Shannon. Lo que decía es que la información es orden.  
O sea, cuanta más y mejor información tenemos, menos necesidad tenemos de información, cuanto más orden tenemos, menos menos desorden hay. O sea, entendéis que si tenéis la casa ordenadísima parece todo sencillo YY no invertís tiempo, pues al final él lo que decía es que la información.  
Hay un concepto en física que es la entropía. La segunda ley de la termodinámica dice que la que la que la entropía aumenta, o sea que si tú rompes un jarrón, el jarrón se rompe, o sea, la tendencia naturaleza. El desorden es la información, orden dentro de ese desorden.  
La teoría.  
Pero habla de muchas cosas de transmisión de la información.  
Es la teoría, voy a buscar entropía.  
Para que me la teoría de la información de salon define la entropía de salon como una medida de la incertidumbre o aleatoriedad en un conjunto de datos. Cuantifica la cantidad mínima de bits necesarias para codificar la información de manera eficiente y es máxima cuando todos los resultados son igualmente probables.  
¿A ver, os voy a poner 10 números, vale?  
¿10 números YY tenéis que ser capaces de memorizarlo, vale, vais a ser capaces o no?  
Esto es lo que dice la teoría de la cuantifica, la cantidad mínima de bits necesaria para codificar la información de manera eficiente y es máxima cuando todos los resultados son igualmente probables, mayor incertidumbre y mínima cuando los resultados son predecibles, menor incertidumbre. Entendéis que eso que lo podéis memorizar de forma muy sencilla, porque todos los dígitos, todos los números, eran el mismo.  
Es un Estado con muy poca, muy poca información. Yo que os he dicho sí, os hablo de lo que se ve y de lo que no se ve. ¿Cuál es la obsesión constante que tengo? Información, información y información y dentro de todo el ruido porque hay mucho desorden. Es lo que trato de buscar.  
Aquella información que es más valiosa, aquella información que hace que el desorden sea menor, que nos permita saber cómo tenemos ordenadas las cosas para poder gestionar un futuro incierto. ¿Me explico, entendéis que de China depende de los tipos de interés? La inteligencia artificial China van de la mano. China tiene hoy por hoy mejores modelos de inteligencia artificial.  
¿Listo? ¿Esto por qué? Eso estoy hablando de la teoría de Shannon.  
A ver, porque me he acordado de ello. No sé por qué, pero es un fin en sí mismo. Tiene que ver con gestión de riesgos y tiene que ver con información y es algo que debéis de saber. ¿Dicho lo cual, hoy de qué vamos a hablar?  
Oye, este es un señor.  
Te vas a venir un día a darle la charla a Los de mi Master de riesgos Juan Ayora Juan Ayora.  
Es el otro 12 coma este que trabajaba en resolución de conflictos. Es ahí donde.  
¿Estás, no? ¿Este es un señor hoy, qué tal tu primer día de trabajo? Bastante bien, ya en casa, que hoy ha empezado a trabajar en el Banco de España en resolución de conflictos.  
Trabajaba en KPMG, imitan mal. ¿Sí, justo le he silenciado, Eh? O sea.  
¿Oye, pues genial conoces a Juan?  
¿Conoces a Juan?  
Ganas de decirle ahora es el momento de conoces al abogado pero no discúlpame.  
Tócate los *******, que me dice seriedad, este Andrés me lo ha, lo ha dicho él, ha sido. Ha sido Ángel. Gracias y ya es porque te lo mereces, y discúlpame. O sea, algo habrás hecho a ver, tengo aquí 3 diapositivas.  
¿Tengo 3 diapositivas, perdón, tengo dos diapositivas que son mías y luego la que me ha mandado Antonio Mota que os dé y no sé cuál, si tengo varios días con Antonio Mota, os ha hablado ya de de riesgo de riesgo, de tipo de interés?  
¿Ah, pues vais a tener más, EH? ¿Vale?  
Pues Ah, bueno, pues si solo lo habéis tenido una entonces o con no.  
No me esto es lo que os tengo que contar.  
Que os mentiría si os dijera que me lo digo tampoco tampoco.  
Ah, vale, vale, vale, vale, Ah, vale, vale, vale, vale, no, no, no os preocupéis, no os preocupéis. Y luego yo ya he puesto. Os voy a mandar, no me he equivocado.  
¿Hola, hola, azar, cerrar pestaña, cierro esta qué día es hoy?  
O sea, pone 3 de octubre la un problema de, o sea, cómo a ver, reenviar, reenvío esta o reenvío, esta y os reenvío. ¿Esta vale?  
¿Y sois máster y sois quienes sois estos no?  
Estos 6 perfecto a ver, y ahora tengo ya abierta esta.  
A ver, os, mentiría si os dijera que la he leído pero os mentiría si no os dijera que la he mirado, que la mire por encima antes de ver que está controlado.  
A ver, una vida haciendo cosas no es antes de sagete a un profesor que llevan años dando lo mismo, pues cada año va metiendo un poco. ¿Va metiendo un poco y cuando te quieres dar cuenta tienes un tochaco, EH?  
Antonio Mota no lo han dado a ver y luego ahora me concentro.  
Política monetaria este es PowerPoint, que ya está y el riesgo de tipo de interés ya está. Ya me lo descargo.  
Os quiero hablar de las dos cosas, os quiero hablar tanto de política monetaria como de riesgo de tipo de interés. ¿Antes de eso, con Susana gracias, habéis visto valoración de renta fija? Sí, sí.  
La duración nos ha hecho plantear la ecuación de.  
Vale, vamos para allá.  
Vale, lo voy a hacer tipo Alejandro primero vale.  
No, a ver el precio del mono es, de momento, me seguís.  
De momento me seguís.  
Ey.  
¿César vale ahora derivadas, os acordáis cómo se derivan las cosas?  
No.  
¿Eh?  
¿Esto, que es igual?  
A ver, esto es 1, o sea, si tú tienes, estamos hablando de si tú, cuál la pendiente de esta recta.  
La pendiente, esto es 45° la tarjeta no, ya no. ¿11, si tú subes 1 en x cuánto sube el IY si sigue subiendo 1 cuánto sube? Ves que siempre es 1.  
Es la derivada, pero que no necesita saber derivada pero, pero un poco, o sea, la derivada.  
De culo.  
¿Va qué?  
La derivada de x cuadrado.  
¿Dos x esto Qué quiere decir? Que si tú tienes x cuadrado la la derivada va aumentando cada vez más y la derivada de 2 X es dos.  
¿Vale, sigo, sigo rápido, ya está la derivada, 27, 7 x a la sexta, vale? No te preocupes, vamos bien, vamos bien, la derivada de.  
Sigue siendo 1, esto es dos X.  
Perdón 2, 2 X no dos x más 5 Vamos, si es s, es. S pues si es K es k, da igual x más. S más K sí, si esto es 7.  
7277666 vale 6. A ver, sigo, *****, me está costando la Eh 1 partido por x más 3 elevado a 7, todos sabéis que esto es x más 3 elevado a menos 7.  
Bien.  
¿Pues si esto es menos, 7 cuánto es?  
No el 7 baja, o sea 7 baja menos 7 baja menos 7 por menos 7 +1. − 8. ¿Vale, sí, esto es conmigo, vale? Pues por un lado.  
Sí, tengo la derivada de de.  
A ver y cada vez.  
P partido por 1 más R elevado a t sobre p me 6. Sí, sí.  
Derivada de C partido por 1 más. R sobre t esto aquí es igual a menos. T bajo en t me 6 por C por 1 más R elevado a t más 1 me 6 dos.  
Pues esto, la derivada de de partido por 1 más r elevado a t con respecto de p es igual a menos c por c 1 más r elevado a c me seís.  
Qué qué voy a hacer, ver cuánto cambia el precio con respecto al tiempo voy a derivar.  
¿Si sube, si sube el tipo de interés, qué pasa con el precio de los bonos?  
¿Rubén sube el precio de los de los tipos de interés qué pasa con el precio de los bonos?  
Vale, te parió con cariño.  
No, no.  
A ver, resetéate resetéate.  
Bueno, por favor. Si entiende esto que no hace caso.  
Esta fórmula personal.  
A ver, valor actual es igual a valor futuro partido por 1 más r elevado a p.  
De verdad.  
Me estás mintiendo, a ver tienes 10, €100 en el Banco hoy, hoy €100 vale los metes al 10%. Cuánto tienes dentro de 1 año tienes 100 por 1 más el 10%, que es 110.  
¿Cuánto vas a tener dentro de 2 años?  
110 otra vez por 1,1, que es 110. O sea, tienes dentro de 2 años, tienes 100 + 10 más el 10% de 10, o sea, 121 121. ¿Qué es esto? No por lo tanto, esto es valor actual.  
¿Cuánto es el valor actual? Saliendo una cantidad de futuro partido por 1 más el 10% elevado a dos, por ejemplo. Esa fórmula es esta.  
¿Vale y dicho lo cual, si sube el tipo de interés y esto se hace más grande, qué pasa con el precio?  
Me voy a machacar con esto, le preguntaré de aquí a que se acabe nuestra vida, te veré dentro de años estarás forrado y te diré si sube el tipo de interés, qué pasa con el precio de los bonos baja y si bajas situaciones. ¿Qué pasa con el precio de los bonos?  
¿Y como me la tienes diciéndomelo al revés, te tiro algo a la cabeza, Eh?  
¿Vale, voy a derivar esto en función del otro, vale?  
Sube.  
¿Cuánto? Esto es un menos menos. ¿Cuánto precio cuándo cambia perdón, cuándo cambia? R cuando cambia el tipo de interés, cuánto cambia de precio cuando cambia de interés menos.  
1. Sepa 1 se elevado a es 1.  
De.  
Ah menos.  
Más más.  
De momento.  
Pero.  
Adiós.  
Un, permítame.  
No, el tipo valor nominal 1000 más, pues 50505050 1004 cupones dime una frase de cuando.  
Perfecto, voy a hacer, voy a calcular el precio del vol vale 1 + 2 pregunta, si pongo en cuatro, todos sabéis de lo que estoy hablando pensando en Fernando y el Excel.  
Control C Ay. ¿Este atajo de teclado lo veis todos? No sabéis que con el control salto vale y la suma. ¿Cuál es el precio?  
¿1044 si la tasa de descuento es 5, si si he pasado del cuatro al 5, si sube el tipo de interés, qué pasa con el precio del bono?  
¿Y qué si tengo cupones del 5% y la tasa de descuento es del 5? ¿Cuál va a ser el precio de este bono?  
¿A la padre lo minar bien, listo? ¿Vale? Ahora todos entendéis que el precio de este bono es la suma.  
Estos cupones.  
¿Cuánto es? ¿Cuánto de este precio es este cupón?  
¿Sí, y esto cuánto es, un cuatro y pico por ciento, no?  
Suena.  
Un cuatro y pico por ciento y 4, 4, 4, 4 y 82 el el valor futuro perdón, el valor actual de los €50 pagados más adelante cada vez es el más pequeño, pero es que al final tengo más el último cupón.  
La pregunta cuando hablo de riesgo de tipo de interés, a mí Antonio Mota lo que me ha dicho es que lo cuente de riesgo de tipo de interés, me ha dado las diapositivas YY Os voy a contar y me ha dicho, ya he hablado de usted bien de política monetaria, tengo diapositivas mías de política monetaria y diapositivas mías de riesgo de tipo de interés, vamos a cubrir eso.  
Y al mismo tiempo. ¿Pero, qué es el riesgo tipo de interés?  
De los tipos de interés y de de los tipos de interés que se vuelvan.  
¿El riesgo de interés es qué pasa cuando cambia el tiempo de interés?  
¿Qué pasa, perfecto? ¿Y cuando hablamos de la duración la la pregunta es cuánto?  
¿Cuánto vale, cuánto y?  
¿Y veis que cuanto mayor sea el vencimiento?  
Más cuanto mayor sea el vencimiento, más va a cambiar el precio. Cuando cambian los tipos de interés.  
Si me van a pagar los €100 mañana ya puede cambiar mucho el tipo, interés que estaré cerca del par si en cambio me van a pagar dentro de 10 años si cambia bastante el tipo de interés, el precio hoy cambiará bastante, se entiende, no vale si solo hubiera bonos, cupón cero.  
Sabéis todo lo que es un bono cupón 0 o k 1 bono cupón cero es un bono en cupones.  
Quién más no estudia económicas o finanzas, Ángel.  
¿Ah, vale?  
Sí, yasmín.  
¿Vale?  
¿Tú vas a estudiar, vale?  
A ver, quiero quiero identificar a los que no lo sabéis, para dirigirme a ellos, utilizaré, utilizaré un poquito, no te importa, no perfecto un bono cupón cero es un bono sin cupones, si solo hubiera bonos cupón cero no me tendría que, o sea cuanta más, cuanto mayor es el vencimiento, más es el riesgo de tipo de interés. ¿Me seguís?  
El problema es que tengo cupones.  
Y como tengo cupones, necesito saber qué impacto tienen los cupones en el precio. ¿Qué voy a hacer teniendo estos pesos?  
¿Esto qué es? Este valor sobre el precio no este valor sobre el precio. ¿Qué voy a hacer? Pues la media ponderada con el tiempo voy a ver considerando cuál es el peso de cada cupón. ¿A qué tiempo es equivalente? ¿Me seguís multiplico multiplico este peso por 1? ¿Este peso por 2 *, 3 * 4 y por 5 me seguís?  
¿Y ahora qué voy a hacer sumo?  
Sumo esto, estos números de aquí estos números no significan nada, pero este número sí que es la media ponderada de estos tiempos sobre perdón, sobre el precio del bono. ¿Cuánto es este 1? ¿Cuánto es este dos sobre este porcentaje? ¿Cuánto es este dos? ¿Me seguís?  
Este bono, este bono en relación con el tipo de interés, es equivalente a un bono que tiene.  
Una duración de 4,5 años. Si alguien me dice que duración es tiempo, lo Mato.  
¿Tomato? ¿Tengo que decir que la duración son 4,5 años pero qué es la duración? ¿Porque digo, lo Mato?  
Vale que quiero que se os quede, que no es tiempo.  
¿Qué es la duración? ¿Qué es la duración, de qué estamos hablando? ¿Hoy que qué me ha dicho Antonio Mota que tengo cambio riesgo de tipo de interés? ¿Qué es la duración a medida del riesgo de tipo de interés?  
¿Veis? O sea, 4,55 años. ¿Qué es la duración y es el riesgo de tipo de interés es la duración, es cuánto va a cambiar mi precio? Cuánto va a cambiar mi precio si cambia el tipo de interés y estaréis diciendo cuánto va a cambiar, 4,5 años un poco raro, es decir, el cambio en años no.  
Pues os lo voy a escribir aquí, luego os mando el Excel e pero os lo voy a escribir aquí. Esta es la duración, se llama también mcauly, no sé escribir mcauly mcaulay.  
¿Duration no sé cómo se escribe Mac, pido disculpas, Eh? Mira Mac esta es la duración que son 4,5.  
Años visto.  
¿Y cómo se escribe?  
Si me lo si me lo buscas y me lo deletreas.  
Macao, le di el postoide.  
Ya se ve más.  
Duración de macule si pones duración de agua, Eh Mcaulay.  
¿Gracias, qué quiere decir esto?  
Sí cambia el tipo de interés coma.  
Este bono se el precio del bono, el precio del bono se comportará igual que el precio de.  
¿Un bono?  
Pon cero, pon una.  
Paturi con un vencimiento.  
¿Con un vencimiento igual a 4,55 años listo?  
¿Qué es la duración 4,55 años cuánto cambia el precio del bono cuando cambia el tipo de interés? ¿Y si es 4,55 años? Qué quiere decir, que si cambia el tipo de interés se comportará igual que un bono cupón cero de 4,55 años estéis, sí.  
¿Vale?  
¿Esto lo habéis visto? Pues sigo con la historieta. Os estoy presentando piezas del culo y ahora las vamos a ir juntando todas. ¿Me seguís por aquí? ¿Sí, vale, qué voy a hacer ahora? Voy a hacer aquí varios cambios.  
Voy a cambiar el signo aquí.  
Y además, voy a multiplicar todo por 1 más. R, vale.  
Si no, todo esto es positivo, no 1 por multiplico por 1 más. ¿R veis como el denominador sube?  
Partido por 1 +, 6 + 2 por partido por 1 R cuadrado más 3 por C por 1 más. R al cubo más.  
Sí, y contigo aquí tiene que ser un y lo ha matado, ni ha dejado de la cura el spoiler. ¿Spoiler man, me seguís, qué tengo aquí? 1 por.  
De.  
Hay más vale, voy a dividir esto entre el precio.  
¿Y voy a dividir esto entre el precio, no? Si divido esto entre el precio que tengo, el peso del primero, si divido esto entre el precio que tengo, el peso del segundo.  
¿Está siguiendo?  
¿Qué tengo a la derecha?  
Digo.  
Claro, sí, sí. Yo pensaba que lo habéis dicho, no se me ha quedado igual exactamente. Es lo que he hecho aquí, que es este peso.  
¿Este peso qué es?  
Este.  
O sea, esto parece por el precio y lo multiplico por 1, y la suma es la duración. ¿Lo veis, veis? Vale, vuelvo aquí arriba, vale, voy a borrar el precio, borro esto.  
Voy a acabar.  
Borro esto.  
Eso es la vibración, todo ese chorizo es lo que hemos calculado. Vale, voy a poner en este lado.  
Estoy, estoy.  
Hasta bien, pues voy a reescribir esto.  
De forma aproximada, de forma aproximada y de forma aproximada en diferencial. ¿Ya no es, quiero saber, toca, vale? Esto ya es un incremento.  
¿Cuánto cambia el precio?  
¿Estoy reordenando lo que tengo cuánto cambia el precio en por?  
¿Cuánto cambia el precio en porcentaje?  
Aproximadamente el precio en porcentaje cambia.  
Menos Rubén, menos.  
Menos e partido por 1 más. R por lo que cambie el tipo de interés, sí.  
El día.  
No de pies. ¿Te están hablando en diferentes unidades, lo que dice que alguien mide es el pie y si te dicen que 1 mide el otro 1?  
Pues ya lo que lo que os quiero decir es.  
Esto de aquí que es esto se llama dación pica.  
¿No es mi deudación modificada?  
¿Cuánto cambio, qué porcentaje voy a calcular la modificada de esta y os voy a escribir lo que dice?  
¿Dudas?  
De nuevo modifica, vale la duración modificada.  
La duración modificada es la duración partido por 1 más.  
La Gil la tasa de descuento es que no sé cómo se dice Gil en español y yo siempre en español, la llamo Gil.  
¿Cómo se llama?  
No.  
No lo sé, 4,38.  
¿Por ciento vale?  
4,38%.  
Ahora.  
A ver.  
Hasta aquí bien, bueno, no os tengo que poner esta es esta, la voy a poner en amarillo.  
¿Y esta la voy a poner en verde, vale?  
¿Esta la voy a poner en verde, vale? Sí, cambia el.  
No. ¿O lo pongo bien, vale? Si sube el tipo de interés un 1%, si sube el tipo de interés 1% coma el precio.  
Del cono caerá.  
Un 4,38.  
No un o unos 7 o bien aquí esto es.  
De precio del bono, aproximadamente un 4,3.  
¿Andrea, tienes por qué?  
No, no, no, a ver. ¿Era aproximadamente para que?  
Pero.  
Bueno.  
Bueno.  
Ahora os voy a explicar porque es aproximadamente, pero quiero que sepa que la acción modificada es exactamente 4,3818 1, 4. ¿O sea, me me explico o no me explico?  
Os explico a qué me refiero y me voy a ir aquí.  
¿Voy a coger el mismo, vale?  
Voy a intentar manejar el Excel rápido.  
Voy a a ver.  
¿Qué ejemplo teníamos?  
¿Qué porcentaje? ¿Un 4% no? Si la tasa de descuento es un 4%.  
¿Interés, no?  
Y aquí voy a calcular el precio. Habéis visto cómo calculo el precio del bono antes lo voy ahora a calcular de otra forma. Ahí, en el PV, en el present value, van e v n a V n a.  
¿Al 4%, punto y coma de esto y lo fijo, vale? ¿Cuánto es?  
Pues el precio que haya calculo antes. ¿Lo veis, pregunto, y lo tenéis que adivinar si el si el tipo de interés, si la tasa de descuento es un 0%, cuál es el precio del bono?  
Esta actividad.  
¿A ver si es si es el 5%, si es el 5%, cuánto es? ¿Si es el 5%, cuánto es? Si es el 5%, es 1000.  
¿Si es el 0%, cuánto es?  
¿Si el Banco te da 0% y tú pones 100, cuánto vas a tener dentro de 1 año?  
¿Por lo tanto, si la tasa de descuento es cero, cuál es el precio del bono hoy?  
Pues calcúlalo.  
2.  
Estoy sumando dinero. ¿Si el tipo de interés es cero, lo que hago es sumar, cuánta pasta voy a recibir? Pues toda la pasta que reciba.  
Raquel, lo que te está pasando ahora en la cabeza mola mucho estás pensando y además eso es aprendizaje.  
No, no, de verdad te doy a vender 1250 y lo que voy a hacer es esto más 1 no, perdón, esto +0,01 el 1, esto lo pego aquí.  
Me encantan las conversaciones que estéis teniendo.  
Hay una crisis y bajan los tipos de interés. Está concentrado al 0%, pues te suben los tipos, o sea, te suben los precios de los bonos. Ah.  
Para que no este.  
Este es el precio hoy, al que lo compras. Si el tipo de interés.  
Yo os estoy enseñando aquí la relación que tenemos entre el precio y el tipo de interés. Rubén.  
¿Si sube el tipo, si sube el tipo de interés, qué pasa con el precio luego?  
No es la de.  
¿Veis?  
¿Veis que la relación no es lineal?  
Veis que la relación no es lineal, es convexa, hay una cosa que no vamos a ver hoy creo, es la convexidad, la convexidad. ¿Qué es la segunda derivada? ¿Por qué digo que la duración modificada es una aproximación?  
Porque estoy aproximando esta curva con una línea recta.  
¿Y no es una línea recta, me seguís, me vuelvo para atrás, voy a poner un ejemplo para que veáis duración modificada es este es el precio del bono vale?  
Estoy quedando sin colores. ¿Este es el precio del bono para esta tasa de descuento, vale?  
¿Y qué voy a hacer?  
Pues subir el tipo de interés.  
¿Al 5%, vale?  
¿Si el tipo de interés sube al 5%, el precio aproximado?  
¿Ver la definición, si sube el tipo de interés un 1%, el precio del bono caerá aproximadamente un 4,38 no? Por lo tanto, sí, sí.  
Subo del cuatro al 5%.  
El nuevo precio es el precio antiguo menos.  
Esto por.  
¿El precio partido por 100 por porcentaje vale?  
¿Es cuánto es 998? ¿Esto es una aproximación, por qué? Porque estoy aproximándolo por una línea. ¿Cuál es el precio real?  
¿Cuál es el precio real? ¿Pues calculo el V n a al el V n a al 5% de qué?  
Estos flujos de caja, que ya sabéis que son 1000 pavos listo.  
Duración y duración modificada. ¿Qué me dice de la duración? ¿Cuánto cambia el precio del bono cuando cambian los tipos de interés? La duración me da el dato del riesgo de tipo de interés listo el próximo día.  
Os voy a hablar de inmunización, pero para hablar de inmunización tenéis que tener claro, claro qué es la duración y el próximo día repasaré la duración y lo que yo quiero es que vaya ir construyendo sobre lo anterior, o sea, no os quiero volver locos de momento, con la duración tenéis más que suficiente, tenéis aquí un ejemplo, y yo supongo que en las diapositivas habrá bastantes más ejemplos.  
¿Ahora vemos cosas, vemos lo de Antonio Mota y vemos lo mío, sí, por qué esa pregunta?  
O sea, como que lo veo muy como lo pasa llegar a sacar todo muy bien. ¿Si controlas, viendo justo a ver la renta fija, habéis visto algo de la valoración de acciones? Vale, pero o sea, si.  
¿Al fin cómo? Valoro la renta fija.  
¿Cómo? ¿Valoro de la renta fija, lo estoy haciendo, tengo flujos de caja futuros, los calculo al valor actual y llego a un precio no? ¿Por qué la renta fija se llama renta fija?  
Porque los pagos futuros son fijos. Cuidado, el precio puede cambiar porque cambia el tipo de interés hasta que me 6. ¿Cuál va a ser problema? ¿Cómo va?  
A ver cómo valoro acciones ahí. Hay 1000 métodos, pero al final es lo del adivino de antes. ¿La acción tiene que pagar un dividendo?  
Yo puedo valorar acciones calculando el valor actual del futuro dividendo, pero qué tengo que hacer para saber el futuro del dividendo inventármelo y el dividendo es constante, es como una perpetuidad, sí, pero eso lo vais a ver con Susana la cuando vosotros veis. Valoración acciones.  
Como si estuviera contando una película de tiros que es muy divertido, pero yo espero no coger una pistola en la vida, o sea, que está muy bien, que tú lo ves, pero en cambio cuando se habla de renta fija es un poquito bastante más aburrido, pero es absolutamente por.  
Porque con la inmunización que es lo que vamos a ver, se inmuniza.  
Los pasivos de un Banco suena un Banco que se llama Silicon Valibank sí.  
Qué pasa con sic y con vallebant, que el el próximo día lo vemos con más detalle. Subieron los tipos de interés, ahora lo vamos a ver cuando hablemos de cuando hablemos de tipos de interés menos de 1 año después de la pandemia, subieron los tipos de interés menos de 1 año, más de 400 puntos básicos más de un 4%.  
Genial. ¿Subieron, EH Rubén? ¿Los tipos de interés?  
400 puntos básicos. Ellos tenían bonos avance.  
¿Bonos que era renta fija ellos seguro que iban a cobrar, pero qué pasa si sube? Pero Mogollón y al mismo tiempo, después de la pandemia, en la pandemia que hicimos todos, ver series de Netflix, el precio de las acciones de Netflix sube después de la pandemia que pasa con Netflix y empiezan a despedir gente.  
Necesitan liquidez. Se juntaron dos factores, subieron los tipos de interés por la inflación, el precio de los bonos bajaron y hubo clientes que para despedir a sus trabajadores necesitaron liquidez. Empezaron a pedirles pasta. ¿Qué tuvieron que hacer los de porque tardaban 10 años de cientos de problema? No pierden un duro, pero si necesita dar dinero a su a su, a sus clientes.  
Tienen que vender los bonos y tienen que reconocer en balance una pérdida del 30%. Eso fue una gestión del riesgo. Me pasa horrible, horrible, pero antes me decían lo de yo te decía tipo de interés del 0%. Hemos estado muchos años con tipo de interés del 0%. Estoy explicando esto y lo de sí que con valido es que en nuevos ejemplos los reales en el en la última época.  
¿O sea, al final gestionar bien un Banco es a ver, es saber qué es la duración, un Banco?  
Es saber qué es la duración y saberlo bien, y luego cuando sabes que es la duración, pues sigues trabajando. O sea, no solo es esto, sino es trabajar más con ellos.  
Si Susana os os os va a explicar la duración.  
¿Ah, bueno, pues entonces ya lo explico yo y tan mal listo?  
¿A ver la duración, voy a las diapositivas, vale?  
¿Dónde están mis diapositivas? Sí y luego me las he descargado, hoy voy a las diapositivas, voy, esta es la que se llama cero dos riesgo de tipo interés que me están dando ganas de abrir el bueno.  
¿La la paso rápido, las paso rápido y luego vamos viendo, Eh? No me importa ir para adelante, luego para atrás.  
La matemática financiera el valor actual. ¿Os suena os suena? Calcula el valor actual de cosas, pues lo calculas, calcula. Qué pasa si subo la tasa de, si si paso del 8 al 12 el valor actual baja y llega un momento que pasa a ser cero.  
Sabéis todo lo que es la TIR ey perfecto, perfecto, me ha me ha a ver el valor actual según os fijáis que el valor actual y el precio del bono son primos hermanos.  
¿Separados al si subo el tipo de interés, llega un momento, si estoy hablando de que hay una emisión que la tasa de descuento se hace cero, yo teniendo el precio cuando calculo la give la Gil, si tengo los cupones, si tengo el precio, cómo calculo el tipo de interés? ¿Cuál es la fórmula de ser que uso tati?  
¿Tengo el precio de un bono y tengo los cupones cómo calculo la la?  
¿El rendimiento cómo calculo el rendimiento para TI vale renta fija, que es un bono?  
¿Esto es en clase, falta alguien? ¿Yo creo que no, no, perdón, lo siento, EH? No quería.  
¿Ángel, no, Ángel Ángel no lo ha entendido, no lo has, no lo has percibido? ¿Ha pasado algo? ¿No te has enterado, tío? A ver, tiro otro cuento. Espera Ángel un mono con dos cupones.  
¿Me hace mucha ilusión enseñarlo, lo siento, Eh? Voy siempre con un bono.  
¿Es publica, EH?  
No.  
Ah, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, vamos, para ello. ¿Qué es un bono?  
A ver, I o u es un pagaré pagaré cómo se dice en inglés I o u Youtube.  
Es un grupo de música u 2 u 2 en inglés.  
Youtube.  
Bueno, no, no, no, no, no, no, no. Youtube, Youtube, yo también.  
Youtube es también.  
Tú, tú también. I You you es I you, que también significa I you you. Yo te debo. *****, lo tienes aquí 1 I 1 o y 1 u en inglés se dice I you you, yo te debo, yo te debo, es culpa de gay en Chile 3.  
Ya pares en Marcos, hay pares.  
¿Lo de?  
Es un contrato.  
¿Pagaré es contractual la nota en las no?  
¿Cuándo?  
¿Las letras, o sea, las letras de cambio, letras de cambio, Eh, claro? O sea, en la Universidad es alucinante que se estudia la letra de cambio, sí y no. Se estudia el bitcoin y luego es posible que mis hijos probablemente no vayan a dar un cheque en su vida.  
Y en Estados Unidos hay sitios donde se ha visto lo que es un cheque no vale, vale. I are you el el, el emisor, el emisor, el el acreedor, o sea.  
¿El el inversor, el emisor?  
Nominal los cupones, listo palabras. Y luego esto es un cupón que si o sea esto es un cupón del ferrocarril.  
Tipos de tipos de tipos de tipos de diferentes. Esto es una cosa que quiero que entendáis.  
¿Cuanto más complicado es un bono, qué problema tengo?  
Solo eso. ¿Imagina usted ya lo quiero vender, EH?  
Yo estoy buscando una palabra.  
Si es el estándar, cuanto más estándar, más.  
Cuanto más estándar, más vídeo, lo veis que como al final nos interesa que sea toda la deuda pública del planeta igual estándar, porque yo soy un inversor y voy a me da igual que sea deuda pública española, italiana o portuguesa.  
¿Que si por lo que sea hay un riesgo en el Mediterráneo, pues algo, pero si no lo hay, entro si dependiendo o sea de 1000 maneras, por ejemplo, tú, o sea, por un lado, cosas que están escritas aquí en función del riesgo de crédito, vale?  
¿Y es lo de crédito, sabéis todo lo que es y es lo de crédito? ¿Tú puedes clasificar el el pasivo en deuda maxenior o Max junior xanines Junior estáis siguiendo todos, vale? Deuda senior es la deuda que en caso de.  
Concurso de acreedores en caso de quiebra cobrantes es.  
Pero cuidado con preferente, eso es a ver en castellano. Se han de la otra subordinada preferente. Cuidado porque las preferentes eran equity.  
Imaginaos.  
Un erecto, si tú no quieres relaciones De hecho.  
El elector.  
Pero bien.  
De esta.  
Y de que sean competiciones.  
Es un.  
¿No? ¿Cuál es el problema que es para liquidez?  
Castilla Cancelona.  
Si tú te casas, señor Lola.  
No. A ver, no, pero.  
O sea en bits, estoy hablando de.  
De.  
¿Seguimos, puedes hacer bonos con?  
O sea.  
Y de su baja en un opción de compra televisor y no.  
Con cupones de.  
Tiene ahí ocurre, o sea, dependiendo de la moneda hay, hay bonos.  
Estoy en un contrato para una especial, puedes hacer bonos que en el contrato del Bon te he dicho que no puedes repartir dividendos si el servicio de la deuda, o sea, si lo que tienes para pagar a los bonistas.  
Poner cláusulas para que el bono sea más complicado. El problema es que si quieres vender en un mercado secundario a ese bono tienes que dar unas que la gente te de paso. Conte, tu vida y al final cuanta más con ellos, él te fija o nos.  
Importante.  
¿Y tú compras, qué riesgos hay?  
Básicamente solo están esos, o sea, si tú compras un bono, tienes el.  
Con el tipo de interés.  
¿De memoria, si suben los tipos de intereses, no, por qué? Pero ya te si suben los tipos de interés. ¿Puede ver los cupones, entendéis si son los tipos de interés?  
Yo estoy en líquido.  
Mira el riesgo de tipo de interés per se, no es ni bueno ni malo.  
¿Si sube el tipo de interés, qué pasa con el precio de los bonos que cae?  
¿Interés tiene dos partes, 1 es riesgo de precio?  
¿La si sube el tipo de interés es malo el riesgo de reinvers?  
Voy, Credit risk, CORE default risk. Riesgo de crédito, ahora lo vemos porque ahí aparecen.  
¿Me parece si digo riesgo de crédito, en qué? ¿Qué pensar si digo riesgo de crédito, en qué tenéis que pensar? Riesgo de crédito, bonos.  
¿Basura quién ha dicho basura? Vale caliente, te acercas, Jaime.  
A ver, eso sigue siendo basura.  
Bueno, basura. ¿Cómo sabéis que un bono es basura? ¿Dónde tenéis que mirar para ver que un bono es basura? Rating, rating, rating, riesgo de crédito. ¿Que tenéis que decir automáticamente rating y si digo rating, qué empresas tenéis que decir?  
Speed. ¿Cuidado no es el Speed five hundred el Speed five hundred es c a p M es SP, pero *****, perdonadme, el SP es que doy clases americanos? El SP 500 es un índice que eso tiene que ver con el C a p M de Susana, el SP Standard and Standard and Poor's, Moody's y Fitch son de rating vale.  
¿Sigo con mis diapositivas tipos de a ver, a ver riesgo de crédito, vale? Esto es lo que acabo de contar, que ahora volveremos a riesgos. Tipos de bonos.  
Letras del tesoro, suenan a todos. ¿Y qué son las letras?  
¿Y qué son las letras?  
¿Es es un book cero en Estados Unidos son los evils IT Vs YT vs los t vs son letras y los bonos y obligaciones?  
¿Más largo plazo visto sigo, hay bonos?  
Mucho.  
Ven todo.  
¿Está doblada?  
Vale resta into mature.  
Lo podéis tener gente que lo traduzca de inglés.  
Puedes cenarme.  
Porque la hago en alemán, no, no me lo a ver. Perdón por lo que.  
No soy voluntario en prisiones y parte de la árabe lo aprendo en la cárcel. ¿O sea que si me lo que tu examen sé dónde lo corregiría? O sea, tendría, me tendría, o sea, sería un trabajo divertido. Tengo ahí algún amiguete, tengo a Hassan y Suleiman.  
Que estar en el módulo cuatro. Eso tienen 2021 años, o sea, tengo sí esto se llegaron en en patera con 12 años cada vez que pongo, o sea, si alguno es muy de Vox. Y piénsalo y dice, lo de los menas que no lo digan ante mí.  
Porque el problema es que menos son menos, o sea, aunque tengan 80 años, los menores que me da igual.  
No, no es el momento de reírse ni de no entendéis que son gente que son menores que con 12 años, algunos los mandan para acá. Mi hija tiene 12, no, no lo sé. Bueno, no sé cuántos tiene, pero 1213, la pequeña que no lo sé. Andrés nació en el 2013.  
¿Me me estáis siguiendo? ¿Lo que digo? ¿No? Que al final pues que es muy ******, que no puedes responder en árabe en alemán tengo a alguien por ahí en alemán y luego le haces una foto y te lo traduce, pero no me jodas. Antes de en gallego, tú en gallego sí he usado gallego.  
Tú cántalo, qué bueno eres, tío. Sigo duración a ver el primer orden, la derivada. ¿O sea, esto, qué es? Aquí tenéis un precio bueno, cupón cero.  
Y.  
¿Rubén, qué pone aquí?  
Es son.  
Lo que quiere decir.  
Perfecto. Luego el tiempo, o sea, maturity matters, cuanto más es el vencimiento, a ver esto qué es lo que lo entendáis, que tiene que ver con la complicidad, con la segunda derivada, vale.  
Yo tengo un bono por un vencimiento de 1 año.  
¿Eh? Sí, tengo un bono con un vencimiento en 1 año, sube el tipo de interés un 2 por 100, estoy ******.  
Lo tengo con un vencimiento de 2 años, tuve el tipo de interés, lo mismo estoy prácticamente el doble de ****** que si tuviera 1 me 6.  
Tengo un bono de 20 años.  
No fuera del mercado, no, a ver. Tengo un bono de 20 años, estoy no es a lo que voy, no, no.  
No, a ver, tengo un. Tengo un bono de 1 año, estoy ******, tengo un bono de 2 años, estoy prácticamente el doble de ******, tengo un bono de 20 años, vale, estoy bastante más ******.  
¿Y ahora tengo un bono de 20 años, vale? Y tengo un bono de 21 años.  
Lo que te estoy diciendo es que si tengo 1 de 1 y 1 de 2 sí que estoy en doble de ******, pero cuanto más tiempo vaya pasando.  
¿El impacto va a ser, o sea, voy a seguir estando más ******, pero cada vez me va dando más igual, o sea, si tengo 1 de 20 o de 21 me da ese 30 igual si tengo 1 de 20 o de 30?  
Me da igual, el cambio es la segunda derivada, es lo que os estoy diciendo, eso tiene que ver con la complejidad.  
Sí, sí, sí, eso es lo del Excel, pero cuidado con el Excel, no hay tiempo. El Excel es tipo de interés y precio, pero si hubiera tiempo es una gráfica muy parecida.  
La cola, por eso es conversidad y en mi tesis.  
Cuando defendí la tesis, hubo dos palabras que dije en la primera, en los primeros 10 minutos era una era, una función normal con las era una distribución normal, con las colas largas, una cópula entre funciones.  
Como si tuviera 15 años, lo dije en la, estuve defendiendo todo serio. Tal tal una, planteamos una cópula entre 2 funciones y las colas muy largas o algo así, pero era una normal que tenía, no sé cómo se no sé, Alejandra o con julianes, pero hay palabras.  
Se va para un lado que se va por otro, pero como si tuviera 15 años.  
Pero me he acordado de la tesis y de la popular y se llama Copular. ¿Dos funciones que se mezclan, se llama copular, funciones listo, la convexidad, sigo, relación? ¿Ah, mira esta es esta, Eh?  
Ya no me acordaba, esta es mía.  
¿Entendéis lo que está ahí puesto no derivación, esto es esta es la fórmula que has hecho? Esta es la que tenéis en la pizarra.  
Esto es eso contado.  
¿La duración?  
Y luego la duración, otra vez que ya la tenemos listo. A coli duration, un ejemplo y co Duration otro ejemplo vale y una cole es muy larga. Otro ejemplo, luego, esta es de la macoly ya la modificada a la.  
Acción modificada y aquí tenéis un ejemplo, o sea y cambio, o sea, os he puesto el este un ejemplo, y ahí tenéis otro. ¿Si queréis hacer ejemplos, si queréis, pero paso, o sea, si queréis ejercicios, tengo ejercicios, os los puedo matar, vale?  
¿Con soluciones, vale? ¿Me han dado un pollo, pero que como te lo estoy explicando dice, entiendes?  
Pero tengo una cosa super random, a ver una cosa, podéis entrar y salir de la clase cuando os dé la gana.  
Yo con vosotros tengo mucha confianza, la confianza da asco y me lo hago de corrido y además paro, sigo, sigo, o sea, me yo así estoy cómodo, pero si queréis, si hay alguien que está con el mono de cigarro, vale esto que os voy a enseñar es superrandom y al pobrecito le da un guantazo.  
Le he pegado aquí no haya sindicalistas, ayer hubo un.  
A ver, ayer hubo hubo 1 en LinkedIn, ayer volví a Cartagena con Miguel Ángel, que es un amigo mío, me contacta 1 de LinkedIn.  
No, por lo menos voy a hablar.  
Con mi tío Santiago.  
Me llama 1 de LinkedIn, que no conozco de nada y le y me pide un modelo de hago un post de qué pena no tener el ordenador para enseñarlos. Hago un post de que si la en los años 20, perdón. En el año 2000, o sea, he hecho 1 con lo de que si no mira yo burbuja, pues lo de ahora mismo.  
¿Este es 1 que hace un comentario por ahí, dice, es un modelo de riesgo de está tarado? ¿Un tarado? Me dice es un modelo de riesgo que no sé qué que no sé cuánto le digo a ver, mandan, me meo en el veo su perfil en LinkedIn y está estudiando Ingeniería Industrial y zoade, luego está en es concejal de Lucena.  
¿Pero concejal independiente odia a Vox YYY lo de sindicalistas, o sea, le resulta que le llamo, o sea, le está mal? Yo le llamo.  
Y le digo, juega fuerte bro. ¿O sea, le conocí ayer, Eh? ¿Quién se ha ido? Se ha quitado, le he echado.  
Este tonto es tonto.  
¿Este es tonto? Buenas noches. ¿Buenos días, señor, Eh? Ah, no, pero este es Miguel Ángel, que se ha ido a la me ha llamado a Miguel Ángel ya le conoceréis, es con el que me fui a Cartagena y es que se ha ido, Buenos días, señor, y me flipan los riesgos, Buenos días, yo me he enganchado, nunca, llegó la foto, la de Miguel Ángel bueno.  
A ver, se ha enfadado conmigo caro, me daban a mí el premio Alpedrete y me dice Invertir en futuros. En este libro hablan, me dice.  
Me manda este libro invertir en headphones.  
Y Miguel Ángel contrerascal cuadrado con su tema le digo en este libro hablan de Fórmula 1 y creo que todavía hay que conducir y los fundamentos básicos, y me.  
Me dice, me dice, me manda esto me manda, esto empieza para y yo le digo, le hablé de que estoy grabando todas mis clases y le mando todas las clases de en guayu. ¿No? No, no, no, no, no, no le mando todas las clases de en guayu.  
Y le digo, descárgate todos los archivos, súbeselos a Google Note buque leme y pregúntale lo que quieras.  
El curso es está sin acabar, voy por renta fija.  
No es el nuestro, Eh, es otro de los de Nueva York, me dice increíble.  
Claro, aquí tienes un breve resumen del curso y luego lo que concepto clave.  
¿A a qué porcentaje es del final? ¿Me dice le mando la foto de offsidians, le estoy contestando en en segundo, vale le digo, pues voy por aquí y sin con tal esto es lo que me queda, vale? Nice, la parienta me va a matar, pues no sé por qué le va a matar, pero bueno, me da igual, lo normal es que alguien que empieza desde cero se líe con esto, porque mezcla mucho, esto es GPT, vale.  
¿Y él me empieza a mandar libros, me manda 1, otro que si queréis luego os lo mando, me los he descargado por si yo qué sé, me manda libros y le digo, Paco, me acabas de mandar 150 megas de información que apenas has trabajado? Yo te he mando 700 KS de información que he hecho yo se descojona. Si lo he entendido, gracias por el Consejo, estoy llegando ya al Paco para que lo veas claro, esto me lo he hecho. Gemini también EH para 700 KS.  
Es lo que yo te mandé menos de un mega. Esto significa que es poco peso porque son resúmenes y transcripciones ya procesadas, lista para usar notebook LM 150 Megas. Lo que tú me has mandado 150 veces más, eso es información en bruto, sin filtrar, sin seleccionar, sin adaptar el proyecto, yo te doy material para trabajar, tú me has devuelto material para estudiar, no para avanzar, me dice. ¿Cuándo es la próxima clase? Yo le digo hoy por la tarde a las 5.  
Me dice, entiendo y ahora sí lo entendí. Te agradezco infinito los de Machine, le digo pues *****, te lo agradezco, me mando ******, pues te lo agradezco. Esto lo has escrito, simplemente quería equilibrar la malanza y le digo, pues sin darte cuenta la has roto, je, je te agradezco, corazón que da igual que me he descargado los libros, vale, habéis visto, es online.  
Me dice, hoy la clase es online.  
Me lo ha subido todo y además, Miguel Ángel lo está oyendo, lo importante es seguir construyendo, que da igual. ¿Me dice que si es online, vale, dónde? ¿Dónde dónde lo he dicho eso? Ah, me lo miro todo antes de las 5.  
Da igual.  
Ten cuidado conmigo que se esto es un dato, chicos, una cosa a partir de ahora empiezo reuniones o paramos hasta las 5 o sin esto el Grupo y al leeros. Ahora comentamos estoy haciendo el CSI espera, espera, espera. Yo es que eso no lo había leído.  
Y ahora me encaja, claro que es online el pesado que el Online me dice luego me dice, luego, aunque vienen, podrías compartirme los problem sets. Yo le comparto los problem sets.  
¿Dónde está el problem SET del tema 5 y solución?  
Enviar.  
¿Y reenviar estos son los de la duración, estos son los de renta fija o lo mando con soluciones? Vale, esto es, Moore murph vale, aquí está ahí.  
¿Esto, pues lo mando, vale bien, vuelvo a vuelvo aquí, sigo que viene la tragedia, vale?  
¿Bueno, no entiendo, mira me dice, buenas tardes, Luis, qué tipo de Excel preparo a las 4:30? H, a las 4:30. ¿H me dice, qué tipo de le digo? No entiendo lo que dices en la última clase decías que había que preparar una Excel calculadora, no sé de qué me estás hablando. Recomendaciones para la clase 5, traer un Excel calculadora digo, creo que te has equivocado, no estás en mi clase en Nueva York.  
¿Ya, ya entiendes que ahora voy a tener clase, dar clase a alumnos que tienen dudas y tú no eres 1 de ellos? Cobro por ello, vete a un restaurante y pídeles que te inviten a cenar. En ningún momento quería faltarte al respeto. ¿No lo has hecho? ¿Estás de mala idea? Ja, ja es una clase y no te has explicado, no te has respondido, no hay ningún problema.  
Espero que vaya bien. Gracias. Un saludo Miguel Ángel, que me lo he cargado.  
No, no, no es, es otra. La de las cuatro, la de la clase a las 4:30 h, se las paso.  
A ver que se las mando que que no me puedo estar a mandárselas, y además son mías.  
Me la ha puesto a ver, pero yo estaba preparando la o sea.  
¿A ver, bueno, vuelvo para acá, vale?  
Vuelvo para acá, a dónde quería ir, a que te he mandado los problemas de la duración. A ver, le le he dado todo, no me o sea, a las cuatro, o sea, estoy preparándome, me pide algo, se lo no tengo ningún inconveniente, mandarlo, pero si estás preparado para entrar en una clase es que no había visto lo de que me dice que si era online y no lo y no le he contestado.  
Me he equivocado, Andrés, eso eso creo yo.  
La mano.  
¿A ver, llama, le has encontrado? Es la ***** llama alguien que tengo un iPhone, es que no quiero. Como estoy grabando, llama al 609022870.  
Y si no, 609.  
Dile que si está estresado, sí, 09022870.  
Ellas.  
En el número de la llamada está disponiéndolo entonces hay que filtrarlo bien.  
Sí, sí, sí, sí. Dile que si está estresado de parte de Luis Garbial, Luis Luis.  
No, pero no se.  
Qué bueno, o sea, o sea, vamos por partes, voy, sigo, he hecho, he cerrado las diapositivas.  
No, pero estaba.  
¿Era esta, sí, pero Ah duré, Ah, aquí está vale, vale?  
Bueno, sigo ideas rápido. ¿Cuál es la duración de un mono? Cupón cero.  
¿Yo ha dicho infinito, qué has dicho? Ah, vale, *****, sí, sí, es el vencimiento. ¿Entendí, infinito, no? El vencimiento, la duración de un cupón cero. ¿Qué es la duración, cómo se comporta? Si fuera un cupón cero, qué se puede decir de cualquier bono de la duración de cualquier bono con cupones.  
Que siempre va a ser menor que el vencimiento. ¿Luego qué pasa si la duración del bono con cupones qué pasa, qué pasa con la duración de un mono con cupones? Sí, considerando todo igual el tipo de interés aumenta.  
¿Perdón, el el el cupón rate aumenta, o sea, el cupón se hace más grande si los cupones aumentan, la duración disminuye, me seguís y qué es? Duración, sensibilidad del tipo de interés si el valor del cupón, si tengo cupones, si si estoy comparando porque el el, el valor del cupón no puede cambiar, estoy comparando un bono que tiene cupones de €5 con un bono que tiene cupones de €6 lo cuál tiene una menor duración.  
El de 6, el de 6. Eso es que si digo duración y sensibilidad a luego qué pasa si la TIR, que si si el rendimiento. Si la gin aumenta, si la gin aumenta.  
Los cupones van a los cupones, los cupones que van a pasar pronto van a tener un mayor valor de los cupones a más largo plazo. Me seguís y de allí le aumenta el dinero en el futuro va a valer menos. Por lo tanto, la duración va a ser menor.  
¿Sí, sí, factores que afectan la duración maturity tipo rate la duración? Ah, esta por eso me ha me he metido aquí has sido tú, Rubén, el que me has. No sé si ha sido Diego o Rubén. Tengo un balance de un Banco.  
¿Qué me has preguntado? Tengo un balance de yo quería venir a esta fórmula.  
¿Tengo un un Banco lleno de bonos, tengo una cartera, cómo calculo la duración? Viendo el valor de la cartera entera Pondero veo la duración de cada bono y me hago la media ponderada, o sea, lo que hemos hecho antes pondero todo. O sea, eso es un Excel muy grande.  
Y lo saco, y qué me interesa esto lo vamos a ver el próximo día, cuando hablemos de inmunización, que la duración de mis activos sea igual a la duración de mis pasivos para evitar que pase lo de Silicon Valleybanck.  
¿Y cuál fue el problema que de repente tuvieron que hacer vencimientos? O sea, no es no son vencimientos, sino que hubo un montón de gente que empezó a a retirar pasta pero tenían duración de activos.  
¿A 10 años y sus pasivos pueden descontrolados, entiende más cosas convexidad? La segunda derivada vale esto aquí os acordáis lo que os he explicado de que estás el doble ******, pues es aquí lo tenéis con números.  
¿Sube el tipo de interés del 5 al 6, vale?  
Si comparo si comparo 1 año con dos, pues paso de perder un 1% al dos más o menos.  
Si comparo.  
1 de.  
29,1 de 30, pues paso de perder el el 24 al 24,75 6.  
Y si no comparo 1 de 30, 20,1 de 30. Paso de perder el 17 al 24.  
¿Está entendiendo lo que digo, vale? Sigo.  
Puede estar llamando de gracias, vale hasta aquí bien, vale, empiezo con Ah. Empiezo con la curva de tipos.  
Empiezo con el apuro de tipo.  
Empiezo con la curva de tipo.  
¿Vale, no me la voy a dar, me la me, la hago entera y luego vemos lo de Antonio Mota, rápido, vale?  
De política monetaria hablamos el próximo día no, el siguiente. ¿Habéis hablado con Roberto? ¿Política monetaria? ¿Cuándo y qué os cae?  
¿Y qué os va a preguntar?  
Tipo de interés bueno, lo mismo según me de lo mismo la semana que viene de la política monetaria.  
¿Ayudaros con el examen, os parece? Sí, pero vale, pues la semana que viene hablo de política monetaria y luego la siguiente de inmunización, de balances y de la vale. A ver os.  
¿Y conmigo lo mismo también, EH?  
Puede que sí. Miradlo no, a ver.  
¿Nota, cuando da clase, vale? A ver.  
El próximo día hablamos, pero muy rápido la base, o sea.  
¿Sí, no, pero, pero si esto es esto es un paréntesis que está, o sea hasta aquí de qué está? Hablando, de un bono de duración y de convexidad. ¿Ahora de qué voy a hablar, de riesgo de tipo de interés? Me hubiera gustado antes hablar de política monetaria, pero me da igual. ¿Esto es un resumen y simplemente hay una cosa que se llama base monetaria, os suena la base monetaria?  
Y luego está M 1 de los agregados M 1 m 2, m 3. ¿Eso lo habéis visto al final? ¿La base monetaria es el balance del Banco Central, es lo que imprime el Banco Central y luego el multiplicador del dinero, hace que aparezcan los agregados hasta aquí bien esto por qué está aquí? ¿Porque habla en teoría debería de haber hablado antes de política monetaria que hablaré después y la pregunta es, qué pasa con los?  
Tipos de interés y está, por un lado, el tipo de interés del Banco Central, que la semana pasada habló Christine Lagarde. ¿Es lo que te iba a preguntar, qué dijo?  
Os dejó igual. ¿Y qué dijo Jeron Powel, que habló el miércoles, bajó 25 puntos básicos, luego está el Euribor, luego está la curva de tipos que ahora vamos a ella y este es el tipo de interés del Banco Central, esto podéis ver desde cuándo no lo actualiza?  
Eso lo podemos que es lo que quiero ver con vosotros en directo el próximo día, que además a mí esto me da igual, no actualizarlo.  
Red interés rate.  
Esto os lo he enseñado, no vale, esta me encanta y os lo he enseñado, pues el próximo día lo volvemos a ver. Este es el tipo de interés que esto es.  
Mira, lo han actualizado ayer, no lo o sea hace 2 días no lo habían actualizado. ¿Veis que hay hoy? Es 1 y dos, hay una bajada y dos bajadas. Sí.  
Esto es lo lo que os decía, Silicon Valley. Es esta subida Lehman Brothers fue aquí subieron aquí y Lehman Brothers estalló y en cambio han subido aquí y aquí. Fue Silicon Valley en febrero de 2023, aquí revienta Silicon Valley.  
¿2022 2000, Lehman, Coño, perdón, qué es esta Lehman Brothers? Andrés, un respecto a tus mayores, que soy muy mayor.  
¿Veis? Veis que el error es comprensible. ¿Eso que que me suba al dádi de Ah vale eso? Dale.  
Gracias César, era el momento, necesitaba eso, te lo agradezco.  
Pero debe escribir mucho. Vamos por partes que sí, que no lo he actualizado, resumen. ¿Por qué pongo esta diapositiva aquí? ¿Porque lo que quiero transmitir es que referencia cuántos tipos de interés hay?  
¿Pues si si tú quieres pasta, ahora me dices, si yo te pongo un tipo de interés y negociamos el Euribor, qué es? El mercado interbancario es no es el mercado interbancario, es la media del interbancario, que roiter lo publica cada mañana a las 10. Me seguís, al final hay tantos tipos de interés, como operaciones hay y luego hay referencias de tipos de interés y dentro de las referencias está la curva de tipos. ¿Os suena la curva de tipos?  
El próximo día lo hemos visto. ¿Qué es la curva de tipos? ¿Qué es la curva de tipos? Es el mercado secundario de deuda pública. Cada día que yo creo que la tengo por aquí, aquí está cada día. Esto es el mercado secundario, un día, cada día se venden y se compran muchos bonos con diferentes.  
Vencimientos y si lo pones esos bonos en una gráfica se puede dibujar la curva de tipos, me seguís, por qué estoy hablando de la curva de tipos que de la curva de tipos hablaremos con más detalle porque cada día se construye una curva de tipos, llega fits Moody's y te ponen el rating. Aquí estoy explicando la curva de tipos, y aquí explico como standard and Poor's.  
¿Llega, esta es una curva de tipos y qué te dice? En función del rating que tengas, el spread me seguís. ¿Qué es el spread?  
De esta diferencia es este CAM.  
¿De qué estoy hablando ahora? No de riesgo de tipo de interés.  
Quedando riesgo el crédito 6.  
¿Y al final, qué es un bono basura? Un bono cuyo a ver si este funciona. ¿Sí, sí, sí, sí, todavía que confiar, no?  
Pero.  
A ver si no es aquí, lo busco directamente.  
Modies.  
Rating spin. Esto es lo que está buscando son las 3:00 H igual unas, o sea hay 3 para que no haya una, esto es como las hamburguesas McDonald's y Burger, pero pero no hay una que sea.  
A ver si le da la gana.  
¿Cómo?  
A ver dónde está.  
A ver.  
Estos son las diferentes notas que puede poner Moody's a ver español, esto, España está 9, 9 9 b, b, b, b, b, o sea, cuenta 9 para abajo.  
¿Bien Ángel Andrés Qué Prefieres 1, 8 o 1 7 en otra en un examen?  
A ver, vuelve a saberlo. Vamos a verlo. Andrea, 181919110.  
Un 10 a ver, pero que si sacas Andrea, si sacas un 9 en lugar de un 10 tampoco pasa tanto, sacas un 5 no, no, 1415 no. 151495.  
Ah, no, porque habrías copiado yo yo si le pongo a alguien eso es porque le quiero ver a la o sea. Yo yo he visto alguno, yo lo he hecho dos veces en mi vida, poner 14951 fue y otro no, y 1 fue, y le dije me dice, le pongo el. El está viendo el examen tal, tal, tal y yo mira, o sea.  
¿Y llega un punto, o sea, está revisando el examen y me dice, cuando cojo, me dice esta pregunta y digo, sabes Por qué te he hecho la el Este? Y me dice, no digo a ver si tenías huevos a venir a la revisión, me dice, cómo me dices, eso se intenta indignar un poco y le digo, si quieres de aquí, vamos a ver al rector, al Vicerrector, al no sé qué y me dices como esa pregunta es la de la Wii.  
Y pedí a que yo me diga al antes de de sacar el móvil me salía copia de tera.  
Que no hay que poner 4,95, pero para que fuese a la revisión, pero porque era por eso, porque me decía que él él era así, pero es que si veía que el lector le podía dar más y tal, le suspendía para ir a la revisión y luego ya estoy preocupada hasta la revisión y que ya luego a ver, es verdad que.  
Porque dice, si me ha dejado con un 45 porque no va a jugar, está jugando con.  
A mí me paró la policía y se la hice. ¿Me querían poner una multa y estaba, pues yo le dije, es que solo venís para poner multa? Empecemos no, pero empezamos a discutir y al final.  
La única forma que tenía él que me ganó es la discusión y no me la puso porque yo decía que me paró para ponerme la multa es que me para, es que estáis aquí, o sea, y se enfadó muchísimo. No, no, no me la quitó. No me la puso porque yo lo o sea, mis argumentos eran que que que paraban a.  
¿Resumen, si suspendes es una putada, no entendéis que el coste de 1, 5 a 1, 4, 95 es altísimo? Pues lo mismo pasa con esta frontera de aquí a partir de esta frontera. Bono basura a partir de esto es non Investment Great, es decir, la mayor parte de los fondos.  
Serios y los miran. Hay fondos que solo cogen high Grey, o sea, me refiero dependiendo hay aseguradoras que por ley solo pueden coger.  
¿Vale, pues sigo para allá, sigo para allá, sigo para allá dónde está, dónde está? Llama llama, llama, llama.  
Yes.  
Te te llamo que yo no puedo que estoy grabando la sesión.  
¿Hola buenas, qué tal?  
Muy bien. ¿Qué tal Miguel Ángel, cómo estás?  
Llamar otro.  
Es que a Angeles de Luis Luis, Profesor.  
Pero.  
¿Sabe usted que ha ganado mejor? ¿No sigue aquí en mi cable?  
Luis Gabriel.  
Le iba a decir, ha seguido un poco el grupo ese que tenemos en conjunto, no, hombre, no, Luis.  
Es una evidencia, aconseja. Se ha pirado, se ha parado.  
¿Pues no he compartido con mis alumnos que a las 4:30 H Me ha escrito y me dice que que qué tengo que hacer con un Excel? ¿Y yo le digo, no te entiendo que que qué tengo que hacer con un Excel? Le digo, no te entiendo y luego me ha dicho que es que tenemos la clase a las 5 y digo, a ver mis alumnos, a los que voy a dar clase pagan 60000 pavos por venir a la clase en 6 meses.  
Tú, o sea, yo doy la clase. Me estoy preparando para ellos y tú no estás en esa clase, no sé, no le he. No le he dicho los euros, EH. ¿Simplemente le he dicho, no estás en la clase y luego le he dicho prueba a ir a un restaurante y diles que quieres comer gratis? Sí, sí, sí, es ese. Si mis alumnos están al tanto de todo, sale en todo.  
Llévate un recor, sí, te voy a presentar a Andrés, te tienes que venir aquí a hablarles del aquí, tienes que venir, que son son brutales.  
Este Grupo, el de Isabel.  
Que te están mirando como si fueras retrasado por decir una web con 1 u R l 1, página web que resuelve un problema con una gente tengo tengo 1 que automatiza cosas dos.  
No, yo, yo cogí una plantilla de prestashop y luego lo cogí a medida con Python, sobre todo con PHP. HTML también, si quieres meterle ahí un diseño bueno con CT con PSS, eso también lo sé yo.  
Y el otro lo mismo somos de los expertos.  
¿Es que el otro estaba para atrás, es gallego, EH? No. A ver, está está la última fila. Si quiere hablar que se va para adelante, pero pero más cosas.  
Que no, que no estamos hablando sí era simplemente comentar lo del lo del señor ese lo del señor que conocimos ayer, pues lo ha dicho Andrés estupendamente y creo que le he dado la mano. Le he dado el brazo y me quería violar.  
Lo quería procesar.  
Yo que sé que han que han mirado la transcripción y en la transcripción debería decir, o sea, de la transcripción va con un resumen YGPT, se inventa cosas y me pone de deberes a los alumnos.  
¿Y 1 de los deberes debía de ser un Excel y es calculadora, y él lo quería hacer para ir a la clase preparado, no? Yo le he pasado todas las clases de end y en Nueva York este me dice, estoy aprendiendo derivados. *****, pues antes de derivar lo mismo, saber lo que es un acción, lo que es un bono y le he metido todas las clases para que le pregunte a Google Notebook que le eso he tardado 1 minuto en hacerse.  
Quién le ha preguntado y seguía pidiendo que estaría que pida, pero quería meterse en la clase, me quería procesar, me quería procesar.  
Le me han dado todas las clases y me ha dicho, me ha hecho preguntas que todo está bien y me dice que la clase ya la tengo preparada.  
A las 4:30 h el concejal independiente en el pueblo ese no sé cómo se llamaba, lo cual.  
¿Qué tal, qué tal hoy en la Smart fit? ¿Qué es eso de la Smart fit? ¿Y eso?  
¿Vale, y tú has decido y la has conocido?  
Pues has vuelto a comer gratis. Ah, vale, pero digo que es canapés y vino español con PowerPoint. Sí, sí.  
¿Pues ni tan mal no?  
Ah, bueno, aprovechando que estamos hablando muy rápido, he resucitado al pollo este.  
No, no, no, a este no te estoy hablando ya del Melero.  
Él, él ha estado esta mañana en Barcelona.  
Pues ha debido hablar con alguien, da igual, hablamos luego, vale a ver, chicos, una cosa, aquí vas a venir un día.  
Sí.  
Lo he contado hoy, lo he contado, hoy lo he contado, venga un abrazo. Chao, me ha aspirado, me ha quedado solo, no. Yo tengo este grupo, es solo yo tengo a mi mujer, pero.  
El domingo no.  
Es buenísimo, no le de la gracias.  
Bien la curva de tipos y llegan estos tipos de curva tipos de curva de tipos.  
A ver qué hora es. Vamos bien, tipos de a qué hora te tienes que ir, María, de verdad, porque tú eres la que tienes que coger el el tren más.  
¿No, pero más o menos a qué hora es la idea?  
Ya.  
9:45 H Bueno, da igual, vale, a ver, os paso otra.  
¿Y esta sí que es estoy hablando de la curvéticos, vale?  
Aquí estáis.  
Ay llorando.  
¿A ver, vamos a ver aquí qué tenéis? ¿Aquí? ¿Tenéis el SP 500?  
Que que esto solo se puede entender. Estas subidas solo se pueden entender si miramos m dos que esta os la puse el otro día que la vamos a ver. Cuando hablemos de política monetaria M dos.  
Perdón, M 2 M no, M 0, m 0, 0 3.  
O sea, que estén máximos todos, solo se puede entender con la pedazo de inyección de liquidez que ha habido, eso es que hay que hay dolares que nos salen por las orejas. ¿Dónde está máximo aquí? Pues esto explica un poco, pero.  
Esto de aquí vale el SP 500, sí.  
La curva de tipo la tenéis en la izquierda, qué día Naciste 2002.  
Esta es la curva de tipos el 1 de mayo de 2002.  
Sí.  
¿Le doy a animar, vale, veis? La curva de tipos, cómo va cambiando.  
Sube, esto es una curva de tipos invertida.  
Y aquí lee man is about to happen. Lee man, mirar, mira, mira, mira, Eh, pumba.  
Vamos, vamos a la espera diciembre diciembre dos. ¿A ver, espera mayo de 2019, veis que es?  
Andrés, te estoy esperando. Noviembre, diciembre. Esta es la curva de tipos, la curva de tipos a ver, no le doy a no le doy a la pausa 2006. ¿Cómo es la curva de tipos invertida?  
En 2006, o sea, antes de las caídas, las curvas de tipos suelen avisarnos. ¿Esto por qué estoy hablando de la curva de tipos? Porque estoy hablando del tipo de interés. ¿Estoy hablando de cómo es, o sea, pero hoy no es día de curva de tipos, hoy no es día de política monetaria, hoy es bueno, cupón corrido, sabéis todo lo que es?  
¿Ah, vale, con quién habéis dado de cupón corrido?  
Qué llevo el cupón corrido, que me gusta mucho, no que que tampoco. Bueno, sabéis el el precio limpio precio sucio, qué bien, voy rápido, cupón corrido Ah, mira, YY que Covenant y tal lo de antes vale.  
Esto es para vosotros, que no lo he.  
Cosas que tengo por ahí, lo mezclo, no, esto no, esto es lo mío, lo Antonio Mota o lo voy a por ello. ¿De tipo de interés, qué pasa si cambia el tipo de interés?  
Bueno.  
Pues aquí tenéis un ejemplo en el cual el tipo de interés pasa del 3 al 1%. Yo esperaba sacar un 2% si el tipo de interés sube al 3 en lugar de un dos, tengo 1. − 179 estoy perdiendo pasta y en cambio, si el tipo de interés baja, estoy ganando un 10%, o sea con la renta fija se puede ganar y perder mucha pasta si cambian los tipos de interés.  
¿Aunque sea renta fija, con esta diapositiva que trato de hacer, o sea, el hay gente que piensa renta fija, es seguro?  
¿Uy, eso es correcto? ¿Riesgo de reinversión, riesgo de reinversión, qué es el riesgo de reinversión? Cuando hablemos de inmunización volveré a repasar esto. ¿Vale riesgo de reinversión? Es que yo tengo un bono que paga cupones, tengo un bono que paga cupones y estos cupones para seguir manteniendo la.  
Rentabilidad tengo que reinvertirlos 6.  
Esto es de práctico interés.  
¿Veis? Esto es aprobar el examen y si estás por debajo, suspendes.  
Sigo vale, resumen pumba. ¿Gracias os doy las gracias, voy a lo de Antonio Mota, esto es lo de Antonio Mota, no? Sí.  
No tengo ni idea de la deuda, tiene deuda pública, seguro. ¿Pues yo le pondré una triple A Estados Unidos se le han bajado el rating, EH?  
Bueno, y Estados Unidos, si digo Reserva Federal, perdón, no, si digo gobierno federal.  
¿Qué está pasando ahora en Estados Unidos? ¿Pero vale eso? Eso, eso o sea.  
Satown no satown que que que han llegado al techo de gasto. Los demócratas no han aprobado pasarse el techo de gasto y ahora el Gobierno federal está cerrado desde el 1 de octubre.  
Entendéis que lo que está pasando ahí es curioso, cuanto menos.  
A ver cómo está Francia ahora bairu dimitió, le cornu dimitió pero sigue ahora, o sea, Macron le dijo que siguiera, sigue. ¿Y por qué ha sido bairu? ¿Porque dimitió porque tenía que recortar 40000 millones de de euros si no los ha recortado?  
¿No tengo ni idea qué es lo del reloj? ¿Le he dicho que sí, como que Ah, no lo sabía, pero que hay que hacer recortes gordos, pero 40000 millones respondiendo a tu pregunta qué opino de eso?  
Que mientras que nosotros yo creo tengo la sensación de que esta clase.  
Está un poco, o sea, esta clase no es del futuro, pero es del presente, o sea, me refiero ni tan mal. ¿O sea estamos hablando de duración? Hemos hablado con Miguel Ángel, que está fuera, os he enseñado cosas, habéis pedido cosas, las he compartido, hemos visto información, me seguís, pero tengo la sensación de que hay gente, hay personas en este planeta que todavía no se han adaptado al mundo digital.  
Entre ellos la administración pública entera de todos los países. ¿Y qué quiere decir? Una vez adaptado que cobran impuestos que sí, o sea, el cobro impuestos sí que está adaptado, eso sí que lo hacen de forma digital, pero el gasto público no está adaptado. Y qué quiere decir que no está adaptado ni mentalmente ni en gasto y están gastando cada vez más porque como controlan.  
¿A qué se van a adaptar esos profesores en la pública? ¿O sea, en la privada? Nos tenemos que adaptar más porque si no nos adaptamos no vienen alumnos. En cambio la pública, como es pública, pues en alguna ocasión puede que les cueste más adaptarse. Alguno que haya ido a la pública se enfada con lo que estoy diciendo, para nada completamente de acuerdo.  
¿Si sigamos ahora, claro, claro, a mí me ha pasado de cosas, pero entendéis lo que estoy diciendo? ¿Pues respondiendo a tu pregunta, es ese, o sea, los que todavía no se han adaptado, pues gastan, llegan a un presupuesto, no lo aprueban, por qué no tenemos presupuestos generales aprobados, entre otras cosas?  
Porque el techo de gasto es lo que habría, lo primero que habría que que que acordar qué está haciendo Sánchez, que lo ha aprendido estupendamente en Europa. ¿Qué le piden? Es decir, difícil deuda sobre PIB en cambio, el techo de gasto le da igual, pues le está recaudando impuestos como nunca y se gasta lo que quiere.  
Me explico, sí, sí, sí, es verdad, pues esto lo de Antonio Mota, no tengo GPT abierto y no lo voy a abrir ahora, pero me gustaría.  
Hola.  
¿Esto qué es? Recopilación de conceptos iniciales. ¿Ah, no, esto es Antonio, Esto os lo ha contado él? ¿Ah, no, esto es lo que os tengo que contar yo, EH?  
Vale, lo he pasado, lo he pasado, lo he pasado. ¿Política monetaria, hablamos el próximo día, vale?  
Política monetaria hablamos el próximo día.  
Vale riesgos y sugestión.  
¿Cuando Antonio, cuando tengáis clase con Antonio Mota, le decís que todo esto lo sabéis? ¿Cuál es el más importante?  
No, *****, estos estos bloques son esenciales para una buena gestión, procesos de gestión, de identificación de riesgos, pérdida esperada, inesperada y extrema. Alguna duda voy tipo de riesgo.  
Riesgo de mercado, riesgo de crédito, riesgo de mercado.  
Es el riesgo de mercado, tienes la frutería, la fruta y si tienes Banco riesgo de tipo de interés y forex, luego riesgo de crédito. Lo tenéis que saber. Riesgo de liquidez, que haya un pánico bancario operativo que entren unos.  
O sea, musulmanes, porque son los del 11 s por la ventana, o sea, eso es riesgo operativo. O sea, desaparecieron las Torres Gemelas, o sea, el riesgo operativo es desde una ataqueta de errorista hasta que te equivoques apretando un botón. Decís riesgo empresarial estratégico. Riesgo reputacional, esto es una intro riesgos, riesgos conocidos, riesgos desconocidos.  
Ah, mira, esto es lo que os estaba diciendo de lo que se ve y lo que no se ve es broma, pérdida esperada, medidas de riesgo de mercado, conclusión, factores de riesgo es un factor de riesgo, lo que provoca el riesgo, o sea, el riesgo es de crédito. Factores de riesgo, pues las diferentes formas por las cuales puedes llegar al riesgo de crédito me seguís.  
De tal el efecto cascada de riesgos.  
Pues bueno, sí, es como pillar el sida con respeto y cariño, EH, no acabas muriendo nunca de sida, o sea, al final tú tienes una enfermedad de, o sea, inmunológica. ¿El sida es una enfermedad inmunológica o cuando?  
Con todo el respeto, si tú estás.  
Recibiendo y pido disculpas, quimioterapia y ya es todo de golpe porque te bajan las defensas y entonces eres más susceptible de que entren a este. Es el efecto cascada.  
No.  
¿Y a TI Qué te importa?  
¿Cómo lo? ¿Pero no sabes que esto tiene que estar en todas y la Protección de Datos? Andrés, modelado y simulación de de desglose de factores de riesgos e interacciones entre factores. Importancia del enfoque granular.  
Bueno, no tengo ni **** idea lo que es el enfoque granular y es esencial cuanto más granular sea el enfoque es eso.  
Mira, mira, riesgos de cola, cambio estructural. ¿Vale a ver que ni tan mal, eh? De riesgo a de riesgo de cola. A crisis sistémica, aquí hay contagio. Esto sí me lo sé, veis, tú tienes un riesgo de algo que es inesperado, no cuentas con ello sucede.  
Y entonces hay un efecto contagio y cuando te quieres dar cuenta te has liado la que has liado, pollito, como pasa con todo, con todo. Pero el problema no es ahí. Hay un tema de equilibrio que tiene que ver con física.  
¿Se está metiendo ahí?  
Bien.  
Esto es una pelota, esto es un equilibrio estable, tenéis que yo muevo esta pelota, la desplazo, vuelvo y vuelvo al sitio. En cambio de esta pelota está esperando a que le de un empujoncito para que se de un vueltazo.  
España, ahora como país desde un punto de vista política.  
El a ver, hay varios, bueno es que dependiendo porque al final tienen a la Reserva Federal que pase lo que pase la inyecta en liquidez. Eso al final acaba haciendo. Si hace un equilibrio de esta ley, pero eso es lo que pone ahí y yo os quiero decir que yo sinceramente en esta clase y si me y si me estoy equivocando.  
Por favor, hacérmelo saber. Y pido disculpas yo en esta clase me siento en un entorno seguro.  
¿Qué es eso que no tengo sensación de que se vaya liar? O sea, tengo la sensación de que si muevo la pelota estoy ahí y si me paso mucho pues alguien me dirá que me estoy pasando mucho. Me seguís. En cambio, tengo la sensación a veces de que hay profesores. Al final tú dices el factor de cola. Pues que yo.  
Diego Ángel, le digo, no sé qué.  
Veis algo inesperado y de repente acabamos a Guantazos.  
Lo de menos es lo que yo le he dicho, estábamos en una situación que cualquier cosa iba a ser el detonante por ponerlo en contexto histórico, el asesinato del archiduque del Franz Fermín, Fermín, me seguís, que desencadenó la Segunda Guerra Mundial. Perdón, la primera, la primera sí. O sea, fue un asesinato.  
Pero cualquier cosa hubiera desencadenado, o sea, estaba todo de tal forma que lo que necesitas es que haya una mecha para que acabe explotando la crisis del 2008 con la quiebra, el imán no hubiera sido el imán, probablemente hubiera sido otro el 11 s al final es un catalizador. ¿Me entendéis lo que digo? No.  
Esto es lo que lo que dice aquí.  
Ah, mira justo en algunos casos un evento de riesgo de cola, puedes encadenar un cambio estructural que convierte el riesgo en una crisis sistémica, afectando no solo esto es lo que os acabo de decir, vale la naturaleza de los conflictos de intereses estructuras. Esto se lo pasáis a G PTY que os lo resuma una y otra vez. Vale el bar, lo veréis. Simulación de escenarios.  
Desafíos en el value a risk value, a Risk lo conocéis. ¿Perfecto herramientas, beneficios, equilibrio entre riesgo y a ver, vale, vale, vale retorno que me me duermo? ¿Beneficios? ¿Vale marco de gobernanza? No, no lo sé, pero.  
Sí, pero, pero marco de gobernanza, de gestión de riesgos.  
Luego a Antonio que os os dé lo que le apetezca. ¿Apetito de riesgo sabéis lo que es? ¿Cómo lo sabéis? No, pero tú no sabéis lo que es el apetito de riesgo.  
¿Lo habéis visto aquí? Apetito de riesgo es el riesgo que una entidad está dispuesto a asumir.  
¿O sea, hasta qué punto?  
Imagínate que tú puedes llegar.  
¿No aversión al riesgo no es apetito, no? Sí vale, perfecto métodos de agregación de riesgos. Desafíos. ¿Es que todo esto me lo he pasado sin me espero la película Eh? Importancia del capital económico.  
Claro, algo os contará Antonio mal, esto ya lo he pasado antes, me ha puesto lo mismo dos veces, esto ya lo he visto. Esto es una pesadilla a evitar. A a ver qué hay que hacer con un riesgo.  
Lo puedes transferir con un contrato de seguro. ¿Lo asumes y te lo comes, lo mitigas, o sea, es una matriz que esto a ver c r o quién es el C? ¿R o vale el de riesgos? ¿Eso es importante, o sea, el C o todos sabéis lo que es 1 C o no?  
¿Métrica? Es importante medir. Voy, no, no, no, no, no.  
Sí, sí, pregúntaselo a eso. Estepa, cuando lo veas, que fue el el C R o, de BBV de de Bankia. ¿A ver, bien, ya he llegado a lo que me interesaba, me seguís?  
Tipo de interés, bono y swag.  
¿Qué es el tipo de interés LIBOR? Referencias Ah de Repo. ¿El próximo día hablamos que ya se nos ha hecho, o sea, sabéis lo que es una repo, vale? ¿Cómo están las repos ahora en Estados Unidos secas? Ahora están secas, o sea, además tienen un problema de liquidez, o sea, tienen por un lado.  
Liquidez en manos de inversores privados y el interbancario con la repost está medio seco, o sea, lo que os quiero decir con esto es que yo tengo cada vez más sensaciones parecidas a las que tenía en el 2007. ¿De que estamos? Sí, te vendo, sí.  
El guerra Albacete está líquido desde octubre, sí, pero he vuelto otra vez a las marco de si está con tipos de interés. Esto se repite, es el día de la Marmota.  
¿Dime el alcalde, qué ha pasado con el nuevo alcalde de Nueva York? Es una pena.  
¿Espera antes de eso, estoy en lo que me interesaba, entendéis capitalización? ¿Cómo se valoran bonos? ¿Esto es lo mismo, no? ¿Cómo se valoran bonos? La duración de mcaoly, la duración modificada. ¿Veis que esto es lo mismo que os he contado?  
Efectos, riesgo de crédito, riesgo de liquidez de swaps hablamos más adelante y detrás de swaps y detrás hablamos de la curva de tipos. Volveremos a hablar y de la curva swap. Volvemos a hablar, pero esto está tirado, o sea, los los Hogwarts, los Hogwarts, hablamos.  
O sea, hablamos de curva de tipos y de expectativas. Vale, pregunto hoy. Hemos hablado la base del riesgo de tipo de interés, duración, duración modificada. Luego le mete un viaje a esto que lo está viendo y ni tan mal echarle un ojo.  
Entre todos, un poco a lo que os se me han dado metérselo, a G P t qué cosas no puedo entender verlo en diagonal, como lo he visto yo la semana que viene le volvemos a meter otro viaje en diagonal y tengo que ver política monetaria, que lo voy a ver el próximo día lo primero. Y además esto es una gozada porque el próximo día voy a ver lo primero, política monetaria.  
Después de política monetaria, voy a entrar con la curva de tipos y la curva swap.  
Y luego inmunización, inmunización y ya estamos.  
¿Que no sé ni cómo se llama, cómo se llama?  
¿Si no, le, si no le Leo es que ya me ha bloqueado, no?