# 🧾 **Informe de Sesión — 18 de noviembre de 2025**

**Máster en Gestión de Riesgos Financieros**  
**Profesor:** Luis Garvía  
**Duración:** 2h 14min (7:24 pm – 9:39 pm)
**Tema central:** Curva de tipos, curva _swap_, media geométrica, forwards, repos, política monetaria avanzada, LTRO/TLTRO, APP/PEPP, fondos de garantía, mercados monetarios, actualización macro y conexión con riesgos financieros.

---

# 1. 🎯 Objetivos de la sesión

1. Entender la lógica matemática que subyace al descuento compuesto y a las equivalencias entre tipos.
    
2. Aprender a calcular **TAE**, **media geométrica**, **forwards de tipos de interés** y **precios de bonos usando la curva spot**.
    
3. Comprender la **curva de tipos (soberana)** y la **curva swap**: cómo se construyen y qué información contienen.
    
4. Revisar los **instrumentos de política monetaria del BCE**: reservas, facilidades, operaciones de mercado abierto, LTRO, TLTRO, APP y PEPP.
    
5. Explicar el funcionamiento de los **mercados monetarios**, repos, depósitos interbancarios y referencias como Euribor y €STR.
    
6. Entender el **Fondo de Garantía de Depósitos** y sus equivalentes internacionales.
    
7. Conectar todo lo anterior con **riesgo sistémico, liquidez y actualidad macroeconómica** (IA, deuda USA, aranceles, stablecoins, euro digital, banca regional USA).
    

---

# 2. 🧮 Matemática financiera esencial (repaso y ampliación)

## 2.1. TAE y tipos equivalentes

Si tenemos un **tipo mensual** del 1%, la **TAE** es:

$$  
TAE = (1 + 0.01)^{12} - 1  
$$

Principio clave:  
**Los tipos equivalentes se relacionan siempre mediante capitalización compuesta**, nunca promediando.

---

## 2.2. Media aritmética vs media geométrica

Cuando las variaciones son porcentajes encadenados, la media **correcta** es la geométrica.

Ejemplo: tipos en 4 años → 1%, 2%, 1%, 4%.

### ❌ Media aritmética:

$$  
\frac{1 + 2 + 1 + 4}{4} = 2%  
$$

### ✅ Media geométrica:

$$  
(1.01 \times 1.02 \times 1.01 \times 1.04)^{1/4} - 1  
$$


$$
En Excel:  
`=GEOMEAN(1.01,1.02,1.01,1.04)-1`
$$

**Idea clave:**

> En finanzas, si metes basura en la fórmula, sale basura.  
> La media geométrica siempre trabaja con **(1 + tipo)**.

---

# 3. 💵 Precio de un bono a partir de la curva de tipos (spot)

Se toma la **curva spot**:

- s₁ = 1%
    
- s₂ = 2%
    
- s₃ = 2.5%
    

Bono: nominal 1000€, cupones 40€/año durante 3 años.

$$  
P = \frac{40}{1.01} + \frac{40}{1.02^2} + \frac{1040}{1.025^3}  
$$

El resultado fue: **1043€** (aprox.)

Esto permite calcular luego la **TIR (yield)** con Excel.

**Aprendizaje:**  
Los precios de los bonos dependen de los **tipos spot**, no del Euribor ni del tipo oficial.

---

# 4. 🔄 Forwards de tipos de interés (FRAs / Forward Rates)

El **forward 2→3** es el tipo al que fijamos **hoy** el préstamo que comenzará en el año 2 y terminará en el año 3.

Fórmula general:

$$  
F_{2,3} = \frac{(1 + s_3)^3}{(1 + s_2)^2} - 1  
$$

Conectado con lo visto en media geométrica:  
**Los forwards encadenan tipos compuestos.**

Diferencia con un forward de commodities (harina, petróleo):

- En commodities → te interesa el precio futuro del bien.
    
- En tipos → te interesa el interés implícito entre dos puntos de la curva.
    

---

# 5. 📈 Curva de tipos vs curva swap

## 5.1. Curva de tipos (soberana)

Construida con:

- Bonos del Estado a distintos vencimientos.
    
- Usando sus _yield to maturity_ diarias.
    
- Base del análisis macro y del precio del dinero a cada plazo.
    

Formas típicas:

- Normal (creciente)
    
- Invertida (anticipa recesión)
    
- Plana (incertidumbre)
    

---

## 5.2. Curva swap

Construida con:

- Tipos fijos de los **swaps IRS** que negocia la banca.
    
- Muy usada por bancos, aseguradoras, derivados y valoración.
    

Interpretación:

- Más limpia de riesgo crediticio soberano.
    
- Contiene expectativas más puras del mercado interbancario.
    

El Excel de Mota mostraba:

- Spot swap
    
- Forward swap
    
- Factores de descuento (FD = **factor de descuento**, 1/(1+r)^t).
    

---

# 6. 🏦 Mercados monetarios y repos

## 6.1. Qué es una repo

- Yo tengo un bono soberano.
    
- Lo “vendo” _hoy_ y me comprometo a recomprarlo _mañana/semana_ a un precio pactado.
    
- Obtengo liquidez inmediata.
    
- El tipo pactado = **repo rate**.
    

Repos = **préstamos garantizados con deuda pública**.

Plazos típicos:

- Overnight (1 día)
    
- 1 semana (estándar en política monetaria)
    
- OTC → puede haber cualquier plazo negociado.
    

---

# 7. 🏛️ Política monetaria del BCE (nivel avanzado)

Repaso de las **tres grandes herramientas**:

## 7.1. Reservas mínimas (coeficiente de caja)

- Afecta al **multiplicador monetario**.
    
- Apenas se toca (herramienta estructural).
    

---

## 7.2. Tipos de interés (facilidades permanentes)

Tres niveles:

- **Facilidad marginal de crédito** → techo (tipo más alto)
    
- **Tipo de referencia / MRO** → tipo intermedio
    
- **Facilidad de depósito** → suelo (tipo más bajo)
    

Funcionan a **un día** (overnight).

---

## 7.3. Operaciones de mercado abierto (OMA)

Cuatro categorías:

1. **MRO** – Main Refinancing Operations
    
    - Inyecciones semanales
        
    - Vencimiento: 1 semana
        
    - Clave antes de 2008
        
2. **LTRO / TLTRO** – (Long Term Refinancing Operations)
    
    - Inyecciones a largo plazo: 3 meses → 3 años
        
    - Durante la pandemia: **TLTRO a tipo 0** → bancos ganaron mucho dinero (se financiaban al 0% y reinvertían al 4%).
        
3. **Operaciones de ajuste**
    
    - Gestión de tensiones de liquidez
        
    - Intervenciones en divisa
        
    - Ajustes temporales
        
4. **Operaciones estructurales**
    
    - Compra/venta permanente de activos
        
    - Aquí va el **Quantitative Easing (QE)**:
        
        - **APP** – Asset Purchase Programme
            
        - **PEPP** – Pandemic Emergency Purchase Programme
            

> **El QE es una operación estructural que expande permanentemente el balance del BCE.**

---

# 8. 💶 Fondos de garantía de depósitos (Europa y mundo)

|País|Cobertura|Comentario|
|---|---|---|
|España (FGD)|100.000 € por depositante|Ibérico-europeo|
|Eurozona|100.000 €|Armonizado|
|UK|85.000 £|FSCS|
|USA|250.000 $|FDIC|
|Suiza|100.000 CHF|Esisuisse|
|China|500.000 RMB|≈ 60.000 €|

**Idea clave:**  
Si un banco quiebra, el FGD protege al depositante → evita pánicos bancarios.

---

# 9. 🌍 Actualidad macro y riesgo sistémico

Tres ideas interconectadas:

## 9.1. Deuda pública estadounidense – 38 _trillion_

- Crece a ritmo insostenible.
    
- Último trillón emitido en ~70 días.
    
- Problema creciente de liquidez global.
    

---

## 9.2. Inteligencia artificial = sumidero de liquidez

- Microsoft → 10.000M en “tokens de Azure”, no en cash.
    
- OpenAI tiene compromisos con Oracle, CoreWeave, Nvidia.
    
- Cada nuevo modelo exige más inversión → presiona los mercados de financiación.
    

---

## 9.3. Aranceles y cheques de Trump

- 2.000$ por ciudadano → >500.000M impacto directo.
    
- Inyección en M2 → **inflación en vena**.
    
- Riesgo para política monetaria y para la estructura del dólar.
    

---

# 10. 🪙 Cripto, stablecoins y euro digital

- Stablecoins: cripto + paridad fija con USD.
    
- Requieren **1 USD de reserva** por unidad → instrumento político para reforzar el dólar.
    
- EE.UU. las está adoptando explícitamente.
    
- Europa: euro digital _solo minorista_, descafeinado por presión del lobby bancario.
    
- Si existiera un euro digital completo, la banca perdería parte del negocio del depósito → de ahí la resistencia.
    

---

# 11. 📚 Casos prácticos enviados por Antonio Mota

Breve orientación para los alumnos:

1. **Savings & Loans Crisis**
    
    - Duración activos > duración pasivos
        
    - Riesgo de tipo de interés —> insolvencia
        
    - Caso esencial para entender **SVB 2023**
        
2. **Lehman Brothers**
    
    - Riesgo de liquidez + riesgo de mercado + riesgo sistémico
        
    - “Activos que tardan meses en venderse”
        
3. **Volkswagen / Enron**
    
    - Riesgo operativo
        
    - Gobierno corporativo
        
    - Incentivos perversos
        
4. **Repos y mercados monetarios**
    
    - Herramientas de liquidez de corto plazo
        
    - Conectan con LTRO, TLTRO y tipologías BCE
        

---

# 12. 🎒 Tareas para los alumnos

### Obligatorias (para la próxima sesión)

- Rehacer en Excel:
    
    1. Cálculo de media geométrica.
        
    2. Precio del bono usando la curva spot.
        
    3. Forward 2→3.
        
    4. Relación entre curva de tipos y curva swap.
        
- Leer los **casos de Mota** enviados por WhatsApp.
    

### Recomendadas

- Revisar la página oficial del BCE:
    
    - Reservas mínimas
        
    - Facilidades permanentes
        
    - Operaciones de mercado abierto
        
    - APP y PEPP
        
- Repasar:
    
    - Euribor
        
    - €STR
        
    - Funcionamiento del FDIC
        

---

# 13. 🧠 Ideas clave para recordar

- **La media aritmética NO sirve para tipos encadenados.**
    
- **El precio de un bono se calcula con la curva spot, no con el tipo de referencia.**
    
- **Los forwards son implícitos de la curva spot.**
    
- **TLTRO = financiación barata que distorsionó balances bancarios.**
    
- **APP/PEPP = expansión estructural del balance.**
    
- **Los repos son préstamos garantizados, no ventas reales.**
    
- **La liquidez global está bajo tensión estructural** (IA + deuda USA + política fiscal agresiva).
    
- **Stablecoins son un arma geopolítica a favor del USD.**
    

---

¿Quieres también **la versión resumida tipo WhatsApp**, o **la ficha visual para Obsidian** con fórmulas destacadas y gráfico conceptual de las curvas?


# Transcription
18 de noviembre de 2025, 7:24p.m.

2 h 14 min 58 s

Configuración del idioma, el español siempre hay que, o sea, cuando meto en Teams, siempre pongo el idioma porque a veces, aunque te diga que está el idioma, miente. Dicho lo cual, Rubén, me autorizas.  
Es.  
Es que se loco cómo se ríe y ya está.  
Ahora sí que está sudando, este Ángel.  
No, lo que yo quiero, está bien, es estándar. ¿Va a decir reenviado? Sí, guárdatelo, así encima te lo tienes tú para otras ocasiones.  
A ver, no, pero no lo has seleccionado, tienes que seleccionarlo.  
Me estoy empezando a Me estoy empezando a dar.  
Añadir a favoritos, sí.  
Y ahora López.  
Se lo mandó hace poco. Hay uno de Simón, no, yo tengo un montón, no, que no, que no, que no, que no, derecha, derecha, a la derecha, dónde está la derecha.  
Ah, pues no, no, no. Fenomenal. Porque es que, mira, me pide una cosa, he visto tal, ha sido muy elegante en tu respuesta, hasta tú te... Estoy... Pues toma, ya está.  
Vale, no. ¿Cuál? No, a ver, no, ¿dónde estás? Este eres tú.  
No te tengo guardado, tío, perdóname. ¿Sabes Ginés, no?  
Estoy.  
Sí.  
Como.  
Con la camiseta del Betis, el cinturón de tirar peso y un pitillo en la boca.  
Churería.  
Ya ahí se queda.  
Dila que cuenta.  
Pues lo siento, nada, ya ves.  
Ya es una creación, sí.  
Cosas, vamos con este me lo he mandado, que es este es mi hijo.  
El que pesca, este es el que pesca.  
Y este es el este es Lucas, mi sobrino y a mi madre, que me lo ha mandado con cariño. Le voy a decir gracias.  
Gracias, así me acuerdo de la cara que tienen ambos, que apenas los veo. Estaba pensando en besos, no está pensando en besos.  
Vamos, ya está.  
No, a ver, no que no. Vale, cierro cosas, cierro cosas, cierro cosas. Me han mandado esto que cierro cosas. Este es Enrique.  
Cierro cosas, cierro, cierro, cierro, cierro y cierro.  
*****.  
No, como mandáis por el grupo stickers.  
Eso es.  
Lo que.  
Vale, cosas compartí, pregunto, vosotros quiénes sois riesgos, sois estos de tipo de interés se ha hablado con vosotros y de política monetaria también.  
Me falta la curva de tipos y luego Antonio Mota me mandó un montón de cosas que os tenía que ir dando. Vemos un poco de alguna. Sí, no os he pasado todo y luego lo de la curva, la curva de swaps antes de leer lo suyo.  
O sea, os lo explico y es sencillo.  
Y.  
Hola.  
Aburve.  
Hello.  
Uno más el 10% elevado a 3.  
Esto lo puedes multiplicar.  
Bien.  
Eres él.  
El valor futuro, no valor presente, valor futuro.  
Valor, cuando doy temas de valoración, cuando doy temas de matemática financiera, empiezo todas las clases, no empiezo todas las clases, pero antes o después pongo.  
Es la fórmula en la pizarra.  
Y digo que todo tiene que ver con esa fórmula, 6.  
Ahora bien, todo tiene que ver con esta fórmula: valor actual es igual a valor futuro partido por uno más la tasa de descuento elevada a t.  
Sí.  
Imaginaos que tenéis un tipo de interés mensual.  
El 1% mensual, lo queréis llevar al Efecty Juan Noel Rey Latay.  
¿Tenéis una TI?  
Bill.  
¿Sabes lo que es la trae?  
Lo mismo me equivoqué, código de salud, ya tenéis una PIN.  
¿La tienes la nominal del 12% no?  
Es equivalente a un mensual del 1%. ¿Y cómo se calcula la TAE? La tasa anual equivalente, coges uno más el 1% no elevado a 12.  
Sí, pero lo que voy a hacer es compuesto, o sea, habría que tener las comisiones, pero lo que te digo es tú tienes lo que te van a pagar, o sea, tienes la cantidad que estás metiendo uno más el 1% elevado a 12.  
Esto sería igual a al equivalente uno más la TAE por.  
¿Por 100, también, no?  
¿Estoy explicando o no hay?  
Perfecto.  
Voy a ti porque tengo la sensación de que tengo ya asistido de comercio.  
¿Entiende, no?  
O sea, lo que quiero decir es que esto es muy sencillo y al final la TAE.  
La tasa animales equivalentes.  
Uno más el 1% elevado a 12, que también se puede decir que la TAE es igual a uno más latín partido por t elevado a t, ¿no?  
Esta es la fórmula que se suele dar, pero yo lo que quiero es que entendáis de dónde vienen las cosas.  
Para que entendáis sí de dónde vienen los costos. ¿Entendido esto?  
Vale, complico un poquito más las cosas.  
Tengo.  
En 1 año, un interés del 1%.  
2 años.  
Del uno.  
Del cero al uno, el 1% del uno al 2, el 2% me 6.  
There.  
El 1%.  
Y el 4% me seguís, no cada año voy a tener un tipo de interés diferente.  
¿Cuál es la media?  
¿Cuál es el tipo de interés medio?  
El tipo de interés medio es.  
Aritmético es 1% + 2% + 1% + 4% partido por cuatro.  
Este es.  
El tipo medio, habiendo hecho la media.  
Sí, muchas veces, si queremos echar una cuenta rápida, lo hacemos así.  
Pero si estamos hablando de finanzas, hacer una ****** así es un perdón, hacer una media así es una ******, hacer una media así es a ver, ¿por qué? Porque al final, como bien sabéis, está el tipo de interés.  
Con polvo.  
¿Cómo se hace esto? Bien con la media aritmética, perdón, con la media geométrica. En Excel es creo que es Jiaomi o ahora lo miro en español, me seguís con la media geométrica.  
¿La media geométrica, cómo se calcularía?  
Pues la media geométrica.  
¿Os acordáis de los?  
Es uno más.  
La media geométrica, que es la que estoy buscando.  
¿La media geométrica, cuántos periodos, cuatro periodos, no?  
1 más el tipo de interés elevado a 4 es 6 y esto va a ser igual a 1 más el 1% por 1 más el 2% por 1 más el 1% otra vez por 1 más el 4%  
Sí.  
Por lo tanto, la media geométrica es.  
YouTube.  
Esto elevado a 1/4.  
Es que más o menos se parece.  
Y esta sí que es la que da, este es el resultado.  
De componer, voy a hacerlo rápido con Excel para que veáis. Este es este es mi ordenador para que no se me apague. No sé si os lo he contado ya o no. Esto es el simulador de presencia que creo que os he dado ya clase con mi ordenador. Esto ya os lo he contado, que tengo.  
El Wiggler.  
Y le doy al Star. ¿Os lo he contado o no? ¿El Wiggler nunca os he hablado? Pues es simulador de presencia. O sea, si alguna vez tenéis un zoom para que parezca que estáis ahí delante. Mira, ¿veis el ratón que se mueve un poquito? Es el Wiggler el que hace que se mueva.  
Os lo paso, la aplicación.  
Depende, depende. Si tienes permisos para instalar cosas, sí.  
Pero esto de presencia, los como que tienes que estar moviendo.  
No sé por qué le ponen.  
¿Por qué los de Microsoft?  
Te ponen tan pocas estrellas.  
¿El mío, cómo se llama?  
Wiggler donde se puede, no sé dónde me descargo el que tengo yo.  
Es una aplicación, no, pero a ver, la de Microsoft no me gusta.  
Es cargar.  
Este es el mío.  
Este yo creo que puede ser, ¿no?  
No me responsabilizo.  
No, si no me.  
Que dicen que es el original, pero no me lo creo.  
¿Sabes si fueras el original?  
Bueno, Wiggler, os lo he comentado, ¿vale?  
Mira, esta es la tienda.  
Lo paso.  
¿Cómo se ¿Cómo os llamáis?  
Vale.  
¿Qué opinas de la José Angélica?  
Lo de Andrea, mira.  
No.  
¿Has visto?  
Yo sí que te explique.  
Wigler, perdón, vale. Luego os lo he comentado antes, os lo he comentado antes. Alguno lo comparto ya.  
Contacto.  
GPT.  
¿No, qué? Que ya está en todos lados. ¿Lo tenéis o no? No, que no lo tengo, pero que no sabes. Esto ya me parece. Karen, puedes ahora poner por WhatsApp. A ver, no es no es el mío.  
No es el mío, pero explícame la curva de tipos coma de.  
¿Dónde viene y tal y la curva swap?  
Qué bueno, ya sé lo que voy a hacer luego.  
Después de explicaros la curva swap y resolver todas las dudas que queráis, lo que voy a hacer es subir los apuntes de Mota a o sea, los apuntes que os he dado yo mis transcripciones, subirlas a ChatGPT junto con lo de Mota y preguntarle qué me qué me falta por contar.  
No nos quedamos muy lejos, o sea, llegamos como la, pero es que eran muchas diapositivas. Pero a ver, ¿qué es la curva de tipos? ¿Qué es María? Cuando te he preguntado de dónde viene la curva de tipos, lo que estaba esperando es de la renta de la deuda pública.  
Tú con la deuda pública construyes la curva de tipos.  
Con la deuda pública, tú ves las maturities, ves el tiempo, o sea, ves, o sea, perdón, las duraciones, o sea, tiempo hasta el vencimiento más o menos, pero en lugar de maturity pones duraciones.  
El La yield de cada uno de los bonos a diferentes maturity si tienes la curvaticos. Luego hay una cosa que se llama la curva cupón cero, pero que más o menos tú coges la deuda pública y con las diferentes yields cada día vas el mercado secundario de deuda pública, que eso lo vimos el otro día, la curva la curva swapes.  
Lo mismo, pero con las operaciones swap que se han negociado.  
Lo que pasa es que quiero explicaros lo que os he estado explicando ahí y qué es la curva de tipos. Es una representación, los tipos de interés de los bonos del Estado, justo lo que os acabo de decir, con distinto plazo de vencimiento, desde muy corto plazo hasta largo plazo, que nos dice coste como formas típicas, normal, invertida, plana.  
Y la curva swap es similar, pero usa los tipos de interés de los swaps en lugar de los bonos.  
Vale, basada en deuda pública incluye riesgos a verano, más usada por gobiernos. La swap basada en derivados refleja expectativas y muy usada en banca y derivados.  
¿Me seguís? ¿Veis que esta herramienta os la instaláis y mola? Sí, la verdad.  
O sea, yo no, o sea, yo la uso como suelo conectar el WhatsApp, es una especie de GPT Life. Sí, o sea, para consultas así más un poco menos. Eso es, alguna vez desde el móvil, sin conectarte. Quiero hacer una pregunta, Luis, ¿cómo se nos va a evaluar en esta asignatura? Antonio Mota, un ejercicio. ¿Habéis tenido ya clase con Antonio Mota nos ha dicho que nos iba a mandar un trabajo, una especie de exposición?  
Pues yo lo que diga Antonio, o sea, claro, pero son 2 partes por lo que teníamos metido, no la subienda tuya o va a ser en plan. La mía es lo que diga Antonio, a ver, y yo tiraré para arriba, pero es que Antonio tira también para arriba. Claro, pero cómo nos vas a evaluar tú también con una presentación, un trabajo, un no el trabajo de lo haremos juntos, el trabajo que os pida él lo hacemos juntos.  
No, mejor, mejor trabajo, mejor trabajo que tenemos ya.  
Tú quita que la computadora.  
A.  
Vale, vale, perfecto.  
Sí.  
And.  
O sea, yo lo que quiero es contaros cosas y daros herramientas. Sí, tener un poco claro, porque es como Antonio nos vemos desde la segunda semana. Si tengo con esto un problema, o sea, con el máster, este tengo un problema en relación con o lo dirijo, vale la pena un poco.  
A ver, me la me da, o sea, la forma de evaluar me refiero tú aunque entendamos, por ejemplo, lo que explicaste el otro día de política monetaria, yo no me había estudiado el tema todavía para el examen y con lo que me explicaste tú viéndome esos apuntes, no. Si al final es eso, me he metido para coger el Excel, perdón, me he metido para coger el Excel.  
¿Qué?  
A ver, archivo, guardar como el Excel de hoy, os lo paso cuando acabemos.  
XLS.  
¿Cómo se llama?  
¿Dónde lo guarda en mi ordenador?  
What's the weather?  
Vale.  
¿Qué números? Díctame, porfa, los números que hay ahí, que son fáciles. El 1% el 2% y el número y el cuatro. Uno, dos, uno, cuatro. Uno, uno por ciento, dos por ciento y cuatro por ciento.  
Una cosa que os recomiendo.  
Cuando uséis Excel, si no lo usáis mucho, es que tratéis de hacer las cosas por varios caminos, esto y promedio.  
Que tratéis de hacer las cosas por varios caminos y ver si os da lo mismo. ¿Me seguís? ¿Veis que hago el promedio, calculo el promedio y me da lo mismo?  
Ahora lo que voy a hacer es.  
¿Geométrica average, cómo se dice media geométrica, media geométrica?  
Media geométrica.  
En inglés es Yoming, hago la media geométrica de esto.  
Y me da.  
¿1,68 vale?  
¿Y ahora?  
Importante.  
Voy a hacer la media geométrica como la he puesto, como os lo he contado, os lo he contado ahí, no uno más el 1%.  
Y aquí voy a hacer el producto.  
Me seguís.  
Y ahora voy a hacer.  
Esto elevado.  
¿A 1/4 menos 1, vale, me estáis siguiendo todos? Sí.  
Y me da diferente.  
¿Me seguís lo que entendéis lo que os estoy diciendo?  
¿Por qué estoy haciendo esto? Precisamente por esto, porque en Excel y en la vida, si tú en una fórmula metes porquería, que sacas porquería.  
Es correcto y más. ¿Qué pasa con GPT? Pasa con todo, o sea, si vosotros, o sea, ¿por qué?  
Con GPT, cuando yo meto cosas salen cosas chulas porque le estoy metiendo las transcripciones. Digo chulas porque le estoy metiendo una cantidad de información muy granular. Le estoy dando muchísima información en este sentido. Esto es una metáfora, pero lo que quiero es que entendáis qué falla aquí.  
Vaya.  
Y aquí estoy haciendo la media geométrica de 121 y cuatro, cuando la realidad es que la media geométrica que tengo que hacer no es la de 1214, sino la de 101102101104 y a eso restarle uno. ¿Me seguís? Sí.  
Me seguís todos.  
Ahora hago.  
Me Bueno, para hacerlo bien con Excel, a ver bien que se puede hacer de cualquier manera, pero no quiero repetir la fórmula. Como aquí no he guardado por referencia, en esta tengo esto. Cuando arrastre abajo, aquí me la va a hacer bien.  
¿Veis lo que os estoy diciendo?  
¿Y qué me falta esto? Menos menos 1 y entonces sí me da bien, o sea, ¿qué quiero que veáis?  
¿Que cuando hago la media geométrica?  
Realmente.  
No más.  
Estoy restando el uno y es la media geométrica es uno más. ¿Sí? Sí. ¿Sí lo que os estoy diciendo? Sí. ¿Por qué os digo esto? No lo tengo. Voy a ver. Son herramientas que tienen que ver con la asignatura de Susana, que tienen que ver con la curva swap, que tiene que ver con  
Calcular diversas cosas, hasta aquí bien, sí.  
Ahora bien, si entendéis esto estupendamente.  
Voy a por la siguiente.  
Es él antes de la SWAT.  
Antes de la SOAP os voy a explicar un poco.  
Tenemos la curva de tipos.  
Con la curva suave 6 y tenemos 1 año.  
2 años, 3 años, listo.  
Y aquí voy a poner que es el 1%.  
Aquí voy a poner que es el 2% y porque no me queda una escalera, voy a poner aquí el 2,5% ese sí.  
Uno de estos puntos.  
Tengo la curva de tipos, el spot en 1 año.  
Es el 1%, el spot en 2 años es el 2% y el spot en 3 años es el 2,5%.  
¿Entiende?  
Ya.  
Vale, por un lado.  
Imaginaos que tengo un bono.  
Bono con 3 fugones del.  
4% vale, date un bono que.  
En 1 año me va a pagar.  
Tengo un bueno con la siguiente estudio.  
Nominal, voy a poner mi, vale 40.  
40.  
Email.  
Hoy 40 sería. Sí, lo sé, no vale, pero tengo la cabeza 401231 bono que tiene un valor nominal de 1000 EUR y 3 cupones de 40 EUR. Voy a calcular cuál es el precio con esta cubertura.  
Pues el spot en 1 año es el 1% en 2, en 2 en 2 años es el 2% y el 2, ¿me sois?  
Pues.  
Vale media.  
GO.  
Métrica.  
El segundo es.  
Yeah.  
Perdón, el segundo hemos dicho que es.  
Curva de tipos y bueno, no.  
No le miréis, es difícil, no para acá, Diego, la curva de tipos es 123 y he dicho que es 1%, 2% y 2,5% no.  
Y luego el bono que quiero calcular el precio.  
Es 4040 y 1040. Estos son spots, me seguís a 1 año, a 2 y a 3 años. ¿Cómo calculo el precio del bono sabiendo los tipos?  
40 partido.  
Por uno más el 1% elevado a uno, o sea, estoy calculando valor actual de cada uno.  
Y este sería el precio.  
El precio sería 1043. Una vez tengo el precio, ¿qué puedo calcular?  
La rentabilidad, la Jill, o sea, teniendo el precio, puedo decir menos el precio, aquí me bajo los cupones.  
Y calculando la TIR.  
Tengo.  
¿El precio me seguís?  
Dudas, preguntas, esto que acabo de hacer.  
Es básico, pero es una cosa que en mercado se hace mucho. Tú tienes un bono, te calculas con la curva de tipos, te calculas el precio y luego puedes ver la rentabilidad. Tú, cuando compras un bono, pagas un precio y compras un bono a una determinada rentabilidad. Vale, sigo.  
Hasta aquí bien, sí, ahora voy.  
Al tipo fault.  
¿Qué es el tipo fogo? O sea, estos son los spot spot en 1 año, en 2 y en 3, vale, ¿qué es el tipo fogo?  
Imaginaos.  
Bueno, que no lo he explicado con un ejemplo de.  
Un panadero que quería pagan y pues vale, imaginaos que yo te tengo que prestar a ti dinero dentro de 2 años que me tienes que devolver en 3.  
Y hoy queremos cerrar ese contrato, hace con un forward y el forward sería en este caso un forward.  
23 no es cuál va a ser el tipo de interés en 2 años, sino con la curva de tipos actual.  
¿A qué tipo de interés cerramos el contrato hoy?  
Para no pillarnos los dedos y nos queremos cubrir tanto como yo. Estoy explicando.  
Sí.  
Sí.  
Y ahora.  
¿Cómo calculo?  
¿Cómo calculo?  
El forward.  
Muy sencillo. ¿Os acordáis de lo que hemos hecho con las matemáticas con lo de la media geométrica y todo eso? Pues al final lo que estamos haciendo es sumar tipos de interés. Os lo explico, el forward se calcula diciendo que.  
El spot en 2 más el forward que estoy buscando.  
Va a ser igual al Spottendex.  
Zero.  
El spot en tres. El spot en dos más el forward que estoy buscando. Esto. Es esto, más esto es igual al spot en tres. ¿Me seguís todos? Muy sencillo.  
El spot en 3.  
Uno más, el spot 3.  
Elevado a 3, 6.  
A ser iguala, uno más.  
El spot 2.  
O elevado a 2, clos elevados, sí.  
What?  
Uno más el power, 23, que es el que estoy buscando.  
¿Entiende?  
Es que me lo esperando de una manera un poco diferente. ¿Cómo no explicarme? Con el, mira, pero estaba buscando porque yo lo sé, yo lo que lo he entendido, pero no, claro, no me no me casa con lo que me explicaron ayer. Ayer que es el PRA.  
Y el forward y el.  
No, una cosa, ahora vale, esto es forward de tipo de interés. Vale, esto es vale, perfecto. ¿Estáis entendiendo esto? Sí, ahora lo conecto con lo de con lo del forward que tiene que ver con futuros. Sí, justo.  
Vale, esto es forward de tipo de interés, o sea, esto es lo que en forma contractiva. Vale, señor, que mucho más estándar se llama Fran, Forward Rey Davine. En cambio, tú estás viendo el forward OPC frente a los contratos de la fórmula de tu forward.  
¿Forward de qué? De par. Si es forward de par. De harina era justo, era un panadero que compraba harina. Vale, si es un panadero que compra harina, la fórmula la he puesto antes. Valor actual es igual a valor futuro partido por uno más la tasa de descuento elevado a t.  
¿Y cómo calculas el forward? El forward es el valor futuro. Tú tienes el spot, el valor futuro es igual al valor actual por uno más r elevado a t.  
Esa es la fórmula que darían ayer.  
Pero yo estoy hablando de tipos de interés. ¿Entiendes eso?  
Vale, pues vengo aquí y simplemente F 23 es igual a uno más s 3 elevado a 3 partido por uno más s 2 elevado a 2 menos 1. Listo, se calcula así el forward 23.  
Diego, ¿qué estoy buscando aquí? Aquí estoy buscando el tipo de interés al cual dentro de.  
2 años te voy a dejar el dinero para que me lo devuelvas en 3. ¿Entiendes que no es harina? O sea, una cosa es cuál será el precio de la harina, considerando la tasa de descuento hoy que se calcula con esto. O sea, y luego puede, si este commodity, la harina es una commodity, puede que tengas que igual que cuando hablamos del trae antes, Pablo.  
Sí, hay que meter comisiones. Si hablamos de forwarts de harina, no solo hay que meter tasa de descuentos, sino si hay un coste asociado con el almacenaje. Iban por ahí los tiros. No lo comentaron, ¿no? Mira, una alternativa sea si entre contrato forward convencimiento T y precio F sobre un activo de precio ST en cada momento T.  
Es aquel activo que da derecho en el momento T o a la T, al capital ST menos F. O sea, era un ganadero que paraba de precio para. Hoy para un claro, para hacer algo. Perfecto. En 2 años, claro, para 3 meses y después dependiendo de cómo iba a ser.  
O sea, claro y luego nos estuvo explicando que. Vale, y luego nos estuvo explicando que si la persona que estaba invirtiendo tenía interés por el subyacente era de un tipo, o sea, no era especulación y solamente pensaba que estaba mal valorado.  
Bueno, el valorado del subyacente era en plan especulación. Vale, ahora esta esto me lo ha dado Antonio. La curva swap, igual que la curva de tipos, la sacas con el mercado secundario, los swap de tipo de interés tú los negocias y cotizan.  
Y con Bloomberg te puedes descargar igual que te descargas las Jills, te puedes descargar a que swap está, o sea, te puedes descargar la curva swap de las curvas swap te da una estructura de spot o tipo esta.  
¿Antonio me mandó este Excel y me dijo que los que este es la curva Swap, que este es, o sea, realmente cuando le preguntáis a él, pero qué es esta curva?  
El swap.  
A cada uno de los vencimientos que este swap.  
Si os fijáis.  
Este swap.  
Es el spot.  
¿Me seguís? Y luego estos forwards que aparecen aquí.  
Es uno partido por uno más.  
¿Vale, esto qué es el precio de un bono cupón cero?  
Este FD no sé qué es, este FD no sé qué es, no esto a ver, no sé qué es, no sé qué es FD, pero creedme, es el factor que tú aplicarías a un bono cupón cero. ¿Me seguís?  
Perfecto, o sea, lo que me refiero es este CD, no sé por qué lo pone ahí, pero este es un factor que es.  
Uno partido por uno más r elevado a t.  
O sea, si tengo, por ejemplo, para calcular el precio del bono, los he puesto antes.  
¿Cómo calculas el precio del gol que superson entre 6? Pues multiplicando el primer cupón por este factor, el segundo cupón por este factor y el tercer cupón por este factor.  
Son factores, factores.  
Un cubo de casa en tiempo.  
suma producto que tienes el valor actual.  
¿Tiene sentido?  
Sure.  
¿Este 2% qué es?  
No lo sé.  
Este 2%.  
No lo sé.  
Y lo que sí sé es que son estos forwards 1223344556 estos forwards que son si veis.  
Si veis, es exactamente la fórmula que os acabo de poner, es lo que os acabo de explicar, ¿me seguís?  
¿Qué son los forwards de tipo de interés? Lo que te he contado, si tengo que hacer un préstamo entre el año 5.  
¿Y el 6?  
Que se calculan con, o sea, son los tipos y la diferencia.  
A ver, suele ser, suele ser de 1 año, pero calcular.  
Home.  
Uno 3.  
Una es el J uno elevado a uno.  
Por el power uno, 3 elevado a 2, eso sería igual.  
Al spot elevado a 3. Al final cada uno lo elevas a su tiempo. O sea, sería realmente elevado a N, o sea, la fórmula como tal de nomenclatura sería sin ejemplo, sería elevado a N, o sea, y eso tienes que igualar a N menos 1 y a...  
O sea, si es a 3 perdón, vale, sí, eso es, me he entendido, perdón, no, pero me habéis entendido.  
Perfecto.  
Ahora bien.  
Voy a hacer es que me apetece mucho.  
Voy a abrir chat GPT.  
Y le voy a decir, te adjunto.  
Los apuntes de Antonio.  
Mota coma peso que es el PDF enorme.  
El PDF enorme es principios de identificación y gestión de riesgos.  
Luis Garvía.  
Ahora veo los casos prácticos, esos no los he abierto.  
Te adjunto a los apuntes, que es el PDF enorme, vale.  
Por otro lado, te adjunto las transcripciones de las sesiones que llevo dadas en formato MD, listo.  
¿Puedes hacerme un resumen esquemático de los temas que he?  
Cubierto.  
Y los que no de los apuntes de PDF.  
Añadir fotos y archivos, me voy a principios y tal, sesiones, acceso directo.  
Y aquí llevamos las sesiones que llevamos.  
Que esto es el momento en el cual me deprimo, que me dice: eres un desastre y no has hecho nada de lo que tenías que hacer. ¿Sabes que se ha caído hoy, no? Me suena.  
Lo que cubre el PDF de Antonio, a ver, perfecto.  
Te dejo el mapa global comparado entre lo que cubre el PDF de Antonio Mota.  
Y lo que tú ya has dado en clase según las cuatro transcripciones, así de un golpe de vista que has cubierto, que has cubierto parcialmente y que no has cubierto todavía, vale.  
A ver, contenido del PDF, mecanismos del Banco Central Europeo, vale la curva de tipos y liquidez del balance.  
Lo has cubierto en clase, cubierto, pero no con el nivel granular del PDF. Me da una alegría tremenda.  
Agregados monetarios, multiplicador, cómo funciona el balance del Banco Central, política monetaria antes y después del 2008, casos reales, COVID cheques, relación M cero y M 2, curva de tipos, introducción.  
No cubierto, pero aparece en el PDF, detalle técnico. ¿El qué? Perfecto, son las long term refinance operation. Os las cuento ahora, vale, el tema del y el a ppy el P también, va perfecto, ese tema lo tengo un poco verde, está tirado.  
O sea, está tirado. Operaciones estructurales y no estructurales, informe completo del Banco Central Europeo, detalles de liquidez en swap lines del eurosistema, vale.  
E.  
Tema uno.  
Procesos.  
Vale, lo has cubierto en clase, cubierto parcialmente. Ninguna sesión lo trata explícitamente, pero aparece indirectamente. Política no cubierto, pérdida esperada, inesperada, extrema. Esto os lo van a contar 27 profesores por diferentes lados. Lul con la distribución. Esto tiene que ver con ERM.  
Proceso formal de gestión de riesgos, agencia humana y conflicto de interés. Vale, no aún no cubierto de apetito de riesgo. No os he hablado, pero os hablarán.  
Vale, y de riesgo de tipo, mira, swaps de tipos, frash, constitución de curvas forward.  
Libor, medición y mapeo del riesgo, cubierto, no cubierto.  
Vale.  
¿No os parece una pasada? Es una locura.  
Luego, por ejemplo, yo le he metido alguna transcripción de las tuyas y te lo deja súper perfiladito, súper tal. Y si le dices en plan, por ejemplo, yo que sé, llegas al punto este que quieres que te lo explique más, le dice, desarróllame más esto, de todo lo que te ha hecho de todo el tema te lo desarrolla solamente.  
A mí esto me parece una locura, o sea, lo que os acabo de hacer.  
Me parece una locura.  
Y luego mira lo que me ofrece.  
Puedo prepararte para cualquiera de estos puntos, el mapa del curso definitivo alineado con tu estilo, una ficha por sesión que enlace lo que ya diste en el PDF, un plan puente para cubrir los huecos sin perder tu estilo, metáforas, casos de Silicon Valley. No le voy a pedir.  
Si os pregunta Antonio, decirle que me he leído los casos y que nosotros también, no, esos los voy a mandar ahora por el WhatsApp y os los tenéis que leer y yo también.  
Espero que Antonio nos venga y nos dé un repaso de estos en relación con qué. Bueno, todo esto como ya lo habéis visto con Luis y se pone a explicar algo. Antonio os va, esto va a considerar que lo que lo hemos visto, o sea, esto no lo miramos bien ahora nosotros en casa, ahora lo vemos y seguiréis teniendo clase conmigo. ¿Con Antonio habéis vuelto a tener clase? Por eso estoy un poco preocupado de cómo va a ser eso después.  
Por eso te preguntaría el examen, claro, porque le vimos la segunda semana que todavía no estábamos con la sopa de boba todos y ahora que no sabemos un poco por dónde nos va el aire y por eso queremos saber porque su clase fue dura. No os preocupéis, además ha mandado los siguientes.  
Casos.  
¿Me ayudas con los casos?  
Dime, dime, no, nada. El año pasado, qué tal que estábamos comentando que el año pasado era la docente parecía que era Antonio Mota, solo.  
Adiós.  
Vale, perfecto. El primer caso, savings and loans tiene que ver con duración, o sea, tiene que ver con que tienes un banco con unas duraciones en pasivo, unas duraciones diferentes en activo, y supongo que suben o bajan los tipos de interés y se te descuadra el balance tipo Silicon Valley Bank, ¿me seguís?  
El segundo liman, si tus activos tardan meses en venderse.  
¿Cómo mola, no?  
*****, lo que me ha mandado.  
Sí, Volkswagen, Enron.  
No me los voy a lo voy a abrir 1 segundo.  
Estos son capítulos de un libro.  
Ese es el libro del FRM que yo tengo los cuatro, pues lo mando, porfa, sí.  
Hi.  
No, que esa emoción está bien.  
Que estoy de la sin ilusiones.  
Voy al LTR o.  
Mañana os entran los mira, el señor sí que es todo lo que nos entran mañana, mándamelo por WhatsApp, perfecto y así.  
Para que por lo menos lo podamos abrilos.  
O.  
Mira.  
Claro, es que, pero es que los instrumentos del BC.  
A ver, por un lado.  
El PP A, una PP A.  
Sí.  
¿Qué decir?  
Sí, me diré, no, sería el programa, no a ver, o sea.  
Cuidado, pero esto no toca hoy. Producto Interior Bruto en paridad de poder adquisitivo, China se ha comido a Estados Unidos cada vez más, e India va a coger. Pero hoy no toca la paridad de poder adquisitivo. BPA es... Cool Sage Program Es...  
El programa.  
Ya os digo, me lo has mandado, sí.  
El otro día ya vimos política monetaria.  
¿Cuál es el que tenéis que, bueno, a ver el mercado, cuál abro? Sí, o sea, ese es el primero, descargo los 2, vale, para que vayas pasando así un poco, o sea, como lo explicaste otro día a nivel pinceladas y luego te pones a estudiarlo y al final es entenderlo, tampoco es de memorizar nada.  
Hombre, ya, pero para eso se lo suyo también, si aquí no.  
¿Que veo los 2 *****?  
A ver, lo voy a hacer bien.  
Si es que al final es lo mismo, o sea, es lo mismo.  
¿A ver, este cuál es? Ese es política monetaria. Este ya os lo he explicado, creo que si los tipos suben, que si que si el balance.  
Vale, aquí es objetivo de la política que sí.  
M 3.  
y luego ya hay una cosa que la entienda Pero por qué para luego valorar los mercados monetarios si supuestamente los mercados monetarios son a menos de 18 meses ahí no te podría o sea yo uso siempre suelo usar m2 pues es que no tiene puesto en la presentación mayúscula de se usa m3 pero claro si m3 pues se usa  
Esto es lo que estuvimos hablando, que si subes tipos, que si los bajas.  
Política, el balance del Banco Central, vale las operaciones, ahora voy a las operaciones.  
Operaciones de mercado, a ver, ahora voy a las operaciones, facilidades, vale, las LTR OS. Vale, pero voy rápido, es que quiero verlo todo, vale, y esto es lo que os estuve comentando. A ver, le faltó la cosa.  
muy bien explicándonos como antes las crisis empezaban de una forma y ahora era con lo de liquidez vale Esta es una que ahora voy a por ella y quiero ver la de mercados monetarios para ver que mes a no esta es sí es el mercado monetario esta es la última postura  
Está en mercado monetarios.  
Estoy volviendo loco. La tengo abierta 2 veces la misma. No, lo que pasa es que claro, esa es política monetaria. Esta es política monetaria.  
Y esta es mercados monetarios.  
O sea, la que acabo de ver cuál era política monetaria, que es la que vimos el otro día continuando, vale, y esta es mercados monetarios.  
Y aquí tenemos la repos.  
Vale, títulos, tipo de interés, todo lo mismo.  
El Euribor.  
no, pagarés, letras, rentabilidad, riesgo.  
Mercado Moneda.  
Vale, aquí hay un poquito de bonos y depósitos.  
Fondo, Fondo, garantía de depósitos.  
¿El fondo de garantía de depósitos, pues lo ha explicado o no?  
Solo hemos visto con él, vale, pero que el fondo garantía de a ver, hoy no toca, pero a mí me gusta mucho, mucho hablar del fondo. O sea, el sistema financiero está dividente. ¿En cuántas partes, Andrés?  
¿El sistema financiero en cuántas partes está dividida?  
¿Te llamas Andrés? Perdón, ha sido ella, ha sido María, no, pues le echo la bronca a Sara, a Sara, te llamas Andrés, Sara.  
*****, sí, Andrés, el sector financiero está dividido y no respondas.  
Mira, Andrés, ¿en cuántas partes está dividido el sector financiero?  
Atendiendo a.  
Lo he repetido 80 veces en cada clase.  
Que llevo cuatro o 5, 80 * 5, más de 300 veces. Andrés, el sector pensando en supervisores.  
Dirección General de Seguros y Fondos de Pensiones, sí.  
La banca, mercados y seguros, banca, mercados y seguros.  
Banca, mercados y seguros. Esto para mí es bueno porque aún a pesar de que no me hagas ni caso, te suena la musiquita de todo lo que lo he repetido: banca, seguros y banca, seguros.  
Mercados.  
Cada uno tiene un supervisor, igual que cada uno tiene un supervisor, hay 3 fondos, el fondo de garantía de depósitos.  
¿Qué es el fondo garantía de depósitos para evitar el riesgo de liquidez?  
Todos los depósitos están, todos los depósitos están asegurados hasta 100000 EUR en España, no por depositante iban.  
¿Esto qué es para evitar riesgo liquidez en Estados Unidos 250000 y cuando fue la quiebra de Silicon Valley, va a ir en salir en la tele que dijo?  
Lo amplio durante estas, o sea, durante esto lo amplio al 100% de los deportes para evitar el pánico bancario. Listo.  
Este es el fondo gran tiempo, adicionalmente.  
Hay un fondo de garantía de inversiones que son las empresas de servicios de inversión, los traders, las sociedades de valores y gestoras de carteras. ¿Qué hacen las sociedades de valores que hacen las gestoras de carteras?  
Pues compran e intermedian. Si una quiebra que salva, o sea, a los inversores que han depositado su dinero en una sociedad de valores, el fondo de garantía de inversiones. ¿Me enseguís? Luego en seguros que hay que hay un desastre muy grande que cubre el consorcio de compensación de seguros.  
¿De qué estoy hablando de que hay 3 fondos?  
Uno por cada uno de los sectores que sirven para garantizar, o sea, esto sería el equivalente al consorcio de conversación, más que el equivalente paralelo, o sea, cada uno de los 3 sectores tiene grandes fondos para evitar catástrofes.  
Que la catástrofe en el caso de la banca.  
Es un pánico bancario que una entidad quiebre.  
Pero más que sí, pero el riesgo sistémico va por, o sea, sí, a ver, del riesgo de liquidez se pueden contagiar unos bancos a otros, que es lo que pasó con Lima, pero no lo veas como riesgo sistémico, porque ahí habría que pensar en los ratios de liquidez. ¿Me seguís?  
Vale, pues visto esto por encima.  
¿Sabéis lo que son las repos?  
A mí no me he quedado tan quiero porque vamos, como lo tiene en los.  
Es muy sencillo la Repo, yo tengo deuda pública en mi balance y necesito puntualmente liquidez.  
Necesito en un momento dado liquidez y es una liquidez que voy a necesitar durante una semana.  
¿Tengo un bono y qué hago? Vendo ese bono con un contrato de recompra.  
Lo vendo ahora para comprarlo dentro de una semana.  
Y durante una semana consigo liquidez.  
El tipo repo es el tipo al cual hago ese contrato para conseguir liquidez durante una semana, listo.  
Durante esa semana deja de ser mío y pasa a ser tuyo porque te lo he vendido, pero tú me lo vas a volver a vender.  
Yo.  
No te oído.  
Depende, ahora las repos en Estados Unidos están al 0% casi.  
O sea, está seco el mercado de repos, pero es puntual. O sea, ahora estamos en una situación en la cual hay mucha liquidez en determinados ámbitos, pero en otros ámbitos hay poca liquidez.  
No, sí que gana, pero gana un porcentaje un poquito. O sea, ¿cuándo haces una repo?  
Es que son gente que tiene en su balance mucho, mucha liquidez, mucha, mucha tesorería. O sea, tú imagínate que tienes en un balance 100000000 eur en líquido, eres telefónica, si eres telefónica vas a tener 100000000 eur sin tenerlo invertido.  
¿Qué haces? Lo metes en deuda pública, pero deuda pública, además, que sea bastante líquida con diferentes tramos y cuidado con la duración, no te vaya a cambiar el tipo de interés en poco tiempo. ¿Y en el caso de que necesites liquidez semanal, qué haces? Pues una repo sobre tu deuda pública en balance a muy corto plazo.  
O sea, los depósitos a la vista sí sabéis lo que son, ¿no?  
Una semana repuesta a una semana, típicamente. ¿Esa pregunta, no?  
Para el repo preguntarse la GPT, sabes lo que pasa que los agentes como que te pone que se hace a una semana, pero que luego tiene se puede hacer a un día.  
Yeah.  
A mí no me.  
El otro tema.  
Mira, ayer vuelve ahí a la izquierda, en la otra, en la.  
Mayor volumen en un día y una semana totalmente y depósitos bancarios.  
No, pero cuidado, un día son los depósitos, preguntarle a o sea, preguntarle a Gemini.  
A ver, supongo que la repo, no supongo no, la repo es o Tc. O sea, la repo no hay un mercado en el que se negocien la repo, tú las haces con una entidad.  
Eso te, o sea, no hay un mercado oficial de reposo.  
O sea, y lo que te digo es si eso o TC quiere decir que no hay un mercado oficial supervisado al ser o TC la repos.  
Tú puedes hacerlas a un día, 2 o a 3 o a una semana, pero te voy a preguntar, existen, que me dirá que sí, existen repos. Le voy a hacer 2 preguntas, primero si existen repos a un día.  
A un.  
Día y luego le voy a hacer sobre la respuesta que me dé cuál es el estándar.  
Sí, existen repos con vencimiento a un día, overnight repos.  
¿Cuál es el estándar? Yo uso depende.  
Me da vergüenza como me trata.  
Un día hábil no le he condicionado con la anterior respuesta. Sí, yo creo que también.  
Fíjate, bueno, alguna parte del documento lo ponía, yo también estaba un poco, o sea, yo lo había entendido bien de la garantía de la facilidad de esta marginal. Yo pensaba, no lo quiero ofender.  
¿Por qué?  
de que lo encontrado claro o sea  
A ver, lo que le estaba diciendo, cuando le estaba diciendo que es mercado TC, es que te la puedes hacer como quieras, que al final es entre 2 partes y negocian como quieras. Y ahora voy al banco de al Banco Central.  
El estándar un día, el estándar de la política monetaria, una semana, mira el estándar operacional overnight, que overnight, vale, el estándar de política monetaria, una semana perfecto.  
El overnight se puede referir perfectamente y ahora voy a ello al las operaciones del Banco Central.  
Pero voy a ver, voy a ello, vale. A mí lo que me costaba entender un poco la diferencia de porque al final todo está mercados monetarios a corto plazo, pero de repente hay unos que son un mes, luego otros se pueden hacer los del long term se pueden hacer a 3 luego.  
Voy al Banco Central, ¿vale?  
Eso fue dentro de medias convencionales y tal.  
A ver, os lo cuento y luego miramos apuntes. Venga, os cuento primero lo que sé, luego voy, quería ir a la del arco central.  
Pero básicamente.  
En general, herramientas del banco central.  
Hay 3, luego desarrollo, vale, tienes por un lado el coeficiente de caja.  
Que es a largo plazo y apenas casi nunca se puede, se suele tocar, pero entendéis que el coeficiente de caja. O sea, tú con el coeficiente de caja juegas con el multiplicador del dinero, cuanto cuanto mayor sea el coeficiente de caja.  
Menor es el multiplicador, se entiende.  
Mhm.  
No.  
¿Tienes el tipo de interés del Banco Central?  
El tipo de interés del Banco Central no hay uno, sino son tres. Uno es el de referencia y luego ahí tienes dos herramientas, los depósitos y los préstamos, los créditos. Los overnight deposits, que es a ver, aquí la dislexia me manda.  
Es.  
El techo, o sea, si tú depositas tu dinero, te van a cobrar más.  
Ese es el tipo de interés alto. Si tú pides prestado, no, perdón, al revés, si tú depositas, si tú depositas tu dinero en el Banco Central, te van a cobrar, te van a dar menos. Si tú pides prestado, te van a cobrar más. Eso es, o sea, el tipo de referencia es el medio.  
O sea, Cristin Lagar cuando habla.  
Acaba diciendo o yo el titular que pongo en LinkedIn o los medios de comunicaciones, el titular que ponen es medio, pero tenéis que ser conscientes de que ahí tú puedes pedir presado y tú puedes depositar.  
Que a su vez es una herramienta de control de liquidez. O sea, si yo necesito liquidez, saco, si yo necesito, o sea, si yo tengo una excelente liquidez, depósito. ¿Enseguís que lo puedo hacer con las repas de unos y otros, listo?  
¿Y luego?  
No sé si con estas 2 son suficientes, luego están las operaciones de mercado abierto.  
Y la suben.  
Está bien.  
Las facilidades, no, la del depósito y la de. No, lo que digo es, hay 3 niveles. Mira, no quiero ver. Lo tengo aquí, facilidad de depósito, OPF y facilidad marginal de crédito. No, pero la facilidad de depósito.  
Y la marginal de crédito son las 2:00 que acabo de contar, la de arriba y la de abajo, y luego la o PF, que la o PF y la del medio. No, pero vamos por partes, 3 herramientas, coeficiente de caja, o sea, las reservas coeficiente de caja, luego el tipo de interés y luego diferentes tipos de operaciones en mercado abierto.  
Perfecto, pero para este es el principal instrumento en la principal herramienta son los tipos de interés.  
Que se controlan mediante, mira, justo aquí también está tal cual, vale. El principal instrumento son los tipos de interés que se controlan mediante.  
Los requerimientos de reservas mínimas.  
Las facilidades permanentes y las operaciones de mercado adiós y así las facilidades permanentes son.  
¿A qué facilidad permanente da el Banco Central que tú como banco puedes depositar y pedir préstamos?  
No.  
Coeficiente de caja, eso no se toca, el tipo de interés lo van subiendo en cada reunión del Banco Central y luego tenemos las operaciones de mercado abierto. Aquí hay un montón de cosas.  
Y hay que digerir.  
Aquí está todo lo de las repos, lo de las sesiones y todo eso no vamos por sí, pero hasta aquí sí.  
Gracias.  
I will also have been too.  
Si ha cambiado, ha cambiado, o sea, ya no es el de las OPFs. Yo la dislexia me manda y si ya no es el de las OPFs, es el otro, es el otro, pero lo que no quiero es que os volváis locos.  
Por un lado, reservas, por otro lado, los tipos de interés y por otro lado, las operaciones de mercado abierto.  
O.  
¿Sí, no tiene más y luego de operaciones de mercado abierto hay 3000 millones que os las voy a ordenar, vale?  
O sea, nosotros dentro de las de, mira, te lo pongo son en base, no prefiero. O sea, luego veo lo tuyo, pero primero os quiero decir lo que yo tengo en la cabeza, que lo que tengo en la cabeza es requerimientos, las reservas, coeficientes reservas. Luego el tipo de interés, el tipo de interés es la el depósito, el crédito.  
¿Qué es lo que hizo la del medio? No sé para qué sirve, sinceramente.  
No sé si me decís para qué sirve las medias. OPF son las operaciones de mercado abiertas más importantes realizadas por los sistemas, pues desempeñan un papel primordial para alcanzar los objetivos de control de los tipos de interés, que extiende la situación de liquidez en el mercado y señalización de la orientación de la política monetaria. No, pero OPF entonces no es OPFMR o en sus sirvas, no.  
Entonces no, olvídate a ver.  
¿Lo que os he dicho lo tenéis claro? Sí, voy, estoy en la página oficial del Banco Central del Banco de España, ¿vale?  
Veo *****, menos mal que lo voy a quitar ya es que veo los ***** esos, perdón.  
Mira, OPF que tengo yo, el tipo de interés voy, no olvídate de las OPC, vale.  
A ver, voy a requerimientos de reservas mínimas primero.  
Requerimientos de reservas mínimas.  
El coeficiente de caja.  
A.  
Google.  
Ahora tiene calor.  
Hello!  
A ver.  
Reservas mínimas, el coeficiente de caja, que es lo que os estaba contando. ¿Por qué he apretado? Porque quiero ir de forma sistemática, pasando por todo. O sea, estoy en la página del Banco Central, que los apuntes están estupendos, pero al final esto es más oficial. Segundo, voy.  
Al tipo de interés, facilidades permanentes y aquí me dirán.  
La facilidad marginal de crédito.  
Que crédito es lo que tú das y por lo que tú das, cobras más. Están ordenados de mayor a menor, creo. Si me equivoco, me corregís, porfa.  
Facilidad marginal de crédito.  
Permite a las entidades financieras obtener liquidez de los bancos centrales nacionales a un día y al tipo de interés determinado por el Banco Central. ¿Me seguís?  
Luego, facilidad de depósitos es el más bajo, este es el bajo. La facilidad de depósito permite a las entidades financieras realizar depósitos a un día en los bancos centrales.  
Y falta el de la mitad, os prometo que hay 3, pero el de la mitad no sé para qué sirve.  
Yeah.  
Bueno, solía ser el me estoy se aplica las subastas.  
Es que ahora, pero no quiero ir a las a las a las otras, hay, me estoy volviendo loco. Hay 3 tipos de interés en el BC, facilidad de depósito, imagen de crédito. ¿Cuáles son?  
Entiende mi frustración.  
Tasa facilidad marginal, vale, pero perfecto, pero tranquis, o sea, tranquis y me sitúo.  
Techo, suelo, vale.  
Vale, hasta aquí me seguís, sí.  
Ahora.  
¿El ¿Dónde está aquí?  
¿Dónde está?  
Me dan ganas, sí, es que mi ordenador va un poco lento.  
Hello!  
¿Que son las de las MROs, vale, y ahora?  
Operaciones de mercado abierto.  
Aquí dentro de las operaciones de mercado abierto, antes de apretar, vale, el muerto me estáis siguiendo, sí.  
Operaciones de mercado abierto.  
¿Os acordáis el otro día que os estuve hablando el cuantitaticism? El cuantitaticism está aquí y al final estas operaciones, esta página web, la habrán actualizado un poco, pero esto lleva así desde antes del 2008.  
Perdón, en el caso de antes del 2002.  
O sea, las compras de activos era una cosa residual, que pasó a ser muy gordo, muy gordo, muy gordo, muy gordo. Lo que os quiero decir es que, por un lado, si vosotros cuando aprieta ahí vais a ver un montón de operaciones, compra de divisa, compra de, o sea, hay diferentes tipos de operaciones.  
Y hay una pequeñita que es la compra de activos que se ha convertido en protagonista.  
Es el cuantita difícil, listo antes de llegar ahí.  
Por un lado, tenemos los tipos de interés que tú puedes dejar el dinero por la noche y cogerlo de día, pero el Banco Central también da préstamos a los bancos, que son operaciones a mercado abierto, y dentro de las de los préstamos que dan los bancos hay a corto plazo y a largo plazo.  
¿A corto plazo, cuáles son el MR O? Ahora lo vemos.  
Sí, es lo mismo. Ahora lo vemos, aprieto el botón y lo vemos a medio y largo plazo. ¿Cuáles son?  
Especialmente a largo plazo, las CLR o S, las litros, las C litros, a ver, pero es que estamos de forma extraordinaria desde el 2012 con la pandemia. Los bancos en general son un poquito, es que como se está grabando los que no quiero hijos de ****.  
Claro, ya está, sí, lo sé, lo sé. A ver, espera que lo tenemos que acabar. Bueno, vamos bien, perfecto, perfecto durante la pandemia.  
Los tipos de interés estaban en cero, ¿no? Y durante la pandemia los bancos dieron, o sea, con los fondos, o sea, los el Banco Central dio TLR o S a cero a los bancos por 2 años.  
¿Me seguís? Los bancos estaban financiando a cero. ¿Qué pasó durante la? ¿Qué pasó después de la pandemia con los tipos de interés que subieron, pero que subieron al cuatro?  
¿Qué hicieron los bancos? Por un lado, se estaban financiando con las TLR o S al cero.  
Y por otro lado, de sus activos estaban consiguiendo y cuatro.  
¿Entendéis lo que estoy diciendo? Ganaron, les ganaron pasta, preguntárselo a Antonio Mota cuando le diis clase. ¿Qué pasó con las CLR OS durante la pandemia? Estoy nervioso.  
No, pero ¿me entendéis la idea? Pero qué quiero que veáis que por un lado está herramientas, el coeficiente de reservas.  
Segunda herramienta, los tipos de interés, los tipos de interés, que es el de abajo y el de arriba, y luego hay uno en medio que ya sabemos que engancha con las de.  
Engancha.  
Engancha con las de corto plazo y luego tenemos que vamos a ver ahora.  
Préstamos a bancos, que es lo normal.  
Luego habrá que si compra de moneda en mercado, que si dólares, que si no sé qué, que si no lo toca. Y luego hay compra de activos, que es el quantitative difícil, que ese es un programa especial que sacaron, que es el PP A, creo que se llama el Pug 6 Programa Agreement.  
A Pp Asset Asset Pull 6 Program, el a Pp, perdóname María, antes que es el que te he dicho el PP A, que es a Pp Asset Pull 6 Program, es el del quantitative easy, que es un programa especial para comprar activos.  
Entendido, me seguís, voy a apretar el botón a ver qué pasa.  
Operaciones de mercado abierto, este es el que más miedo me da.  
Por un lado, se distinguen cuatro categorías.  
Las operaciones principales de financiación las supusieron la principal fuente de financiación para el sistema, a ver cuando para los bancos durante los primeros años del Banco Central Europeo.  
Las o Pf consisten en inyecciones de liquidez semanales y convencimiento una semana. Son realizadas por los bancos centrales nacionales de acuerdo con el calendario publicado por el BCE mediante subastas estándar.  
¿6 se entiende?  
A una no sabía ni me acordaba que eran una semana.  
¿Pero habéis leído que?  
La principal fuente de financiación durante los primeros años de funcionamiento.  
Ahora hay cosas que son excepcionales que se han convertido en normal. Os lo os hablé del cuantitatifici la semana pasada os enseñé el primer salto, el segundo y el tercero y os dije lo de si habéis ido alguna vez a la nevera a comer solo una galleta y habéis conseguido comer solo una galleta.  
Las operaciones de financiación a más largo plazo.  
Conocidas como las litro, LTR o, perdón, litro es LT Long Term.  
En español es o PFML algo así de más largo plazo de son operaciones de inyección liquidez, pero con un vencimiento superior al de las operaciones, normalmente 3 meses durante la pandemia, insisto, se dieron hasta 3 años, creo.  
También son realizadas cada mes por el eurosistema, entendido la segunda.  
Luego.  
La tercera operaciones de ajuste.  
Estas es lo que os digo que aquí dentro puede estar comprar divisa.  
Y se te está desmadrando el dólar con el euro, se te va el yen. Tú puedes entrar con yenes o salir o hay. O sea, puede haber ajustes asociados con la divisa, que tú sales con euros, entras con yenes, me seguís.  
A ver, no tú piensas desde el punto de vista de del.  
Pero cobertura es lo que hace, cobertura es lo que hace alguien, un emprendedor o alguien que tiene una cartera. Yo aquí de lo que estoy hablando es que tú tienes los grandes datos y de repente notas que el yuan, o sea, que hay pocos.  
Que hay mucha, que China está comprando muchos euros.  
Si China está comprando muchos euros, ¿qué puedes hacer o vendérselos tú o empezar a sacar euros por otro lado al mercado que tengas tú en tu balance? ¿Me seguís solo o compras tu yuanes? O sea, haces operaciones para contrarrestar, pero no desde el punto de vista de la cobertura.  
O sea, cuando estamos hablando de bancos centrales es masa monetaria. O sea, una cobertura es alguien que se quiere poner un casco en su casa. Aquí lo que estamos hablando es de tocar la estructura del sistema.  
¿Entiende?  
Y luego dentro de estas operaciones de ajuste en mercado abierto.  
La más importante, sin duda es la compra de activos.  
O sea, nunca.  
A ver.  
Lo que dice.  
Francisco.  
¿Me seguís? Sí, exactamente. Y por último, las operaciones estructurales.  
Inject.  
No, pero cuidado que aquí están compra o venta de activos.  
Sinceramente, el quantitative ising no sabría dónde situarlo, si en el 3 o en el cuatro.  
¿Y qué voy a hacer?  
¿Qué voy a hacer mis queridos alumnos?  
¿Dónde sitúas el?  
De los siguientes.  
Hay numeritos.  
¿Por qué le pongo el uno y el 2?  
¿Por qué le he puesto el uno y el 2 para el uno y el 2? Ni de broma.  
Vale cuatro, el cuantitatitisin es el cuatro.  
Son las millas no convencionales, a ver, en ahí está hablando de operaciones estructurales.  
Pero medida no convencional también es las operaciones de mercado abierto.  
Tira.  
¿Por qué me he ido aquí? Porque lo tengo aquí. O sea, el quantitatificim está aquí y las operaciones de ajuste. Vale, una cosa es ajuste y otra cosa es darle un, o sea, el quantitatificim es estructural, que es lo que os he dicho. El quantitatificim cambias el balance de una forma brutal, por lo tanto está en el cuatro, sí.  
Finalidad y es que mira, justo me está, me está explicando lo que os acabo de decir. La finalidad tiene que ver en la escala y la finalidad, o sea, mientras que unas son puntuales con corto, este es más gordo.  
Las categorías uno, 2 y vale.  
¿Os he ayudado? Sí, a mí sí, y al resto.  
Who does?  
¿Qué más cosas?  
Todo lo de antes, pues ya me has dicho que no. ¿Qué es lo de antes? Lo de porque la referencia de los mercados monetarios es M 3 si M 3 incluye depósitos a 2 años y los mercados monetarios supuestamente son. ¿Por qué la referencia? ¿Qué referencia de qué?  
O sea, la referencia en los mercados monetarios del dinero es M 3. Es que no sé cómo, o sea, sí, claro, porque él utiliza de referencia M 3 cuando los cuando M 3 incluye depósitos a más de 2 años y realmente los mercados monetarios son un periodo inferior a 18 meses.  
Ahora te digo cosas, depósitos. ¿A cuánto? A más de 3 años y depósitos a más de 2.  
A ver, sí, no, y te cuento para M cero.  
M cero.  
¿Te puede cuantificar?  
M cero se puede medir, entendéis que es lo que imprime el Banco Central y lleva control directo.  
M Uno incluye los depósitos, cuesta un poco más medirlo, pero sí, y de hecho se mide, la tienes. M 2, que es la que suelo mirar yo para hablar del dinero en circulación.  
Cuesta todavía más medirlo y ya empezamos a tener problemas asociados con qué depósitos y qué depósitos no, dependiendo del plazo. ¿Me seguís? Y para mí M 3.  
Es imposible medirla.  
¿A ver qué me dice, vale?  
A ver, la razón por la se refiere a M 3 como su principal referencia, a pesar de que incluye depósitos a más de 2 años que no son inmediatamente líquidos como el efectivo, en una perspectiva estructural y predictiva más que en la liquidez operativa. M 3. El BCE considera M 3 como una medida amplia y estable de la liquidez total y potencial de la economía, basándose en 2 principios fundamentales.  
El potencial inflacionario, perspectiva a largo plazo.  
No solo incluye hoy, sino también los depósitos de activos.  
Del euro short date term, del euro short date term rate, eso.  
Eso tiene que ver con lo que hemos hablado antes de la fitería de depósito, es el interbancario. Yo creo, es que el de corto plazo no se llama Euribor, se llama, eso es claro, y el Euribor es a mes, o sea antes, a ver, el Euribor todos sabéis lo que es.  
El euríbor es el interbancario a plazo, es la media del tiempo, o sea, el euríbor.  
Es la media, o sea, los bancos se dejan dinero unos a otros.  
Roiter todos los días coge diferentes bancos, hace la media, la pública, y eso es el único.  
No, los bancos, roiter publica.  
Hey that.  
Es a lo que voy, el Euribo, o sea, todos los bancos se prestan dinero unos a otros.  
Y luego.  
A ver si con más, perdón, posible hablar del que antes se llamaba Eonia.  
Ahora se llama. El surfter es el que se publica todos los días y es el Leonio, pero es que el vigor también lo publica.  
Reuters, los plazos, no, los plazos del Universe son 3. Una semana, 13612 y meses, una semana, 3612 y Reuter lo publica todo, o sea, todos los días se dan. Aquí te pone lo del Euroshorter es un tipo de interés que refleja el coste de financiación a un día de a ver.  
Que publica Reuter todos los días asociado con el tipo de interés.  
A ver, importante.  
Importante, estoy preguntando cosas cuya respuesta más o menos sé.  
El tipo de Andrés.  
Una de las cosas que suelo que suelo preguntar en los exámenes, porque doy la definición con que Reuter lo publica, ¿quién fija el euríbor?  
No lo fija nadie, los bancos se prestan y Reuters lo que publica es la media de lo que se presta, ¿me seguís?  
Y luego otra cosa es que entre los bancos se pongan de acuerdo, pero eso es monopolístico y eso es ilegal y hay sentencias. Pero hay sentencias, o sea, los bancos pactan y hay sentencias, pero hay que demostrar que han pactado. Dime Ana.  
Y broiters.  
A ver, la tasa clave publicada diariamente por Reuter.  
Es el euríbor, el cálculo y la publicación lo realiza el EMI.  
Que utiliza un proveedor de cálculo anteriormente Reuters, ahora típicamente otros sistemas de vale, ya no es el Reuters tampoco, estoy desactualizado.  
Pero estás aprendiendo con eso, no siempre, siempre y luego en Leonia.  
El Leonia se ha pasado, que es que no sé decirlo, mi cabeza es el estrella, el resort en Reiki.  
STR, sí, ESTR y le pone la E, me sale estrella, claro.  
Pero que para mí esto es el Leonia, que antes era Leonia.  
Y Reuter ya no publica el Euribor, ahora es el Emmy.  
De hecho, en la diapositiva que nos, no en el Excel que nos has enseñado antes que ponía FD, sí que es fondo de depósitos, lo de en el Excel ese del, pero créeme, es el factor, no, FD es el factor por el que, o sea, en el ejercicio que os he puesto, es que aquí me acaba de aparecer, me acaba de aparecer FD.  
Sí, no, pero no te vuelvas loco porque puedes, o sea, FD es factor de descuento, sin duda, sin duda, porque el descuento era como tal, o sea, que fuese a descuento esto de la tasa de descuento, o sea, uno partido por uno más r elevado a A.  
Sí, vale.  
Diego César, por curiosidad, ¿solo con qué estáis?  
Perdón, Rubén.  
Vale.  
Hola, es que me está dando, o sea, y perdóname, Rubén, que te tengo que cambiar el nombre.  
Yeah.  
No sé que eres, sé que eres Rubén, tío, pero me ha dado con Diego y sé que Diego es Diego y a veces le llamo Rubén.  
Estoy clavados.  
Como vamos, como de como lo hago.  
Las dudas.  
A cosas.  
Te digo.  
Sí, plan, bueno, podríamos saber mercados monetarios. Vale, voy a voy a ello. Lo importante que tenemos que saber de los mercados es eso, lo más diferencia es de que es el plazo. El ambiente es a corto plazo. Sí, a ver, no sé qué tenéis que saber.  
Lo que sí sé es.  
De lo que no le he cubierto a Antonio.  
Me encanta esto,  
¿Que te da unos informes?  
Mira, me estoy yendo a las de Antonio, vale, no cubierto el TLR, el Peltro no sé qué es, a PPS, el Asset Purchase Program y el PEP. El PEP es como el es vino después del Asset Purchase Program, pero es otro programa especial de compra de activos.  
A ver, os dije que os iba a mandar y os la busqué y os la voy a pasar, que me acabo de acordar ahora con el.  
La hice y menos mal que me acuerdo. Qué bien, gracias Ana.  
Política monetaria.  
¿Os acordáis que os dije que me faltaba una diapositiva?  
Os acabo de pasar las diapositivas estas y voy a ello.  
Y esta quiero que la entendáis.  
Esto es lo del otro día.  
Que me volví un poco loco buscando una diapositiva que pensaba que la había metido. ¿Esta la os acordáis de ella?  
Pues esta es la que os he mandado las diapositivas otra vez. esta es.  
Esta diapositiva, la de Silicon Valley Bank, es la que os quería, apretáis en este mola mogollón, apretáis en el.  
Esto os cuento lo que es.  
Mola todo.  
Esto tiene que ver con el PPP.  
A ver, por un lado.  
Esto.  
Aquí tenéis el código.  
1 segundo, porfa, aquí tenéis el código. ¿Por qué me acuerdo de esto? Por el PP A, la de la a PP se pasó al PP A.  
¿Qué es el a PP? Compra de aquí. Tú tienes que inyectar liquidez en el sistema y ¿cómo compras? ¿Cómo inyectas la liquidez? Comprando aquí. Con el cuántico es difícil lo habéis entendido todo, ¿no? Vale, ahora bien, ¿el PP A qué es? Es un programa especial de inyección de liquidez, pero mientras que el.  
¿Van lista difícil, compra, deuda pública, el TFA tú tienes?  
Una bolsa de liquidez esperando para comprar, entenderme y ahora os lo explico lo que te dé la gana.  
La tiene liquidez ahí. El Banco Central es un programa que está autorizado para comprar lo que le lo que te dé la gana. ¿Y en concreto, qué podría llegar a comprar el Banco Central, por ejemplo, acciones de Deutsche Bank?  
O bonos, una emisión de bonos de.  
¿Por qué? Porque es el precio de una acción que se desploma y entra. Y digo acciones, como podría decir cualquier otra cosa. ¿Me hacéis y quiero que esto qué es? Es código que saca de.  
De FED, FEDIC, Federal Deposit, los encargados, FEDIC, aquí lo tenéis, FEDIC, la Federal Deposit Insurance Company, la agencia federal que se encarga de asegurar, o sea.  
La que os acabo de explicar de depósitos en España.  
¿Cómo se llama el Fondo Garantía de Depósitos en Estados Unidos? El Fondo de Garantía de Depósitos en España en Estados Unidos es FEDIC, Federal Deposit Insurance, la C no sé qué es.  
¿Listo, esto qué es? Coge los datos de ahí, es la pasta.  
La pasta que se ha que se ha gastado a Fedi.  
Rescatar.  
Y lo que quiero que entendáis, que esto siempre lo explico igual, es.  
¿Aquí qué tenéis en la crisis del 2008? Pues cae Lehman, Washington Mutual Bank. ¿Y qué pasa con la crisis del 2008? Pues una persona.  
Piso 45.  
Cae y luego actúa.  
¿Entendéis que cuando caes?  
Hay un pánico y después hay que rescatar a todos los puntitos. Hay una muy gorda.  
Otra, otra, otra, otra. ¿Y cuántos puntos hay? No soy capaz de ni de verlo. ¿Qué pasa con Silicon Valley Bank?  
¿Que si cae?  
Y tú lo coges antes de que toque el suelo.  
A ver, no fue solo Silicon Valibar, fueron 3 a la vez los que quebraron, pero ¿qué hizo la Reserva Federal? ¿Actuó rápido, los rescató rápido?  
Y no hubo ninguna sorpresa después. ¿Por qué? Porque si actuar rápido eres capaz de evitar que haya contagio, pero es que después.  
Después hay, entre otros, buscar New York Community Bangor.  
Le rescataron sin que llegaran a tener que meter el fondo de garantía. Lo rescataron con los programas flexibles con el PP A, o sea, el equivalente al PP A New York New.  
York, community.  
¿Cómo se ha visto en New York, Luis? *****, New York.  
Sí va a aparecer igual, pero y doy clases y soy profe de NYU. No se lo digáis a nadie, New York Community Bancorp.  
Qué o sea, esto no lo sabía, le han cambiado el nombre.  
A ver, tools.  
Las medidas que tiene el BCE lastima, esperar que me interesa esto mucho.  
¿Brom, cómo puedo hacer uno, uno, 2000?  
Uno  
A ver, voy a poner, es que no sé si es 1212 2024, vale.  
Le han cambiado el nombre en octubre.  
¿Qué año pasó?  
A ver.  
RO se mira de punto y.  
Sí, pero New York Community.  
A ver esto, la banca regional estadounidense.  
Mirar el precio de la acción.  
Pablo, compra, no, pero mirar.  
¿Veis lo que veis a lo que me estoy refiriendo, sí?  
¿Habéis oído hablar de New York Community Banco?  
¿Por qué? Porque vino al año después de Silicon Valley. Y si algo aprendió las reservas federales, que mejor de crisis bancarias no publicar nada. Mejor no hacer seco. ¿Por qué? Porque es la forma de evitar el pánico, sí, pero se ha pasado. ¿Te has enterado?  
No ha pasado y le han cambiado el nombre.  
A ver, el problema que tuvo New York Community Bancorp es que después de la pandemia ellos tenían alquileres de oficinas en Nueva York y la gente empezó a teletrabajar y ellos tenían una exposición al mercado inmobiliario en Nueva York y alquileres.  
Y empezaron a tener moras, moras, moras y tuvo, a ver, la banca regional en Estados Unidos tenía problemas, no solo New York Community Bancorp, son varios, pero qué quiero que entendáis que por un lado es importante, a ver.  
Esto es fundamental, esto es fundamental.  
No sé si os lo he dicho y si os lo y si no os lo he dicho, estoy disculpa, pues no haberlo dicho y si me estoy.  
Vas por repetir.  
Hay una serie de noticias.  
Es tan importante lo que se ve como lo que no se ve.  
A.  
Puedes saber porque sabes lo que no se ve. Estoy viendo las operaciones que está haciendo Rusia en.  
Pues Rusia ahora está acabando de tomar todo lo que es el 2 pas y crimea, que ya lo tenían, pero lo está apuntalando.  
¿Está cerrando, sale en algún sitio? En ninguno. ¿Por qué en parte? Porque esa guerra de Ucrania ya está acabada. Osué y no está acabada, pero os suena. ¿Hay noticias de Israel? No.  
¿Tenéis que Trump ha resuelto los 2 conflictos?  
Y parte de la resolución es que ya no se hable de Silicon Valley se habló mucho, todo el mundo un poco más que se habló durante una semana. A la semana se empezó a hablar de Credit Suisse e iba a empezar a hablar de Deutsche Bank.  
Ya no se habla de nada. El PP A lo tiene preparado el Banco Central por si acaso hay que hacer algo de o con el de este banco o con lo que sea.  
¿Entiende más o menos veis este gráfico como?  
Por la evolución, aquí no hay puntitos de estos y ya después no hay nada.  
Claro, eso también será porque a raíz de esa crisis muchos bancos nos fusionaron con otros, no, y cada vez hay menos bancos. A ver, no sigue también banca regional en Estados Unidos tienes más de 4000 bancos. O sea, ya no es como en España que casi todas se han venido fusionando. No, en Estados Unidos la banca regional, claro.  
Te quería hacer una pregunta de ese estilo porque, o sea, la de esas medidas no convencionales, ese cuanto es difícil y tal también se hace la Fed también la hace o tiene una modo diferente que lo de lo que hace. ¿Cuántos bancos regionales?  
Hay en Estados Unidos, yo te diría que más de 2000 a bote pronto.  
Got.  
Bueno, es la mitad, se ha comido la mitad. O sea, sí que no es tan vasto como en España, que al final se encuentra, o sea, el umbral de los 250000 millones. ¿Por qué? Por lo de Basilea 3, que lo veréis, puede que conmigo, puede que con otro, pero Basilea 3 al final si sitúa el riesgo sistémico entidades sistémicas en los 250000.  
¿Millones de activo, qué me ibas a preguntar lo otro, que si la Fed tiene la que estas mismas medidas, este o sea, el mismo fondo de garantía de depósito de margen el de crédito y tal que tiene el Banco Central Europeo o como hacen ellos para gestionar todo ese tema de riesgo de banco? FDIC que FIDIC en Estados Unidos son 250000.  
Dólares por depósito, o sea, más que en Europa, más que en España. En Alemania no sé cómo está el fondo garantía depósito. ¿Seguro?  
¿Me puedes hacer?  
Un una.  
Tabla con los diferentes 2 de garantía de depósito por país y cantidad.  
Eurozona Sara, no fallas, muy buena, lo sé, pero eso te lo dije, o sea, eso el primer día, el primer día Reino Unido, 85000 libras que vienen a ser lo mismo que sí, 250000 en Estados Unidos, Canadá 100000, los suizos 100000 francos. Por ejemplo, de un país como China, pensáis que lo tendrán mayor que en Occidente o en China.  
O sea, sí, obviamente tendrán un fondo de cobertura, tienen que tener, pero claro, será, tú crees que, pero antes de preguntarle, tú crees que será superior, inferior, inferior, no inferior, muy inferior, vale, muy inferior, la renta, el poder, de ahí entran muchos más temas, vale.  
500000 remimbis.  
En euros.  
Luego yo tengo otra pregunta, 60000 cómo mola.  
Yo tengo otro que me escuchaste con el José Antonio este tal que hablabais de lo de que ahora el Trump había dicho que le iba a dar 2000 USD a cada americano de. ¿Bueno, eso cómo puede afectarte luego en tu política monetaria, aparte de que te crezca la deuda? O sea, porque es un poco lo que nos explicaste. Me alegra que me hagas esa pregunta, eso es actualidad absoluta.  
Claro.  
No, dime.  
Ya.  
Okay.  
¿Y si son 2 titulares de cuenta? Tienes 2 por cada persona.  
A moderado. Mi nombre es esa.  
No, si me importa, o sea, tenía que sacar.  
Cancelarme.  
Es que no hay ejemplos, BBVA, aunque tenga 5, bueno, 20 licencias bancarias, me dan ganas de, se lo voy a preguntar.  
¿Cuántas licencias bancarias tiene Santander, BBV y Caixa Banca? Esta pregunta mola. o sea.  
Aunque Caixabank.  
Aunque el Santander.  
No es esto, no es esto.  
¿Pero por qué?  
No es esto, licencia bancaria, perdonad, le hago una pregunta y si no me hace caso, sí, o sea.  
Me refiero a licencias después de las fusiones en España.  
You must have.  
Sí, pero sigue conservando, o sea, BBV o Santander funcionan con una licencia única, pero dentro del banco tienen más licencias de los procesos de fusiones.  
O sea, tú eres un taxi, te fusionas con otro. El ejemplo del taxi es malo porque hay 2 coches. En cambio, aquí acabo habiendo.  
Vale, pásale a GPT y luego me dices, voy a por Diego.  
¿Os suena, por un lado, varios 3 ideas rápidas, 3 ideas que son todas convergentes?  
3 ideas fundamentales que son convergentes y tiene que ver con la actualidad.  
Por un lado, la deuda pública estadounidense es de 38 billones, 38 billones es una sembajada pensando que el grupo de.  
¿Qué opciones?  
Los bordos no es que la deuda sea de 38000000 de bordo, sino que el último billón de deuda lo ha cogido en los últimos 70 días.  
Hoy por hoy, el gobierno estadounidense definido tiene la están.  
Tirando billetes por todos lados desde el punto de vista, el gasto público.  
Es que en España estamos con reporte de recaudación cada vez recaudando más, hay presupuestos generales del Estado, por lo tanto no está el hecho de gasto aprobado y por mucho que recaudemos, aunque el déficit lo tenemos con contenido, el gasto estamos gastando más que nunca. ¿Cuál es la diferencia entre España y Estados Unidos en los 2 sitios?  
Está por gastando como locos, pero mientras en Estados Unidos los impuestos están confirmados, aquí están descontados.  
Google.  
El espacio.  
Pedito.  
Pues estaba en 200.000 millones. Probablemente se pongan en 300.000. Y se puede subir. O sea, que tú somos el 50% de tu techo. Ocuchas el ADN de lo que no puestas.  
Vale, claro, porque que tú le subas un 50, o sea, imagínate que subes lo que dices tú un 50, ¿qué consecuencias podría tener eso, que tú subas tu techo de gasto un 50% de una tacada, déficit y deuda, pero me seguís el primer dato? ¿Entendéis que esos 38000000?  
Hacen que o sea que lo de crecer sin límite llega un momento que es que tiene un punto que no puedes, segunda idea.  
Segunda idea.  
La inteligencia artificial.  
¿Os suena que Microsoft le dio?  
¿Sale, os suena el titular de que Microsoft le dio a OpenAI 10000 millones? Sí, realmente no le dio 10000 millones. Realmente lo que le dio es servicios en la nube, tokens de.  
Tokens de como sea de Azure, tokens de Azure por valor de 10000 millones. O sea, esto es equivalente a que tú me pides que me meta en una empresa y yo te doy 10 horas de clase valoradas cada hora en 1000000. ¿Lo estoy exagerando, pero entiendes que te he dado 10000000?  
En 10 horas.  
Básicamente.  
Por otro lado, Nvidia recibe dinero de Oracle, recibe dinero de, o sea, recibe flujos de OpenAI. O sea, entre todas se están realimentando. Open, o sea, Nvidia tiene una capitalización bursátil de 5 billones, 5 trillions.  
¿Qué os quiero decir con eso? O sea, y consume OpenAI necesita pasta para poder seguir creciendo o dando servicio. O sea, hoy por hoy yo pago 20 pavos de GPT, pero GPT es deficitario en tema de energía y capacidad de proceso. ¿Me seguís? ¿Segunda idea que os quiero decir?  
Con la inteligencia artificial, probablemente necesiten todavía más liquidez.  
Más liquidez porque hay que seguir inflando la burbuja, claro, que haya sonado.  
Visto, tercera idea, que es la de los aranceles. Trump ha estado cobrando unos aranceles. ¿Quién paga los aranceles? Los americanos, el América.  
¿Qué dice Trump que va a hacer para el 2026?  
El las elecciones de medio mandato de 2026 ha dicho que va a dar un cheque de 2000 USD a cada americano, un cheque de 2000 USD a cada americano por 300000000 de americanos.  
La pasta, estamos hablando de medio billón, más de medio billón.  
Por un lado es un dinero que tú les has quitado a los ciudadanos, lo que vas a hacer con ese dinero te vas a dar un poquito de lo que le has quitado.  
Pero si tú le das un cheque directamente a los ciudadanos que hemos visto la otra sesión, ¿qué pasa? Inflación, inflación en vena, tú estás metiendo, estás haciendo que auménteme 2. A ver, no sé si va a estallar o no va a estallar, pero sí que tiene un problema asociado con la liquidez.  
Que a mí me parece que tiene unas magnitudes estratosféricas. O sea, estamos hablando, luego tienes el creciendo, luego tienes el tema de la IA y luego tienes lo de los aranceles, que también puede llegar a pasar que algún tribunal estadounidense declare ilegales los aranceles y los declaras. O sea, si por un lado da un cheque.  
Por otro lado, se declaran ilegal en los aranceles, pierden el gasto público.  
La inflación le viene bien para el gasto público, pero el problema de la inflación Biden.  
Mi parte perdió las elecciones, no es broma, no es broma por los huevos.  
¿Por el precio de los huevos, no? ¿Entendéis por qué estoy hablando ahora del precio de los huevos, no?  
Porque ahora los huevos como están del dato del IPC de la semana pasada, el IPC es 3,1 porque los huevos habían significado un 5 * 101 22% de subida anual.  
Y ahora que han subido 5 eur. ¿De qué estoy hablando? De que hay una serie de problemas asociados con la liquidez que yo creo que hay que tener presente.  
¿Por qué? Por lo que pueda pasar. ¿Cómo va a salir esto? No tengo ni idea. Normalmente, no sé si estoy en lo cierto, pero la economía europea es un poco el reflejo de lo que sucedió en Estados Unidos. Sí, pero en este caso no con más. Vale, es mi pregunta, hasta qué punto lo que vaya a poder a pasar, imagínate que explotase supuestamente.  
Por un lado, antes de responder a tu pregunta de reflejo de Europa, o sea, os habéis visto hoy la noticia asociada con.  
Stephen, Stephen Miran es.  
Yes.  
Espera ese sobre las stable coins.  
Hello.  
Este es Stephen Mirrams, este es Scott Bessen, que es el secretario del Tesoro, pero es el del Banco de España, que es el Miren. La idea es, ¿sabéis lo que son las stablecoins?  
Vale, hablaremos de stablecoins. Stablecoins es una cripto que o sea, tú tienes bitcoins para comprar bitcoins con dólares no puedes. ¿Por qué? Porque es un ecosistema cerrado. O sea, tú puedes comprar, pero le tienes que dar dólares a alguien que te va a dar los bitcoins. Lo suyo es, si tú quieres comprar criptos, es comprarlos con criptos.  
Y la stablecoin es una cripto que es un cambio fijo con el dólar.  
Hoy una de las noticias ha sido que.  
Ese de la foto es Scott Dessen, el otro, Stephen Miran, que es el que acaba de entrar en la silla de la Reserva Federal. Ha dicho que van a adoptar las, o sea, ahora las stable, o sea, las ha potenciado la Estados Unidos está potenciando las stablecoins. ¿Por qué?  
Porque cada stablecoin tiene que tener por ley en Estados Unidos por detrás de reserva 1 USD.  
O sea, las stablecoins sirven para justificar en parte la impresión de más dólares. ¿Me explico?  
Google.  
Dime, dime, o sea, yo lo que tenía entendido también de las criptomonedas es que una de sus grandes esposas es que estaba un poco descentralizada en plan de las criptomonedas en general descentralizadas. Pero si tú quieres comprar, hay una Coinbase, ¿te suena? Coinbase es un exchange que salió a cotizar a bolsa. ¿Por qué?  
Y cotiza en bolsa. ¿Por qué salió a cotizar en bolsa? Porque los dueños de Coinbase tenían un montón de criptos, pero si tú intentas comprar el pan con cripto, pues lo pues va a ser que no. O si quieres comprarte una casa con cripto cuesta. O sea, al final, por mucho Coinbase que tengas, necesitas dólares para comprar cosas en dólares y Coinbase sale a bolsa.  
Para que los dueños pudieran tener dólares.  
O sea, las stablecoins conectan el mundo cripto con el mundo tradicional y Estados Unidos lo que quiere es convertir que todas las stablecoins funcionen con dólares.  
¿A qué nos dedicamos en Europa? Pues deberíamos de tener una cosa, que es el euro digital, que si existiera el euro digital, las criptos, el lobby de bancos han pagado a un montón de gente para que hay chpestes del euro digital, que si nos roban no sé qué, no sé cuántos, probablemente digo el euro digital.  
Y haya gente en esta clase que haya estado viendo vídeos de YouTube que diga no te preocupes porque ya no va a salir, sale solo minorista. El lobby bancario ha conseguido que el euro digital no funcione y al final desde Europa no tenemos respuesta o bien a un hipotético dólar.  
Digital o bien a las stablecoins que estarán respaldadas por dólares.  
Hola.  
Está bien, no se puede controlar.  
Sí, a ver, por un lado, si función, no, si funciona el euro digital.  
Las criptos desaparecen si funcionar, digo 1 euro digital, si hubiera un dinero, a ver, a ver, desaparece, no tendrían tanto, o sea, la economía a la gente en general por dormir tranquila.  
No le importa pagar impuestos, no le importa que le roben, no le importa que haya corruptos gobernando un país. La gente lo que quiere es dormir tranquila. O sea, el euro digital lo que hace es que funciona en Internet. Las criptos o las stablecoins funcionan también en Internet, pero si hubiera una universidad.  
Fuerte, si hubiera una universidad fuerte, la gente vendría a la universidad a aprender y no se iría a YouTube, no se iría a otros sitios a aprender. El problema es que como la universidad.  
El sitio donde en teoría habría que aprender está floja. La gente se va a otros sitios, pues con las con el euro digital, con las stablecoins, con el mundo cripto, sucede lo mismo. ¿Qué te vende el mundo cripto? Una economía paralela.  
Eso es mentira, no hay una economía paralela en cripto. O sea, hoy por hoy las stablecoins son 0,3 billones, o sea, 300000 millones la capitalización. El bitcoin, si miras la capitalización del bitcoin, ha dicho el BlackRock que ha estado en 80000. ¿A cuánto ha cerrado hoy? Se ha metido hoy un guantazo.  
Blumber, Blumber, sí.  
Yeah.  
O sea, son 19000000, son 19000000, vale, pero hoy se había metido un guantazo.  
¿Cuánto es?  
A ver, voy a echar uno, es que ¿dónde está la capital? ¿Dónde se ve aquí la capitalización? ¿Dónde lo dónde?  
No, pero esto son 19000000 de bitcoins, o sea, las unidades dónde no uno coma 1,85 trillions.  
Pues es bastante más de la que yo te hubiera dicho.  
Que importante no es 1,85 trillions que se haya pagado por todos los bitcoins que hay, el último bitcoin que se ha negociado multiplicado por el número de bitcoins, que hay muchos bitcoins perdidos, pero a lo que voy es el bitcoin, no lo sé, el bitcoin es en porcentaje el 60% de toda la capitalización de las criptos.  
Lo que te quiero decir es que el movimiento que hay de cripto es residual en comparación con la economía real.  
Yo soy fan, soy fan del mundo cripto, pero la gente quiere tener estabilidad y la gente quiere funcionar en un, o sea, el por qué no ha salido el euro digital.  
Por el lobby bancario junto, porque si hubiera salido el euro digital no te van a controlar a ti.  
Porque tú ya estás controlado por Hacienda, Diana Montoro, tú con el euro digital, ¿a quién vas a poder controlar?  
El gasto público.  
Y no interesa.  
Las chistorras te suenan y todo, o sea, lo que te quiero decir es que al final todo el tema asociado con el euro digital o el mundo cripto o dinero digital que funciona en Internet.  
A quien debería de preocupar es al o sea, al multiplicador bancario, o sea, porque o sea, si tú tienes de dinero depositado en el Banco Central, estás cargando, pero esto ya es pasado, o sea, esto en Europa ya no va a ser el euro digital es minorista, o sea, vamos a seguir con los bancos funcionando, que para mi máster estupendo, o sea, porque va a seguir habiendo más bancos.  
Pero si hubiera un cambio para mi máster también estupendo. ¿Por qué? Porque nos tendríamos que adaptar a ese cambio.  
¿Te suena a un señor que se llama?  
*****, el de las gafas de pasta, ¿cómo se llama? Mar Vidal, Mar Vidal, si tú miras.  
Aquí está el LinkedIn con los Marc Vidal.  
Euro digital euro.  
Euro digital, vale, si veis.  
Con el euro digital Mar Vidal, todo lo que dice es que el euro digital es malo, malo, malo, malo.  
A mí me llamaron los de en 2021 2022 me llamaron de Prosegur y Lumis.  
Y me ofrecié, o sea, me estaban hablando de que tenían un lobby para Lumis, Lumis es, pero seguro y Lomis, Lomis.  
Ya estaba mal pensando, no sé en qué no se me puede ocurrir, no, a ver Prosegur, ¿sabéis a qué se dedica a Prosegur? A seguridad privada, no, a ver, sí se dedica, tiene 3 líneas de negocio: alarmas, guardias de seguridad y su dinero.  
¿Y su dinero?  
Y su dinero, aquí a ver, porfa, y con esto acabamos. La el La división que tiene Prosegur de doble dígito, la que más rentabilidad les da, tiene que ver con el movimiento efectivo.  
Y movimiento efectivo tienen fuenlabrada, una esta para contar billetes, una máquina de contar billetes.  
Claro, de los camiones blindados estos que ya Contar efectivo y movimiento efectivo. Prosegur gana mucho, mucho, mucho, mucho dinero contando efectivo.  
¿Entendéis que a Prosegur no le interesa que haya euro digital o dinero digital?  
No, haya gente a la que menos le interesa, todo el tema de economía sumergida. No lo quería decir que es uno de los que más le afectaría directamente. Sí, a ver, no lo sé, pero porque de economía sumergida, pero a mí me llamó, pero seguro, me llamaron y les dije, habéis visto todas mis publicaciones en redes y no me volvieron a llamar, porque me llamaron para ofrecer que tenían un lobby, que no sé que me querían contratar para que pusiera parir el dinero de.  
Y le dije que no, a ver, que no, porque no me sale. O sea, tampoco le dije que no directamente, me llamaron, me preguntaron, le dije, habéis visto mi canal, tal cual no me voy a ir a llamar. O sea, mi canal no es canal, sino mi. O sea, yo no soy capaz de.  
¿Vender tus principios? No, vender principios no. O sea, tengo una, o sea, yo vendo lo que sea, pero el problema es que lo de mentir me cuesta, o sea, ponerme en la te, o sea, si pienso algo, lo suelo decir. Sí, como antes.  
Sí, que directamente lo dijiste. He confesado, sale, no he podido con todo, no digáis nada. Y en cuanto he confesado, he confesado y he dicho, ya ha sido esto, no, o sea, asumo a la responsabilidad, pero si te tengo detrás, bien.  
Sí, pero tú conmigo, o sea, yo detrás, claro, el chiche tu pegado. Esto lo decía un jesuita, Raúl, Raúl, seguro, lo decía un jesuita que falleció el padre Arroyo, decía, si alguna vez, o sea, dice, la mejor forma de financiarse, ¿sabéis cuál es?  
No pagar, no pagas, de financia estupendamente. Y luego, si alguna vez queréis cobrar, tienen que ir 2 personas, una muy grande y otra pequeñita, y que solo hable el pequeñito y que el pequeñito diga, es que este, es que o sea, seguimos hablando en.  
He enganchado el ordenador y no os he enseñado nada de las locuras de bueno, es le he pedido el informe de lo que llevamos dado.  
He pedido el informe este, que es una pasada, este.  
¿Habéis visto qué locura?  
He cubierto el 60%, el tema cero, el 30%, 40%. Cuando me llame Antonio, que le voy a decir que llevo todo. Y otra cosa hablando ya de la economía sumergida. Al final, por ejemplo, España es un país que tiene bastante dependencia de economía, o sea, en el que se empezó a incluir en el tema del PIB se vio que el PIB que más creció de tal era España. El problema de la economía sumergida es que es muy difícil medirla.  
Sí, pero que, por ejemplo, imagínate si ese euro digital entra y un país que no te obviamente no vas a depender de la economía sumergida, pero si al final es un gran esto de tu. ¿Por qué no ha entrado? Yo creo que por una suma de temas desde la administración pública no interesa que se controle desde la economía sumergida con el año 2008.  
Que esto lo hablamos con calma otro día, pero en el año 2008, bueno, en España, a ver, en el año 2008 hubo una crisis sistémica.  
A ver, os lo cuento, os hago el resumen y luego se nos en el año 2001 está el atentado de las Torres Gemelas. En el año 2001 empieza la lucha contra el terrorismo. Entre la lucha contra el terrorismo aparece, empiezan a darle mucha acera a blanqueo de capitales en el 2001, o sea, la ley que tenemos.  
De blanqueo de capitales se llama ley, la Ley 10 del 2010, Ley 10, creo que es 10 del 2010 de blanqueo de capitales. ¿Y os suena?  
Mira justo la ley 10 del 2010, mirar el título.  
De ahí de blanqueo de capitales, sí.  
Y financiación del terrorismo. Lo que digo es a raíz del 11 S empezaron a luchar, se empezó a luchar a raíz del 11 S contra el terrorismo y como se suicidaban los terroristas, ¿tú qué hacías para atacarles? Ir contra la financiación, pero como empiezas a luchar contra.  
El blanqueo de capitales no va solo contra el terrorismo, sino vas también contra el narcotráfico y contra todo el blanqueo de capitales. ¿Me seguís?  
En el año sí, correcto. En el año 2008 el sistema financiero se vino abajo. ¿Y cómo se rescató el sistema financiero? En parte con la Reserva Federal, en parte con el Banco Central. Y voy a ser muy fino. Y esto ha pasado en España tal cual. En España hubo 2.  
Amnistías fiscales.  
¿Qué son las amnistías fiscales?  
No, en España, en España hubo 2 amnistías fiscales. Hubo un momento, creo que fueron con Montoro, amnistías generales en España entera. ¿Qué es una amnistía fiscal? Tú puedes traer tu dinero a España.  
Y no te voy a preguntar de dónde viene, de dónde viene. Eso se hizo 2 veces. ¿Pero me entendéis lo que estoy diciendo? Hay un problema financiero tremendo.  
Y para resolver el agujero económico que tenemos se hace una amnistía fiscal que no se hicieron una ni se hicieron 2.  
2 amnistías, 2, o sea, amnistías fiscales España, amnistía fiscal.  
España, es esto una ******, porque cuando te va mal te pones a hacer cualquier cosa aquí y luego te pones a criticarlo en el 91 y en 2012. Lo haces porque te viene bien, porque no tal de no sé qué y luego lo criticas y lo persigues. Sí, ¿qué sentido tienes? La importante a la que me estoy refiriendo yo es a la del 2012, vale.  
En 2012 con Montoro anunció una nueva amnistía fiscal por bienes no declarados, incluyendo activos escondidos en paraísos fiscales. La repatriación se permitió mediante el pago de un impuesto del 10% sin sanción penal. En esta la amnistía hizo aflorar 40000 millones de euros no declarados.  
Y Hacienda 1700. ¿Me seguís lo que estoy diciendo? Esto es en España en 2012, pero si buscáis noticias después del año 2008, ¿de cuántas veces ha entrado la policía a registrar las oficinas de Slik de Oreton Etchebank? El otro día estaba en Acciona. Bueno, pero lo de Acciona tiene que ver con lo del Santo Cervantes. Es que es el frente de mi casa claro.  
Entre el año, resumen rápido y nos vamos. Entre el año 2001 y el 2008 se luchó contra el narcotráfico y contra su financiación. Exacto, pero en el 2008.  
Quiebra el sistema legal financiero y cómo se tiene que rescatar ese sistema con eso que estás persiguiendo con lo que sea. Por un lado se inyecta liquidez y por otro lado hay un dinero que estaba escondido, que aflora, y ese dinero sigue haciendo, o sea, medio Idex, o sea, mirar quién tiene, o sea, está todo mezclado.  
¿Y de 35, lo tiene BlackRock? ¿Cuánta parte de la de cuánta pasta de la de BlackRock viene de unos orígenes desconocidos? Pero Luxemburgo os suena, es un país. Sí, es broma, pero no tanto.  
Más cosas, preguntas, no, yo es que he metido otra noche y ya perdón.  
No, a ver, nos vamos, pero seguimos.  
¿Sí, que te llevo preguntando una hora yo solo y más son curiosidades, no, pero lo que Andrea, qué tal?  
Y.  
Yasmin.  
César.  
¿Pero por qué? ¿Has visto las ojeras que tienen? Y ha venido a las 9:00 de la mañana.  
Pues César, mis dieces.  
O sea, y por ha salido.

---

## 🧭 Conexiones
- **Asignatura Central:** [[00 Área operativa/01 Asignaturas/06 MUGRF 2025-26|06 MUGRF 2025-26]]
