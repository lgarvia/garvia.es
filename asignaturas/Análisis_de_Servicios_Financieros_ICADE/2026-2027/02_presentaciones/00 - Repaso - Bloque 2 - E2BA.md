# Banca para el parcial

**Análisis de Servicios Financieros (E2BA) · Curso 2026-27 · Examen parcial del 29 de octubre de 2026**

*Prof. Luis Garvía*

---

## Cómo usar este documento

Este documento reúne todo lo que tienes que saber de banca para el parcial. Sigue la lista de conceptos que se os envió y la explica con los ejemplos que hemos usado en clase.

Los conceptos de la lista que se tratan aquí son:

- 2 · Banca pública frente a banca privada
- 3 · Mecanismo Único de Supervisión (MUS)
- 9 · Coeficiente de caja y reservas mínimas
- 10 · Mercado interbancario y Euribor
- 11 · Riesgo sistémico
- 12 · Diferencia entre liquidez y solvencia
- 32 · Fondo de Garantía de Depósitos y FOGAIN
- 35 · Intermediación financiera (transformación de plazos y riesgos)
- 37 · Crisis de liquidez frente a crisis de solvencia bancaria
- 38 · Supervisión financiera por actividad frente a supervisión por entidad

Para que se entiendan, antes hay que saber qué es un banco, cómo gana dinero y qué riesgos asume. Por eso los capítulos 1 a 3 dan el contexto. Al final de cada capítulo tienes el **chunk**: la frase corta que activa todo lo demás. Al final del documento hay preguntas de práctica con su respuesta modelo.

> **La idea que lo une todo:** la banca no se sostiene por el dinero que guarda, sino por la confianza que inspira.

---

## 1. ¿Qué es un banco?

### 1.1. La palabra clave: depósitos

Mucha gente puede prestar dinero: un amigo, una empresa a sus clientes, un fondo de inversión, una plataforma de crédito. **Prestar no te convierte en banco.**

Lo que define a un banco es que tiene **licencia para captar depósitos del público**. Ese es el elemento diferencial. Todo lo demás (préstamos, tarjetas, avales, fondos que comercializa) se construye alrededor de esa actividad.

> **Banco → licencia → depósitos.** Si en el examen te preguntan qué distingue a un banco, la palabra que buscamos es *depósitos*.

### 1.2. La analogía del taxi

Te puedes subir al coche de un desconocido en la calle solo si es un **taxi**. Puedes hacerlo porque el ayuntamiento le ha dado una **licencia**: alguien ha comprobado que el coche y el conductor cumplen unas condiciones, y el taxista a cambio tiene obligaciones (tarifas, servicio, inspecciones).

Con un banco pasa lo mismo. Entregas tu dinero a una entidad que no conoces personalmente porque tiene una **licencia bancaria**. Alguien la vigila, y a cambio está sometida a una regulación muy intensa.

La analogía sirve también para lo que ha pasado después. Igual que Uber y las VTC compiten con el taxi sin su misma regulación, **los brokers electrónicos, las fintech y las plataformas** compiten hoy con los bancos en servicios que antes solo daba el banco. Antes de Internet, si querías comprar acciones, un fondo o un seguro, ibas a tu banco. Hoy muchos jóvenes no pisan un banco para invertir.

**¿Quién concede la licencia?** En la zona euro, desde noviembre de 2014, la licencia bancaria la concede el **Banco Central Europeo, a propuesta de la autoridad nacional** (en España, el Banco de España). Ver el capítulo 9.

### 1.3. Un fondo no es un depósito

Es una diferencia que cae en examen y que une el bloque de banca con el de inversión colectiva:

| | Fondo de inversión | Depósito bancario |
|---|---|---|
| Qué tienes | Participaciones de un patrimonio | Un crédito contra el banco |
| Quién decide qué se hace con el dinero | La gestora, según el folleto | El banco, sin preguntarte |
| Quién asume el riesgo | Tú | El banco (y hasta 100.000 €, el FGD) |
| Si quiebra la gestora o el banco | Tus activos siguen en la depositaria | Eres un acreedor más |
| Supervisor | CNMV | BCE / Banco de España |

> **En el fondo, el dinero sigue siendo tuyo. En el banco, pasa a ser del banco: tú tienes una promesa.**

**Chunk del capítulo 1:** *banco = licencia para captar depósitos.*

---

## 2. Cómo gana dinero un banco y qué vende

### 2.1. Dos fuentes de ingresos

1. **Margen de intermediación.** Es la diferencia entre lo que el banco cobra por prestar (los intereses de préstamos e hipotecas) y lo que paga por captar dinero (los intereses de los depósitos). Cuando suben los tipos, este margen suele ampliarse, porque los préstamos se revisan antes y más que la remuneración de los depósitos.
2. **Comisiones.** Por servicios: tarjetas, transferencias, gestión de cuentas, venta de fondos y seguros, avales.

### 2.2. Lo que vende un banco: dinero y confianza

En clase hemos dividido los productos bancarios en dos familias.

**Productos que proporcionan financiación (dinero):**

- **Préstamo:** el banco entrega una cantidad al principio y el cliente la devuelve en cuotas (amortización) con intereses.
- **Préstamo hipotecario:** un préstamo cuya **garantía** es un inmueble. La hipoteca no es el préstamo: es la garantía del préstamo.
- **Línea de crédito:** el banco pone a disposición un **máximo** que el cliente usa cuando lo necesita. Solo paga intereses por lo que usa (más una comisión por tener la línea disponible).
- **Tarjeta de crédito:** detrás hay financiación. La tarjeta de débito, en cambio, solo carga lo que ya tienes en la cuenta.

**Productos que proporcionan confianza (sin entregar dinero):**

- **Aval bancario:** un documento por el que el banco garantiza que, si su cliente no cumple, pagará él. Por ejemplo, ante la Administración en un concurso público. El banco no da avales a cualquiera: tiene que conocer y confiar en su cliente. Se parece a una pistola que existe precisamente para no usarse: **un aval nunca debería ejecutarse.**
- **Carta de crédito (crédito documentario):** resuelve un problema del comercio internacional. El vendedor no se fía de que el comprador pague; el comprador no se fía de que el vendedor entregue. Los bancos de cada parte se interponen: el banco del comprador se compromete a pagar cuando el vendedor presente los **documentos** que acreditan la entrega. La desconfianza entre comprador y vendedor se sustituye por confianza entre bancos.

> **Un banco no vende solo dinero: también vende confianza.** Y se puede cuantificar en euros: un aval de 3.000 € son "tres mil euros de confianza".

**Chunk del capítulo 2:** *el banco vende dinero y vende confianza.*

---

## 3. Los riesgos de un banco

### 3.1. Confianza y riesgo: dos caras de la misma moneda

Las finanzas gestionan un **futuro incierto**. Si existe confianza es porque existe incertidumbre: si supiéramos con certeza qué va a pasar, no haría falta confiar. Por eso **un banco es, en esencia, una empresa especializada en gestionar riesgos**. La gestión del riesgo no es una actividad secundaria: es el negocio.

### 3.2. Los principales riesgos

| Riesgo | Qué es | Ejemplo |
|---|---|---|
| **Crédito** | Que el prestatario no devuelva lo que debe | Las hipotecas impagadas de 2008 |
| **Mercado** | Que cambien tipos de interés, precios o divisas | Los bonos de SVB tras las subidas de tipos de 2022 |
| **Liquidez** | No poder atender los pagos en un momento dado (por ejemplo, porque los depositantes retiran a la vez) | SVB, 2023; el pánico de *Mary Poppins* |
| **Operacional** | Pérdidas por errores, fraudes, fallos de personas, procesos o sistemas | Nick Leeson hunde el Barings (1995) |
| **Reputacional** | Que se pierda la confianza del público | Las tarjetas *black* |
| **Sistémico** | Que el problema de uno se contagie a todo el sistema | Lehman Brothers, 2008 (capítulo 6) |

**El riesgo de crédito** es probablemente el más importante. La propia palabra viene de *creer*: el banco presta porque cree que le van a devolver. El proceso es: información → evaluación → confianza → crédito. El problema aparece cuando esa confianza estaba equivocada.

### 3.3. Cuidado con el "riesgo de mercado"

"Riesgo de mercado" significa cosas distintas según el negocio. Para Repsol es el precio de la energía. Para un banco, que negocia con dinero, el riesgo de mercado son sobre todo dos:

- **riesgo de tipo de interés**;
- **riesgo de tipo de cambio (divisa)**.

> Siempre hay que preguntarse: **¿riesgo de mercado respecto de qué mercado y para qué institución?**

### 3.4. Tipos de interés, bonos y duración

La regla fundamental de la renta fija: **si suben los tipos de interés, baja el precio de los bonos**. Y cuanto más largo es el bono (mayor **duración**), más cae.

Los bancos tienen carteras de bonos no necesariamente para especular. Las usan para **gestionar la duración de su balance**: ajustar la sensibilidad de sus activos y sus pasivos a los tipos (cobertura o inmunización). Si lo hacen mal, una subida de tipos les puede hacer mucho daño. Es exactamente lo que le pasó a Silicon Valley Bank (capítulo 10).

**Chunk del capítulo 3:** *un banco es un gestor de riesgos; para un banco, riesgo de mercado = tipos y divisa.*

---

## 4. Intermediación financiera: la transformación (concepto 35)

### 4.1. Qué hace un banco por la economía

El sistema financiero canaliza el **ahorro** de quien tiene dinero y no lo necesita ahora hacia la **inversión** de quien lo necesita y no lo tiene. El banco lo hace como **intermediario**: capta depósitos y concede préstamos. En el camino transforma tres cosas:

1. **Plazos.** Capta dinero **a corto** (depósitos a la vista, que puedes retirar hoy) y lo presta **a largo** (hipotecas a 30 años).
2. **Riesgos.** El depositante casi no asume riesgo. El banco asume el riesgo del prestatario y lo diversifica entre miles de préstamos.
3. **Importes.** Junta muchos depósitos pequeños para conceder préstamos grandes.

### 4.2. El balance en dos columnas

| Pasivo (lo que el banco debe) | Activo (lo que el banco tiene) |
|---|---|
| Depósitos a la vista: se pueden retirar **hoy** | Hipotecas a 30 años: **no se pueden vender mañana** |
| Capital de los accionistas | Bonos, préstamos a empresas, reservas en el banco central |

Esto funciona **mientras no todos pidan su dinero a la vez**. El banco no guarda en una caja el dinero de cada depositante: lo ha prestado. Si un día todos van a retirarlo, no está.

### 4.3. Mary Poppins (1964)

En la película, un niño reclama a gritos en el banco los dos peniques que su padre quería que depositara. Los clientes que lo oyen creen que el banco no paga y corren a retirar su dinero. El banco tiene que suspender pagos. **Es un pánico bancario**: nadie había dejado de pagar un préstamo, pero bastó perder la confianza.

> **Lo que hace un banco es exactamente lo que lo hace frágil.** Por eso existen el banco central, el Fondo de Garantía de Depósitos y la regulación bancaria.

**Chunk del capítulo 4:** *a la vista por arriba, a 30 años por abajo.*

---

## 5. Liquidez frente a solvencia (conceptos 12 y 37)

### 5.1. Dos conceptos que no son sinónimos

- **Liquidez:** la capacidad de atender los pagos **ahora**. ¿Tienes efectivo (o activos que se conviertan rápido en efectivo) para pagar hoy?
- **Solvencia:** que el **valor de tus activos supere al de tus deudas**. ¿Te queda patrimonio neto positivo cuando lo sumas todo?

### 5.2. Dos bancos inventados

| | Banco A | Banco B |
|---|---|---|
| Activo | Préstamos excelentes a 30 años, casi sin caja | Mucha caja, pero una cartera de préstamos llena de impagos |
| Situación | **Solvente pero ilíquido** | **Líquido pero insolvente** |
| Qué le pasa | Si mañana hay una retirada masiva, no puede pagar aunque sus activos sean buenos | Puede pagar hoy, pero sus pérdidas ya superan su capital: está quebrado aunque aún no se note |
| Qué lo arregla | Que alguien le preste contra sus buenos activos: **el banco central** | Más **capital**: ampliación, rescate o resolución |

> **El primero lo arregla el banco central; el segundo solo lo arregla el capital.**

### 5.3. Crisis de liquidez frente a crisis de solvencia (concepto 37)

**Crisis de liquidez.** El banco no puede pagar hoy, aunque sus activos valgan. El detonante suele ser un **pánico**: los depositantes retiran a la vez. Las respuestas son:

- el **prestamista de última instancia**: el banco central presta al banco contra garantías;
- el **Fondo de Garantía de Depósitos**, que frena el pánico, porque si sabes que cobras, no corres;
- las **inyecciones de liquidez** al sistema.

**Crisis de solvencia.** Las pérdidas superan al capital: el banco ha perdido más de lo que tenía. Prestarle dinero no arregla nada; solo retrasa el problema. Las respuestas son:

- nuevo **capital** (de los accionistas o de un comprador);
- un **rescate** con dinero público;
- una **resolución** ordenada, en la que pierden primero los accionistas y los acreedores, no el contribuyente.

### 5.4. Lo peligroso: una se convierte en la otra

Las dos crisis se contagian entre sí:

1. Empieza una retirada masiva (**liquidez**).
2. Para pagar, el banco tiene que **vender activos deprisa y con descuento** (venta forzosa).
3. Esas ventas materializan **pérdidas**.
4. Las pérdidas se comen el capital → **solvencia**.

Y al revés: si el mercado sospecha que un banco tiene pérdidas ocultas (solvencia), los depositantes y los demás bancos le retiran la financiación (liquidez).

- **2008** empezó como un problema de **solvencia** (hipotecas *subprime* que no se pagaban y activos tóxicos) y se convirtió en una crisis de **liquidez**: el mercado interbancario se congeló.
- **SVB (2023)** empezó como **liquidez** (retirada masiva) y se convirtió en **solvencia** al vender bonos con pérdidas.

**Chunk del capítulo 5:** *liquidez = ¿puedes pagar hoy? Solvencia = ¿vale tu activo más que tu deuda?*

---

## 6. Riesgo sistémico (concepto 11)

El **riesgo sistémico** es el riesgo de que el problema de una entidad o de un mercado se **propague** al conjunto del sistema financiero y, desde ahí, a la economía real.

Banco A tiene un problema → sus contrapartes pierden → otros bancos dejan de prestarse → los mercados caen → las empresas no encuentran crédito → la economía real.

**Por qué se contagia:**

- **Exposiciones mutuas.** Los bancos se prestan entre sí y tienen contratos (derivados) unos con otros.
- **Pánico.** Si cae uno, los depositantes de otros parecidos también corren.
- **Ventas forzosas.** Si un banco vende activos con descuento, baja el precio de esos activos para todos los que los tienen.

**Consecuencia:** hay entidades **demasiado grandes (o demasiado conectadas) para caer** (*too big to fail*). Por eso los bancos están mucho más regulados que la mayoría de las empresas. La pregunta del regulador ya no es solo "¿puede quebrar este banco?", sino **"¿qué le pasa al resto del sistema si este banco tiene problemas?"**.

**Ejemplos:**

- **Lehman Brothers (15 de septiembre de 2008):** su quiebra congeló el mercado interbancario mundial.
- **SVB (marzo de 2023):** las autoridades de EEUU garantizaron **todos** los depósitos, también los que superaban el límite asegurado, invocando precisamente la **excepción por riesgo sistémico**.

**Chunk del capítulo 6:** *cuando el problema de uno se convierte en el problema de todos.*

---

## 7. El mercado interbancario y el Euribor (concepto 10)

### 7.1. Qué es

Los bancos no tienen cada día exactamente el dinero que necesitan: unos tienen excedentes y otros, faltas. El **mercado interbancario** es el mercado mayorista en el que **los bancos se prestan liquidez entre ellos**, normalmente a plazos cortos (de un día a doce meses).

### 7.2. El Euribor

El **Euribor** (*Euro Interbank Offered Rate*) es el tipo de interés de referencia de esos préstamos entre bancos en euros, a distintos plazos (1, 3, 6 y 12 meses). Lo publica cada día hábil el EMMI (European Money Markets Institute).

Importa a todo el mundo porque **la mayoría de las hipotecas variables en España se referencian al Euribor a 12 meses** (Euribor + un diferencial).

**Cuidado:** el Euribor **no lo fija el BCE**. El BCE fija los tipos oficiales; el Euribor es un precio de mercado que se mueve, sobre todo, con lo que el mercado espera que haga el BCE.

### 7.3. Lo que nos enseñó 2008

El interbancario funciona con **confianza**: le prestas a otro banco porque crees que te lo devolverá. En 2008 nadie sabía qué banco tenía activos tóxicos en su balance, así que **nadie prestaba a nadie**. El mercado interbancario **se congeló** y los bancos centrales tuvieron que sustituirlo, inyectando liquidez masivamente. Fue una crisis de confianza antes que de dinero.

> El tipo del interbancario es, en el fondo, **el precio al que los bancos se fían unos de otros**.

**Chunk del capítulo 7:** *el interbancario es la confianza entre bancos, y el Euribor es su precio.*

---

## 8. Bancos y banco central: el coeficiente de caja (concepto 9)

### 8.1. Los bancos crean dinero

El banco central crea la **base monetaria (M0)**: el efectivo más las reservas de los bancos en el banco central. Pero la mayor parte del dinero que usamos (los depósitos, que forman M1, M2 y M3) lo crean **los bancos al prestar**:

1. Un banco recibe un depósito de 100.
2. Guarda una parte como reserva y presta el resto.
3. Ese préstamo acaba depositado en otro banco, que vuelve a prestar una parte.
4. Y así sucesivamente.

La relación entre el dinero total y la base monetaria es el **multiplicador monetario**.

### 8.2. Coeficiente de caja y reservas mínimas

El **coeficiente de caja** (o de reservas mínimas) es el **porcentaje de los depósitos que un banco tiene que mantener como reservas en el banco central**: lo que no puede prestar.

- Cuanto **menor** es el coeficiente, **más puede prestar** el banco y **mayor** es el multiplicador teórico.
- Cuanto **mayor** es el coeficiente, menos se presta y menos dinero se crea.

**Datos actuales:**

- **BCE:** el coeficiente de reservas mínimas es del **1 %** desde enero de 2012 (antes era del 2 %).
- **Reserva Federal:** es del **0 %** desde marzo de 2020.

Hoy pesa más como concepto que como herramienta activa de política monetaria.

**No lo confundas con los requisitos de capital.** Las **reservas** son **liquidez** que el banco tiene depositada en el banco central. El **capital** es lo que han puesto los accionistas y sirve para absorber pérdidas: es **solvencia**.

### 8.3. El banco central como red de seguridad

Además de fijar los tipos de interés, el banco central es el **prestamista de última instancia**: en una crisis de liquidez presta a los bancos solventes contra buenas garantías. En 2008, en la pandemia y en 2023 lo hizo con **inyecciones de liquidez** extraordinarias. En marzo de 2023, la Fed abrió el **BTFP**, un programa que prestaba a los bancos contra sus bonos **valorados a la par** (por su valor nominal, no por lo que valían en el mercado tras las subidas de tipos). Funcionó del 12 de marzo de 2023 al 11 de marzo de 2024.

**Chunk del capítulo 8:** *el coeficiente de caja es lo que el banco no puede prestar; cuanto más bajo, más dinero se crea.*

---

## 9. ¿Quién supervisa a los bancos? (conceptos 3 y 38)

### 9.1. El mapa español: tres partes, tres supervisores

| Parte del sistema | Supervisor | ¿Independiente? |
|---|---|---|
| Banca (entidades de crédito) | **Banco de España**, dentro del MUS del BCE | Sí |
| Mercados de valores (ESI, gestoras, IIC, emisiones) | **CNMV** | Sí |
| Seguros y fondos de pensiones | **DGSFP** | **No**: es un órgano del Ministerio de Economía |

**La costura de la independencia:** el Banco de España y la CNMV son organismos independientes del Gobierno; la DGSFP está **dentro** del Gobierno. Es una diferencia que conviene saber decir con una frase.

### 9.2. El Mecanismo Único de Supervisión (MUS)

El **MUS** es el primer pilar de la **Unión Bancaria** europea. Funciona desde el **4 de noviembre de 2014**, como respuesta a la crisis financiera y de deuda. Reparte las tareas así:

- El **BCE** supervisa **directamente** a las entidades **significativas** (los grandes bancos de la zona euro; en España, los principales grupos bancarios).
- Las **autoridades nacionales** (en España, el **Banco de España**) supervisan a las entidades **menos significativas**, siempre bajo la vigilancia del BCE y con las mismas reglas.
- Las licencias bancarias las concede el BCE para **todas** las entidades, a propuesta de la autoridad nacional.

La idea: **mismas reglas y misma supervisión para todos los bancos de la zona euro**, para que el problema de un banco no dependa de lo laxo que sea su supervisor nacional.

**No confundas el MUS con la política monetaria.** El BCE hace las dos cosas, pero son funciones separadas: una fija el precio del dinero y la otra vigila a los bancos.

### 9.3. Supervisión por entidad frente a supervisión por actividad

- **Por entidad:** el supervisor depende de **quién eres**. Un banco → Banco de España / BCE.
- **Por actividad:** el supervisor depende de **qué haces**. Un servicio de inversión → CNMV, lo preste quien lo preste.

España combina los dos modelos. Por eso **un mismo banco puede tener tres supervisores**, según la ventanilla:

| Lo que hace el banco | Quién lo supervisa |
|---|---|
| Capta depósitos y concede préstamos (solvencia, liquidez, licencia) | BCE / Banco de España |
| Vende fondos de inversión o intermedia acciones y bonos | **CNMV** |
| Comercializa seguros o planes de pensiones | **DGSFP** |

> **¿Miro quién eres o miro qué haces?** Por eso, a la pregunta "¿tiene la CNMV alguna competencia sobre los bancos?", la respuesta es **sí**: cuando prestan servicios de inversión.

**Chunk del capítulo 9:** *tres partes, tres supervisores; y uno de los tres está dentro del Gobierno.*

---

## 10. La red de seguridad del cliente: FGD y FOGAIN (concepto 32)

### 10.1. Fondo de Garantía de Depósitos (FGD)

- **Qué cubre:** los **depósitos** (cuentas corrientes, de ahorro, a plazo) hasta **100.000 € por depositante y por entidad**.
- **Quién lo paga:** **los propios bancos**, con aportaciones anuales. No es dinero de los presupuestos.
- **Para qué sirve, de verdad:** para **frenar el pánico**. Si sabes que vas a cobrar tu dinero aunque el banco quiebre, no corres a retirarlo, y sin carrera no hay pánico bancario. *El FGD existe para que no corras.*
- Además tiene un compartimento que garantiza los **valores** (acciones, bonos) que un cliente tiene depositados en una entidad de crédito, también hasta 100.000 €, si la entidad no puede devolverlos.

### 10.2. FOGAIN (Fondo General de Garantía de Inversiones)

- **Qué cubre:** a los clientes de las **empresas de servicios de inversión** (sociedades y agencias de valores y, en determinados servicios, gestoras) si la entidad quiebra y **no puede devolverles el dinero o los valores** que les había confiado.
- **Hasta:** **100.000 € por inversor**.
- Es el equivalente del FGD fuera de la banca: el FGD cubre al cliente de un banco; el FOGAIN, al cliente de una sociedad o agencia de valores.

### 10.3. Lo que ninguno de los dos cubre

**Ni el FGD ni el FOGAIN cubren las pérdidas de mercado.** Si compras un fondo o unas acciones y bajan, ese es **tu** riesgo como inversor. Lo que cubren es que la **entidad** desaparezca y no te devuelva lo que es tuyo.

| | FGD | FOGAIN |
|---|---|---|
| Protege a | Clientes de entidades de crédito | Clientes de empresas de servicios de inversión |
| Cubre | Depósitos (y valores depositados) | Dinero y valores confiados a la ESI |
| Límite | 100.000 € por depositante y entidad | 100.000 € por inversor |
| ¿Cubre que tu inversión baje? | **No** | **No** |

**Chunk del capítulo 10:** *el FGD protege tu depósito; el FOGAIN, tus valores en una ESI; ninguno, que tu inversión baje.*

---

## 11. Banca pública frente a banca privada (concepto 2)

### 11.1. La diferencia

- **Banca pública:** el propietario es el **Estado**. Puede prestar con **objetivos de política económica** (vivienda, industria, sectores estratégicos, regiones), no solo de rentabilidad.
- **Banca privada:** los propietarios son **accionistas privados**. Presta con criterios de **riesgo y rentabilidad**.

> **Quién es el dueño decide para qué se presta.**

### 11.2. Ejemplos

- **China:** los grandes bancos son estatales. En los últimos años el Estado los ha usado para **redirigir el crédito** del sector inmobiliario (Evergrande) hacia la tecnología y la inteligencia artificial.
- **Alemania:** el **KfW**, banco público de desarrollo, y las cajas de ahorros (*Sparkassen*), de titularidad pública local.
- **España:**
  - El **ICO** (Instituto de Crédito Oficial) es la agencia financiera del Estado: financia empresas y gestiona líneas públicas, como los avales de la pandemia. Técnicamente no es un banco con licencia que capte depósitos.
  - Tras la crisis, el Estado nacionalizó Bankia a través del **FROB**. Cuando Bankia se fusionó con CaixaBank (2021), el Estado se quedó como accionista de CaixaBank.

### 11.3. Ventajas y riesgos

| | Banca pública | Banca privada |
|---|---|---|
| Ventaja | Puede financiar lo que el mercado no financia (largo plazo, sectores estratégicos) y actuar contra el ciclo | Asigna el crédito con criterios de riesgo y eficiencia |
| Riesgo | Crédito mal asignado por razones políticas; pérdidas que acaba pagando el contribuyente | Crédito **procíclico**: presta mucho en los buenos tiempos y lo corta en los malos |

**Trampa de vocabulario:** "banca privada" también es el nombre de un **servicio**: la gestión de grandes patrimonios (*private banking*). Un banco público podría tener un departamento de banca privada. En este concepto, "privada" se refiere a **quién es el dueño**.

**Chunk del capítulo 11:** *quién es el dueño decide para qué se presta.*

---

## 12. El caso que lo une todo: Silicon Valley Bank (2023)

SVB era el banco de las startups de California, el 16.º banco de EEUU por tamaño. Su caída en 48 horas sirve para repasar casi todo el bloque.

| Paso | Qué pasó | Concepto |
|---|---|---|
| 1 | Sus depósitos venían de startups y fondos de *venture capital*. **La gran mayoría superaba el límite asegurado** (250.000 $ en EEUU) | Riesgo de concentración; la garantía de depósitos no frenaba el pánico |
| 2 | Invirtió esos depósitos en **bonos largos** (deuda pública e hipotecaria), sin cubrir bien el riesgo de tipos | Transformación de plazos (35) |
| 3 | En 2022 la Fed subió los tipos con fuerza → **los bonos largos perdieron mucho valor** | Tipos ↑ → precio ↓; riesgo de mercado |
| 4 | Para atender retiradas, vendió bonos con pérdidas y anunció una ampliación de capital | Pérdida que toca la solvencia |
| 5 | El **9 de marzo de 2023** los clientes, avisándose entre ellos por redes, retiraron **unos 42.000 M$ en un día**, y había peticiones por unos 100.000 M$ más para el día siguiente | Crisis de liquidez; pánico bancario (Mary Poppins con móvil) |
| 6 | El **10 de marzo de 2023** los reguladores lo cerraron | Resolución |
| 7 | Las autoridades garantizaron **todos** los depósitos invocando la **excepción por riesgo sistémico** | Riesgo sistémico (11) |
| 8 | La Fed abrió el **BTFP**: prestaba a los bancos contra sus bonos valorados a la par | Prestamista de última instancia; inyección de liquidez |
| 9 | Cayeron después Signature Bank y First Republic, y en Europa Credit Suisse acabó absorbido por UBS | Contagio |

**La pregunta clave: ¿SVB era ilíquido o insolvente?** Las dos cosas, y en ese orden. Una crisis de **liquidez** (la retirada masiva) obligó a materializar unas pérdidas que convirtieron el problema en uno de **solvencia**.

> **Un caso, cuatro riesgos:** liquidez, mercado (tipos), concentración y regulación. En 2018 EEUU había relajado la supervisión de los bancos medianos: elevó de 50.000 a 250.000 M$ en activos el umbral para la supervisión reforzada.

---

## 13. Resumen: los chunks de banca

| Concepto | Chunk |
|---|---|
| Qué es un banco | Licencia para captar **depósitos** |
| Qué vende | Dinero y confianza |
| Su función | Gestionar riesgos |
| Transformación (35) | A la vista por arriba, a 30 años por abajo |
| Liquidez / solvencia (12) | ¿Puedes pagar hoy? / ¿Vale tu activo más que tu deuda? |
| Crisis (37) | El pánico se cura con el banco central; el agujero, con capital |
| Riesgo sistémico (11) | El problema de uno se convierte en el de todos |
| Interbancario y Euribor (10) | La confianza entre bancos y su precio |
| Coeficiente de caja (9) | Lo que el banco no puede prestar |
| MUS (3) | El BCE supervisa a los grandes; los nacionales, al resto; mismas reglas |
| Actividad / entidad (38) | ¿Miro quién eres o miro qué haces? |
| FGD y FOGAIN (32) | Existen para que no corras; no cubren que tu inversión baje |
| Pública / privada (2) | Quién es el dueño decide para qué se presta |

> **Todo este bloque son formas de fabricar confianza: licencia, supervisión, garantía y banco central.**

---

## 14. Errores frecuentes (lo que no hay que escribir)

1. "Un banco presta el dinero que tiene guardado." → No: lo ha prestado ya; por eso es frágil.
2. "Liquidez y solvencia son lo mismo." → Un banco puede ser solvente e ilíquido, o líquido e insolvente.
3. "El FGD me cubre si mi fondo de inversión pierde valor." → No cubre pérdidas de mercado.
4. "El Euribor lo fija el BCE." → Es un tipo de mercado; el BCE fija los tipos oficiales.
5. "La CNMV no tiene nada que ver con los bancos." → Los supervisa cuando prestan servicios de inversión.
6. "El MUS es la política monetaria del BCE." → Es supervisión bancaria.
7. "El coeficiente de caja es el capital que tiene que tener un banco." → Las reservas son liquidez; el capital es solvencia.
8. "Riesgo sistémico = el riesgo de un banco grande." → Es el riesgo de **contagio** al sistema.
9. "Banca privada = gestión de grandes fortunas." → En este concepto, "privada" se refiere a quién es el dueño.
10. "La DGSFP es independiente como el Banco de España." → Es un órgano del Ministerio.

---

## 15. Preguntas de práctica con respuesta modelo

*Una buena respuesta corta tiene tres cosas: la definición en una frase, un ejemplo y la diferencia con el concepto con el que se confunde. Media cara es suficiente.*

**1. ¿Qué distingue a un banco de otras empresas que conceden financiación?**
La **licencia bancaria**, que le permite **captar depósitos del público**. Prestar puede hacerlo cualquiera (un fondo, una empresa, un establecimiento financiero de crédito), pero solo un banco puede recibir depósitos. Como un taxi, puede hacerlo porque tiene una licencia y una regulación que generan confianza.

**2. Explica la transformación de plazos y por qué hace frágil a un banco.**
El banco capta dinero a corto (depósitos a la vista, que se pueden retirar hoy) y lo presta a largo (hipotecas a 30 años, que no se pueden vender mañana). Esa transformación es su función económica, porque convierte ahorro en inversión. Pero también es su fragilidad: si todos los depositantes piden su dinero a la vez, el banco no lo tiene disponible. Es el pánico bancario de *Mary Poppins* o de SVB en 2023.

**3. Diferencia entre liquidez y solvencia, con un ejemplo.**
La liquidez es la capacidad de pagar **ahora**; la solvencia, que el activo valga **más** que las deudas. Un banco con préstamos excelentes a largo plazo y sin caja es solvente pero ilíquido: si sufre una retirada masiva, no puede pagar aunque sus activos sean buenos. Un banco con mucha caja y una cartera llena de impagos es líquido pero insolvente.

**4. ¿Cómo puede una crisis de liquidez convertirse en una de solvencia?**
Ante una retirada masiva, el banco tiene que vender activos deprisa y con descuento. Esas ventas materializan pérdidas que se comen el capital. Es lo que le pasó a SVB: tenía bonos largos que habían perdido valor por la subida de tipos de 2022; para pagar las retiradas tuvo que venderlos con pérdidas, y la crisis de liquidez se convirtió en una de solvencia. La primera la resuelve el banco central prestando contra garantías; la segunda solo se resuelve con capital.

**5. ¿Qué es el riesgo sistémico?**
Es el riesgo de que el problema de una entidad se propague al conjunto del sistema financiero y a la economía, por exposiciones mutuas, por pánico o por ventas forzadas. Ejemplo: la quiebra de Lehman en 2008 congeló el interbancario mundial. Por eso hay entidades "demasiado grandes para caer" y por eso los bancos están más regulados que otras empresas.

**6. ¿Qué es el mercado interbancario y qué ocurrió con él en 2008?**
Es el mercado en el que los bancos se prestan liquidez entre sí, a corto plazo. Su tipo de referencia en euros es el Euribor, al que se referencian la mayoría de las hipotecas variables en España. En 2008 nadie sabía qué banco tenía activos tóxicos, así que nadie prestaba a nadie y el mercado se congeló. Los bancos centrales tuvieron que sustituirlo inyectando liquidez.

**7. ¿Qué es el coeficiente de caja y cómo afecta a la creación de dinero?**
Es el porcentaje de los depósitos que un banco tiene que mantener como reservas en el banco central. Cuanto menor es, más puede prestar el banco y mayor es el multiplicador monetario teórico. En el BCE es del 1 % desde 2012, y en la Fed del 0 % desde 2020. No hay que confundirlo con los requisitos de capital, que tienen que ver con la solvencia.

**8. ¿Qué es el MUS?**
El Mecanismo Único de Supervisión, primer pilar de la Unión Bancaria, en funcionamiento desde noviembre de 2014. El BCE supervisa directamente a los bancos significativos de la zona euro y las autoridades nacionales (en España, el Banco de España) a los menos significativos, con las mismas reglas y bajo la vigilancia del BCE. El BCE concede además todas las licencias bancarias.

**9. Supervisión por actividad frente a supervisión por entidad. Pon un ejemplo.**
Por entidad, el supervisor depende de quién eres; por actividad, de qué haces. En España conviven las dos. Por ejemplo, un banco está supervisado por el BCE o el Banco de España en su negocio bancario, por la CNMV cuando vende fondos de inversión y por la DGSFP cuando comercializa seguros.

**10. ¿Qué cubren el FGD y el FOGAIN?**
El FGD garantiza los depósitos hasta 100.000 € por depositante y por entidad, y lo financian los propios bancos. Su función es evitar el pánico bancario. El FOGAIN cubre hasta 100.000 € por inversor a los clientes de empresas de servicios de inversión si la entidad no puede devolverles su dinero o sus valores. Ninguno cubre las pérdidas de mercado de una inversión.

**11. Banca pública frente a banca privada.**
La banca pública es propiedad del Estado y puede prestar con objetivos de política económica; la privada pertenece a accionistas privados y presta con criterios de riesgo y rentabilidad. Ejemplo: los bancos estatales chinos, que han redirigido crédito del ladrillo a la tecnología. Riesgo de la pública: crédito mal asignado por razones políticas. Riesgo de la privada: crédito procíclico.

---

*E2BA · Análisis de Servicios Financieros · ICADE · Curso 2026-27*
