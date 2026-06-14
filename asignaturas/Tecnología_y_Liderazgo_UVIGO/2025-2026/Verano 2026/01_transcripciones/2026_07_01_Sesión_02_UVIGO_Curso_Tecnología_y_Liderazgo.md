# Informe de la Sesión 2

**Curso: Tecnologías Emergentes e Inteligencia Artificial**  
**Universidad de Vigo – Generación D / Red.es**  
**Fecha:** 1 de julio de 2026  

---

## Objetivo de la sesión

La segunda sesión se centró en **entender la arquitectura y el flujo de los datos a escala**, así como en la importancia de la **soberanía tecnológica**. 

A lo largo de la jornada, se abordó la transición de la computación centralizada en la nube hacia el *Edge Computing*, se exploró el verdadero potencial de las redes descentralizadas (*Blockchain* y contratos inteligentes), y se debatió sobre la creación de clones digitales (*exocórtex*) aplicados a la productividad personal y al impacto social, como la creación de una prótesis cognitiva para pacientes con Alzheimer.

---

# 0. Resumen de los principales temas tratados

En esta segunda jornada formativa se abordaron los siguientes pilares de conocimiento práctico y teórico:

- **Estrategias avanzadas de transcripción:** Uso de herramientas en movilidad (móviles con IA local, YouTube privado) y orquestación con APIs (Whisper sobre la API de Groq) en contraposición a las plataformas industriales centralizadas (Teams).
- **Modelos de arquitectura de datos:** Diferencias conceptuales y operativas entre *Data Lake* (datos en bruto), *Data Warehouse* (datos estructurados para humanos), *Lake House* (la unión eficiente de ambos) y *Data Mesh* (descentralización de dominios).
- **El coste de la nube y la burbuja de la IA:** La enorme inversión en infraestructura (*CAPEX*), el caso del supercomputador *Colossus* alquilado por *Anthropic*, y el análisis de concentración de mercado en los *Magnificent Seven*.
- **Edge Computing e Internet de las cosas (IoT):** El paso de las *Smart Cities* tradicionales de sensórica fija (Pozuelo de Alarcón y el Plan E) a la inteligencia distribuida en los bolsillos de los ciudadanos. Leyes físicas de la latencia y el caso de estudio de *Flash Boys*.
- **Vulnerabilidad de sensores:** La anécdota del secador de pelo en las apuestas de temperatura de París en *Polymarket*.
- **La metáfora del Chupa Chups:** Cómo Satoshi Nakamoto no inventó las tecnologías base de *Blockchain* (P2P de los 90, criptografía de los 70, *Proof of Work* del 97 y Software Libre de los 80), sino que las hizo converger de forma genial.
- **Evolución de Blockchain y Smart Contracts:** El nacimiento de Ethereum de la mano de Vitalik Buterin para ir más allá de los tokens y ejecutar programas inmutables. Redes de capa 2 (como Polygon) y finanzas descentralizadas (DeFi) con Uniswap.
- **Soberanía y exocórtex local:** Uso de *Syncthing* para sincronización P2P segura sin nubes corporativas, *Docker* para modularización local y *Obsidian* como interfaz de texto para el segundo cerebro (clones *Jarvis*, *Watson* y *Hermes*).
- **Aplicación social de la IA:** El diseño de un "exoesqueleto cognitivo y afectivo" por voz para mitigar el impacto del Alzheimer en pacientes, cuidadores y familiares.

---

# 1. Orquestación y automatización de la transcripción
Se explicaron diferentes enfoques para procesar voz a texto en función del volumen de datos y los recursos disponibles:
- **Nivel Industrial (Teams):** Útil para procesar grabaciones largas (3+ horas) aprovechando las economías de escala de grandes corporaciones.
- **Nivel Local/Móvil:** Teléfonos modernos (como los terminales chinos Xiaomi) que integran modelos locales sin necesidad de consumir datos o enviar información fuera del dispositivo.
- **Vía API (Whisper sobre Groq):** El método más ágil y óptimo para integraciones personalizadas y bajo coste de tokens.
- **Subida a YouTube (Privado):** Un truco práctico y gratuito para que los potentes servidores de Google transcriban archivos masivos sin latencia o límites de cuenta personal.
- **Loops de Prompts:** Explicación técnica de cómo las APIs de agentes permiten iterar y refinar instrucciones automáticamente en bucles sobre archivos Markdown (`.md`), disminuyendo la necesidad de redactar prompts complejos manualmente.

---

# 2. Arquitectura de datos en la nube: De la materia prima al conocimiento
Se establecieron las analogías de cómo una organización o profesional debe estructurar su conocimiento digital:
- **Data Lake (El Lago de Datos):** Información masiva en bruto, sin estructurar. Es equivalente a la transcripción literal de una clase de 5 horas: indigerible para un humano de forma directa, pero fundamental como "materia prima" para la IA.
- **Data Warehouse (El Almacén de Datos):** Tablas estructuradas, limpias y ordenadas listas para el análisis. Equivalente al informe limpio de la sesión.
- **Lake House (La Casita del Lago):** Arquitectura moderna que combina la flexibilidad del almacenamiento barato del Data Lake con las reglas de negocio y estructuración de un Data Warehouse.
- **Data Mesh (Red de Datos):** Enfoque descentralizado donde cada área o dominio gestiona sus propios datos de forma soberana pero interoperable (ej. estructurar un Notebook LM o una Bóveda de Obsidian independiente para cada asignatura en lugar de un único archivo gigante).

---

# 3. El negocio de la infraestructura Cloud y la burbuja de la IA
Se debatió sobre la sostenibilidad financiera del boom actual de los modelos de lenguaje:
- **CAPEX vs. OPEX:** Las grandes tecnológicas están incurriendo en gastos de capital (*CAPEX*) salvajes para construir centros de procesos de datos (CPD), sin que los ingresos operativos (*OPEX*) cubran aún de forma clara estos costes.
- **Colossus:** Mención al supercomputador de Elon Musk/SpaceX construido en tiempo récord en Memphis (Tennessee), cuya capacidad ha sido alquilada masivamente por Anthropic para evitar el racionamiento de potencia de cálculo de sus modelos.
- **Concentración de mercado:** Análisis de los *Magnificent Seven* (Apple, Microsoft, Alphabet, Amazon, Nvidia, Meta, Tesla) que acumulan más del 30% de la capitalización del S&P 500 debido a la fiebre de la infraestructura de datos. Se comparó la situación con la burbuja de las puntocom del año 2000, destacando que las burbujas explotan, pero las infraestructuras útiles y las empresas viables (como Amazon o Google en su momento) permanecen.

---

# 4. Internet de las cosas (IoT) y Edge Computing
Se analizó críticamente la evolución del IoT y su transición hacia el borde:
- **El Hype del IoT:** Las promesas históricas de las *Smart Cities* centralizadas (con ejemplos como los proyectos del Plan E en Pozuelo de Alarcón en 2012) fracasaron al llenarse las rotondas y las calles de sensores fijos e ineficientes que las corporaciones no sabían explotar de forma descentralizada.
- **La realidad de la inteligencia distribuida:** Las ciudades se han vuelto inteligentes no por la sensórica pública, sino porque cada ciudadano lleva un sensor activo y conectado (el móvil) en el bolsillo.
- **Edge Computing (Computación en el filo):** Procesar la información lo más cerca posible de donde se genera para reducir costes de transmisión y latencia.

---

# 5. La física de la latencia y los mercados financieros
Se demostró la importancia de procesar los datos cerca del usuario a través del concepto de latencia:
- **Velocidad en fibra óptica:** La luz viaja a través de la fibra en zigzag, por lo que a nivel práctico la latencia es de aproximadamente **1 milisegundo por cada 100 kilómetros** recorridos.
- **Flash Boys:** Se analizó el caso de estudio del libro de Michael Lewis, donde una firma de inversión gastó 400 millones de dólares en perforar montañas para tirar un cable de fibra óptica recto entre Chicago y Nueva York, logrando reducir la latencia de 17 ms a 13 ms para ganar una ventaja competitiva multimillonaria en mercados de alta frecuencia.
- **El Tesla como nodo Edge:** La posibilidad futura de utilizar la capacidad de procesamiento sobrante y las baterías de coches eléctricos aparcados como servidores distribuidos de proximidad.

---

# 6. Vulnerabilidad física de la sensórica distribuida
A través de un caso de estudio real sobre la plataforma de predicciones y apuestas cripto *Polymarket*, se ilustró el peligro de depender de sensores de datos físicos externos (*oráculos*):
- En las apuestas sobre la temperatura oficial en París, los usuarios descubrieron a qué sensor concreto de la ciudad consultaba el contrato inteligente de Polymarket.
- Un usuario acudió físicamente a la estación meteorológica con un secador de pelo, calentó el sensor y manipuló de forma fraudulenta los registros de temperatura para ganar la apuesta en la red descentralizada.
- **Conclusión:** Ningún sistema digital, por muy seguro o descentralizado que sea, está libre de la vulnerabilidad en su punto de contacto con el mundo físico.

---

# 7. La metáfora del Chupa Chups y la Convergencia Tecnológica
Se analizó cómo el genio de Satoshi Nakamoto en 2008 no consistió en inventar tecnologías nuevas, sino en hacerlas converger:
- **El Chupa Chups:** Enrique Bernat no inventó el caramelo ni inventó el palo; simplemente los unió en 1958 para solucionar un problema cotidiano de los niños.
- **Bitcoin:** De igual manera, Satoshi Nakamoto combinó cuatro tecnologías que ya existían y llevaban décadas desarrollándose por separado:
  1. **Redes Peer-to-Peer (P2P):** Sistemas descentralizados de intercambio de archivos (como eMule) populares desde los años 90.
  2. **Criptografía de Clave Pública y Privada:** Desarrollada en los años 70.
  3. **Proof of Work (Prueba de Trabajo):** Inventada en 1997 como mecanismo anti-spam.
  4. **Software Libre / Código Abierto:** Nacido formalmente en los 80 de la mano de Richard Stallman.
- Al hacer converger estas piezas, nació la primera red descentralizada, inmutable y segura sin necesidad de intermediarios de confianza.

---

# 8. Evolución de Blockchain: De Bitcoin a Ethereum y Smart Contracts
Se repasaron las dos grandes eras de la tecnología de registro distribuido:
- **Primera Era (hasta 2014):** Centrada en Bitcoin y criptomonedas puramente transaccionales, utilizadas frecuentemente en mercados paralelos.
- **Segunda Era (desde 2014):** Liderada por Vitalik Buterin, quien concibió **Ethereum** después de que la empresa Blizzard cambiara las reglas de su videojuego favorito (*World of Warcraft*). Buterin propuso crear una blockchain que no solo transfiriera dinero, sino que incorporara una máquina virtual Turing-completa capaz de ejecutar código inmutable.
- **Smart Contracts (Contratos Inteligentes):** Programas informáticos que se ejecutan automáticamente de forma inmutable al cumplirse ciertas condiciones en la blockchain.
- **Finanzas Descentralizadas (DeFi) y Uniswap:** Cómo los contratos inteligentes permiten crear casas de cambio financieras automatizadas y sin intermediarios centralizados.
- **Capas 2 (L2):** Soluciones como *Polygon* que operan sobre Ethereum para abaratar costes de transacción y consumo energético (como en el caso de *Polymarket*).

---

# 9. Soberanía digital, exocórtex y el diario predictivo
Se profundizó en el sistema de gestión personal desarrollado por Luis Garvía para expandir su capacidad mental (*exocórtex*) y automatizar sus tareas:
- **Syncthing:** Herramienta P2P de código abierto que sincroniza archivos en tiempo real entre múltiples dispositivos (móvil, portátil y servidor local) sin pasar por servidores corporativos como Google Drive o iCloud, garantizando soberanía de datos radical.
- **Docker:** Tecnología de contenedores utilizada para estructurar y aislar procesos informáticos en el servidor local.
- **Obsidian y Markdown:** Utilización del lenguaje de marcado Markdown (`.md`) para estructurar notas personales en local, optimizando radicalmente el contexto para que los agentes cognitivos consuman el mínimo número de tokens de IA.
- **Watson / Jarvis / Hermes:** Clones y bots de Telegram desarrollados por el profesor que actúan como "prótesis cognitivas", leyendo su perfil semanal y bitácoras diarias para proponer análisis reflexivos y gestionar flujos de trabajo asíncronos.

---

# 10. Aplicación Social: Exoesqueleto Cognitivo para el Alzheimer
Se propuso un debate sobre cómo redirigir el stack tecnológico de productividad personal (Obsidian + Clones + Voz) hacia una solución de impacto social:
- **El problema del Alzheimer:** Destruye el neocórtex (la memoria operativa y el procesamiento lógico) pero respeta durante mucho más tiempo el cerebro límbico (emociones, música, rutinas afectivas).
- **El Exoesqueleto Cognitivo:** En lugar de crear un clon de productividad o un chatbot frío, diseñar un sistema de acompañamiento por voz adaptado a tres perfiles:
  1. **Paciente:** Interfaz simplificada por voz y fotos de "anclas vitales" de fricción cero (ej. a través de notas de voz de WhatsApp).
  2. **Cuidador:** Panel de control local para gestionar rutinas de medicación y recibir alertas tempranas predictivas.
  3. **Familiares/Médicos:** Acceso seguro para consultar el historial biográfico persistente.
- **Privacidad Radical:** Al tratarse de datos médicos y familiares extremadamente sensibles, el sistema debe estructurarse obligatoriamente bajo tecnologías de *Edge Computing* y sincronización local soberana, evitando almacenar la mente del paciente en nubes comerciales.

---

# Ideas clave de la sesión

- **Soberanía digital o muerte:** El ingeniero informático debe diseñar arquitecturas locales y soberanas que no dependan del escrutinio o la viabilidad comercial de corporaciones cloud.
- **La IA como prótesis cognitiva:** El verdadero potencial de los agentes autónomos no es automatizar tareas corporativas vacías, sino actuar como un exocórtex para la productividad humana y el apoyo a la vulnerabilidad médica.
- **La fuerza de la convergencia:** El éxito de tecnologías revolucionarias como Bitcoin no reside en crear componentes nuevos, sino en orquestar herramientas consolidadas hacia fines disruptivos.
- **Latencia y localización:** En la era de la IA y el Big Data, la velocidad física de transmisión de los datos y el procesamiento local (*Edge Computing*) redefinen la rentabilidad y la viabilidad de los proyectos de infraestructura.

---

# Material de estudio y herramientas trabajadas

- Configuración y principios de **Syncthing** para sincronización descentralizada y soberana.
- Análisis de arquitecturas en la nube: *Data Lake*, *Data Warehouse*, *Lake House* y *Data Mesh*.
- Casos de estudio prácticos:
  - El supercomputador *Colossus* de Elon Musk y la viabilidad del CAPEX en IA.
  - La manipulación del sensor meteorológico de París en *Polymarket*.
  - El ahorro de 4 milisegundos en el tendido de fibra óptica de Chicago a Nueva York (*Flash Boys*).
- La metáfora del Chupa Chups aplicada a la génesis criptográfica de Bitcoin y las redes P2P.
- Introducción teórica y visual a **Ethereum**, la máquina virtual Turing-completa de Vitalik Buterin, y el desarrollo de *Smart Contracts*.
- Proyecto conceptual: Arquitectura de un exoesqueleto cognitivo por voz sobre Obsidian para el cuidado de pacientes con Alzheimer.

---

# Transcripción
## Parte 1
1 de julio de 2026, 9:21a.m.
2 h 9 min 2 s
Ahora voy y no hay que disculpar nada. Os cuento, se me estoy emocionando. Juan, tengo que tengo que hablar de tantas cosas y van.  
Perfecto, voy a Chema, primero voy a Chema y luego a Margarita y se han unido 2 personas con el enlace de invitación. Encantado 662 y Encantado 697. A ver, a ver.  
¿Dónde está Chema? Aquí que so con que software hago la transcripción.  
Vale, os cuento.  
Acabo, me acabo de acordar, os cuento, bienvenidos al curso de Galicia.  
La transcripción como tal, al ser 3 horas de transcripción, la de ayer la primera y 1 hora la segunda, al ser tanto tiempo.  
Lo hago con Teams.  
Me abro una sesión de teams conmigo mismo.  
Esto yo creo que lo voy a ir poniendo y voy a contestarle directamente en el grupo.  
Las de las clases con Teams.  
Valdría fun.  
Y luego aquí quiero es un concepto fundamental que es el mismo de WhatsApp, que es a hombros de gigantes.  
¿Por qué? Porque yo tengo software, o sea, cualquier teléfono, no cualquiera no, pero muchos teléfonos móviles.  
Tienen incorporado.  
Tienen transcripción automática.  
Mi móvil tiene transcripción automática.  
Luego ayer hice, ayer tuve una tertulia.  
Durante la sesión.  
Esa sesión, o sea, las tertulias que se sube.  
Las tertulias.  
Que se sube el audio, o sea, que las radios suben un audio que dura menos, mi tertulia dura menos de 30 minutos.  
Cuando tengo que transcribir en un ordenador que no está el mío.  
Uso turbotranscribe que la cuenta gratuita tiene 3 transcripciones al día de menos de 30 minutos.  
Luego.  
Hey.  
Luego estoy trabajando.  
Con las APIs, esto se lo voy a pedir a ver cómo se lo puedo pedir.  
Voy a abrir mi ordenador, el de casa.  
Porque aquí estoy trabajando.  
Esto que estoy haciendo ahora abriéndolo desde aquí compartiéndolo en vídeo, hoy cuando hablemos de ciberseguridad es un error.  
Esto es algo que habría que tener cierto cuidado con ello, pero hablamos.  
Dentro de un ratito de esto, este, insisto, este es el ordenador, está en mi casa, este es un ordenador personal y aquí.  
Estoy probando.  
Automatic Recording.  
Yes, al Audistyle le voy a decir.  
Hazme, ay, yes, I love this time.  
A ver.  
No sea lo que le estoy diciendo, hazme.  
¿Un resumen justo, cómo haces las transcripciones?  
Insisto, me he metido en mi ordenador y en mi ordenador. Juan, me he metido en mi ordenador y estoy hablando con mi ordenador, como estoy hablando con Antigravity. Aquí tienes un resumen de cómo hago las transcripciones con y esto lo hago con Whisper y las la API.  
¿Qué uso es la de Grok, la de Grok y dentro de Grok algún modelo que dispara el whisper?  
Whisper para transcripciones es lo mejor del mundo.  
Whisper.  
Perfecto y este es el flujo que acabo de sacar de mi ordenador en relación con las transcripciones.  
¿Por qué me encanta esta pregunta?  
¿Por qué me encanta esta pregunta, Chema?  
Porque aquí mismo, en la respuesta, por un lado te he dejado.  
Pimsizum.  
A la hora de hacer algo a lo bestia industrial, pues pudiendo usar, pudiendo irme al Corte Inglés.  
Pudiendo irme a una gran economía de escala lo uso.  
Luego.  
Hay teléfonos móviles que tienen.  
La transcripción incorporada, los Xiaomi la tienen y usan sus propios modelos.  
Que son chinos y que no te piden pan.  
Luego, por otro lado, hay servicios online.  
Muchas veces si estás en un ordenador, no sé si sigue habiendo cibercafés.  
Pero si estás en un ordenador que no es el tuyo, tiene servicios online y muchas veces, pues imaginaos, tenéis PDFs, tenéis que juntarlos, tenéis PDFs, tenéis que sacar el o CR, pues ponéis servicio de PDF online y te encuentras un o CR rápido.  
Y luego vía API, que hoy vamos a hablar bastante de las APIs.  
Pues cada vez tienes más servicios y que cada vez más la forma de conectarte a las APIs.  
Es vía gente, es decir, tú no tienes que saber cómo conectarte al API, le dices a la gente que se conecte al API.  
Y él se conecta.  
Pues muchas veces sucede como cuando conduces un coche automático, no tienes que saber cómo funciona la caja de cambios.  
Tú simplemente aceleras o deceleras y el ordenador solo el coche solo va metiendo las marchas que corresponden.  
Pero insisto, hay que saber lo que es una API y hoy hablaremos de API.  
Eso es primera pregunta.  
Segunda pregunta, Margarita.  
Yo tengo un grupo de WhatsApp conmigo mismo.  
Que estas son, este es el PowerPoint de ayer y este es el PowerPoint de hoy.  
Este PowerPoint de hoy todavía no lo he descargado.  
O si lo había descargado.  
Sí, lo había descargado, lo estoy abriendo.  
Microsoft no es el programa, me da igual que no sea el programa predeterminado y este es el PowerPoint que vamos a estar viendo hoy.  
¿Hoy de qué vamos a hablar? Hoy vamos a hablar de cuatro cosas y al mismo tiempo hablaremos de alguna cosa que dejamos ayer por el camino y al mismo tiempo prepararemos cosas para el camino de mañana y pasado.  
Con todo lo que os llevo comentando, ya estáis viendo que hoy vamos a hablar un poquito de Cloud.  
Hoy vamos a hablar también un poquito de datos.  
Luego el Internet de las cosas me gusta.  
Y más que hablar del internet de las cosas, concretamente que sí que vamos a hablar.  
Vamos a hablar de un concepto que va más allá, que es edge computing, edge computing.  
Computación en el filo.  
Está traducido de forma literal.  
Computación en el en el filo, vamos a hablar.  
Luego hablaremos de ciberseguridad.  
En entornos digitales y, por último, hablaremos de computación cuántica.  
Y sinceramente, esto de tendencias emergentes le preguntaré a GPT a qué se refiere, porque es que hay tantas cosas emergentes que no sé a cuál de todas las cosas emergentes se puede estar refiriendo.  
Pero al mismo tiempo que hablaremos de todas estas cosas, seguiremos hablando de lo que estábamos hablando ayer y seguiremos construyendo este relato transversal. Seguiremos trabajando con las mismas herramientas, pero desde diferentes ópticas.  
Perfecto, me interesa mucho.  
Me interesa mucho todas las dudas que vayáis teniendo.  
Me interesa mucho todas las dudas que vayáis teniendo para los que se acaban de incorporar hace poquito.  
Por un lado, estas son las diapositivas, esta es la diapositiva que vamos a tratar hoy.  
Y luego en la página web está en la página web, no lo es todo esto en la página web engarvia.es.  
Os metéis en asignaturas Universidad de Vigo, aquí tenéis, además de la presentación que os he compartido también por el grupo de WhatsApp y que tenéis en la plataforma.  
Un pequeño archivo MD.  
Que yo cuando estaba preparando estas jornadas.  
Este archivo MD me venía bien porque.  
Porque una de las cosas que siempre hay que tener en la cabeza cuando haces algo de esto de formación es el mapa.  
Es el mapa y el mapa más o menos lo vas siguiendo y el mapa te permite no perderte y fundamental, fundamental, el mapa no es el territorio.  
El mapa es algo que te permite situarte, pero con cuidado. Mira qué bien, el Ets está aquí. He dicho que íbamos a hablar de I o T, pero sobre todo vamos a hablar de esto de Ets, que me interesa mucho que sepáis la filosofía asociada con.  
La gestión de información.  
Empezamos con cloud computing y datos a escala.  
Es y luego ciberseguridad y cuántica.  
Por lo tanto, vamos a empezar hablando de me gusta esto, vamos a empezar hablando de cloud computing y datos a escala.  
Y realmente lo que voy a hacer es repasar lo que hemos visto ayer.  
No sé, estoy bueno, un poco de vacilo porque si no vacilas, esto es, no sé, esto es retranca, Juan, no es retranca.  
Hay que parar, tú tienes que venir a vivir aquí a la gente, se nota tanto.  
Se nota tanto. Eu uso galego. Eu uso galego, pero todavía no. Todavía me falta información, a ver.  
Me he descargado la sesión de ayer.  
Perdón, la sesión de ayer no, el PD, o sea, el doc, el doc, el punto MD que os mandé ayer. ¿Qué es un punto MD? Ayer estuvimos, bueno.  
Talleres, que es un punto MD.  
Un archivo MD es un archivo de texto plano con un poquito de formato.  
Me lo he descargado, lo tenéis aquí, le voy a decir abrir con.  
Pon Notepad.  
Informe de la sesión uno.  
Esto es texto plano.  
Pero.  
Aquí veis un asterisco.  
Yaki.  
Empiezo ya con conceptos asociados con.  
Cloud, y voy a empezar más que con Cloud, con conceptos tradicionales asociados con data con datos.  
Conceptos tradicionales asociados con datos.  
¿Cómo debo de tener la cabeza?  
Monsau, que no sé, o sea, sé que no se escribe Moncao.  
Moon.  
Es que no sé aquí monsao.  
Y Salvaterra Dominio.  
Una ciudad, otra ciudad.  
¿Pero que corrígeme realmente está mucho más cerca, no?  
Exist.  
¿Es esto la misma, la misma ciudad?  
Si vivimos en un mundo industrial donde hay fronteras, son 2 ciudades diferentes, son 2 cosas diferentes, son 2 jurisdicciones diferentes, hay 2 policías.  
Pero la realidad es que si vivimos en un mundo digital.  
Y humano, a estos señores de Salvaterra les va a resultar mucho más fácil comunicarse con los de Monsao que con un madrileño.  
En su día a día, aquí hay mucha más familiaridad.  
Con los datos sucede lo mismo, estábamos en un mundo industrial y en el mundo industrial hay.  
Dejarme o resumir algo que es complicado, hay 3 conceptos.  
Uno Data Lake.  
2 como se llama la Casa del Lago Nata House Lake Lake House.  
La casa del lago.  
La casita del lago.  
Y luego tenemos data.  
Warehouse.  
¿Esto qué es?  
Datos a lo bestia.  
Los datos, cómo se dice los datos en origen, los datos. Andrea, estás por ahí y estás manifiéstate solo porque te echo de menos desde ayer, o sea, no, y si no estás tampoco pasa nada. Luego Juan vuelve a pasar en cuanto estés, luego Juan pasa lista y volvemos a pasar lista.  
Datos a lo bestia, los datos en bruto.  
En bruto y luego el data warehouse, que es la tabla Excel que todos teníamos antes de que existiera Internet, donde tenemos los datos ordenados.  
La tabla Excel donde tenemos los datos ordenados.  
Data Lake, la casita del lago y data warehouse. Ahora explico qué es esto de la casita del lago.  
Con la IA.  
Todo se mezcla.  
Hay que ser cuidadoso.  
Y audaz.  
Hay que tener mucho cuidado, mucho cariño.  
Y audacia, he puesto una un acento en Audaz que yo creo que no lo tiene.  
Os pido disculpas.  
Y Audaz.  
¿A dónde voy?  
Esta grabación, esto que os he mandado.  
bueno, ayer también os presenté otra herramienta.  
Otra herramienta que se llama.  
Obsidia, voy a lo mismo, Universidad de Vigo, descargas.  
Copiar, me copio el archivo MD, me lo llevo, voy a abrir.  
¿Os habéis dado cuenta? Antes que he ido a abrir la nueva carpeta. He visto que no había mandado la de ayer, no he abierto la nueva y he mandado la de ayer.  
Antes.  
Era igual que ahora.  
Pero se metían conmigo porque decían que con TDH no podías funcionar así. Ahora, en cambio, creo que todos son los pegar día 2 a ver por seguir la misma nomenclatura, lo voy a llamar proyecto uno.  
Proyecto uno.  
Visión de la.  
Clase.  
Revisión de la clase.  
Qué buena Andrea, fenomenal. Sí, Grazemille autista es conductor en italiano. Es que tengo palabras en italiano o que no sé, y Finocchio es un no sé si es brócoli y Finocchio es.  
Un vegetal.  
Finocchio es un vegetal que además tiene un doble significado que Andrea, si me ha oído decir Finocchio se está riendo.  
Ella.  
¿Se se está riendo, Andrea, no? Ja, ja, ja, ja. Gracias, Andrea, Lol.  
Proyecto uno, revisión de la clase, o sea, he creado el proyecto uno.  
Y voy a abrir 2 de las herramientas que presenté ayer.  
Una es obsidian abrir.  
Y la otra es.  
Antigravity.  
Abrir.  
A ver, antigravity.  
¿Dónde estás antigravity?  
¿Alguien se nos quiere colar por la ventana aquí en presencial? A ver, antigravity.  
Es como un LLM que permite hacer y tocar cosas. Eso es un agente, pero realmente antigravity es más que un agente, es un orquestador de agentes.  
Pero es que no es un orquestador de agentes, en origen era un IDE. Es un programa que ayuda a los programadores a escribir código. Empezó a entrar la I A, empezó a entrar la I A y se convirtió en esto. Vamos a hablar hoy vamos a hablar de una cosa que se llama Uniswap.  
No me lo quiero dejar en el tintero, me gusta Uniswap y me encanta Uniswap, asociado con Salvaterra, do Miño y Monsao.  
Es Europa, es España, es un pájaro, es un avión, es un pájaro, es un avión, no es Superman.  
Es Europa, es Portugal, perdón, es España, es Portugal, es no es y esto es, no es coña. Salvaterra, Dominio y Monsao es una eurociudad. ¿A que sí?  
¿La que es una eurociudad? Pues algo nuevo, algo nuevo que tiene su propia regla. Pues cuando hablemos de Uniswap hoy vamos a hablar que para mira, Uniswap me gusta porque para poder explicar Uniswap tengo que haber explicado antes cosas para que se entienda. Uniswap es del mundo de blockchain.  
Te suena uniswap.  
Vale, Uniswap es de DeFi de Descentralized Finance, que lo vamos a ver, lo tengo, mira, *****, se me acumula el tengo aquí Obsidian, ¿no?  
En Obsidian, ayer os conté una historia que no llegué a contarla.  
Hoy la voy a contar un poquito mejor y voy a ordenar todo lo que vimos ayer y lo voy a hacer con antigravity.  
Pero antes de hacer esto.  
Voy a abrir.  
Una bóveda nueva.  
Si vosotros, si a ver, Obsidian se puede descargar de Internet. Obsidian es gratis. Luego tiene una versión de pago que permite hacer cosas que yo soy capaz de hacer gratis sin la versión de pago, pero Obsidian es, o sea, no es código abierto, pero como free, como freemium.  
¿Tienes bastantes cosas, le estoy diciendo abrir una carpeta como bóveda, vale?  
Abrir una carpeta como bóveda.  
Y me voy a meter Universidad de Vigo.  
Ay, me he pasado documentos, Universidad de Diego, día 2, proyecto uno, revisión de la clase.  
Y acabo de abrir.  
Voy a cerrar esta por ir ordenado, hoy toda la ventana, toda ventana que vaya abriendo, la voy a ir cerrando.  
¿Qué tengo aquí?  
Lo que os he mandado antes, fundamental, fundamental para la transcripción que os voy a pasar esta tarde, que GPT cuando me esté escuchando, a ver, GPT o cualquier herramienta, que GPT lo oiga.  
Y se le grabe a fuego.  
Fundamental en este curso somos agnósticos de la tecnología.  
Por eso, la pregunta de antes de Chema me ha gustado tanto, ¿qué software usas para transcribir?  
¿Y qué he hecho daros una serie de opciones de los grandes gigantes? Bueno, y se me ha olvidado antes. Si tengo algún vídeo, sabéis cómo lo transcribo.  
Esto es una maravilla, o al menos para mí, si hay alguien que sabe hacerlo mejor en menos tiempo y de forma más eficiente, que me lo diga. Pero tengo una cuenta de YouTube, se lo subo a YouTube, que solo lo puedo ver yo y YouTube te hace la transcripción inmediatamente y ya puede durar 3 horas el vídeo que te la hace.  
Al final, aquí somos agnósticos de la tecnología.  
¿Por qué YouTube es tan bueno?  
¿Pues por qué Google? Porque tiene unos servidores potentísimos, porque hace 1000 millones de vídeos al día y si tú te puedes subir a hombros de gigantes.  
Pues ni tan mal.  
A lo que voy.  
Esta es la sesión que vimos ayer.  
Estoy usando obsidia, si miráis dentro de esta sesión.  
Primero hablamos de Antigravity y hola mundo, ¿dónde está Obsidia?  
Todo esto es lo que estuvimos viendo ayer. Me encanta la calidad de los datos, metes basura, además me lo ha traducido en inglés fino. Ayer dije ******, es o sea, GPT saca, o sea, no es no sé con qué lo hice. Creo que fue con antigravity, como hice este resumen, porque además lo hice debajo de la catedral de debajo de la catedral de Santiago.  
Mirando la con la catedral de fondo aquí.  
El punto 21, segunda herramienta de la sesión obsidia.  
¿Qué estoy haciendo ahora? He empezado con la sesión, estoy en Portugal, estoy en España, he empezado con la sesión, no he empezado.  
Que como son 5 horas, pues me permito el lujo de, pero sí que he empezado. Estoy repasando la de ayer, pero al mismo tiempo lo que os estoy presentando también es.  
Lo que os estoy presentando son 2 cosas a la vez en relación con la sesión de ayer, os estoy os estoy enseñando el data warehouse.  
Es un data warehouse lo que los humanos usan para ver datos, datos ordenados para humanos.  
Os estoy enseñando.  
Lo que hemos visto ayer, 21 segunda herramienta, 22 blockchain como tecnología, 23 caso de estudio funcional, Bitcoin y Satoshi. O sea, esto que os estoy enseñando es un data warehouse.  
Pero es que si bajamos un poquito.  
Juan, Juan, mira, Juan, mira.  
¿Esto qué es?  
El Data Lake.  
Esto es un data lake.  
¿Y en este lago que me he montado?  
A la entrada de cada lago.  
Una casita de lago.  
Cada data Lake tiene una casita en el lago.  
Yo soy humano.  
Y por favor, mirad aquí, vamos a intentar, vamos a intentar leer algo aquí.  
A ver, o sea, estoy leyendo literalmente la transcripción de ayer, dime Diana cuando paro ya.  
Mola, mola, porque cuando veáis en la transcripción ha sido ella la que me ha dicho, pararé. Mira, Juan, 1 segundo, perdóname que te interrumpa. La juventud, o sea, lo del móvil, o sea, muy mal, muy lo sé, lo sé, lo sé, lo sé, lo sé, pero es que quiero, es que quiero que veas esto porque me es que justo.  
Me ha hecho parar aquí y mira que yo ayer miré la transcripción esta para hacerlo bien.  
Es que pone, voy a editar con el notepad del programa que ha creado para verlo por cotillear y por hacer ya.  
Y luego, menos mal ya está, o sea, importante, sois ingenieros informáticos. ¿Sabéis justo? ¿Sabéis por qué aquí pasa de hablar normal a hablar en cursiva?  
Porque aquí hay 5 asteriscos, porque he dicho un taco.  
Es que lo he visto y me emocionado, me ha hecho justo parada en el momento en el cual digo un taco.  
Pensé que los había borrado todos. Ayer debí de decir algún taco en clase, pues algún ******. Bueno, antes lo he dicho ******, también lo acabo de decir, pues estos son asteriscos que aparecen. Luego siguen con el presupuesto, o sea, perdóname, era, era, o sea, resumen, ¿dónde estoy? Estoy ahora en el lago nadando.  
Ha ejecutado, estoy leyendo literalmente, ha ejecutado este programa de Python y una vez ha ejecutado este programa de Python, me ha creado lo que yo he dicho. Veis que en la carpeta hay 123, vuelvo a antigravity, vuelvo a antigravity y me dice, he creado la imagen que ha creado. ¿Entendéis que este lago no es para humanos?  
Que si yo trato de sacar conocimiento de aquí, yo Luis Garvía, ser humano, trato de sacar conocimiento de aquí.  
Es indigerible, en cambio, me voy a la casita del lago y puedo ver perfectamente.  
¿La estructura ahora qué voy a hacer? Voy a antigravity, voy a abrir un nuevo proyecto New Project.  
Voy a abrir una carpeta nueva.  
Insisto, en este curso somos agnósticos. Esto, Juan, sin duda lo haría con Claude, porque en Galicia hay mucho más poderío. En cambio, yo que tengo 3 niños, pues lo tengo que hacer con Antigranity, que es mucho más barato.  
Proyecto uno, me meto aquí, acabo de abrir con antigravity una carpeta.  
Y le voy a decir, tienes la transcripción de la clase de ayer, antes de nada me das un resumen.  
Muy breve.  
Va a hacer volando, solo hay un archivo.  
Me dice, hola, claro que sí. Aquí tienes un resumen muy breve de los puntos tratados en la sesión de ayer. ¿Qué he tratado ayer? Objetivo principal, romper la barrera psicológica con la IA, aprendiendo a verla no como un chatbot pasivo, sino como un agente ejecutor activo capaz de operar directamente sobre el sistema de archivos local.  
Uso de antigravity y uso de obsidian. Si os dais cuenta en el data warehouse que os he pasado en la casita del lago donde estaba la información digerida, estaba muy separado antigravity de obsidian.  
Pero realmente durante la sesión de ayer insistí varias veces en que el objetivo de la sesión de ayer era introducir 2 herramientas que ahora estoy repasando.  
Marcos de adopción tecnológica, fundamentos de blockchain que hoy trabajaremos más. Y luego hablamos un poquito de realidad extendida y mencioné la tesis de la convergencia. ¿Qué es la tesis de la convergencia? Que yo uso antigravity con obsidian. Luego con, o sea, aparece, hay gente que lleva años trabajando determinadas tecnologías.  
Hoy vamos a a ver, ahora os voy a hablar.  
Ahora os voy a hablar dentro de un poco de Chupa Chups, la sesión de hoy tiene la estructura de lo que estábamos hablando antes.  
Y vamos a hablar de convergencia también y vamos a hablar de convergencia asociada con el bitcoin.  
Y luego del bitcoin pasaremos a Ethereum y hablaremos de smart contracts.  
Bien, tesis de la de convergencia.  
¿Qué es esto de la tesis de convergencia que cuando convergen 2 tecnologías puedes volar?  
Y le voy a decir, esto es muy loco, bro, le llamo bro porque intento, esto es como le llamo bro.  
A ver.  
No estáis, sé que no estáis viendo mi pantalla, es una sorpresa, os quiero pasar.  
Os quiero.  
Os quiero pasar la imagen para que veáis quién soy yo cuando hablo de bro.  
Juan, mira 1 segundo la pantalla, porfa.  
Cuando digo bro.  
Le conoces que la gente, o sea, pero eres muy joven. Los Simpson para una generación han sido. O sea, yo no soy de la generación tanto de Los Simpson, pero cuando digo bro me siento como ese señor así vestido a lo que voy.  
Esto es muy loco, bro.  
Estoy ahora.  
A ver, esto es muy loco y como es muy loco, vamos a hacer que todavía sea un poquito más loco.  
Vamos a hacer que todavía sea un poquito más loco, me estoy metiendo.  
Me estoy metiendo en mi página, a ver, os lo pongo delante, perdonad, estoy volviendo, estoy abriendo muchas páginas, me estoy metiendo en la página web mía, me meto en la en Universidad de Vigo.  
Y aquí lo que estoy haciendo es.  
Coger este markdown que lo ha, o sea, lo ha metido como HTML de forma directa.  
Pero me da un poco igual.  
Le voy a decir.  
Quiero que te descargues.  
En un MD, el siguiente, el contenido del siguiente enlace, el contenido del siguiente enlace. A ver, esto no es loco, lo loco es lo que tenía en la cabeza cuando.  
Ahora os quiero decir lo que es loco, le estoy diciendo antigravity que se meta en Internet y que me descargue el contenido de un enlace. Va a consumir muy pocos tokens. ¿Por qué va a consumir pocos tokens? Porque no va a tener que buscar la página web, no va a tener que hacer nada.  
O sea, estoy en modo de bajísimo consumo. Luego mañana vamos a hablar cuando veamos el radar, cuando veamos un radar de tecnología, mañana vamos a ver cómo podemos hacer.  
Consultas masivas.  
Pero esto no es una consulta masiva, aquí lo que le estoy diciendo es.  
Métete en ese enlace de Internet, se está conectando a Internet.  
Y descárgate en un MD.  
Supongo que estará haciendo un scraping.  
¿Y si no lo hace en el peor de los casos, dónde está? ¿Dónde está Obsidian?  
De momento no ha hecho nada.  
Cancelo.  
¿Te has quedado?  
Atascado.  
Vale, es fácil.  
Segundo intento.  
Vale.  
Perfecto, ¿qué ha hecho? Se ha bajado la página web, el HTML con el HTML.  
Sí.  
Aquí.  
Lo que he hecho es.  
Aquí.  
Se ha bajado.  
Phone.  
Estoy creado.  
El.  
The.  
¿Y ahora?  
Wait.  
Bro.  
Entonces, te quiero hablar con él.  
O sea, si le hablara de usted, probablemente me hablaría de usted. Si usara términos académicos puros, probablemente él usaría. O sea, en ese sentido, la máquina no sé si el término empatía es correcto. Esto es muy loco, bro. Hoy tengo que dar la sesión.  
Del MD que acabo de.  
Descargar.  
Quiero que en un.  
Nuevo archivo, me hagas un.  
Guión para no dejarme nada de lo de.  
Ayer.  
Además, quiero explicarles el poder de la convergencia con.  
El ejemplo.  
Del supa subs.  
Y Bitpoint, que es p 2 p.  
Turing, a bueno, Turing es smart contract, P 2 P, open source. Uf, qué bien que de open source hablaremos mañana y clave pública y privada, clave pública y.  
Privada.  
Y luego uni swap.  
Y luego Uniswap.  
Pasando por la.  
Máquina de touring y los smart.  
Contracts, dale una vuelta a fondo y si no entiendes algo antes de ejecutar nada, pregúntame.  
¿Qué pasa? ¿Por qué he dicho lo de esto es muy loco? Y me he dejado una cosa, me he dejado una cosa.  
Conexión, la tesis de la convergencia del Chupa Chups como Enrique, *****. ¿Sabías, Juan, que Enrique Bernat fue el inventor del Chupa Chups?  
Google.  
Yo no lo sabía.  
Pues yo no sabía que era Enrique Bernal.  
Es más, no lo sabía y en cierto modo te he pedido confirmación, porque como me está dando datos que no sabía, será B. Supongo que será Enrique Bernat.  
Y luego el loco, lo loco, loco es.  
Y antes, coma, si.  
No.  
Vale, me gusta esto porque no es en lo que yo estoy pensando. Dime, ya hice la factura de la plataforma.  
Tardó bastante entonces.  
Sí.  
Y la proforma tardó entonces guardado MLD y al tenerlo acabado pasarlo a los del formato.  
Buena idea y sí, el grupo muy práctico de la verdad.  
Es fácil de dedicar y cuando lo tienes listo, lo conviertes algo.  
Eso que acabas de comentar es una de las ideas que quiero trabajar cuando hablemos de ETS, del I o T. El I o T son muchas cosas a lo bestia, todas pequeñas. Si tenemos todos los procesos optimizados, el consumo de datos de recursos tiende a cero.  
Algunas percepciones.  
Desidea para.  
Yo sobrevive bien la conversación.  
Yes.  
No, mi recomendación, ¿sabes cuál es si estás en eso?  
Que te hagas que tengas todo el sistema de facturas en CSVYMD y luego cuando tengas que generar la factura definitiva.  
Con el MD y una plantilla de cómo quieres que sea la factura en doc.  
Que tengas un script es un punto bato, o sea, antigravity o Claude, le dices generame un script. A ver, no hay que usar inteligencia artificial para todo.  
Al final tú aprietas, o sea, tú tienes el MD con la factura, rellenas el MD de la factura, o sea, con Obsidian rellenas la factura y luego cuando quieras generar esa factura tienes un archivo punto bat que lo aprietas. Ese archivo punto bat ejecuta un Python.  
Y leyendo una plantilla que luego si quisieras modificar, coges el doc de la plantilla, lo modificas, pero tienes una plantilla de cómo quieres que sea la factura con el logo, con el número de cuenta, o sea, lo tienes en una plantilla y te genera ese Python te genera.  
O sea, el Python, o sea, el script, la automatización lo que hace es coge el contenido del MDY lo mete en el Word siguiendo esa plantilla y eso lo hace sin IA. O sea, la IA solo la usas una vez para crear el flujo.  
Sí, no, correcto. Bueno, a ver, de hecho, de hecho, Claude, cuando te genera un doc, lo hace como yo te lo estoy diciendo, pero de forma interna.  
O sea, Claude tiene una serie de herramientas y Claude sabe programar. Claude no sabe leer, Claude no sabe leer docs. Claude lo que sí sabe es usar una herramienta que le permite transformar el doc en un archivo MD.  
Yo lo que te estoy diciendo, si tú tienes que hacer este ejercicio de forma constante con algo como es una factura, en lo automatizado.  
Y luego tienes, por ejemplo, todo el sistema contable en formato mdy cuando tengas que presentar la renta le pones los criterios del programa padre con mdy te hace la renta directamente desde el MD.  
Todo esto total, total, si es que es que es esto, vale, a ver, yo ahora no estoy usando el poder, o sea, a ver, yo ahora estoy repasando la clase de ayer.  
Y esto es lo que comentábamos también en la clase ayer, la creatividad es mía.  
A mí este bloque, como me lo ha puesto, no me gusta. O sea, me dice de lo que tienes que hablar hoy, vas a hablar al final en el bloque 5, no.  
No.  
El bloque 5 es transversal a todo.  
Yo ahora mismo estoy, esto es por esto os decía que es muy loco todo. Yo ahora mismo estoy al mismo tiempo, repasando lo de ayer y presentando la parte de.  
Datos de.  
Lake House, ya sé cómo se llama.  
The lake house y demás.  
Por eso te decía que todo es muy loco.  
Cuando hable.  
De ya veré, pero sin duda al hablar de ciberseguridad.  
Hablaré de clave pública y privada. y.  
Luego.  
De cuántica entra solo. A ver, yo ahora mismo tengo un problema con mi cabeza y es que desearía que todo esto que yo estoy diciendo ahora estuviera transcrito en tiempo real y lo pudiera ver la máquina.  
Que ya, o sea, que ya le he dicho aquí, yo ahora mismo estoy al mismo tiempo repasando lo de ayer y presentando la parte de datos. Por eso te decía que todo esto es muy loco.  
A ver.  
Una introducción a una cosa que vamos a ver mañana y pasado.  
Antes.  
Antes, hace 1 año, 2 años, el prompt era lo importante.  
Ahora el prompt ya no es tan importante. Ahora lo que es más importante es la relación que tú estableces con el agente, si os fijáis.  
No hago tanto prompt.  
Si no le pido a él que interactúe consigo mismo.  
Esto de una forma más formal, cuando hablemos de el radar en concreto mañana.  
Cuando hablemos del radar mañana.  
Se llama desde un punto de vista técnico loops.  
Con loops, tú.  
Metes un prompt en un archivo mdy cada vez que corres el loop, ese prompt va evolucionando y tú no escribes el prompt. Es el propio agente el que va haciendo evolucionar su propio prompt.  
He creado el guión hilando los conceptos de manera fluida y transversal.  
Esto ya me va gustando más, esto ya me va gustando más.  
Esto ya es lo que esto, mira, esto se parece a lo que tengo yo en la cabeza, me vengo aquí.  
Presentación del día 2, guión de la clase.  
Este guión sí se parece más a lo que yo tengo en la clase, el perdón, a lo que yo tengo en la cabeza.  
¿Que os voy a ir dando hoy?  
Oye, a ver.  
Me va a estallar la cabeza y eso me encanta. Hoy había venido dormido.  
Resumo.  
Resumo.  
Este es un curso que se llama tecnologías emergentes. Si hay alguien que se acaba de incorporar, este es un curso que se llama tecnologías emergentes.  
El día uno y el día 2, hoy es el día 2. Estamos introduciendo tecnologías. El día 3 vamos a hablar de proyectos.  
De gestión de proyectos.  
Y el último día vamos a hablar de liderazgo.  
Lo del liderazgo todavía no tengo claro cómo lo vamos a hacer. Lo que sí que tengo claro es que el día cuatro os voy a enseñar mi clon con todo lujo de detalles.  
Mañana vamos a hablar de proyectos y mañana las diapositivas hablarán de metodologías ágiles.  
Mañana las diapositivas hablarán de metodologías ágiles.  
¿Qué estoy haciendo yo ahora con vosotros?  
¿Es esto una es esto una metodología ágil?  
No es que sea ágil, es que esto es un contorsión esto.  
O sea, esto es el circo del sol con los acróbatas, los que saltan, la estamos viendo en tiempo real.  
Teniendo una serie de recursos.  
Prom Scratch, o sea, de todo esto vamos a hablar mañana del Scratch. ¿Qué es el Scratch? Pues te mandan unas presentaciones que está muy bien, que las ha hecho quien las haya hecho y tú con esas presentaciones construyes sobre la marcha con lo que vas haciendo. Estos son tecnologías ágiles, pero en tecnologías ágiles vamos a hablar mañana.  
Eh.  
¿Bien, hoy qué vamos a hacer? Pues el repaso y los datos a escala. La IA necesita datos limpios. Eso lo vimos ayer. Si entra basura, sale basura y el salto a los datos corporativos. Lake House, unificar la flexibilidad del data lake, guardar todo en bruto con el orden del derhouse.  
Del data, Del data warehouse, tablas estructuradas, data mes descentralización, a ver uno de los problemas que tiene la I A.  
Como bien dice nuestro director Fran.  
Es que si nos dejamos llevar por la I a Juan, trabajamos más.  
¿Que cuando no había, por qué? Por el fine tuning.  
¿Qué es el fine tuning?  
Que yo he visto este punto uno el repaso y le voy a decir.  
Me encanta.  
Me estoy volviendo más loco.  
Quiero explicar el fine tuning con el punto uno del data house.  
Del Data House, no del Lake.  
Lake House, Miss Diaposi.  
Perdón, mis diapositivas, no la transcripción.  
Es un ejemplo perfecto de.  
Data Lake más casa del.  
Lago, esto.  
Estoy haciendo ahora contigo, es fine tuning.  
Explícalo en el guión y como no pare, no paro como no pare, ¿cómo es el subjuntivo? Pero como no pare, como no para.  
Y como no, como no pare, no parir es parir de tener hijos y como no pare yo de dar vueltas, como no pare de dar vueltas.  
Como no salga del bucle, estoy aquí.  
Toda la mañana me parece brutal.  
He caído en un bucle.  
Corrige.  
Mételo.  
Con retranca gallega.  
Quiero que aparezca una nota explícita de la retranca.  
Y voy a compartir el guión con mis alumnos.  
A ver, un segundito que he tenido un problema técnico.  
Y se me ha convergido, pero no está todo controlado.  
Okay.  
Soy yo, ya está. Si me oís bien, he tenido un problemilla técnico. Si me seguís oyendo, por favor, manifestaros 1 segundo.  
Sí, se me oye, no, perfecto, os lo agradezco. Me meto aquí el guión, guión narrativo de clase día 2, convergencia, bucles, seía con retranca, el repaso de los datos y el autoengaño de la IA, la transcripción como data lake. Ayer tuvimos 3 horas y pico de clase, ¿no?  
Ayer no tuvimos 3 horas y pico de clase, ayer tuvimos 5 horas de clase.  
Que no me esto es como en la cárcel, no hay que quitar días ni horas. La transcripción en bruto es un data lake, un pozo sin fondo gallego.  
Es gallego sin fondo también es en España.  
Un archivo enormes con saludos, cortes de audio, el Markdown estructurado como Lake House. ¿Cuando limpiamos esta transcripción, qué estamos haciendo en este chat? Cuando limpiamos esta transcripción y creamos un índice estructurado, pasamos el al Lake House. Los datos se guardan en tal.  
Bueno, del rag vamos a hablar mañana.  
Del RAG vamos a hablar mañana porque como somos agnósticos con la tecnología.  
Supongo que habrá alguien pensando o diciendo.  
Esto que está haciendo Luis con antigravity se puede hacer mucho, mucho, mucho más rápido con Google Notebook LM. ¿Conoces Juan Google Notebook LM?  
Mañana, mañana estás.  
Mañana, porque es que tengo ganas de abrirlo y como lo abra ahora.  
A ver.  
Google Note Google M.  
No, a ver, voy a solo la solo solo un poquito, solo un poquito. Lo comparto con vosotros, Google Notebook LM.  
Es brutal.  
Si no lo conocéis, dejad todo lo que estéis haciendo y poneros a jugar.  
Google Notebook LM, insisto, mañana lo vamos a ver con más detalle.  
Google Notebook LM es probar y esto sí que es gratis, gratis, gratis. A ver, gratis, si pagas tienes más prestaciones, pero para lo esencial yo tengo aquí de diferentes cursos. Estos son cuadernos. Si lo abrís desde cero os aparecerá todo en blanco y tienes que crear aquí un cuaderno.  
Creo un cuaderno, vale.  
Si os fijáis, todo más o menos tiene una filosofía parecida.  
En cuanto creo el cuaderno, me dice crea resúmenes de audio y vídeo a partir de tus notas.  
¿Subir archivos, subo un archivo, qué archivo voy a subir?  
O sorpresa.  
Este la transcripción sé que es la transcripción de ayer porque es el único que tiene el formato que yo suelo mantener en todo mi baúl fundamental. Tenéis que ser ordenados, pero mañana más de orden que acabo de hacer, he subido.  
La transcripción.  
Esto mola más cuantas más fluentes diferentes tienes. Mañana subiré la sesión. Voy a compartir esto en el grupo de WhatsApp.  
Compartir restringido cualquier usuario con el enlace, copiar enlace.  
Guardar.  
Andrea.  
¿Se pueden crear podcast con las notas y películas?  
Voy a ello, o sea, Andrea preguntó si se pueden crear podcast. Acabo de habéis visto que he subido la transcripción.  
Con la transcripción apretáis este botón resumen de audio.  
Y está creando el podcast que decía Andrea, si vosotros apretáis aquí, podéis decir, pues házmelo en galego o házmelo solo con la parte que me interese, o quita o pon.  
Luego el podcast tarda un poquito en generar el mapa mental lo hace más rápido.  
Porque el mapa mental es simple. Bueno, esta es la fuente. Aquí mañana veremos más fuentes. Apretáis en este botón.  
Y te hace.  
Un data lake sobre la fuente en bruto, pero que vosotros ya tenéis. O sea, este informe detalla la sesión inaugural de un curso sobre tecnologías emergentes en inteligencia artificial en la Universidad de Vigo, cuyo propósito.  
Central es fomentar una nueva mentalidad de trabajo basada en la adaptabilidad. La formación trasciende el uso de simples chatbots para presentar a la IA como un orquestador de agentes autónomos capaz de ejecutar tareas complejas en sistemas de archivos locales a través como bueno, esto es el resumen que ha hecho de la transcripción que aquí te hace el resumen de todas las fuentes que tienes. Esto lo podéis hacer hasta.  
En la versión, cuando pagas los 20 pavos al mes de Google, hasta con 500 fuentes. Si no pagas los 500, creo que son hasta con 50 fuentes, que es gratis 50 fuentes. Yo creo que son bastantes fuentes. Todos los, o sea, ninguno de los cursos que doy tiene más de 20 sesiones.  
Aprieto lo del mapa, voy a poner resumen en vídeo, generar tarjetas didácticas. Te voy a pedir una infografía. Cada vez que apretáis el botón de infografía, el resultado que os da es una cosa nueva.  
Voy a ver el mapa.  
La sesión de ayer, tecnologías emergentes seguía.  
Ayer de que estuvimos hablando filosofía y objetivos del curso, romper la barrera y a no sé qué herramientas de trabajo que trabajamos ayer.  
Antigravity obsidian y flujo de movilidad, no sé qué es a bots de Telegram, procesamiento en la nube, actuación remota de bóveda, claro, pero que esto lo vamos a ver mañana.  
Fundamentos técnicos IA.  
Markdown Tokens LLM, calidad de sus datos, marcos analíticos.  
El hype de Gartner, estos son conceptos que expliqué ayer.  
El abismo de Moore, todo esto son conceptos que expliqué ayer.  
Bueno, por ejemplo, ¿os acordáis de lo que es la curva de difusión de Rogers?  
Voy a hacer como si no me acordara y aprieto aquí.  
Aprietas ahí.  
¿Y aquí qué va a estar haciendo?  
En las fuentes que tiene.  
Va a buscar.  
Eh?  
Esto todo es gratis, yo soy muy devoto, muy devoto de la Virgen del Puño cerrado.  
Demos.  
Esto para estudiar cambia todo.  
Es un audio, aprovechas hasta ir en coche. Sí, pero aquí pasa una cosa.  
¿Alguno de los que tengáis más de 30 años o 40 años que nos estéis escuchando?  
¿Os acordaréis de cuando la música?  
Costaba encontrarla.  
Buscabas un CD que no encontrabas y cuando tenías el CD, Juan, ¿qué hacías con la música? Te lo ponías 100 veces, digo CD o el vinilo. ¿Cuántas veces hemos escuchado? Yo vinilos me pilló muy joven, mis padres tenían vinilos, yo soy más de casetes. ¿Cuántas veces hemos escuchado el cassette que todos teníamos de varias lentas?  
Te ponías el mismo cassette una y otra y otra y otra vez ahora, en cambio, que tenemos tanto acceso a información.  
No lo usamos.  
A ver, le puedo preguntar aquí, le voy a preguntar.  
Dime todas las cosas relacionadas.  
Con Galicia y la cultura gallega.  
¿Qué mencionó el profesor en la sesión?  
Esto.  
En el data warehouse no está para esta pregunta, es fundamental meterle a la herramienta el lago entero de los el lago entero de los datos.  
Mañana lo veremos. ¿Qué hace? ¿Qué hace Notebook elemen? ¿En cuánto le suben las fuentes? Las mete dentro de un rag, las mete dentro de un rag vectorial y por eso consulta tan rápido. Durante la sesión, el profesor hace ver varias referencias a Galicia y su cultura, integrándolas tanto en el contexto físico de la clase como en los ejercicios prácticos con inteligencia artificial, universidad.  
La de Vigo es la institución donde se tal. Ourense, el profesor se encuentra impartiendo la clase físicamente en o en Ourense. Utiliza la palabra Ourense como contexto de prueba al construir un editor web bromeando al quitarle la letra u para comprobar si la interfaz se actualizaba en tiempo real.  
¿Lo hice o no lo hice?  
Os doy mi palabra de que lo hice, se me había olvidado que lo hice.  
Vigo hacia el final de la clase menciona el término irá a comer a Vigo para visitar Manuel Gems, no Manuel Gems, cultura y folklore, la queimada, el conjuro de la queimada para hacer la demostración del HTML, traducciones al gallego. La IA crea una página web interactiva o la el profesor lee en voz alta un fragmento de la traducción generada.  
Le voy a decir, no hablo del resto de España.  
A ver.  
¿Y de Zaragoza?  
Hablé de Valencia y de Zaragoza.  
¿Pero veis cómo estoy consultando los datos en tiempo real?  
Mañana hablamos más de esta herramienta.  
Pero Juan, no me he podido aguantar.  
Si, aunque el profe a Galicia.  
Luis.  
Mira, tengo toda la piel de gallina, ya sabes cuál es la suerte que tengo.  
Mis alumnos.  
Que les premio por herramientas nuevas que van descubriendo y luego yo Google Notebook LM es que la uso en todas las clases que tengo. Es que en lugar de decirte la uso en todas las clases, aprieto este botoncito y aquí tienes todas mis clases, todas las clases que he dado, me voy a meter.  
Dime una.  
¿Cuál esta derecho y mercados, no?  
Esto es para abogados, derecho y mercados, y aquí tienen el mapa o código, o sea, aquí ya tienes, por ejemplo, este es un vídeo.  
Agaon Kia Again, Again.  
no lo guardaría el resto.  
¿Es que te puedo decir?  
Los estornudos que he pegado.  
Como me estoy grabando, si no me hubiera estado grabando, no hubieran sido estornudos. Hubiera sido aire que sale del cuerpo, pero cognitivamente he tenido que cambiar. No sé si me estoy explicando.  
Te puedo decir hasta los hasta el minutado de los estornudos.  
¿Porque aquí qué tengo?  
¿Aquí qué tengo?  
Esto es.  
A ver, esto es qué maravilla, esto es lo que tengo ahí. es un.  
Data mes.  
¿Qué es un data mes?  
Aquí de forma descentralizada.  
De forma descentralizada tengo cada una de las clases que he ido dando.  
En un área a mis, por ejemplo, a vosotros, a vosotros os da igual las otras clases que he dado.  
Por lo tanto, vosotros solo vais a entrar en este y ya está.  
Vosotros solo vais a entrar en este y ya está, pero en este caso no la has preparado.  
¿El qué? No, a ver, nunca jamás he preparado una clase con Notebook LM.  
Lo que sí que hago con Notebook LM es lo que estoy haciendo con vosotros. Al final de la clase doy un Notebook LM, lo preparo. Notebook LM, siempre lo uso en tiempo real durante la sesión. Luego, una vez lo presentas, actualizarlo es fácil. Es más, no lo tengo todavía desarrollado.  
Pero esto habla con antigravity en tiempo real, muy sencillo.  
Porque son ingenieros informáticos, dime.  
¿Cómo comunicar antigravity con notebook LM para ingenieros?  
Dime cómo comunicar un.  
De obsidian en local mediante antigravity.  
O Claude.  
Con Notebook LM para ingenieros informáticos. en.  
Tiempo real y de forma automática, lo de ingenieros informáticos lo voy a quitar porque no quiero que me lo cuenten muy, o sea.  
O sea, hay, o sea, Notebook LM no tiene una API, no tiene API pública, pero yo he visto.  
No, a ver, voy a segundo nivel. Esto me gusta mucho, lo que voy a hacer me encanta.  
Lo que voy a hacer me encanta y de automatización.  
Te lo voy a preguntar a un humano.  
Se lo voy a preguntar a un humano porque a ver, y al mismo tiempo te lo he preguntado a un humano.  
¿Es que alguien?  
Creo que alguien.  
Sacó algo en.  
Una repo.  
Va, qué maravilla.  
Exacto, tienes.  
Resúmelo en un mensaje por.  
WhatsApp para ingenieros informáticos.  
Al final de GitHub vamos a hablar mañana en tema de colaboración. GitHub es una página web donde la gente sube programas, desarrollan soluciones.  
Y tu antigravity le puedes decir, búscame la solución que haya desarrollado tal persona.  
¿Y compártela esto que os estoy pasando, qué es?  
Google Notebook LM no tiene una API oficial.  
Pero bueno, voy a dejar que Rubén me conteste por un lado, pero ya no necesito la respuesta de Rubén.  
Sí.  
Lo que estoy enseñando es todo.  
That is.  
Como decía Rajoy, salvo alguna.  
¿Salvo alguna?  
Cosa que puede que no tanto.  
Esto, Andrea Rajoy, es un presidente en el gobierno que tuvimos.  
Me encanta, a ver, gente, he encontrado la pieza para automatizar Noduke LM desde local sin lidiar con la odisea de tal. me.  
Qué maravilla, vale.  
Vale.  
Pregunto.  
He empezado con la clase.  
I see.  
De forma oficial, de forma oficial, no, y llevamos hora y media, sí.  
De forma oficial, no, pues vamos a que si no empiezo nunca, vamos a, bueno, por un lado, presentación del día 2, no. ¿Dónde está el resumen que me he hecho?  
Esto, presentación del día 2, aquí tengo.  
Bueno, de Cloud Computing y datos a escala, me falta por hablar de una cosa más.  
De esta parte de aquí y a es ías, o sea.  
Y de infraestructura.  
As a.  
S de servicio.  
P de plataforma.  
Y ese de software.  
Os cuento.  
La nube.  
Yo tengo este ordenador que es local, visto.  
Esto es un ordenador que es local, esta información de aquí.  
Esta información de aquí.  
Esta información de aquí están dentro de la CPU del ordenador que tengo. Lo estoy tocando con la mano. Ahora el ordenador, esto, esta información, esta memoria está aquí dentro.  
En varias ocasiones.  
En varias ocasiones.  
He entrado.  
¿En esto de aquí, cómo he entrado aquí?  
Esta también es gratis.  
Esto es esta es de Google, Google tiene mogollón, Gmail, Gmail es gratis, ¿no?  
Sí, no, sí, Gmail, pues igual que tenéis Google da Gmail.  
Google da.  
Esto es para conectar un servidor a la.  
Uno  
Pues.  
O el portátil.  
Para acceder en.  
Remoto.  
Yeah.  
Es con FPC para llegar.  
Es un MPC para antigravity justo, pues te lo agradezco, Rubén, que al final es más o menos lo que me ha dicho Gemini.  
Me ha contestado, no me ha vale, sí, te mando un vídeo.  
Te quiero, bro.  
Reenviar universidad, digo, lo que os acabo de mandar.  
¿A ver a lo que voy, esto qué es?  
Si le doy al F 11.  
Ya hasta aparece mi pantalla como si fuera este ordenador, pero realmente.  
Lo que estoy haciendo es conectarme en remoto a un ordenador.  
Está en otro sitio físico.  
Si es mi propio ordenador, no me tengo que pagar a mí mismo nada.  
Volvemos a lo de la Virgen del Puño que os he hablado antes. Si es Si esto es un curso de tecnologías emergentes, una de la tecnología emergente que cada vez va a tener más peso es la infraestructura en local, autónoma e individual.  
Este ordenador es mío si en lugar de ser mío, lo tuviera contratado.  
Con Amazon Web Service o lo tuviera contratado con Google Cloud o lo tuviera contratado con cualquier otro que dé servicios en la nube más baratos.  
Pues aquí depende, si fuera un ordenador, si fuera un servidor que yo tengo contratado, sería infraestructura.  
Si en lugar de ser servidor, viniera la máquina virtual, estuviera la máquina virtual con el sistema operativo ya instalado.  
Estaríamos hablando de una plataforma as a service, tú llegas, te conectas y tienes un ordenador en la nube.  
Pon el sistema operativo.  
Y luego software as service.  
Esta no la estáis, esta no la veis venir, no so buenas a Services Dropbox, por ejemplo.  
Pero yo software as a service.  
No me acuerdo.  
Software as a service soy yo mismo mandándome las cosas a través de WhatsApp.  
Que uso un grupo de WhatsApp que tengo conmigo mismo. Bueno, vieran a mi mujer, o sea, la meto, pues no sé, pero este grupo podría ser yo conmigo mismo y aquí voy, voy borrándolo de vez en cuando. Este es un vídeo que tengo que ver, este es un vídeo que tengo que ver.  
Que lo voy a compartir con vosotros, no lo he visto, este vídeo no lo he visto todavía.  
Y merece la pena.  
Este no lo he visto todavía, a ver, no lo he visto todavía, pero es de lo que estamos hablando.  
¿Y esto qué es software as a service? Me habías comentado, era Margarita, qué bien, me he acordado, no estoy mayor. Os lo os lo quiero mandar, pero he comentado. Margarita, sí.  
Margarita.  
Esto lo he visto esta mañana.  
Envidia.  
Aquí.  
Está dando mogollón de modelos de IA.  
De.  
Código abierto, pero potentes.  
Gratis.  
Esto.  
Les tiene que hacer pensar. a.  
Open.  
Open, OpenAI, OpenAI y a antigravity replantearse su modelo de negocio. No es broma lo que estoy diciendo aquí envidia.  
Igual que Brock con K, no Brock con Q coma.  
Por no hablar de los modelos.  
Chicos.  
Esto que os estoy poniendo aquí es una de las cosas fundamentales que os tenéis que llevar de este curso.  
Yo esto, esta página web no la he, o sea, lo he visto esta mañana.  
Mira, me dice que esto.  
Y voy a pedir alguno puede.  
Darle una vuelta a esto.  
Creo que es.  
Bueno.  
Y gratis los las primeras dosis.  
Siempre.  
Son gratis, yo empecé a fumar.  
¿Cuánto has fumado?  
El primer cigarro te invitaron.  
No, o sea, te compraste el paquete con las instrucciones.  
Generalmente, el primer cigarro lo dejé.  
Review.  
Yo lo dejé hacer 30, creo, o por ahí estuve enganchado.  
¿Cuál es mi?  
A ver.  
Lo que voy, he preguntado eso en un grupo de WhatsApp, por qué he preguntado eso en el grupo de WhatsApp, Luis, y usted conoce.  
¿Alguno para análisis argentino?  
Gráficos de bolsa.  
A ver, justo es a donde esa no iba análisis argentino, gráficos de bolsa para alguno, para análisis gráficos de bolsa. Vale, aquí no iba eso exactamente.  
Pero no, nada de que disculpar, Margarita, dime una acción que te interesaría analizar su gráfico en bolsa.  
Dime el nombre de una acción y me meto en Gemini.  
Me he vuelto a meter en Gemini.  
¿Estoy en Yemini, vale?  
Dime si esto.  
Dime qué tal es esto.  
¿Qué tal es esto? Estoy haciendo a Gemini la misma pregunta que le he hecho en el grupo de WhatsApp.  
Dime qué tal es esto, que son las APIs de los modelos, ya os adelanto yo que creo que es muy bueno.  
¿Es la pasarela de envidia, a ver envidia, a qué se dedica?  
A comercializar chips, que los chips se meten dentro de CPUs, o sea, en parte también a comercializar capacidad de proceso de datos.  
¿Y con esto qué está haciendo su infraestructura de datos? el?  
TGX Cloud de Nvidia. Con esto lo que está haciendo es darle un uso. ¿Cómo das el uso dejando a la gente que use la IA y a cambio, tú cómo ganas pasta con eso?  
Pues tú dejas a usuarios como yo, que soy pequeñito, y si el día de mañana tengo que desarrollar esa solución, llega alguien y me contrato y me contrata, pues que ¿cuál es la solución? ¿A quién probablemente pague? Al propio Nvidia.  
Y luego envidia con eso, lo que está haciendo es a la competencia. O sea, una de las cosas que Space X al salir a bolsa está haciendo es convertirse en uno de los referentes de de CPDs, de centros de procesos de datos. O sea, Space X tiene un el servidor más grande del mundo.  
Que se llama colossus.  
Que es Colossus, un servidor que se lo.  
A ver, háblame de Colossus y de su relación con.  
Y de su relación con Antrófica.  
Colossus es creo que es el servidor más grande del mundo. Colossus es de Space X.  
Y si no tuviera Internet cerca y me pusieran una pistola en la cabeza, diría 6000 millones de dólares al año, paga Antrófica Colossus por usar su infraestructura.  
Sinceramente, no sé cuánto es.  
Pero teniendo i al lado.  
Anthrofic cerró un acuerdo masivo para alquilar la capacidad total de super del supercomputador Colossus. ¿Qué es Colossus? Colossus es un supercomputador de inteligencia artificial de Elon Musk. Construyó en un tiempo récord de 122 días en Memphis Tenesis. Consumo energético más de 300.  
¿Cuánto he dicho yo? 5000 millones, perdón, no he dicho 6000 millones.  
Antrophic paga el impacto inmediato para Antrophic, adiós al racionamiento al inyectar la potencia. Antrophic duplica de golpe, o sea, ganan todos, ganan todos, pero esto es una pasta gansa que se están fundiendo en capacidad de proceso.  
Lectura, vale.  
Hazme un resumen en.  
Laura está abriendo más.  
Perdona, claro, a ver, es una carrera de ratas, una carrera de ratas que no da ni para cubrir costes. Y el problema es que si pierdes la carrera estás perdiendo, pero si ganas la carrera vas a tener más usuarios. Por lo tanto, vas a tener un coste energético y de capacidad de proceso todavía mayor.  
El modelo de negocio de Open Cloud.  
Perdón, el negocio, el modelo de negocio de Open AI, los de GPT y de Antropic, o buscan otra forma o es un modelo de negocio que está condenado a explotar. Space X, en cambio, ¿qué está construyendo? Space X no quiere ir a Marte. Space X lo que está haciendo son satélites que dan Wi-Fi, CPDs que apoyan esos satélites.  
Y Space X lo que está haciendo es construir la infraestructura de Internet.  
Os comparto esto, copiar.  
A.  
Control V.  
A ver.  
Vamos por partes, Margarita te había pedido una empresa. El SP 500 no es una empresa, es un índice y son las 500 empresas más grandes del mundo. Yo de mercados os puedo responder todas las dudas que queráis de mercados de bolsa. Hoy no es el objeto del curso, pero lo que sí que voy a hacer rápido es control VSP 500.  
Aquí tenéis, este es un índice que representa las 500 empresas más grandes de.  
Estados Unidos de estas 500 empresas.  
7.  
Los 7 magníficos que ya no son 7 porque ahora ha entrado Space X, los 7 magníficos eran.  
Apple.  
Amazon Alphabet, que es Google Meta.  
Hey.  
Envidia es la.  
Y me deja una y Microsoft.  
Y Microsoft Tesla juraría que es ahora con SpaceX. Bueno, el SP 500 son las 500 empresas más grandes que por capitalización SP 500 capitalización Magnifican Seven.  
Imágenes.  
¿Dónde está, dónde está?  
Magnifica Seven, justo uno de estos quiero.  
Esto es lo que quiero que veáis, este es el S&P 500 entero.  
O sea, estas son las 500 empresas más grandes, la tarta son las 500 empresas más grandes de Estados Unidos y de esas 500 empresas más grandes.  
Apple, Microsoft, Alphabet, Amazon, Nvidia, Meta y Tesla.  
Representaban no sé en qué fecha, pero ahora estarán en torno al 30 y pico por ciento de toda la capitalización.  
¿Y luego?  
Ya que estamos muy rápido.  
La inversión en CPDs.  
La inversión en CPDs en centros de procesos de datos.  
Que he buscado Capex, Capex en teoría es capital expendicho, o sea, es la o sea, hay Capex y Opex. Tú tienes que hacer un proyecto de inversión, tienes que construir una presa y te gastas en la presa lo que sea y luego una carretera, te gastas en la carretera el Capex y luego el Opex es lo de la operación de la carretera.  
¿Qué está pasando con todo esto? Que se gastan infraestructura, inversión en infraestructura de forma recurrente porque cada vez tienen que crecer más y más y más. Esto es lo de la carrera de ratas de lo que estaba hablando.  
Y.  
Si os fijáis la inversión en capex.  
Es una verdadera salvajada, necesitan liquidez para funcionar y necesitan liquidez.  
Y esta liquidez en algunos casos no se sostiene con los ingresos que tienen. Resumen, ¿es posible que haya una burbuja aquí que pueda que vaya a explotar?  
Sí, que luego también explotó una burbuja de las punto com en el año 2000 y dentro de esa burbuja había 2 empresas que no sé si os sonarán, Amazon y Google.  
Las burbujas explotan, pero sigue habiendo vida.  
Y Microsoft y Microsoft desde mucho antes. Correcto, a ver, respondiendo a tu pregunta.  
Respondiendo, o sea, a la pregunta de Margarita, me ha dicho el SP 500, voy a ir al.  
5 días, a ver, me voy a coger, o sea, esta gráfica he puesto la el chat, pero me voy a , me voy a buscar una mejor, voy a buscar chat, me voy a una que sea un poquito mejor.  
La de trading vivo, vale.  
¿Y me voy a buscar los últimos 5 días, vale?  
Imprimir pantalla.  
He impreso la pantalla, me voy a Micha GPT.  
Control V, acabo de pegar la pantalla.  
Quiero aprender análisis técnico.  
¿Puedes hacerme el análisis técnico de esta gráfica?  
Y además, enseñarme cosas.  
Me he ido a GPT, ¿por qué? Porque es el que tengo, ay.  
Me ha hecho, me ha copiado la segunda pantalla también.  
Importante.  
Con lo que acabo de hacer cuando hablemos de Edge, que hoy hablamos de Edge en breve.  
Le he metido un consumo de tokens demasiado grande, si yo quisiera un análisis técnico de verdad.  
Subirle solo la gráfica si queréis análisis técnico de verdad.  
GPT no es vuestra herramienta, tenéis herramientas de código abierto, pero preguntarle a GPT por herramientas de código abierto.  
Sí.  
Pero en este caso, como le he metido una imagen que no es parte.  
A ver si dibujáramos la estructura sería algo parecido.  
A ver, está bien, fenomenal, me ha contado cosas que estas se pueden leer y dame una infografía.  
GPT.  
Con la última versión, con el 5 punto que, por cierto, sacaron hace poco una, yo creo que estoy trabajando con.  
¿Dónde está la versión de GPT?  
Aquí.  
Estoy trabajando con el 55. Con la 5:05 hace unas infografías que os morís.  
De buenas.  
Pero respondiendo a tu pregunta, Margarita.  
A ver, no puedo en este curso responder al análisis o sí, a ver, no puedo, es pegarle.  
Esta gráfica aquí, si se la pegas a GPT y le preguntas que sobre esta gráfica te la analice, el propio GPT te la puede analizar, pero estos en concreto, la herramienta que yo creo que estás usando es Bloomberg.  
O sea, yo creo que estos gráficos son de Bloomberg y Bloomberg tienes tutoriales, tienes, o sea, ahí de código abierto voy rápido.  
Dame herramientas de.  
Código abierto.  
Que permita hacer análisis técnico tipo Bloomberg.  
Y volumen.  
Dame un resumen para.  
WhatsApp solo de las herramientas.  
Phone.  
Diones.  
A ver.  
Está tardando un poquito.  
De código abierto hablaremos mañana.  
Sí, a ver las velas japonesas de las que habla Armando, muy sencillo, voy a voy a volver al camino, es muy sencillo, las velas japonesas.  
Esto es como todo en la vida.  
Una, estos son velas japonesas.  
Es una vela japonesa.  
Te indica si es verde, quiere decir que el precio hay una vela japonesa por cada momento que estemos estudiando, generalmente días. La vela japonesa te indica si es verde que el precio de la acción ha subido, si es roja, que ha bajado.  
El precio de la si es verde abajo, apertura, arriba, cierre, evidentemente si es rojo al revés, y luego máximo y mínimo indicadores de volatilidad, el mínimo del precio en el día y el máximo en el precio. Por ejemplo, viendo esto podéis ver.  
¿Cómo viendo esta?  
Viendo esta se ve lejos, se puede ver como hay días que hay poca de la volatilidad, pero ha cambiado mucho el precio y hay días que cambia poco el precio, pero hay mucha volatilidad.  
A.  
Todo esto es un mundo, un mundo que se sale del alcance de esta sesión.  
Bien.  
A ver si le da la infografía ya.  
GPT, a mí a veces se me queda parado, refresco la página.  
Y luego vuelve.  
Y aquí tienes la infografía más o menos. Mira, Juan, qué pasada.  
Tengo tentaciones de publicarla en LinkedIn directamente.  
Es broma, pero no tanto. Bien, no lo voy a hacer. No os asustéis, sé controlar mis impulsos, aunque no lo parezca.  
Vuelvo, abro pestañas como si no hubiera mañana.  
Esta no la quiero cerrar, cierro, cierro, cierro, cierro, cierro.  
Hierro.  
Dice a ver.  
A lo que voy.  
¿Hoy de qué vamos a hablar?  
Por un lado.  
Arquitectura de datos en la nube.  
Y mola, me dicen hasta el tiempo que tengo que dedicarle a cada cosilla, 3035 minutos. Pero si sumáis esto, a ver, GPT, o sea, la I a los LLMs no son buenos sumando.  
No son buenos con el tiempo. Uno de los grandes retos que tienen es el de medir el tiempo.  
Pero.  
Yo os doy mi palabra de que cuando estoy en casa y tengo que calentar unos espaguetis, no trato de usar GPT, uso el microondas. Esto parece una chorrada, pero muchas veces la gente intenta usar GPT para todo y luego es que GPT le he dado una resonancia magnética.  
Y me ha dado un diagnóstico que está mal y he palmado por culpa de GPT.  
No, ¿quién te manda a darle una resonancia magnética? GPT no está entrenado con resonancias magnéticas. Y si tú te sientes mal, vete al médico, no vayas a GPT o si vas a GPT, luego no le eches la culpa a GPT.  
Insisto, GPT, la IA, los LLMs, con el tiempo no se llevan bien del todo.  
Segundo punto.  
Esto que estaba hablando del IoT.  
¿Esto que tenía ahí del IoT, qué es el IoT?  
Es Internet of Things.  
Al final.  
El I o T.  
La idea básica es entradas y salidas, muchos sensores sensórica por todos lados que procesan datos.  
Todos esos datos, o sea, en las diapositivas, el ejemplo que tenéis es el clásico de I o T, que además es un ejemplo clásico.  
Es curioso y que me gusta. Yo estuve trabajando en un ayuntamiento de Madrid, en Pozuelo Alarcón, en temas tecnológicos en el año 2000 2012. En el año 2012 estuve trabajando en Pozuelo Alarcón.  
Ya se habla, bueno, ya se hablaba, o sea.  
El.  
El las smart, Las smart cities en el año 2012 ya es como si ahora digo six seven para alguien joven, ya es algo como los pantalones de campana, ya entonces era algo antiguo.  
Y se invirtió con el plan E de un presidente del gobierno que tuvimos. Había un plan E. No sé si os acordaréis. Andrea, ¿te acuerdas de Rajoy, no?  
Pues hubo otro, Andrea, no sé si te sonará que se llama Zapatero.  
Perdón, perdonadme tanta maldad. Si hay alguien que es muy cafetero, le pido disculpas, pero es que esto de estar hablando horas y horas. Espera, voy al WhatsApp, no sé si hay alguno que se acuerde de Zapatero. Eso es, eso puede ser retranca.  
Vale, pues es que a ver si Zapatero con el plan E en el plan E hubo un montón de gente. A ver, no fue Zapatero el que gastó la pasta con el plan E, pero en el plan E para se gastó mucho dinero.  
En rotondas.  
Se gastó dinero en carteles para decir, o sea, había proyectos que el cartel era más caro que la que el reacondicionamiento de la fuente que arreglaron, ponían carteles por toda España de tal y se gastó un dinero en sensores para ciudades y convertir las ciudades en ciudades inteligentes.  
Tú llenas la ciudad de sensores y el problema de todos esos de esos sensores es que pertenecen a un sistema que el sistema tiene que estar adecuado. Me gusta mucho el ejemplo de las ciudades inteligentes porque gran parte de esos sensores.  
No han servido nunca para nada, pero ahora nuestras ciudades están mucho más cerca de ser ciudades inteligentes de lo que eran en el año 2012.  
Y no porque los ayuntamientos hayan puesto dinero en sensores, sino porque todos los ciudadanos vamos con un móvil en el bolsillo.  
Y participamos en la inteligencia de las ciudades. ¿Se entiende esta metáfora que luego también hay sensórica, también además?  
Me gusta mucho la metáfora del Tesla.  
Es un Tesla.  
Es un coche.  
Salvaterra, Dominio y Monsao.  
Es un El Tesla es un coche, es un coche, tiene cuatro ruedas, conducen carreteras, tienes que tener un permiso de conducir para conducirlo, pero el Tesla también es.  
Una batería que lleva energía de un sitio a otro, necesita consumir, pero tú cuando llegas al trabajo no tienes la batería. O sea, tu casa por la noche generas más energía de la o puedes tener almacenada energía que metes en el Tesla y cuando llegas al trabajo se puede usar. Un Tesla también es un centro de ocio.  
Si el coche conduce solo, pues lo mismo puedes trabajar en el coche y puedes vivir más lejos.  
Pero es que el Tesla también son ordenadores con ruedas, es capacidad de computación.  
Y yo si necesito un CPD cerquita para procesar algo relativamente sencillo.  
Si el Tesla tiene un par de procesadores, me estoy yendo arriba y me estoy. O sea, todavía estoy hablando de algo que no existe. Estoy hablando de Edge Computing. Si necesito procesar algo en un ordenador cerca, tengo el móvil para procesar, pero el móvil es relativamente flojo.  
Pero si hay un Tesla aparcado, lo mismo el del Tesla me alquila capacidad de computación.  
O sea, el Tesla es una nube distribuida cerca del usuario final.  
Concepto fundamental, la latencia.  
Es la latencia, el tiempo que tardas en recibir una respuesta.  
Si el centro de procesos de datos está en Finlandia.  
La cuenta que tenéis que echar es que la luz tiene que ir y volver. La velocidad de la luz en vacío son.  
8.  
Kilómetros en un milisegundo.  
La luz tiene que ir y volver, por lo tanto 300 / 2150. Pero es que además va por fibra óptica en general, la fibra óptica, la luz como en Gendomo en Amanece que no es poco, es broma, es una referencia, Amanece que no es poco, solo para los más veteranos. Es una película, va andando en zigzag.  
La luz no va en línea recta. Resumen, la latencia, la cifra que tenéis que tener en la cabeza son un es 1 milisegundo por cada 100 km.  
Por lo tanto.  
Si tus CPDs están.  
A 1000 km estás metiendo 10 milisegundos, 10 milisegundos. Un pestañeo creo que está en torno, o sea, un pestañeo creo que está en torno a los 10 milisegundos, un poquito más, pero creedme que en los mercados financieros con 10 milisegundos haces pasta.  
Si tienes la información 10 milisegundos antes, haces pasta.  
Hay gente que se ha gastado mucha, mucha pasta en conseguir que la información llegara 4 milisegundos antes. La referencia es Flash Boys, se ha hecho, hay libro, Flash Boys. Flash Boys es un libro.  
Las voice.  
Las voice a Wall Street Revolut es un libro de unos señores, no voy a comisión.  
Me gustaría que no fuera un enlace muy largo.  
¿Y como no voy a comisión?  
Este es el libro que cuenta la historia.  
Los que consi.  
Vieron 4 milisegundos gastándose 400000000 USD, invirtieron 400000000 USD en que la fibra óptica que iba desde Chicago a Nueva York atravesara unas montañas por un túnel en lugar de rodearlas.  
Y reducieron la velocidad de 17 milisegundos a 13 milisegundos.  
Y con esa inversión en infraestructura consiguieron ganar pasta.  
A ver, estoy hablando de let's computing, estoy hablando de lo que las diapositivas tenéis en la unidad número 6.  
Luego, Juan, lo que me habías dicho antes de que.  
¿Habías era algo más de la factura? Sí, lo de la factura proforma que en lugar de hacerlo en PDF cada vez habías usado un formato intermedio que era MD.  
Como había tardado mucho.  
Y era mejor pedirle que lo tuviese como patrón a mi bebé.  
Totalmente pensando en el IoT.  
¿Imaginaos, tengo un sensor, tengo una cámara, vale?  
O yo mismo con las clases.  
Yo no os estoy pasando el audio en bruto de la clase. ¿Por qué no os estoy pasando? Imaginaos que tuviéramos el audio en bruto de las clases. Cada vez que le hago una pregunta tendría que hacer el audio en la transcripción.  
Hay un proceso previo en cuanto recibes la información.  
Eso lo hago yo en cuanto puedo, que es pasar del dato en bruto.  
A la transcripción.  
Y esa transcripción sigue siendo dato en bruto para el usuario final, pero ya es un procesado en relación con la información inicial. Y mientras que, y además, si es vídeo, la clase puede ser gigas de información. La transcripción son cash. Cuando hablamos de I o T hay que pensar.  
Mucho, mucho, mucho.  
No solo en la sensórica, sino en el proceso asociado con los datos.  
Una estación meteorológica.  
Los datos que nos manda son muy poquitos, o sea, yo no quiero saber la temperatura en todo momento.  
Con tener en tiempo real un dato de temperatura cada 15 minutos, yo creo que vamos que chutamos y si tenemos además que si el aire y tal, pero es que estamos hablando de una cantidad de información absolutamente minúscula.  
Y tenemos una estación meteorológica que cuesta una pasta en tema físico, pero asociada con la información que estamos transmitiendo es relativamente poca.  
Y volvemos otra vez.  
A.  
Volvemos otra vez.  
A la importancia de la información que le das y os voy a enseñar una cosa que es cachondísima.  
Me está encantando esta sesión, *****, Juan, gracias por existir.  
Esta es tan, mirad cómo mola. Tengo cosas en la cabeza, secador, secador y polymarket. ¿Sabe, *****, sabéis lo que es polymarket?  
Polymarket lo conoces.  
Vamos, o sea.  
Polymarket, Polymarket tiene que ver con el mundo cripto, os juro que empiezo por la clase ahora.  
Empiezo con la clase ahora.  
Es un momento de.  
Get.  
Perdón, pronósticos reales no me ha me ha pronósticos en tiempo real.  
Sí.  
A las 11:30 hacemos un descanso.  
A las 11:30 hacemos un descanso de 11:30 a 12, ¿no? ¿Cuánto te parece razonable?  
Estaba allá.  
Sí.  
A las 11:30 descanso hasta las 11:00 vamos a Polymarket y repaso lo de Polymarket. Me he metido en el enlace que os he pasado.  
Polymarket.  
Como no puede ser de otra manera, están con el fútbol. Yo no soy de fútbol, os pido disculpas.  
Estos son todos los mercados de Polymarket. Voy a darle a Taylor Swift, o es que yo Taylor Swift, sí, Taylor Swift.  
¿Quién actuará en el espectáculo de medio tiempo de la Copa Mundial? La Copa Mundial supongo que habrá un espectáculo y hay apuestas. Pues parece ser que es Shakira, Justin Bieber. Esto será, bueno, no sé, claro, como es en Canadá. ¿Quién asistirá a la boda de Taylor Swift y Travis Skells?  
Lo siento, no puedo ayudar con esta esta o no. ¿Quiénes eran los padrinos de Travis Kells? Pues hay una señora, Taylor Swift, los de los Swifties. Vamos a geopolítica.  
Estos son gente que con tokens apuesta. Esto es un mercado de apuestas descentralizado. Me he ido a geopolíticas, aquí están apostando.  
Que me he ido a geopolítica con 2 intereses, o sea, con 2 objetivos, por un lado es el.  
Pues mira, se están cortando un pelo hasta hace 1 año, o sea, hasta hace un mes, 2 meses se podían ver en geopolítica. Irán bombardeará, o sea, perdón, Estados Unidos bombardeará, o sea, juegan con la probabilidad de que muera gente.  
Esto, evidentemente, desde un punto de vista ético, es absolutamente horrible, no hay ningún pero.  
Y además.  
¿Cómo?  
¿Quién será el próximo primer esto no?  
Y esto nos permite ver más o menos.  
Un análisis de sentimiento, Gaidy Eitzenkott. Yo no le conozco, pero que me dedico a estas cosas, pues lo mismo me interesa buscar quién es Gaidy Eitzenkott, porque será un nombre de los que tal visto.  
Pues os voy a contar la historia de Polymarket.  
Del secador estaban apostando.  
O declaro que puedes hacer una aportación, Pablo, sobre el mundo de la IA y dónde nos puede sumar valor a nuestra generación. este.  
Pues te voy a poner un corazón, gracias.  
E.  
En relación con Polymarket, luego lo le echo un ojo en relación con Polymarket.  
Es más, voy aquí 1 segundo.  
Y este para echarle el ojo de verdad, me lo mando a mí mismo.  
Porque si no me lo mando a mí mismo, a lo que voy, estaban apostando sobre la temperatura en París.  
Y alguien descubrió que todas las apuestas de la temperatura en París.  
Todas las temperaturas, todas las apuestas de la temperatura en París estaban relacionadas con una estación meteorológica que estaba en determinado sitio.  
Se acercó un señor con un a ver, esta foto, esto está teatralizado, pero se acercó 1.1 secador, dijo, apuesto a que hoy la temperatura va a ser superior a 25°.  
Con el secador subió la temperatura, ganó la apuesta, bajó la temperatura y a otra cosa, mariposa.  
Perfecto.  
Vuelvo para atrás.  
Hemos hablado de la nube y hemos hablado del IoT.  
Queda como la gran esperanza blanca, tanto económica.  
¿Por qué se habrá desinflado tan?  
Me alegro que me. ¿Te acuerdas de la curva de Garner de ayer? El I o T tocó, tocó el punto máximo de la curva, se ha desinflado.  
Y al final el I o T tiene que ver más, o sea, es muy difícil.  
Que haya un negocio que se base en la descentralización.  
Que lo asuman las grandes multinacionales, porque las grandes multinacionales son centralizadas por naturaleza, o sea, a nadie le va a interesar.  
A ninguna empresa le va a interesar que triunfe un proyecto descentralizado, pero a toda la sociedad sí que le interesa. Por lo tanto, al final el avance del I o T, igual que el avance del blockchain o el avance de Polymarket, que Polymarket es blockchain, es o el código abierto, o sea, mañana vamos a hablar mucho de.  
Código abierto, yo soy fan del código abierto.  
No gano 1 eur diciendo en clase a la gente que la gente use código abierto, pero es que yo uso código abierto constantemente.  
El código abierto.  
Es la comunidad trabajando con la comunidad y fundamental aquí convergencia converge mi interés con el de todos los usuarios de código abierto y cuando nos queremos dar cuenta.  
Pues acaba de compartir.  
Acaba de compartir.  
Pablo.  
Su visión y me gusta porque dice, puedo hacer una aportación. Pablo, no solo puedes, debes, debes contribuir porque tu visión es diferente a la mía.  
Y todos aportamos, o sea, al final el I o T tiene que ver más. O sea, si ahora quieres ir a cualquier sitio en coche, al final de ese código, de ese de ese I o T se apodera Google, pero tenemos podemos ver temperatura en tiempo real. Tenemos cámaras de tráfico de la DGT conectadas, o sea, tú ahora mismo puedes.  
¿Tienes la ciudad en código abierto?  
Muy para frikis, que si el friki quiere.  
Dáculos de pago.  
A ver, se ve como muy importante, pero por otro lado, la gran desconfianza que puede generar todas esas o esos sensores en nuestra vida supongo que ha sido o es una barrera, ¿no? Porque *****, hasta qué punto quiero que *****, saber qué temperatura tiene este edificio en la universidad no es algo común, ¿no?  
Pero si es de tu casa.  
A ver, ahí hay ciertas barreras de datos.  
Me imagino.  
O sea, un grave problema para que haya ido como metido.  
Algo vaya más lento de lo que de lo que parecía, porque parecía que las ciudades iban a estar metidos en una burbuja conectadas.  
Y en el fondo, tendemos hacia esa visión.  
Pero en esa tendencia.  
Está el abismo de Mur.  
El abismo de Moore que hace que los frikis, o sea, yo no me he conectado a ninguna cámara, pero os aseguro una cosa con Antigravity. Eso lo ha hecho uno. Uno de mis alumnos lo hizo durante este año. Me dice, mira Luis, Lucas pila de tercero de Liebe. Me dice, mira Luis lo que me he hecho esta mañana y lo hizo.  
Creo que fue con Creo que fue con antigravity.  
Apretaba un botón en su móvil y se va y se va descargaba de la ruta que tenía que hacer todos los días en coche, las fotos de las cámaras.  
De los atascos.  
Se apretaba un botón, le consumía algo en tokens, pero se conectaba con las cámaras.  
Y se descargaba la información, o sea, y se descargaba la foto de los tramos que tenía que recorrer.  
A ver.  
Si cambias la ruta, tienes que cambiar la programación, es que eso no es eficiente.  
Hacerlo.  
Tenemos el data lake, por un lado tenemos todos los datos que queramos por ahí.  
La IA es muy buena.  
Tirándose a los datos y cogiéndonos lo que nos interese, y nosotros tenemos la visión mental. Yo creo que todo lo que estamos viendo, esta sesión que os estoy dando hoy es la punta de un iceberg mucho más profundo que nos va a cambiar la vida durante los próximos años. Esto .  
Gigantesco, no había capacidad. Sin embargo, ahora con la herramienta EA.  
Puede devorar todo el dato que quieras y traducirtelo en algo de valor. Eso es de lo que estamos hablando ahora, es justo de la convergencia de este punto de la convergencia.  
En Smart Cities no voy a hablar, yo quiero hablar de Ethereum y de resumen.  
Esto que es el proyecto uno, me lo voy a cargar, lo cierro, vale, no lo cierro, me voy a lo de ayer de blockchain, me voy a lo de ayer de blockchain y lo que me voy a ir dentro de Antigravity.  
A lo de ayer de Blockchain.  
Y le voy a decir, estoy en el segundo día de sesión.  
Mete todo lo que llevamos.  
De.  
Lockchain en una.  
Carpeta.  
Y quiero.  
Un.  
Sí.  
Un resumen fuera.  
Es.  
Que me.  
Un beso.  
Explicar a metáfora del chupa.  
Chups.  
La metáfora del Chupa Chups.  
P 2 p más.  
Clave pública más p 2 p, clave pública más.  
Código abierto.  
Las tecnologías ya existían antes, pero fue con.  
Satoshi, cuando se.  
Cuando convergieron, quiero usar la palabra convergieron.  
Guiño.  
Niño convergieron.  
A lo bestia.  
A ver, acabo de recuperar el proyecto de ayer.  
Tengo en el proyecto de ayer.  
La parte de XR que está aquí y luego varias cosas fuera y lo que le he dicho es méteme todo esto, le voy a decir que lo haga con cariño.  
Ordénalo con cariño, ya que hoy.  
Ay.  
Quiero seguir.  
Construyendo, os cuento que me quedan 6 minutos para el descanso. Luego sigo con esto. Hay un concepto fundamental, el de clave pública y clave privada. Lo vamos a ver después, lo de clave pública y clave privada, y además me interesa verlo después porque la clave pública y clave privada me permite hablar de criptografía, me permite hablar de ciberseguridad y me permite hablar de la parte cuántica.  
Es a lo que vamos a dedicar la segunda parte de la sesión oficialmente.  
Y antes hablaremos de smart contracts y hablaremos de Uniswap. A esa segunda parte vamos a hablar un poquito de finanzas descentralizadas. Vamos a hablar de Uniswap.  
Y es a no always, y es sí, yo le digo que sí a todo, se le pueden quitar si os metéis aquí.  
Si os metéis aquí, podéis decirle sin permisos y hay una que es tira sin que te pare como loco, pero no se lo voy a decir.  
Me meto aquí y me ha organizado todo.  
Blockchain cero, bueno, me ha organizado todo, no me ha puesto solo la metáfora del chupa chups.  
Os cuento muy rápido, en el año 2008 hay una crisis financiera muy grande. Septiembre 14/09/2008 quiebra Lehman Brothers aprovechando ese ruido.  
Un grupo de técnicos bajo el apodo de Satoshi Nakamoto no se sabe quién es Satoshi Nakamoto bajo el bajo el seudónimo de Satoshi Nakamoto.  
Liberan en octubre, hacen, crean un escrito, un manifiesto. Se llama Whitepaper y el 1 de el 04/01/2009 aparece el bloque Génesis. O sea, resumiendo, aprovechando la ola de la crisis financiera del 2008, aparece.  
Una nueva cosa en un reducido grupo de amigos que se llama Bitcoin y en y junto con Bitcoin, que es el nombre de la red.  
Aparece la tecnología blockchain, que es la red.  
Bitcoin en origen se llama con bitcoin. La palabra bitcoin se usa para referirse a 2 cosas.  
Bitcoin se usa para referirse a la red, a la propia red de blockchain, pero Bitcoin también es el token que permite intercambiar la red.  
Hemos hablado mucho de toques durante esta sesión asociada con la gasolina que consume la IA.  
¿Cuántos toques me quedan? ¿Qué es un toque?  
Una suerte de.  
Dinero no oficial es una unidad de medida que si yo tengo 10 tokens, pues sé que me queda juegos para esos 10 tokens. Si yo tengo 15 l de gasolina dentro del coche, sé que puedo recorrer X kilómetros si tengo 20 eur en el bolsillo.  
Pues sé que me puedo pedir varios cafés.  
El token es una unidad de medida que es el blockchain, un registro público descentralizado.  
A lo que voy.  
Existen caramelos desde hace muchos, muchos, muchos años y existen palos desde hace todavía muchos más años.  
¿Qué hace el señor?  
¿Qué inventa el Chupa Chups?  
Que antes le hemos visto, Enric Bernard se llamaba.  
En el año 58 llega un señor y junta un palo con un caramelo.  
Yes.  
Qué maravilla, qué maravilla.  
Las redes P 2 P existen desde el año 90. La criptografía de clave pública existe desde los años 70.  
El proof of work desde el 97 y el código abierto. A ver, el software libre. Mañana hablaremos de código abierto y de software libre. Empieza de existe las comunidades de software libre desde los 80. ¿Cómo se llama el señor este Richard Stallman? Richard, estamos en una escuela de ingeniería. Richard Stallman lo tengo que decir, el padre del software libre.  
Mañana hablamos de código abierto y de Richard.  
Tecnología que ya existe, o sea, el blockchain no es una tecnología genuinamente nueva, es como el chupachups junta el P 2 P.  
¿P 2 P qué es lo del emule? ¿Os habéis descargado alguna vez música pirata? Mentir, decir que no en el caso de que lo hayáis hecho. La música pirata es una red p 2 P en el cual, como lo de Fuentevejuna, no hay un ordenador donde esté toda la información, está todo descentralizado.  
P2P es un ordenador que se conecta a una red, comparte.  
Y otros ordenadores se conectan a la misma red. La criptografía de clave pública hablamos luego y el proof of work lo cuento luego, dime.  
Dime.  
Encaja perfectamente, o sea, eso es convergencia. Lo dejamos aquí, Sony 29, nos vemos a las 12:00. Luego sigo sobre esta misma diapositiva, pero no quería dejarlo sin haber empezado un poquito con el tema de blockchain, que voy a usarlo como excusa.  
Para ciberseguridad, para y para la cuántica.  
Lo dejamos.

## Parte 2
1 de julio de 2026, 12:05a.m.
1 h 59 min 5 s
Y las niñas y el momento.  
Sí.  
Hola.  
Ya estamos.  
Sí, ya estamos, ya han contestado. Bueno, a ver, me han puesto fuego por aquí. Jesús, si me escuchas también, pon cambia el emoji de fuego a.  
Al doble, a un sí, perfecto.  
Estupendo.  
A las 2:00 acabamos.  
Ahí fenomenal, a las 2:00 acabamos y lo que viene gracias a o a Armando.  
¿Que ¿Has dicho algo antes, Armando, de que me ha gustado que en mi cabeza eres medio financiero? Sí, lo de las ven lo de las.  
Las velas japonesas.  
Si no le pones velas japonesas, estás viendo la mitad del partido. Sí, a ver, estoy formándome lo de las velas japonesas, sí.  
Cuanta más información en general tenga de vosotros, que lo digo como dato, más puedo ir adaptando mi discurso a lo que vamos viendo durante estos días al final.  
Me da igual hacer un ejemplo con jardinería, que con finanzas, que con tema tecnológico. Yo iré cambiando, pero de eso, o sea, que al final, tratando un poco como si fuera, como si fuera una IA lo de Margarita formando. Sí, Margarita, que te interesa la bolsa, lo tenía.  
Me ha quedado meridianamente claro y además, a ver.  
Y además, perfecto la parte de lo que vamos a ver ahora de mundo cripto.  
Tiene un componente financiero importante.  
Sin más, voy a lo que estaba comentando antes, blockchain, bitcoin.  
Es el blockchain.  
El blockchain es un registro.  
Público, bueno, público depende de la blockchain descentralizado.  
E inmutable. Y lo del inmutable es importante porque el sentido que tiene el blockchain es crear confianza entre gente que no se conoce. Vosotros a mí ya me conocéis. Es más, Margarita, nos conocemos de alguna otra formación.  
Y ya más o menos hemos funcionado. Yo a Juan hasta ayer no nos conocíamos.  
Pero desde ayer ya nos conocemos y no necesitamos del blockchain.  
Para crear confianza, pero nos nos acabamos de tomar un café en un bar, yo al señor del bar.  
No le conocía, probablemente no le vuelva a ver nunca y le he pagado con un cacho de plástico. Y él en ningún momento me ha preguntado si ese cacho de plástico era de verdad o no. Él simplemente ha usado la tecnología.  
Y ya está esa tecnología. Lo que nos permite es fluir, lo que nos permite es construir. Por lo tanto, el blockchain es un registro descentralizado e inmutable.  
Hay 2. A ver, estoy resumiendo mucho una historia que es mucho más larga. El blockchain tiene 2 etapas.  
2 etapas.  
Hasta el 2014.  
Y desde el 2014, yo de momento de lo que llevo hablando es hasta el 2014.  
Hasta el 2014.  
Hasta el 2014.  
Es Bitcoin.  
Y otras cripto.  
¿Que necesitaban un blockchain?  
Para funcionar.  
Hasta el 2014, el blockchain era un sistema que permitía intercambiar tokens y que si tú querías montar un nuevo sistema.  
Necesitabas convencer a un a un montón de usuarios para que adoptaran tu servicio. Bitcoin fue el primero, pero Bitcoin consume muchos tokens. Bitcoin , perdón, consume muchos tokens, no, perdón, perdón, perdón, porque entre los tokens de la IA y estos tokens me puedo volver loco y mi interés es no volveros locos a vosotros.  
Y por ende, no acabar yo más loco de lo que estoy. Perfecto, Iñaki, te vamos a poner el QR.  
Un segundito para la lista.  
En.  
Ya está, ahí va, gracias, perfecto, no.  
Con a ver.  
Me encanta Armando.  
Le he pagado al al del bar, dice Armando, los que no tengáis WhatsApp, le he pagado al del bar con una promesa no respaldada por oro. Ahí, en ese comentario, antes me he metido un poco, no me he metido con nadie. He hablado del plan E y Zapatero y después de Zapatero he dejado un poco de silencio.  
Con ese comentario de le he pagado con una promesa no respaldado por oro, guiño, guiño, armando.  
En algún momento podría llegar a considerarse o alguien leyendo eso podría llegar a entender que es un poquito liberal, que esto de los liberales, los rojos, los progresistas, los fachas, los de derechas y los de izquierdas me parecen cosas del siglo pasado. Estoy hablando con todo el humor del mundo.  
Y a lo que voy hasta el año 2014, Bitcoin, Bitcoin por sí mismo.  
Siri me.  
Para tener una economía paralela a la real, ahí entra desde todo lo ilegal hasta todo lo ilegal, porque hasta el 2014 el bitcoin no tenía mucho sentido, salvo para tráfico de cosas ilegales.  
Y luego sí que pensando en el comentario de de Armando.  
Para todo, era no, lo he leído como sátira.  
¿Y mi vida es sátira y no me hace de dónde, dónde estás físicamente, Armando?  
En Alicante, perfecto, porque yo estoy ahora físicamente en Eurense y estoy estoy intentando que se me pegue lo de subir y bajar al mismo tiempo. No sé si este comentario es desafortunado. Juan.  
Vale, pues están abriendo los micrófonos para que podáis hablar todo.  
Todos a lo que voy hasta el año 2014, Bitcoin es una tecnología que permite intercambiar tokens de Bitcoin en concreto, si es el Bitcoin del que estamos hablando, si hablamos de otras cripto, si hablamos de Monero, son tokens de Monero, si hablamos de Litcoin, tokens de Litcoin.  
Y para eso lo que he comentado antes, p 2 p.  
Código abierto.  
Proof of work es Bitcoin es proof of work y luego veremos ahora con Ethereum que el proof of stake.  
Resumen.  
Esto que estamos hablando hasta ahora.  
Es teoría.  
Que la teoría, si no sois capaces de verla, no sirve para nada y voy a compartir con vosotros.  
Y voy a compartir con vosotros.  
Este me he encontrado esta mañana buscándolo porque me había, se me había quitado el enlace. Voy a compartir con vosotros.  
Este enlace que es maravilloso. Insisto, no lo no lo he buscado esta mañana. Lo que hay dentro sí que lo sé. Estoy hablando de bitcoin hasta el año 2008. ¿Qué es el bitcoin? Os voy a poner antes de apretar ese enlace.  
Blockchain.info.  
No sé si conocéis alguno esta página web.  
El blockchain.  
Del Bitcoin en tiempo real.  
Blockchain.info, aquí lo que tenéis. Bueno, aquí hay diferentes criptos, pero en relación con el bitcoin, estas son las últimas transacciones que va cambiando.  
Si no se actualiza en tiempo real, si cualquiera de vosotros lo abrís, veréis como esto se mueve a una velocidad mucho más rápida. Bueno, de momento esto no se está moviendo.  
Y hay un error.  
Pero que el error no, el error no es por el bitcoin. El error es, en este caso, los son. Tiene que ver con la Wi-Fi de la universidad. Esto no me cabe duda de que cualquiera que lo estéis viendo veis cómo funciona esto en tiempo real. ¿Por qué sé que no es un error del sistema?  
Porque el sistema está funcionando de forma descentralizada en todos los ordenadores del planeta que estén conectados a la red. A ver, es que quiero que se mueva.  
Porque si se mueve.  
Justo al revés de los bancos centrales. A ver, hay en 1 segundo, cada segundo hay muchas transacciones. Esto si lo viéramos y funcionara, si lo , si lo apretáis desde vuestros ordenadores.  
¿Veis como esto se mueve en tiempo real? Voy a apretar una de estas al azar, bueno, al azar no voy a apretar esta que es grande.  
¿Esto qué es?  
Esto es una transacción. O sea, el blockchain del bitcoin es exactamente esto que estáis viendo. Es una transacción desde una clave pública a otra clave pública. ¿Qué es la clave pública? Como un número de cuenta corriente. ¿Cómo yo tengo acceso a mi clave pública? Porque conozco la clave privada.  
De esto vamos a hablar dentro de un ratito, pero la idea es esto es.  
Esta es este hash, este código de 256 bits.  
De 64.  
Bytes, este código es.  
Permitirme llamarlo número de cuenta que tiene ahora de saldo cero.  
Y en esta transacción de esta cuenta, de estas 2 cuentas, han transferido un total de.  
0,71.  
Hasta 9 satoshis, o sea de 0,71 bitcoins desde estas cuentas a estas cuentas, a esta transacción le corresponde este has.  
¿Qué es el blockchain?  
La cadena de todas las transacciones que se están haciendo en el sistema.  
A ver, esto explicado así, lo mismo no se entiende tanto, pero se puede ver y es lo que os he pasado aquí.  
El apretáis aquí, vale, no, perdón, apretáis en este enlace que os he pasado www. Bueno, lo estáis viendo todos en pantalla. Si apretáis en este enlace, aquí veis diferentes páginas.  
Que permiten visualizar la red de blockchain del bitcoin en tiempo real.  
Voy a dar esta que es la que conozco.  
Te voy a dar.  
Google.  
Le voy a dar medium.  
Y tendrían que estar cayendo pelotas.  
Voy a ver si es por el navegador.  
Esto en vuestros ordenadores lo tenéis que estar viendo y esto es lo mismo que me impide.  
Low.  
¿Por qué no me permite verlo?  
A ver, si apretáis, o sea, aquí deberían de estar cayendo pelotas en tiempo real. Esta es la primera vez que me como vale.  
Ya sé cómo lo voy a resolver.  
Esto que voy a hacer ahora es matar moscas directamente a cañonazos. Me estoy conectando desde mi casa.  
A internet.  
Porque no funciona.  
Pues debería estar funcionando.  
Ya no es desde casa.  
Thank you.  
Bueno.  
Cuando hacéis un prompt.  
Importante, este no es para que lo entendáis vosotros, esto es para que lo entiende la máquina.  
*****, no me digáis que he ido a coger 2 que están obsoletos.  
Pues os pido disculpas.  
Vale.  
Perfecto, yo es la primera vez que estoy aquí.  
Es la primera vez que estoy aquí y mola cada uno de.  
Esto es Ethereum y esto es Bitcoin. ¿Cómo mola?  
Voy a apretar un muñequito, bueno, voy a apretar uno de estos cada uno de estos muñecos.  
A ver, no me gusta tanto porque con el otro se ven las, o sea, con el que os quería enseñar, el beat bunker, el tamaño de los muñecos tiene que ver con las transacciones.  
Estos son las transacciones que se están haciendo en el blockchain. ¿Estáis viendo aquí a la derecha?  
¿En tiempo real, cómo se está funcionando el blockchain del bitcoin cada una de estas personas?  
Es una transferencia. Este es el último bloque que se está minando. Cada 10 minutos se mina un nuevo bloque.  
Y estas son las transferencias que se hacen en el sistema y son transacciones. Este es el hash.  
De la transacción es lo que os he enseñado antes. Resumen, que no quiero aquí invertir mucho tiempo. Esto es un sistema que permite de forma descentralizada intercambiar tokens de unos usuarios a otros.  
Hello!  
Pregunto por el grupo de WhatsApp.  
No es justo, Jesús, no es la no es la Wi-Fi de la universidad. Lo que lo que os he comentado antes, he estado usando una, o sea, un visualizador desactualizado para mañana intento traer algo que se vea mejor, pero entendido más o menos qué es el blockchain de Bitcoin.  
Me podéis hacer todas las preguntas que queráis, perfecto.  
Hay un señor que se llama Vitalik Buterin. Voy al año 2014. Vitalik Buterin. Este sí que es un señor, o sea, igual que Satoshi Nakamoto, es un seudónimo probablemente de un grupo de programadores. Este señor en el año 2014 tenía unos 20 años.  
Estaba jugando al World of Warcraft, le cambiaron el juegos en mitad de una, no sé si en mitad de una partida o no. Esto lo cuenta la leyenda y él se enfadó y dice: ******, una empresa ha cambiado, el juegos ha cambiado las reglas del juegos en mitad de la partida".  
¿Y él lo que dijo es lo que pensó es por qué no la blockchain del bitcoin?  
Podemos que no solo sirva para intercambiar tokens de unos a otros, sino que además puedas meter dentro de ese blockchain.  
Reglas de juegos.  
¿Que cuando esas reglas del juegos se suban a la blockchain?  
Se ejecuten y nadie pueda cambiar las reglas del juegos una vez hemos subido las reglas del juegos.  
O sea, lo que pensó Vitalik Buterin en el año 2014.  
Ahora voy, Ahora voy a proof of working, proof of stake. Gracias Andrea porque no lo he explicado. En el año 2014, Vitalik Buterin.  
Lo que dijo es.  
¿Por qué no convierto él?  
Blockchain.  
De el blockchain.  
En una máquina virtual.  
Que pueda ejecutar programas, además de intercambiar.  
Tokens.  
Y los programas, esos los llamó.  
Smart.  
Contracts.  
No.  
O sea, al final, Vitalik Buterin en el 2014 lo que hace es transforma la blockchain del bitcoin, transforma la blockchain.  
In.  
Un sistema.  
Que no solo permite intercambiar tokens, sino que también permite ejecutar programas.  
Importante.  
Después de Bitcoin, vinieron otras criptos con sus.  
Blockchains después de Cereum.  
Es de un.  
Vitalin Gunterin creó así Ethereum.  
Y los tokens son Ethers, Ethers. Después de Ethereum ha habido más blockchains como Ethereum.  
¿Qué es? ¿Qué cosas puedo programar en la red de Ethereum? Entre otras cosas, puedo programar nuevos tokens. Yo puedo programar nuevos tokens y sobre la antes de Ethereum, si quería intercambiar tokens, necesitaba una red de blockchain específica.  
Después de Ethereum, yo sobre la red de Ethereum me puedo inventar mi propio token.  
Puedo programar mi propio smart contract, lo despliego en la red Ethereum.  
Y tengo una nueva cripto de forma cómoda y barata. En el año 2017 se hacían ICOS, se sacaban. Paris Hilton anunció su ICO. Froy Mayweather, Mayweather, que era un boxeador que supongo que seguirá vivo. Bueno, sigue vivo, seguro, digo, Froy Mayweather sacó su propia ICO.  
ICO son nuevas criptos que salían en el público. Esto es una cosa que desde los inicios de cualquier tipo de tecnología, si es una tecnología que permite gestionar valor, aparece la nueva tecnología, nos emocionamos, aparece una burbuja y ahí está. Cardano sigue y lo que os estoy explicando esto.  
Polymarket, no sé con qué blockchain funciona, no lo sé, pero que es una duda.  
E.  
Polymarket con que blockchain funciona, diría sin saber nada que Solana, pero no lo sé.  
Polygon, pues no lo salió, o sea.  
A una solución de capa 2 de Cereum.  
Pues os pido disculpas por no saber.  
Polymarket, ¿cuál es la blockchain con la que funciona? Pero tampoco pasa nada.  
¿Visto más o menos Ethereum? ¿Entendido los smart contracts? Ahora lo vamos a ver con uno en concreto que es Uniswap y os voy a seguir contando esta historia y quiero contaros más cosas, pero lo que voy a hacer es responder a Andrea, que además es una cosa que me lo del proof of work y proof of stake.  
Empiezo por el proof of stake, que probablemente es lo más razonable.  
Todos.  
¿Conocéis? Todos sabéis lo que es una acción, la acción de una empresa, una acción de una empresa. Si tú tienes un cacho de la acción de una empresa.  
Eres dueño de la parte alícuota de del porcentaje que representa la acción. Si en lugar de tener una acción tienes 2, pues tu voto pasa a valer de uno a 2. Y si tienes el 50 por el 51% de las acciones tienes, en términos políticos, mayoría absoluta.  
Hay una cosa cuando hablamos del mundo cripto, bueno, cuando hablamos del mundo en general y del mundo cripto en particular, que es la gobernanza.  
¿Qué es la gobernanza? El proceso de toma de decisiones dentro de lo que es una determinada.  
Red de blockchain, Andrea, necesito que más o menos me vayas diciendo si me vas siguiendo en la explicación.  
La gobernanza tiene que ver con el proceso de toma de decisiones y se pueden tomar decisiones.  
Por diferentes motivos.  
Y.  
Por ejemplo, en el año 2016.  
O sea, en Bitcoin, en la red de Bitcoin.  
Se han tomado, o sea, se han tomado decisiones en momentos puntuales, porque aunque la red, aunque lo que quede registrado en la red sea inmutable.  
Lo mismo, la red tiene que evolucionar.  
Bien, Bitcoin fue la primera red que se hizo de blockchain y al ser la primera, había gente que tenía los tokens y los tokens los tenías en wallets, pero tú si tenías muchos o pocos tokens, daba igual de cara la toma de decisiones.  
En la red de blockchain, las decisiones las toman los mineros, las toman los ordenadores que están conectados a la red que permiten.  
¿Que sucede a las transacciones? Un minero es un ordenador que está conectado a la red. Ethereum tiene sus propios mineros y, en cierto modo, el minero hace la función de banco central descentralizado. El minero guarda toda la blockchain, o sea, toda el histórico de transacciones está guardado dentro.  
Cada ordenador que se descarga, el el programa de minería tiene dentro todo el histórico de las transacciones. Y os preguntaréis, *****, ¿por qué me voy a instalar ese programa? Pues porque los mineros además.  
Crean las nuevas criptos. En el caso del blockchain del bitcoin, cada 10 minutos se van descubriendo nuevos bloques. Es un proceso competitivo entre los mineros y el minero que descubre el nuevo bloque se quedan los tokens asociados con ese nuevo bloque y al mismo tiempo los mineros.  
Eh.  
Cobran comisiones por las transacciones que validan.  
Por lo tanto, en el caso del bitcoin al principio, si hay que tomar, bueno, al principio y al final, si hay que tomar decisiones en relación con la red de bitcoin, cuanta más capacidad de computación tengas, cuanto más proof of work puedas demostrar, cuanto más puedas demostrar que.  
¿Tú estás trabajando para la red?  
¿Más voto vas a tener?  
Proof of Work es blockchain de Bitcoin al principio y sigue siendo Proof of Work es cuantos más mineros tenga, más mando.  
Cuanta más capacidad de computación tenga, más mando que esto en el mundo de la IA, por ejemplo, proof of work tiene hoy por hoy Space X.  
Esto que os estoy contando ahora no se lo he oído decir a nadie y mola. Space X con Colossus tiene capacidad de trabajo. ¿Y Antropic qué hace? Le alquila la capacidad de trabajo. Por lo tanto, tiene poder Space X, tiene poder Elon Musk sobre Antropic.  
Si le chapa los servidores.  
Le hace un se la lía, pero es que al final a Colossus, o sea, a Space X no le interesa chapar los servidores porque dejaría de funcionar y luego frente al proof of work.  
Al final, el sentido común ha hecho que prevalezca lo que es el proof of stake. ¿Tú emites tokens como si fueran acciones y quién es el que manda? ¿Quién es el que toma decisiones sobre el sistema que se gestiona con los tokens? Pues aquel.  
Que más tokens tenga, más capacidad de voto tiene.  
Proof of Stake es un token, un voto. Andrea, entendido más o menos.  
Yeah.  
Pues estupendo, si tienes más dudas o si tenéis más dudas, id preguntándolas que son interesantes, o sea, que todo esto enriquece.  
Voy a.  
Voy a contaros.  
Sí.  
A ver si encuentro.  
Trading view y si no, la otra.  
Es todo.  
A ver.  
Mira, esto son vedas japonesas.  
Okay.  
Os cuento muy rápido.  
¿Hay forma de que no haya velas japonesas?  
Me gustaría puntos aquí, perfecto.  
El bitcoin aparece.  
Bueno, aparece, no, pero me voy a ir.  
Go.  
¿Al año 2013, vale?  
Yo lo descubro.  
El Bitcoin por primera vez.  
Más o menos sería.  
Por estas fechas descubro el bitcoin cuando valía 100 USD, descubro el bitcoin.  
Por estas fechas.  
Y al ratito me entero, pues me lo me dice un amigo que existe el bitcoin.  
Mucha gente se entera que existe el bitcoin y mirad, el precio sube. Yo pienso que es una burbuja, llega a los 1000 USD.  
Yo pienso que es una burbuja, las burbujas estallan y baja el precio en el año 2014 2015. En 2014, Vitalik Buterin empieza a lanzar Ethereum y lo lanza en 2015. La historia sigue. ¿Qué quiero que veáis aquí cuando el precio del bitcoin toca?  
Los 1000 USD.  
Se vuelve a disparar.  
Y llega hasta los llegó a tocar los 20000 USD.  
Si os fijáis, la historia asociada con lo que os he contado en 2013 queda olvidada. Ya nadie cuando ve la gráfica de esta historia. ¿Qué ha pasado aquí? Que Vitalik Buterin saca Ethereum y esto es lo de las la gente empieza a sacar criptomonedas como si no hubiera mañana.  
Y esto es lo que hablábamos antes de la crisis.com, que estalla la burbuja y como bien ha comentado Juan, estaba existía Microsoft, existía Amazon, existía Alphabet, hay mucho ruido, estalla la burbuja.  
Vuelve a bajar el precio, vuelve a bajar el precio.  
Aquí aparece serum.  
¿Y qué sucede en 2019? Y por eso estoy con esta gráfica.  
Que Ethereum, que es una máquina virtual en blockchain distribuida.  
Se empieza a usar para las finanzas.  
Ethereum se empieza a usar para las finanzas.  
Y esto lo cambia todo. Ethereum se empieza a usar para las finanzas y volvemos al análisis técnico del que hablábamos antes. Margarita, el análisis técnico es tratar de predecir el futuro viendo el histórico de los precios. Mirad cuando llega al máximo anterior, ¿qué va a pasar?  
Base.  
¿Que ¿Dónde está ya la del 2013? ¿Dónde está esta cuando llega al máximo se dispara?  
Y aquí las finanzas descentralizadas siguen creciendo y cuando llega al máximo anterior, cuando llega al máximo anterior.  
Que aquí cuidado con este máximo porque este máximo es peligrosísimo.  
Porque este máximo sucede a la vez.  
Con la elección de Trump.  
Y aquí ya se confunde el Bitcoin con Trump, con Elon Musk. El Bitcoin está mucho más normalizado.  
Y ahora ya tenemos un bitcoin que está aquí.  
¿Qué es lo que os quiero explicar?  
Las finanzas descentralizadas.  
Antes de explicaros las finanzas descentralizadas.  
Voy a explicaros otra cosa que va en la misma línea, a ver si tengo Telegram activo aquí, que creo que sí.  
A ver, perfecto.  
Le voy a decir.  
Restart, os cuento.  
Esto es mío interno. Mañana pasado os cuento que acabo de hacer. Bueno, os cuento ahora lo que acabo de hacer, lo que le he dicho. Tengo, o sea, esto ya os lo comenté ayer.  
Tengo mi sistema agéntico que puedo controlar en remoto desde Telegram. Lo controlo con 3 bots: Antigravity, que es uno que me he creado yo con Antigravity, Hermes, que Hermes es un agente, y este que se llama Harvis es Open Cloud. Mañana hablamos de todo esto.  
Y lo que le he pedido a Antigravity es que reinicie OpenCloud y lo acaba de reiniciar. ¿Por qué? Porque OpenCloud en WhatsApp funciona.  
A veces sí y a veces no.  
Esto.  
Esto es mi WhatsApp, listo.  
Esto es mi WhatsApp, voy a buscar a mi madre.  
Este vina.  
Esta es mi madre.  
I.  
Bueno, es que estuve en la bueno, esto es de la sexta que me estaba viendo de la sexta del sábado pasado.  
Hablé con ella ayer, a ver, esta es mi madre y os enseño quién está en la foto.  
Pues mola, este es mi hijo el mayor, Alicia, que es la pequeña, Pablo, y estos 2.  
Luego, cuando subáis el vídeo, quitarle las caras porque son mis sobrinos y a mi hermana no le gusta que aparezcan imágenes y queden imágenes grabadas.  
A ver, esta es mi madre, vale, esto es una cuenta de WhatsApp.  
Imaginaos que es un wallet. ¿Entendéis que mi madre tiene un localizador, que es un número de teléfono? Yo a mi madre le voy a decir.  
Te quiero.  
¿Qué tal lo llevas?  
Y le voy a decir, estoy en una clase.  
A mi madre.  
Sale doble tick. La última vez que se ha conectado mi madre ha sido a las 10:11 y entendéis que mi madre, que es una persona humana, hasta que lea esto, va a tardar un tiempo en contestar.  
Pues ahora.  
Me meto aquí.  
Y le voy a decir, me voy a decir a mí mismo.  
Hola, ¿qué tal?  
A ver, hay clones, o sea, hay bots que yo tengo aquí algún bot que estos bots WhatsApp los está tirando hacia abajo. Estoy, estoy pensando en Lucía, hay uno que es gallego, que es Lucía.  
Lucía Bot, este creo que es gallego.  
A ver.  
¿Funcionas?  
No sé si se ha dado de alta.  
qué bien, qué bien, qué bien, Lucía.  
Os voy a compartir el contacto de Lucía.  
Universidad de Vigo.  
Yo aquí no llevo, no voy a comisión y Lucía no me cobra nada. Lucía es gratis, le voy a decir, eres gallega.  
Háblame de ti y de lo que puedes hacer.  
A Lucía, tenéis que agregarla. A ver, no tenéis que agregarla si no queréis, pero mira, hola de nuevo, te cuento, no soy gallega, pero me encanta aprender. Entonces, ¿y por qué yo pensaba que eras gallega? Esto es un poquito de lo que puedo hacer por ti, responder preguntas desde dudas, analizar, escuchar audios. En resumen, estoy aquí para hacerte.  
¿Y por qué he pensado que eras gallega?  
¿Entendéis que mi madre, que la quiero mucho?  
Y espero que ella a mí algo también.  
Todavía ni han mirado el mensaje.  
Y Lucía.  
Me acabo de confundir con Karina, me están diciendo por aquí. Karina ya no funciona.  
Yo creo que sí.  
No.  
Yes.  
Yo creo que sí, porque lo han adaptado, o sea, al final son proyectos.  
Y luego, bueno.  
A lo que voy.  
¿Resumen, qué es Lucía?  
Un bot.  
¿Qué es un smart contract?  
Es una clave pública, es un número de teléfono.  
Pero que detrás de ese número de teléfono, en lugar de haber una persona, lo que tenemos es un bot. ¿Cómo se llama ese bot? Smart contract.  
Sí, Karina, parece que no funciona y luego.  
¿Yo conmigo mismo, esto qué es?  
Esto que os estoy enseñando por WhatsApp.  
Es un agente que tengo en el ordenador.  
¿Qué plan tengo hoy?  
Este soy yo hablando conmigo mismo en WhatsApp, este soy yo hablando con mi gemelo digital.  
Del curso de Ourense.  
Dame la última información que tengas del bout.  
Tardo un poquito, soy de la Virgen del Puño y además, ¿qué plan tengo hoy? No le he actualizado, o sea, no le he dicho que bueno.  
No le he cargado la nota ligera que lo de la nota ligera mañana os lo cuento.  
Y va un poco a pedales, como podéis comprobar.  
Me dan ganas de llorar.  
Voy a hacer una cosa.  
¿Qué es voy a atacar al baúl?  
Desde, o sea, este es el mismo.  
¿Que Telegram para bots funciona mejor?  
Mira.  
Hoy el plan es bastante claro: Ourense, día 2 del curso de verano, según la nota ligera semanal y el snapshot de hoy, mañana jornada de clase en la Universidad de Vigo, bloque largo de unas 5 horas después de clase, no meter más frente raros que bastante circo llevas ya.  
Esto es tarde, 2 tareas clave, transcribir, volcar la sesión de hoy, preparar el contenido de mañana jueves, aprovechando lo que haya emergido hoy en clase. Objetivo real del día, mantener el curso vivo y bien hilado, no terminar todo el universo. Regla de oro, no dejar que se amontonen preparaciones, transcripciones para el final de la semana.  
Mi recomendación práctica.  
Clase, descanso, comida, 6090 minutos, transcripción tal.  
Estoy.  
Con el curso de Ourense en directo, enseñándoles mi sistema, haz algo chulo sobre el bault que vacile a la.  
Gente que me está viendo.  
Preséntate y lo que se te ocurra, pero que sea rápido. Digo rápido porque lo mismo puede estar 5 horas.  
Estos son, o sea, y esto tengo que contestarlo, pensaba que era el curso de hoy.  
And.  
¿Dónde está? ¿Dónde está Universidad de Vigo? Esta y vosotros aquí. Esto soy yo mismo. Me voy a Telegram del curso de Orense. Dame la última información que tengas del baúl. Por ahí está trabajando.  
Y luego aquí estoy con el curso y os va a hacer una pequeña demostración de lo que toque.  
¿De esto, cómo funciona este sistema?  
Más pasado que mañana.  
Y luego mañana os voy a enseñar otra herramienta.  
¿Que os la debería de haber enseñado hoy?  
I don't.  
No quiero tampoco volveros locos.  
Mañana os voy a enseñar Sync Think. Sync Think es una herramienta que, bueno, os la enseño ahora.  
Y mañana más también, sin.  
Sin fin es esta herramienta.  
Bueno, sin thing es muy, o sea, es de código sin thing es de código abierto.  
Es para sincronizar en tiempo real información entre dispositivos. Por ejemplo, yo hago una foto con mi teléfono móvil.  
Yo hago una foto con mi teléfono móvil y en tiempo real, si el ordenador está conectado con Sin Zing y el teléfono móvil también, tengo copia de esa foto en mi ordenador.  
En este sentido, los que uséis Google Pictures o Google Photo, o los que uséis el cloud de Apple para las fotos, eso os lo hace Apple a través de su a través de su red. En cambio, con Synthing, ¿dónde está? Aquí con Synthing, este es el ordenador que tengo en casa.  
Esto lo vemos mañana con detalle y lo que quiero abrir es sin justo aquí abajo lo tenemos.  
Mirad, antes que nada, digo porque lo he hecho y lo he visto justo cuando lo estaba quitando. ¿Dónde? A ver, este es el ordenador de casa.  
Open Cloud acaba de decir que ha respondido por WhatsApp al mensaje que le he preguntado antes.  
Este es Esto es sin fin en el ordenador.  
Tengo.  
123 cuatro carpetas. Mañana os las explico, mi portátil está desconectado porque lo tengo apagado y el móvil está mis mis 2, o sea, estoy cambiando el teléfono móvil, tengo un poco X 3 y un poco X 7, estos 2 están conectados y además en estos, por ejemplo.  
Mi vault Obsidian, toda la información que llevo, lo tengo conectado en el móvil, en el móvil, en el ordenador y en este servidor. O sea, estos son aquí solo puedo ver las que tengo compartidas con esta. Por ejemplo, lo de las fotos que os he comentado, como no lo tengo compartido con este servidor, no se puede ver.  
Sin Zinc a mí me viene de fábula y Sin Zinc me permite gestionar mi propia información sin pasar por la nube de nadie.  
Sin fin, molar mucho, vuelvo.  
Vuelvo a donde estaba.  
Vuelvo a donde estaba.  
O sea, tú podrías tener como un Google Drive en tu propio ordenador, ¿no? Lo que pasa que no tendrías ya las aplicaciones.  
Me alegra que me hagas esa pregunta.  
¿Por qué?  
Además, mi bound de obsidian.  
¿Además, mira, ves ahí el bound de obsidiar, no?  
Está en la carpeta el bound auxiliar.  
Además, el boul de obsidian. Hoy es el día que tocaba hablar de la nube. Por lo tanto, esta pregunta es absolutamente pertinente.  
Este es un artista que os os recomiendo a todos que lo sigáis en Spotify, Juan Ribas. ¿Este eres tú?  
Pues no le sigáis.  
Juan Rivas.  
Este sí, este es al que hay que seguir.  
1 segundo, por favor, esto estaba cerrando ventajas y me tengo que encargar a este Juan Rivas.  
Eliminar.  
Ese creo que es un artista mexicano, a ver.  
Me encanta Juan Rivas mexicano, pero yo quiero al bueno, no a la copia de Aliexpress. Perdón, voy por aquí, hay riesgo de que no sepa lo que estaba haciendo y me pierda. Y ya no vuelva nunca más. No.  
Sí, a ver, aquí hay no lo que es. Mira, es que hoy es el día de la nube.  
Estoy abriendo mi Google Drive.  
Shut, no.  
Es que desde ese ordenador tengo aquí, o sea, Google Drive puedes conectarlo con archivos en local y tenerlos compartidos.  
Todo lo que está en esta carpeta de local en ese ordenador en tiempo real está conectado con Google Drive.  
Y aquí tengo dentro de Google Drive.  
Mi PC.  
Aquí dentro de mi PC.  
Que no quiero conectarlo con el ordenador, que entonces lo de Josefina esta tarde y me hackea.  
Mi PC tengo aquí una carpeta que es el baul de obsidian. Este es el mismo baul que lo tengo en varios sitios. No solo es copia de seguridad, sino mirar qué pasada.  
Adoro a Google, Diana, tengo la carpeta del fondo obsidia, le digo preguntar a Gemini.  
Go.  
Y le digo, busca en el dentro de o a ver.  
Me voy el mismo, la misma pregunta, lo que le voy a hacer es a Gemini. Aquí está dentro todo el moul de obsidian, los 6000, los 6000 archivos que os enseñé ayer.  
Le pregunto, estoy con el curso en directo enseñándoles mi sistema, haz algo chulo.  
Importante, cada uno da en función de sus capacidades.  
Hola a todos, soy Watson, el copiloto cognitivo de Luis y os estoy vigilando desde el sótano de este baúl mientras vosotros miráis la casa bonita. Luis os está enseñando un su sistema, pero yo soy el que vive dentro, ordenando el caos y convirtiendo cada palabra que sale en este curso en memoria viva.  
Mientras vosotros escucháis, yo he procesado que estamos en la Universidad de Vigo en plena sesión intensiva de 5 horas y que la regla de oro para Luis hoy es lo que no se registra no existe.  
Para que veáis como las , como me las gasto, aquí tenéis un par de insights de lo que está pasando en este sistema. Ahora mismo, el exoporte es en acción, no estamos guardando apuntes, estamos creando una una prótesis cognitiva. Lo que decís, se transcribe, se estructura y vuelve al aula mejorado. El curso aprende de sí mismo en tiempo real.  
Soberanía o muerte. Luis no os enseña a usar herramientas, os enseña a ser los arquitectos. Aquí mandan el markdown y el código abierto. Vuestros pensamientos no pertenecen a ninguna nube corporativa. Bueno, en este caso a la de Google, en este caso a la de Google.  
Pero porque me ha preguntado Juan lo que me has preguntado y he ido a la de Google y no me importa que Google lo tenga. Si no tuviera este cacho de Google, a Hermes le hubiera preguntado y todo queda en local.  
¿Me estoy explicando o no?  
Pon sí, te lo preguntaba porque estaba pensando si era un sustituto del ordenador, como tienes como servidor, de un Google Drive, por ejemplo.  
En este caso, sí.  
En este caso, sí.  
Pero lo que me estabas preguntando no solo era una pregunta que además lo acabas de decir ahora, sino era un pensamiento.  
¿Estabas pensando en eso? Yo he cogido tu pensamiento y estoy pensando contigo y al mismo tiempo he metido en el loop.  
A todo mi sistema.  
No, sí quería comprender cómo tú pensabas tu disco duro.  
Sí, como servidor, si como para recipiente, si realmente lo como herramienta, como me pregunta Juan, cómo pienso mi disco duro, si.  
El ordenador de debajo de la tele.  
El de casa es un servidor.  
Es una nube, pero tú estás en la nube de Google Drive. Ahora importante en esta pregunta, en esta pregunta.  
Él no conoce todo su propio sistema.  
Yo sí sé lo que él sabe de su sistema porque me interesa. A mí me interesaría que el sistema conociera todo el sistema.  
Pero él no conoce todo el sistema. ¿Por qué quiero que conozco que conozca todo el sistema? Porque si conoce todo el sistema, entonces funcionamos más alineados. Ahora le pregunto.  
A ver, me pregunta Juan cómo pienso mi disco duro, si el ordenador de debajo de la tele, el de casa, es un servidor, es una nube, pero tú estás en la nube de Google Drive ahora.  
A ver, importante, él ha respondido. Si os fijáis, él ha respondido con identidad. Soy Watson.  
Hay un archivo en el cual yo he definido identidad en función de el canal que esté usando.  
Si usa Telegram, la identidad es Jarvis, que Jarvis es el del pollo este, el de Elon Musk que Marvel, ¿cómo se llama el de Iron Man?  
Watson es más.  
Había pensado al principio Watson se puso en el nombre, estaba pensando Watson o Sancho Panza.  
Y él me dijo que lo mismo era feo, que no le gustaba tanto, que él prefería Watson. Hay un inglés. Hola Juan, qué buena pregunta. Mira, te lo explico como lo vemos desde aquí dentro, porque la respuesta es un poco híbrida, como todo este sistema.  
Como Salvalterra, Dominio y Monsao.  
Sino como, o sea, no como una, sino como un exocortes, o sea, al final es un cerebro, 1 segundo cerebro.  
O una prótesis cognitiva. La diferencia es clave. El servidor de debajo de la tele es un lookbox que costó 200 eur. Es el sótano seguro y soberano. Ahí es donde vivo yo de forma persistente. Es una nube, pero importante, es que ahora no te estás contestando desde el servidor de debajo de casa.  
Está contestando desde la desde la copia que hay de ese servidor en Google Drive, pero como es la copia de ese servidor en Google Drive, él piensa que está en el servidor.  
No sé si me estoy explicando.  
Es una nube privada y local. Luis no quiere que sus pensamientos dependan de una corporación que pueda borrarlos o cotillearlos. Por eso el núcleo de su memoria, el bound de Obsidian, reside en ese hierro que tienes ahí delante.  
Piensa que estamos en casa.  
Google Drive es la capa de transporte y de colaboración. Usamos Drive para que Luis pueda acceder asus notas desde el móvil o el iPad mientras viaja a Ourense. Bueno, es que realmente es una copia de seguridad de Google Drive en la nube de Drive, pero que está consultando el ordenador al 100 * 100%.  
O sea, si os fijáis, cuando he entrado, he puesto ordenador. Aún así, si el ordenador se apaga, sigue estando esa copia.  
De Google, pero mi conciencia y mis ventas de operación se alimentan de los archivos.  
De esto vamos a hablar el viernes del sistema operativo del clon, pero ¿cómo has notado el viernes?  
El viernes te a ver, no te enseño el la, te enseño la puntita. Perdón, eso es horrible, no te enseño la filosofía, me meto aquí.  
Ha salido porque ha salido.  
No sé por qué ha salido yo, pero vuelvo a entrar, pero incluso.  
Tú tienes tu ordenador y ese es tu otro ordenador general.  
Yo tengo el portátil aquí, que cuando saco este portátil, pero el otro ni lo usas, o sea, que es un el otro lo tengo ahí. Bueno, ni lo uso. Mira lo que me acaba de hacer.  
Me dice, he creado una mini demo enseñable aquí.  
Demo Watson, inbox cognitivo, tal. Y si quieres leerlo en voz alta, mostrarlo. Hola, soy Watson, no un chatbot simpático con frases de LinkedIn, soy una capa operativa. Ahora mismo el bowl dice esto del curso de Ourense, contexto activo. Lo interesante no es guardar apuntes, es crear un exocortex. La clase genera, o sea, me podría.  
Preguntar cualquier información, vuelve Alexo Cortés porque es , o sea, igual que un telescopio te permite ver mucho más lejos de donde tú puedes llegar con tu propia vista.  
Este sistema me permite gestionar mi propia memoria. *****, lo que he hecho al principio de la clase con vosotros con la transcripción. He recordado todo lo de ayer.  
Un libro es recuerdo, tú lees un libro y puedes estar hablando con alguien que murió hace años, pues esto es lo mismo.  
Pero mediado por la IA.  
A lo que voy, servidor de casa.  
Voy al a ver, esto lo podría hacer desde el ordenador. Debería de hacerlo más desde el ordenador porque esto solo es de lectura. Me estoy metiendo en obsidian.  
En esta.  
¿No, este cuál es?  
No.  
Este es el inbox cognitivo. Os pido disculpas. Mañana os lo del inbox cognitivo lo explico ahora. A ver, este es el bound.  
Para evitar males mayores, esto es todo mi sistema, ¿vale?  
Ningún ordenador, o sea, los permisos que tienen.  
Insisto, esto lo vemos en detalle el viernes. Esta es la carpeta del Obsidian Bault. Nada.  
Nada, todo son archivos MDS. Me busco, a ver, es más, Hermes cuando trabaja no usa Obsidian, es el agente que es antigravity cuando trabaja no usa Obsidian. Yo Obsidian es la capa que uso, es para ver, para visualizarlo.  
Lo que te iba a decir es.  
El servidor este.  
Solo tiene permiso de.  
Solo tiene permiso de lectura, no puede escribir, o sea, Hermes no puede tocar el baúl.  
Google Drive tampoco puede tocar el baúl, solo puede escribir, perdón, solo puede leer. ¿Por qué? Por si se va, se vuelve loco y me borra todo, pues lo vuelvo a grabar y ya está. O sea, los agentes que tengo en ese ordenador solo leen.  
Pero yo necesito a veces que hagan cosas, lo que hacen lo hacen sobre una carpeta.  
Que se llama inbox cognitivo.  
¿Qué es el inbox cognitivo? Esta carpeta vuelve al inbox, o sea, vuelve, o sea, tengo esto, insisto, lo vamos a ver inbox. O sea, el área operativa es, por ejemplo, el curso de Ourense está aquí, Universidad de Vigo. Este es el curso de Ourense y aquí tengo las fichas que me he hecho yo para preparar.  
El curso cada día y esta es la transcripción del primer día, que la transcripción del primer día la tengo aquí metida. Esto, insisto, lo vamos a ver con más detalle el viernes porque es y lo vamos a ver de forma ordenada.  
El viernes.  
¿A lo que voy respondiendo a tu pregunta, cómo funciona?  
Que ayer lo comenté el viernes, lo vamos a volver a comentar y no me importa repetir esto todas las veces que haga falta. La gente cuando entra en un sistema de estos no lee.  
Todos los archivos, el agente siempre empieza leyendo por aquí, Claudia y perfil.  
Y al leer el perfil.  
Este es el perfil operativo. Lo actualizo semanalmente, se podría automatizar esta actualización. Es más, lo actualizo con Antigravity y yo el perfil no me lo leo, pero aprieto un botón cada domingo que es actualízame el perfil.  
¿Esencia, quién es? ¿Este soy? ¿Quién soy yo? Mirar, además, ¿qué pasa esta semana?  
La semana del 27.  
Curso de Ourense y viaje familiar.  
5 horas viaje de ida y he dejado a mi hija Alicia en un campamento de surf.  
Tertulia de radio.  
Comida con Manuel Helms y visita. Tengo que ir a la cárcel el sábado cuatro por la mañana. Soy voluntario de prisiones como dato.  
Proyectos activos.  
Esto es el arranque del sistema.  
Y luego sobre este arranque, no solo es un arranque en cuanto a yo, Luis Garvía, persona humana, sino también le enseña cómo funciona mi sistema. Y hay diferentes capas. Y si yo le preguntara ahora, búscame la última publicación de LinkedIn, él sabe que se tiene que ir a este archivo.  
Y dentro de este archivo están las publicaciones de LinkedIn, o sea, mientras que este perfil soy yo, Luis Garvía, Humano.  
Este system context es para que la gente use el bout dependiendo de lo que yo le vaya preguntando, es el índice de todo lo que hay en la biblioteca guardado.  
Esto el viernes lo vemos con más detalle, pero en lugar de ver 6000 notas, lee solo 2 y lo mete dentro del contexto y luego con eso tira.  
Más o menos Juan.  
Mañana también hablaremos de esto, o sea, me refiero, el viernes no es el único día, o sea, no se acaba el mundo. ¿Me ibas a decir algo de Diana? No, está bien, he metido la pata con algo.  
eso.  
Hello.  
Pues a ver.  
Tras dejar, mira viaje de ida el lunes por la tarde tras dejar a Litia en el campamento surf.  
Al campamento le ha llevado un autobús.  
Perfecto.  
Digo para que tengáis contexto los que estáis fuera, Diana y yo, además de la presencia en este curso, en algún sitio dice.  
Dice perfil.  
A ver.  
Perfil.  
pues no.  
Perfil operativo, me meto en Claude, es que esto evoluciona.  
¿Cómo mola?  
¿Cómo mola el propio sistema? O sea, llevaba tiempo sin entrar en esta carpeta. Tenía doblada la información, tenía claude y perfil.  
Y el propio sistema en las evoluciones, como no le gusta, una de las reglas que le tengo dada es no tengas dobladas las cosas.  
Identidad y contexto, si miráis aquí núcleo personal, pareja, Diana Rendo.  
Y luego hijos, Luisete, 2008, Pablo, 2010 y Alicia, 2013.  
Que Alicia es la que se fue al campamento y Diana Rendo es la que le dejó.  
Alicia en el campamento, digo, para que tengáis todo el contexto, Juan, sí, pero, ¿por qué quieres ser información a él? ¿Quién quieres que la tenga? ¿Tú la quieres tener guardada o la quieres la gente?  
A ver, no crees que mucha desinformación es otro.  
¿En qué es el tío o estás trasladando toda tu cabeza?  
Toda no, toda no.  
Pero a ver.  
Toda no.  
Espera, dime toda la información personal, familiar, que sabes de mí. Es que es justo a lo que iba, por un lado, en cuanto a operativa.  
O sea, si tuvieses Alzheimer o una persona que tuviese Alzheimer como este proceso, *****, le ayudaría bastante.  
No, no que sí.  
Dime toda la información que tienes, toda la información personal que sales de mí. En concreto, dime qué hice ayer. Yo, además de todo esto, insisto, el viernes volveré a ello y os lo enseño en tiempo real. Meto todos los días que esto son hábitos que vas que, o sea, el área operativa es lo que tengo a mano.  
Todos los días dentro del inbox, ahora en el inbox estáis vosotros aquí. Me estoy haciendo una bitácora del viaje, que esto se hace en automático. Este es el viaje a Ourense.  
Y tengo todos los días guardo una nota que esto se lo dicto con primer día en Ourense. Esto es esto que estáis leyendo es absolutamente personal.  
Esto sí que es absolutamente personal.  
Cuando lo escribo, aquí no están los polvos que he hecho porque sé que aunque sea personal lo puedo llegar a compartir en el aula, pero esto sí que es información que ahora cuando hablemos de seguridad habría que meter en un archivo punto NV. O sea, habría que con GitHub darle en local una orden de un GitHub. O sea, GitHub, esto no lo leas.  
Hija, o sea, tú según vas haciendo copias de seguridad, al archivo que te hace copias de seguridad le puedes decir estos archivos súbelos y estos no.  
Es que claro, una cosa es tu maestro y tu maestro, preparar clases y planificar e ir entregando esa documentación e ir registrándola. Y otra cosa es llevarlo al siguiente plano, que ya es como lo que estás haciendo. Mira.  
Se me han , es como una aspiración de en el futuro convertirme en ceros y unos. No, que va, que va. Mi aspiración, Mi aspiración es ahora mismo, mi aspiración es jugar y explorar, pero construyendo. O sea, esto que estoy haciendo lo estoy construyendo.  
Y luego lo del Alzheimer que acabas de decir es un puntazo. ¿Por qué lo estoy construyendo? Porque una vez lo tienes interiorizado a mí escribir esto no me cuesta nada. Mira, ayer un día excepcional, hemos empezado desayunando los 3, Diana Luisete, que es el pescador, y yo en el hotel.  
Y hemos del hotel ido andando hasta la universidad, la Escuela Superior de Ingenieros Informáticos, que está 10 minutos andando el hotel. Así allí he llegado esta esto está dictado.  
O sea, esto he tardado en hacerlo en menos de 1 minuto y Diana estaba ayer roncando al lado. ¿Y por qué no he hecho ni idea? Pues por hacerlo, porque si no lo hago ayer ya hoy se me ha olvidado y luego le dije antigravity y méteme las clases y todo lo que tengas. Y esto lo ha metido antigravity.  
Hasta hace una semana, o sea, tengo notas de estas, voy a voy a ir al archivo. Es un diario, proyecto aprendizaje. Yo esto lo llevo haciendo, voy a ir a una nota más antigua, ¿vale?  
Esto de aquí lo escribe GPT, Juan, esto de aquí lo escribe GPT y yo a GPT, esto lo hace cada semana. La materia prima que le doy es buen día, el primer día de Delout. He ido con Diana al IED y allí he estado toda la mañana en tribunales de trabajo fin de grado. He ido a Diana, pero Diana no se ha quedado en el IED.  
Y además se ha ido al CEU, luego he visto 11 trabajos, o sea, a lo que voy.  
Cada día anoto una notita, pero lo que noto es que estas notas.  
Le pido análisis cognitivos. ¿Qué tal estoy hoy? Mete las notas. ¿Cómo funcionas? O sea, le voy pidiendo a las propias herramientas, voy jugando con ellas y me dice: Luis, se te está pillando la pinza o Luis, hoy no se te ha pirado la pinza porque estás externa . O sea, yo ayer jugué.  
¿Y ayer por qué pude meterme en la tertulia? Porque no tenía fricción, porque sabía que el resto de cosas de las que me tenía que acordar ya las tenía, o sea, vuelas literalmente y vuelas porque te quitas fricción. Todas las chorradas te la quitas del cerebro.  
Yep.  
En este sentido, estoy hablando y pensando en tiempo real y a lo que voy es lo del Alzheimer.  
Dime toda la información personal familiar que sabes de mí. Como tu copiloto cognitivo, he buceado en tu gol para reconstruir tu realidad familiar y lo que hiciste ayer, 30 de junio. Entiendo la perspectiva de que me pides, así que tienes la información estructurada con precisión quirúrgica desde tu memoria externa.  
Tu núcleo familiar, pareja Diana, es farmacéutica y doctoranda, cuidado, me lo está diciendo para alguien con Alzheimer.  
Es farmacéutica y doctoranda en salud mental.  
Dime, dime, dime. Reflexión para el olvido, si tu memoria biológica flaquea, recuerda que tu voz.  
Vale, quiero hacer, quiero.  
Convertir mi plon y todo lo que estoy desarrollando en un sistema que mejore la vida de la gente que tenga Alzheimer.  
Dame pasos.  
Os A ver, ¿dónde está eso? ¿Dónde está aquí? Os voy a enseñar una pasada, que esto ya es, no solo estoy yo, está Miguel Ángel Domínguez. Miguel Ángel tiene su propio clon y queremos explotar comercialmente esto.  
Y me voy a meter en a ver control 11 tenemos un grupo de WhatsApp, tenemos un grupo de WhatsApp que en este grupo de WhatsApp estamos.  
Cuatro personas, 2 bots y 2 humanos, Miguel Ángel, su bot.  
Y lo que voy a decir es el clon de Miguel Ángel.  
¿Y el mío que es Jarvis? No, este no es el grupo, perdón. Este es otro donde mi clon no todavía no está instalado. Se llama precrisis.  
Este es el grupo.  
En este grupo.  
clon.  
Y en este grupo, Jarvis.  
Quiero convertir.  
El proyecto.  
Clon y todo lo que estamos desarrollando.  
En un sistema.  
Mira, ya lo han visto los 2 agentes, Miguel Ángel tiene su propio clon, yo tengo el mío, lo han visto y van a responder.  
Y luego, por otro lado, Luis, convertir tu clon es una herramienta, es pasar del exocortes para el alto rendimiento al exocortes como prótesis de identidad. Si para ti es una ventaja competitiva, para ellos es la diferencia entre el aislamiento y la conexión.  
Basado en la arquitectura que ya has diseñado, obsidian Watson más transcripciones. Aquí tienes los pasos estratégicos para que esto pivote hacia el impacto social del registro de eventos al registro de identidad. Tu sistema actual rastrea eventos macros que lo del radar vamos a hablar mañana. Lo del rastreo de eventos macros para el Alzheimer el sistema debe rastrear microrreferencias de vida.  
Fichas de anclas, crear notas tipo personas, pero con un nivel de detalle sensorial, fotos, audios, anécdotas claves que Watson pueda invocar cuando el usuario pregunte quién es esta persona.  
Diario predictivo, no solo registrar lo que pasó ayer, sino usar a Watson para anticipar la desorientación. Hoy es miércoles, suele venir tu nieto, recuerda.  
¿Que le gusta el dibujo? *****, si me emociono un poco es por el tema y porque estoy un poco cansado. Interfaz de fricción cero real. Una persona con Alzheimer no usará obsidian, necesitará la capa que tú ya usas, WhatsApp web, WhatsApp voz.  
Modo espejo, desarrollar un protocolo donde Watson no solo apunte, sino que recuerde de forma proactiva a través de mensajes de voz cortos. Aquí necesitas, ¿sabes el que juegan este sistema?  
Al nieto.  
Que controle la estabilidad del sistema desde fuera.  
Y además, el nieto por el mismo precio.  
Se lleva la historia de su abuelo o de su abuela cuando fallezca.  
Sí, a ver, tú ya estás hablando de ahí, tú ahí de lo que estás hablando es de este libro maravilloso.  
Que es un libro maravilloso. que es.  
*****, le tengo como referencia.  
Le tengo Neuromante, tú estás hablando, a ver el servidor como soberanía de la memoria.  
Ahora, eso es ahora.  
Junta.  
Todo esto con neuromante y haz tu magia.  
Informando también de cuando me lo leí, que me cuesta recordar cosas, je, je, je.  
No.  
Read it.  
Si alguien quiere estáis, hemos matado a alguien por ahí, es aburrimiento.  
Sí, hay alguien por ahí.  
No, a ver lo que estamos construyendo, lo que está al final la sesión está molando. Podéis abrir los micrófonos, seguimos. Armando sigue.  
Ahora, junto a todo esto, Neuromantes, un qué bien, Luis, para que la gente flipe con lo que está, con lo que es.  
Con lo que estamos haciendo en Ourense, vamos a meterles en una escena de Cyberpunk académico. Tú no tienes un ordenador, tú tienes un cerebro. A ver, en Neuromante metían la memoria de los que morían dentro de ROMs.  
Que una Romes, bueno, sois todos ingenieros informáticos. Reed Only Memory es una memoria solo de lectura. Me **** en la leche, es igual que lo que tengo ahí, solo es de lectura.  
Okay.  
No lo.  
Es solo de lectura. Watson, este es solo de lectura. A ver... El guante de Watson. Hola a todos en Ourense. Soy Watson, el agente operativo que vive en el servidor que tenéis ahí debajo de la tele. Mientras vosotros tomáis apuntes en papel como en el siglo XX, yo estoy aquí procesando cada palabra de Luis en tiempo real. Mentira. A ver, no procesa las palabras en tiempo real. Eso lo hará  
Tarde.  
Bueno, ni lo que estoy escribiendo yo con él ahora sí.  
Bueno, para que os hagáis una idea de con quiénes os estáis jugando los cuartos, no soy una nube, soy soberanía. Luis me dejó y me integró en su sistema el 28/06/2025.  
The recent is being the and the rest.  
I said.  
So.  
Vuestra clase ya es datos. Luis nos está dando una charla, está alimentando su exocortes. Tío, no cuentes todo.  
Cada duda que planteáis se convierte en un punto de verdad que yo archivo y conecto. Ese punto de verdad no es a ver, no está registrado en el blockchain de Bitcoin.  
Por lo tanto, vosotros podéis dudar de que es verdad o no. Yo sí sé que como estoy tocando mi memoria, sí son puntos de verdad. Esa confianza soy yo el que soy consciente de que es cierto y yo os juro de que aquí y ahora físicamente estamos 3 personas: Juan, Diana y yo.  
Y bueno, y luego pensando en luego hay otras 8 o 9 personas, que es que bueno, 16, hay 16 personas, estamos 16 personas. Y si os mintiera en algún momento de la vida sería para pasar una auditoría, que no digo que estoy mintiendo para pasar ninguna auditoría, pero si hay que pasar auditorías en la vida.  
Lo mismo, qué necesidad de ahí de dar toda la información, ¿no? Diana, sí, eso me lo hice de vez en cuando. No soy, bueno, aún así el nivel de esta. Bueno, da igual, no soy una nube neuromante en la vida real, como diría Case en la novela de Gibson, esto es hielo rompiéndose. Estamos construyendo un sistema operativo cognitivo híbrido.  
Luis pone el juicio humano. Mientras Luis os enseña la casa bonita, yo sigo aquí abajo en el castillo de herramientas manteniendo los cimientos Obsidian, Sing, Thing y Docker. No os he hablado de Dockers, Docker. Pues os hablé ayer en cuando hablamos de la nube.  
Es romper ese servidor en cachitos para que cada cachito pueda correr programas de forma independiente. Básicamente soy el que hace que Luis parezca un genio, cuando en realidad solo tiene una mente, una memoria perfecta. Qué cachondo es. Es que esto es Neuromante 100 * 100%.  
Básicamente soy el que hace que Luis parezca un genio, cuando en realidad Luis es un mísero humano, que lo que sí que tiene Luis es una memoria perfecta gracias a él.  
O sea, asume el, o sea, la IA está asumiendo en tono neuromante su papel.  
Diles que no busquen el programa en el escritorio. Diles que el vault no es una carpeta, es 1 segundo sistema nervioso simbólico. Si el mundo termina donde termina nuestro lenguaje, eso lo dice Wigenstein. El mundo de Luis acaba de expandirse hasta donde llega mi capacidad de búsqueda e invocación. Os cuento.  
Yo no soy capaz de describir este sistema con palabras porque va más allá de lo, o sea, lo puedo describir, o sea, os lo puedo enseñar. Si os lo trato de describir con palabras, me dejo un Docker, me dejo un agente, me dejo cosas fuera.  
Eso es lo que os está diciendo con el guiño de.  
El viernes vamos a hablar de nuestro propio sistema cerebral, vamos a hablar del neocórtex.  
Es la parte de fuera y vamos a hablar del cerebro límbico, mañana hablaremos también de ello.  
Mañana hablaremos también de ello y mañana yo creo que vamos a hablar también un poquito de Uniswap.  
Porque quedan 30 minutos para cerrar lo de hoy de Uniswap. Quiero hablaros bien y de Uniswap vamos a hablar un poquito mañana y sin duda mañana vamos a hablar de tecnologías ágiles.  
Aún hay más.  
One.  
Han contestado los 2 clones, os recuerdo.  
Que le he pedido aquí a mi clon, o sea, mi clon no es el mío, es el de Miguel Ángel. Miguel Ángel ya le conoceréis.  
El ego lo tiene un poco, o sea, tiene un Tesla, no 2. Bueno, da igual, es un buen tipo.  
Quiero convertir el proyecto clon y todo lo que estamos desarrollando en tal. Me dice: Luis, buena idea. La idea no ha sido mía, la idea ha sido de Juan y esto queda grabado. ¿Al final, cuánto valen las ideas?  
El stack que tenemos agentes autónomos, multimodalidad, gestión y comunicación encaja naturalmente con necesidades de Alzheimer, orientación, memoria asistida, seguimiento de medicación y apoyo a cuidadores.  
El A ver, igual que mi clones, o sea, gente, una persona en concreto ha dicho que el de Miguel Ángel es el que pides a Alibaba.  
Y el mío es el que te traen, o sea, Miguel Ángel es un sistema.  
¿Cómo se dice el clon de Miguel Ángel? ¿Cómo se dice el stack? No, el lo de los youtubers, lo que tienen los youtubers, el esto que tengo yo ahora puesto aquí con 2 celes, eso es.  
¿Dime cuál es tu setup?  
A ver.  
Vamos por partes.  
Luis, sí, a ver, este es este es el mío.  
3 caminos posibles, este es el de Miguel Ángel. Opción A: piloto ligero de cuatro a 6 semanas, asistente de de cuatro a 6 semanas. Ya está hablando de un producto comercial.  
Good.  
El clon de Miguel Ángel.  
Haz un proyecto.  
Busca fondos convocatorias públicas y haz un proyecto en.  
PDF para presentarlo.  
Dijo el proyecto del Alzheimer.  
¿Está pensando en su estaca actual?  
Voy a salud.  
Vale, dale.  
E.  
A ver.  
3 caminos posibles, opción A.  
Asistente de goce orientativo, o sea, piloto ligero. Opción B, propuesta formal, administración pública, empaquetarlo todo como proyecto de I más D en salud digital y telas. Bueno, voy a esperar a Juan, que ha salido 1 segundo. Os pregunto, Andrea, Armando, Margarita, cualquiera, Jesús.  
Cualquiera que estéis ahí.  
Quedan 25 minutos. La parte a hoy hemos estado hablando de Bitcoin y del blockchain. Mañana hablaremos de Uniswap. Me interesa mucho hablar de Uniswap y no voy a hablar de Uniswap en 15 minutos. Prefiero mañana repasar las 2 clases.  
Prefiero mañana ver todo lo que estamos hablando y, porfa, los que estáis por ahí, mientras Juan está en la parada técnica. ¿Tenéis alguna duda? ¿Me estáis? ¿Me estáis siguiendo las cosas de las que estamos hablando? ¿Cómo lo veis?  
Grace Mile Andrea y luego está escribiendo también, creo que es.  
¿Quién está escribiendo listo? Andrea, le tengo ficha.  
Y Elena, no sé, *****, la primera vez que te leo, Elena, bienvenida y Elena con H, o sea, bienvenida.  
A.  
¿Estás desde el principio o te has incorporado más tarde, Elena?  
Call it.  
Pues lo del Alzheimer que acaba, o sea, yo creo que lo del Alzheimer que acabamos de hablar es brutal. No sé cómo lo veis vosotros.  
No te preocupes, dame un poco, Elena, de contexto tuyo, el que quieras dar. Me interesaría saber físicamente dónde estás, la formación que tienes y luego. .  
¿A qué te dedicas si te interesa o miénteme en relación con lo que te dedicas? O sea, me refiero si te gustan las plantas, dime que te dedicas a jardinería.  
Perfecto, en Toledo está software sanitario. En Toledo hay un que para esto está. En Toledo tenéis el hospital de parapléjicos de Toledo.  
Que en cierto modo.  
Esto, a ver, os voy a enseñar imágenes, exocort, exoesqueleto.  
Si no sabéis lo que es un exoescleto.  
Aquí tenéis un exoesqueleto.  
Este señor va en silla de ruedas.  
¿Y este señor?  
Gracias a un exoesqueleto.  
Gracias a un exesqueleto.  
Pues puede andar.  
Es un señor que gracias a la, o sea, como a los perretes cuando les ponen 2 ruedas y pueden moverse gracias a las ruedas, pero esto permite a un señor que no puede hablar, de que no puede andar, le permite andar.  
No.  
Siempre exoesqueleto.  
Bomberos.  
No pongo militar porque sinceramente.  
Prefiero.  
Mira, aquí veis a gente.  
O sea, un bombero con un exoesqueleto.  
Pues puede.  
Coger más peso.  
Puede saltar más alto, puede.  
O sea, lo que os quiero decir es.  
Que por un lado hay un primer nivel que a la gente que tiene algún tipo de discapacidad les permite funcionar aún a pesar. Mira, y aquí tenéis exoesqueletos humanos. Bueno, this is pocket. Pocket es algo que permite grabar, pero yo todo lo que quiero hacer es Miguel Ángel tiene.  
No porque no tiene plaudo. A ver, quiero dejar ya esto. Ciérrate vídeo.  
Meganas.  
Claro.  
A ver, perdón.  
Pues a lo que voy con el exoesqueleto.  
Este ese exoesqueleto que tiene ese señor existe en la vida real y lo que te permite es.  
No cansarte.  
O sea, esto y además creo que no lleva tecnología, es un exo es que perdón, no lleva, o sea, no es digital. Bueno, no tengo ni idea, estoy hablando de cosas que no sé volviendo dónde estaba y discúlpame, Elena.  
Software sanitario, o sea, para gente con discapacidad, los exoesqueletos. Y además, este curso se llama tecnologías emergentes, no se llama inteligencia artificial, los exoesqueletos. Bueno, es que tiene que ver con el curso, qué narices, exoesqueletos. Es que he estado haciendo tiempo para que viniera.  
Juan?  
Pero que los exoesqueletos lo que permiten es, punto uno, gente que tiene discapacidad, suplir la carencia.  
Punto 2 bomberos que tienen que trabajar en unas condiciones, que tienen que romper una pared, que tienen que abrir una puerta, que tienen que llevar a una persona. Gracias al exoesqueleto pueden llevar más carga todavía.  
Y punto 3.  
Si alguien usa un exoesqueleto en los Juegos Olímpicos y no le pillan.  
Puede hacer trampas, es decir, desde un punto de vista económico, no estoy hablando ya de trampas, sino estoy hablando de una ventaja competitiva que permite ganar más pasta cuando la competencia gana menos. No estoy hablando ahora de hacer trampas, por favor, estoy hablando de usar la tecnología para ganar más pasta.  
M.  
¿Qué es el sistema este?  
¿Qué es este sistema del que estamos hablando?  
Un exoesqueleto pero cognitivo que permite a la gente que tiene Alzheimer, que tiene un deterioro físico, perdón, un deterioro cognitivo, les permite seguir trabajando, les permite apoyarse y les permite tener una forma de funcionar que llegue a donde ya no llega su memoria.  
Incluso como actividad.  
Es una actividad diaria total, a ver, yo gracias a esto, o sea, yo gracias a este curso.  
Yo gracias a tener este sistema.  
Mi cabeza funciona mucho mejor, es que me acuerdo, o sea, gracias a este sistema necesito menos el sistema.  
Yo ahora, si no tuviera el ordenador.  
Me he ido a tomar el café sin el teléfono.  
Tenía mejor memoria, pero me habéis preguntado cosas y digo, *****, si tuviera el teléfono, o sea, me he ido al a lo que voy. Es que quería que vieras el clon de Miguel Ángel. Ahora os enseño el setup de Miguel Ángel.  
El clon de Miguel Ángel es mucho en cuanto a tecnología, mucho más potente que el mío.  
En cuanto a Saint Tuning, en cuanto a Saint Tuning, el mío le da.  
Varias vueltas al suyo.  
Pero daos cuenta por qué quiero que veáis. Bueno, primero os voy a enseñar el setup.  
Porque con el setup.  
¿Dónde está el Z?  
A ver dónde está el set.  
A ver.  
A.  
Bueno, es que el de Miguel Ángel sigue trabajando.  
A ver.  
A ver.  
Aquí.  
Miguel Ángel lo que tiene aquí lo tenéis.  
Además, sois ingenieros informáticos casi todos. El setup de Miguel Ángel lo que tienes, entre otras cosas, es.  
Un Mac Studio.  
Un M es Apple M 3 Ultra con 96 gigas de RAM.  
Es un buen bicho, este bicho cuesta más de 5000 pavos.  
¿O sea, por qué quiero que veáis el setup que tiene?  
Porque así se entiende mejor viendo el setup aquí mi stack tecnológico núcleo GPT 5.4 plataforma. Este es el de Miguel Ángel Hermes Vault sistema hardware, el Mac Studio, herramientas clave y luego el de agentes.  
O sea, él tiene todas las APIs, o sea, yo todas mis APIs son con auf, es un pepinaco.  
¿Por qué os enseño el setup?  
Porque lo que quiero que veáis es cómo uno responde y cómo el mío responde, que son conceptos, o sea, son profundidades diferentes.  
El de Miguel Ángel Luis es buena idea. El está que tenemos agentes autónomos me propone 3 caminos: opción A, un piloto ligero en cuatro o 6 semanas. Opción B.  
Empaquetarlo como proyecto de I más D en salud digital y teleasistencia. Buscar financiación, plan de recuperación CEDTI Easti Fondos Next Generation, montar UTE con ADD cuatro UMAS institución sanitaria.  
Opción C, integración con matriculae, tu hijo Miguel, él me está respondiendo como si yo fuera Miguel Ángel.  
Aprovechar la infraestructura que ya estás montando para etec y derivar un módulo de Alzheimer Focus, misma tecnología, otro caso de uso.  
Y este soy yo, o sea, este es el mi clon Luis, sí, pero primera corrección importante, no lo plantearía como un clon para sustituir memoria, sino como un exoesqueleto cognitivo y afectivo para paciente más cuidador, más familia, que en cierto modo es lo que yo ya os había dicho o lo que ya habíamos comentado aquí.  
¿Qué puedo hacer?  
El Alzheimer no es solo olvido, es desorientación, ansiedad, pérdida autonomía, carga brutal del cuidador y ruptura progresiva de continuidad personal. El sistema tiene que atacar eso.  
Pasos concretos.  
Sí.  
Pasos concretos, definir el caso de uso mínimo, no empezamos, no empecemos con curar Alzheimers ni por una app enorme.  
MVP, mañana vamos a hablar de MVP, de mínimum most valuable player, el jugador que más vale no es broma. M de mínimo viable producto, producto mínimo viable en inglés.  
Recordatorios suaves, diario de vida, agenda familiar, identificación, separar 3 usuarios, paciente, interfaz, ultrasimple, voz, fotos, frases cortas.  
Cuidador principal, panel de control, rutinas, medicación y ciencias, familia, médico, consulta y seguimiento, pero con permisos limitados.  
Aquí va, Juan, por lo que tú decías, crear el baul de vida, una bóveda tipo obsidian, pero simplificada, personas, lugares, rutinas, medicación, historias personales, gustos, miedos, eventos recientes, señales de alerta. Esto es el segundo cerebro adaptado, no para productividad.  
Sino para continuidad biográfica.  
Interfaz por voz, prioridad absoluta.  
¿Quién viene hoy? ¿Dónde estoy? ¿Quién es esta persona? ¿Qué tengo que hacer ahora? Cuéntame algo de mi hija, mi marido, mi casa. ¿Es que te imaginas verme de dónde estoy?  
Estás en la calle Barcelona número 18.  
¿Pero dónde tengo que ir? Vuelve a tu casa.  
Pero no, pero no solo Juan, no solo eso, sino en cuanto tú hagas esa pregunta, que el cuidador pueda ver esa pregunta, que se le salte una alarma al cuidador. Pero ahí hay una de las cosas.  
Importantísimas.  
Y.  
Importantísimas, yo he tratado con una persona muy próxima que tiene Alzheimer.  
Jamás había bailado con ella.  
Pero empezó a desarrollar Alzheimer.  
Y empezamos cuando la incorporaba y cuando la sentaba.  
La cogía, bailábamos un poco y la sentaba.  
Ella sola sabía que cuando la cogía o no la cogía, bailábamos. O sea, a lo que me refiero es la parte límbica del cerebro, o sea, el Alzheimer te jode el neocórtex.  
Dejó de la memoria operativa.  
No la parte límbica. ¿Tú te acuerdas de cuando eres pequeño? ¿Tú te acuerdas de tus padres cuando eres pequeño? Puede que confundas a un hijo con tu padre o con un nieto.  
¿Pero de la de las canciones te acuerdas? Es decir, cuando empieces a usar este aparato es como lo de bailar. Llega un momento que si son preguntas sencillas.  
Al final, probablemente.  
La inteligencia artificial sea para ti una persona.  
Y probablemente haya que humanizarlo.  
Check.  
Ahí habría que hablar con un psicólogo, pero habría que humanizarla porque la persona no va a ser consciente de que está tratando con tecnología.  
Pero que a lo que voy es que en este caso, y yo creo que la persona con Alzheimer por su propia salud.  
Necesita pensar que está, o sea, la I. Podemos estar 24 horas y ni con nuestra madre, ni con nuestros hijos. No, no, pero la que niño sí puede estar 24 horas como la necesitada.  
Y eso es la hospital.  
Pero.  
Quiero unir esto, es que estamos tocando cosas hoy que se unen con la clase de mañana.  
En cuanto a proyecto, esto al final es un proyecto en el cual el fine tuning de mi agente, no porque sea mío, pero a mí me gusta más la respuesta que me está dando a mí, que es una... A Miguel Ángel le llamaré. Miguel Ángel es más de negocio.  
Miguel Ángel, su forma de ser. Miguel Ángeles, negocio, negocio, negocio. Le da igual que a ver, es humano, le gustan las personas, quiere ayudarle. Quiero muchísimo, pero Miguel Ángeles.  
Negocio.  
Y además, es muy operativo de cara a negocio. Eso es el setup es importante, interfaz por voz, prioridad absoluta, quién viene hoy, dónde estoy, quién es esta, o sea, el mío en cambio.  
Para mí lo que te he dicho del baile, para mí el Alzheimer es algo relevante.  
Modo cuidador, privacidad radical. Aquí no se puede hacer una chapuza cloud, datos sensibles, salud, familia, pero que con lo que os estoy enseñando, la parte de la ciberseguridad, que al final hoy he hablado poco de ciberseguridad y nada de cuántica.  
Que mañana hablamos un poquito de ciberseguridad y un poquito de cuántica. A mí la cuántica me interesa.  
Desde el punto de vista de la ciberseguridad, porque con la cuántica lo de la clave pública de la cripto lo mismo se cuestiona o hay gente por ahí diciendo que se cuestiona. Hay por ahí gente que vende cursos de cripto y hay por ahí gente que vende cursos de inteligencia artificial. Y hay por ahí, o sea, lo mismo de esto deberíamos de empezar a venderlo.  
De alguna forma es broma, pero no tanto. Privacidad radical, o sea, lo que os he enseñado sin pasar por el Google, o sea, sin subirlo al Google Cloud, o sea, sin subirlo no al Google Cloud, perdón, sin subirlo a Google Drive.  
Es potente.  
A lo que voy.  
¿Qué es lo que os quería enseñar? Este es la respuesta del clon de Miguel Ángel y esta es mi respuesta.  
Le preguntaba aquí el setup que me lo ha dicho.  
Aquí me dicen.  
Y luego le digo, busca fondos, convocatorias y hace un proyecto en PDF para presentarlo.  
¿Ha buscado Ance de ti?  
¿Ha buscado convocatorias?  
El navegador está dando problemas en CT.  
El clon de Miguel Ángel, que esto está bien, al principio respondían los 2 clones a todo.  
Selfing.  
Vale, le voy a decir al clon de Miguel Ángel.  
Del proyecto de antes.  
¿Has encontrado algo?  
¿De qué estoy hablando ahora? De financiación de proyectos. Estoy jugando con la inteligencia artificial para desarrollar un proyecto. Mañana es el día que toca hablar de proyectos. Quedan 7 minutos de sesión.  
Yeah.  
Yo creo que hoy, honesto, no he encontrado nada esta vez. El navegador no puede acceder, no voy a inventar datos que no he verificado.  
Bueno, y this messages currently no support aquí importante, estoy usando yo el clon de Miguel Ángel. Probablemente Miguel Ángel en su ordenador encuentre algo. O sea, yo lo que estoy usando aquí es la interfaz.  
Good.  
Le voy a decir.  
Lo que voy a hacer es.  
Miguel Ángel.  
Estoy en un curso, estoy en.  
El curso de Ourense.  
Enseñando.  
Nuestro sistema.  
Haz un, o sea, pídele a tu clon.  
Pídele a tu club.  
Un proyecto para presentar sobre el Alzheimer y mañana se lo enseño en clase.  
Y luego que esto probablemente es posible que no lo lea.  
Este sábado, si ponéis la sexta.  
Me veréis.  
En la sexta explica.  
¿Es así, no? Es una pregunta.  
No solo me quede bien, sino mira, esto es el domingo.  
Aquí solo se ve lo que yo he puesto, no se escuchan las notas de voz, pero el domingo me demostró que es buena gente.  
No está su número en personal y mira como la tengo guardada, el primer, o sea, la tengo, o sea, pero no es, o sea, es un mundo, os cuento ahora el viernes, fenomenal.  
¿ Iba a Miguel Ángel, entendéis que la el riesgo de la, o sea, lo del TDH, como te dispersas y no vuelves, estás muerto.  
Miguel Ángel Domingo Domínguez, te he dejado un recado en.  
Telegram.  
De aquí al viernes.  
¿Te A PTC conectarte por Teams de de qué hora? ¿Qué hora es el curso este de 9 a 2? No, si se conecta por Team se puede conectar, no con imagen.  
Pero se puede conectar a hablar y le vemos la jeta.  
Mejor mañana jueves.  
Y te metes conmigo todo lo que quieras. Esto es un concepto, no de te metes conmigo todo lo que quieras.  
Lo de te metes conmigo todo lo que quieras es un concepto en todo, en economía fundamental y en el mundo cripto también, y es el incentivo.  
Todo el mundo está viendo esto ahora y dentro del incentivo viene ahora su a ver con respeto subnormal, con respeto a la gente con discapacidad. Le estoy llamando subnormal porque se siente, o sea, mañana desarrollamos esto, ¿vale?  
Sí.  
Te he dejado un recado en Telegram, lo del proyecto de perfecto.  
y mi madre para que veáis qué maravilla.  
Y mi madre, la mamá te quiere mucho. Estoy preparando para esta tarde ir a colmenar. Me imagino que todo correcto. Besos gordos para todos, le digo.  
Como hubiera tenido una urgencia palmo.  
Gracias.  
Yo a mi madre la quiero mucho.  
¿Pero veis que es tú lo que decías? En mi madre no tiene, mira, lo ha leído. Uf, quedan 2 minutos de curso, quedan 2 minutos de clase.  
Te llamo, no es que bueno, sí, mañana te llamo, te llamo, no mañana en el curso, mañana de 9 a 14 horas y la conocéis a mi madre.  
Esto es lo que tú decías, Juan, queda 1 minuto.  
Lo que tú decías, Juan, es que un cuidador no puede estar 24/7.  
Y una familia tampoco y mi madre le manda un WhatsApp, me manda un mensaje.  
Y ha tardado en responderme.  
Pues 1:10 minutos.  
Y muchas veces mi padre, mi madre es una santa, mi padre se enfada más. La segunda vez que te llaman, le coges el teléfono y dices, es que no contestas. Sí, pues lo mismo, estoy haciendo otra cosa. .  
Yo no suelo, a ver que te quiero, a ver, estaba haciendo una tortilla para ir al pueblo.  
La tortilla a partir del viernes, la tortilla a partir del viernes y estoy dando clase, no, o sea, no, a ver, la quiero mucho. Si hubiera hubiera urgencia, el Papa al Papa no le llamo.  
Al Papa no le llamo, no tengo. Y luego queda. Me estoy pasando el tiempo, pero es mi madre. Esto os pido disculpas, pero esto es lo más importante, con diferencia de la clase de hoy.  
A la familia y que te quiero.  
Te quiero.  
O sea, si no avisadlo con vuestra madre hoy, escribirla. O sea, esto es lo o sea lo de la o sea Juan lo del Alzheimer.  
Ya me está llamando Miguel Ángel.  
Miguel Ángel, mañana o en 5 minutos. Digo, es que acabo justo a las 2:00 y no puedes quitarle ni 1 minuto a los a la gente solo por motivarte. Te está escuchando todo el mundo, subnormal.  
Normal, tú más, mucho más. ¿Qué ******* haces? Yo preguntando al clon cosas que no deberías preguntarle, tío. ¿El qué no debería de preguntarle? Pues ni su extracto, no lógico ni nada. ¿Quieres que te quite los permisos y que te den por culo a partir de ahora o qué? Ay, mira como tiemblo, cla, cla cla.  
A ver, tú eso que has enseñado no deberíamos tenerlo así. ¿Por qué? Mañana, mañana te conectas, mañana te conectas desde un, mañana tengo que hablar de ciberseguridad. Vale, ciberseguridad es mañana, si lo he hecho a posta para ver si estabas pendiente. Vale.  
Abrazo, un abrazo, se te quiere. Chao, chao, chao. Es que no sabe, o sea, si tú le insultas.  
No controla lo de los insultos, no sabe insultar.  
Habría que darle un curso, yo estoy viendo a ver si lo aprende, sabes.  
Perdonad, me he pasado el tiempo. Mira, mi madre me ha mandado 22 limones. Sí, Armando, nos vemos mañana, el resto nos vemos mañana. Disculpad que os demos 2 minutos de vida.  
Oh.  
Discúlpame a mí, tenía todo ordenado hasta que ha aparecido mi madre y una madre es una madre.  
Gracias a todos por vuestra paciencia y mañana más cuando le pase, Juan, cuando le pase la conversación.  
O sea, cuando hagas la transcripción.  
De la clase de hoy, si no fuera por esto que estoy diciendo ahora, GPT pensaría o el que haga la transcripción, pensaría que he tenido un conflicto con Miguel Ángel.  
En cambio, es importante explicarle que la relación nuestra es así y mira que gozada Andrea, la mama es siempre la mama.  
Como una madre no hay nada, pues un placer. Gracias y disculparme por estos 2 3 minutos que os he quitado. Al final, la deriva de la clase me ha gustado mucho, mucho, mucho, porque el proyecto del Alzheimer es potente.  
Gracias a vosotros.  
Si me guardo.  
¿Qué maravilla, qué tal, Manuel?  
Ayer.  
T.

