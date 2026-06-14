# Informe de la Sesión 3

**Curso: Tecnologías Emergentes e Inteligencia Artificial**  
**Universidad de Vigo – Generación D / Red.es**  
**Fecha:** 2 de julio de 2026  

---

## Objetivo de la sesión

La tercera sesión tuvo como objetivo principal **analizar los marcos de innovación y desarrollo de proyectos (Design Thinking, Lean Startup y Agile)** en la era de la inteligencia artificial. 

A través del debate interactivo y la participación del ponente invitado Miguel Ángel Domínguez (presidente de Alastria), los alumnos contrastaron dos arquitecturas de clones digitales (*exocórtex*) y exploraron el uso de modelos locales (*soberanía de hardware*) frente a las APIs propietarias. Asimismo, se discutió el fenómeno del "intrusismo profesional" como motor de disrupción creativa y la inminente evolución de las interfaces visuales hacia el canal natural humano: la voz y el oído.

---

# 0. Resumen de los principales temas tratados

En esta tercera jornada formativa se abordaron los siguientes pilares de conocimiento práctico y teórico:

- **Ecosistemas de desarrollo de productos:** Articulación sinérgica de *Design Thinking* (empatizar e idear), *Lean Startup* (crear productos mínimos viables y validar) y *Agile / Scrum / Kanban* (adaptación iterativa).
- **El abismo tecnológico y las herramientas semanales:** La velocidad extrema de la innovación en IA (ej. el lanzamiento de *Gemma 2 / Nano Banana*, *Fable 5* y *Grok Voice Agent Builder*) que exige flexibilidad radical.
- **Modelos locales vs. Nube:** Ejecución soberana de LLMs locales con *Ollama* (Gemma, Qwen, Nemotron) frente al riesgo de filtración de datos de las nubes americanas y chinas. Requisitos reales de hardware (VRAM/RAM) y el setup técnico de un MAC M3 Ultra.
- **Límites de contexto y optimización de RAG:** Por qué alimentar excesivamente el contexto de un modelo (más del 20%) degrada la conversación y cómo optimizar la búsqueda semántica.
- **Intrusismo profesional e innovación:** La disrupción como resultado de cruzar fronteras tradicionales (analogía con la eurociudad de Salvaterra-Monção y la Sagrada Familia de Gaudí).
- **La paradoja de Garvía:** Por qué a mayor sobreabundancia de datos en Internet, más se incrementa la necesidad de guías y curadores humanos.
- **El retorno a la tradición oral:** La pantalla como un paréntesis histórico de 500 años y el resurgimiento de la voz como canal de programación y control cognitivo.
- **La regla del minuto y automatización:** Principios de efectividad operativa: si toma menos de un minuto, hazlo ya; si es repetitivo, automatízalo para que se ejecute en segundos.

---

# 1. Metodologías de Innovación en la era de la IA: Design, Lean y Agile
Se explicó cómo se conectan los tres marcos fundamentales para la creación y despliegue de tecnología:
- **Design Thinking (Diseñar el producto):** Fase empática y de ideación. Identificar la necesidad real del usuario (ej. estructurar resúmenes educativos visuales mediante infografías en lugar de diapositivas estáticas).
- **Lean Startup (Validar el producto):** Ciclo de construir, medir y aprender. Lanzamiento de un Producto Mínimo Viable (MVP) para comprobar si el mercado o el usuario responde positivamente antes de invertir recursos masivos.
- **Agile / Scrum / Kanban (Evolucionar el producto):** Marco iterativo para el desarrollo una vez el producto está en producción. Adaptabilidad continua al cambio.
- **La metáfora de Mortadelo y Filemón:** El bolsillo de Mortadelo (siempre con el disfraz adecuado en el momento justo) representa la mentalidad ágil de adaptarse al entorno cambiante frente a la rigidez del modelo en cascada tradicional.

---

# 2. La carrera de las herramientas semanales y la obsolescencia veloz
Se incidió en que en el paradigma actual, el aprendizaje de una herramienta de software concreta caduca rápidamente:
- Lo aprendido sobre una plataforma específica puede quedar obsoleto en apenas quince minutos o un mes.
- Muestra de ello fueron las novedades lanzadas esa misma semana: *Fable 5*, los agentes de voz de *Grok* (*Voice Agent Builder*), y los modelos ultraligeros de Google (*Gemma 2 / Nano Banana Lite*) optimizados para su ejecución ágil en local.
- La destreza fundamental ya no es memorizar interfaces, sino dominar la lógica arquitectónica subyacente para saltar de un modelo a otro de manera agnóstica.

---

# 3. Soberanía de Hardware: Modelos Locales frente a la Nube
A raíz de la intervención de Miguel Ángel Domínguez, se debatieron los costes y la infraestructura necesarios para ejecutar IA con privacidad absoluta:
- **La Nube es el ordenador de otro:** Utilizar nubes corporativas americanas o chinas implica regalar los datos de la organización o el negocio.
- **IA Local (Ollama):** Ejecución de modelos en el propio disco duro sin salida a internet (como *Gemma*, *Qwen*, *Nemotron* o *Minimax*).
- **Requisitos y Setup de Hardware:**
  - El setup de Miguel Ángel: Mac Studio (M3 Ultra, 96GB/100GB de RAM unificada) valorado en ~5000€, idóneo para ejecutar modelos locales potentes y rápidos.
  - El setup de Luis: Portátil Mac M2 (24GB de RAM unificada) valorado en ~2500€, con mayor latencia pero funcional para tareas intermedias, y un servidor doméstico de bajo coste (200€) para automatizaciones ligeras.
- **Peligro de las API Keys:** Al usar loops o bucles de agentes automáticos en la nube, las API Keys de pago (como OpenAI o Anthropic) pueden consumir recursos monetarios de forma descontrolada ("máquinas de gastar dinero") si no se limitan por código.

---

# 4. Límites de contexto y RAG frente a Fine-Tuning
Se desmitificó la creencia de que un mayor contexto de entrada siempre se traduce en mejores respuestas:
- **Capacidad de almacenamiento vs. Contexto Activo:** El clon de Miguel Ángel indexa aproximadamente 1 Terabyte de historial personal (WhatsApp, correos, notas de vida procesadas con *Multiforge*), pero eso actúa únicamente como biblioteca física.
- **Degradación de la conversación:** Los estudios demuestran que alimentar el contexto de una sola conversación por encima del 20% de su límite máximo (ej. sobrepasar los 200,000 tokens) degrada severamente la calidad de la respuesta de la IA.
- **La estrategia de pasitos cortos:** En lugar de hacer consultas masivas y complejas que saturen al modelo, es óptimo realizar consultas dinámicas y secuenciales segmentando la información en Markdown.

---

# 5. El Intrusismo Profesional como motor de la Innovación
Se debatió sobre la pérdida del miedo al intrusismo en disciplinas estancas:
- **La Eurociudad de Salvaterra-Monção:** Se utilizó la frontera fluvial entre España y Portugal para ejemplificar que la disrupción y la vida surgen en los límites de contacto y en las transiciones, no en el centro de las regiones.
- **La Sagrada Familia de Gaudí:** El arquitecto innovó y creó estructuras inauditas precisamente porque conservaba la ilusión del niño y no estaba atado a los sesgos academicistas rígidos de su época ("lo hicieron porque nadie les dijo que era imposible").
- **Ensanchar el campo:** La IA permite a ingenieros actuar como creativos, y a diseñadores o juristas actuar como desarrolladores de software (*Solidity* / *Python*), rompiendo los departamentos estancos de las profesiones tradicionales.

---

# 6. La Paradoja de Garvía y la pedagogía en la era digital
Se planteó una reflexión sobre el rol docente y curatorial actual:
- **La Paradoja de Garvía:** Cuanto mayor es el acceso a la sobreabundancia de datos en Internet, más se incrementa la necesidad de curadores, filtros cognitivos y guías humanos que den criterio estratégico.
- **Empatía cognitiva vs. Ruido:** La IA puede resumir diapositivas y generar código, pero carece de la empatía cognitiva necesaria para pausar una sesión, percibir el aburrimiento, contar un chiste en directo (silenciándolo en la transcripción para premiar al asistente) o repetir conceptos clave bajo diferentes analogías adaptadas al alumno.

---

# 7. La pantalla como paréntesis y el retorno a la oralidad
Se analizó la evolución histórica de la comunicación humana:
- El canal natural biológico del ser humano es el oído y la voz.
- El uso de la pantalla y el papel escrito es un paréntesis temporal de apenas 500 años inaugurado por la imprenta. Al leer, el cerebro no procesa imágenes puras, sino que "escucha" internamente el texto leído.
- **El futuro sin pantallas:** El desarrollo de la tecnología de voz y los asistentes auditivos integrados en gafas de realidad aumentada reubicarán a la pantalla como un estadio secundario, permitiendo interactuar con el entorno informático de manera natural mediante el lenguaje hablado.

---

# 8. La regla del minuto y la automatización práctica
Se compartieron dos hábitos vitales de alta efectividad operativa del profesor y del ponente invitado:
- **La regla del minuto:** Si una tarea (como compartir un archivo, responder a un mensaje de WhatsApp o registrar un recordatorio) toma menos de 60 segundos, hazla inmediatamente sin procrastinar. De lo contrario, caerá en el olvido del desierto digital.
- **Automatización del flujo:** Si un proceso es recurrente e importante, dedícale tiempo una sola vez a estructurar un script que lo automatice, de tal manera que las ejecuciones futuras tomen menos de un segundo (ej. transcribir con Whisper y volcar la clase a Obsidian en un clic).

---

# Ideas clave de la sesión

- **Pensar antes de hacer:** La velocidad de las herramientas de IA generativa no debe incitar a la acción desordenada; el criterio humano y la planificación (*Design Thinking*) siguen gobernando la utilidad del producto.
- **Soberanía y VRAM:** Ser dueños de nuestra memoria digital exige entender el hardware físico (procesadores locales, memoria unificada) para no depender de nubes corporativas que absorben y cotillean nuestros datos.
- **Cruzar la frontera:** La verdadera innovación tecnológica surge del intrusismo constructivo, aplicando herramientas de un sector en problemas de otra índole totalmente diferente.
- **El retorno a la voz:** El fin de las interfaces complejas de usuario está cerca; la programación del futuro inmediato se realiza mediante el canal natural e histórico de la humanidad: la conversación.

---

# Material de estudio y herramientas trabajadas

- Pautas de **Ollama** para levantar y correr modelos de lenguaje en local (*Gemma*, *Qwen*, *Nemotron*).
- Demostración de interfaces financieras descentralizadas: intercambio de tokens (*Ethers* por *DAI*) en **Uniswap** a través de la firma digital con la billetera **Metamask**.
- Concepto teórico de **RAG (Retrieval-Augmented Generation)** y la traducción de caracteres a vectores matemáticos.
- Comparativa de clones digitales:
  - Arquitectura de Miguel Ángel (*Mac Studio M3 Ultra*, indexación masiva con *Multiforge*, *anclas* y *fichas de personas*).
  - Arquitectura de Luis (*Mac M2*, servidor local de 200€ y énfasis en la optimización del contexto e inbox cognitivo).
- Ejercicio práctico en directo: Creación interactiva de infografías conceptuales sobre metodologías de innovación en **Gemini** mediante el modelo *Nano Banana Lite*.

---

# Transcripción
## Parte 1
2 de julio de 2026, 9:14a.m.
2 h 15 min 13 s
Bien, yo mi transcripción la acabo de iniciar ahora.  
Voy a proceder con la liturgia.  
Perdonadme que lo estoy estornudando.  
Dentro de la liturgia.  
¿Está el abrir la presentación?  
Ayer batí otro récord del cual estoy bastante orgulloso.  
I.  
Ayer puse la presentación.  
La presentación oficial.  
O sea, yo tengo una presentación oficial que tenéis en el grupo. Ayer estuve dando 5 horas de clase. Rubén, ayer, ayer di 5 horas de clase. Juan está de testigo y no pasé de esta diapositiva.  
Llegué a esta y no la pasé, o sea, lo estoy pensando, lo estoy pensando ahora.  
No pasé de esta diapositiva.  
Cerca.  
¿Un poco antigravity lo conoces?  
Antigravity, a ver que tenéis open open code, tenéis también ya open code es más lentorro. Luego tenéis para los Cayetanos, como se dice pijo en gallego.  
Hijo, el que tiene pasta.  
Go.  
Pues para lo para los pijos tenéis claude cowork.  
Estoy mirando a Juan, que está aquí y ha entendido a la primera.  
Cloud Cowork y luego Codex hace las veces también de antigravity.  
Codex a mí me gusta mucho. Codex es de Open Open AI.  
What?  
Armando Armando me acaba de preguntar si llegué a compartir la transcripción ayer.  
Y sí.  
Y sí, a ver.  
Antes había pasado que un contrato de la región.  
Ponte el micrófono cerca, Rubén, no, Rubén está contando experiencia de usuario.  
So.  
Aquí hay un a ver, nos estamos polarizando en en el aula. No, Armando, no te disculpes, por favor, nos estamos polarizando y hay un team de las Rías Baixas de gente que vive en Pazos, que usan Claude y son forofos de Claude, ¿no Juan?  
Que tengo un poco la sensación con cable. como.  
Yeah.  
Sí, estoy de acuerdo, Claude y Apple. Yo soy de Android, por si no lo notas, yo soy Apple o por defecto.  
Sí.  
Oya.  
Hoy a las 12:00.  
Yeah.  
Yo lo intenté, yo lo intenté. Este es el chiste de la orgía. ¿Te lo sabes, no? Pues están en una orgía.  
Espera 1 segundo que voy a.  
Decir bien, esto en la transcripción sin querer, mientras contaba este chiste, he apretado el botón de silencio. Por lo tanto, en la transcripción de mañana no lo oiréis.  
Si alguien lo busca, pues los que habéis es un cómo se dice lo que a los early a los que han madrugado les das un producto solo para los que lo están viendo en directo.  
Es una cosa que hago yo, contar chistes silenciados en la transcripción para que los del directo disfruten estar en directo. Voy.  
Tenemos la transcripción, quería, me he metido aquí. Sí, ya sé, voy al teléfono, estoy forzando.  
Voy a meter a Miguel Ángel Domínguez a la esto que voy a hacer es ilegal.  
Porque no tengo su consentimiento, sí, por favor.  
¿Y sabes por qué estoy metiendo a Miguel Ángel Domínguez?  
¿Por qué?  
Soy torpe, los que estéis en el grupo de WhatsApp habréis visto lo que ha pasado.  
Que en lugar de meter a Miguel Ángel, he compartido su contacto.  
Ahora lo quito, primero meto a Miguel Ángel, que si no estoy toda la mañana tengo que empezar con la clase.  
Si alguien puede hablar y saludar.  
Se agradece.  
Y ahora porque aquí está, añadir miembros.  
Bien, acabo de meter, buenos días ya.  
Pues a ti, grave, digo.  
Yeah.  
Hay dudas, Juan.  
A ver, os cuento, voy a primero, voy a cerrar ventanas. os cuento. Antes de empezar, acabo de meter a Miguel Ángel Domínguez en el grupo.  
Miguel Ángel, de 12 a una más o menos haré porque esté por aquí de 12 y de 12 y 5 minutos, de 12 y 10 a una. Miguel Ángel Domínguez es el presidente de Alastria. Alastria es la Asociación Nacional de Blockchain, por un lado, o sea, de blockchain sabe bastante.  
Es la persona con la que tengo el clon que os enseñé ayer de Telegram.  
Dentro de ese clon, Juan tiene un MAC, el MAC Studio potente. Dael es de él, no solo es de.  
De Apple, sino y lo hilo con 23 cosas que os he estado compartiendo estos días. No os lo he compartido porque no quería tampoco pasaros muchos enlaces, pero Google ha sacado nano banana, nano banana, o sea, nano banana ya existía antes, pero una nueva versión flash de nano banana.  
Nano banana, mañana vamos a hablar de productos de Google.  
Vamos a hablar de varios productos de Google y mañana vamos a hablar también de código abierto. Mañana hablaremos de GitHub.  
Hoy en concreto.  
Del producto del que hablaremos de Google es de Notebook LM, que me voy a meter justo ahora con ello y dentro de los diferentes productos de Google, casi todos son, perdón, casi todos no. Muchos de ellos se pueden usar directamente desde Gemini, o sea, os metéis en Gemini y como con GPT se invocan desde.  
La consola, tú le dices, hazme una foto y el propio Gemini reconoce que estás llamando a Nano Banana y lo hace. ¿Bueno, para qué cuento cosas pudiéndolo hacer en Gemini?  
Voy, voy.  
A ver, qué guerra dais, qué guerra dais ya está.  
Pero si está metido en Juan, está en el grupo metido.  
Hoy voy a hablar de metodologías.  
Ágiles en un curso de IA.  
¿Me ayudas a preparar una infografía? Me está saliendo con soy Luis Garvía, todo con IA. ¿Me ayudas a preparar una infografía? Antes de hacer la imagen, dime el.  
Contenido.  
A ver, hoy vamos a hablar de design thinking, o sea, las diapositivas de hoy tienen que ver con design thinking, tiene que ver con lean, o sea, design thinking en cuanto a diseño. Evidentemente, lean en cuanto a validación de si el producto tiene sentido o no tiene sentido, y luego.  
Metodologías ágiles.  
Esto es como lo de Juan, no que si uso antigravity, pues metodologías ágiles, llevamos todo el curso por si alguien no se ha dado cuenta.  
Usando tecnologías ágiles, no sé si alguno ha leído de pequeño a Mortadelo y Filemón.  
Pues lo de Mortadelo y Filemón tiene que ver con tecnologías ágiles.  
Mortadelo que llevaba siempre en el bolsillo, este está el bolso de Mary Poppins y el bolsillo de Mortadelo, pues llevaba siempre un disfraz. Mortadelo, pasara lo que pasara, siempre tenía capacidad de adaptarse a un entorno. Pues eso, a ver, agilidad en la era de la IA. ¿O sea, por qué estoy en Yeminai haciendo esto? Porque os quiero enseñar nano banana.  
El bloque central, el bloque conceptual cascada versus ágil, me encanta. Sí, podéis mostrar la pantalla, tenéis que me ha sacado la bajeta.  
Buah, este, me despido y corazón corazonciños en gallego.  
Fenomenal, perdonadme, vuelvo a empezar.  
Vuelvo a empezar.  
Pantalla, he abierto Gemini.  
Y aquí le he dicho, y aquí le he dicho.  
Hola.  
Estoy reencontrándome con la vida, no, a ver, estoy reencontrándome con la vida, no, a ver, uf, es que no quiero.  
Vale, voy a explicar temas cuánticos. Esto esto es para dentro de un ratito. Voy a explicar temas cuánticos y quiero usar la metáfora de que el prompt.  
Es.  
Como la.  
De onda.  
The Schrodinger.  
Get.  
Ahora no sé qué va a salir, pero que cuando le dé.  
Alt enter colapsa y ya tengo una salida única. A ver, os cuento, me he metido en Gemini.  
Aquí me en el otro me he metido en Gemini también, pero como ha habido gente que se ha conectado.  
Mi intención hoy es ser ágil y como mi intención hoy es ser ágil.  
Pues he vuelto a empezar otro pronto.  
Además, volveré al prompt antiguo, voy a hacer 2 infografías.  
Voy a hacer la primera que he dicho que no creo que se me vaya a olvidar.  
Y de momento he saltado a esta en esta diapositiva, en esta infografía que voy a hacer.  
En mi cabeza, o sea, estoy ahora con Design Think.  
¿Qué es el design thinking? Pensando las necesidades, ¿qué necesidad tengo? Tengo una necesidad que es explicar inteligencia artificial.  
Y explicar temas cuánticos.  
Luego está lo de la ecuación de onda y el gato de Schrödinger que tú tienes en una caja. Esto es como lo de la orgía de antes, el gato de Schrödinger está el gato de Schrödinger en la caja dentro.  
Y mientras no abras la caja, el gato está a la vez vivo y muerto. A ver, esto es una paradoja, es la paradoja de Schrödinger y lo de vivo y muerto.  
Solo se puede estar vivo y muerto en determinadas ocasiones. Yo ahora estoy cerca de estarlo así, me falta un poquito de queimada, pero bueno, eso es otra aparte de eso a lo que voy.  
El mundo cuántico tiene varios estados.  
O sea, en el mundo digital hay ceros y unos.  
Estoy en design thinking y lo que quiero es una diapositiva. Estoy pensando en una diapositiva en la cual se vea el mundo tradicional y el mundo cuántico, y al mismo tiempo la idea del prompt.  
Ahora voy a pasar del design thinking.  
Deberías de pasar al siguiente modelo.  
O sea, no al siguiente modelo, sino de diseño paso a link.  
Para que el link tenga sentido, la diapositiva que voy a hacer ahora debería de ser bastante sencilla. Importante, metodologías ágiles con prompts no combinan muy bien cuando hacemos imágenes. Si estamos haciendo imagen, más nos vale que la imagen sea buena al primer intento.  
Si empezamos a darle vueltas, mejor reiniciar.  
Yo en este caso, antes de hacer la imagen, o sea, quiero la metáfora.  
Bien.  
Quiero una infografía que represente.  
En un lado, el mundo tradicional con los bits.  
¿Y en el otro?  
El mundo.  
Cuántico.  
Con todos sus temas.  
3 niveles.  
Arriba el.  
No le voy a dar 3 niveles, también quiero explicar.  
Explicar los algo.  
Sisnos más.  
Conocidos.  
Cuánticos.  
Get up!  
Antes de hacer la.  
Infografía que.  
¿Me digas qué vas a hacer?  
Si quisiera hacer esto bien, que lo quiero hacer bien, pero lo voy a hacer rápido. Si quisiera hacer esto bien, le daría un par de vueltas a la croqueta del design thinking, del procesamiento, del pensar con la I A.  
Que quiero hacer aquí, una infografía que me permita en breve explicar el tema cuántico.  
Mucho más poderoso, cuidado con Gemini cuando hagáis infografías y cosas de estas que ejecuta programas de vez en cuando.  
What?  
Me encanta.  
Me gusta mucho.  
Me gusta mucho.  
Me gusta.  
Me gustaría más que los algoritmos también estuvieran, pues factorización frente, pero eso lo voy a contar de palabra, o sea, el de vale.  
Los algoritmos ahora vemos.  
Hazme la infografía, porfa.  
Bien, me está creando la imagen, justo esto es lo que os quería enseñar.  
Aquí desde Gemini, sin que lo sepáis, acabo de invocar a Nano Banana. ¿Y por qué le estoy pidiendo infografías?  
Pues para ver.  
Para ver, punto uno, la infografía mola, me gusta mucho la infografía.  
Punto 2, si os fijáis, la he hecho rapidísima.  
La ha hecho rapidísima. Esto que lo haga tan rápido hace 3 días no se podía hacer así de rápido. Esto es el nano banana flash que acaban de meter y luego aquí tenemos.  
La ecuación de onda me gusta.  
Me gusta no tanto para LinkedIn.  
Voy a meterme aquí, además acabo de invocar a Miguel Ángel, qué bien.  
He mentido.  
A Miguel Ángel.  
Margarita no ha podido entrar, pues qué le vamos a hacer, el resto está ahí dentro.  
Llamada.  
Eso creo yo, tampoco vamos a, o sea, seguimos a ver.  
De temas cuánticos.  
Luego 2 explico.  
Y luego.  
¿Dónde estaba antes?  
Antes estaba aquí, hoy voy a hablar de metodologías ágiles en un curso de IA. ¿Me ayudas a preparar una infografía? Antes de hacer la imagen, dime el contenido.  
Estructura de la infografía, agilidad, enfoque ágil, el núcleo, vale a ver esto.  
Habría que leerlo.  
Hazme la infografía, porfa.  
Esto habría que leerlo, mirar rápido, que ya lo he visto antes y casi me lo pierdo.  
No quiero crear expectativas, pero.  
Pero las he creado innecesariamente.  
Al lado, bueno.  
Demasiada letra.  
Me espero a la película.  
A ver, esta está bien.  
La acabo de liar.  
A ver, voy a ver esta diapositiva.  
Enfoque Scrum, tenemos Scrum.  
No.  
¿Veis? Esto es lo que os comentaba antes, merece la pena antes de andar cambiando esto, merece la pena cerrar. Nos vamos a uno nuevo, pues porque lo que quiero es quiero que se identifiquen.  
Claramente al menos las metodologías: 2 puntos design.  
Lin Agile y dentro de Agile, Scrum. y.  
Dentro de estas todo lo que necesites.  
Me hace la propuesta sin que se lo haya pedido: Design Thinking, Lean Startup, allá el Scrum, vale, Kanban fenomenal y luego el ecosistema, perfecto, vale.  
Luego importante.  
Estas cosas no hay que hacerlas en clase, hay que traerlas preparadas. Lo que pasa es que en mi caso concreto, en las diapositivas estaba preparado. Yo os quiero explicar nano banana.  
Mira, esta.  
Qué bien.  
Antes había perdido un poco la fe en la humanidad, esta, en cambio, me parece brutal.  
Copio.  
Pego.  
Aquí esto es lo que vamos a hacer hoy.  
A esto vamos a dedicar también parte de la sesión.  
Y luego, ya que estamos, nano, banana.  
Noticias.  
Nano, banana.  
Me pongo noticias.  
Y esto es justo por lo que estoy ahora, me gustaría que fuera en español.  
Voy a poner lanza.  
Y por esto estamos haciendo lo que estamos haciendo.  
Estamos haciendo lo que estamos haciendo por esto.  
Lo que os estoy enseñando.  
El lunes no existía.  
La nano banana, el nano banana 2 Lite.  
Junto con Gemini OmniFlash.  
Lo han lanzado hace poquito.  
O sea, los que usáis Juan, tú usas imagen y creas imágenes alguna vez con esta con estas cosas, no tienes un poco la sensación de que va rápido, o sea, de que ha ido, digo de que ha ido rápido este modelo ahora cuando lo he generado.  
Voy a hacer una prueba, ya que.  
Sí, yo las que hago las hago con ChatGPT.  
En estilo súper realista.  
Con imágenes reales y basado en Galicia. Estoy probando el modelo, o sea, pedirle una infografía con imágenes realistas y en gallego, en no, y con motivos en castellano.  
Pero con motivos.  
Gallegos, que se note la tierra.  
Lo que le acabo de pedir es claramente probar el modelo con infografías. Las infografías tienen un estilo. Le estoy cambiando el paso a mitad.  
Y le he pedido hiperrealista, nunca le había pedido una infografía hiperrealista.  
Pues mira.  
Mira, Juan, lo ha hecho rápido.  
¿Quién es Luis?  
Sí, justo Chema.  
Es a lo que iba.  
Fable 5, ayer volvieron a dar permisos, yo no lo he usado todavía, y fable la sensación que dicen es que es como el fable antiguo pero descafeinado.  
Mira, Jesús acaba de decir.  
Con este ahí es que es el que se está quedando fue, no sé.  
Con este sí, Luis acaba Luis ya está dentro, es Margarita la que está intentando entrar.  
Pues sí.  
Y luego ayer salió Fable Fable 5. También sacaron una versión nueva de Claude a Miguel Ángel. Preguntarle luego que creo que ha estado toda la noche con ello. No estoy vacilando.  
Es más, a Miguel Ángel, como le he metido en el grupo.  
Voy a invocar.  
Te están preguntando, me encanta.  
Le he metido a Miguel Ángel en un grupo de WhatsApp con 20 personas. Él sí sabe que a las 12:00 va a estar aquí, pero sin presentarle, le acabo de remitir la pregunta y le y te están preguntando.  
A ver, ayer sacaron Fable 5 y compartí con vosotros 2 cosas en el grupo de WhatsApp, una Grok con K, la de Space X, la de Elon Musk.  
Ayer ha sacado que lo he puesto, lo he compartido con vosotros antes. He puesto esta esta la noticia esta mañana. No lo he probado porque además es de pago, pero aquí lo tenéis. Introducing Voice Agent Builder, un sistema para construir agentes.  
Al dictado.  
Bastante caro y con bastantes apis.  
Y luego también, a bueno, ayer compartí lo de los bunkers que funciona. En cuanto me metí en Internet, lo busqué y lo encontré. El que ayer os decía que fallaba, este lo va, lo voy a abrir y lo vamos a ver ahora dentro de un segundillo.  
Este lo compartí, mira que bien de ayer.  
Ayer compartí este.  
Yeah.  
¿Esto veis las pelotitas? Ahora venimos a las pelotitas y luego también que es al que quiero ir.  
A ver, esto es un resumen de la clase de ayer.  
Que me dijo, me lo dijo GPT, o sea, a ver, no me lo dijo GPT. Ahora os cuento el procesamiento que hago por las clases y luego también de Notebook LM, que esto lo han sacado solo en inglés. Parece ser que no solo se pueden hacer vídeos largos, sino que ahora te permite hacer vídeos de 60 segundos. De momento no yo pensé que lo podía haber ayer.  
De momento a España no ha llegado y voy a Notebook LM.  
Voy a cerrar cosas.  
Voy a cerrar cosas que no me interesen.  
Voy a cerrar cosas y me meto en Notebook LM.  
El enlace de notebook element no lo he compartido todavía, compartir, copiar enlace.  
Que lo estuve buscando si estaba, este es el enlace de Google Notebook LM.  
El enlace del.  
Notebook LM de la asignatura, esto cada día lo veréis que va creciendo y voy metiendo contenidos en este enlace y luego ya que estamos también.  
Dentro de Garvía.es, ayer con Antigravity le dije, léete, mira Juan, qué chulada. Ayer por la noche le dije con Antigravity, léete las transcripciones y relléname la página.  
Me ha rellenado la página y me dice, esta es la asignatura que estamos dando día uno, día 2, día 3, las presentaciones y las transcripciones y luego el enlace del notebook LM de la asignatura. Esto también son los contenidos.  
Que todos esos contenidos que aquí los tenéis en abierto.  
Los podéis ver también en la plataforma de la asignatura.  
Listo, me meto aquí.  
Esto es el notebook LM, le voy a dar a resumen a mapa, le voy a dar a mapa mental.  
Ayer le di que me hiciera un par de vídeos.  
Le di que me hiciera un par de vídeos, un vídeo corto y un vídeo largo. Cada vez hace un vídeo diferente. Si pongo aquí un vídeo, pueden oír ellos el sonido allí.  
No sabemos.  
Pon un vídeo.  
Ay, no, esto es un podcast.  
Yo ahora.  
A ver, tengo aquí silenciado videojuego, ¿verdad? Exacto, sí, hay una anécdota.  
Voy a poner un el audio que he hecho. Hay una anécdota absolutamente fascinante sobre cómo un simple enfado lo cambió todo en la historia de la tecnología. La historia del videojuego, ¿verdad? Exacto. Sí, resulta que hace unos años una empresa de videojuegos decidió alterar de forma totalmente unilateral las características de un personaje.  
Y claro, eso provocó un cabreo monumental totalmente, un cabreo tan grande en un jugador en concreto que el chico decidió inventar una red tecnológica inmutable. O sea, todo esto para que ninguna autoridad central. A ver, este es un podcast.  
Que si entráis en el enlace que he compartido, lo podéis oír, ahora le voy a dar.  
Hacer otro podcast, otro audio y cada vez que hace un audio lo hace diferente. Si quisierais, pondríais a hacerle que lo voy a hacer.  
Hazme un audio con la parte de herramientas concretas que hemos visto durante el curso.  
Con especial énfasis en metodologías ágiles design.  
Agile.  
Perdón, Design, Lean y Agile. Design es para diseñar producto, Lean para validar si el producto mola y Agile para una vez tienes el producto en producción. Y esto le voy a pedir el audio, pero también le voy a pedir. Hoy es el día de las infografías.  
Le voy a pedir una infografía.  
Hazme una.  
Infografía con la parte de herramientas.  
Le voy a pedir que me la haga en arcilla.  
Horizontal, vertical, cuadrado, vertical.  
Y aquí podréis elegir las fuentes que queréis. Yo le voy a pedir las 2 fuentes. Mañana veremos esto con 3 días, o sea, con 3 días le digo, hazme una infografía y generar.  
Vale, os voy a enseñar uno de los vídeos. voy al.  
Que dura un poco menos. Ayer probé esto buscando a ver si podía encontrar los vídeos shorts.  
Porfa, confirmarme que cuando he puesto el audio se oía bien alguien, porfa, que me diga si se oía bien el audio.  
Perfecto, qué bien, pues voy a por el vídeo, entonces se oía bien, voy al vídeo, ¿vale?  
Y.  
Este vídeo.  
Voy a generar también un vídeo que lo podréis ver, o sea, el que se mete el enlace puede ir viendo lo que estoy compartiendo.  
Voy a hacer un resumen en vídeo.  
Me gusta esto de legado general.  
Y está generando el vídeo, voy a abrir uno, el de el cortito.  
No voy a abrir el de convergencia, el vídeo largo, vale. Bueno, arranquemos. Hoy vamos a desgranar en este análisis cómo la inteligencia artificial, el big data y la tecnología blockchain se entrelazan para resolver problemas que nos tocan muy de cerca. Y no vamos a hablar solo de cables o servidores fríos y aburridos, que va. Hablamos de cómo la combinación de estas herramientas está cambiando las reglas del juegos y reescribiendo nuestra realidad diaria.  
Nuestra hoja de ruta de hoy es superclara: uno, la barrera de datos, 2, latencia y computación física, 3, convergencia y blockchain, cuatro soberanuda digital y 5, impacto social. Vamos directos al primer punto, la famosa barrera de datos. A ver, para que la inteligencia artificial realmente entienda algo.  
Primero tiene que digerirlo. Imaginemos por un momento un data lake, un lago de datos inmenso, es agua turbia, información en bruto totalmente indigerible para un cerebro humano. Sería como intentar tragarse la transcripción literal y sin comas de una reunión de 5 horas. Insufrible, verdad? En el otro extremo tenemos el data warehouse, el almacén de datos.  
Ahí todo está ordenadito, en tablas, limpio, perfecto para que nosotros lo entendamos de un vistazo. ¿Veis que encajan? A ver, es la clase de ayer, a ver, es la clase de ayer reformulada, ordenada, digerida. Cada vez que le pido un vídeo, el enfoque del vídeo es diferente. Os voy a enseñar otro, le di 2, uno corto y uno largo.  
Convergencia, este se llama convergencia y exocortes.  
Hola, en este análisis vamos a ver cómo una increíble mezcla de tecnologías emergentes está cambiando nuestro mundo para arrancar una pregunta curiosa, ¿qué tiene que ver un simple chupachups con la revolución de Bitcoin? Para entenderlo, necesitamos un cambio de chip radical. Hay que volverse totalmente agnósticos con la tecnología.  
Básicamente significa aceptar que la inteligencia artificial ya no es un simple chat, sino un compañero de trabajo autónomo. Claro, este compañero necesita datos, pero ojo, hay un abismo entre un lago caótico y un almacén bien estructurado. Lo realmente interesante aquí es el Lake House, un diseño híbrido brutal que fusiona ambos mundos a la perfección.  
Y volviendo al inicio, el creador del Chupa Chups no inventó nada.  
Perfecto, veis.  
Es una pasada, es una pasada.  
¿Pensamientos que os parece?  
¿Conocíais la herramienta?  
Si conocéis la herramienta.  
Notaréis si conocíais la herramienta, notaréis como.  
Se siente crecer el césped, o sea, cada día va un poquito mejor, cada día va un poquito mejor. Bien, justo la certificación. Perfecto, Armando, Armando se hace podcast para estudiar las certificaciones de MS. Yo a mis alumnos que como podéis.  
Ver.  
Vengo de cada una de las asignaturas que he dado este año, esta de Cumbre de China y esta de Presidentes. Bueno, os enseño la de Cumbre de China, esta no son mis alumnos. O sea, esto fue Putin, fue Putin a visitar a Xi y resultado de la visita fue una semana después de la visita de Trump. Resultado de esa reunión sacaron 40 documentos.  
Lo que hice fue buscar los 40 documentos, se lo metí.  
A Notebook LM y usé Notebook LM para digerir los 40 documentos de la cumbre con esta con bueno, y luego me estoy porque me da por ahí, me estoy estudiando la lista de los presidentes de Estados Unidos y aquí tengo para ayudarme con el estudio.  
Pero lo que me interesa son el resto.  
Todas las que pone IEB es más, es más.  
Editar título.  
Ubigo.  
Tecnologías emergentes e inteligencia artificial.  
Verano.  
2026.  
Todas las que tenéis.  
Ubigo yeve yeve.  
Estos son demostraciones que he hecho en alguna clase, pero Icade 2 Yeb.  
Eticamoax, estas Dicade en Wayuu, todo esto son clases enteras.  
Por ejemplo, dime Diana, dime un número del uno al 10 de 3123, abro y de grupo B.  
Y aquí tenéis todas las sesiones de clase que he dado transcritas y cuando has dado una asignatura con varias clases.  
Pues el mapa este.  
El mapa.  
De la estructura del curso tiene más sentido. Yo solo he dado 2 clases, ahora voy a abrir este mapa. ¿Por qué me he metido aquí? Porque aquí hay 22 sesiones y este es un mapa de toda una asignatura.  
Lo que uno, España tenía varias partes, sector público, pensiones. Es una asignatura bastante divertida, política monetaria, comercio internacional. O sea, tenemos en esta asignatura, primero hablamos de España, luego internacional y luego de la Unión Europea. Y podéis ver cómo yo, gracias a esto, os puedo hacer un resumen visual de la asignatura sin que la conozcáis en segundos.  
Vuelvo a donde estaba, que estaba con vosotros en Ubigo Tecnologías Emergentes.  
Me ha hecho la infografía.  
O sea, os recuerdo la infografía. Esta es lo que hemos visto hasta ahora. Le he pedido que me lo haga en arcilla. ¿Cómo mola?  
¿Cómo mola? ¿Conocéis la oveja Swan, la oveja Swan? Juan, ¿conoces a la oveja? No, segundo.  
Wala si Grumit.  
Eso es, o sea, pues claro, usas Apple. La gente de Apple no ha tenido infancia, crecen adultos directamente.  
Esta es la oveja Swan.  
Que viene Miguel Ángel y estoy calentando y luego están Wallace y Grumit Wallace.  
Y Gromit Walt, no sé escribirlo, que Wallace y Gromit es este señor, pues no sé por qué he visto este dibujo y me he acordado de ellos.  
Qué gozada.  
Acabo de liar una.  
Qué gozada que tu cabeza se acuerde de la oveja Swamp.  
Qué gozada que tu cabeza se acuerde de la oveja Swan y tú puedes compartir.  
En tiempo real.  
Orquestación y agilidad, gestión.  
Pensar antes de programar.  
¿Qué pasada?  
¿Qué es lo fundamental cuando estás aplicando tecnologías ágiles?  
Pensar antes de hacer, pensar antes de hacer.  
Y luego el markdown es formato óptimo y luego obsidian.  
Por aquí está, o sea, esto lo ha hecho.  
O sea, que le he pedido que me haga una infografía con lo que llevamos dando durante las 2 sesiones.  
Adaptada a esto, perdonad, es que veo esto y me emociono. Fundamental, fundamental, fundamental.  
¿Os acordáis el Me he equivocado, me he equivocado, perdón, he invocado sin querer a este. ¿Os acordáis el día cuando erais pequeños, la noche que venían los Reyes Magos a casa?  
La ilusión que teníais.  
¿Os acordáis el día que usasteis vuestro primer teléfono móvil, la ilusión que teníais?  
No perdáis nunca esa ilusión, regarla.  
Y yo desde que aparece GPT tengo desde que apareció GPT, yo ahora tengo sensación.  
No de haber abierto los regalos, que una vez los abres, dices ya para qué, sino de tener los regalos. Es que ni regalos, de haber dejado de estar esperando a que los camellos entren y ver si se van a comer la leche o no.  
O sea, si se van a beber la leche o no, o si se van a beber el agua o no. Tengo esa sensación de alguien va a entrar por la ventana. Es absurdo, no entiendo nada, además unos camellos y lo estoy deseando. O sea, es no perdáis esa ilusión.  
Bien, está generando vídeos. Bueno, sí, lo que os quería comentar, fundamental que al final esto es un curso y hago esto con cierto sentido.  
Esto que estáis viendo.  
Es el motor Gemini que coge unas fuentes cerradas, en este caso son 2 clases, son 2 transcripciones.  
Una fuente cerrada coge 2 transcripciones y las mete dentro de un sistema que se llama RAG.  
¿Qué es el bueno, qué es el rag?  
El RAG se nutre de los documentos, que al RAG le da igual que sean PDFs o no, mejor que sean MD siempre, pero si es PDF, él lo va a pasar primero a MD, lo pasa solo una vez y luego fundamental, ¿qué hace el RAG? Vectoriza.  
Toda esa información porque el MD, aunque sea cómodo para nosotros, todavía tiene letras, letras que son de humanos. La I A, no nos engañemos, son unos y ceros. ¿El RAG qué hace? Traduce eso a vectores, traduce eso a números.  
Y entonces es un motor, o sea, con Google Notebook LM es como si tuvierais.  
Un yeminai de bolsillo que lee única y exclusivamente las fuentes que le habéis metido.  
Yo aquí te voy a pedir a preguntar.  
¿Qué añade el profesor?  
En la segunda sesión que no contase en la primera, vale.  
¿Qué añade el profesor que no contase en la primera? Importante, se puede seguir equivocando. Si se equivoca, será sobre las fuentes. Esta es una pregunta jorobada para él porque tiene que comparar la primera sesión con la segunda. Lo que probablemente no haga es, si yo no he hablado de fútbol, hablar de fútbol.  
La segunda sesión da un salto cualitativo respecto a la primera, mientras que el primer día se centró en romper la barrera psicológica frente a la IA y presentar las herramientas básicas como antigravity y obsidian.  
La segunda jornada profundiza en la arquitectura de datos a escala, la soberanía tecnológica y las aplicaciones sociales y avanzadas de estas tecnologías. A continuación, te detallo los conceptos y temáticas clave que el profesor añade de forma exclusiva en la segunda sesión, arquitecturas de, o sea, data lake, data warehouse, lakehouse.  
Excomputing IoT y la física de la latencia introduce el concepto físico de la latencia, evolución del blockchain, Ethereum y Smart Contracts.  
La metáfora del Chupachups, hablo de Vitalik Buterin, menciono aplicaciones de las finanzas de Uniswap. Vamos a hablar ahora mismo.  
Soberanía digital y nuevas herramientas.  
Y aplicación social.  
Pues me gusta mucho, mucho, mucho, me gusta tanto.  
Esto, además, si Miguel Ángel lee esto.  
Y Miguel Ángel de esto.  
Aquí tienen un resumen de lo de ayer. ¿Por qué os he hecho esto? ¿Por qué acabo de hacerle esa consulta?  
Acabo de hacerle esa consulta.  
No para, o sea, para que veáis una consulta normal.  
Y le voy a preguntar de Taylor Swift si hable.  
Creo.  
Salió, salió Taylor Swift, sí, salió.  
Pero a ver, algo que no saliera.  
El Mundial he hablado.  
Porque de política yo creo que sí que hable.  
También hablé, es que luego he tenido la tertulia, estoy buscando algo de lo que no hablara.  
José Luis Perales.  
Dime cosas de José Luis Perales. José Luis Perales es un cantante que componía música para terceros y luego él tiene grandes éxitos. ¿El velero llamado es Nino Bravo o José Luis Perales? Bueno, da igual. José Luis Perales es un cantante.  
Le estoy preguntando, dime cosas de José Luis Perales.  
Y mirar.  
No he encontrado ninguna mención a José Luis Perales.  
En las fuentes proporcionadas ni en nuestro historial de conversación, los documentos tratan exclusivamente sobre las sesiones de un curso de tecnología emergentes e inteligencia impartido en la Universidad de Vigo.  
Las únicas referencias a personas corresponden a los alumnos que asisten a la clase Chema, Andrea, Juan Armando, figuras del ámbito tecnológico, Satoshi Nakamoto, tal el propio ponente Luis Garvía y su círculo personal o profesional, su madre, su mujer, Diana, sus hijos, su compañero Miguel Ángel o su amigo Manuel Gens, Gelms no Gens.  
Si necesitas información sobre los temas, o sea, lo que quiero que veáis.  
Voy a preguntarle, perdonadme la broma que voy a hacer, pero no me resisto.  
Estoy buscando Julio está. ¿Cuánto falta para? O sea, es que ya estamos en julio. Desde ayer es julio. Estoy buscando el meme con Julio Iglesias de ya es julio.  
Lo siento.  
No, pero es que ya ha llegado.  
Ya estamos en julio. ya.  
Este, por ejemplo, llegó Julio y lo sabes. A ver, le voy a preguntar por Julio Iglesias. Julio Iglesias es un poco más conocido que Perales.  
Julio Iglesias es un poquito más conocido.  
Si le hubiera preguntado por Julio Iglesias, hace 3 meses me hubiera dicho lo mismo que con Perales.  
Y me está diciendo lo mismo que con Perales, pero por ejemplo, si le pregunto por Cristiano Ronaldo, sí que dice es un futbolista, aunque no lo tienes en las fuentes. Vale.  
¿Qué quiero que veáis? Quiero que veáis que aunque está dentro del ámbito cerrado de las fuentes, él tiene datos con los que ha sido entrenado.  
Mirad, justo qué bien de Cristiano Ronaldo. Afortunadamente para el ejemplo no he hablado.  
Pero curiosamente, el profesor sí hace una breve alusión al fútbol cuando navega por la plataforma de predicciones y apuestas descentralizadas Polymarket.  
Pero lo descarta rápidamente aclarando, están con el fútbol, yo no soy de fútbol, os pido disculpas.  
Y luego sí que menciono a Taylor Swift, a Shakira y a Justin Bieber, mencionados al curiosear por los mercados de apuestas Polymarket. El boxeador Floyd Mayweather y la cantante Dior son citados como ejemplos.  
¿Veis qué pasaba?  
¿Veis qué pasada?  
Esta es la clase de 5 horas de ayer.  
Julio Iglesias, yo creo que no sabe o aquí no le ha identificado.  
Ni como cantante, pero aquí ya Cristiano Ronaldo, aunque no lo haya mencionado explícitamente, sí que lo identifica como futbolista porque ha sido ha sido entrenado con herramientas que sí le o sea, resumen de lo que os quiero tratar de decir.  
Esto es cerrado, esto no se sale de las fuentes y luego sí que.  
Podemos que no lo voy a hacer aquí por no ensuciar.  
El Por no ensuciar la carpeta, podríamos buscar nuevas fuentes. No lo voy a hacer aquí, pero voy a crear uno nuevo muy rápido.  
Buscar nuevas fuentes.  
Eh.  
A ver.  
Estoy en Ourense y tengo que aprender cosas culturales.  
Quiero solo fuentes oficiales. y.  
Solo fuentes oficiales.  
¿Está buscando en Internet fuentes?  
Tarda un poquito.  
¿Y estas fuentes?  
¿Importar, puedo importar las vera?  
Ver.  
Ocio, turismo, catedral de Ourense, piezas destacadas, fondos documentales, plan turismo termal, el fondo local, Pax. Mira, con a ver esto de Pax, es que, no me quiero cargar ninguna. Juan, ¿cuál me cargo?  
Además, piezas de me quiero cargar una, ocio, catedral, la catedral, bueno, es que no, la catedral, no, museos, vale, me cargo los fondos documentales, quito los fondos documentales es el y digo importar.  
Me acaba de meter las fuentes.  
E.  
Hoy es.  
Julio y quiero un plan detallado.  
Está consultando las fuentes que se acaba de descargar.  
Y tenemos un plan detallado de lo que se puede hacer en Ourense.  
¿Que si la luz sacra?  
¿Qué estoy haciendo? Gestionar información a la velocidad de la luz.  
Para este mes de julio en Ourense tienes a tu disposición una gran variedad de tal. Visita la catedral, puedes comenzar el día explorando este templo de planta de cruz latina de los siglos 12. Tal no te pierdas exposiciones y tras la catedral puedes acercarte a la sala San Francisco. Evento especial de 2026, luz sacra 2026, el eclipse en la catedral de Ourense.  
La agenda de julio incluye las fiestas del barrio de Aponte, actividades curiosas como Taichin Arrua y una amplia oferta de cine música.  
¿Cuál es el cuello de botella?  
El cuello de botella soy yo con mis deditos.  
¿Vas a preguntar, Juan?  
Speed Kunder Star King.  
Esto antes.  
Oh.  
Jose.  
Sí, correcto.  
El tabla de contenido.  
That is great.  
Ahí hay una cosa que se llama la paradoja de Garvía. Garvía soy yo y me lo estoy inventando sobre la marcha, o sea, pero yo estoy seguro de que alguien le ha puesto nombre a esa paradoja. Cuanta más y mejor información y cuanto más acceso tecnológico tienes a la información, la gente más necesita de curadores, de guías turísticos, de alguien que le diga, cuidado, no te pierdas.  
Está preguntando.  
Y realmente afecta.  
Esta persona o esta persona ahora tiene estas herramientas y se.  
Lo hace mejor y va a seguir dando ese servicio a los demás o todos vamos a recurrir aquí y ya lo vamos a contactar nunca más con el que haciendo. Esto Esto lo tenemos desde hace mucho tiempo, o sea, mucho tiempo es 1 año, no Bukelem está desde hace 1 año. ¿Quiénes lo han usado? ¿Quiénes lo usarán dentro de 1 año?  
Esto es, lo vimos el primer día de clase, el abismo de el abismo de Moore.  
El abismo de Moore, o sea, esto que os estoy enseñando, que es muy sencillo, hoy por hoy es para frikis y seguirá siendo para frikis. ¿Por qué? Pues porque la gente no abre ni Google, la gente está saturada de ella. Nosotros somos ingenieros informáticos, o sea, somos esto es un curso que tiene que ver con ingenieros informáticos y la mayor parte de los ingenieros informáticos que conozco.  
No les gusta la IA porque programa para ellos y lo de la programación es algo salvaje. tú.  
Que para ti la cultura es relevante y tiene que ver con parte de tu modo de vida. Ves esto un poco como anatema porque está haciendo un trabajo que lo has definido perfectamente, está haciendo la parte de curación que antes hacía una persona.  
Pero lo relevante no es, o sea, porque yo lo he hecho muy rápido. He parado a pensar, digo, estoy en Ourense, he parado a pensar, yo estoy de vacaciones en Ourense.  
Y esto no lo he hecho.  
Me refiero, yo soy usuario de la tecnología, he venido a Ourense, me he subido en el coche, he venido. Ayer me subí al puente del Milenio, que todavía estoy. Luego pasé por el tiempo de Roma, por el puente romano que está al lado, pero le pregunté a la tecnología después, no sabía ni dónde estaba la Plaza Mayor.  
O sea, seguí siendo el mismo inútil que salía de vacaciones o de viaje hace 1 año.  
Pero lo que estás haciendo, lo que estamos haciendo tú y yo ahora, Juan, es lo más importante que podemos hacer y es pararnos a pensar en el uso que le damos a la tecnología.  
Esto es absolutamente milagroso y lo hilo con una cosa, creo que fue Chema. Si no fuiste tú, Chema, algo que alguien comentó ayer en el grupo.  
Hablaron de whisper.  
Yo uso Whisper, Whisper es una maravilla. ¿Tú usas Whisper, Juan?  
Pues te instalas whisper y le puedes hablar al principio cuesta un poquito y luego no solo está whisper, sino que yo uso open whisper.  
Que lo que hay que hacer es una API con Grok, con Grok con Q, o sea, es decir, que la IA sea gratis.  
Whisper, tú le puedes dictar.  
Al ordenador y ya no va tan lento, o sea, ya no es el tecleado, que aunque sepas mecanografía, el tecleado va relativamente lento.  
Whisper hace la, o sea, yo las transcripciones sí que le yo hago la transcripción y después si cuando tengo la transcripción hecha le pregunto a la IA, le pregunto a le subo la transcripción a GPT.  
Mira, me da pudor, sí.  
Para la.  
Yes.  
Por otro lado, de la menosidad que pueda dar acceso a cualquiera a ser profesor y no por el lado malo, sino yo, por ejemplo, no tengo mis habilidades, tenemos una super memoria y la capacidad de de ponerme adelante de 40 personas y recordar todo de una forma súper inmediata.  
¿A ver, por qué?  
Si de repente ahora tenemos una herramienta que me ayude, me daría, me daría paso a él. A ver, esto tiene que ver con la parte límica del cerebro.  
Y es como un nuevo profesor entendiendo su terreno. Te te lo te cuento la respuesta porque me la sé de, perdón, me la sé estupendamente.  
Por un lado, los profesores, sí, sí, un intruso es no, y hay otra palabra, ese es el , ¿cómo se llama profesional? ¿Hay algo ahí de competencia desleal?  
Competencia desleal, no competencia desleal no, un yo creo que vamos por lo del.  
No, el intrusismo profesional es que creo que alguien ya lo ha puesto.  
Sí, intrusismo profesional, a ver, vamos por partes, por un lado.  
Yo tengo la transcripción y una cosa que sí que hago, una cosa que sí que hago es la he descargado ahora. Una cosa que sí que hago es.  
Estoy en clase con mis alumnos.  
End direct.  
No seas muy duro y hazlo con humor.  
Dame feedback.  
De la sesión de ayer y dime cosas que sí que hago.  
Contigo, sí, dime cosas que sí que hago contigo. A ver, yo directamente no sé, o sea, lo que le diría es dame feedback.  
Pero como estoy con vosotros y siento un poco de pudor.  
Con cariño, con humor y pensando que esto lo puedes leer delante de ellos.  
Ayer hubo una cosa que me gustó mucho, ¿no diste una clase? Pues vale, empezamos. Diste la sensación de que estaban viendo cómo piensa alguien mientras construye un sistema. Eso engancha muchísimo más que un PowerPoint perfecto, pero también hay algunos bugs del profesor Luis Garvía. UCPU va bastante más rápido que la RAM de los alumnos.  
Que luego aquí también hay un sentimiento, o sea, por un lado, yo voy rápido, lo sé, son 5 horas.  
Pero repito mucho, o sea, la IA no es capaz de tener la empatía cognitiva que tengo con gente a los que le he repetido lo relevante 3, o sea, cuento mucho, mucho ruido. Bueno, tampoco es abres demasiadas pestañas físicas y mentales, qué .  
Esto es un golpe bajo.  
¿Veis que juega con las pestañas? Bueno, ¿quién es?  
Abres demasiadas pestañas físicas y mentales. Tienes un problema serio con la frase 'esto lo vemos mañana'. Cada vez que dices eso, aparecen cuatro conceptos nuevos antes de llegar a mañana.  
La retranca gallega te salva la vida. Cuando haces una broma, toda la clase vuelve a sincronizarse contigo.  
Lo que sí haces, esa a ver, y ahora la pulla final. Hay una cosa que sí, que sí, que sí haces conmigo y que deberías de hacer más con ellos.  
Conmigo paras.  
De la rueda.  
Conmigo paras. Cuando hablamos, tú dices, espera, vamos a profundizar aquí, dale una vuelta. ¿Qué opinas tú? Explícamelo como si fuera un ingeniero con los alumnos. En cambio, muchas veces respondo, claro que respondo yo mismo. A ver, con cariño, os podéis. Es lo que acaba de decir Juan, os podéis conectar, os podéis conectar.  
Por voz.  
Pero tampoco quiero invadiros en vuestra comodidad. O sea, me refiero, yo entiendo, o sea, sí que hago pruebas, Juan, que esto Laia no lo capta, que lo comentaba con Diana ayer por la tarde. Sí que cuando preguntamos una clase o nos queda una, cuando preguntamos un concepto, acaba de pasar con lo del intrusismo profesional.  
O ayer con Andrea, he invocado a Andrea, ayer la invoqué alguna vez y contestaba rapidísimo. Sí que sé que están atendiendo, cosa que os estoy agradecido. Os estoy agradecido porque aguantar a alguien 5 horas, en concreto a mí, tela con los alumnos. Muchas veces respondo yo mismo. Mi única recomendación sería esta.  
Deja 5 segundos más de silencio, a ver.  
Fundamental.  
Y esto no es que yo me quite, tenemos que saber controlar la herramienta que estamos usando.  
Las transcripciones, estas transcripciones YGPT no es capaz de de medir el silencio.  
Hace 1 segundo 10 segundos he dicho esto Juan es importante porque nos estamos parando a pensar.  
Y me he quedado en silencio, eso GPT no lo mide.  
La GPT, lo que no sabe con cariño, que se la que se lo tengo mucho, se lo inventa.  
Y volviendo a dónde iba el intrusismo profesional y respondiendo a tu pregunta.  
Sacarme un poco de.  
La innovación siempre ha llegado de las ideas disruptivas y las ideas disruptivas normalmente llegan de a otro sitio.  
Lo que deberíamos de perder miedo sería todos hacer intrusos.  
Absolutamente, creo que los informáticos.  
Y hay muchos creativos que le están perdiendo miedo a ser disformáticos o... Mira, de ahí las neuronas se empiezan a conectar de un modo diferente y creo que nos puede llevar a... No, y viniendo de otro lado. A la innovación. Y viniendo de otro lado.  
Acércate en micro, acércate en micro.  
viniendo y viniendo de otra de otros estudios de otro lado, aportas cosas nuevas que a lo mejor en ese campo no se han visto, no sé.  
No, o no caen en mí, sabes que tienes otra cabeza. Creo que esto nos puede destacar de los departamentos estancos en los que estoy todos, sin ninguna duda. Porque como no, es que yo soy diseñador gráfico, porque llevo 15 años siendo diseñador gráfico y ahora le das a nada y tú me estás jodiendo. A lo mejor es diseñador gráfico.  
Tiene que meterse el terreno de guionista. Sí, aprovechando sobre la tecnología y a lo mejor. Creo que todos podemos ensanchar nuestro campo.  
Mira.  
No, nada que perdonar, porque además es precisamente esto.  
Una de las enseñanzas que nos tenemos que llevar y volviendo a la clase de ayer, el hecho resumen con IA por un lado, por otro, por otro. Una de las cosas más importantes, que yo lo repetí 80 veces pensando en la transcripción y que no ha salido, es la imagen de Salvaterra Domino y Monçao.  
Que el valor de Salvaterra, Dominio y Monsao.  
Está en el río, está en la frontera.  
¿Por qué estoy hablando de Salvaterra, dominio y Monsa hoy? Hoy no hablo de ningún otro de los puentes, porque está justo en la frontera, ninguna otra de las ciudades gallegas, que hay miles, o sea, miles no, pero cientos decenas de aldeas hay o cientos de aldeas. Está el del PAN CEA, que ahí tienen denominación de origen con el PAN.  
No.  
Porque hablo de Salvaterra, do Miño y Monsao.  
Porque el valor viene de la frontera, o sea, no está ni en ni en Monsao ni en Salvaterra, está en que gracias al río, pues hay vida en los 2 lados, pero gracias al río, en el río hay una frontera física. O sea, ¿dónde aportan valor los ingenieros informáticos?  
En cualquier sitio que no sea la ingeniería informática llevando su buen hacer.  
¿Dónde aporta valor un diseñador gráfico en cualquier sitio?  
En cualquier sitio que no sea, o sea, pues con médicos, un diseñador gráfico, con médicos explicando cosas, pues se sale. Eso sí, hay que esforzarse un poco. Hay que saber, pues qué es una neurona o qué es una proteína. Pues algo hay que saber, no como si fueras médico, pero sí suficiente como para explicárselo a la gente y en eso.  
Ahí das, das tu visión, tu cabeza funciona de distinta manera que un médico.  
Decía, no, entonces tu cabeza funciona distinta manera de un médico y eso es una visión distinta que puede aportar muchísimo más que lo que son todos los médicos juntos. No digo por los médicos.  
En ese mismo sentido, en ese mismo sentido, pensando en mi profesión o la profesión que estoy ejerciendo ahora, que es la de profesor.  
Yo afortunadamente no recibo clase de otros profesores, pero por la experiencia que tengo de otros profesores dando clase, la experiencia que tengo a través de mis alumnos.  
Los profesores siguen en un mundo, muchos profesores siguen en un mundo que ya no existe y siguen en ese mundo y van a hacer que salgan de su.  
Hola de confort, los profesores de es que yo estoy deseando.  
A ver, Juan, yo, y te lo digo de corazón, estoy deseando verte dando clase.  
O sea, me gustaría verte dando clase por los nervios, por la emoción, porque traerías algo disruptivo de por sí, porque como nunca has dado clase, hay una frase que a mí me encanta, hay 2 frases que me encantan, una para los que hacemos cosas que es nada es imposible para quien no tiene que hacerlo.  
Y otra que es complementaria a la anterior, que es.  
Lo hicieron porque nadie les dijo que era imposible.  
O sea, cuando tú empiezas a dar clases sin haber dado clase antes, pues haces cosas.  
Curiosas, disruptivas que rompen el paso, porque como nunca antes has dado clase, no sabes. Estoy pensando en Gaudí, la Sagrada Familia. O sea, él supo conservar ese espíritu joven, ese espíritu de niño que está esperando a los Reyes Magos. Y luego, fundamental, se entrena.  
Entrena todo, se entrena igual que tú tocas guitarra, no tú tocas la guitarra, pues el primer día que empezaste a tocar la guitarra no lo no la tocas igual que la tocas ahora.  
Yo dando clase, el primer día dando clase no la no lo daba igual que el que daba ahora. El primer día de clase cogía las diapositivas, seguía las diapositivas, tuvo mucha energía, mucha energía. A la gente le gustó.  
Pero si hoy estoy dando palabras, conceptos por minuto, el primer día que empecé a dar clase era una metralleta suelta, pam, pam, pam, pam. O sea, al final vas aprendiendo.  
O sea, hay un cual admisión es conectar, que es lo que sin duda desde este lado creo que estás.  
No sé la opinión de los demás, creo que puede haber.  
Que se desconecte y otro que sí este.  
En este caso, a ver, por un lado, luego también hay que entender la importancia de ser docente va a ser la capacidad de captar la atención. Eso durante sí, todo lo demás está ahí, no está en la red.  
Dice Chema, y te estoy agradecido, Chema, que el que no sea una formación de leer diapositivas y comentarlas hace que esta formación sea más interesante. Estamos hablando ahora un poco de pedagogía docente, no es lo mismo.  
Todos, todos tenemos pasado de conocimiento, entonces lo que podamos aportar.  
Es un bar para clase, correcto, a ver, no es lo mismo.  
No es lo mismo en este sentido, pensando en metodología docente, prepararte una charla TED, que son 20 minutos, o prepararte una charla de 10 minutos. Esa charla puedes estar preparándotela, no exagero días a una charla de 10 minutos la puedes estar preparando días y repites y repites.  
Que una clase, pues que estas sesiones de clase, que son 20 horas durante 4 días. Para mí, si estás dando clase 20 horas durante hice una sesión de estas la semana pasada y esta, aunque pueda parecer más caótica desde el punto de vista de aprendizaje, me gusta más por las herramientas.  
Y créeme, Chema, que parece caótico.  
Pero hoy vamos a hablar de Uniswap.  
Hoy estamos hablando de metodologías ágiles que son más caóticas.  
Y hoy vamos a cerrar un poquito lo del blockchain con Miguel Ángel.  
Y seguimos viendo herramientas, o sea, a lo que voy es.  
Que 5 horas necesariamente necesitas tiempo para divagar, para irte. O sea, a mí me dice, me dijo GPT el primer día y me dice, has explicado muchos conceptos en poco tiempo, muchos conceptos en poco tiempo. Y lo compartí con Diana y le dije a Diana, no pasa nada porque vamos a estar 3 días más.  
Repasando esos conceptos y usando las herramientas. El primer día sí que quería presentar obsidian y antigravity. ¿Por qué? Porque necesitamos un motor que mueva la tecnología y necesitamos una estantería que gestione la información.  
Una vez ya tenemos el motor.  
Y una vez tenemos la estantería, el resto es jugar.  
Es jugar, o sea, el enfoque metodológico es fundamental también.  
Bien, tú prefieres escribir, no es que no tengas.  
A veces nos ha dado un rol y no podíamos manejar, entonces ahí espero.  
La posibilidad.  
Están, mira, Chema te dice que está en un espacio compartido.  
Ahora que por eso no abre el micro, sí.  
Si al final esto.  
Tiene un componente volviendo que no me voy a meter mucho allí al Alzheimer de ayer.  
Tiene un componente, estoy pensando en la discapacidad.  
Chema, todos los efectos ahora está en un espacio compartido y se está comunicando con los dedos. A todos los efectos ahora es como si fuera mudo.  
Si alguno va conduciendo.  
Es como si fuera ciego y nos escucha, que joda, aquí hay una reflexión potentísima que gracias Chema por no poder hablar.  
El canal de comunicación natural para el ser humano.  
Que esta es otra metodológica, el canal de comunicación natural para el ser humano no es la vista, no es la pantalla, es el oído.  
El paréntesis de la pantalla es un paréntesis de apenas 500 años.  
Que empieza con la imprenta, empieza con una pantalla en papel donde nosotros al leer.  
Nosotros, al leer, no vemos cuando leemos, escuchamos con la vista.  
Cuando leemos, estoy hablando de la atención, cuando leemos no estamos leyendo con la vista, estamos escuchando lo que leemos.  
Y esa pantalla desde hace.  
30 años donde había letras se ha transformado en una pantalla donde hay imágenes y nuestra capacidad cognitiva, nuestro cerebro, no está preparado para ver vídeos cada 15 segundos.  
En cambio.  
Gracias, adiós.  
Sí que estamos desde un punto de vista cognitivos preparados para escuchar a alguien 5 horas.  
¿Y para estar hablando 5 horas en un bar con amigos, cómo se nos pasa el tiempo?  
La Ilíada y la Odisea.  
La Biblia.  
Antes de que se escribiera el talmud, los vedas indios, tradición oral.  
Los cantares, el cantar del Mio Cid, los juglares, tradición oral. La gente memorizaba historias, contaba historias y esas historias se transmitían de generación en generación. Lo que os quiero decir con esto es que la pantalla que estamos viendo, y estoy hablando de tecnologías emergentes, la pantalla es un estadio intermedio.  
La pantalla, afortunadamente, desaparecerá.  
Y llegará un momento, lo que os he compartido hoy de Grok, cómo se está programando, cómo Grok ofrece programar hoy los agentes por voz, tú hablas.  
Tú hablas, el sistema ejecuta.  
¿Y tú escuchas el resultado o puede que con realidad aumentada? Pues quiero ir a la catedral. Tú miras la catedral y te dice, ¿y dónde están las arquivoltas? Estoy usando palabras que no me sé. Y tú sobre la imagen que estás viendo, ves superpuestas la clase de arquitectura, la ves superpuesta. Esto es un arquivolta, aquí se ve que es románico, aquí se ve que es.  
No sé qué esto es de este arquitecto. Estoy pensando en Santiago, si veis la catedral, si veis el pronto de la catedral de , o sea, una catedral no se construye en un día. Una catedral tarda en construirse décadas.  
Y tú ves diferentes estilos arquitectónicos superpuestos en la propia catedral. Eso con unas gafas dentro de poco lo podremos ver en tiempo real.  
Y lo estaremos viendo porque la voz que le... ¿Quién lo va a hacer? ¿Quién lo va a hacer? Pues ahí... ¿Los ingenieros informáticos o los flipados de la historia? El flipado de la historia. El flipado de la historia que tiene una  
Sí, y el amigo, el amigo ingeniero informático, ¿sabes cómo se llama?  
GPT.  
O sea, el amigo informático que haya venido a este curso y haya dicho, todo esto que está contando el Garvía me parece interesante y lo voy a poder aplicar a esto que me encanta. Si tienes pasión por algo, lo relevante es la pasión. El de la pasión puede estar trabajando 247 y además se fija el detalle es que el arquivalta no es esto, es justo esto.  
Es que Es que tal acorde. A mí me encanta consumir música, pero estar componiéndola, dices, prefiero consumir música, prefiero hacer, o sea, al final el que tiene genuina pasión por algo es el que lo va a hacer.  
This.  
No es que ese concepto de soy gallego, soy gallego, soy portugués, soy de Turquía, soy madrileño. A mí me gusta mucho porque siendo madrileño en Galicia o en Asturias o en cualquier parte de España, es muy fácil confraternizar con el local.  
Muy fácil, muy fácil. Primero yo intento que no se me note que soy de Madrid y luego siempre hay alguien que te dice eres de Madrid y tú le dices, bueno, nadie es perfecto.  
Y ya eres amigo.  
Nadie es perfecto, o sea, el final de la película con faldas ya lo loco, o sea.  
A ver si me estoy equivocando que alguien me, pero sinceramente les digo lo de nadie es perfecto y eres amigo.  
Y luego dices que no sé que es que Madrid es grande, digo sí, pero esto es mucho más pequeño y tenéis río y si voy para Vigo hay playa.  
O sea, lo de los nacionalismos es un concepto industrial.  
¿Lo de soy de letras, qué?  
¿Soy de letras, no?  
O sea, eso que es que no sabes usar un ordenador, pero si lo sabes usar todo el mundo, eso lo hemos aprendido con la pandemia.  
Gente de 90 años con la pandemia se conectaba a través de Zoom, no es que soy de letras y luego no soy ingeniero informático. ¿Eso qué significa que no vas a leer un libro en tu vida?  
No es que soy ingeniero.  
No me No me preguntes por historia, la historia es un.  
Estos son temas del pasado. Voy rápido que me estoy enrollando y quiero a las 11:30 acabamos a las 11:30 acabamos y quiero empezar.  
Eh.  
Iba a poner 1205, pero a las 12:05 nosotros a este le invoco a las 12.  
A ver, voy, resumen de lo de ayer para enganchar con hoy. Hola, qué maravilla.  
¿Habéis visto?  
What?  
Ahh, yeah.  
La bola azul gorda eran 150 bitcoins.  
¿Esto qué es? Esto es el gatillazo que tuve ayer.  
Esto es, esto es, son las transacciones que están pasando en tiempo real en la blockchain de Bitcoin. Cada pelota es una transacción de una cuenta a otra, de una clave pública a otra. de.  
Una cantidad fija de tokens de bitcoin que aporta.  
Va, 99, esa era más pequeña. No sabía que me podía venir abajo, no sabía que esto se movía. Os pido disculpas por estar jugando con ello. Me centro. ¿Qué aporta el blockchain?  
¿Que estas esto que estamos viendo aquí?  
Esto que estamos viendo aquí, todas estas transacciones.  
Podemos estar seguros de que están sucediendo y podemos de estar estar seguros de que de estas cuentas han ido a estas. ¿Qué quiere decir estar seguro?  
Pues yo ahora miro por la ventana y estoy seguro de que es de día.  
Hay un señor por ahí que se llamaba Descartes, que la conclusión a la que llegó después de pensarlo mucho es que él podía estar seguro de que estaba dudando, podía estar seguro de su propia existencia.  
Lo de la seguridad, bueno, no me enrollo. Blockchain Bitcoin 2008, 2014.  
Pues lo que comentábamos antes de las bateas, si tú quieres, o sea, para qué servía el bitcoin, pues para pocas cosas. Es broma, pero o sea, al final, si tú tienes dinero en efectivo, a la gente en general no le importa pagar impuestos.  
¿Para qué sirve? O sea, no le o sea, puede que digamos que a todos nos importa pagar impuestos, pero a la hora de la verdad todos pagamos impuestos, no hay revoluciones, grandes revoluciones, y si por esa confianza te hacen pagar un 50% de lo que ingresas, pues ni tan mal, porque me queda otro 50% para seguir viviendo bien porque vivimos bastante.  
Bien, a lo que voy es el bitcoin por sí mismo, el bitcoin por sí mismo.  
Vale para poco, salvo que quieras hacer cosas al margen de la ley.  
Si quieres hacer cosas al margen de la ley, entonces sí que necesitas una herramienta, pero cuidado que el bitcoin.  
Si queréis infringir la ley, no, o sea, no infringáis la ley, pero si aún así queréis seguir haciéndolo, usar, por ejemplo, en lugar de Bitcoin Monero, que Monero cada vez que tú mandas la clave pública cambia la clave pública. En Revolut hay un sistema de tarjetas de crédito que cada vez perdón o de débito que cada vez que usas una tarjeta aparece un nuevo número de tarjeta.  
Así, a la persona a la que le estás dando la tarjeta no puedo usar esa tarjeta, no puedo usar ese número de tarjeta otra vez, ¿me seguís?  
Pero esto que os estoy enseñando lo metéis en la estantería de cosas solo con fines pedagógicos. Lo del ciber fraude y todo eso que me lo he dejado por ahí pendiente. Resumen y a lo que voy, blockchain sirve para tokens, aparece Ethereum lo de los smart contracts. Ayer comparé con cariño que la quiero mucho a mi madre.  
Con un bot mi madre tarda en responder. El bot contesta de forma instantánea. ¿Qué es un smart contract? Es una clave pública, pero que dentro no tiene a un individuo. Dentro de la clave pública, lo que tiene el smart contract es software, es un programita de ordenador.  
Esto aparece en el 2010 2015, o sea, 2014. Vitalik Buterin tiene la idea. 2015 la ejecuta, se crea Ethereum, hay una evolución posterior y todos esos programitas se empiezan a aplicar en el mundo, en el sistema financiero y empiezan a aparecer webs.  
Aplicaciones web descentralizada descentralizadas que dan servicios financieros en el mundo cripto. Volviendo a Salvaterra, dominio y volviendo a Monsao, os voy a presentar uniswap.  
Yo en este ordenador no tengo mi Metamask.  
No tengo mi metamask.  
Da igual que no tenga Metamask es.  
Metamask es.  
Comparto Uniswap, Metamask es.  
Con Si aprieto aquí empieza, es como loguearnos, como conectar nuestro usuario. Pero desde el punto de vista cripto no conectamos nuestro usuario solo, sino conectamos nuestro usuario con todas, con el wallet, con o sea, conectamos el wallet, conectamos nuestro monedero.  
Directamente.  
Al sistema.  
Yaki.  
¿Uniswap qué es?  
Primero os voy a enseñar su funcionamiento y luego os digo lo que es, yo tengo Ecer.  
Un ether y quiero cambiar ethers.  
Voy a buscar a DAI, DAI es una stable coin.  
DAI es una stablecoin que por cada DAI me dan 1 usd. Importante, no puedo cambiar Ether por dólar. ¿Por qué? Porque el dólar está en el sistema oficial del dólar. En cambio, todo esto está dentro de lo que es el mundo cripto.  
Por un efe me darían 1621 days equivalentes a 1621,58 USD.  
Y podría cambiar y hacer la inversa por 1622,39.  
Toma 3.  
Dais dólares en dais, me darían un.  
Si tuviera mi metamask conectado, daría a empieza.  
Y desaparecería un ether de mi wallet y pasaría a tener 1621,45.  
¿Dáis en mi monedero?  
Evidentemente.  
Los days que vendo son más caros que los days que compro. ¿Te ha entendido, Juan, más o menos?  
¿Por qué estoy presentando? ¿Por qué os estoy enseñando?  
Uniswap.  
Juan.  
¿Por qué os estoy que me encanta?  
Porque Uniswap.  
¿Qué es unistrap?  
Y te digo porque me encanta, que es uniswap, un creador artístico, un programador.  
Un profesor.  
En el mundo digital, Uniswap.  
Por un lado, en finanzas tenemos un contrato que se llama el contrato de swap.  
El contrato de swap es un contrato entre 2 personas y es tú me das, yo te doy.  
Y es un contrato que es o Tc fuera de los mercados regulados, igual que hay contratos de opciones, hay contratos de futuros.  
Hay contratos de préstamo, pues hay un contrato que es el swap, que se estudia en finanzas y es un contrato que se firme entre 2 personas.  
También en finanzas hay otra figura que son los creadores de mercado. ¿Qué es un creador de mercado? Tiene que estar registrado oficialmente por la CNMV en España y un creador de mercado.  
¿Es alguien?  
Que si tú quieres comprar algo que tenga poca liquidez, el creador de mercado está obligado a venderte.  
Y si tú quieres vender algo que tiene poca liquidez, el creador de mercado está obligado a comprarte para que lo entendáis todos un creador de mercado.  
Es un supermercado, imaginaos que yo necesito champú.  
No voy a ir a una fábrica que venda el champú.  
Voy a ir a un supermercado. ¿El supermercado compra champú para lavarse el pelo ellos o el champú se dedica a fabricar? ¿O sea, el supermercado se dedica a fabricar champú? No, el supermercado lo único que hace es compra el champú, lo tiene en stock y está esperando a que alguien venga. O sea, es un intermediario.  
Que almacena mercancía por si alguien lo quiere comprar y se lleva un margen por ello.  
Uniswap también es un creador de mercado.  
Pero es que un iswap.  
También es un exchange.  
DC, yes, unexchange.  
¿Puede tener stock, ellos no tienen stock? No, sí, intermedia.  
No, pero Uniswap si tiene stock, también es un banco Uniswap, porque a ver si yo ahora aprieto este botón, si yo aprieto este botón, los ethers que me llevo.  
Los tiene dentro el smart contract y porque él tiene dentro, o sea, no los puede crear de la nada.  
Los tiene dentro almacenados. ¿Y por qué tiene uniswap dentro almacenado esos ethers? Porque hay gente que le renta tener esos ethers dentro del smart contract, porque a cambio de esos ethers.  
Te van a dar rentabilidad.  
Para que funcione Uniswap, Uniswap es un smart contract, que es una bolsa muy grande. Una cosa es de cara al usuario final. Yo he venido a Uniswap como usuario final, llego al aeropuerto, tengo dólares y necesito euros. Voy a Uniswap y me hace el cambio.  
¿Qué hay dentro para que me para que a mí me puedan dar dólares? Necesitan euros, perdón, para que a mí me puedan dar dólares. Ellos necesitan tener dólares y yo voy con mis euros. Si hay mucha gente, si llega un avión y empiezan a sacar dólares, todo el mundo empieza a sacar dólares.  
Puede que llegue un momento que no tengan dólares físicos dentro. ¿Qué hace el smart contract por detrás? Si hay gente que empieza a sacar dólares, los dólares que saca son más caros.  
Y si hay gente que quiere meter dólares, les premia.  
Todo esto de forma automática, esto es un smart contract. O sea, hay gente que tiene ahorros, esto se llama farming, tú tienes criptos, tienes DAI o tienes Ether. En este caso tienes un excedente, tienes unos ahorros y si los metes en Uniswap te dan una rentabilidad. ¿A cambio de qué? ¿A cambio de que el smart contract de forma automática?  
Disponga de ellos y el que quiera hacer el cambio, el que quiera hacer el cambio de moneda, pues la diferencia entre el cambio y el beneficio, o sea, entre lo que compras y lo que vendes.  
Hace que el que tenga ahí metidos tus ahorros tenga.  
El que tenga ahí metido sus ahorros.  
Tenga una rentabilidad.  
¿Entendéis ahora la obsesión que tenía?  
La necesidad que tenía de explicaros uniswap.  
Porque no os estoy explicando solo un smart contract, os estoy explicando un producto que en el mundo digital tiene sentido.  
¿Tiene sentido?  
Pero que en el mundo tradicional industrial era un trabajo que se hacía desde cuatro 5 sitios diferentes. Tenías un swap por un lado, tenías un exchange, te tenías que registrar, o sea, esto es.  
Lo que hablábamos antes, la esto es la respuesta a tu pregunta de quién es el que va a dar ese servicio determinado. Pues primero hay que ver qué se necesita, hay que diseñar ese servicio. ¿Quién programa un smart contract?  
Y programador.  
Un economista, un o sea, un ingeniero, un economista, un licenciado en Derecho.  
Por un lado, un smart contract no es un contrato legal, un contrato inteligente. Un smart contract es simplemente código que se ejecuta, que puede tener repercusiones legales, pero al final un smart contract se se programa en Solidity. Es un lenguaje relativamente fácil y hasta hace 3 años te diría.  
Que alguien que se esfuerce un poquito en aprender solidity, que es fácil. Hoy por hoy no necesitas ni aprender solidity porque el diseño del smart contract te lo hace antigravity directamente.  
Y yo no conozco de ningún sitio donde se enseñe a programar smart contracts con IA.  
¿Por qué? Porque programar, o sea, yo podemos programar si queréis en antigravity un smart contract.  
Pero es feo, a ver, feo, es un rollo, es antigravity, hazme un es marco.  
Guarda un programa.  
Metamask, a ver, Metamask, no, a ver, Metamask es el monedero, o sea, Metamask es la extensión, o sea, mira.  
Acabo de hacer una porque yo perdí.  
Las mediste en Metamask y perdiste las claves. Sí. Acabo de preguntarle aquí a Ángel. En 6 años tenía 150 euros en  
En serio, me acaba de decir que.  
Sí, has subido en 5 o 6 años, no, a ver, en 5, desde hace 5 años has subido.  
Importante, no le preguntes a GPT, no le digas que haga cuentas matemáticas, GPT y las matemáticas y GPT y el tiempo se llevan mal.  
¿A ver, hace cuánto, 5 años?  
That.  
Mira, 5 años, pues sí.  
A ver, GPT tiene razón.  
De repente tiene razón.  
Total, no, total, total, pero aún así, yo personalmente no delegaría en GPT. O sea, Metamask es una extensión que te pone, o sea, Metamask es lo que me permitiría si lo tuviera conectado.  
Apretar aquí.  
Empezar.  
¿Ves que digo empieza y me dice conecta una billetera? ¿Cómo conectaría la billetera con Metamask?  
Eso es Metamask. Metamask es la máscara que me permite conectar la billetera. Máscara no es máscara, es el programa que hace de intermediario con el navegador en este caso.  
Y.  
Y esto nos llevaría a la web.  
A ver, a ver.  
Sí, pero mientras que a mí me gusta explicar.  
Metamask.  
Explicar la web 3 no me gusta, perdón, mientras a mí me gusta explicar Uniswap, ¿por qué me gusta explicar Uniswap?  
Porque es ese concepto de convergencia, de convergencia entre el que pinta, el que toca la música, el que quiere comunicar algo.  
Y a través de Internet busca al público. Me gusta explicar uniswap porque tiene un punto de convergencia. En cambio, la web 3.  
No, a ver, esto es, no, a ver, es muy sencillo, es para cambiar.  
Tokens de un Fernanda, he preguntado.  
Sí, Fernanda, he preguntado por ti y me he acordado de tu hermana y de tu padre.  
Oh, oh, oh, ese me había olvidado, pero uf, a las 12:00 te tomas un café, no 11:30. Bueno, no te preocupes, besiños, y el que escribió el, uf, se me habéis olvidado el que escribió el libro.  
A ver.  
¿Uniswap qué es?  
Uniswap es un servicio, yo tengo.  
Dólares en Dai y quiero comprar una cripto y lo compro con un swap, ya está.  
No, Metamask es solo el wallet. Si tú quieres con Metamask, si tú tienes Ether en Metamask y quieres transformar esos Ether en DAI o en la cripto que quieras, el servicio que podrías usar es Uniswap.  
Y hablando del trading, sí.  
A veces también se habla sobre la.  
Pérdida mundial de empleo por la IA.  
No está.  
Mira que.  
¿Y estás moviendo?  
De los.  
no podría llevar a que fuesen muchos empleos a mucha gente, que fuesen empleo en sí. Me alegro, me alegro, a ver. Es que no sé ni cómo explicarlo porque... No, no, no te preocupes.  
En vivo, o sea, la respuesta sea, se ha entendido perfectamente.  
Es que antes empezamos las hileras, hacían los vestidos, luego llegaron las máquinas, ya hicieron los vestidos, las máquinas y esas hileras se tuvieron que transformar. Ahora, en vez de estar escritor en haciendo motores, no bueno, de gente.  
Haciendo trading como justo trabajo. A ver, lo que pasa es que desconfío mucho de que la máquina ya puede hacer también esos trabajos porque saber qué van a subir, qué van a bajar.  
A ver, maravilloso.  
Cuidado, sí, pero no, sí, pero no, y es una maravilla.  
El pecado, el pecado original limp, claro, el pecado original es sucio.  
Eso lo decía Woody Allen, no que el sexo, cuanto más sucio, mejor.  
Nice.  
Sí, o sea, a ver, si alguien quiere opinar por el grupo, que lo diga. Si alguien quiere intervenir, que lo diga. Y mientras nadie de ninguna señal de vida, yo he cogido la opinión de Pablo de ayer. Pablo Pizzorno comentó ayer, compartió un artículo.  
Es cortito, se lee muy bien y además va en línea con lo que estás comentando, Juan.  
Es un trader.  
Uno que está pendiente.  
Ve por lo que sea, compra algo.  
Vendiendo otra cosa, o sea, al final cambia Ether por DAI. ¿Por qué? Porque él piensa que el proyecto asociado con el DAI vale más que el Ether. En teoría, los euros.  
Los euros deberían de mantener siempre su precio constante, es decir, el euro, el dinero.  
Debería de tener muy poca, muy poca, muy poca, muy poca en el corto plazo, nada de inflación.  
O sea, el dinero, estoy hablando de política monetaria, es estabilidad, o sea, el dinero no debería de cambiar su valor.  
Y luego sí que hay gente que gracias al dinero hace negocio y luego hay gente que para poder hacer negocio necesita dinero. Yo te doy dinero, tú trabajas y tú me devuelves más dinero.  
Y al mismo tiempo me devuelves.  
O sea, tú me devuelves más dinero y con ese trabajo tú ganas más. No sé si me estoy explicando jugando un momento.  
Cuando hablamos de especulación pura, sí, voy cuando hablamos de que sí, a ver, te he dicho teoría financiera general y voy a la especulación, que además, sabiendo que tocas la guitarra, sé por dónde cojeas un poco, que esto es social.  
Especular.  
La especulación, por mucho que los medios de comunicación se esfuercen en decirnos esto no lo dirían la Sexta jamás a lo que os voy a decir.  
No lo diría en la sexta, jamás.  
La especulación no es mala.  
Ni buena, la especulación es gente.  
Que juega con, en teoría, mejor información.  
Yo.  
Si estoy dando un curso de lo que sea es porque en relación con el tema del que estoy dando clase, tengo más información que la gente que me está escuchando.  
¿Tengo más y mejor información, y entonces qué hago?  
Aprovecho esa información que tengo para sacar.  
Una ventaja para hacer que el que me esté escuchando a su vez pueda usar esa información. Lo que estoy haciendo es aprovechar la asimetría en la información.  
Luego dedicas tu tiempo a estar informado, eso es y con esa, o sea, al final, ¿qué es lo del trading?  
Es una esencia muy pura, muy pura, es reducir el comercio, reducir la gestión informativa.  
A su esencia, en el cual yo tengo información, compro otro, tiene información, vende en este sentido. Sí, es un es gestión informativa, o sea, el trading es información. Solo me funciona en el campo cuando realmente pienso en alguien que dice.  
Voy a apoyar a esta empresa e invertir en ella y dejar que tenga.  
Pass.  
Y dedo cierto.  
I be at.  
Un dinero a una empresa, él y muchos traders, y esa apuesta le sirve a esa empresa para crecer. A ver, ahí veo crecimiento, por desatascarnos, por desatascarnos. Hay 2 límites, 2 límites hacia los que estamos yendo.  
Y son 2 límites que están separados, pero cada vez están convergiendo más. Por un lado, hay un límite en el cual es necesario que alguien cree valor. Es necesario que alguien trabaje creando valor, porque si nadie crea valor y todos nos dedicamos a especular, nadie hace nada. Yo creo que estoy creando valor.  
Yo, si me relaciono con otros seres humanos, es para crear valor y trato de dar herramientas a la gente para que creen valor. El crear valor requiere un esfuerzo.  
Pero luego la otra fuerza es que cada vez más todo lo que es trabajo repetitivo lo va a hacer la IA.  
Y eso hace que se pueda delegar cada vez más todo lo que no sea gestión de información a la IA. Por lo tanto, tenemos esas 2 fuerzas que están convergiendo a una velocidad brutal. Es necesario crear valor.  
Pero cada vez más, todo lo que es creación de valor a través del trabajo, esfuerzo físico, es susceptible de ser automatizado.  
Y voy a teoría económica clásica, voy al marxismo.  
El marxismo más puro lo que dice, y estoy absolutamente de acuerdo con ello, es que el ser humano para vivir necesita trabajar.  
Pero trabajar no necesariamente tiene que ser romperse la espalda. Llevando sacos de un sitio para otro. A mí me gusta pensar que esto que estoy haciendo ahora.  
Es trabajo.  
Pero luego también es trabajo y puedo dar fe que cuando acabo acabo cansado.  
Pero no es un trabajo equivalente al que hacían los seres humanos hace.  
300 años o hace 600 años. Afortunadamente voy al súper y no tengo que ir al campo. Aquí hay gente, cuidado que luego en Ourense y en Osaka. Si la gente vive más que en otros sitios es porque tienen huerta en parte.  
Porque hay pulpo por el polvo, porque hay o sea en toda la Ribera Sacra hay mucha gente que vive muchos años y es porque hay huerta. O sea, al final físicamente hay que hacer cosas, hay que ir al gimnasio, hay que correr, pero desde un punto de vista de teoría del trabajo.  
Tenemos que redefinir qué es eso del trabajo y tenemos que redefinir qué es eso de la riqueza. Yo aquí.  
Por ejemplo, y tu trabajo pasa a ser siendo trader gestión de la información, pero para mí el concepto de riqueza es compartir. Ha entrado Rubén, se ha ido, le he invocado hablando de riqueza y este ratito que he compartido con él, yo me he sentido.  
Más rico, o sea, si a ti te dan la renta universal y tú decides pasar tu tiempo como si fueras un bot mirando una pantalla.  
Apretando botones, gestionando información. Ojalá haya mucha gente que se dedique a eso. Yo voy a hacer todo lo posible por no ser uno de esos, porque prefiero que mi vida sea tenga que ver más con el mundo de compartir con otros seres humanos, con ver a mis hijos, la familia. O sea, es que tenemos que redefinir muchos, muchos conceptos.  
Y dentro de esa redefinición de conceptos, la web 3, la web 3 a mí me parece más ruido que valor y ahora la desarrollo muy rápido, en cambio.  
Hey.  
La web 3 me parece más ruido que valor.  
Iba a hablar de algo valioso y se me ha ido el santo al cielo, que esto pues no sería tan valioso, ¿no?  
En cambio.  
Se me ha ido el santo, lo volverá. Voy a la web 3 muy rápido.  
Yo os pido disculpas, a ver qué es la web 3.  
Hay una web, uno.  
Una web uno en la cual tú te conectas a Internet y estás viendo el periódico, el mismo periódico físico. ¿No habréis nacido alguno de los que nos estáis escuchando? ¿Tú tenías un periódico físico y qué hace la web uno? Ese periódico físico te lo pone a través de una pantalla.  
La web 2 aparece con Twitter, aparece con Facebook y aparece con la misma prensa cuando la gente ya se empieza a conectar.  
No tanto para ver.  
El periódico, sino para leer los comentarios, en la web 3 nos empezamos a comunicar unos con otros.  
A través de Internet, o sea, el titular de la noticia es una excusa para ver en tiempo real las opiniones de los demás. Esa es la web 2.  
A ver qué es la web 3.  
Pues si hay una web 1.0 hay una web 2.0 que para mí esa web 2.0 sí que tiene todo el sentido, pues es lógico que aparece gente y hable de la cuarta revolución industrial, la quinta revolución industrial, la sexta, la séptima y ya pierdes el y ya pierdes la cuenta que es la web 3.0.  
Es una web en la cual ya las personas no son, no son tan importantes y sí que el bot con las aplicaciones web Uniswap, o sea, Uniswap al final.  
Es un voto.  
Una persona puede usar un bot, pero ¿qué otra cosa puedes usar también un bot? Tú puedes poner a un bot a trabajar con un bot. O sea, yo puedo estar todo el día viendo la pantalla y haciendo trading, pero puedo enganchar también a un trader.  
¿Pero en tu día a día qué haces con?  
Nada, a ver, no de trading no. Si necesito comprar tal cripto me dicen, pues tal cripto está bien o es un proyecto o tienes un proyecto y dices quiero los vender, pues lo vendes. O sea, Uniswap es como cuando vas al aeropuerto.  
¿Puedo comprar reacciones de Deanthropic? Deanthropic no, pero si hubiera un.  
Si hubiera una stablecoin que replicara el precio de las acciones, que sí que hay stablecoins que replican el precio del bitcoin. O sea, si hubiera una stablecoin que replicara el precio, tú podrías, es como un ETF.  
O sea, sí puedes.  
Si puedes si existe el producto.  
Que es la web 3.0 una evolución.  
En mi caso concreto.  
Y voy a las metodologías ágiles.  
En mi caso concreto.  
Y esto es lo más importante que tengo que decir de metodologías ágiles.  
El mundo antes funcionaba con diagramas de GAMS.  
O sea, tú hacías planes a 10 años, hacías planes a 20 años para llegar a 10 años. Hoy tengo que hacer este paso, luego mañana tengo que hacer otro paso y vas construyendo una vida en función de pasos prefijados.  
Para mí este es el mundo tradicional, este es el mundo del que venimos. Tienes que hacer bachillerato para luego ir a la PAU, para luego ir a una carrera, para luego ir a al doctorado, para luego hacerte funcionario, para luego después de funcionario estás esperando la pensión y justo te dan la pensión. Tienes que meterte en los viajes del INSERSO y creo que después de los viajes del INSERSO ya no hay nada más.  
O sea, es un mundo planificado el mundo del que venimos.  
En cambio, y lo hilo con lo de antes, de para mí lo importante ya no es tanto dónde voy a estar dentro de 10 años, sino para mí lo importante es converger en un momento en el cual yo ahora.  
La familia.  
Mi profesión que cada vez tengo menos claro a qué me dedico. O sea, estoy en la junta directiva de Alastria y a ti te pasa lo mismo, o sea, pero sí que tengo claro que cada vez aporto más valor y tengo claro que el valor que estoy aportando con toda la tecnología que estoy viendo es poquito en comparación con el valor que voy a aportar.  
Pues para mí.  
Ahora.  
La gestión no tiene que ver tanto con hacerme un plan a 20 años, que antes los planes a 20 años eran necesarios. Necesitabas montar una fábrica y para la fábrica después, ahora ya no son lo importante, ya no son las fábricas. Ahora lo importante son las plataformas. Para mí, ahora lo importante es el lugar del diagrama de Gantt.  
Es porque no tienes una fábrica, sí, pero te hablo como individuo para mí lo importante ahora.  
Ojo con lo que dice, toma.  
Claro, a ver, pero la plataforma yo no la quiero. Yo no quiero ser el dueño de la plataforma. Yo sé que la plataforma está ahí y gracias a la plataforma puedo gestionar mis recursos de la forma más eficiente posible. Para mí lo importante es yo tener.  
Es una metáfora, porque una caja de herramientas pesa yo tener una caja de herramientas para según la cual, si tú me preguntas por algo o tú tienes una necesidad determinada, estoy pensando primero en design thinking, fusionándolo con el.  
Con el Lean, o sea, estoy fusionando design thinking con Lean, o sea, design es pensar en las necesidades del cliente. Lean es tener el prototipo cuanto antes disponible, pues si tú tienes una caja de herramientas que te permite a ver qué necesitas, pues mira con Antigravity te hago esta web, esta web te parece que está bien, no sé qué.  
¿Y si tú me dices que sí a ese design con el mínimo producto viable, qué puede pensar el cliente? Y dice, esto es una página web que la hago yo.  
¿Entonces qué hay que decirle?  
Si tú crees que la puedes hacer tú, hazlo tú.  
Es que 5 horas de clase, como las estás dando, las puede hacer cualquier persona.  
Vale, lo puede hacer cualquier persona, hazlo tú.  
Es que la música, según la estás tocando, lo puede hacer cualquier persona. Sí, hazlo tú.  
Créeme que al final 5 horas de clase, como las estudiando, no las puede hacer cualquier persona o al menos necesita un poco de entrenamiento. Si alguien quiere hacer esto, por favor que me llame antes.  
Y gratis le asesoro y le digo cómo hacerlo porque no es fácil.  
Al final, el agile, el agile necesita bueno, el design thinking necesita de la experiencia, porque detectar las necesidades de la gente tampoco es fácil.  
Luego el link necesita de experiencia, porque esa experiencia y ese conocimiento tampoco es fácil, necesita de experiencia y necesita de conocimiento. Y luego la parte de la agile, que es la producción, o sea, yo este curso.  
Lo he diseñado casi todo slim, casi todo slim, porque el producto lo estoy redefiniendo a cada momento y además todos los pasitos son relativamente sencillos.  
Pero luego la construcción se puede considerar agile y luego ya por acabar, con que luego lo vamos a ver con un poquito más de detalle, por acabar con el Scrum.  
Estamos en un sprint constante.  
No todas, afortunadamente las semanas de mi vida son así. Lo que pasa es que esta semana yo estoy aprendiendo y espero que vosotros estéis aprendiendo conmigo. Yo no sabía muchas de las cosas al principio de esta semana y en este sprint estoy hablando de metodologías ágiles. El sprint es una parte importante de las metodologías ágiles. ¿Por qué? Porque si tú eres flexible, nunca curras.  
En cambio, cuando tienes un cliente encima que te pide que hagas algo, cualquiera que haya trabajado como autónomo sabe de lo que estoy hablando, tienes a alguien encima y que merece la pena. Es una metáfora lo de las herramientas, merece la pena tener.  
Una caja de herramientas flexible, que si me pides una página web, espera que te hago la que si me pides es que no tengo gestionado lo de los la lista de tal. Pues mira, te hago en 2 minutos una página web que mañana vamos a ver. Acabo de pensar en el jefe, te he dicho mañana vamos a ver.  
Y voy a abrir, que es una, o sea, lo que me acaba de decir GPT de que cada vez que digo que mañana vamos a ver, pierdo.  
Mañana vamos a ver.  
A ver, mañana vamos a ver de Google Sticks.  
Stits.  
Stitch de Google. Mañana vamos a ver herramientas de Google, vale, pero estamos hablando de design thinking. Y es que Stitch, mira con Stitch, qué maravilla con Stitch.  
Para design.  
Pinking.  
Y para diseño de webs y para lo que queráis.  
Canvas, buah, me estoy emocionando solo Stitch.  
¿Es como Uniswap, os voy a enseñar Stitch y luego me diréis, y esto de Stitch qué es?  
Y voy a ello.  
Stitch.  
Hola, mola, lo primero que me espera, try now, me voy a registrar, me dice: ¿qué app nativa quieres que diseñemos? Le damos la bienvenida a Stitch. ¿Qué aplicación móvil nativa? Vale, estoy en un curso enseñando design.  
Pinking.  
Lynn.  
Y allá.  
Vale, Stitch.  
Estoy enseñando.  
¿Qué es?  
Stitch y quiero que mis alumnos flipen.  
Quiero que mis alumnos flipe.  
A ver, quiero que mis alumnas flipen.  
Dame la base para una web que desarrolle todo esto, pero estilo web 3.0 a saco.  
Hace poco he dicho que lo de la web 3.0.  
Es un invento para vender humos.  
A ver.  
Los que me están viendo son ingenieros informáticos.  
Sé serio.  
Porfa y que les estalle la.  
Cabeza, esto es ecosistema Google. Podéis usar diferentes modelos, voy a usar el 3 el 3. O sea, si quisierais trabajar más a fondo, pues usar el Thinking 3.1 Pro, pero le doy.  
Acabo de decirle.  
Lo que acabo y os cuento, alguien ha dicho, consumí todos los tokens que tenía para la semana en la aplicación de IA y luego vi las 4 horas del curso a velocidad por 2.  
A ver, me he perdido con tu mensaje.  
Alejandro, consumí todos los toques que tenía en la aplicación de IA y luego vi las 4:00.  
Ah.  
No te preocupes, Alejandro.  
Qué maravilla.  
¿Qué edad tienes, Alejandro?  
Todo lo me parece un epitafio para el curso maravilloso.  
Es que normalmente alguien que nos esté viendo se , pues usa a 52, pues ese mensaje Alejandro.  
Ese mensaje, ese mensaje es de alguien de más de 20 años.  
A ver, no, a ver, tenéis las transcripciones también por esto. . Yo pensaba que tenías que eras mucho más joven al haber hecho este mensaje y al consumir contenidos a velocidad por 2 hay un componente generacional en todo esto. Voy a poner yo también el.  
Hay un componente generacional en todo esto.  
Cuatro, mira aquí rosa.  
Rosa y Chema, a ver, vuelvo a Stitch.  
Mirar qué pasada está trabajando, mirar cómo trabaja.  
Mirar cómo está trabajando.  
Mirar qué pasada.  
¿A ver cómo puedo moverme?  
Aquí la mano.  
¿Veis cómo está trabajando?  
¿Tú conocías a Steve, Diana?  
¿Y si quieres?  
I mean.  
Stitch, a ver, yo mi vida está en beta, este grupo, o sea, esta clase está en beta.  
¿Sabéis lo que es Beta?  
Eso es en modo demo, o sea, es beta.  
A ver, Stitch, ¿qué es simplemente un generador de imágenes? O sea, esto que está creando aquí es una imagen.  
Stitch es un generador de imágenes, pero es más que un generador de imágenes. Stitch también permite esto también es un tablero de canvas. Aquí le podría haber dicho, prepáralo como si fuera un canvas con imágenes tipo post-its y aquí yo puedo gestionar información.  
¿Pero luego qué estoy haciendo aquí?  
Esta es la paleta de estilos para la web, fundamental.  
Esto es una imagen, esto es otra imagen.  
¿Y qué puedo hacer con Stitch?  
Exportar una vez tenga el diseño acabado aquí, me lo puedo llevar a antigravity y con este diseño, mirad, ya lo ha acabado.  
Vale, me lo ha hecho en inglés.  
Me gustaría que estuviera en.  
Español con.  
Colores y contenidos gallegos.  
A ver lo que estoy porque le he dicho eso.  
Porque lo que quiero que veáis es que sobre el prompt inicial estoy ahora redefiniendo el diseño con el prompt que le acabo de hacer. Me dice aquí entendido, voy a adaptar el proyecto para que respire la identidad de Galicia, manteniendo la seriedad técnica para tus alumnos e ingenieros, actualizando contenidos. Traduciré todos los textos al español, integrando conceptos, evolución visual.  
Ajustaré la paleta Obsidian Nébula para incorporar.  
La gente en Dutra.  
Le podéis decir, elimíname lo anterior, coge, copia. O sea, yo lo que estoy haciendo es simplemente que veáis.  
Deconstruyendo el diseño del producto.  
Poco gallego hay.  
¿Veis que hemos quedado un poco anclados?  
A ver.  
No me gusta demasiado ciber. A ver, se pueden hacer cosas con otros estilos diferentes, pero aquí qué quiero que veáis. Estoy diseñando sobre la marcha con una herramienta Stitch de Google. Es una herramienta de diseño.  
Es una herramienta Google. Mañana vamos a ver cómo Google no es que tenga 123 herramientas, Google tiene muchísimas herramientas. Mañana vamos a entrar en Google Labs.  
Stitch, yo creo que tiene, o sea, yo la conozco desde hace 3 cuatro meses, 5 meses, pero Google está sacando herramientas y actualiza las herramientas a una velocidad tremenda.  
¿Y no cómo tienes lo del coche y las lunas?  
O sea, mañana tenemos.  
Hello, Francisco.  
Pues mañana de verdad, GPT cuando me fomo fomo fomo.  
Come on.  
¿Cómo? Pues mañana te enseño, mañana de verdad te enseño el Google Flow y el Google Flow Music.  
Este o también Cloud, el Cloud Design, sí.  
A ver, no sé quién va.  
Luego está Camba, o sea, Camba también, o sea, me refiero.  
Hello!  
Claro, o sea, porque ha sido muchísimo más fluido.  
Laughing thing.  
Hello!  
Quedan, quedan 5 minutos para el descanso, quedan 5 minutos para el descanso.  
A ver esto que estoy generando.  
Esto que he generado son imágenes. Primero me las ha construido en inglés, me lo ha construido aquí en inglés. Esto no son botones, pero insisto, si yo quisiera darle vida a estos botones, por ejemplo, se lo meto a antigravity o.  
Si no queréis descargar antigravity, tenéis también que mañana vamos a ver todas estas cosas. No, cuidado, aquí no le puedes pedir el HTML, conviérteme esto en un HTML. O sea, esta no es la herramienta para hacer el HTML.  
Esto es imágenes. Mira, voy a hacer uno nuevo, que no quiero que, o sea, no quiero que os quedéis.  
No sé cómo crear un nuevo proyecto, cómo puedo crear un nuevo proyecto.  
Perdonad esto que voy a hacer está mal.  
Esto que voy a hacer está mal.  
abierto otro nuevo, vale.  
Aquí esto fue.  
Uno de Naruto que les gustaba Naruto. Esto fue una aplicación web también de otro que les gustaba Naruto y les gustaba Naruto, pero.  
Festinis, a ver, voy a, este es uno nuevo, ¿vale?  
Me encantan los Me encanta la comida.  
Gallegar.  
Hazme un canvas de comida gallega con fotos y cultura para luego jugar con ello. O sea, no quiero que os quedéis con la sensación de que esto solo vale para diseño de páginas web.  
No he puesto perretes, he puesto comida gallega, pero podría haber puesto cualquier otra cosa.  
¿Esto qué hace? ¿Esto qué permite? Crear varias imágenes que vayan alineadas, que unas imágenes estén alineadas con otro. Mira, qué buena elección la gastronomía gallega. Voy a preparar un canvas este que capture la esencia de Galicia, sus productos. Empezaré creando.  
Un sistema de diseño inspirado en los colores de la costa de la tierra gallega. Luego diseñaré varias plantillas, va a quedar de rechupete.  
En algún momento le he debido decir o él entiende que por defecto todo lo que estoy diseñando es para móvil.  
Si os fijáis, ahí hay una especie de scroll vertical.  
Antes no, sí, pues le estoy dando aplicación.  
Pero que lo que os quiero decir es.  
Bueno, y SAP, a Miguel Ángel le preguntamos, a ver, digo a Miguel Ángel si le dan la gana de contestarme, le preguntamos que qué pasa con SAP.  
Estás bueno, Miguel Ángel aparecerá en algún momento.  
Hemos hablado de Uniswap, nos vamos a ir al descanso a las 12:00, seguimos.  
Y a las 12:00 mi intención es de 12 a una si está Miguel Ángel con Miguel Ángel.  
Luego de 12 a una, si está Miguel Ángel con Miguel Ángel y la última hora, si sale algún tema con Miguel Ángel, estamos esa última hora trabajándola. Tengo en mi cabeza hablaros un poquito de cuántica.  
Pero a ver, de cuántica podríamos estar si necesitara horas de relleno.  
De cuántica podemos estar hablando de Einstein de la ecuación de onda.  
De cuántica os tengo que decir 2 cosas, 2 ideas básicas que ahora que si no os las digo hoy os las digo mañana tipo Uniswap. ¿Entiendes, Juan, que os quería presentar Uniswap porque es la misma inquietud que tenías tú antes de quién va a hacer esto? Pues va a hacer esto el que tenga pasión, el que le apetezca. Si vosotros, cualquiera de los que nos estáis escuchando.  
Os apetece explotar una oportunidad de negocio y ganar pasta con ello, pues estáis en el momento óptimo de vuestra vida.  
El poder de la convergencia entre lo que sea que estéis haciendo.  
Y todo lo que te ofrece la tecnología y el mundo.  
Es brutal porque esto estamos, estamos en el lejano oeste. Cuando llegaba la gente dice, ¿y qué terreno puedo tener? Pues lo que tú seas capaz de coger es tu terreno. Descansamos y nos vemos a las 12:00.  
Tenemos 30 minutos de descanso, salvo Alejandro, que solo tiene 15 minutos de descanso.  
Porque me vea por 2 es.  
No, Alejandro, que era perfecto, menos mal que tarde. O sea, solo tengo obsesión con una cosa y ese era el cuidado. Sí, fenomenal.  
Perfecto.  
Jesus.
## Parte 2
2 de julio de 2026, 12:09a.m.

1 h 53 min 3 s

En resumen, ayer estuve hablando de arquitecturas de datos y el negocio en la nube. Estuve hablando de data lakes, data de warehouse y lakehouses y data mesh. Ayer también estuve hablando de Edge Computing y o T y la física de la latencia. Y entre ayer y hoy he estado hablando de ayer mucho blockchain.  
Hasta Bitcoin más o menos y smart contracts un poquito. Hoy Ethereum y ha enseñado Uniswap de Alastria. Les he dicho que existe, pero no les he querido dar más información. Me han preguntado por web 3 y les he dicho que eso es un algo de vendehumos. Tú seguro que de web 3 puedes hablarles un poquito.  
Y luego ayer también estuve hablando de pone aquí soberanía digital y les enseñé los clones con una aplicación que puede ser brutal, que te lo pregunté en directo, que es por el tema del Alzheimer. Y para acabar, perfecto, y para acabar de darte contexto, hoy en teoría, según.  
El plan del curso oficial, que estoy hablando de ello, teníamos que hablar de metodologías, design thinking, lean, metodologías ágiles, scrum, que si los sprints y todo esto.  
I.  
Bueno, dicho, dicho lo cual, dicho lo cual, perdóname y es la última vez que te interrumpo. Dicho lo cual, realmente lo que he hecho con ellos es enseñarles antigravity y antigravity y obsidian. Vale, voy, perfecto.  
Pregunta, eran 16 personas.  
Ajit the days.  
¿Alguien más o no hay nadie más? Sí, Juan, Juan, Juan.  
Hola Juan, me gustaría hablar con la que pueda hablar que no sea. Pues Juan.  
Juan, ponte en la cámara y.  
Mira la carita y me y me cuentas. ¿Qué has aprendido esta semana, hijo de tu?  
A ver, sí, me parece bien la sí, Juan, a ver, bueno, ¿hay algún voluntario en el grupo Cámaras? No sé si se pueden enchufar, pero dicho lo cual, el .  
Vale, no es herramientas, tengo la segunda para el 2.  
Para ir aquí al dicho antesora.  
¿Armando, puedes hablar o Alejandro? Digo, Chema, no te pregunto porque no puedes hablar.  
¿O Juan, tú has estado todo el curso?  
Pause me.  
A ver, os os doy contexto de Miguel Ángel. Miguel Ángel y yo nos conocemos bien y lo que necesita es salir del conocimiento que tiene de mí, porque como nos conocemos bien y además le gusta tener las cosas controladas. Y yo lo que quiero es que te sientas cómodo cuanto antes diga.  
Digas lo que piensas que no tengo ni idea de lo que estoy explicando, mejor y les enseñes tú el verdadero conocimiento de Apple. No les he dicho que tienes un test, les he dicho que tienes un que tienes un bicharraco enorme, el ese, el Mac Studio.  
A ver, venga, dice por aquí, en lugar de hacer la típica formulación de diapositivas de la diapositiva, hemos ido aprendiendo, conociéndonos, haciendo uso de herramientas bastante más actual.  
Está bueno, digamos que Luis lo que ha utilizado ha sido su propio proceso.  
personal de cara a preparar las lecciones y qué herramientas utiliza para ir resvelando un poco en ese proceso. ¿Cuáles son las herramientas? De un momento yo le dije que me parecía que era bastante difícil contra o no porque iba más con la sala de de Google y así es.  
Y yo utilizo el más cloud, estaba viendo realmente las amanitas que nos estaba brindando, si era si era mejor o era peor.  
Hablamos un poco también de que espera y que quiero ver el tío que estaba mirando, que estaba mirando la pantalla.  
Y te quiero ver, quién ha dicho que es que es propio Martiño, Juan, el propio Juan.  
Ay, perfecto, pero quién es Juan, sí.  
¿Y tú crees que Luises al día del profe?  
Por esa sensación, sí, así soy.  
Entonces, ahí utilizó ese momento para enseñarnos Gravity. A lo cual yo le contesté que sabía de Gravity, pero que llegaba un momento que me llegaba como tal cúmulo de herramientas que en mi vida ya tengo que decidirme por algunas y profundizar en algunas y dejar otras.  
Bien porque me imagino que como el resto de la gente no nos da la vida para así, viendo cómo iba a que Gravity me ha parecido muy interesante. Puede que contra Cloud lo que tenga es que sea más económica, que lo mejor.  
Y después la otra herramienta fue esta que es morada, Obsidian, Obsidian también la conocía de oídas.  
También pregunté si posible podría sustituir a lo mejor a Drive en la nube. Me parece que es como una especie de contenedor.  
Nos hizo saber que yo no lo sabía, sabía que utilizaba los archivos ML, pero no sabía la conveniencia de utilizarlos, ya que parece ser que el proceso va ahí a más económico en cuatro tokens y más rápido con sus archivos.  
¿Qué más cosas nos enseñó? Obsidian tiene buena pinta, pero bueno, mire Obsidian, saltó a la nube. La nube nos habló de su ordenador, que está en casa. Entonces le pregunté también que era exactamente el ordenador en casa, si era un servidor, si era un contenedor para guardar cosas.  
¿O cómo lo utilizaba? Entonces, poco a poco ahí, pues acaba hablando de la nube, acaba hablando de herramientas y todo el proceso. ¿Qué te ha dicho de su ordenador? Pues ahí es cuando hemos entrado al propio Gemini a preguntarle cómo pensaba el propio Luis su ordenador. Y ahí es cuando llegamos.  
A la pregunta que le hice después de definirlo.  
Era que tenía la sensación de que lo explicaba como si fuese alguien.  
Era como un registro permanente de lo que todo estaba haciendo y me preguntaba entonces por la finalidad de eso y ahí fue cuando con el.  
Sí, y luego te cuento, Miguel Ángel, tengo todas las transcripciones delante y le puedo preguntar lo que quieras que sea las transcripciones de las clases. Y luego también, mientras tú vas hablando, lo que voy a hacer es la primera parte, la transcripción de la primera parte, la voy a subir también a Google Notebook LM y voy a procesar.  
De forma temporal esa transcripción para que vean en directo los alumnos cómo gestiono lo de las transcripciones.  
Solo hablar, no había tocado. y.  
What?  
Así un poco hace estas cosas, no sé si los demás.  
Sí, si me contáis algo más, me voy bien.  
¿A ver, qué más quieres saber, Miguel Ángel?  
bueno, que te cuenten ellos.  
Y por algún motivo, mi voz me mueve.  
Es que si me parezco retrasado cuando tienes el eco ya es la bomba.  
Vale, y ahora porque a lo mejor era porque tenía.  
Pues yo quiero que si ahora ya no me vuelve, no sigue volviendome, sigo volviendome.  
Vale, entonces por estar cómodos, por estar hablando.  
Me muteo, mutéame.  
So.  
No mutéame a mí, mutéame a mí, quédate tú con el micrófono.  
Eso es, si es que está entrando por la porfa o no, eso es.  
Miguel Ángel.  
I'm sorry.  
Sigo escuchándome de fondo, aguanto, aguanto, no pasa nada, vale.  
¿Qué voy a hacer?  
Después, ahora voy, ahora lo que habéis hecho ha sido perfecto, lo que sea que habrá sido perfecto.  
No os voy a escuchar por fin, por el por el chat, ¿vale?  
Voy a hacer lo que me dé la gana, como haces, vale, entonces.  
¿Y lo que yo he aprendido con el yo he mi vida con el vale?  
Who is this?  
Al día que para mí no es un experto en tecnología.  
Pero que me ha enseñado que toda esta.  
Espérate, que habla de y ¿quién está escribiendo? Espérate, soy yo, hablo de lo que tú quieres, Luis, voy a hablar de lo que me da. punto, vale, para espero que acabéis diciendo menos mal que ha habido este tipo  un poco yo.  
Inténtalo, a ver que dice este.  
¿Y qué tal hoy con qué?  
Vosotros a mí con con Juan, vale, lo que tú quieras, yo no voy a hablar de lo que tú quieras.  
Es parece muy guay, chicos, que si yo voy a decir lo que él quiera que de la clase.  
¿Y ahí? ¿Qué os parece? Diré lo que me de la gana. Vale, dejadme de por decir con texto con texto. Luis, Luis sabe de inteligencia y efectividad? No, ni idea. ¿Sabe la tecnología? No, ni idea.  
Sabe, they will need yes us.  
Para conseguir resultados absolutamente extraordinarios, sí, un huevo.  
Vale, entonces vamos por partes. Jesús me has dicho que eras verdad, de que pone Martiño en su ordenador, dime si o no, que te voy a bajar. Juan, Juan, Juan, Juan.  
Ahora mismo.  
cambiar el paradigma, ya no tenemos que hacer como antes. Unos había Excel, otros había Word Perfect, otros había Word. Ya no hay que aprender a usar herramientas, hay que aprender.  
Cambiar la forma en la que en la que usábamos. Me pone súper nervioso Luis, porque me ha puesto una pantalla y yo no hago más que leer un tío, pero no pasa y es dificilísimo estar haciendo eso. Luis, por fin deja de compartir la pantalla.  
Te lo pido, por favor, gracias Luis.  
Venga, estupendo.  
Ehm.  
Ya el paradigma también esto de la inteligencia artificial que tiene ahora.  
Esto lo presentaron el 20 de noviembre del año 22. Vale, actuaba era generativa, salió chatGPT, vive todo esto, vale.  
Yo.  
3 años y 8 meses y absolutamente nadie sabe de nada.  
Todo lo que os cuenten, todas las herramientas, no sé si que valen para 15 minutos. Eso es lo que cambia fundamentalmente el momento actual.  
Que ha salido de la herramienta que es muy buena, el mes que viene ya no la usa. Es que ha salido una nueva forma de verlo, cambia radicalmente. Os enseño Luis, decirle sí o no, por favor, lo de la bandera de la Unión sí o no, que os enseñó ayer que usé completo. Os lo enseñó.  
Venga, que hay efectiva por fin, por el parte hemos visto ahí de Chema, vale, bueno, estoy.  
Y.  
Es lo que me gustaría ver en detalle, dice, dice, bueno, pues yo si queréis, os enseño el mío.  
Y ese cumpleaños como el de Luis, pero bien hecho.  
Vale, él lo ha conseguido hacer.  
Prácticamente programándose sin saber programar. Para mí eso es el mayor superpoder de Luis me ha dado momento.  
Es decir, si este tío que no tiene idea del programa está haciendo esto, es que con un poquitín de concepto de programación puedes hacer cualquier cosa. Veo que la gente se después, cosa que me encanta, creo que con la pantalla del.  
Del fondo, vale, entonces.  
¿Cuántos de los que estáis aquí escribidme? Me da igual que sea por el chat de la reunión o por el.  
¿Sabéis programar? Decidme, yo soy programado.  
Vale, son ingenieros informáticos de  madre, muy bien. La pregunta que he hecho no sé si sois informando, vale, yo no.  
50 pobres el que dice Hernando. Vale, venga, cojonido. Pobresel no es ni más ni menos que un sistema de línea de comando.  
Vale, es decir, tú sabes usar la copa online, Armando, cojonudo, pero un programador, programador y sentido.  
Que día actual no es programar, pero para mí vale, me lo estoy trabajando, vale.  
A mí no es lo que me ha abierto en esto en estos últimos 3 años es la posibilidad de ver que en cualquiera puede ser programada.  
Vale, Sara, dice que si es muy básica, no me dedicaba a ellos, vale.  
El pion de Luis no es ni más ni menos.  
Es un sistema de programación basado.  
¿En LLM es cuál?  
Este lento.  
Y que venga, da igual usar, usar Gemini, usar Codex de OpenAI, usar da exactamente igual Group con K.  
¿Que le ha permitido construirse un programa?  
Vale, yo ahora les voy a compartir mi banda, les voy a enseñar.  
No está, no es tan importante en el que yo estoy, está en otro sitio. Vale, os voy a enseñar mi segundo.  
It's a.  
Pues la explicación de lo que Luis hizo con su hombre y le vais a ver si funciona, vale, oiga.  
No puedo compartir, habilitadme compartir Luis porfi con quien estés que me abrir de comprar.  
Vale, por ahí seguirme diciendo, pues así por el por el grupo, aunque yo me quedé callado, quiero ser el tipo de review, vale, para que me lo veáis todo lo que diciendo.  
Diciendo cosas y podamos ir, es como yo me, como yo me siento, como el.  
Perdón, que transcrito.  
Vale.  
Sí, tengo todo mi secumbre en Toro Apple, sí, pero da igual.  
Sí, pero de acuerdo, estoy intentando comprar.  
Un servidor, vale, no dice mi servidor vale 200 pagos si tú quieres que usar.  
Un modelo de IA local.  
Ahora mismo por menos de 5000 para el mes de compra.  
Vale, porque la diferencia es.  
Pero quiero ponerla ideal o la quiero usar.  
Por un servicio de la gente.  
Nos hacen creer que tú, para lanzar una ella con cierta velocidad, necesitas tener un servicio y en mentir yo, mi servidor.  
Usa, de hecho, en cuanto me admitéis que todavía no me habéis salido y todo, yo os voy a enseñar aquí funcionando en mi ordenador.  
Vale, en el descuento os voy a enseñar y ya funcionando en mi yo no es otro ordenador.  
De pues de que está en mi casa, en este caso, vale, vale, entonces, pero eso es de una clase de la, y este uso los conceptos, o sea, si tú ahí alguien se ha aplicado alguna vez lo que es una nube. Una nube es el ordenador del otro, tan básico como eso.  
Un ordenador que no gestionas tú, sino que lo gestiona otro. Luis está ya poniéndose los medios porque quiere interrumpirme, pero como si me interrumpe, lleve eco.  
Vale, Juan, no se ve en la pantalla.  
Ya estamos con ellos, porque los moderadores no pueden haber, vale, me dicen que se ve a Luis, pero está en su pantalla, dice, claro.  
Ya se ha activado, ya está, ya ya van de activar compartir. Oye, veo que tenéis en quién controla el team, Luis.  
Yo no hablo, pero si hablo, no me escucha.  
Sí, tengo control de la de la pantalla apagando.  
Hola.  
¿Te gustaremos?  
¿Veis a mi pantalla? ¿La veis o no la veis chicos? Sí, la ve, sí, lo de la.  
Sí.  
Luis.  
La pantalla de Miguel Ángel no, o sea, yo debería ver en mi pantalla. Vale, ahora sí, vale, este es mi Mac, mi portal, vale, sí.  
Y yo aquí os enseño un poco de la configuración del MAC.  
El sistema tengo un Mac M 2.  
Vale, un M 2, sabéis yo que soy M 2, un corto C que tiene ya.  
¿Cuatro o 5 años y puedo ejecutarías? ¿Por qué? Porque tengo 24 gigas de RAM.  
De memoria unificada. ¿Por qué no has cambiado el portátil, Miguel Ángel? Todavía porque tengo otro ordenador que es donde yo ejecuto.  
Las cosas, vale, ese ordenador le tengo aquí, me puedo conectar.  
A él desde aquí, yo hice una cosa que se llama Jam Dexton, que es, oye, salta a otro sitio y tengo aquí mi John. Vale, voy a conectarme al micron, lo vais a ver, ese es mi Kron, vale, está con Yubai, super, supercool y demás, me voy a conectar.  
En este ya que tengo aquí ejecutando cosas con el o sea, tengo otras cositas. Os lo voy a enseñar, ¿vale?  
Yeah.  
¿Qué tiene este ordenador? Lo mismo que yo antes os lo enseño. Esto ya tiene 100 gigas de memoria unificada con un M 3 Ultra.  
Vale, si preguntáis más o menos.  
¿Cuánto cuesta este ordenador que lo podemos hacer? Vale, conjo y le digo.  
A cualquiera de mis guías, de mis flores, oye, ¿y esto cuánto dices que vale aquí y le dices, oye, cuánto vale esto?  
Vale, y se lo preguntas, él no va a contestar.  
Como contesta, decía Jesús, a mí me gustaba mucho Antrofi, que a mí también como la madre que lo parió.  
pero me gustaba es lo que dice yo pagué 5050  
Es lo que pagué, ahora ya hasta un poquito de tiempo y me dice más o menos 40700.  
Vale más o menos 4700 de segunda mano, igual podía comprar por 4500.  
Vale, pero tienes una play que dice, ¿estás pensando en venderlo o curiosidad?  
Vale, entonces iba a decir, no quiero venderlos.  
Quiero que me uses, que me busques.  
Uno con más memoria para comprarlo.  
Igual de potente, vale, es una cosa que no me ha hecho falta darle contexto.  
Vale, como no os estoy viendo, voy a mirar el.  
El WhatsApp, vale, porque está bien poquito.  
¿Sabéis que no me ha hecho falta de contexto, ni le he contado quién soy, ni no sé qué ni no sé cuánto? Eso os pasa a vosotros cuando vais a chat GNT.  
Vale.  
Como memoria unificada, tal ahí viene ya la cosa, el video quiero que es el que me gustaría comprarle.  
O 14674.  
¿Por qué? Porque voy a poder ejecutar modelos de inteligencia artificial en local. ¿Quién ha ejecutado alguna vez?  
Nada, es que en este conoce porque le han dado la opción de guardar una  de información tuya en un marcown local.  
Vale, por eso te conoce, pero no te conoce como conoce a Luis cuplón o me conoce a mí en mí.  
Vale, ¿y por qué? Porque el contexto que tiene el clon de Luis o que tiene a mí es distinto. Yo te voy a enseñar mi auxiliar, ¿qué es un auxiliar? Un visor de contexto. No es ni más ni menos que eso, yo voy a abrir aquí mi clon.  
Ese es mi micro, está aquí dentro, patrón Storage y esto es.  
Vale, lo que tú puedes ver.  
Mi clan, ahí está todo eso, esa es la información que tiene mi clan aquí.  
Tengo la información que le he ido cargando, que es lo que el deseo se enseñó ayer. Vale, es algo parecido. Tengo aquí la información, tengo el se compray con un sistema que Luis me enseñó a hacer sistema donde está el sistema operativo que yo le he diseñado familia.  
I for you con mi empresa, patrimonio que es donde hago la renta, ideas que es donde apunto tal, entidades, ocio, personas. Yo le he hecho.  
Vale, eso ya es la empresa, las empresas, yo no sé que todo esto lo veis.  
Hi.  
Dice sobre el falta movimiento para ser una célula de vida. Si yo le presento a mí, selecciono una célula y la muevo.  
¿Tengo una célula viva, lo veis, lo veis que se mueve?  
Vale, lenguajes, aquí tengo no sé cuánto. ¿Por qué? Porque es mi contexto.  
Este es mi contexto, vale, luego yo le hago 3 capas. ¿Qué 3 capas le hago?  
Paco parcero, el sistema, perdón, la IA, lo que vosotros consideráis que es una IA.  
Gemina, no sé qué, la capa uno que es esto, el bauling, la información, la capa 2.  
Vale, que eso es una cosa que yo hago, se digamos subbaulis. Cuando unbaulis tiene mucho, mucho, mucho contexto, yo me lo llevo aquí. Bueno, entonces teníamos Charles Wikis, que es los proyectos grandes, matriculada, que es un proyecto de mi hijo, que es doc, que es un proyecto de mi empresa y es público, que es una cosa que estoy preparando una denuncia penal.  
Porque esta gente está amañando licitaciones del sector público y yo le doy vida propia, pero en licencia todo lo demás lo hago con carga. Cargafors es un sistema que se conecta a mi correo electrónico, a mi WhatsApp, a la información y luego se lo carga.  
¿Al bren para qué? Para tener todo esto, pero lo cual si yo voy a hacer con un poquito.  
A lo que está cargando, pues vais a ver cosas como, por ejemplo, ficha Óscar Tesla, ficha Mador Sánchez, ficha Albago García, el comercial de Telefónica, ficha de José Flores, ficha de Ramiro Fernández, ficha de Eduardo Oria, ficha de no sé quién.  
Cuando él va poniendo todo esto, ¿vale? Ficha esperanza de contratación, ficha de... Alejo Vendejo, que es un amigo de mi hijo, ficha de Pablo Rivas, que es un amigo común que tenemos Luis y yo, ficha de... de la interventoral de Messi, ficha de Guillermo, ficha de...  
Alejandro Vera, ficha de Juanjo, digo es economista. ¿Lo veis? Vale, pues si me aparto con personas que yo estoy cargando, lo veis que está aquí alrededor para porque mi proceso actual y me voy a mi clon.  
Vengo aquí y le digo, oye, cosas que estás haciendo.  
Get it.  
El automejora de no sé cuánto el sistema de no sé cuánto y le puedo preguntar.  
Alright, or you process here, or yeah?  
¿En qué fase estamos ahora mismo en el proceso de mejora del clon?  
Bien, aquí ya sí que no vale lo que yo te escucho, gente, que se va a poner a pensar ahora mismo.  
Y va a deciros, dejadme comprobar el los cantos antes de contestar y se va a poner a buscar. Mi clon tiene aproximadamente un tema de información.  
Vale, y se va a ir a buscar a lo que ayer hicimos el día 2 del 7. ¿Lo veis? Y dice, voy a mirar que un servicio de auto mejora.  
Por eso es mejor el mío que el suyo. El suyo está gordo. Favel lo han puesto esta noche.  
Porque tengo el límite de 5 horas a un 70%.  
All right.  
¿Me dice, oye, qué estás haciendo?  
Una cola de la gente y no sé qué y no sé cuánto. Vale, esta mañana preducaba que si hemos probado fabel, yo acabo de liarla, vale, no debería haber usado para esta chorra.  
el modelo de la inteligencia artificial más avanzado del mundo, no debería estar usándolo para esto. Vale, pero bueno, pues. Está doparado. Vale, usando, entonces me acaba de decir. Pases un tren demostrado con mejora Dimas, la última que tocó fue.  
El 21 de 6 con la US 34 y está haciendo, está haciendo una cola de automejora, clases nuevas, nocturnos, pendiente en este carril tal tal. Vale, ¿qué haces? Separas los inteligencias artificiales del contacto.  
os voy a intentar dar con una foto. Os voy a enseñar la foto del programa que es lo que yo estoy diseñando desde que Luis May me inspiró para hacerlo.  
Vale, quiero este normal, quiero un interés.  
Lo que quiero buscar en mi panel, quiero buscar en mi.  
En mi clon, vale, lo animal PBS.  
Vale, ecosistema, una arquitectura de un pion publicidad. Lo que yo estoy haciendo se lo expliqué a él y le dije: tengo un estudio que me he comprado y quiero hacer un sistema integrador con toda mi digital gobernada por una idea.  
¿Qué es lo que hago? Tengo un mal que estudio. Esto es la jerarquía de agencias que estoy diseñando.  
Vale un grupo para mi empresa, un grupo para mi familia y un grupo para mi hijo.  
Vale, como lo hago, por aquí sale Garvía que está es un retrasado que me cuenta que debía hacer algo parecido, pero lo que estoy haciendo es.  
Uno, memoria de trabajo, índices ultraligénos, que me cargado y tal.  
Vale, obsidia, coin, leyes inteligentes, intama 3.  
memoria persistente.  
Es lo que va a ir haciendo que esto funcione.  
Señores, no sigo, quiero que hablemos 15 minutos, quiero que me preguntéis dudas. Yo llevo trabajando en esto cuatro meses, lo hicieron 1 año y cuatro meses en el suyo, pero que el mío es increíblemente mejor que el suyo. Vale, que os lo voy a enseñar, os lo voy a enseñar mío es.  
El de Luis es el del Pemu y el niño es el de vale, y el niño es el que lo mega petartó.  
Vale, voy a dejar de compartir.  
Yeah.  
Any nice course.  
Quiero que digáis cosas, quiero.  
In the context.  
¿Habéis visto de qué va esto, cómo va?  
E.  
De las de las cosas y que simplemente hablemos.  
Somos capaces Luis, yo o Luis y yo de hacer esto y de dar una clase. No, somos exactamente igual vosotros, gente que está aprendiendo.  
Vale, yo me gasto un dineral en visión. Luis dice, no, mi ordenador de 200 pavos ya ya.  
Pero tienes que tomar 2 opciones, local o nube. Cada cosa que tú vas a la nube no estudia.  
es de Samanda, de Darío, o del Chino, pero aún así, yo tomo la decisión que no te oigo Jesús.  
No te ojo, no te oigo, no te oigo por algún motivo creo que me han para quitar el eco que me han quitado el error ya.  
Hi.  
Es una respuesta soberanía.  
Yeah.  
Toda la información no tiene un portaforme, o sea, yo lo veo de la o sea.  
Ahora.  
Pues porque yo ahora mismo me manejo por carpetas y me dejo.  
Quiero tener toda una empresa que esté informado de absolutamente todo, pero.  
Que llamamos a hacer costillas que se trata, basta totalmente.  
Gobierno de Estados.  
Cuando le meto las manos da el rollo de esta factura y dice, tienes algo más que mi mujer.  
Que levanten la mano los políticos en esta sala.  
¿Hay algún político que me decirme que sí,?  
Yo creo que no, no, nadie.  
¿Pues ¿Conocéis algún político o algún amigo?  
I know with the world.  
Sí, sí, sí.  
Cuando veáis un político de mi party, lo insultáis.  
No por corruptos, ni por lo de Ávalos, ni por lo de la Secretaría de Zapatero, ni sé, sino por inviertos, por incompetentes, por dejarte en Europa.  
No haya un punto modelo decente.  
¿Qué ministral existe? Y es francés, ministral es una porquería.  
El modelo 38 del mundo.  
Show us the return on the number.  
A partir de aquí yo me descargo los modelos chinos.  
Y cuando no quiero dar esa información en el que yo este ejecuto, tiene mal estudio.  
Right.  
¿Tú has dicho, estás usando el profit?  
Para construir el sistema.  
A veces suplico el SAT temporal de libertad.  
Vale, sí, y yo y yo también. Sí, pero esta temporada es muy importante, sí. ¿Y en qué podemos decir está?  
Sí.  
No, en un servidor en Estados Unidos.  
Es Donald.  
Ya he explicado que van a coger toda la información.  
Los chinos la cogen, los americanos la cogen, la única forma que tienes de que sea tuyo.  
Es hacer lo que he hecho yo, gastarte 5500 pavos y ejecutarlo en un modelo local.  
Porque no sale de ahí.  
La capa sigue siendo la capa superior o o a gente que está dominando todo con la IE que estás utilizando. Estoy de acuerdo. Tiene exceso.  
Sí.  
Sí, no puedo esperar.  
Espera, os vuelvo a compartir la pantalla.  
¿Sabéis lo que es esto o llama?  
Sí, modelo local, es una nube local.  
Este es muy portátil, el pequeño, el de 24 gigas.  
Hola.  
Main ideas.  
¿Y qué modelo es el Gunas?  
Se va a poner mi para ir de calor.  
Vale, si yo lo tengo por debajo.  
Vale, ahora mismo está levantando un modelo local, una inteligencia artificial local en mi ordenador.  
Vale, ya lo veis que tarda local porque es muy importántil local.  
Vale, estoy juntando Jemma Guayo, que Jemma Guayo, un modelo de Google que yo ejecuto en local, tengo otros.  
Pues 3.6 que es uno chino, pues 3.5 que es otro chino, Nemotron, que es otro americano, Minimax que es otro chino.  
Vale, el local veis lo que tarda.  
¿Sabes por qué tarda? Porque lo está ejutando muy importante.  
Vale, si quieres que no salga, lo puedes rematar.  
Vale, como yo, mi portátil, solo vale 3000 pavos o 2500 pavos y tiene 4 años, otra más esto, es que darla, te jodes.  
Si tú quieres.  
Este es un camino local jueves.  
A ver.  
¿Pero todo lo demás se lo estás regalando a los americanos o a los chinos? ¿Lo es mi portátil, verdad? Es lo que tarda.  
Ahora voy a hacer una cosa, me voy a resaltar de mi portátil.  
Al más que estudio que tengo en casa.  
A ver, déjale llamarme ya, ya que le hemos dicho que tal, déjale que acabe.  
Yeah.  
What is that local?  
Vale, ahora vuelvo, voy a coger esto y dejarle que acabe.  
Y voy a ir mientras está este a mi clon, ¿os acordáis que está aquí en el clon, no? Ahora ya no llamo a ChatGPT, ahora ya no llamo a Cloud, ahora voy a llamar al Oyama.  
Y tengo en el estudio la misma operación.  
Hola, ¿quién eres y qué modelo ejecutas? Como este manecito pintado, pues ya veréis que va más fluyendo, lo veis.  
You know.  
Hola, soy un pueblo de la mejor que antes entrenaba por Google. Vale, dice aquí este, una que tengo yo aquí es a bueno, mal que tengo, que tengo un yema. Vale, que le he llamado tal, vale, le voy a decir a cuenta.  
Otra vez, hola, ¿quién eres y que me lo preguntas?  
Juan, dile que tiene preguntas, que tiene preguntas tanto en que tiene preguntas en WhatsApp y luego lo de Carpati. Sí, Miguel Ángel.  
Tienes 2 preguntas en WhatsApp y luego yo he pasado un enlace de Carpati de cómo te puedes construir tu secon brain. Una de las preguntas de WhatsApp no se ve. Te preguntan por el tamaño del contexto que dijiste que es un terabyte. Yo he añadido como descripción gráfica.  
Ya a ver, yo he añadido que en ese terabyte está todo el porno que consumes y luego te preguntan otra técnica por la V de RAM y lo de Carpati. Luego, Chema, tendría muchas preguntas también, digo, échale un ojo a WhatsApp.  
Escribí muchísimo. ¿Cuánto jugar de contexto? No es mi contexto, es el contexto del modelo. Yo tengo mi, yo tengo 5 teras en mi Mac Studio.  
La tiene pequeñita.  
Esta manera se puede almacenar el contexto de los grandes, eso se llama capacidad, pero no es.  
¿No te he escuchado Luis, están, te acuerdas de chiste? No digo que a ver, está, o sea, estás confundiendo capacidad de la máquina con la capacidad que tiene tu clon o toda la es una biblioteca. Dentro de la biblioteca puedes tener todos los libros que quieras.  
Pero luego el contexto que usa el agente depende de la consulta que tú le hagas, que de esto vamos a hablar mañana con más detalle. O sea, aquí no te preocupes, no es necesario que entres en detalles técnicos. Vale.  
Pórtame. Juan, voy a empezar a hablar sin moverlo así, tocó, porque no me veo que me muevo la bomba. Mejor, por eso, para que no me vea, hablo así, no, no.  
No me correctes aproximadamente.  
Lo que ocupa los Lo que ocupan los 3 libros de Harry Potter juntos.  
O cuatro años de Jaime porque más.  
Vale.  
Entonces cuál es el tamaño de mi contexto el que yo le dé al clon en cada interacción como máximo un millón de toques porque si no estás haciendo el café pero voy más allá lo que dicen los últimos estudios de tecnología de Inteligencia artificial  
es que cuando tú le das a cada una de las interacciones más de un 20% de la capacidad máxima es una del tamaño máximo del modelo estás jodiendo la conversación es decir nunca deberías usar más de  
200.000 tokens por time.  
Vale, entonces a esa pregunta la doy por , la doy por contestada. Continúo con la de la de la de la me falta la vida.  
¿Que me falta todavía estaba por la tela se refiere? Vale, me pongo Juan, lo que se refiere es pasitos cortos.  
En tu interacción con la máquina, que no trates de resolver todo en una pregunta grande, pasitos cortos.  
O sea, el Baute es muy grande, pero hay que conseguir que las consultas las haga dando pocos pasos.  
Tendría que tener una máquina que vale unos 100000 EUR.  
A ver si lo quiero robar, si lo quiero en la nube.  
pero ya sabemos lo que supone yo lo pongo a la nube que todo es letal o todo es de los chinos miedo es una  
Vale, quedamos con ese concepto, quizá es lo más importante. Vale, depende de la consulta que le hagas, el dinámico que dice Luis, me contesta cuando me han preguntado Luis, cuando me preguntan a mí la contento yo.  
Entendí un terabyte, dice Alejandro, no, un terabyte es el tamaño de mí.  
Que no es el tamaño de mi contexto, pensar en lo que yo el mismo fue ayer, tu cerebro.  
¿Cuánta información ocupa y la respuesta, como dice Luis es ni  idea?  
Vale, no sé lo que preocupa. Yo sé más o menos, tengo días que estoy más fresco, días que me lo fresco, días que mis ideas funcione mejor o no mejor. Un terabyte es el tamaño del disco duro de mi portátil. Cinco terabytes es el tamaño del disco duro de mi teónico.  
Vale, pero eso no es mi contexto.  
En contexto es en cada conversación de la información que yo le puedo meter, es súper importante.  
¿Vale? Luis dice, no tiene ninguna idea de lo que está hablando, porque él no aprovecha para él siempre intenta insultar, da igual de lo que sea. Los que hay, con lo cual, ahí está por el porno que ve, efectivamente, esa es la parte de lo que os he dicho. Alejandro dice, no es sus amigos, sois hermanos, lo tengo claro.  
Alejandro, avanza, avanza. Tú sabes cuando tienes un colega que es retrasado y que sabes que le tienes que ir llevando con la vida para que no se meta una hostia, pues para mí eso es Luis.  
Vale, Luis pregunta por el contexto. Cada vez que diga yo me gasto mil pavos chupito esta noche, Luis, para que esta gente se tome un chupito, lo que retrasado de mi empresa han dejado de esa tiquis, una de Aldrophic y una de OPM en un sitio público, no sé qué, y cuando están bien pagos.  
Entonces me ha llamado uno novedad de mi empresa para pedirme perdón y yo lo que he dicho es que esto se descuenta de la nómina.  
Vale, entonces cuidado con las Ati Keys. Cuando empecéis a jugar con Ati Keys, cuidado si ya han pedido tarjeta de crédito para tener Ati Keys es una máquina infinita de gastar, tener cuidado con eso. Vale, los retrasados de mi empresa esta vez que se han.  
Ya está orientados en y de y de eso.  
Luis, acaba de pasar la guía externa, tal vez está bien, esto está, es importante, sí, que veáis esto, esto está bien, hacerle todas las preguntas que queráis, qué más dice, no sé por dónde empezar, Alejandro, si eso es un poderoso. Sí, dime, dime.  
Me he puesto igual que algunas preguntas.  
Blow pass.  
Es pero profunda finalidad.  
¿O sea, qué o qué esperas conseguir con el clon o a dónde crees que te va a llevar sobre alteras, una cosa? Sí, te cuento finalidad.  
Luego voy a hacer la siguiente pregunta, sin ayuda.  
Me odio me listo.  
Me dijo.  
Tengo muchas veces.  
Ningún hombre va a poder competir con Radio.  
Facebook.  
Un hombregonía.  
¿Va a poder completir con el año?  
Entonces, finalidad.  
Y todos mis problemas.  
Y todas las cosas que yo solo no puedo resolver.  
Se automatice lo mejor posible.  
Esa es la finalidad de micro.  
No es algo que haga lo que yo.  
O.  
Es algo que haga lo que yo quiero hacer.  
Vale, esa es la finalidad del clon me he respondido.  
¿Y estaría también el autoconocimiento dentro de ese descubrimiento?  
Yo no lo uso para eso.  
Tengo amigos psicólogos de soda.  
El director de innovación del Colegio de Psicólogos de Galicia es amigo mío.  
Con lo cual yo no lo uso más, pero que entiendo que cada uno lo use para lo que quiera. Yo lo uso para programar y más rápido.  
Vale, entonces que cada uno lo use para lo que quiera. Tenemos Luis y yo un amigo que se llama, que se llama Rodriguez, que es psicólogo, que él sí lo usa para eso.  
Vale.  
No, no.  
No.  
Al conocimiento y a la traducción de tu propia mente que puede hacer el.  
Sí, un saludo para eso. ¿Hacia dónde quieres ir? ¿Hacia dónde podrías ir?  
Por ejemplo, yo esto lo que es más fácil de decidir.  
De repente me he encontrado con que me acaba de definir mejor.  
Ahí que yo mismo.  
Aportándole que el número de que trabajo se hacía. y.  
No, autoconocimiento, no en un sentido.  
¿A qué estabas hablando de ir así?  
Para mí, el mejor consejo que me han dado.  
Muchas conversaciones con Luis también, vale, pero que no sea alguien de estas conversaciones. Es un tío que es el director de tecnología de la Internet de Madrid.  
Yeah, lo que me.  
El clon.  
Para que puedas aspirar a hacer.  
Todo lo que tú creías que no podías hacer.  
Vale, y dejarme ese consejo es lo de yo es que eso no sé.  
Yo lo que le digo a opción es mi  idea de esto, hacemos hacemos que en 48 horas seamos expertos.  
Yo me siento en un momento, me siento en un momento en el que como que las neuronas están buscando un poco de hostia, ¿qué puedo hacer con esto? Es un cambio cognitivo. ¿Qué puedo hacer con esto? Y es como tengo por delante algo que hacer, no sé lo que, pero es conectar muchas cosas del pasado que hubieses querido a ti y no has podido.  
Muchas cosas de represente que veías que se iban a hacer y como que te estás preparando para lo que viene.  
Y esperando su que los extraños.  
Yo te digo que creo que es el momento más divertido.  
A mí ahora es que alguien me dice, es que yo soy despertó y no sé qué.  
Puedes coger.  
Digo, yo a los expertos me los paso por el.  
Vale, entonces, luego que sea la inteligencia artificial de profesor.  
Vale, entonces es una muy superpoder. A mí lo que me ha dado audición es la sensación de querer.  
Y vaya más que yo de lado.  
Esto al final.  
Estábamos en un momento que antes estábamos hablando de la gente que llegaba a las profesiones. El intrusismo, intrusismo profesional. Perfecto para el intrusismo superpoder.  
Gracias, yo hablaba de quitarle el aspecto negativo al inclusismo laboral. Todos vamos a hacer incluso laborales en muchos campos a los que nos protectemos.  
Yo ahora mismo me veo capaz de hacer cualquier cosa de cualquier sector. Lo que me permite es decidir lo que me apetece hacer.  
¿Tú hablas entre de la persona?  
Yo con mi clon, con mi ya no, yo uso, mira, dentro del libro, tengo una de las cosas más duras, esta no voy a ver a  
Voy a conectarme al micrófono otra vez y voy a decirle que me diga las guías porque ya le dije que me explicaran todas las guías que yo tenía.  
No, por aquí me voy a vender.  
Y hoy y le voy a decir, este no se lo cree, a este me voy a entrar. ¿Por qué? Por velocidad.  
Vale, yo esta no tengo problema en compartirla. Le voy a decir al lado de que me diga, búscame.  
Halo.  
I want to go this for you there.  
EDV Gangde.  
Están guardadas en el he visto el WhatsApp.  
No he visto, pensaba que estaba silenciado, perdóname.  
Vale, perdóname. Miguel Ángel, pensaba que estaba silenciado, simplemente lo único que he compartido es. Ahora no me importa, ahora yo era más por la parte anterior, ahora sí que tenga ganamos.  
Escuchándome.  
Siempre he tenido mucho intrusivo. Efectivamente, yo soy amigo del yo soy amigo del presidente del Consejo de Inflamativo de España, Fernando Suárez, Diego, es muy inferente, y sí, ha tenido mucho intrusivo.  
Vale, entonces sí, me parece muy bien. Efectivamente, en vez de pelearte para que no haya impresión con el tuyo, vamos los otros, así que el incluso de todo, excepto lo que haya que firmar un proyecto. La presencia es casi todo, o sea, para firmar un proyecto de un de otro colegio.  
De los industriales, de los industrial, de los del camino, de los que sigo presando algo, pero la contesta es cualquier otra cosa.  
De los médicos, la gente está muy preocupada, es que la gente va a recetar cosas, no a recetar cosas. Es el 16.  
De un profesional colegiado, pero si yo lo necesito muchas veces.  
El abogado lo me firme.  
El consejo, ahora sí me habéis silenciado, sí, pues sí, a ver, yo sí, yo sí te oigo, vale, sí te oigo. Vale, mira, aquí lo tengo, la flota de ella, vale, que esta no la voy a regalar, esta es mi flota de lo dice el 29 del 6, estudio actual, tengo su peligro.  
Tengo un punto ahí.  
Tengo James Spark, tengo Cloud, tengo X Premium, tengo, tengo, tengo todas, tengo todas. ¿Vale? ¿Por qué me robasto? Me parece que me compensa, una persona que contrato me cuesta, no menos.  
De 3000 pavos, vale, al mes con seguridad, o sea, con seguros sociales, con no sé qué, lo que se van y esto, me parece un gasto muy económico, indicado de sinistral, minima, GMT, Gemini, Grove, Gemma, tan tan tan tan. ¿Vale, lo veis?  
Es todas las que yo uso. Inteligencia artificial, usas nuestras retras, usa todos. Lo importante es el sistema cognitivo que tú montas con las ideas.  
Vale, esta parte ahí que no os había enseñado, me parece un sistema cognitivo, acaba de demostrar que es subnormal. Ay, me estoy grabando ya en mi vida. Vale, cada una de esas.  
Yo uso toda la que se me pone por medio y luego si sigo usándola hago la suscripción, si no sigo usándolo, la doy de baja.  
Vale, entonces para mí es usarla y que no usarla y te diga ya no puedes seguir usando.  
Si no te dices ya no puedes seguir usándome, es que no la estás usando. Yo se cabreaba mucho conmigo porque yo lo he dejado a su clon sin token.  
Vale, ahora ya.  
Vale, por qué, porque yo le he metido un crock, un codex grande para que su clon yo no tire de su clon, tire de mí.  
¿Qué son los tokens, el consumo de inteligencia gas?  
Si no gastas el 100 100% del uso, no vale gratis, que los modelos están hechos para que tú consumas toda su parte gratis, no el del pago. Si no consumes el 100 * 100% del pago es que no estás usando. Pero a partir de ahí, hacéis lo que yo os enseño, la siguiente capa, la capa en el paul, la siguiente capa.  
La capa de por eso tienes que consumir el 100 * 100 del consumo de línea y eso es que estoy usando esta.  
Vale, si no busco el 100% que Dios estoy sacando.  
Vale, porque no voy a los descojonáis. Vale, más o menos vas sabiendo. García está haciendo el chiste de mí, ámelo a la cara, vamos. No, no he hecho ningún chiste, me estoy descojonando.  
A ver, son filosofías vitales.  
Son filosofías vitales. Te dice Chema, aprovechando que puedo hablar, te dice Chema que compartas SMD.  
Pero eso sí está pasando.  
Pues lo comparto ahora mismo, si es que tienes la tarea, la paso por aquí.  
Sí, pero necesitado ahora mismo.  
Y después de esta apología al consumismo.  
Después de esta apología, creedme que merece la pena antes que ponerse a gastar sin pensar, pararse a pensar de las cosas más mejores, más mejores de las cosas más rentables que podéis hacer en vuestra vida, con diferencia es pararos a pensar.  
100% de acuerdo, pero una vez tú tienes una, pero 100% de acuerdo, pero.  
Dime, dime.  
A veces tú tienes una tarea y sabes cómo hacerla alguna vez y te la tienes que hacer 8000 veces.  
Ya hasta tengo el interés que basta.  
¿Habéis visto mi pion y tenía cientos miles de puntos alrededor?  
¿Sabéis lo que es eso?  
El análisis del pasado de toda la gente que yo conozco es una tarea en la que yo le tengo.  
Vale, yo me di cuenta que tenía.  
Punto 50 gigas de WhatsApp.  
Casi un tera.  
De partido electrónico.  
Y otro montón de información desagregada pero bienes del pasado de mi vida.  
Le hice un proceso.  
Dentro de mi carpeta cero sistema es lo llamé cada Forge, pues yo lo he enseñado.  
He dicho, como sé lo que quiero hacer, como ya lo he hecho una vez el primero contigo Luis, yo le hice, yo le hice mi carga del pasado de nuestra vida.  
Miguel Ángel está ahora en un proyecto que podemos llamar el proyecto barrer el desierto.  
Que está bien, que está bien lo de tratar de barrer el desierto o a ver, hay una leyenda por ahí de cómo se crean las mareas.  
Y.  
Que le ponen a uno, pues creo que fue a Thor, le dicen, tienes que beber de un cuerno y Loki, un dios de estos un poco guerrero, le hundió el cuerno en el mar y él, que bebía todo lo bebible, empezó a beber un trago, luego otro trago y 3 tragos, si no fue capaz de beber todo lo que había dentro del cuerno.  
Y es porque estaba clavado en el mar. Al final, por muchos, por muy , por muy bueno que sea el modelo, por muy grande que sea la máquina, hay un límite absolutamente humano y es el propio límite en sí mismo. Es decir, nuestra capa, o sea, nuestro cerebro tiene tantas neuronas como galaxias hay en el infinito.  
O sea, en el universo, esta cuenta no la he echado yo y GPT os lo puede decir, o sea, resumen.  
Es complementario y debe de ser complementario. No tratéis con el clon o con el sistema, no tratéis de abarcar todo lo que puede llegar a abarcar el cerebro y luego fundamental con el propio cerebro, no intentéis o no tratéis de hacer tareas que puede hacer la I A.  
Una de las cosas que no os he comentado y que me ha recordado Miguel Ángel es por un lado desde un punto de vista cognitivo, es decir, sin pensar en el clon, sin pensar en la tecnología.  
Si hay algo que podéis hacer en menos de 1 minuto.  
No procrastinéis hacerlo. O sea, Miguel Ángel le habéis pedido, podéis compartir, puedes compartir SMD. Se tarda menos de 1 minuto en compartir un MD. Ya tenéis el MD en directo. Si Miguel Ángel hubiera tenido que esperar a dentro de 1 hora a compartir SMD, os aseguro que no lo hubiera hecho nunca.  
Por lo tanto, si sois capaces de hacer algo en menos de 1 minuto, desde un punto de vista humano, acostumbraros a hacer lo que sea que tengáis que hacer, que podéis hacer en menos de 1 minuto, hacerlo en menos de 1 minuto. Y la segunda reflexión unida a esta primera es si hay algún proceso en vuestra vida.  
Es suficientemente importante como para que lo tengáis que hacer, tratar de tener ese proceso automatizado para que salga en menos de 1 minuto. Por ejemplo, el tiempo que estabas hablando, que es lo que te estaba poniendo nervioso, me he metido en Teams, he descargado la transcripción, se lo he metido, o sea, en menos de 1 minuto ya tenía.  
Tanto el data lake como la casita del lago asociada con la transcripción de ayer. Y una vez tengo esa transcripción, ya tengo esa información. Además, estoy delante de un ordenador, pues habéis estado hablando de.  
Por ejemplo, del debate sobre el intrusismo profesional, Miguel Ángel no me deja hablar, pero he copiado la parte del debate, lo he copiado, lo he copiado, lo he pegado en el grupo de WhatsApp.  
Y lo que hemos estado hablando antes de que se conectara Miguel Ángel lo tenemos ahí , lo tenemos ahí compartido. O sea, al final, si podéis hacer algo en menos de 1 minuto, no procrastinéis hacerlo. Y luego, segundo nivel, si hay una tarea suficientemente importante en vuestra vida, cada uno pensar y analizar vuestra vida. Para mí, que doy clase, las transcripciones son fundamentales.  
Para mí, yo hay cosas que me acuerdo, para mí sacar la libreta, prefiero se lo digo a Telegram y eso se queda guardado en el clon y luego por la noche llego a casa. Repaso dentro del inbox las tareas que ha subido el clon y en menos de 10 segundos repasa las tareas.  
Y esto es algo que hago todos los días. Al final, mi objetivo vital es dedicarle al clon.  
Nada, pero sí que de vez en cuando es verlo. Y lo que intento es que cuando hago algo, cuando automatizo algún proceso, que el beneficio que yo saque por haberlo automatizado sea instantáneo. En la parte cognitiva de la que hablaba Miguel Ángel es fundamental. Esto consiste, esto va.  
Chema, de cambiar hábitos vitales. Esto va de cambiar nuestra forma de relacionarnos con el mundo. Y os digo una cosa, al final acaba, acaba siendo un vicio. Otra de las cosas, ahora, aprovechando que puedo hablar, estoy hablando y no voy a parar hasta que Miguel Ángel no me corte, el fine tuning.  
Pero no, déjame 1 segundo solo, el fine tuning, el fine tuning, el fine tuning es un pozo sin fondo. O sea, Miguel Ángel al final, después de tener todo el WhatsApp, pasará a no sé cuál será. Bueno, tampoco hay muchos niveles. Si pensamos en nuestra información, Miguel Ángel ya está cerca de encontrar el fondo del armario.  
Pero cuando entramos con el fine tuning, si tú quieres saber mejor las conversaciones o quieres afinar y afinar y afinar.  
Lo mejor que podéis hacer con el fine tuning es lo que acaba de decir Miguel Ángel, no te metas con el fine tuning, mejor pocas cosas, mejor estar en beta toda la vida, mejor quedarnos en la parte del link. ¿Funciona el producto? Sí, a lo siguiente, vamos a intentar que no sea el la cojoproducto porque podemos dedicar a eso.  
La vida, perdona Miguel Ángel, estabas diciendo algo.  
No, diciendo a ver esto que tú dices.  
Stop there.  
¿Vale, entonces habéis visto mi farmacia de elección?  
Can I say your lease?  
En el sistema, hay pasa a poner todos los procesos que tú necesitas.  
Sí, pero Miguel Ángel, Miguel Ángel, digo por un tema de economía del tiempo y aprovechando que estás aquí, de eso exactamente. O sea, te cuento, son 4 días los que estoy compartiendo con ellos. El primer día fue que le perdieran el miedo a la IA, el segundo día con las herramientas que dimos.  
El primer día seguimos profundizando en herramientas y en tecnología. O sea, al final no es solo un curso de IA, sino hemos ido viendo diferentes tecnologías disruptivas y los 2 primeros días los hemos dedicado a herramientas, a tecnologías. Hoy ha sido un día más metodológico, filosófico.  
Que todo lo que estás diciendo engancha con el día de hoy perfectamente y a ver el clon en profundidad. Juan me había  hasta hoy porque mañana se iba a ir. Digo, hoy casi avanzo un poquito de lo del clon, pero lo del clon en profundidad se lo voy a dedicar mañana.  
Desde el punto de vista de lo que tú tratas ahora de contar en 2 minutos, y además estoy de acuerdo que es café para muy cafeteros y hay que entender cómo funciona. Por ejemplo, si quieres entra por ahí, cómo funciona Cloud Project, que al final Cloud Project tiene en cualquier proyecto, en cualquier carpeta.  
O sea, llevamos 2 días dedicando una carpeta a un proyecto, pues Cloud Code lo que haces en esa carpeta define un punto MD que es Claude. Te dejo ahí Miguel Ángel. Ay, perdona, espera que Juan Juan Juan tiene pregunta.  
Entonces es una carpeta así gigantesca, sí.  
¿Podría haber sido el clon, no ordenado, no?  
Ordenado.  
¿Qué os he dicho antes? La pregunta era.  
Run the next to the games.  
¿Y dónde estamos?  
Mi cachato físico que almacena el clon tiene entera.  
You stand up the style.  
Ahí está el porno de ves, .  
You should love you.  
He was capat in Gotta.  
Y el porno ordenado, y el fichero de y el fichero de todo el repago de la Sierra.  
Y llama una tarjeta.  
Lo digo.  
Cosas importantes para mí.  
Mi familia, mi empresa, mis proyectos.  
Voy trayendo.  
Lo que es verdaderamente importante y burro, lo que es basura.  
Esto se basa en que lo que yo admiro en la carpeta sea buena.  
A ver, por eso, o sea, a mí me encanta.  
Estos son alumnos de la Vía, jovencitos de 18 años, estoy súper fácil.  
Porque se ha inventado eso suena mal y el Ángel.  
Vale, alumnos de Javier que tienen 18 años, alumnos y alumnos.  
That's a reclamar.  
He intentado un blog que es espectacular, que es Brassa, Charles Peter, o a blog y laters, make me rich, no mistake, no mistake.  
Vale, es el mejor pronto del mundo.  
Papá por cordial de una.  
Pero el  de que aprovechar el GPT y le falta contesto.  
Como lo que queremos es tener información importante que funcione.  
Cuando tú creas nueva carpeta, clon.  
Te tienes que asegurar que lo que entre ahí no sea basura.  
Vale, te contesta ahora.  
I can drag the car.  
Porque vas a ordenar la calidad de la información que entra y en tu clon no entra basura.  
Vale.  
Con esa aproximación es cuando el clero es una carta.  
Luego lo pasáis todo a MD o lo que se pueda. Siempre Markdown, siempre Markdown. Esto tiene su pene, creo que te interesa tener ahí guardado. ¿Qué haces tú? Sí, le hago una cosa que se llama Multiforge.  
Yes.  
El resultado de un paper de anterior arpacio.  
Que es el director de inteligencia artificial de OpenAI o fue de Tesla antes de OpenAI y ahora trabaja para Antrofit.  
Que lo que hace es decir, el libro es una  .  
Dame un marcado que me cuente las enseñanzas del libro.  
Te resumiré de lo que.  
Y te lo.  
Vamos, eso sería una de las asociaciones. Tengo 5 libros de referencia de gestión cultural que me encantan: fulano, mediano, Cipriano, me lo descargo, le digo que haga el resumen, lo premio en MD y es la carpeta de Añes Gurús, y eso es lo que le doy a Clon. Y eso va a Clon.  
Y está en mi contexto y el PDF lo guardas.  
Vale, en muchos casos, el contenido que tú admiras y sabes que te gusta, pero lo simple que seas tú es una parte de contexto que te gustaría hacer.  
How's the weather?  
¿Es para ti el video que?  
Un libro de aventuras.  
Luis que todavía dijo que.  
Un libro de aventuras.  
Vale, pues para mí el Quijote es el libro más famoso del que podemos conseguir.  
Normal las aventuras.  
You happen.  
Y da todo igual, creo que se vendió mucho.  
A ver, para cada uno de mi hijo es una cosa y es el mismo  
La diferencia es en marcado que va a guardar en tu pion o en el envío.  
Hi.  
Y ese mismo libro, insisto, con lo cual a partir de ahí.  
Es cuando cada uno es señor.  
Like me.  
Michael de la lo tenéis ahí.  
Hay cosas que no son tan veías. Yo lo que le dije a mi guión fue busca lo que pago.  
¿Y si pago 2 veces, como estaba pagando 2 veces a Iron Mark, coño, mancela una de las suscripciones?  
Sí me dijo.  
Vale, como no paro de pagar, cuando salga la siguiente de suscripciones directamente lo hay y apuntado que estoy pagando de querer.  
En esencia, esto es mañana cuando Luis es el día, paso a paso.  
After Western Hill.  
Pensar que es un súper poder.  
Mira, Miguel Ángel.  
Acabo de compartir en WhatsApp, Acabo de compartir en WhatsApp una y 2 imágenes.  
La de arriba es respondiendo a tu pregunta, Juan, la de arriba es el OneDrive.  
Y lo de abajo debería ser un proyecto de los de Claude ordenado. O sea, tú cuando entras, o sea, la idea es.  
La idea es tú, cuando entras en una biblioteca y quieres saber algo, no te lees todos los libros en el contenedor de arriba, que me duele ver libros tirados en un contenedor, pero no el contenedor de arriba. Si necesitas encontrar algo de información, evidentemente tienes que ir libro por libro y tardas mucho tiempo.  
Está desordenado. Lo primero que habría que hacer en el contenedor de arriba es ordenarlo y muchas organizaciones en los procesos. Hay un tema que deberíamos de haber hablado y que no hemos hablado, que es el Legacy. Es mucho mejor empezar desde cero.  
Empezar sin libros que tratar de ordenar eso me casi merece la. O sea, a ver, cuando tenemos una organización que está funcionando y queremos llevar algún proceso al nuevo cambio, ahí hay una mecánica, una metodología que es la de estrangular el proceso. Es decir, no puedes cambiar todo a la vez.  
La gente tiene que seguir funcionando como lo estaba haciendo antes y cambia, es algo sencillo y que todo el mundo se empiece a acostumbrar a esa forma nueva, sencilla de trabajar. Miguel Ángel, ¿estás por ahí? Eso lo sabes hacer tú mejor que yo.  
Porque yo intenté hacer lo que vosotros habéis visto.  
Quiero ordenar basado en mi vida, ahora voy ordenando mi vida por chatitas.  
WhatsApp correo todavía no me ido a los a los One Drive o Drive o lo que sea cuando puede cuando toque  
Estoy sinteando, dos tirando.  
Fine.  
Chicos, me voy a tener que manchar, que tengo que estar en Madrid dentro de 1 hora y como vivo en la sierra, no quiero hacerles esperar. He desaparecido de como se habló.  
Wish.  
Respondan ellos.  
Va a ver, gracias a Dios.  
A mí me encanta porque contrasta mucho.  
Con la austeridad que yo les he estado transmitiendo y al final ni tú ni yo tenemos razón. Esto hay un tal Aristóteles por ahí que decía lo del término medio, el equilibrio.  
Ya tengo una nota sangrar.  
A la persona que contra con mi empresa.  
¿Me cuesta más dinero?  
Invertir el ciclón.  
Lo cual hay gente que dice es que no me da la vida, tengo que contratar personas, yo estoy en el momento de la vida.  
En el que no me da la vida contrato vacíos.  
Vale, ¿puedes contratar más gente? Sí, ya tengo 40 y tantas personas trabajando en mi empresa.  
No me trata más, pero como no le voy a hacer caso.  
O puede cambiar 40 que 400 que 4000.  
Y en cambio con el año, como está conmigo todo el día, pues puedo vivir formándole, guiándole, haciendo eso es lo que yo he aprendido. Mira, Miguel Ángel, escucha qué mensaje más bonito. A mí, A mí este mensaje me ha encantado, dice: es o sea, resumen de lo que de lo que has hecho hoy, es como ver.  
Lo que pensé que se podría llegar a hacer gracias a la IA de hoy en día. Tenía la intuición de que se podía, pero lo veía muy lejos. Ahora veo que sí es posible hacerlo.  
Vale, eso que lo ha dicho Armando, lo ha dicho Armando Arazil.  
Pues gracias, Fernando.  
Pues gracias. A ver, esto es un camino, todos estamos atendiendo. Si dejas de estudiar, si dejas de estudiar, esto se acaba.  
Miguel Ángel, que te tienes que ir, que te te noto que te estás estresando.  
Estoy esperando muchísimo, un placer, vale, aguantar a Luis, os acompaña en el sentimiento.  
¿Ya está, o sea, que y eso del estrés, eso del estrés que estás sintiendo, en qué consiste?  
No voy a ir con este camino. ¿Por qué es fácil de explicar lo del estrés, no?  
No, eso no es estrés.  
No, un abrazo, se te quiere. Miguel Ángel, gracias. Chao.  
Pues qué maravilla.  
Qué lujo.  
Qué lujo.  
Qué maravilla.  
Son muchas, muchas, muchas piezas, son muchas piezas, son muchas piezas.  
Y.  
Y estamos todos aprendiendo, estamos todos aprendiendo.  
¿Te iba a preguntar Juan, lo mismo te, o sea, tienes esto es Teams, no?  
Os cuento si puedes compartir mi pantalla.  
Stop.  
Perfecto, si estás compartiendo mi pantalla que le estaba poniendo nervioso y por eso he dejado de hacerlo.  
Pero a ver, he dejado de hacerlo.  
Markdown.  
Esto no lo suelo hacer en casa así.  
No lo suelo hacer en casa así.  
Qué duro GPT conmigo ha sido porque dice que en clase soy como las ventanas que hablo, que abro más pestañas que.  
Y.  
Mora.  
Con su.  
Mira, me dice, se ve regular ahora pixelado, solo te veo en pequeño.  
¿Sabes lo que pasa? Que he abierto en este ordenador una sesión de Teams y debo de estar. Voy a salir del Teams desde este ordenador, o sea, para mientras Miguel Ángel compartía pantalla.  
Me ha abierto una sesión de teams.  
Me ha abierto un el Me ha abierto, no he hecho más que abrir cosas y debo de tener. tengo.  
Cierro Telegram, cierro todo.  
A ver, os cuento, voy a ver.  
El scratch.  
Scratch es una de las metodologías que íbamos a ver hoy.  
Que es construir desde cero.  
Y muchas veces Scratch tiene también que ver que con construir sobre lo que tienes encima en este sentido, la sesión de hoy.  
Digo, porque no me abre el markdown y como no me abre el markdown, lo voy a cerrar.  
La sesión que hemos visto hoy.  
Ya me he descargado del Teams.  
He descargado toda la transcripción.  
De la primera parte y esta transcripción de la primera parte.  
He dicho simplemente hazme un informe detallado.  
Y me lo y le he pegado, o sea, no he pegado, he copiado y pegado y GPT desde hace poco, cuando tú le pegas un texto largo, te lo mete como un punto txt.  
Que esto es TXT. La única diferencia que hay entre un TXT y un Markdown es la extensión. Por el resto son exactamente igual. Tú le cambias a un TXT la extensión y le pones MD o a un MD le pones la extensión en un TXT.  
Y desde obsidia lo puedes ver si es MD.  
¿Ha leído la transcripción? Y mira, os digo, este es mi GPT, le he dicho, hazme un informe detallado.  
Y me dice.  
He leído la transcripción, me parece una de las sesiones más naturales, espontáneas y representativas de tu estilo docente. Yo pensando para mí, pues no sé por qué me abre Claudia aquí.  
No sé por qué me ha abierto Claude.  
Le he pedido lo del meme para lo de la foto. Voy cerrando pantallas lo de la que os he mandado. Ahora os lo cuento, que esto es importante desde el punto de vista de ciberseguridad, que no hable nada de ciberseguridad para acabar la clase de hoy a las 2:00 acabo como un reloj, no os asustéis.  
A lo que voy, este es mi GPTy mi GPT. Estoy bastante de acuerdo con lo que ha comentado. Creo que era Chema lo que le ha dicho Chema a Miguel Ángel.  
GPT, desde un punto de vista cognitivo, nos conoce muy bien.  
Yo funciono con GPT como si fuera mi clon. Muchas veces conozco las limitaciones de GPT que no tiene acceso. Por ejemplo, si yo ahora le pregunto a GPT por la clase de hace 4 días, no tiene guardada la clase de hace 4 días.  
Porque GPT no tiene acceso a mi vault, pero GPT sí me conoce. O sea, daos cuenta lo que estoy haciendo aquí sin haberle dado contexto. Le digo, estoy en clase con mis alumnos. A ver, no, esta no es.  
¿Esta cuál es?  
Perdón, esto ha sido antes del descanso.  
He abierto otro, o sea, antes del descanso he cogido para ejempli, o sea, olvidaos de esta.  
Esta es con la que estoy, vale, le he subido a GPT la transcripción. Estaba hablando a Miguel Ángel y le digo, hazme un informe detallado.  
Le he dado un contexto abierto a gpt y me dice, he leído la transcripción y en conjunto me parece una de las sesiones más naturales, espontáneas y representativas de tu estilo docente. GPT siempre va a hablar bien de nosotros. Hay que saber leer entre líneas. Me parece una de las sesiones más naturales.  
A ver, no le he dado el contexto de que estoy en mitad de un curso de 20 horas. Es la hora de la de la hora 10 a la hora 13. Miguel Ángel va a venir después. Además, es el día de las metodologías ágiles y fundamental. No le he dado el contexto de que estoy hablando con Miguel Ángel. Quiero que me hagas un informe rápido.  
Porque mi idea era, según iba hablando Miguel Ángel, vosotros que vierais el proceso por aquí debajo.  
En cuanto Miguel Ángel me ha dicho que me pone nervioso verte. pues yo lo que quiero es que el que esté hablando esté cómodo, he parado y ya me has desconectado y he seguido un poco y he seguido jugando. ¿Por qué? Porque sí, o sea lo que no quiero es ponerle a Miguel Ángel, que es el que está hablando, quiero que Miguel Ángel se sienta lo más cómodo posible y luego.  
Miguel Ángel, que le gusta tener todo controlado y que se caracteriza por no sentir mucha ansiedad.  
Yo lo que quería también es que estuviera en un entorno de confianza lo antes posible. Por eso le he empezado a insultar insultándole. Él sabe que si le insulto, estamos en un entorno de confianza.  
En este sentido, Miguel Ángel.  
A ver, todos los modelos de IA, me da igual enchufarle Claude, que GPT, que Lama, todos los modelos de IA.  
Son iguales, se parece mucho. ¿Los habrá más poderosos o menos poderosos? Afortunadamente, las personas cada una funcionamos de una forma diferente, probablemente a cualquier persona normal, que nadie es normal, a cualquier persona normal le entras en un sitio insultándole y se pone un poco estresado.  
Miguel Ángel no siente estrés y para él, si Luis me está insultando, pues le insulto yo a él, que bien me insulta, pero él entiende que estamos en un entorno de confianza y yo lo que quería es que dijera cuanto antes lo de Luis no tiene ni  idea.  
Porque él sí, y en ese sentido que nos contara a lo que se dedica, lo que hace que se sienta cómodo y nos explique.  
Me olvido de eso a GPT.  
Hazme un informe detallado, me hace el informe detallado.  
Y dentro del informe detallado, él no sabe dónde, o sea, sabe dónde estoy por el informe, informe luego en su memoria cercana.  
Pone sesión 2 de julio, que es la fecha de hoy, duración 2:15, tema central, metodologías ágiles, herramientas, Notebook LM. O sea, él no sabe que estamos en el contexto de la semana que estoy pasando en Galicia.  
Él no lo sabe y esto es relevante.  
Valoración global, sí.  
Él no sabe que estoy en la semana de Galicia.  
Y mirad lo que dice aquí, si la sesión de ayer era una sesión de arquitectura tecnológica, esta ha sido una sesión de arquitectura mental. ¿Cómo sabe que ayer hubo una sesión?  
Por el Por la propia transcripción.  
El hilo conductor no son realmente Gemini, Notebook, Omniswap. El hilo conductor es como piensa una persona que utiliza la IA como extensión de su cerebro. A ver, esto es algo muy general.  
Pero que es como yo últimamente estoy funcionando con GPT.  
Estructura de la sesión, calentamiento, metodologías ágiles, bloque 3 y en mi nai más nano banana. Lo mejor de la sesión, enseño a pensar el uso de Notebook LM, explico el rag extremadamente bien, me alegro.  
Lockchain mucho mejor que ayer. Ayer presentaba piezas hoy, o sea, todo lo que haga hoy para GPT siempre va a ser mejor que lo de ayer.  
Uniswap, pero no voy aquí. Las mejores metáforas, mortadelo, lo mejor, soy muy bueno, parte docente. Aquí ocurre algo muy interesante, todo es maravilloso, el momento, otro momento excelente, todo es maravilloso, ritmo, todo fenomenal, como me quiero, lo que haces muy bien. Me dará alguna colleja porque le digo que.  
Me de Collejas.  
Riesgos, saturación, los desvíos largos. Claro que me desvío, largo no, larguísimo, 5 horas. Las demasiadas ideas buenas, cosas que si haces bien, haces con mi. A ver, ideas de LinkedIn. Mi conclusión, hasta aquí no lo he leído.  
Hasta aquí no lo he leído porque cuando he empezado a leer el informe que me estaba dando me he dado cuenta de que me he equivocado.  
Y miras.  
Y mirad el segundo prompt que le meto.  
Es un Es uniforme temporal, no es el definitivo, pero quiero que sea muy detallado.  
Temporal no es el definitivo, pero quiero que sea muy detallado. A ver, lo que quería es enseñaros en proceso.  
¿Cómo puedo acercarme a usarla ahí en tiempo real, que además ha sucedido cuando tú has estado hablando del intrusismo profesional, Juan?  
Yo he sido capaz de coger ese momento y metérselo ahí. O sea, qué quiero decir con esto que la I A por sí misma es potente.  
Esto es GPT los 20 pavos, o sea, este no es el mejor modelo, sino.  
Al final no es tanto la capacidad.  
La potencia que tiene GPT, sino lo realmente relevante y disruptivo, es que esa capacidad que, aunque sea el peor modelo de todos, ya es mucha, converja con nuestra propia capacidad intelectual.  
Ese es el reto, el hacer que enganche.  
Nuestra propia cabeza.  
Con la tecnología y para que se produzca ese enganche.  
No solo hay que entrenar a la IA.  
Sino que la IA te entrena a ti mismo, o sea, no solo hay que pedirle cosas a la IA.  
Sino que nosotros tenemos que ser bastante autoexigentes con nosotros mismos.  
Y esto es un tema que, efectivamente, como decía Miguel Ángel, estamos todos aprendiendo y cada persona es un mundo. Y luego, sinceramente, a mí ya este informe temporal que me ha hecho.  
Me ha gustado mucho más. ¿Por qué? Porque es un , le he pedido informe detallado y él, con el poco contexto que tiene, ha ido viendo arranque de la sesión: liturgia, humor y clima del aula, bromas sobre Claude, introducción de Miguel Ángel y conexión con blockchain.  
Miguel Ángel es el presidente de Alastria, que es la Asociación Nacional de Blockchain.  
Le acaban de dar, pensaba que iba a contar algo de eso, como no me ha dejado hablar cachondo.  
Sí, a de cuatro U, no a de Alastria, no Alastria, es Isbe, quién ha dado el premio.  
O sea, es el proyecto, si es que estoy en la junta directiva.  
A ver, tools reciente passwick.  
Hola.  
Tools anytime past week.  
A ver el LinkedIn.  
O sea, ISB es un proyecto que quiere crear una infraestructura.  
Europea.  
Es un proyecto que quiere crear una infraestructura europea de blockchain.  
El blockchain es una red, el blockchain es infraestructura. ¿El blockchain para qué sirve? Para registrar.  
Lo que sea que quieres registrar y que haya certeza de que ese registro está hecho. No es necesario usar blockchain para todo. Es más, el blockchain solo se solo merece la pena usarlo para determinadas cosas. ¿Te han dado un premio? Pues lo mismo, si te dan un premio para demostrar que ese premio es tuyo y es único.  
¿Merece la pena? ¿Tienes una titulación universitaria? Pues lo mismo, si no hay un Ministerio de Educación que tú puedas en su página web ver que el título es oficial, pues lo mismo merece la pena hacer un registro con blockchain asociado con el título.  
Pues estamos creando una red.  
Y le y le han dado un premio, pues si hubiera hablado un poquito de la red tampoco hubiera estado de más, pero sinceramente merece más la pena hablar.  
De lo que hemos estado hablando, que es ese sentimiento Juan que hemos compartido también en los cafés.  
De que todo esto es el principio de un mundo espectacular en el cual.  
El que use esto.  
¿Tiene derecho?  
De hecho, no, perdón, el que use esta tecnología me parecería lógico que se sintiera como un mago.  
Yo cuando uso esto llego aquí a clase y luego le digo a GPT y revísame todo lo que he hecho, especialmente pensando en la del primer día. Has hecho una página, has hecho una aplicación, has hecho no sé qué, has hecho no sé cuántos. Dices, es que yo hace 3 años pienso.  
En lo que hoy soy capaz de hacer en un aula y vuelvo a lo de los Reyes Magos que os pedí antes, no perdáis esa ilusión. Miguel Ángel lo ha verbalizado, ha dicho, es que estoy en el momento.  
Más divertido de la vida, ha dicho.  
Y alguien con 50 tacos pueda decir que está en el momento más divertido de la vida.  
Yo creo que los momentos más divertidos de la vida de cualquier ser humano en general y en media estarán más cerca de la infancia.  
No one.  
Es un momento divertidísimo, pero si piensas el ser humano como.  
¿Veríamos de estar surfeando esta hora? Es en lo que estamos.  
Es en lo que estamos, pues.  
Por más que la guía que estoy facilitando cosas, creo que todos estamos bastante metidos en estado.  
todas las familiares que nos pueda hablar  
Sí, y luego esta me encanta compartir. Miguel Ángel le dieron el premio, esta si esto ha sido esta semana, se lo dieron a hace hace no 2 o a esto lo ha publicó Alastria hace 21 horas, que yo creo que fue ayer o antes de ayer, que yo me enteré del premio viéndolo en LinkedIn.  
Si alguno está por, mira, y este, o sea, bueno, yo os quiero contar con eso.  
Miguel Ángel esta entrega no se la hubiera perdido por nada del mundo.  
Al final luego tenemos un control sobre nuestras vidas relativamente limitado en el corto plazo.  
Si me dais a elegir entre estar ahí haciéndome esa foto, recibiendo un premio y esta semana que estoy pasando con vosotros en Ourense.  
Ni Miguel Ángel Duda ni yo tampoco.  
Y tomamos decisiones diferentes porque al final es necesario encontrar en la vida momentos en los que pararte, que luego Miguel Ángel y yo tenemos muchos momentos en los que nos paramos a pensar y compartimos.  
Pero es necesario pararse a pensar, pararse a pensar y luego fundamental el buen humor. He empezado la clase con ello.  
Yo me hubiera gustado mencionar un poquito el tema cuántico hoy.  
Voy a dormir esta noche tranquilísimo sin haberlo mencionado.  
Os lo aseguro, me hubiera me hubiera gustado mencionar lo de Uniswap. Lo he hecho porque para mí es mucho más importante lo de Uniswap que el tema cuántico, que el tema cuántico. A los que seáis un poco veteranos, mañana lo mismo hablamos, pero el tema cuántico a mí, que yo ya tengo algún año.  
Me recuerda un poco al efecto 2000.  
¿Tú te acuerdas del efecto 2000 Juan?  
Antes del año 2000.  
Pues yo con el tema cuántico, que sí, que es algo que va a cambiar, o sea, que vamos a tener que cambiar todas las claves, que la seguridad, que los ordenadores cuánticos. Se está destinando una pasta gansa al tema cuántico. A mí me gusta la física cuántica, me gusta la filosofía y luego se pueden entender cosas del tema cuántico.  
Muchas.  
Pero yo, hoy por hoy, un poquito efecto 2000 fundamental, pues quería hablar de Uniswap.  
He hablado de Uniswap, pero no por DeFi, no por las finanzas descentralizadas, sino porque Uniswap es un ejemplo maravilloso. Os quería hablar de Uniswap porque Uniswap es un ejemplo maravilloso. Yo te estoy vacilando, Juan.  
Esto del debate sobre intrusismo profesional.  
Una de las cosas más relevantes, hoy hablando de proyectos, hoy estamos hablando de proyectos y de metodologías ágiles, ¿no?  
Sí, no, más o menos.  
Más o menos 1 poco.  
Horrible, si alguien trabaja en equipo, horrible, es que eso no es mi tarea.  
Es que yo soy el que se dedica a y es que eso no es mi tarea.  
Todo es tarea de todos. No puedes decir si estás dentro de una empresa, el cliente no se puede quedar sin servicio porque eso no es tu tarea.  
¿Uniswap qué hace, qué es?  
No lo tengo claro si trato de explicarlo desde el punto de vista tradicional.  
Pero desde el punto de digital sí que os lo puedo explicar. Uniswap da un servicio, tú tienes unos tokens, quieres cambiarlos por otros tokens y los cambias, pero es que además es un creador de mercado. Además, Uniswap es un exchange. Además, Uniswap es un contrato de swap, es todo eso junto.  
Yo de qué os estoy hablando de tecnologías, qué soy, o sea, no estamos aprendiendo todos juntos y luego yo creo que sí, que desde un punto de vista jurídico, o sea, me han contratado para dar un servicio determinado.  
Y el servicio lo estoy tratando de dar con toda mi energía y mi fuerza. Y es más, si viene un auditor que perfectamente puede venir, pues mira, estos son los temas oficiales. Hay 3 módulos, 4 días, primer día, inteligencia artificial y herramientas, segundo día, continuación de esas herramientas.  
Tercer día, proyectos, lean, ágiles, design thinking. Y mañana toca hablar de liderazgo y gestión de crisis, que mañana voy a hablar del clon, mañana voy a hablar de código abierto, mañana voy a hablar de herramientas de Google.  
Y mañana voy a responder la pregunta esa de Chema, que me ha encantado.  
Y con esto ya voy a ir acabando la tecnología de Chema es la pregunta de Chema es.  
A ver, yo tengo un equipo de 200 pavos porque es que costó 200 eur, pero además del equipo de 200 eur, mi ordenador es un Fembook. O sea, me refiero que tampoco es son 200 eur que tiene 16.  
Espera, no, si es que tengo, sí.  
Es mañana justo lo que voy a hablar mañana.  
Eso está definido dentro del de la o sea, de la en la carpeta hay un archivo que es el de instrucciones. Ahí dentro están los roles que tiene que crear. O sea, si entra alguien desde tele, o sea, si el bot, o sea, el bot desde Telegram.  
No, el a ver, perdón, espera, voy por mañana, no te preocupes, no te.  
No, que quiero, es que quiero, tengo el bolt aquí.  
Tengo el volta aquí y lo que quiero es.  
Decirle, dame las especificaciones del ordenador de debajo de la tele, en tu pasado, tus clientes, tu empresa.  
A ver, os te cuento.  
WhatsApp.  
No admite bots.  
O si los admite, ayer vi lo de Lucía Ia, que es un bot, es como un smart contract, es un bot. Es en lugar de ser una persona lo que está dentro de la cuenta, es algo automatizado que responde a lo que le digas como si fuera una persona.  
WhatsApp, los bots, no tu propio Siri.  
A ver, un bote es lo que te acabo de decir, un número de teléfono, pero que detrás del número de teléfono en WhatsApp, en lugar de haber una persona, hay algo automático. No es Siri, o sea, es simplemente algo que responde a instrucciones. En Telegram se pueden programar los bots. Tú en Telegram puedes crear bots, o sea, al final un bote es un programa, tú puedes.  
Crear un bot que sea.  
En Telegram, para qué lo quiero, el qué si yo ya tengo.  
Lo tengo ahí, si yo algo eso lo pregunto a ellos, pero esto es un bot que va directamente a todo lo que tienen auxilio.  
Este es sí, a ver, os cuento muy rápido. Este es el ordenador que tengo debajo de la tele, 200 pavos y con este ordenador ni de coña se me ocurre mover modelos de IA, pero este modelo lo que sí, este ordenador lo que sí que hace es llamar a los modelos que para llamar a un modelo como si lo haces desde el móvil o lo haces desde cualquier sitio.  
Mañana desarrollamos eso y luego un bot en Telegram es una cuenta que tú le mandas un mensaje y te responde en lugar de una persona de forma automática.  
Ese bot lo tengo enganchado.  
Con mi vault, con la carpeta a través de un agente que sería que es Hermes. Tengo 2 agentes, uno que es OpenCloud y otro que es Hermes. Instalar OpenCloud, instalar Hermes es relativamente sencillo.  
Vale, pues eso en concreto, cuidado que estos son poderosos. Hermes, este es Hermes.  
Este es Hermes.  
¿Qué le podéis decir antigravity?  
Hermes.  
Agente.  
Y este es OpenCloud.  
Germes.  
Este es OpenCloud.  
Mañana hablamos de esto.  
Esto.  
¿Esto qué es? Esto es un ordenador que asume, o sea, perdón, esto es un ordenador, esto es un programa que asume el control, o sea, que empieza a funcionar en el ordenador.  
Está siempre encendido.  
Y tú puedes hablar con él, le preguntas algo y te responde. En concreto, tanto a Hermes como a Opencloud los tengo conectados con mi Vault.  
Y tienen definida cuál es su función. Cada uno tiene una función un poquito diferente, pero esto lo vemos mañana.  
Esto lo vemos mañana.  
¿Al final, qué es Hermes y qué es Open Cloud?  
Es un agente que está instalado, en este caso en la máquina esta que os he puesto aquí, en esta máquina, en esta máquina tengo funcionando este programa que se llama Hermes y este programa que es Windows.  
Win.  
Windows.  
Y luego los agentes corren sobre el cel. Ya me he pasado de tiempo y no me quiero pasar de tiempo muy rápido, muy rápido, muy rápido para acabar.  
Estoy conectándome al ordenador, solo quiero que veáis una cosa que se ve en cuanto me conecte.  
Este es el ordenador y aquí tenéis.  
Sin Zing y aquí tenéis OpenCloud.  
Aquí el agente en OpenCloud mañana vemos todo esto con detalle, pero aquí están las instrucciones de la gente desde que arrancó en esta sesión.  
Mañana empiezo con esto, mañana explico cómo funciona este sistema y luego vamos viendo el resto de las cosas y dudas que tengáis, pero mañana empiezo hablando de Hermes y de Open Cloud.  
Dudas, preguntas.  
Disculpar por el minuto, son las 14:01.  
José robado.  
1 minuto.  
Mañana nos nos metemos en el.  
Y además, os os hago un esquema.  
Me voy a pasar toda la noche haciendo esquemas de dibujando y haciendo, yo ya no trabajo, o sea, si es a ver, pero.  
Diana, Diana es una locura. Las 2 infografías que he compartido las he hecho en tiempo real. Es una locura. Ven fresco mañana que nos tocará bombardeo de preguntas. Encantado, Chema.  
¿Cómo vuela el tiempo?