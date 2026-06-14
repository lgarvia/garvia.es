
# Informe de la Sesión 1

**Curso: Tecnologías Emergentes e Inteligencia Artificial**  
**Universidad de Vigo – Generación D / Red.es**  
**Fecha:** 30 de junio de 2026  

---

## Objetivo de la sesión

La primera sesión tuvo un objetivo muy claro: **romper la barrera psicológica frente a la IA**.

No se trató de aprender una herramienta concreta, sino de comprender que la forma de trabajar con la tecnología está cambiando radicalmente. Desde el primer minuto se buscó que los alumnos dejaran de pensar en la IA como un simple chatbot y empezaran a verla como un **compañero de trabajo capaz de ejecutar tareas reales** de forma autónoma.

La sesión alternó continuamente teoría, demostraciones prácticas, debates conceptuales y reflexión sobre el impacto profesional de estas tecnologías, estructurándose de la siguiente forma:

---

# 0. Resumen de los principales temas tratados

En esta primera jornada formativa se abordaron los siguientes pilares de conocimiento práctico y teórico:

- **Orquestación y automatización local (Antigravity):** Instalación, control de tokens, generación de múltiples tipos de archivos y desarrollo de una pequeña aplicación web interactiva.
- **Gestión estructurada del conocimiento (Obsidian):** Creación de Bóvedas locales, uso estratégico de Markdown (`.md`) para optimizar el consumo de tokens y flujos de trabajo remoto mediante bots de Telegram.
- **Marcos analíticos de adopción tecnológica:** Curva de Gartner, Difusión de Rogers y el Abismo de Moore (Chasm).
- **Fundamentos de Blockchain:** Concepto de registro inmutable, Bitcoin y el Whitepaper de Satoshi, claves pública/privada y mecanismos de consenso (PoW vs. PoS).
- **Tecnologías visuales e inmersivas (Realidad Extendida - XR):** Conceptos de Realidad Virtual (VR), Aumentada (AR), Mixta (MR) y Disminuida.
- **La tesis de la convergencia tecnológica:** Cómo la combinación de estas herramientas habilita nuevas capacidades profesionales y de negocio.

---

# 1. Presentación del curso

Se explicó la estructura general de las cuatro jornadas. El curso estará organizado en cuatro grandes bloques:
- Tecnologías emergentes.
- Inteligencia artificial aplicada.
- Desarrollo de proyectos reales.
- Liderazgo y transformación profesional.

Se insistió desde el principio en que el objetivo no es memorizar una herramienta concreta, sino **adquirir una nueva mentalidad de trabajo**.

---

# 2. Filosofía del curso

Se plantearon dos pilares conceptuales fundamentales para toda la formación:

## La tecnología cambia demasiado rápido
Nadie es realmente "experto" en IA; todos estamos en constante aprendizaje. Por tanto, el valor diferencial del profesional actual ya no consiste en acumular conocimientos estáticos, sino en desarrollar capacidad de adaptación.

## Ser agnóstico respecto a la tecnología
No se defiende ninguna plataforma o marca comercial concreta. Se enseñó la filosofía de utilizar Google, OpenAI, Anthropic, modelos chinos y herramientas de código abierto según convenga en cada escenario. La herramienta es secundaria; lo importante es entender los principios arquitectónicos detrás de ellas.

---

# 3. Primera herramienta: Antigravity

Gran parte de la sesión estuvo dedicada a instalar y utilizar **Antigravity** (de Google). Se explicó que:
- Es un orquestador de agentes.
- Trabaja sobre proyectos estructurados.
- Entiende el contexto completo de una carpeta local en tu máquina.
- Permite modificar y crear archivos automáticamente.
- Ejecuta código y puede interactuar directamente con el sistema operativo de forma controlada.

Se presentó como un entorno de trabajo completo que va mucho más allá de un simple chatbot web.

---

# 4. Primer proyecto: "Hola Mundo"

En lugar del clásico ejercicio de impresión de texto, se propuso un "Hola Mundo" enfocado en agentes. Se creó una carpeta vacía y se pidió a Antigravity que generara distintos tipos de archivos de forma automática (TXT, Markdown, CSV, DOCX, HTML, una imagen PNG y un script de Python). El objetivo era demostrar cómo un agente puede construir de forma autónoma una estructura de trabajo completa.

---

# 5. Comparativa de tipos de archivo

Se compararon los distintos formatos analizando su eficiencia para el procesamiento con IA:

- **TXT:** Texto plano, extremadamente ligero y sencillo de procesar.
- **Markdown (.md):** Texto plano legible por humanos y de alta fidelidad para la IA. Permite representar títulos, listas, tablas, enlaces y código de forma estructurada. Es el formato de referencia del curso.
- **CSV:** Formato de datos tabulares en texto plano, ideal para que las máquinas procesen bases de datos sin sobrecargar el contexto.
- **DOCX / XLSX:** Formatos útiles para humanos pero muy pesados y lentos de compilar e interpretar por la IA, lo que incrementa la latencia y el coste.
- **HTML:** Texto plano que el navegador interpreta directamente, permitiendo estructurar interfaces visuales de forma inmediata.

---

# 6. Markdown como lenguaje universal

A partir del archivo Markdown generado por Antigravity se mostró cómo editarlo, visualizarlo y convertirlo. Mediante un editor online, los alumnos observaron simultáneamente el texto en formato plano y su renderizado visual, concluyendo que Markdown es el puente de comunicación óptimo entre humanos e inteligencia artificial.

---

# 7. Evolución del ejemplo interactivo

El proyecto "Hola Mundo" inicial fue evolucionando en tiempo real mediante instrucciones en lenguaje natural. El agente mejoró el documento e incorporó el conjuro de la *Queimada* en formato web interactivo, traduciendo dinámicamente la página a castellano, gallego y japonés, e incluyendo un visor con micro-animaciones de burbujas en el navegador.

---

# 8. Pensar antes que programar

Se reiteró que en el paradigma actual, *escribir código es cada vez menos importante*. La destreza crítica reside en:
- Definir correctamente el problema.
- Estructurar la información de entrada.
- Planificar y diseñar el flujo conceptual.

Una vez estructurado el plano del proyecto, la IA puede encargarse de la ejecución técnica.

---

# 9. Gestión y consumo de tokens

Se introdujo el concepto de **tokens** haciendo la analogía con la gasolina de un coche:
- Los modelos de lenguaje consumen recursos medidos en tokens de entrada y salida.
- Conviene optimizar el contexto para evitar costes innecesarios y respuestas incompletas.
- El uso de formatos eficientes (como Markdown) es crucial para la viabilidad económica de proyectos a gran escala.

---

# 10. Organización y contexto por proyectos

Se enseñó a estructurar la información mediante carpetas físicas en local. Cada proyecto debe contar con su propio contexto y su historial delimitado. Mantener el entorno limpio y organizado mejora de forma drástica la precisión de los agentes.

---

# 11. Conversión de PDF a conocimiento útil

Se realizó una demostración práctica extrayendo el contenido del PDF oficial del curso para transformarlo a Markdown y generar un dashboard HTML ligero de estudio. Esto demostró que, antes de trabajar con documentación extensa, es conveniente preprocesarla a formatos optimizados para el consumo de la IA.

---

# 12. Curva de Gartner y difusión de tecnologías

Se introdujo el ciclo de expectativas de Gartner (*Hype Cycle*) para analizar el recorrido típico de cualquier innovación (aparición, pico de expectativas, abismo de desilusión, rampa de consolidación y meseta de productividad), aplicando este marco a la inteligencia artificial, el blockchain y la realidad virtual.

---

# 13. Curva de difusión de Rogers

Se analizó la distribución de adopción tecnológica entre los distintos perfiles de usuarios en el mercado:
- Innovadores.
- Early adopters (adoptantes tempranos).
- Mayoría temprana.
- Mayoría tardía.
- Rezagados.

---

# 14. El "Chasm" o Abismo de Moore

Se explicó el paso crítico entre los adoptantes tempranos (*early adopters*) y el mercado masivo, utilizando como ejemplo las gafas Apple Vision Pro. La conclusión metodológica fue: *"Para las grandes corporaciones, este abismo es un problema de ventas; para los profesionales que aprenden a dominar estas tecnologías de forma temprana, constituye una oportunidad competitiva única"*.

---

# 15. Velocidad de adopción histórica

Se comparó el tiempo necesario para alcanzar millones de usuarios entre tecnologías históricas (teléfono, automóvil, Internet, smartphones) y plataformas modernas (como ChatGPT), evidenciando una aceleración exponencial en la tasa de adopción global.

---

# 16. Evolución histórica de la Inteligencia Artificial

Se repasaron los hitos históricos desde el Machine Learning tradicional, pasando por el Deep Learning y la arquitectura de Transformers (2017), hasta llegar a los modelos de lenguaje masivos actuales y los agentes autónomos de orquestación.

---

# 17. Diferencia entre LLM y Agente Autónomo

Se estableció un límite conceptual claro:
- **LLM (Large Language Model):** Responde preguntas de manera pasiva y genera texto según el prompt recibido.
- **Agente Autónomo:** Ejecuta tareas complejas de forma activa en el sistema de archivos, crea y modifica ficheros, programa y toma decisiones lógicas de forma iterativa.

---

# 18. Calidad de los datos ("Garbage in, Garbage out")

Se hizo hincapié en que la precisión de un sistema inteligente depende del contexto suministrado: *"Si entra basura, sale basura"*. Estructurar contextos de alta calidad documental mitiga las alucinaciones y mejora los resultados de negocio.

---

# 19. Cambios cognitivos en el trabajo diario

Reflexión sobre cómo el uso de copilotos de IA modifica nuestra memoria procedimental y los procesos de automatización de habilidades (similar a la transición de aprender a conducir un vehículo manual vs. automático), integrando la IA como una extensión cognitiva natural.

---

# 20. Flujo de trabajo en movilidad y bots de mensajería

Se demostró el uso de bots personales en Telegram (Jarvis y Hermes) construidos sobre arquitecturas Open Cloud. Este flujo de movilidad permite:
1. Enviar ideas rápidas, grabaciones de audio o contenidos por mensajería.
2. Procesar y enriquecer la información con ChatGPT en la nube.
3. Actualizar automáticamente la base de conocimiento local (Obsidian Vault) de forma remota y estructurada.

---

# 21. Segunda herramienta de la sesión: Obsidian

Instalación y principios de funcionamiento de Obsidian como lector interactivo de archivos Markdown. Se demostró cómo crear y abrir carpetas de proyectos como "Bóvedas" (*Vaults*) de conocimiento digital persistente e interconectado.

---

# 22. Blockchain como tecnología de registro distribuido

Introducción a la tecnología blockchain enfocada en su lógica de diseño:
- Es un registro descentralizado, inmutable y auditable.
- Elimina la necesidad de intermediarios de confianza para validar transacciones.
- Las transacciones registradas no pueden ser alteradas ni borradas históricamente.

---

# 23. Caso de estudio fundacional: Bitcoin y Satoshi Nakamoto

Se propuso el estudio del Whitepaper fundacional de Bitcoin (2008) redactado bajo el seudónimo de Satoshi Nakamoto para comprender cómo se estructuran las redes Peer-to-Peer (P2P) y el flujo de transacciones sin servidores centrales.

---

# 24. Criptografía de clave pública y clave privada

Conceptos de seguridad y firma digital en redes descentralizadas:
- **Clave pública:** Equivalente a una dirección visible o número de cuenta.
- **Clave privada:** Firma criptográfica secreta que demuestra la propiedad del activo. Su pérdida implica la pérdida total e irrecuperable del activo.

---

# 25. Mecanismos de consenso: Proof of Work vs. Proof of Stake

Diferenciación entre las formas en que una red valida transacciones de forma segura:
- **Proof of Work (PoW):** Consenso basado en la resolución de problemas matemáticos de alto costo computacional y consumo energético (ej. Bitcoin).
- **Proof of Stake (PoS):** Consenso basado en la garantía económica y el bloqueo de activos en la red, reduciendo radicalmente el consumo eléctrico (ej. Ethereum actual).

---

# 26. Alastria y redes permisionadas

Se expuso la red Alastria como un referente español y europeo de blockchain corporativo, mostrando la diferencia entre redes públicas (abiertas y sin permisos) y redes permisionadas (diseñadas para consorcios empresariales e identidad digital soberana).

---

# 27. Realidad Extendida (XR): VR, AR y MR

Introducción rápida de las vertientes de la tecnología visual y espacial:
- **Realidad Virtual (VR):** Entornos de inmersión digital completa.
- **Realidad Aumentada (AR):** Superposición de información virtual sobre el entorno físico real.
- **Realidad Mixta (MR):** Interacción dinámica donde los objetos reales y virtuales coexisten.
- **Realidad Disminuida:** La técnica de ocultar digitalmente partes del plano real.

Se citó a la empresa Palantir para ejemplificar cómo la integración analítica masiva y la realidad aumentada convergen a nivel institucional y de defensa.

---

# 28. Tesis central de la sesión: La convergencia tecnológica

La sesión concluyó conectando todas las herramientas: la verdadera ventaja competitiva surge al combinar tecnologías. La IA orquestada (Antigravity), la gestión documental estructurada (Obsidian/Markdown), la inmutabilidad de datos (Blockchain) y las interfaces visuales (XR) interactúan de forma sinérgica para habilitar nuevos modelos de negocio.

---

# Ideas clave de la sesión

- **La IA es un ejecutor activo, no un chatbot pasivo:** Debemos delegar tareas estructuradas en el sistema de archivos a agentes orquestados.
- **Saber estructurar es el nuevo programar:** Definir de manera conceptual el flujo y los datos es la habilidad clave.
- **Markdown como estándar de comunicación:** Optimiza el uso del contexto y reduce el consumo de tokens de forma óptima frente a DOCX o PDF.
- **Inmutabilidad y distribución:** Blockchain representa un cambio fundamental en el registro seguro de información sin intermediarios.
- **Diseño del prompt bajo presión:** Disponer de menos tiempo de ejecución exige prompts mejor planificados y estructurados, nunca lo contrario.

---

# Material de estudio y herramientas trabajadas

- Instalación de **Antigravity** (Google) y primeros pasos de proyectos multiformato.
- Instalación de **Obsidian** y gestión de Bóvedas de conocimiento digital.
- Ejercicio interactivo web (HTML/JS) con traducción multilenguaje del Conjuro de la Queimada.
- Curvas analíticas: Hype Cycle de Gartner, Difusión de Rogers y Abismo de Moore (Chasm).
- Fichas conceptuales sobre Blockchain, mecanismos de consenso, claves y Realidad Extendida.
- Preparación en directo de la tertulia macroeconómica para Radio Intereconomía.

---


# Transcripción
## Primera parte
30 de junio de 2026, 9:09a.m.
3 h 18 min 26 s
Buenos días a todos.  
Y encantado con en compartir con vosotros.  
Pues este curso, este curso que son, empezamos hoy martes 309 de la mañana.  
Ya hasta mañana miércoles, jueves, viernes y hasta el viernes. Compartiremos todo este ratito gracias a.  
La Universidad de Vigo, Generación Unión Profesional financiado por la Unión, o sea, la Unión Europea. Muchas gracias.  
Gracias a red.es, gracias a todo lo a al plan, gracias a.  
Al Al Ministerio, a todos los ministerios y los otros astros celestiales. Durante el curso, parte de los contenidos, además de la plataforma, los compartiré en el grupo de WhatsApp que os acabo de poner en pantalla. Meteros en este grupo, iré pasando enlaces y todo lo, o sea, compartiré enlaces.  
Alejandro, bienvenido, gracias Alejandro por estar por ahí.  
Gracias, Alejandro, un placer absoluto. A ver, voy a abrir por aquí, me estoy haciendo, confírmame, Alejandro, que mira, genial, hay un hay alguien que su teléfono empieza por 625. Bienvenido también. Si me puedes decir tu nombre, genial por aquello de dirigirme a personas, que esto de hablar solo.  
Pues de momento, bueno, si le preguntáis a mi mujer, pues probablemente lo de hablar solo se note en casa también.  
Pero bueno, bien, entiendo que estamos todos por aquí. Os cuento, voy lo primero que voy a Chema, encantado. Chema, ¿de dónde eres? Si me puedes dar un poquito de información, genial.  
De Zaragoza, pues y supongo de formación, ingeniero informático.  
Sí, pues os voy a compartir ingeniero informático y si me das algo más, Zaragoza, nosotros estamos en Ourense.  
Te pregunto, mira, y también se ha unido 6 Universidad de Zaragoza, 671106100. Ay, perdón, pues bueno, sí, encantado también la otra persona.  
A ver, voy a empezar por orden.  
Documento voy a compartir con vosotros.  
El Voy a compartir con vosotros, Armando, encantado, Armando.  
Y también está Alejandro por ahí, Armando, Chema y encantados. Voy a compartir con vosotros la primera de las de las diapositivas que voy a estar con las que voy a estar trabajando.  
¿Dónde está? ¿Dónde está? Aquí es. Os cuento estas diapositivas, estos materiales.  
No los he hecho yo, los voy a seguir como guía.  
Perfecto, buenos días, Andrea. Jo, qué bien, pues me encanta ver que hay gente por ahí. Os cuento los materiales, no los he hecho yo.  
Pero lo seguiré, pues porque al final los han mandado. Nunca está de más tener un bastón y antes de nada, viendo que estamos todos, entiendo que todos tenéis un ordenador portátil. Alguno estará viendo viéndome desde el móvil.  
Entiendo que todos tenéis un ordenador portátil relativamente cercano.  
Sí, si alguno, si alguno habla, le escucho desde aquí también.  
Creo.  
Yo los os cuento, va, fenomenal, qué maravilla. ¿Quién eres?  
¿Eres Andrea? No, a ver, yo soy, se están, o sea, soy absolutamente inclusivo y hemos y hemos tenido el mismo pensamiento más de uno por aquí. en Gratze Mile, Andrea.  
¿Os iba a contar Gratze Mile, estás dónde estás, Andrea?  
Fenomenal. Os cuento, voy a usar 2 herramientas. Usaré muchas herramientas durante el curso, pero hay 2 herramientas que brillan más, que lucen más o brillan más que el sol. Creo que se dice lo de España en algún momento. Os cuento.  
No sé si conocéis Antigravity, ¿te suena Andrea Antigravity?  
Andrea, ¿te suena antigravity o suena antigravity alguno?  
Andrea.  
¿A perdón, perdón, a mí no me espera, vale, tienes un ordenador cerquita, no?  
A ver, os cuento Antigravity, qué bien Chema también. Sí, pues Chema, si eres ingeniero informático y no has usado Antigravity, el curso ya te ha merecido la pena.  
Lo voy, lo voy a descargar y lo voy a instalar.  
Hay un teams que me he quedado descolgado, sí.  
E.  
Perfecto, se ha cortado un segundito, no os preocupéis, gracias Chema, no te preocupes lo que os estaba diciendo antigravity, me lo descargo download for Windows.  
Me lo estoy descargando.  
Me lo he descargado 2 veces lo de la impaciencia.  
Me descargo antigravity se está.  
Instalando.  
Es una instalación bastante rápido, bastante rápida.  
A.  
A ver, antigravity es de Google.  
Todas las herramientas que voy a estar compartiendo tienen su gemelo en código abierto y alguna vez utilizaré la de código abierto, a veces la de Google.  
Este En este curso soy absolutamente somos agnósticos en relación con la tecnología, la el antigravity en código abierto lo voy a poner antigravity en.  
Código abierto se llama Open Code.  
Open Code.  
Perfecto.  
Aquí.  
A ver.  
A ver si soy capaz de pasar antigravit a la otra pantalla.  
A ver que se me está abriendo por aquí.  
Vale un segundito, que es que me lo ha abierto antigravity en la pantalla pequeña.  
Luis, también unos segundos de poner el QR para que sí, perfecto, ahí vamos a poner el QR para que ellos se.  
Os vamos a poner un QR para que paséis para pasar asistencia.  
¿Lo estás poniendo tú desde allí, no?  
Ahí está.  
Sí, sin problema, pues aprovecho para ir metiendo mi clave de.  
Sí.  
Luego del descanso lo volvemos a poner por si alguien le falla, perfecto.  
Aquí estamos.  
Ya estamos cuando me déjalo un ratito, ya estoy, ¿no? Pues me he descargado Antigravity.  
Y me he logueado con mi cuenta de Gmail.  
Me he logueado con la cuenta de Gmail.  
Y le voy a decir que el clarito next de todas estas cosas que os piden.  
Antigravity, si necesita algo más adelante, le vais diciendo que o k finish perfecto y tenemos antigravity abierto, es muy sencillo.  
Y antes de contaros.  
¿Qué es? Lo voy a usar, lo voy a usar y además en a ver, lo voy a usar y en principio ahora durante el curso pasaré los contenidos, iremos viendo cosas ordenadas, pero de momento, ¿qué hemos hecho a los que os estéis incorporando? Hay uno, hay una persona que es 65281.  
Y más cosas en el teléfono que se acaba de conectar. Chema, entiendo que ya nos entrecorta el vídeo que me estás escuchando y viendo perfectamente, ¿no?  
Lo que hemos hecho hasta ahora es por un lado hemos pasado el código QR que dentro de un ratito lo volvemos a pasar y me he descargado antigravity.  
Si abrís antigravity, de momento, de momento podéis ver una pantalla vacía.  
Esto os recordará a cualquier LLM, podéis aquí abajo elegir modelo.  
Siempre usaré el Gemini 3.5 flash.  
El más caro de todos en cuanto a tokens de tokens, hablaremos mucho durante estas sesiones de consumo de tokens. Hablaremos mucho, igual que si vosotros conducís un coche, os tenéis que preocupar por la gasolina.  
Pues si usáis este tipo de tecnología, pues tenéis que preocupar por los tokens. El consumo de tokens será fundamental e iremos hablando de ello en capas. De momento, para empezar, podéis elegir entre.  
5 modelos de Google, 2 de Anthrophic, los de Claude y uno de Open AI.  
Por lo tanto, os bajáis antigravity y de momento ya tenéis Claude el modelo opus 4.6 gratis.  
Sí, os metéis con la cuenta y para empezar tenéis ese modelo gratis. Me he puesto el 3.5 flash law low y le voy a decir hola.  
A.  
Soy Luis García, suelo humanizar la tecnología. ¿Por qué? Porque luego vas al bar y si a la y si no tratas con educación es mi visión. Esto es discutible y no vamos a discutir de estas cosas, salvo que queráis. Si a la tecnología no la tratas con educación, luego te vas encontrando por ahí con gente.  
Y le tratas lo mismo. Hola, soy Luis García y estoy dando un curso en la universidad de Vigo a ingenieros informáticos.  
No conocían antigravity.  
Y estamos.  
Dando los primeros pasos en este sentido.  
¿Qué es, o sea, qué le acabo de? O sea, acabo de tratar antigravity como si fuera un LLM, un GPT de toda la vida. Le he preguntado una cosa, GPT. Bueno, en este caso es Yeminai y me dice, hola Luis, qué gran honor saludaros a ti y a todos los futuros ingenieros informáticos de la Universidad de Vigo.  
Bienvenidos a Antigravity con vuestro asistente de inteligencia para desarrollo de software, explorar y entender vuestro ta ta ta. Aquí estamos. Hola Luis, qué gran, o sea, ¿para qué sirve Antigravity? Pues no os lo voy a contar de momento. Aquí ya da alguna pista, dice, soy un agente autónomo.  
Realmente es más que un agente autónomo, es un orquestador de agentes. ¿Qué es un orquestador? O sea, un agente es el que toca un instrumento. El orquestador es el que hace tocar a varios músicos diferentes instrumentos. Insisto, acabamos de empezar el curso, me he acercado por detrás de vosotros y os he metido un empujón y os he tirado al agua.  
Estáis ahora chapoteando y descubrís. Puede que haya un poquito de nerviosismo al principio, pero vais a descubrir rápido en cuanto dejéis de dar palos que hacéis pie.  
Haces pie y flotas.  
Perfecto, de momento que he hecho he abierto esto, le he puesto un prompt y para allá dismis.  
Perfecto, segundo paso, este, o sea, igual que ya he hecho un disclaimer antes, estas no son, que os los he pasado por el grupo de WhatsApp, el que se haya incorporado después, no tengo inconveniente en volver a pasarlo y lo tenéis en la plataforma. Estas son las diapositivas que no he hecho yo y segundo disclaimer.  
Estoy en un ordenador que no es el mío, que tampoco hay ningún problema.  
Voy a abrir este ordenador por primera vez.  
But...  
Lo abro por primera vez, me meto aquí, me voy a meter en documentos y en documentos creo una nueva carpeta.  
Nueva carpeta y lo voy a llamar.  
Universidad de Vigo.  
Lo voy a llamar tía.  
Uno  
¿Esto es además sois todos ingenieros informáticos, no?  
Esto es una carpeta y dentro de la carpeta voy a crear otra carpeta.  
Nueva carpeta y la voy a llamar proyecto uno.  
Hola mundo.  
Como sois informáticos, lo de hola mundo ya os sonará, ¿no? Juan, sí, no, perfecto. Proyecto uno, hola mundo.  
A ver, vuelvo a Antigravity. En documentos he creado una carpeta y dentro de la carpeta otra carpeta, proyecto uno. Antigravity, estos los que uséis Cloude Cowork os sonará, pero no es o sea, al final, insisto, soy agnóstico en cuanto a las herramientas.  
Claude no lo voy a usar hoy, lo mismo mañana sí, pasado sí, pero al la filosofía que está detrás de todo lo que vamos a hacer está también en Claude.  
Y está en todo lo que veamos de código abierto. Bueno, antigravity, ya os he dicho, puedo, podéis aquí una conversación nueva. Esto es como si fuera GPT. Lo que voy a hacer aquí es mirar todos atentos a la pantalla. ¿Veis que pone Projects?  
En display options, no el botón de al lado le voy a dar create new project create crear nuevo proyecto.  
New project.  
¿Y el proyecto?  
Como es nuestro primer proyecto.  
Voy a añadir una carpeta.  
Qué bien, me abre documentos directamente y dentro de la Universidad de Vigo, proyecto uno, hola mundo.  
Seleccionar carpeta.  
Next.  
Y aquí le voy a dar, no os volváis, dime Diana, sí, aquí le dais a default.  
Default, a ver que le puedes dar full machine muy rápido. Bueno, lo vemos más adelante y ahora os lo cuento rápido.  
Antigravity es una herramienta que es para programadores. Es una herramienta muy poderosa. ¿Qué decía el tío, el tío? ¿Cómo se llama el tío de Spiderman? El tío Ben, qué decía el tío Ben que un gran poder, una gran responsabilidad. Con esta herramienta podéis hacer el animal. De momento, full machine y turbo mode.  
Cuidado, all termina, o sea, full machine.  
Puedes usar la máquina, pero te va a pedir default, o sea, te va a pedir antigravity, no te va a dejar borrar algo en discos. Si no le das permiso, no te va a dejar. Bueno, vamos a ir viendo cómo funciona, vale default.  
Star First Conversation al ya acabó, que tengo lo mismo de antes.  
Pero aquí.  
Me ha creado un proyecto que sinceramente no me gusta que me ponga aquí la dirección.  
No sé por qué lo ha hecho así, pero le voy a dar ahora aquí. Esto es Project Settings, la llave.  
Y le voy a cambiar el aquí, le pongo esto y le voy a quitar todo esto para que sea bonito.  
Proyecto uno.  
Hola mundo.  
¿Bien, qué tenemos aquí? Lo mismo de antes, podemos elegir el modelo que yo me voy a quedar con el 3.5 flash.  
¿Y proyecto uno, hola mundo, vale?  
Es mi primera vez con antigravity.  
Yo estoy poniendo esto, vosotros, bueno, de momento podéis poner más o menos lo mismo.  
Quiero.  
Empezar.  
Con un ejercicio sencillo.  
A ver, os quiero explicar al mismo tiempo qué es antigravity, qué diferentes tipos de archivos hay. Estamos en un curso.  
De tecnología avanzada.  
Y en ese, o sea, y ese contexto mental que yo tengo es el mismo contexto que le voy a dar a antigravity. Quiero empezar con un ejercicio sencillo.  
Hola mundo.  
Con lo de Hola mundo lo va a entender estupendamente, estoy en un curso donde.  
Vamos a ver en breve.  
Obsidian, Obsidian es otra herramienta, pero que él no me va a entender.  
Quiero que.  
Hagas una demostración de diferentes tipos de archivo.  
Una demostración: 2 puntos, crea diferentes tipos de archivos.  
Texto plano y doc.  
Imágenes.  
Y luego, dentro de texto plano, le voy a poner txtymd.  
Chema, la gente del WhatsApp. ¿Os suena el formato MD alguno Markdown? Entiendo que sí.  
Formato Markdown. ¿Os suena? Sí, perfecto, perfecto. Aún así lo voy a explicar muy rápido, pero justo me gusta lo de que lo usas en Cloude.  
Porque en este caso fue antes el Markdown que Claude, vamos a volver un poquito a los orígenes de todo esto YXLS.  
Y un HTMLHTML también.  
Bien.  
La carpeta que tenía, esta es la carpeta que he creado y es una carpeta vacía.  
¿Qué estoy haciendo ahora? Esto es un prompt, es mi primera vez con antigravity. Quiero empezar con un ejercicio sencillo.  
Le doy.  
Quiero empezar con un ejercicio sencillo, hola mundo, y le he dicho que crea archivos. A ver, si le hubiera pedido, si le hubiera dado una instrucción concreta, concreta, le hubiera hecho algo absolutamente concreto. En cambio, le he preguntado algo más general, cada uno de vosotros os dará.  
Un resultado diferente.  
En este caso.  
Me ha generado una imagen, la ha generado con el nandro banana de Gemini y me está pidiendo permisos. Me dice, me da, me pide permisos. En esta máquina está instalado Python.  
O no, perdón, Python versión no va a ver la versión de Python que hay. Le digo que sí, no sabe todavía si está instalado, va a ver si está Python instalado o no.  
Si no estuviera Python instalado, me va a decir no está instalado Python y te la y te lo instala.  
El otro día.  
Estaba en un ordenador que no era el mío, tenía antigravity, tenía que instalar el certificado digital el arroba firma y me lo bajó antigravity.  
Rampay Zone.  
Me lo bajó y me lo instaló.  
Me descargó el programa, la primera me dice para esto tienes que usar el arroba firma y le dije descárgamelo, me lo descargó y lo instaló.  
A ver, está trabajando.  
Tenemos el Python instalado 3.12.3, no sé para qué.  
¿Ha instalado Python? No lo sé, o sea, porque para lo que bueno, lo mismo para crear el doc o para alguna cosa de estas.  
Está tardando un poquito.  
La carpeta sigue vacía.  
Y luego, mientras está tardando, está tardando demasiado.  
Pero da igual, me voy a ir 1 segundo a Settings y os voy a enseñar una cosa.  
Dentro de si usas Chema Claude, esto te recordará.  
Me voy aquí a models.  
Esto os recordará a Claude.  
Yo que he hecho hace 5 horas, perdón, hace hace 3:30 minutos, hace 3:30 minutos me he metido en me he metido en Antigravity y le he dicho hola para que para que empiece a correr el contador. O sea, tienes.  
Cada igual que Claude tienes ventanas de 5 horas para un consumo determinado, como os tenía que dar clase a vosotros. Yo hace 3 horas he apretado un botón para que el contador me vuelva a saltar dentro de 2. No voy a tener ningún problema con los tokens, pero ante la duda.  
Me queda 1:05 minutos y luego esto es lo que llevo consumido durante toda la semana.  
Esto es para los modelos de Gemini.  
Para Claude.  
Pues esta semana he usado un 85% y de momento ni lo he tocado.  
Vuelvo para atrás, cierro esto.  
Sigue con esto, pues con permiso lo voy a parar.  
de la versión.  
Antigravity es gratuito y lo he descargado desde pones en Google, o sea, en pones en Google antigravity punto, o sea, antigravity y directamente entras en el enlace y lo descargas. Le voy a dar, hazlo otra vez y sin.  
Quedarte atascado.  
Que estoy en una demo y menuda vergüenza.  
No.  
Sí, no a ver a vosotros probablemente si alguien lo está haciendo en paralelo le ha funcionado, pero en este caso concreto la primera que lo estoy usando quiero quedar bien con la gente.  
Mira, ya se ha puesto las pilas a crear archivos.py me ha creado un Python. Luego vamos a hacer durante el curso, vamos a crear a ver.  
Yes a Always Allow. Luego vemos los permisos como lo acabo de instalar. Luego vemos como que no nos pida tantos permisos. Importante lo de antes, cuanto menos permisos te pidas, más riesgo hay de que lie una gorda.  
Perfecto task output.  
Me ha creado un TXT, un MD, un CSV intentando crear un X. Mira, se le está atragantado proceso completado.  
De momento, solo ha creado un archivo PY, o sea, solo ha creado este programa en Python e insisto, me está yendo demasiado lento. Voy a editar con el Notepad el programa que ha creado para verlo por cotillear y por hacer ya *****, menos mal, ya está, o sea.  
Importante.  
Sois ingenieros informáticos.  
Esto que os voy a decir, no sé, o sea, yo soy ingeniero industrial.  
Y estudiaste 20 años.  
Si alguien nos dice que es experto en esto, probablemente esté mintiendo. Esto es un mundo que estamos todos descubriendo juntos, dicho lo cual.  
Cada vez vamos a escribir menos código.  
Y cada vez más tenemos que pararnos a pensar en lo que queremos hacer. Tenemos que tener claro qué queremos hacer, tener ordenadísimos los datos.  
Y luego viene el código porque os estoy diciendo esto porque acabo de abrir el Python que ha creado el de crear archivos.  
Este es.  
Antigravity, el PY que ha creado.  
¿Ha ejecutado este programa de Python?  
Y una vez ha ejecutado este programa de Python, me ha creado lo que yo he dicho, veis que en la carpeta.  
Hay 123, vuelvo antigravity.  
Vuelvo antigravity.  
Y me dice.  
He creado.  
La imagen que ha creado antes la ha copiado. He creado un archivo texto, un md, un doc, un csvy un HTML.  
En el proceso que acabo de seguir.  
Si tenéis sensibilidad, tendréis que haber visto una cosa.  
El archivo MD.  
El CSV.  
Y el TXT los ha creado de forma inmediata. No le ha costado trabajo. Esto es equivalente a si yo bebo un vaso de agua, yo me bebo un vasito de agua y el agua la consumo rapidísimo.  
En cambio, si me tomo un bote de garbanzos, la digestión de los garbanzos es mucho más lenta en este sentido.  
El punto doc.  
El XLX.  
O el doc y el XLX, luego el HTML también, pero es diferente el HTML porque el HTML sí es texto plano, el doc y el XLS, o sea, y el Excel para abrirlos necesito un procesador.  
La digestión de un doc y la digestión del XLX es mucho más lenta. A ver, voy a abrir.  
El TXT.  
Esto es texto plano.  
¿Dónde está, dónde está abrir con?  
Edit note notepad.  
Hola mundo, este es un archivo de texto plano creado para la demo de Antigravity.  
Perfecto.  
Voy a abrir ahora.  
El.  
Tsvy lo voy a abrir con.  
Lo voy a abrir lo mismo con el notepad o con el editor de si no tenéis notepad instalado en el ordenador.  
Lo podéis abrir con el editor de notas que está en todos los ordenadores instalado por defecto. En este no lo veo, pero todos los ordenadores tienen un editor de notas. Yo lo voy a abrir, editar con el Notepad.  
Y aquí veis que es texto plano, pero si veis ID, coma, nombre, coma, email, ¿qué es el formato CSV?  
Es como un Excel, pero en texto plano voy a abrir el Excel.  
Y para abrir el Excel necesito abrir antes otro programa. Para abrir el archivo necesito antes abrir un perdonadme el nombre que voy a usar. Necesito abrir un compilador, o sea, un programa que me permita ver el Excel. También puedo abrir.  
También puedo abrir el CSV dándole 2 veces por defecto con el Excel y cuando lo abra con el Excel, vais a ver todos cómo.  
El formato de primeras.  
No coinciden, sí.  
Aceptar, perfecto, vais a ver cómo de primeras.  
No es el formato Excel, pero le doy aquí marco la columna.  
Pista, datos, perdón, datos, texto en columnas.  
Y aquí siguiente separado por comas, siguiente finalizar y lo tengo un poco, o sea, y ya lo tengo trabajado. O sea, he tenido que trabajar un poquito para poder verlo con el Excel. Aquí una de las cosas que quiero que veáis que iremos trabajando durante estas sesiones.  
Es que no es lo mismo hacer.  
Algo que tenga que leer una persona humana que hacer algo que tenga que ver una inteligencia artificial.  
Estoy trans, o sea, estamos grabando esta sesión.  
Mañana veréis cómo con la transcripción de hoy. Mañana veremos cómo con la transcripción de hoy, teniendo datos de calidad, podemos construir a una velocidad tremenda. Pasado veremos cómo.  
Con el trabajo que llevamos hecho podemos construir a una velocidad tremenda, pero para eso es fundamental tener datos de calidad y luego saber que estamos hablando no con una persona, sino con una máquina.  
Si yo quisiera a mi jefe mandarle un archivo, se lo mandaría en punto doc.  
En este sentido, abro el punto doc.  
Es la única vez que vamos a usar DOC durante estas sesiones.  
Y abro el doc, ay, mira, qué gracia.  
No tiene bien pillado los acentos.  
Esto que probablemente nos pase en formato Markdown o en formato de texto plano y desde Antigravity lo corrijamos en 1 segundo para corregirlo desde Word. Gastaríamos muchos, muchos más tokens porque tiene que pasar por el proceso de compilación, la digestión del dock.  
Es más lento y luego, por último, voy a abrir el MD.  
El MD editar con Notepad.  
Hola mundo, ¿veis un asterisco ahí? ¿Veis 2 asteriscos? Perdón, 2 veis un hashtag aquí, 2 hashtags y aquí.  
2 asteriscos.  
El formato markdown.  
Es un formato especial.  
Voy a ir por partes muy rápido.  
Voy a ir, mira, esto no había acabado antes.  
No había acabado.  
Lo que he hecho antes, o sea, antigravity en este en este hilo está un poco tontorrón.  
Vale.  
Hey.  
¿Veis 1 segundo de la pantalla?  
Me está escuchando el ordenador.  
No sé cómo, pero mola.  
No sé, o sea, esto lo que está sucediendo ahora, no sé cómo lo he hecho.  
Pero mola porque ha expulsado a tiempo.  
Pero lo , pero no lo perfecto, no vale. Sí, no me encanta, me encanta. Lo más. De momento no voy a hablarle, pero me viene estupendamente. Le voy a decir, bueno, se lo que que narices, de momento no.  
Me encanta lo que has hecho.  
Me encanta lo que has hecho.  
No sé cómo lo he hecho, no ha sido pulsando. Va, da igual, me encanta lo que has hecho. Quiero explicarles más a fondo el formato MD.  
Mete, o sea, el archivo que ya has creado, hazlo mucho más completo explicando el formato y cómo presenta.  
Acción del curso, esto es Ourense, si además metes.  
El conjuro.  
¿Cómo es el conjuro de la el el conjuro de la queimada de el conjuro de la queimada? Sí, de la él lo va a entender.  
De la queimada y.  
Algún.  
Guiño gallego, mejor.  
Sí, da igual.  
Dime, dime.  
He dejado varios archivos en una vez.  
¿De cuál es el HTML? Ahora voy, lo he hecho a posta.  
El HTML.  
Sí, a ver, el PNG es que bueno, mientras está ejecutado, o sea, si es que el MD lo tiene que hacer rápido.  
De momento, este antigravity está yendo un poquito, debería de ir mucho más fluido.  
mirar, todavía es han.  
Le voy a dar a parar.  
Y ahora le digo que mande este, o sea, le he pedido que ejecutara antes varios archivos diferentes al tenerle que hacer pasar por varios archivos.  
Tarda más, en cambio, ahora lo que le he dicho es simplemente.  
Que un markdown que ya había hecho lo le cambie el formato. Esto él lo hace de forma automática. Esto es una cosa que quiero que veáis, funciona con los markdown de forma automática. Os voy a abrir el markdown.  
Os voy a abrir el markdown.  
Este es el que teníamos antes, o sea, aquí tenéis, este es el que teníamos antes, que si os acordáis ponía solo hola mundo.  
Ahora lo voy a abrir con el notepad.  
¿Y veis que ya parece más largo?  
Importante.  
No importante, no de momento tengo un archivo hola mundo.md.  
Una de las cosas que veremos, especialmente el último día de clase, tiene que ver con la flexibilidad. Editor Markdown.  
He puesto en Internet editor Markdown.  
¿Este es un editor Markdown, vale?  
Online.  
De estos hay 300000000 y le voy a decir importar desde.  
No visualizar, quiero subir el archivo como se sube el archivo.  
Importar desde no.  
Archivo Markdown.  
Me meto.  
Proyecto uno, hola mundo y veis que el archivo markdown que tengo aquí se lo subo.  
Y aquí tenéis el archivo a la izquierda, tenéis el archivo en texto plano.  
Y a la derecha es tenéis como ese archivo en texto plano se traduce.  
¿Se traduce en los formatos que representa, por ejemplo, voy al formato de texto, vale?  
A la izquierda veis como si tenéis solo un asterisco es cursiva.  
Si tenéis 2 asteriscos, negrita, 3 asteriscos, negrita y cursiva. Esto yo ya no lo sabía, tachado, resaltado.  
¿Listas?  
Mirar, veis mirar en la izquierda, pues se debería de haber si yo pongo aquí una.  
Y yo pongo ahí.  
Una X.  
A la izquierda se marca, ¿me seguís?  
¿Qué es el formato Markdown? Es texto plano. A la máquina se le hace cómodo ver el texto plano, pero al ser humano también.  
Es algo que el ser humano, cuando lo ve, dice ni tan mal, estoy cómodo con ello.  
Y luego código de prueba, esto es algo que nos ha metido.  
¿Dónde está el código de prueba, código de prueba?  
Espera, está debajo del conjuro de la Caimada. Perdonad, código de prueba.  
Importante, aunque ponga aquí para ejecutar código en tus notas, puedes usar bloques con 3 acentos. Esto lo que permite es copiar y pegar, pero Markdown es solo un editor de texto, no permite ejecutar código como tal.  
Profes, o sea, este es un ejemplo, una tabla en formato Markdown, que es la misma que os ha hecho con el XLX y aquí tenéis el consuro, mousos, corusas, sapos, ebrusas. A ver, ahora esto lo estáis viendo desde Internet.  
Os voy a pasar en el grupo de WhatsApp.  
El mismo archivo que acabo.  
De enseñaros al estar viéndolo en Internet, más adelante sí lo haré. Ahora no, porque esto está subido en Internet, pero tengo la tentación al ver esto así de coger antigravity y decirle tradúcemelo también al castellano.  
Y te lo hace instantáneamente, toda esa magia la vamos a ir viendo.  
Bien.  
Editor de Markdown, este es un editor online que ahí lo tenéis.  
Sigo con el proyecto uno.  
Voy a enseñaros Diana aquí, que la tenemos en local, me ha dicho, ¿y qué pasa con el HTML?  
HTML es una página web, o sea, HTML es formato web. Por favor, si alguna de las cosas que digo desde un punto de vista técnico es una barbaridad, corregidme y os adelanto las disculpas. HTML es un formato que al que el navegador de Internet lo reconoce. y.  
Y lo voy a abrir.  
Bueno, me lo abre por defecto con Mozilla con Thunderberg, pues que me lo abra.  
¿Lo abre con pues con Thunderberg, vale?  
Hola mundo.  
¿Es una página web sencillita que pone hola mundo, vale?  
Me meto en antigravity y le digo.  
Laudel.  
Consuro, estupendo. He puesto una X, lo juro, no, o sea, lo he puesto mal, pero en mi cabeza era una X. Estupendo. Ahora quiero ir al HTML, quiero que les explote.  
La.  
Cabeza.  
Haz una.  
Chula, sencilla.  
Potente, rápida y didáctica sobre el archivo que ya.  
¿Habías?  
Creado.  
Le digo.  
Que sobre el archivo HTML que había creado me haga una página web. Lo de antes, el HTML es texto plano.  
En teoría, debería de hacerlo rápido, cómodo.  
Y aquí nos está diciendo que a ver, le he pedido que os estalle la cabeza. Por lo tanto, se lo currará un poquito. Ha estado pensando 10 segundos.  
Edita, ya ha editado la página web, le ha quitado un carácter y le ha puesto 612 caracteres. Hecho, he transformado el archivo Hola Mundo en una herramienta web interactiva para dejar a todos boquiabiertos. ¿Qué hace esta página web? Buah, qué maravilla, qué maravilla, porque no lo tenía pensado.  
Y esto no lo tenía pensado.  
Lo que vais a ver no lo tenía pensado, refresco la página web.  
YK.  
¿Qué hueves?  
Es un editor de Markdown.  
El editor que os he enseñado.  
Lo acaba de hacer.  
Es un editor de Mark, creo que es un editor de Markdown, ¿no?  
Sí, y le voy a decir, voy a ir un paso a ver.  
¿A ti te ha hecho? A mí me ha hecho una página donde registra el rendimiento académico de los alumnos, los he inventado y ha puesto las notas.  
Me ha hecho un editor de Markdown. Este editor, a ver, que nadie se me enfade por lo que voy a hacer. Es solo para probarlo, que nadie se me enfade. Soy vengo desde Madrid, Juan, mira lo que voy a hacer, mira la pantalla, le voy a quitar la U.  
Le acabo de quitar.  
La u a Ourense y veo que lo que hay en un lado se pone en el otro, ya se la vuelvo a poner la u a Ourense y lo que le voy a decir para que veáis cómo funciona.  
Yes.  
Está es bueno, es que está estupendo.  
Además, quiero que la página tenga una.  
Pestaña con el.  
Conjuro en español.  
Y gallego al lado y quiero que tenga un botón para cambiar el lenguaje del español al gallego y al japonés.  
Vale.  
Le pedí, o sea, desde que he visto lo del editor antes de Markdown, tengo ganas de entender el conjuro en castellano. Pues por un lado le he dicho pónmelo también en castellano, pero os quiero enseñar también la funcionalidad y le he dicho pónmelo en gallego y en japonés.  
Ya está. ¿Veis que es texto plano lo rápido que va? Ahora estoy mucho más tranquilo porque va a la velocidad a la que tiene que ir. Chema, ¿qué tal lo llevas?  
Chema o alguno, si tengo alguno que siga despierto y se manifiesta, estupendo.  
Fenomenal, voy para allá.  
Vuelvo a la página web donde está la página web de Zunderberg, hemos dicho no, aquí está.  
La página web le digo actualízate.  
Le he pedido una pestaña para el consuro, mira, Juan.  
Y traducción del conjuro.  
Boos, lechuzas, sapos y brujas, demonios, duendes, diablos, espíritus de las nevadas Vegas, le digo al consuro.  
Me pone burbujitas.  
Y luego, si le queréis vender esta página en algún japonés.  
Aquí lo tenéis en japonés.  
¿Mola o no mola?  
¿A ver qué puede pasar también? Pues veis, yo tenía ganas de leer el consuro en español. Lo he conseguido hacer y soy tan capullo que no me paro a disfrutarlo y a leerlo.  
Púos, lechuzas, sapos y brujas, demonios, duendes y diablos, espíritus de las nevadas veigas, cauces, cabrons, coces y quemadas, fuegos de las quemadas ortigas, vale.  
Esto es fundamental, con la inteligencia artificial, con la tecnología, volamos.  
¿La pregunta fundamental es para qué volamos? Pues volamos para tener más tiempo para estar relajados y disfrutando.  
Aquí es una cosa fundamental, no es la primera vez que doy esta clase, no es la primera vez que enseño esta herramienta.  
El tiempo que tardamos en pensar es esencial. O sea, tenemos que dedicarle el tiempo a planificar porque luego hacer hace a la velocidad de la luz. Insisto, iremos viendo durante estos días. No es lo mismo tampoco, Chema, que sois ingenieros informáticos.  
No es lo mismo jugar que construir, yo ahora mismo estoy jugando.  
Si estuviera construyendo, no puedo tener una página web funcional. Así habría que haber ido paso a paso. Primero planificación, luego estructura, luego diseño la página que, insisto, puedo usar a la IA para todas estas cosas, pero si estoy construyendo hay que ir paso a paso.  
En cambio, si estoy jugando.  
Pues ya veis, nos lo pasamos todos o yo al menos.  
Disfruto como un enano.  
El país valenciano.  
Armando Jesús.  
Jo, gracias porque al final estás aquí solo y necesitas un poquito de vuelta también.  
A ver, no sé, vuelvo, acaban de decir aquí en la sala, estoy por compartir la página.  
La que os acabo de hacer.  
¿Estás todo dentro de este HTML?  
En podría haber otras páginas webs que él te lo hace también. Antigravity te lo puede hacer según le dé. Puede que alguno de vosotros os lo haya hecho con otro archivo que es CSS, la cascada de estilos. CSS es el formato. Si hay algo que se mueve dentro de la página web es JavaScript, que por cierto.  
No sé cómo ha hecho que se muevan las cuando aprietas el consuro, pero lo que voy a hacer es compartir en el grupo de WhatsApp.  
La página web que acabo de hacer.  
Es un hola mundo.  
Hola mundo 2.0 en gallego y con la queimada.  
El primer día que sientan a alguien en una universidad delante de un ordenador a programar, lo razonable es que te hagan un ejercicio tipo lo que acabo de hacer de Hola Mundo desde que existe la I A.  
El hola mundo pasa a ser hola mundo, pero menudo planeta.  
Y luego, Diana, que me has preguntado también tenemos un JPG.  
El JPG, pues es el la imagen que antes no se había hecho, pero importante.  
Os voy a estar enseñando durante estos días una caja de herramientas.  
Antigravity es muy bueno para editar texto plano. Si queréis jugar con imágenes, no uséis antigravity. Si queréis hacer sumas y restas, no uséis un LLM. Si queréis sumar y restar o multiplicar, usar Excel. Al final, dentro de las herramientas que vamos a estar viendo.  
Cada herramienta sirve para una cosa.  
El punto doc le ha costado, el XLX le ha costado y luego no lo suelo hacer mucho, pero como esto es un curso para profesionales, fundamental 2 ideas.  
Consumo de tokens.  
Que llevo de la hora, llevo un 11% y tan mal fundamental y de estos tokens importante de estos de este 11% de tokens, probablemente el mayor consumo de tokens ha sido con la chorrada que hemos hecho con el Word y como en el Excel.  
Back.  
No me preocupa, no me preocupa gastar tokens, pero es lo que sí que quiero que veáis es que un 11% para la chorrada que hemos hecho parece excesiva, pero es que dentro de la chorrada, si lo hubiera pedido un hola mundo en MDY en HTML, no me hubiera consumido tantos tokens ni de broma.  
Importante de 2 cosas, consumo de tokens y en este caso no voy a mirar la RAM, pero la memoria es otro de los elementos fundamentales. Tenemos que estar mirando.  
Tenemos que estar mirando. Hola, Margarita. Ay, Margarita, qué bien, yo te conozco de otras vidas. Encantado, Margarita.  
Eh.  
Fenomenal.  
Bien.  
Primer.  
Primer ejercicio hecho.  
Os cuento, vamos a ir.  
Vamos a ir a ver hacia dónde vamos de 2 vamos a ir.  
Vamos a ir a por.  
A ver.  
Os cuento, a las de 12:30 a una voy a hacer un de 12:30 a una. Voy a hacer un descanso porque tengo una tertulia en radio intereconomía. Mañana no habrá interrupciones pasado tampoco o de momento no tengo ninguna interrupción programada más. Esa tertulia de intereconomía me van a mandar los temas en algún momento.  
A ver, esa tertulia me van a mandar los temas, la voy a preparar delante de vosotros, me van a mandar los temas, voy a metérsela a Hermes por un lado, que es un agente que os lo enseñaré dentro de 2 días, el agente Hermes cómo funciona y lo voy a usar también con SAT GPT.  
Voy a usar los 2 en paralelo para que veáis la gestión de la información, pero eso lo voy a hacer un poquito más adelante cuando compartan los temas ahora.  
Lo que voy a hacer es coger.  
El.  
El PowerPoint que os he, o sea, el PDE, bueno, no.  
Ya sé lo que voy a hacer y os pido disculpas por voy a abrir nueva carpeta, o sea, voy a coger la presentación, voy a trabajar con la presentación que os he mandado, voy a abrir proyecto 2.  
Y el proyecto 2 lo voy a decir, lo voy a llamar materiales.  
Voy a seguir gastando tokens, pero.  
Con fin didáctico, esto solo lo voy a hacer con los materiales del primer día.  
Me voy a el power, el doc, perdón, el PDF que he compartido lo tenéis en el campus.  
El doc que he compartido.  
Me lo acabo de descargar.  
Me lo he descargado, el doc que he compartido.  
qué bien.  
El doc que he compartido.  
Lo he descargado.  
Y de las descargas, este es el dog.  
Opillar.  
Proyecto.  
Proyecto 2.  
Y pegar en relación con los materiales que os he compartido.  
Lo que voy a hacer es lo que os recomendaría que hicierais cualquiera de vosotros cuando tenéis que trabajar con o bien un agente o con un LM.  
Si cada vez que vais a trabajar con el LLM le subís el PDF, es equivalente a.  
Si yo que estoy trabajando en Ourense, cada día que vengo a Ourense, vengo en coche y vuelvo en coche desde Madrid. Es mucho más cómodo pasar el PDF a un formato Markdown que pueda usar el ordenador y luego ya con el formato Markdown funcionas. Aquí hay varios niveles de hacerlo.  
Y lo que le voy a pedir es por un lado.  
El proyecto uno lo cierro, o sea, lo cierro, lo dejo ahí. Voy a abrir un nuevo proyecto, New Project Add Folder. Vale, el New Project va a ser el proyecto 2 materiales.  
Seleccionar next y default.  
Créate.  
En el.  
PDF.  
¿Que tienes?  
Hay una presentación de un curso.  
Quiero jugar con la presentación.  
Quiero jugar con la presentación.  
A.  
Quiero primero.  
Crear un MD que me sirva luego para trabajar.  
Esto va a tardar un poquito.  
¿Qué está haciendo? Está analizando el PDF.  
Y lo que va a hacer es con los textos, con todo la documentación que se vaya encontrando dentro del PDF.  
Lo está analizando, ha extraído todo el texto de la presentación que os he compartido.  
Introducción y marco general.  
Está trabajando y me lo va a poner en un MD.  
Le voy a decir luego.  
Tengo alumnos.  
Delante.  
¿Con qué formato me recomiendas trabajar para que sea rápido y fluido el digerir todos los temas del PDF?  
Importante lo que os he dicho, estoy consumiendo tokens porque el proceso de.  
Analizar el PDF y sacar los materiales.  
Cuesta un poco. Una vez tenga el markdown, es como si hubiera llegado en coche a Ourense. Ya no tengo que volver a preocuparme por tener que abrir el PDF. Por lo tanto, lo primero, si.  
Si vosotros dentro de antigravity apretáis aquí.  
Aquí podéis ver el contenido del archivo que ha que ha creado por un lado este archivo.  
Lo tenéis aquí, presentación, curso MD y luego también lo podéis ver aquí. Módulo uno, las diapositivas que he compartido con vosotros tienen primero una introducción y marco general, tendencias tecnológicas emergentes, luego inteligencia artificial, estado del arte y disciplinas profesionales. Luego hay que hablar un poquito del blockchain y web 3.  
Más allá de la especulación y luego de realidad extendida, y o sea, realidad virtual, realidad aumentada, XR que lo junta todo. O sea, hay muchos palabros y vamos a ver todo, probablemente blockchain.  
Hoy solo veamos la introducción, porque blockchain es suficientemente profundo como para que haya que hacerlo a cachitos.  
Aún así.  
Estas son las la presentación que tenéis.  
Y esto es lo que me ha hecho, introducción y marco general, tendencias tecnológicas emergentes.  
Diapositiva cuatro, definición operativa. A ver, por un lado, le voy a decir esto: ¿con qué formato me recomiendas trabajar para que sea rápido? Y le voy a decir, además, quiero gastar la menor.  
Cantidad posible de toques.  
Por un lado le he puesto a trabajar y por otro lado sigo leyendo a ver con qué formato me dice con qué formato prefieres que trabajemos. Recomendado crear un dashboard interactivo HTML local único con simuladores de decisión, flashcard conceptuales y mini test interactivos para la clase.  
Luego convertir el contenido en una presentación HTML ejecutable, diapositivas fluidas para proyectar.  
Generar un archivo Markdown ultra ligero con analogías rápidas de 30 segundos para cada concepto complejo.  
Insisto.  
No quiero hackear la clase entera. Lo que os estoy enseñando es cómo funcionar con la tecnología. Le voy a dar al uno porque me lo recomienda, porque mola y porque es cómodo. Se lo mando.  
Y me va a crear un HTML para el PDF que os he mandado pasando por un archivo MD hacerlo digerible.  
Luego, introducción y marco. Estas son los contenidos de hoy. Hay una introducción, me pone aquí las referencias.  
Diapositiva 5, las fuerzas.  
Resumen, que el mundo va rápido y Goldman Sachs dice que esto está cambiando mucho. En Stanford dicen que hay que programar.  
¿Os suena a todos? Supongo que sí, el ciclo de Gardner.  
No, pues voy, voy al ciclo de Gardner, voy al ciclo de Gardner.  
No, pero da igual, voy por un lado, estas son las diapositivas.  
Esto es lo que ya hemos visto, definición operativa de tecnología emergente, pues que emerge avance, o sea.  
Este es el ciclo de esto es la curva de Gardner, lo que viene a decir este es tiempo y esto es lo que nos emocionamos, la visibilidad, la curva de Gardner, resumen de la curva de Gardner, que como seres humanos que somos nos calentamos, aparece la inteligencia artificial, aparece el blockchain, aparece el bitcoin, todos nos ponemos a hablar de ello.  
Llega un momento que está ya la burbuja la crisis.com baja, cae. Esto de Internet es una porquería, esto no sirve para nada. El blockchain nos han engañado, hemos sido estafados, pero luego al final la tecnología sí que tenía sentido y se acaba equilibrando. Esta es la curva de Gardner que es la que tenéis ahí.  
Es la curva de Gardner.  
Es un ejemplo, pero voy a buscar la última: Karner Urba.  
2026.  
Imágenes.  
Esta supongo, sí, esta es la del 2026. ¿Por qué busco la del 2026? Porque cada año va cambiando la curva de Garner.  
La curva de Garner va cambiando cada año.  
Copiar imagen.  
Os lo meto en el grupo, la imagen esta lo tenéis ahí.  
¿Y esto qué dice? Que cada curso, cada cada tipo de tecnología está en un momento determinado.  
Por ejemplo.  
Quantum, Quantum está creciendo. Hablaremos un poquito de computación cuántica mañana, la IA ahora justo esto que estamos, la inteligencia artificial.  
A ver.  
O sea, nosotros estamos ahora, bueno, el prompt engineering, yo creo que ya hasta lo ha pasado.  
¿Dónde pone aquí? A ver, nosotros lo que os estoy enseñando ahora de antigravity.  
Está por aquí subiendo, está por aquí subiendo antigravity. Lo del prompt como los pantalones de campana, yo creo que ya está empezando a caer.  
Si tenéis hijos, lo del Six Seven claramente ya va por aquí.  
El Six Seven está por aquí.  
Y luego llega un momento que la tecnología.  
Que la tecnología vuelve a recuperar.  
Que la tecnología vuelve a recuperar los me hace gracia. Los hackathones de inteligencia artificial debieron de tener el hype en algún momento. Resumen, echo de menos aquí. A ver, es que este es solo de inteligencia artificial, este es solo de inteligencia artificial.  
Hemos sido engañados.  
Yo quiero la general.  
Echaba de menos la el mundo cripto.  
A ver, este es de arquitectura empresarial, un segundito, si no la encuentro rápido, mañana la vemos o en otro momento.  
Han sacado de ella a ver.  
Es de ella.  
Total, no, a ver, espera 1 segundo que quiero.  
Oh, esta es teórica general.  
Vale, me quedo con la del 2025.  
Es que está claro que estamos con un hype de la inteligencia artificial, no que solo se habla de inteligencia artificial y no se habla de nada más.  
Me voy a ver, sale la del 2022, me voy al 2022, ¿vale?  
Me voy al 2022.  
Por ejemplo, en el 2022 sí que hablaba de tecnologías emergentes y en el 2022 el la web 3 estaba, los NFTs ya estaban empezando a caer y todo lo que es mundo cripto en aquel momento estaba por aquí. Si os fijáis en el año 2022.  
La inteligencia artificial de diseño generativo.  
Están abajo.  
No sé, a ver, GPT aparece en diciembre, no sé si es 2022 o 2023, creo que es 2023.  
Pero vais viendo como plataformas, o sea, como esto va evolucionando.  
Bueno, que me estoy enrollando demasiado.  
Y quiero ver muchas más cosas, en le he dicho, mira, me ha me ha creado el dashboard.  
Esperar, la curva de Garner la hemos visto.  
Me han dicho GPT, no noviembre de 2022. Por lo tanto, la curva de Garner que que os acabo de enseñar, que es de 2022, es probablemente antes o cuando no, probablemente Garner.  
Acabo de enseñaros la de 2026 por sí, pero os he enseñado la de 2026, es decir, el 2026 no está cerrado y hemos visto la del 2026. GPT aparece en noviembre, que para mí es el puente de diciembre de 2022, por lo tanto en esa curva.  
No había aparecido GPT todavía.  
¿Veis un poco el juegos, no?  
Y luego la curva de difusión de Rogers. Esto me interesa mucho. Voy a ver, por un lado, voy a las diapositivas donde están las diapositivas. Aquí están las diapositivas. La curva de Roger es esta de aquí.  
Me interesa el abismo de Moore, me interesa que entendáis qué es eso del abismo de Moore.  
Porque para Apple.  
Eso.  
¿Cómo se puede decir putada encima?  
Sí, para Apple es para Apple. El abismo de Moore es un problema. Para nosotros, que somos pequeñitos, es una bendición.  
Os explico y antes de nada quiero ir a ver cómo está el pollo que estaba preparando. Le he dicho que la presentación este PDF que me lo hiciera en un HTML para liquidármelo rápido con vosotros.  
Sí, y a mí y lo voy a abrir.  
Esto es la mira, tarjetas analógicas.  
A ver.  
Aquí hay que mejorar alguna cosa.  
A ver, , pero ni tan mal. Introducción, las cuatro palancas, cambio, simuladores. Hay múltiples escritores, entidades que registran datos que no confían entre sí.  
Pues supongo que sí.  
Hay unas, bueno, y mini testing, no me gusta, lo cierro.  
Fierro.  
Y vuelvo aquí, ¿qué es la curva de Moore? La curva de Moore es tema de adopción de tecnología, o sea, es una curva de Gauss. ¿Cuál es el área de la curva de Gauss? Pues evidentemente, si dentro de la curva de Gauss está toda la población, el área es el 100 * 100%.  
¿Y qué tenemos en el eje de abscisas?  
El proceso de adopción de la tecnología.  
A la izquierda tenemos los frikis, los que adoptan la tecnología en cuanto salen, y a la derecha tenemos, por ejemplo, en mi caso, a mi padre, que yo le estoy intentando enseñar la inteligencia artificial cómo funciona y me dicen, no, jamás, probablemente a ver, no lo sé, pero.  
Y luego tenemos la inmensa mayoría de la gente.  
O sea, la introducción de la aparece, por ejemplo, un teléfono móvil. Los que somos un poco mayores nos acordaremos de gente que iba por la calle con una maleta. Al principio de la tecnología de los teléfonos móviles, había poca gente que usara teléfonos móviles luego.  
Nokia Motorola empiezan a sacar teléfonos móviles. Mucha gente, mucha gente tiene teléfonos móviles y llega un momento en el 2008 que Steve Jobs saca el iPhone.  
Y cuando te quieres dar cuenta, todo el mundo tiene un teléfono móvil en su bolsillo.  
¿Qué es esto del abismo de Moore?  
El abismo de Moore.  
Es lo que separa a los frikis del uso comercial masivo.  
Apple saca las gafas, Apple saca las gafas esas que son de Apple, que molan. Yo no las he usado, pero los que lo han usado dicen que están 1 hora flipando y luego les da dolor de cabeza.  
Apple lo saca, lo compran los frikis. Internet se llena de vídeos de gente con las gafas.  
Pero las gafas de Apple, que eso tiene que ver con espacial, espacial computing, esas gafas que tú te las pones y puedes. Estoy ahora moviendo los brazos, puedes programar en 3D.  
No tienen un uso masivo, te quedas solo en el cajón de los frikis. Eso que para Apple es una maldición porque no puede comercializar sus productos y no puede seguir ganando dinero.  
Para nosotros es una bendición, ¿por qué?  
Porque os estoy enseñando a hacer magia.  
Chema, lo de Antigravity te recordará un poquito a Claude Cowork.  
Pero mientras que Claude Cowork eres preso de Claude, estás esperando a que te liberen los tokens y te cuesta una pasta.  
Os acabo de enseñar de antigravity solo la superficie. Tenéis también open code, que es como antigravity, pero en abierto, y hay muchísimas más herramientas. O sea, al final la gente, la clau de coworks, sí ha pasado el abismo de Moore, pero en relación con quiero ser un vago, haz las cosas por mí.  
Yo, en cambio, la propuesta que os estoy haciendo es esto está muy bien, pero tienes que seguir siendo tú el que va trabajando con ello, el que tiene que conocer la máquina, el que sabe programar y ese abismo de Moore.  
Vamos a tardar mucho en pasarlo. O sea, lo que tenéis delante mucha gente me dice, piensa, ojalá pudiera volver al 2008 y comprar bitcoins. Juan, si pudieras volver al 2008 a comprar bitcoins, ¿comprarías bitcoins? Pues estamos en el 2026 y tenemos la y tenemos antigravity.  
Para hacer lo que queramos.  
Y si no sabemos qué hacer, le podemos preguntar antigravity. Importante, vamos a tratar de huir de la pregunta: hazme rico sin esfuerzo o quiero saber qué hacer para hacerme rico sin esfuerzo, porque eso no te lo va a resolver. Lo que sí que hay que hacer es pararse a pensar una noticia que he visto esta mañana.  
Que la voy a compartir con vosotros ahora mismo en el grupo.  
Es esta noticia es importante, importante. Esta noticia es buena por 2 motivos: ¿dónde está Universidad de Vigo?  
Ya lo comparto con el grupo.  
Y la pongo en pantalla.  
Esta noticia, un directivo de OpenAI afirma que la IA todavía no es buena diseñando, hay que reconocerle el mérito del cerebro humano.  
A ver por qué digo que es importante esta noticia para este curso.  
Por varios motivos. Por un lado, el que dice esto, Andrew Ambrosino, es el responsable de Codex en Open AI. ¿Qué es Codex? El antigravity de Open AI, el antigravity de GPT.  
¿Y qué quiere decir esto del diseño?  
Yo para preparar esta presentación, para preparar este curso, he usado Laia.  
Pero la IA no me no me ha dicho, Luis, tienes que hacer esto, tienes que intercambiar esta noticia. Al final, la IA es muy buena, muy buena, muy buena.  
Para ponerse delante de 400, insisto de proteínas, no tengo ni idea para ponerse delante de 400000000 de proteínas y diferenciar una de otra, una de otra, una de otra. Para eso es buenísima y le han dado el Nobel a Denis Javi, el de el de el de Google, le han dado el Nobel de química.  
Precisamente por lo de las proteínas.  
La proteómica le han dado el Nobel al de al Denis Demis Hashadi. No me sé el nombre bien, lo siento. Bueno, no me sé el nombre bien, pero Demis Hashadi.  
Se han dado el Nobel a Demis Kasavis.  
Por la en 2024 se lo dieron el Nobel de química al de la IA, porque puso a la IA a diferenciar unas proteínas de otras y ni tan mal.  
¿A dónde voy? Esto no es de a mí, la IA no solo no me va a quitar el trabajo, sino que va a hacer mi trabajo más fácil y me lo paso mejor. ¿Quién me iba a decir hace 3 años que iba a estar en Ourense?  
Leyendo el conjuro de la queimada en castellano, no, o sea, al final.  
La IA lo que permite es ir mucho más allá con menos esfuerzo.  
Si nosotros vamos al mismo ritmo.  
Aquí hay un tema fundamental que trabajaremos durante el curso con ello y es la memoria procedimental.  
Cuando empiezas a conducir.  
¿Sabes conducir Juan?  
Cuando empiezas, te acuerdas de la primera vez que te sentaste un coche.  
Que dices es que, o sea, piensas en el la palanca, luego piensas en el acelerador, luego piensas en el dices tu neocortex, toda tu atención está en el volante, está en el mando, tu neocortex está en lo que estás haciendo y luego te pones al lado de tu padre o tu madre que estén conduciendo y dices, *****, son superhéroes, ¿cómo pueden al mismo tiempo que están conduciendo?  
Hablar contigo, insultar o lo que sea que haga alguien cuando está conduciendo, que no hay que insultar jamás a nadie.  
¿Por qué sucede eso? Porque cuando vas practicando, cuando repites.  
Las habilidades pasan del neocórtex a la zona límbica.  
Tú a un perrete le puedes entrenar.  
O sea, los perretes cogen hábitos y los y cuando tú haces ese entrenamiento es la parte límbica del cerebro. Yo ahora mismo estoy sentado en un ordenador que no es el mío, estoy hablando no sé con quién al aire y al mismo tiempo estoy intercambiando información y estoy interactuando con el sistema.  
Pero no desde neocórtex, no tengo que pensar, cambio la pantalla, meto, saco, no.  
Se hace en automático.  
Se hace en automático y es porque interiorizamos la tecnología.  
¿De qué estoy hablando? Insisto que hablaremos mucho estos días de cambios cognitivos, cambios en los hábitos, cambios en nuestra forma de pensar. Importante, sin darnos cuenta, ya estamos sufriendo esos hábitos cognitivos. ¿Cuántos de aquí en cuánto se levantan?  
¿Fuman y se echan el primer cigarro? Pues espero que no fume nadie. ¿Cuántos de aquí, en cuánto se levantan, abren el móvil a ver la notificación?  
Al final esos son cambios cognitivos, sin darnos cuenta, cambiamos nuestra forma de pensar, de relacionarnos con el medio y lo único que os estoy proponiendo es que seamos conscientes de ellos y planifiquemos nuestra vida.  
En relación con toda esta nueva capacidad que tenemos.  
Bien, vuelvo a las diapositivas.  
La curva de difusión de Rogers y el abismo de Moore.  
Vuelvo a 1 segundo también.  
Antigravity.  
Me gusta mucho.  
Porque yo esto no lo había pensado, o sea, en ningún caso había pensado que iba a dar la clase como la estoy dando.  
¿Pero qué tengo aquí, un guión?  
De lo que tengo que dar, el primer tema, introducción y marco general, tendencias tecnológicas emergentes que viene a ser.  
La curva, el ciclo de Garner.  
La curva de Rogers, el abismo de Moore.  
Y luego, a ver, las cuatro palancas de la adopción. ¿Qué acelera y qué frena? Pues evidentemente, si me pagan.  
Por usar la tecnología me aceleró tremendamente. Si tengo que pagar una pasta en tokens por usar la tecnología, me freno. ¿Qué está haciendo la? ¿Qué están haciendo OpenAI? ¿Qué está haciendo Anthrophic y qué está haciendo Google? Subvencionando el uso de la tecnología para que la gente se vuelva.  
Las primeras dosis siempre son gratis.  
Estamos hablando de la palanca asociada con las cuatro palancas. ¿Dónde están las palancas? Capacidad técnica. En algún sitio tienen que estar las palancas y seguro que uno es.  
A ver, las cuatro palancas, capacidad técnica, apetito y riesgo, capacidad de.  
Sí, capacidad técnica acumulada, pues los que saben manejar esto lo usan mejor, los que no, pues tanto apetito de riesgo y gobernanza, alienamiento estratégico, capacidad. Pues yo metería una , yo hablaría cuando hablo de palancas.  
De factores sociales, de factores técnicos, tecnológicos, de factores económicos y fundamental también.  
Factores regulatorios.  
Fundamental si hablamos desde Europa.  
Con la regulación con la ley puedes apoyar, pero con la ley también puedes.  
Frena.  
Esto es importante.  
Bueno, todo es vale, de ahí vuelvo a donde estaba.  
Vuelvo a donde estaba, que es el principio, las diapositivas, introducción y marco general. Pues más o menos ya hemos visto la introducción y el marco general. Luego a mí hay una parte.  
Hay una parte que me da un poquito de pereza, que es esta parte del estado del arte de la inteligencia artificial.  
¿Que es esta parte de la inteligencia artificial? ¿Por qué? Porque aquí voy a las diapositivas, voy a ir relativamente rápido.  
Voy a ir el nuevo perfil del ingeniero informático.  
Tenéis que ser flexibles. Esta es la estructura que damos, el curso.  
Son 4 días. Vamos a dedicar 2 días a hablar de tecnología, a introducir tecnología. He hablado de agentes, he hablado de LLMs, hablaremos un poquito de blockchain, hablaremos un poquito de criptografía, hablaremos. Me queda todavía por enseñaros Obsidian.  
Hablaremos de los 2 primeros días de tecnologías, presentaremos herramientas. El tercer día de curso hablaremos de proyectos, hablaremos de ejecutar y cuando hablaremos de ejecutar seguiremos viendo herramientas.  
Y luego el último día.  
Hablaremos, estoy siguiendo unas diapositivas que no son mías, hablaremos de liderazgo.  
¿Qué quiere decir eso de liderazgo? Pues sinceramente no lo tengo muy claro, pero el último día lo que voy a enseñaros es mi clon. Responderé todas las preguntas que tengáis y como tendré el material de transcripción de las 3 primeras clases, el cuarto día estaremos hablando todo lo que queráis y luego dentro del liderazgo.  
Pues nos quedarán cosas sin duda. También hablaremos de bueno, el último día, el último día va a dar mucho juegos porque hablaremos también de perspectivas, hablaremos de la salidas a bolsa, hablaremos de Space X, hablaremos de China, fundamental China y luego.  
Hablaremos.  
Del post de LinkedIn que he publicado hoy, que ya a ver si soy capaz, bueno, es mi.  
Es mi usuario de Google, que gozada. Hablaremos del post de LinkedIn que he publicado hoy, pero eso el último día.  
Yeah.  
Si no soy capaz de entrar rápido, no entro.  
A ver.  
Si no soy capaz de entrar rápido el último día.  
Muy rápido, si es que no quiero dedicarle.  
Este soy yo.  
Si alguien me contacta en LinkedIn, porfa, que me ponga que bien, bueno, que viene de por este, esto es lo que os quiero enseñar.  
Hablaremos el último día.  
De cómo los dinosaurios me gusta esta imagen.  
Hablaremos el último día de cómo la inteligencia artificial es el meteorito que acaba que terminará acabando con todos aquellos seres que son grandes y, debido a su tamaño, no tienen la eficiencia suficiente como para reaccionar rápido.  
Estoy diciendo que las consultoras vayan a desaparecer, lo que estoy diciendo es que esas consultoras que se dedicaban hasta ahora a vender carné.  
Esa carne es una commodity.  
Al final, eso de commodity es que lo vamos a ir viendo como cada vez es tan bestia la lucha entre Claude, los chinos y otros.  
Que es que el que esté pagando a Claude Tokens es porque no conoce los modelos chinos, es porque no conoce Grok con Q, es porque no conoce determinadas APIs que iremos hablando de ellas. Por favor, irme haciendo preguntas en las que queráis cuando queráis, porque son muchas cosas, es poco tiempo.  
Y el último día voy al grupo, os comparto.  
El último día desarrollaremos esta foto.  
Pero desde un punto de vista de liderazgo, hablaremos de cooperativas, hablaremos de todo esto, vale fuera.  
A ver, bloque 2.  
Logue 2.  
Esto es lo que acabamos de ver, que si la curva de Roger hay Europa está haciendo normas, a ver, soberanía digital. De eso hablaremos mañana. De soberanía digital hablaremos mañana cuando hablemos de los datos, datos en local.  
De soberanía digital hablaremos mañana.  
Y luego, inteligencia artificial.  
El primero que de la palabra prompt.  
A ver, el mundo está cambiando. A ver, a ver, aquí está, aquí está lo que hemos dicho antes, 2000, noviembre de 2022 aparece ChatGPT. ChatGPT lo que consigue es llegar al 1000000 de usuarios en 3 días.  
100000000 de usuarios, ahí pone 2 meses, yo juraría que fue un mes.  
O sea, lo que hace ChatGPT en cuanto en cuanto a procesos de adopción, hay una gráfica chula que os la voy a compartir.  
Yes.  
Velocidad, adopción.  
Tecnología.  
Ya.  
Hay una gráfica muy chula.  
¿Qué es esta?  
Ese es esta, por ejemplo, esta me gusta.  
¿No le apetece abrirla?  
Soy una persona, voy rápido.  
Verifique que soy un ser humano, soy un ser humano.  
Después.  
¿Esta gráfica qué dice?  
Pero la comparto.  
I.  
Os he vuelto a compartir la misma otra vez. Os pido disculpas.  
A ver.  
No me permite luego.  
Bueno, os he compartido la misma 2 veces en el grupo y no me deja borrarla.  
Andrea, lo siento.  
Digo, Andrea, porque estás escribiendo ahí os cuento.  
¿Esta gráfica qué dice?  
Que, por ejemplo, en ***** tenéis, parece que es el teléfono, pero me valdría para el coche, para el vehículo, que este es el porcentaje de población que tiene la tecnología. Esto engancha con la gráfica de adopción de Roger que hemos visto, es qué tan rápido pasamos.  
De que haya solo early adopters a que el uso de la tecnología sea masiva, pues en el vehículo.  
O en el teléfono tardamos décadas en que una persona que tenía pasta tuviera un teléfono en su casa a que todas las casas tuvieran un teléfono y con los teléfonos móviles hemos hemos pasado apenas años en que una persona tenga un teléfono móvil a que toda la población tenga un teléfono móvil.  
Con ChatGPT hemos pasado de que haya muy poca gente usando ChatGPT a que la usen mogollón de gente. hemos Eso sucedió en días.  
La velocidad de adopción de la tecnología cada vez va más rápido.  
¿Y en este es el tiro?  
Aquí tenéis en las diapositivas que he compartido, tenéis la distinción entre machine learning, deep learning y luego lo que es la inteligencia artificial generativa. Había inteligencia artificial mucho antes que llegara a GPT. ¿Qué es lo que introduce GPT que lo cambia todo?  
Te toca el lenguaje.  
Que esa inteligencia artificial que ya existía antes afecta al lenguaje. Y el tema es que nosotros como seres humanos, si leéis el Evangelio de San Juan, ¿cómo empieza el Evangelio de San Juan? Lo que dice es Dios es verbo.  
¿Cómo creó en el Génesis Dios al mundo?  
A base de prompts.  
Dios crea el mundo con Bronx, hágase la luz y se hizo la luz. He invocado a Dios y suenan cosas.  
Vale, hay una pregunta, ¿no?  
Resumen, el lenguaje es poderosísimo.  
Y luego estas diapositivas.  
Llegan más o menos hasta.  
El principio de la gentica.  
En el momento en el cual a ver.  
Vuelvo a antigravity.  
Y voy a.  
New project.  
No, ni un proyecto, perdón, voy a.  
Una nueva.  
New conversation.  
Es un LLM, es GPT.  
Tú le preguntas y te responde.  
¿Qué es un agente?  
Es un paso más allá, tú a una gente le pides algo y lo hace.  
Dentro de las cosas que le puedes que le puedes pedir a un agente.  
Le puedes pedir a una gente que se mejore a sí mismo.  
Y en el momento en el cual tú le puedes pedir a un agente que se mejore a sí mismo, estás haciendo una cosa que se llama loop, estás haciendo un bucle.  
Tú cuando le pides a la gente que se mejore a sí mismo la evolución que tenemos en la tecnología.  
Es bestial. Antigravity aparece en diciembre de 2025. Antigravity no tiene 1 año.  
¿Antigravity no tiene 1 año, esto qué significa?  
Que lo que estamos viendo está sucediendo a una velocidad rapidísima y que lo que estamos viendo es solo la punta de un iceberg mucho más profundo, que va a hacer que todo evolucione todavía mucho, mucho más rápido.  
Que no os entre miedo, porque el abismo de Moore es nuestro amigo. Por muy rápido que avance la tecnología, va a avanzar muy rápido para unos pocos. El gran público está anestesiado, el gran, el gran público tú le hablas de antigravity. ¿Y qué más le da al gran público? Le hablas de Claude y sí que pagan. ¿Por qué? Porque es cómodo, pero no tienen que pensar mucho.  
Por lo tanto.  
Es la oportunidad de nuestra vida.  
Vuelvo a donde estaba.  
ML Deep Learning. Aquí tenemos el Transformers de Transformers. Podemos hablar, pero ¿sabéis conducir casi todos? ¿No sabéis lo que es un cigüeñal?  
Juan, sabes lo que es un cigüeñal.  
Sí, el cigüeñal es una pieza que es la pieza que es como torcida. No busco la imagen porque no quiero perder tiempo, pero el cigüeñal es la pieza que transforma el movimiento de los pistones vertical en circular para empujar las ruedas.  
Resumen de lo que os quiero decir.  
No es necesario saber cómo funciona el cigüeñal para usar la tecnología. No es necesario saber cómo funcionan los transformers, que yo a ver, el transformer lo que hace es convierte el transformer, transforma lenguaje en numeritos y en función de esos numeritos te busca cuál es el siguiente resultado más probable.  
Transformer es lenguaje solo, pero del Transformer pasamos relativamente rápido. GPT evolucionó al GPT O, que el o es de ómnibus de ómnibus, que ómnibus es omnimodal, multimodal. Es decir, que GPT ya no solo trabajaba con lenguaje, sino podía identificar imágenes, podía reconocer vídeo.  
Y así acabamos llegando a los agentes en algún momento.  
Acabamos llegando capacidades y límites de los LLMs, a ver.  
Yo creo que somos todos suficientemente adultos como para saber que los LLMs.  
Son una herramienta, no son un ser humano, se entrenan con una tecnología en concreto.  
¿Y si tú?  
Los datos de entrenamiento son incorrectos o están sesgados. El resultado va a estar sesgado. Esto es un concepto fundamental. Estoy pensando en las alucinaciones, en las noticias falsas y en toda la en los sesgos, la idea para que la entendáis y la repetiremos mucho.  
Si tú al modelo le metes ******.  
Sacas, ******, por muy bueno que sea el modelo, si tú la información, los datos de partida son una porquería, lo que vas a obtener es una porquería.  
Si tú, si tú tienes el mejor modelo del mundo, estoy pagando a Claude la suscripción Max Pro, los 400 pavos y le subís porquería, el resultado que vais a tener es una porquería. En cambio, estamos funcionando con modelos de código abierto.  
Y le subo información muy buena. El resultado que vais a obtener es muy bueno. Cuanto mejor es la información que le deis al modelo, mejor va a ser el resultado.  
En esta diapositiva, alucinaciones, razonamientos de muchos pasos sin estructura. A ver, hay un concepto también que es la explicabilidad. Estos son modelos que se llaman de caja negra. ¿Qué significa eso de que es un modelo de caja negra?  
Que tú le metes una entrada y el que programa ese modelo sabe lo que pasa dentro del modelo y obtienes una salida.  
¿Cómo llegamos a la salida? Es un cálculo probabilístico. Hay redes neuronales, pero nadie sabe lo que pasa dentro del modelo y por eso se llama modelo de caja negra. Es la explicabilidad.  
Es aunque tú no sabes, aunque no sepas lo que pasa dentro del modelo.  
Que el usuario entienda que ese resultado es lógico en función de la entrada que le estás dando. La explicabilidad no tiene que ver con la IA, tiene que ver con el usuario de la tecnología.  
Y luego, panorama de modelos centrados, perdón, centrados, centrados no estoy yo, de modelos cerrados, inteligencia, a ver, OpenAI, Antrophic.  
Mistral está tirando y en esta diapositiva.  
Me gusta porque viendo esta diapositiva, sabemos en qué año se hizo más o menos.  
¿Qué ilusión me hace ver el o el que os acabo de decir, os acordáis del cuatro?  
Esto es, pues estas diapositivas o al menos esta diapositiva en concreto tiene 1 año.  
No existía antigravity.  
Ni de broma existía el 5.3.  
El GPT 5, o sea, no me acuerdo ni de los modelos 5.5. Bueno, da igual.  
5.5 es el último GPT, no?  
Y luego y en Minay.  
Resumen.  
Que estos son modelos de IA.  
Modelos abiertos. ¿Cuándo elegimos un modelo? Pues lo vamos a ir viendo durante estas sesiones. Capacidades multimodales actuales.  
Esto es esta diapositiva tiene 1 año.  
Si queréis.  
Estoy pensando en tiempo, tenemos que acabar hoy a las 2:00, sí.  
Sí, y quiero un poquito de blockchain, pues vamos a perfecto, vamos a ver otra herramienta porque acá.  
Vamos a todo esto que estamos viendo lo vamos a ver con otra herramienta nueva que mañana usaremos más.  
Obsidia.  
¿Os metéis en Obsidian? Os lo comparto. Obsidian es una maravilla.  
Obsidian.  
Obsidia.  
O la gente del de WhatsApp.  
Mi cabeza sigue estando perfectamente. Lo único que he hecho es un cambio de ritmo. Vosotros alguna queja, alguien está dormido, alguien sigue vivo. Juan, tú qué tal por aquí.  
Bien, perfecto, vamos siguiendo perfecto. Chema, Andrea, ¿te importa conectarte 1 segundo para escuchar tu voz o alguien que pueda hablar?  
Bueno, Andrea debe estar, o sea, perdón, Andrea, ahí va, no me lo creo, gracias. He dicho Andrea porque antes habías hablado, me he equivocado y os pido disculpas por haber invocado a alguien concreto, o sea, que tenéis todo el derecho a estar tomando un café o haciendo lo que sea que estáis haciendo.  
¿Os iba a preguntar, de momento me estáis siguiendo?  
Sí, sin duda, hemos usado resumen de lo que llevamos hasta ahora.  
Uh.  
Con cariño y respeto, paja y antigravity. Y antigravity necesita un tiempo para entenderse que vamos a estar usando antigravity durante estos días de vez en cuando para ir usándolo. Y a mí me interesa ahora otra herramienta que es Obsidia. De momento no estáis familiarizados con ella si no estáis familiarizados.  
Y quiero hablar con vosotros para deciros que Obsidian es simplemente un lector de archivos MDS.  
Pero que te permite funcionar a la velocidad de la luz.  
Yo he visto lo de los modelos, he visto una diapositiva desactualizada y en mi cabeza que he pensado para actualizarla necesito obsidian, necesito esta herramienta y lo que quiero es.  
Usar obsidian con antigravity para actualizar el estado del arte ahora de los diferentes modelos, que algo de ese estilo íbamos a hacer el íbamos a hacer el miércoles, o sea, el miércoles vamos a ver un radar de tecnología, pero yo ahora lo único que quiero es introducir antes de las 12:30.  
Obsidian para que para que estéis familiarizados con ello.  
Porque después de la una de 12:30 a una, si os queréis conectar en Radio Intereconomía a Radio Intereconomía, me vais a escuchar hablando con Rafa Jiménez, que es un señor encantador. Luego vuelvo, los temas de los que hablaré, los voy a preparar en breve con vosotros y luego de una a 2 quiero introducir un poquito de blockchain para que mañana lo tengamos frescos.  
Más o menos, Chema, Chema, eras tú el que hablabas también, Andrea.  
Sí, perfecto, pues.  
Perfecto, Chema, me get obsidian for Windows. He apretado get obsidian download for Windows.  
Download.  
Se está descargando.  
Y luego ya puestos lo que me estoy viniendo a Universidad de Vigo, día uno.  
Y aquí estoy haciendo una nueva carpeta.  
Nueva carpeta.  
Y va a ser proyecto 3.  
Primeros pasos con obsidia.  
Perfecto, y en primeros pasos con Obsidian dentro de esta carpeta, como tengo aquí dentro de Hola Mundo, había hecho este hola mundo.md.  
Lo voy a copiar.  
Y me lo llevo aquí dentro.  
Vega.  
Ya le he puesto un archivo MD.  
¿Y luego o el valor, no?  
A ver si el pollo ya está hecho.  
Obsidian ya se lo ha descargado.  
Le doy a ejecutar.  
Le doy a ejecutar.  
Le he dado varias veces.  
Le doy la tercera.  
Algo se está moviendo por aquí.  
Aquí está.  
Para que lo veáis, me dice, elige si deseas que este software esté disponible para todos, cualquiera que utilice, no necesito permiso solo para mí.  
Siguiente, instalar, estoy instalando Obsidian.  
Ejecutaros, terminar, ejecutar obsidian.  
Ya lo he instalado.  
Y veréis algo así.  
Obsidian trabaja con una cosa que se llama en inglés vault, que son bóvedas. ¿Qué es una bóveda? El proyecto que hemos visto antes es la carpeta dentro de la cual va a trabajar Obsidian. Importante, no le voy a dar a crear, le voy a dar a abrir.  
Abro.  
¿Y qué voy a abrir?  
El proyecto 3 primeros pasos con obsidia, abro esta carpeta.  
Abro esta carpeta.  
Y se me abre esto que estáis viendo.  
Parece que está casi vacío, pero si os fijáis aquí a la izquierda hay un archivo que es Hola Mundo.  
Dentro de la carpeta se me ha creado un archivo.  
De incógnito, hola mundo.  
Hola mundo.  
Y me meto en obsidian, aprieto aquí.  
Y aquí veis.  
El documento MD, listo.  
¿Me entiende Juan? Sí, perfecto, pues vamos.  
A meterle caña al asunto, me vengo antigravity.  
Y voy, tenemos proyecto uno.  
A ver, cada uno tiene sus manías.  
Y os pido disculpas por las mías.  
Pero pudiendo tener las cosas bonitas.  
En general, en la vida no estás abriendo y cerrando proyectos sin ton ni son.  
Esto solo suele pasar en las...  
Creo nuevo proyecto solo suele pasar en las presentaciones estas.  
Voy a crear.  
Proyecto 3, seleccionar carpeta.  
Me encantaría cambiar el nombre desde aquí.  
Aquí proyecto 3, el nombre, ay.  
Le he dado sin querer a cerrar New Project.  
Carpeta.  
Proyecto 3, seleccionar.  
Next default.  
Period.  
Aquí está, proyecto 3 ya está creado, ¿vale?  
A.  
Esta carpeta es un bault de obsidian.  
Por si no lo sabía.  
Te lo digo.  
Eso es parte del contexto del prompt.  
Y estoy buscando.  
La presentación.  
Y luego estoy buscando la presentación.  
A ver, no me gus.  
No me gusta, pero lo quiero hacer bien.  
He dado imprimir pantalla, insisto, este he apretado el botón de imprimir pantalla.  
¿Y me voy a antigravity, vale?  
Copio pantalla.  
¿He copiado la pantalla de antes, vale?  
Esta es esta carpeta, es un bol de obsidia.  
Estoy en un curso de IA y agéntica. Sé que no es un curso de IA y agéntica, sé que es un curso de tecnologías emergentes, pero lo quiero adaptar a la IA porque es la sección donde estoy.  
Estoy en un curso de IA y agentica y quiero.  
Crear un bault con.  
Todas las tecnologías emergentes importantes, la diapositiva que te adjunto está desactualizada. y.  
Quiero que esté absolutamente actualizado el bault. De esto vamos a ver con más detalle dentro de el día 3. Vamos a trabajar con más detalle y quiero que esté absolutamente actualizado el bault.  
Quiero ir paso a paso.  
Primero un índice en la raíz y luego carpetas con una ficha en cada carpeta. ¿Qué le estoy diciendo exactamente lo que le he dicho? De momento quiero ir paso a paso, no quiero que te vuelvas loco, quiero que me pongas un índice.  
Un archivo MD en raíz y desde ahí yo podré ir viajando a los otros.  
Ejecuto.  
El prompt.  
Va a tardar en este un poquito más porque está leyendo el pantallazo que le he dado, pero leer el pantallazo es relativamente rápido.  
Me ha hecho un plan de un plan de ejecución.  
En el cual me dice modelos y arquitecturas, frameworks agénticos, patrones de diseño agénticos, fallos y mitigaciones, raj avanzado y evaluación y y observabilidad.  
He creado un plan de implementación.  
Y le digo, ejecuta el plan. Aquí le podría decir, mira, cámbiame esto por lo otro. O sea, podría ajustar el plan que tiene, pero le digo, ejecuta el plan.  
Y vuelvo a la carpeta que estaba vacía.  
Donde solo había un archivo que se llama Hola mundo.  
Vuelvo a la carpeta que estaba vacía y en la carpeta que estaba vacía, si os fijáis, empiezan a pasar cosas. Me pone el índice, una carpeta que se llama modelos de razonamiento.  
Estoy entrando en las tripas por 2 motivos, para que seáis conscientes del proceso y para que veáis que puedo entrar en las tripas. Esto con Claude no se puede hacer.  
¿Por qué? Dime.  
Sí, puedes entrar en la carpeta, pero Claude en el proceso te coge, mira el disco duro, la carpeta que tienes en Claude, los 15 gigas que te pesa. O sea, aparte del proceso no te lo hace en la carpeta, o sea, en la carpeta te dando el resultado.  
El proceso no lo ves, no sé si me estoy explicando.  
O sea, tú trabajas con Cloud en la carpeta, pero si tú le pides que ejecute un programa Python o le pides que lo haga en la carpeta, o el programa te lo hace en una máquina virtual que te crea dentro del mismo aparato, Claude te crea una máquina virtual.  
Dentro del sistema.  
Algo.  
En cambio, esto lo que te está haciendo es ejecutar agentes en local.  
Que mañana le paso la transcripción y vemos si estoy, o sea, porque no estoy seguro de lo que. O sea, cuando te digo algo y estoy seguro, estoy seguro. Cuando te digo algo y no estoy seguro, también te digo que.  
Pero muy contra.  
No, además, a ver, soy católico.  
Soy católico, me encanta la encíclica social que hizo el Papa de Magnífica Humanitas. Me encanta, en la cual habla de ella. Y cuando León 14 presenta esa encíclica, tenía al lado al de Anthrophic. Anthrophic me encanta.  
Y que le haya dicho que no.  
A Trump en el desarrollo de la guerra me gusta todavía más.  
Lo que soy es.  
Anti moda o anti anti me encanta Google, me encanta es que Antrophic. El problema es que casi todo es relativamente cautivo. lo.  
Antrofica ahora es el que manda, yo creo.  
El ordenador de.  
Sí, vos.  
Bueno, esto con Antrophic se puede hacer también.  
Vale.  
Sí, lo que pasa es que el, o sea, si tú trabajas con cowork, yo te estoy siguiendo con súper interés.  
Quiero ver si realmente toda esta herramienta puede suplir o no algo en Cloud. A ver, para mí Claude Claude es artillería.  
O sea, yo Claude la uso.  
Pero cuando la es cuando la uso es pongo el pongo el tanque, o sea, pongo el cañón.  
Disparo.  
Haces una, o sea, con lo que quieres lo consigues. Es Además, un informe la con el PowerPoint le cuesta un poco más, pero si son informes en Word, te hace un informe niquelado, te lo junta a todo y a un nivel que yo con Anthropic, perdón, con Antigravity no soy capaz de llegar.  
Pero esa artillería que te hace un, como diría nuestra presidenta, te hace un bujero. Te hace un, o sea, perdón. Personalmente, los mejores trabajos ha sido confrontando a nuestra GPT.  
Ahora. Eso lo vamos a hacer mañana, pasado, justo a eso vamos a entrar ahora un segundito, con la tertulia que ya me la han mandado, pongo a dos modos, o sea, la tertulia va a ser rápida.  
Pero.  
Página, sí, a ver el fine tuning.  
Todo depende de lo que queramos hacer y te agradezco que me, o sea, todo depende.  
O sea, yo con Antrophy cuando trabajo con perdón, cuando trabajo con Antigrammity.  
Lo vamos a ver en 3 días, tengo un bolt que es mío.  
Y dentro del bault tengo un fichero MD donde cada agente va, se pide paso unos a otros. Estoy escribiendo yo, o sea, cada agente antes de tocar algo dentro del bault, mira en un archivo de comunicación agéntica en el cual dice, yo estoy con esto, yo he cerrado esto, esto lo vamos a ver en 2 días.  
Pero.  
Pero la idea es.  
Que no hay uno mejor que otro, sino es el uso conjunto que le des y sobre todo, si tú pones a uno a corregir al otro, triunfas.  
Triunfas.  
Me meto en Juan, abro obsidian y mira lo que tengo aquí.  
Tengo un índice la de hola mundo esta la voy a borrar.  
Para que quede bonito.  
Tengo un índice.  
Es un índice de tecnologías emergentes, categoría de tecnologías, modelos de razonamiento, Dipsicr Uno.  
Yo.  
Hemos sido engañados como le he subido la foto.  
Me has mantenido los modelos antiguos, bro. A ver, yo doy clase a gente joven y lo de bro estoy intentando asumirlo. O sea, no es de mi generación, pero hago esfuerzos.  
I.  
Por es mi objetivo vital, estoy haciendo el ridículo.  
Quiero que esté actualizado. ¿Qué le ha pasado? Que como le he subido la foto, él ha usado la foto como referencia.  
Le acabo de dar un prompt general. Cuanto más general es el prompt, más difuso es el resultado.  
Mira, ya más o menos me los está, mira, ya me está metiendo.  
Sí, ya no funciona Fable, pero.  
Tendrá que actualizar el índice modelos de razonamiento justo.  
Le he pedido que me lo actualice y me lo ha y me lo ha actualizado, vamos a ir.  
Aquí tenemos.  
Laudefa, vale, es genérico.  
Le voy a decir, me encanta, coma, pero me gustaría que la.  
Parte de los modelos de razonamiento.  
Estuviera mucho más desarrollada por compañía.  
Y modelo, de momento, solo los americanos.  
Estoy yendo paso a paso, le estoy pidiendo primero que me desarrolle los americanos pensando en Claude y luego voy a ir a lo que me has preguntado. Juan, le voy a pedir que me haga una tabla comparativa de Claude versus.  
O sea, mira, GPT 5 bueno y GPT ayer juraría que fue ayer, anunció que ha sacado sol, tierra y luna.  
Se lo ha puesto a disposición solo de 20 mira, ahora se lo voy a decir.  
GPT, creo que ayer anunció que.  
Había.  
Yes, allow move filter.  
Había el micro está abierto.  
Cuando yo hablo, a mí no es una si alguna pregunta es interesante.  
Sol, Tierra y Luna.  
También con información, luego antigravity.  
Lo antigravity.  
Lo estoy usando de forma sencilla. Aquí esta pregunta se la ha hecho. O sea, tú le puedes ir lanzando instrucciones. Cuando vaya acabando una instrucción, va ejecutando otra y luego puedes poner a agentes a trabajar en paralelo.  
O sea, yo en este caso estoy usando solo un agente, pero puedes profundizar en el uso. Sol, Terra.  
Le he dicho que me meto aquí.  
Aquí tenemos modelos de razonamiento Anthrophic, Google, EuropenAI.  
Esto es lo que ha sacado ayer, Open Sol.  
El modelo insignia de razonamiento profundo y frontera de la familia GPT 5.6 anunciado el 26 de junio. Pues no fue ayer, os he mentido, fue hace 4 días.  
Cuando lo anunció, detalles del modelo.  
Se construye problemas lógicos en múltiples soles parecido a Fabel.  
Fable o fa, os pido, a ver, fable, fable.  
Riesgos de producción asociados, frameworks con agentes.  
Crew patrones rag, vamos a ver ahora.  
Yes, hello.  
Vamos a ver.  
Me encantaría que me dieras.  
La familia de agentes.  
Autónomos.  
Open Cloud.  
Hermes.  
Open Cloud, Hermes.  
El de Google que no ha salido.  
Me encantaría que metieras la familia de agentes autónomos, Opencloud o Hermes, el de Google que no ha salido.  
¿Qué estoy haciendo?  
¿Qué estoy haciendo?  
Os estoy contando esta diapositiva.  
Pero en tiempo real, pensando en voz alta, dime Juan.  
Al final no estaba haciendo.  
Lo está haciendo estupendamente, pero es un terreno que yo ya he recorrido antes.  
Y es fundamental, te agradezco esa pregunta.  
Porque la inteligencia artificial y yo a ella y yo a ella.  
Yo, o sea.  
El curso lo tenía preparado, de lo que estoy hablando, sé.  
Es que si no supieses estarías con una plantilla anticuada, se las estarías bien.  
Absolutamente, pero cuidado, sé.  
Lo que sé.  
Pero también sé lo que no sé y en lo que no sé me ha corregido. Os he dicho que solo había salido ayer y me ha corregido y me ha dicho no ha salido hace 3 días, o sea, al final.  
Es un cambio cognitivo. ¿Cómo funcionaban las clases en la universidad hace 3 años o cómo están funcionando ahora o cómo seguirán funcionando en muchos sitios? Tiene un profesor con unas diapositivas cuenta lo de la diapositiva, lo de la diapositiva está desactualizado. ¿Qué le vamos a hacer? Hay un error en la diapositiva, ¿qué le vamos a hacer?  
¿Tú tienes un error de concepto? ¿Qué le vamos a hacer? En cambio, ahora esto de qué va, esto va de que tú y yo.  
Y además tú y yo, porque a mí la IA me gusta, pero te necesito a ti también y necesito tu experiencia o a Chema o Andrea. O sea, necesito la experiencia también en tiempo real que están usando o necesito mirar, os voy a compartir, este es mi WhatsApp.  
Tengo aquí un grupo de zumbaos.  
Yo todavía no pillo, o sea, antiqueraviti es quien está trabajando contigo.  
Saliendo de información.  
Bien, ¿cuál es el parque de?  
Ahora lo vemos y te respondo esa pregunta. Ahora mismo he saltado aquí 1 segundo, este es un grupo de WhatsApp.  
En el que hoy no he entrado.  
Y estos son frikis.  
Que van compartiendo la última hora.  
Estos son gente joven.  
Si te pregunto qué te da diferente a antigravity, me lo puedes contar. Hace mucho tiempo que no uso antigravity, pero creo que sí va mucho más fluido. Composer es súper barato y rápido. Tengo el plan de 50 eur al mes, imposible de acabar. Además, con eso tienes dólares incluidos para cualquier otro modelo que no sea composer.  
¿Pues qué es Composer? No lo conocía y es Miguel Ángel le gusta Antigravity. Antigravity es de Google de Google. Vamos a hablar de Google vamos a hablar en 2 días porque Google tiene una serie de herramientas que son increíbles para, o sea, mientras que.  
Mientras que Antrofic y Open AI, Open AI es el de GPT y Antrofic es el de Claude. Mientras que estos 2 están en una carrera de ratas, que es una carrera de ratas, es una carrera en la cual el que gana va a perder y el que pierde pierde porque pierde. O sea, están en una, o sea, tienen un producto.  
¿Qué están haciendo los chinos? Tienen un producto que es una commodity y necesitan ganar la carrera para salir a bolsa. O sea, el modelo de negocio de esta gente no lo tengo claro porque es un producto que Deep Sick tiene más barato. O sea, mientras que estos 2 están en una carrera de ratas, Google Alphabet tiene su modelo de negocio, tiene Gemini, tiene su sistema cada vez que tú usas.  
GPT o cada vez que tú usas Claude tienes un consumo energético en sus CPDs brutales para Antrophic y para Open AI tiene coste.  
Google para Google también, pero a Google no le interesa ser famoso o tener muchos usuarios porque ya los tiene. O sea, Google se puede permitir dar más potencia subvencionada para decir sigo vivo. No sé si me estoy explicando, tiene más masa.  
Porque ya ha ganado. Es que empieza, o sea, Anthrophic y Open AI están en la carrera. Google ya ganó la carrera hace mucho tiempo.  
Y luego todo esto le viene bien porque Gemini, porque al final hay innovación, hay tecnología y luego Google es accionista de Space X de a, o sea, Google es accionista, perdón, Alphabet es accionista de todos, especialmente Antrophic.  
En parte por eso desde Antigravity puedes usar Claude.  
Respondiendo a tu pregunta.  
Antigravity está claro para qué sirve.  
Antigravity es un motor que tú le pides cosas y las ejecuta.  
Yo humano.  
He llegado a una diapositiva en la cual había modelos y he pensado, necesito estructurar este conocimiento asociado con los modelos para contárselo a mis alumnos.  
¿Y cómo estructuro ese conocimiento?  
Pon obsidia.  
Aquí, más o menos esto es lo que está en las diapositivas.  
Pero en tiempo real lo puedo mover. Le puedo decir pues lo que le he dicho, modelos de razonamiento, méteme Antrophic, Google y OpenAI y ahora.  
Le voy a decir.  
Dentro.  
De la carpeta de los americanos.  
Hazme una comparativa entre los modelos que has.  
Puesto indicando cuáles son mejores. Yo en mi ordenador tengo Open Whisper, que es como Whisper, pero de código abierto y en lugar de escribir suelo dictar. Es comodísimo.  
Y la API que uso para OpenWhisper es la de Grow.  
Mañana lo comentamos.  
A.  
Que me ha hecho, me ha hecho una comparativa de modelos.  
¿O sea, tú cuando usas GPT?  
Tienes toda la información dentro del hilo.  
No sé si me estoy explicando.  
Con Obsidian sacas esa información y vas usando Obsidian es como, o sea, un libro, lo abres, lo escribes, vas pasando páginas. Obsidian es como una biblioteca, pero con post-its y además puedes entrar rápido, correrlo.  
O sea, si tú usaras solo GPT, tienes que saber en qué punto del hilo estabas. Tienes que subir, bajar, copiar el hilo. Una vez se queda por ahí, se te queda. En cambio, esto es un archivador.  
Yo lo consigo esto por Word.  
Cuando la recomienda se la trae.  
Me crean drive documentos.  
O pega de eso que estoy viendo ahora.  
Sí, no descubro, no digo.  
De momento creo que lo que esto es más barato, pero es un cowork asociado al Drive.  
O sea, ahora me puedo replantear, ojo, estás pagando 100 eur y a lo mejor con esto no pago 100 eur. Okay, pero si yo asocio el cowork, lo engancho con Drive, me da el resultado, pincho Drive y me lleva a un documento como el que me acabas de enseñar.  
Perfecto, mira, te lo voy a te lo voy a enseñar con un ejemplo práctico.  
De que esto hablaría, o sea, esto entraríamos en ello.  
A ver, voy a abrir GMPT.  
Este es mi GPT.  
Debería de ser, de momento no es.  
Sí, es mi GPT.  
Pero hay, ya está, ya está. Lo que le pedí a estar es eso que hace bastante bien.  
Claudia.  
Mira.  
Estoy abriendo varias herramientas.  
Este es un o sea, lo que voy a abrir aquí desde Google Desktop.  
Es un ordenador chiquitín que tengo en casa.  
¿Que tengo en casa debajo de la tele?  
Son 200 pavos, lo os nuke se llama, o sea, luego, o sea, bueno, ahora os ahora os paso la especificación.  
A ver, está tardando.  
No, gracias.  
Vale, ahora estoy abriendo el ordenador aquí.  
Tiene su antigravity.  
Y este es esto lo vamos a ver el último día con detalle. Este es mi sistema.  
Mi obsidia, aquí hay más de 6000 carpetas. Os lo puedo presentar desde.  
Más de ficheros os lo puedo presentar desde Drive, desde Drive o desde, o sea, ya tengo chat GPT aquí desde Telegram, vale.  
Necesito para entrar en Telegram.  
¿Cómo te metes desde tele ajustes?  
Obsidian lo único que permite es leer archivos MD. Es una carpeta llena de archivos MDs, es una, o sea, Obsidian lo único que te aporta es que puedes leer.  
O sea, lo importante no es tanto obsidian, que es el lector, sino una estructura de archivos CMD potente.  
Porque vas a recurrir a ellos porque es la mejor manera de trabajar con la IES y.  
Sin consumir y con una potencia, que es lo que te quiero enseñar de forma combinada. ¿Cómo puedo entrar en Telegram? Desde aquí está. A ver, no, Diana, no lo intentes tú porque no es el tuyo. Ajustes.  
¿A cuando iniciamos un proceso de trabajo, recomiendas que si estás?  
Es.  
Datos de.  
De transformar a LD para que ese proceso sea mal.  
Eso sí, en en cuanto tengáis cualquier tipo de archivo, transformarlo a MD, que es lo que hace Claudia.  
Entonces, a ver, Claude lo que hace, que eso es una de las cosas que vamos a ver, lo transforma todo en un rag. Una vez lo tienes metido en el rag, te da igual el PDF, o sea, lo primero que hace.  
Que eso, por ejemplo, lo tienes con Google Notebook LM, que Notebook LM lo vamos a ver mañana. Tú tienes el PDF, lo lees, lo vectorizas y una vez está vectorizado ya funciona rápido, pero lo hace él por defecto si está dentro del RAC. El problema es cada vez que entras con un agente.  
Cada vez que entras con un agente, esperar si le saco una foto a esto.  
Yo creo que me conecto, ¿no?  
Sí, yo creo que si le saco una foto y para sacar la foto tengo que abrir la cámara con la cámara tapada, no hago fotos.  
Later.  
Es que os lo quiero enseñar desde el.  
Lo acabo de justo, lo acabo de ver ahora mismo. No, Diana, me lo has dicho y lo acabo de ver. Perdonadme ser tan torres. ¿Alguien habla por ahí?  
Alejandro, dispositivos tienes que ir a eso es, acabo de caer en ello.  
Os cuento, este es mi Telegram para trabajar con agentes. Es mucho mejor, los son mucho mejores los bots de Telegram que los bots de WhatsApp, porque los bots de WhatsApp, bueno, WhatsApp no permite bots y tienes que hacerlo a través del WhatsApp web. Esto lo vamos a ver con más detalle mañana y pasado. Yo aquí tengo a Hermes.  
Y tengo Jarvis con el que mejor me llevo es con Jarvis. Esto que os voy a enseñar normalmente lo hago en movilidad.  
Lo hago en movilidad desde el móvil y es cómodo, tengo a las 12:30 una tertulia.  
Que la tertulia me la han mandado, está aquí.  
¿Estos son los temas por los que me van a preguntar, vale?  
A ver si soy capaz, insisto, o sea, cuando haces cosas desde.  
Y ahí podría darle a copiar directamente, perdonadme ser tan torpe.  
Copiar, digo que podría haberle dado aquí directamente.  
A copiar.  
Copio, vale, me meto en chat, GPT.  
Tengo que preparar la tertulia semanal.  
Dame los temas numerados y te pregunto.  
No quiero que hagas nada.  
Más.  
Tengo que Tengo que preparar la tertulia, muchas gracias. Tengo que preparar la tertulia semanal, dame los temas numerados y te pregunto, no quiero que hagas nada más, ¿vale?  
Control V, o sea, lo que acabo de hacer es, Juan, a chat GPT, tengo que preparar la tertulia semanal, dame los temas y se lo enchufo así, ¿vale?  
Por otro lado me meto en Telegram.  
A Jarvis, que este es un open cloud que tengo en ese servidor. Lo vamos a ver durante estos días con detalle. Vale, tengo que preparar la tertulia semanal.  
Lo único.  
Que quiero es que prepares la ficha.  
En el inbox cognitivo con los temas y te voy diciendo.  
Control V.  
Por un lado.  
Esto andando por la calle con Telegram y con ChatGPT es comodísimo y rapidísimo. Aprietas, dictas, copias, pegas uno, pegas otro.  
Y luego.  
Además, si lo estás usando desde el móvil.  
¿Ves que el bot está trabajando aquí? Cuesta un poco más verlo. Es más, me entra el TOC, tengo que abrir Telegram.  
Para ver que el Jarvis efectivamente está escribiendo, el bot está trabajando, me meto aquí en WhatsApp.  
Y él me ha pasado.  
Me meto aquí a Chal GPT, aranceles a envíos bajos, bajo de valor desde China y presión de la Unión Europea. Europa frente a China. Estamos combatiendo los síntomas aduanas en lugar de la enfermedad, o sea, aranceles de envíos. Me lo sé. Europa frente a China, me lo sé. Riesgo geopolítico en las auditorías de 2025. Este no me lo sé tanto. Laudos internacionales contra España.  
Me sorprende, no me lo sabía. Deuda pública nacional. Hernández de Cos es el que fue gobernador del Banco de España. Banco Central Europeo, la están los Kevin Wars es como Christine Lagarde, pero en Estados Unidos que ha sustituido a Jeron Powell, o sea, de todos estos.  
Necesito más detalle del 3.  
Cuatro.  
El 3, el cuatro.  
Quiero información actual que me sirva y a ver, le estoy poniendo cosas.  
Pero que generalmente le pido las cosas de más. Y luego, por otro lado, en el inbox cognitivo me ha preparado una nota. Esto no entro normalmente a verlo con obsidian, pero este es el, insisto, este es el ordenador que tengo dentro de casa y esto lo enseñaré con más detalle.  
Dentro del área operativa de Mibault, los agentes solo pueden tocar aquí y en esta y aquí si os fijáis dentro de estas notas.  
Tengo tertulia semanal.  
Esta es la nota que me acaba de crear.  
Con lo que le acabo de dar, me seguís, voy a GPT.  
Le he pedido más detalle.  
Esto.  
Lo normal es leérselo.  
Copio el detalle que me ha dado.  
Me voy a Telegram.  
Y le digo, mete en la nota.  
¿Cuánto es el V?  
Está metiendo en la nota, o sea, al final GPT se conecta a Internet y GPT se conecta a Internet y GPT me conoce. GPT no tiene acceso a mi vault, o sea, no tiene, no tiene acceso a la memoria persistente, pero me conoce y yo a él le conozco. O sea, y a GPT para buscar en Internet a mí es.  
En tiempo real, lo que mejor me viene, que mucha gente puede usar perplexity, que perplexity es potente, pero a mí no me, no me interesa tanto que busquen internet, sino que busquen internet adaptado a lo que sabe de mí.  
No sé si me estoy explicando y luego estoy trabajando con Obsidian.  
No estoy trabajando con GPT por un lado y un agente que es Hermes que toca Obsidian con Obsidian. Ahora solo estoy trabajando para enseñároslo.  
Pero cuando llegue a la tertulia, sí que desde el móvil voy a tener mi obsidian.  
Que lo tengo sincronizado en tiempo real y la ficha de la ficha que estoy preparando cuando esté con la tertulia sí la voy a tener delante.  
No sé si me estoy explicando.  
Al final.  
Es una nota de post-it, pero que la tengo al mismo tiempo en varios dispositivos y que le digo.  
A Telegram.  
Le digo, este es Open Cloud, pero se lo podría decir con Hermes. ¿Por qué tengo Hermes y por qué tengo Open Cloud? Porque cuando tengo un problema con uno de los 2 me resucita el otro.  
Le digo esta o tengo aquí en Antigravity, que este es un bot que me he hecho yo mismo, que me puede. O sea, Antigravity no es, no tiene IA detrás, o sea, este que pone aquí Antigravity.  
No tiene ya detrás. Yo le lanzo mensajes a ese bot y me ejecuta programas scripts de reinicio de los otros bots. No sé si me estoy explicando.  
Perfecto.  
A lo que voy, le he metido esto.  
Todavía no me ha dicho que lo tiene.  
You aquí?  
Pues con vuestro permiso.  
El riesgo geopolítico entra lleno en las auditorías de 2025. Este tema es mucho más importante de lo que parece. No es simplemente que haya más guerras, lo relevante es que los auditores están cambiando que consideran un riesgo material para las cuentas de una empresa. Yo además dirijo un máster de riesgos, o sea, el hecho.  
De que el riesgo se ponga de moda a mí me hace salivar como profesional. Esto es como si a alguien le a un peluquero le dices que el pelo está creciendo más rápido de lo normal.  
¿Qué están mirando los auditores? Esto ya me lo sé con lo que acaba de decir, cambios que ya se están viendo, las Big Four están incorporando cada vez más escenarios geopolíticos, mapas de dependencias. ¿Esto con qué? ¿Con qué se junta perfectamente? ¿Con el meteorito que os he puesto antes?  
Las Big four que viene ese meteorito están adaptándose.  
Y les interesa también, o sea, cuando se habla de riesgo, en definitiva, se está hablando de miedo.  
Y la gente tiene miedo que hace les contrata.  
Ahí también hay una delicada curiosa.  
Idea potente para la tertulia. Antes las empresas competían en eficiencia, España, los laudos internacionales y el supremo de Estados Unidos. La suma de laudos pendientes, el tratado de la vale, tiene que ver con energía. ¿Qué activos pueden intentar localizar?  
¿Por qué España tiene tantos casos? Porque fue uno de los países que más modificó. Vale, es lo de las renovables de esta me la sé también.  
Vale, le voy a decir, ahora quiero el resto.  
De los temas.  
De forma reducida.  
Esquemática y con datos para que se note que lo.  
Llevo preparado.  
¿Por qué he empezado usando antigravity?  
Juan, porque antigravity desde un punto de vista docente.  
Es el que mejor me permite.  
Comenzar con una clase desde un ordenador.  
Explicar esto que estoy explicando así se entiende menos.  
Porque son diferentes agentes trabajando con el sistema, o sea, desde un punto de vista docente, antigravity te permite ver la relación de un agente con el sistema.  
Claude Santigravit.  
Pero es que luego tienes diferentes agentes.  
Yo.  
En el ordenador este.  
Tengo antigravity.  
De los proyectos que tengo en este ordenador de antigravity.  
Los proyectos que tengo en este ordenador de antigravity son cada uno de los agentes, no sé si me explico.  
Os Os enseño dentro de Hermes.  
Hermes es uno de los agentes.  
Pues lo que le estoy diciendo, esto lo vamos a ver con detalle dentro de 2 días cuando hablemos de proyectos. Pero lo que le estoy diciendo aquí es a Antigravity. Le digo, pues cámbiame las claves de las APIs, cámbiame no sé qué, meteme no sé cuántos. O sea, Antigravity lo que me permite es ir jugando con los diferentes agentes.  
¿Se puede hacer con Claude? Sí.  
You?  
Vale, pero.  
Tengo que explicar primero que es o sea.  
A ver a lo a dónde voy y os pido disculpas.  
Lo ha metido en la ficha.  
Le he pedido que me dé más datos.  
Me ha dado más datos, lleva unos días GPT.  
Está flojito.  
O sea, yo le noto, o sea, hay días que les notas que funcionan mejor, hay días que les notas que funcionan peor. Le he pedido datos, o sea, no me está gustando.  
Te noto.  
Flojo.  
Seguro que lo puedes hacer mucho mejor.  
Cuando sacan un nuevo modelo 3 semanas antes de sacar el nuevo modelo.  
Funciona peor, sacan el nuevo modelo y el nuevo modelo funciona mejor, pero es que además le meten capacidad de cuenta y a las 3:00 semanas de haber sacado el nuevo modelo funciona un poquito peor, o sea que juegan un poquito con nuestras expectativas de modelos.  
¿Y luego?  
Por dentro.  
Esto es antigravity, lo quito la ficha esta.  
Importante.  
¿Yo qué estoy haciendo? Estoy andando por la calle, me han mandado un WhatsApp. Ese WhatsApp lo he copiado, se lo he puesto a GPT y se lo he puesto a Telegram.  
Y esta ficha se ha creado sola.  
Sola, no se ha creado un local con los agentes.  
Y con sus negritas y todo, Europa.  
A ver, me vengo aquí, me vengo a GPT.  
He dicho que estaba flojo y que lo hago un poquito mejor.  
Espero.  
Espero.  
Me pone un poco, o sea.  
Soy me han contagiado los de la generación Z. ¿Tu hija cuántos años tenía 15? Es entonces en su idioma, ella es una, es 10.  
Bien.  
Pero 10 eso es.  
Es cero 10, yo tengo nosotros tenemos una 1081010.  
Y una 013.  
No, a ver, bueno, me emborracharon un día para la cero 13, me emborracharon, yo no sabía.  
A ver, salir y le a ver, volver a cargar.  
Y a ver qué más.  
A ver.  
GPT no debería de tardar en cargar. Os cuento, yo pago actualmente los 20 pavos de GPT.  
Y 20 pavos de Claude.  
De Gemini.  
Pagaré los 20 pavos a partir de cuando justo pagaré los 20 pavos.  
A partir de cuando me venza la de estudiantes, la oferta que me dieron de 1 año, pero hoy por hoy pago con perfectamente 60 eur de suscripciones de los 3.  
Y me Y me rentan, como dicen los jóvenes, me rentan las 3.  
Esta es el tercer nivel.  
Perfecto, copio.  
Copio, me vengo aquí.  
Mételo siguiente en la ficha también.  
¿Ha metido esto en la ficha?  
Y luego lo que le voy a pedir es una vez tenga todo en la ficha.  
Que me haga un resumen ejecutivo que me ponga los puntos más relevantes arriba.  
Y en un vistazo lo tengo.  
Es la primera vez que hago un curso de esto tan largo.  
Ya tan largo digo de que en total son 20 horas, son 20 horas, 4 días, es la primera vez.  
Estoy enseñando este sistema en público.  
Y una de las dificultades que me estoy me estoy encontrando al enseñarlo es que lo que es muy cómodo en movilidad, lo que es muy cómodo hacer desde el móvil cuando lo intentas hacer desde un ordenador, cuesta.  
Y viceversa, o sea, yo cuando tengo una pantalla delante de ordenador, suelo interactuar con la máquina, con antigravity, con Cloud Cowork o con open, con open code. Estoy empezando a interactuar ahora.  
Y cuando estoy en movilidad suelo interactuar más con WhatsApp, con Telegram, con las con la aplicación de web de WhatsApp, que es brutal, perdón, de de WhatsApp de GPT. A mí GPT web me viene muy bien y hablas y suelo usar mucho también el modo conversación. Hablo con él.  
Y luego tomas notas.  
Vamos a hablar.  
Mañana de forma seria, entradas de información en el sistema y de salidas de información.  
Yo recibo información por WhatsApp, mañana cuando tengamos la transcripción de hoy, la procesaremos y será una entrada.  
Y luego mi sistema de grabación del móvil.  
La grabadora del móvil.  
No, ahora mismo esta sesión, ahora mismo esta sesión.  
La estoy transcribiendo con Tims.  
Tengo una sesión abierta de Teams mía propia, donde la estoy la estoy grabando y tengo esa transcripción. ¿Por qué? Porque Teams permite grabar cosas muy largas.  
Adicionalmente.  
La grabadora del móvil que la uso de vez en cuando, cuando pongo la grabadora, llevo 3 días, cuatro llevo una semana.  
Me copio la grabación en un, o sea, aprieto un botón en el móvil, es guardar en una carpeta y automáticamente se me guarda una transcripción en mi obsidian en mi en mi vault.  
Audio y el audio va la posibilidad, no el audio, la transcripción del audio.  
Es que el audio ocupa mucho, en cambio, la transcripción no ocupa nada.  
La luz de la letra que.  
Guardo mando.  
Y los ahora es que tengo la grabadora.  
Tengo, no tengo la grabadora, lo puedo hacer, estoy, o sea, lo puedo hacer porque tengo 2 móviles, no estoy grabando desde ese, ahora te lo ahora lo hago en tiempo real.  
Hago lo que lo mismo que hace Cloud Cloud es un dispositivo o lo mismo que hace la otra.  
Lo hago gratis.  
Soy de la Virgen del puño, del puño bien cerrado. O sea, lo de las suscripciones me pone muy nervioso, o sea, y muy devoto con 3 niños al final acabas.  
Recilita.  
Pero el problema es que hay que optimizar, porque además, o sea, yo te estoy hablando de mi sistema, yo solo en el máster que dirijo somos 3 personas y ya solo 3 personas. El nivel de información y de documentos, la carpeta son un giga, la carpeta y además es que hay fotos, hay vídeos.  
Hay que optimizar cómo guardas la información, es fundamental tener.  
Todo en formato MD, además, no todo, no, o sea, lo o sea.  
Lo que realmente quieres le voy a pedir.  
Es que no quiero abrir ese melón ahora porque es un melón. O sea, el problema de los melones es que hay que comerlos. Hemos dejado un en Madrid, un melón que se lo va a comer mi madre.  
A las 12:30.  
Tenemos, tenemos una vida entera.  
Tenemos además entre que entre, entro a la y media, que por cierto.  
¿A Rafa, ya que estamos, como me has dicho, a qué hora entro?  
¿Que se lo dije ayer, dónde está, dónde está?  
Este perdón.  
Vale, el otro que tenía es la que tenía abierta.  
Y.  
Hoy, pero por.  
Teléfono.  
Y estoy vivo.  
El doble check, a ver a lo que iba, tengo esta es la nota que me ha creado con la tertulia que voy a tener que defender a y media.  
Tesis, hilo, China, candidatos, tal España, laudos, deuda pública en máximos. Vale, le voy a decir.  
Como soy de la Virgen del Puño.  
Mis agentes no se suelen conectar a Internet mucho porque ahí la API sí que costaría más. O sea, no es lo mismo que tú a través de GPT te conectes y hagas una búsqueda en Internet que le digas a un agente que haga una búsqueda en Internet. Ahí el consumo de tokens es mayor.  
Pero.  
Sí que yo ya sé mentalmente que en la ficha esa está toda la información que quiero.  
Y cuando tiene toda la información dentro de la ficha, lo que le voy a pedir es genial, sin quitar nada.  
Mete al principio un resumen ejecutivo.  
E.  
Principales puntos con datos.  
¿Y alguna idea fuerza?  
O sea, yo ya tiene él toda la nota de digo obsidian, pero es la nota en formato MD, la tiene ahí.  
Y cuando me diga que está OK, me aparece que está OK.  
Y.  
¿Esto que os estoy enseñando en vivo, qué es?  
Es una carpeta de obsidian muy grande.  
Muy grande y lo relevante, que es a lo que vamos a dedicar.  
El jueves y el viernes.  
No es tanto a la tecnología asociada con los LLMs que mueven la carpeta, sino a cómo organizas la carpeta.  
O sea, al sistema que tú usas para tener ordenadas las fichas, imaginaos una biblioteca.  
Cada vez que es como un sistema operativo, o sea, sois informáticos, es como el kernel de un sistema operativo que, insisto, entraré más detalle en ello. El ordenador cuando arranca, tú cuando entras en una biblioteca no te lees todos los libros. El ordenador cuando arranca no se lee todos los archivos, se lee solo el sistema de arranque, que son 3 archivos.  
Que mira, los tenéis aquí y os lo enseño, os lo adelanto.  
En mi sistema.  
El sistema cuando arranca lee este archivo, Luis Garvía soy yo.  
Analista, aquí debería de aparecer.  
Proyectos activos, mira, curso Ourense, innovación tecnológica, activo en ejecución, prioridad única de esta semana, impartición presencial de las 20:00 y transcripción diaria.  
Para mí es fundamental la transcripción diaria, sistema personal. Esto os lo enseño luego, o sea, cada vez, o sea, son más de en el dashboard está dónde está el dashboard aquí.  
El sistema.  
Son más de 60066200 notas. El agente cuando ejecuta el sistema no se ve todas las notas.  
Se ve solo estas notas y desde aquí se mete lo que me preguntabas Diana, las transcripciones y las clases. Como me lo has preguntado, contesto.  
Sí, a ver, hay que contestar a las preguntas que te hacen si me preguntas por una clase.  
El agente que sea.  
Por ejemplo, entra en Claude y si no es Claude, entra en perfil, pero entra en Claude y ve dentro de la estructura del bault.  
De que esto lo puede ver un humano también que aquí pone académico, aquí pone clases, dentro de clases están las universidades, aquí estáis vosotros. Esto llevo 1 año con ello y KD, por ejemplo, me vale cualquiera. Voy a entrar en Edos, que es una.  
Es una clase y aquí tengo las sesiones. Estas son todas las sesiones que he dado, o sea, cada día de clase y dentro de cada día de clase tengo primero el resumen de la clase que di.  
Y después la transcripción.  
Y después la transcripción, esto un humano.  
Un humano.  
Lee el resumen este, la máquina lee la transcripción. Si todo esto se lo subimos a Google Notebook el M, que lo haremos pasado mañana, veremos cómo podemos funcionar con toda la información a una velocidad tremenda.  
Soy agnóstico de la tecnología y cada vez más la tecnología tiende a ser una commodity. No le he dicho antes porque estoy con la tertulia.  
Que me busquen los modelos chinos.  
No le he dicho que me busquen los modelos chinos y debería buscárselo y además tengo que hablar de blockchain, pero blockchain después me queda un huevo de tiempo. Bueno, pues como queda mucho tiempo.  
No, pero la hora esa se la quiero dedicar a blockchain. Perdonadme 1 segundo, méteme los modelos chinos.  
Con los estadounidenses.  
Son cada vez más bestias.  
Y luego vuelvo a Telegram. Aquí hay una cosa que también es relevante, es una pregunta, ¿usas Claude, no Juan?  
La pregunta que es buena es, ¿y qué haces mientras Claude está trabajando?  
O sea, aprietas el enter y puede tardar 1 minuto, 2 minutos.  
A ver, no te la hago a ti, sino me la hago a mí misma y yo en el curso y con vosotros, mientras dejo a Telegram trabajando, poniéndome la ficha, me he ido a hacer otra cosa y ahora vuelvo.  
Al final, esto es como lo de los TDHs. Yo soy TDH, sin duda, pero el poder del déficit de atención lo enfocas en enfocarte y en saltar de una cosa a otra.  
Iban a hacer en la administración con las máquinas.  
Claro, yo respondí los autónomos y ese 70% de tiempo nos buscamos otras cosas que haber. Hay un chiste en esa línea, negaré haberlo contado bajo tortura y es un señor que el que no tiene tuvo un accidente y no tiene testículos y va a la administración pública.  
Dice, es que quiero trabajar, dice, es que usted sin testículos no puedes trabajar aquí. ¿Y por qué? Dice, porque es que nosotros de 10 a 13 nos tocamos los huevos.  
Pues efectivamente, ¿qué va a hacer la administración pública? Se habla como de.  
Mobile.  
La que se usa.  
Los autónomos somos capaces de estar aquí hablando, compartiendo y funcionando, y al mismo tiempo ya empiezo a tener demasiadas pantallas abiertas, especialmente en un ordenador que no es mío. Estoy buscando Telegram.  
Estoy buscando Telegram.  
A ver dónde está Telegram. Si alguien se acuerda por ahí me dice dónde está Telegram, no es broma.  
¿Y lo tenía abierto, no?  
Este servidor de casa, aquí está, por un lado, la tertulia.  
bueno, sí.  
Sí.  
Estoy buscando la tertulia y me encuentro con una clase que daba hace tiempo. Esto es fundamental desde un punto de vista cognitivo, lo de perder el hilo. Me había ido por los cerros de Úbeda, ahora vuelvo y tengo que retomar el hilo donde estaba. Esto, insisto, lo vamos a hablar dentro de 2 3 días. Me he ido a una clase que está en el baúl de los recuerdos.  
Todo, en cambio, el curso de Ourense que lo estoy haciendo ahora y la tertulia que la tengo que hacer ahora es memoria a corto plazo mía.  
Lo tengo dentro del área operativa en cuanto abro esto, área operativa, asignaturas, ¿qué es lo primero que tengo aquí?  
Universidad de Diego.  
Esto es el curso que estoy dando hoy, la ficha de preparación mía del curso que si queréis, o sea, si queréis, hay.  
Os la puedo mandar desde el móvil sin problema.  
Desde el móvil que está grabando.  
Luego os la mando, o sea, porque es que tengo el tengo en el móvil, el o sea, no tengo WhatsApp.  
O sea, no tengo WhatsApp en el ordenador de debajo de la de la mesa. ¿Me seguís? Sí que tengo en el móvil copia de la ficha del curso, pero WhatsApp solo lo tengo en el móvil desde el que estoy grabando. Resumen.  
Me voy al inbox cognitivo, o sea, el inbox. Os cuento esto que, insisto, esto os lo volveré a contar. El área operativa es mi memoria a corto plazo. Dentro del área operativa yo soy profe y aquí durante el curso tengo bastantes más asignaturas.  
Luego en el inbox.  
Tengo notas de diario Ourense, estos son.  
Esto son notas que iba tomando antes del curso.  
O sea, este no es el curso como tal. Esto son notas que he ido tomando antes del curso, que según se me iba geopolíticas, salidas a bolsa, segundo día, o sea, esto es pensamientos que he ido teniendo en relación con este curso, pero a mí a lo que me interesa ahora es.  
Inbox con inbox cognitivo.  
Y en concreto, dentro del inbox cognitivo, la tertulia semanal que es esta.  
Y si os fijáis, el resumen ejecutivo ya está hecho.  
Principales puntos con datos: China, pequeños paquetes.  
España y los laudos arbitrales, Wars, Trump y la gasolina, ideas, fuerzas para la ideas, fuerza para la tertulia.  
Me dice, posible arranque oral. Me hace gracia cuando he preparado este curso, me dice, y Luis, tienes que decir esto y tienes que decir lo otro. Me hace gracia porque es muy naif lo que me dice de decir.  
O sea, al final esto es la noticia que os he compartido antes de que uno de OpenAI dice que la IA no puede ser creativa. Nosotros valemos para una serie de cosas. Con la IA podemos llegar a otros, lo de las proteínas que estábamos diciendo antes. O sea, yo en proteínas no sé diferenciarlas porque, entre otras cosas, son pequeñitas.  
En cambio, con la IA diferencias cientos de miles.  
Ficha, tertulias, esta es y luego esta es la ficha que me ha hecho él.  
A ver lo que está basado, o sea.  
Cuatro.  
El patrón es mío, GPT sí lo tiene.  
Me refiero GPT, que GPT no tiene acceso a los modelos.  
Estoy explicando.  
GPT, vale, mira, sí.  
No, la respuesta, la respuesta es no.  
A esa pregunta en concreto es no hay un modelo. Dicho lo cual, en mi relación con GPT sí que sí que todas las semanas tengo una tertulia.  
Y luego, en mi relación con Hermes, yo sí sé el modelo que quiero.  
Y lo primero que le he hecho es crea la ficha con los temas.  
Y él me crea una ficha con los temas y luego le he rellenado los, o sea, la misma, los mismos temas tenía GPT.  
Los mismos temas los tenía GPT y los tenía Hermes. Por lo tanto, el protocolo de comunicación entre las 2 IAS era idéntico. O sea, ellos tenían los mismos temas y eso lo que permite es que la información que me den de uno se la revierto al otro.  
Sin problema. Y luego el esquema que le he dado es un esquema muy sencillo y además es el que se lo he dado yo. O sea, yo mentalmente sí tengo un esquema para la tertulia. En mi mentalmente, si te fijas, mira, no, a ver.  
El hilo, mira, no tiene una serie de apartados que ya están, o sea, sí, la semana que viene te lo va a dar exactamente igual, ¿no? A ver, muy sencillo.  
Muy sencillo.  
Esto se lo he dado yo y te digo cómo se lo he dado. Primero le he dicho, prepárame todos los temas. Primero le he estado engordando y cuando le he dicho prepárame todos los temas es lo que él ha llamado ficha tertulia semanal.  
O sea, esto es el resultado de la comunicación, o sea, este bloque de aquí de aquí al final.  
Es el resultado de la comunicación entre GPT a través de mí, entre GPT y Hermes.  
Y luego le he dicho aquí.  
Esto.  
Genial, sin quitar nada.  
Mete al principio un resumen ejecutivo y principales puntos con datos y alguna idea fuerza. Ese es el patrón que lo he pedido yo, pero él no lo tenía. Por eso no, es que necesito vuestras preguntas.  
Porque a ver, si tuviera una, o sea, yo gran parte de las cosas que hago son con patrones, tiene una, o sea, obsidian. Una de las cosas fuertes que tiene son los templates, los templates patrón.  
Templeites, si alguien nos dice por ahí alguna voz, un templeites.  
No, pero hay otra palabra para template.  
¿Plantilla, plantilla, plantilla, esto es quién, cómo te llamas?  
Andrea, Andrea Gratze, Mile, y esto es como tener GPT, pero con Alexa. Andrea es la comunión de los santos, la inteligencia colectiva, la plantilla.  
O sea, esto es.  
O sea, yo la plantilla la tenía mental, tú puedes trabajar con plantillas.  
Muchas veces es necesario, bueno, muchas veces no es fundamental trabajar con plantillas en procesos de automatización en los cuales no haya intermediación humana.  
O sea, si no hay intermediación, al final, cuando llamas a unos servicios web, mandas un archivo a un servicio web y recibes el archivo, eso es una plantilla.  
O sea, la estandarización es fundamental, pero en este caso concreto.  
Mi estandarización es mental.  
Y luego fundamental, esto es fundamental, esto es absolutamente fundamental.  
Ordenar la ficha para mí tendría mucho consumo mental humano y de tiempo para GPT tiene muy poco.  
Acordarme de la plantilla para mí tiene muy poco consumo.  
Y para GPT tendría mucho, o sea, saber qué plantilla se le, o sea, para GPT la parte de la plantilla le costaría más. O sea, digo para automatizar el proceso de la plantilla, porque hoy es una plantilla de una a ver que con la tertulia.  
Que una de las cosas, eso es, pero que mira, que es gracioso, es divertido. Aquí tengo el inbox cognitivo. Ayer estaba mucho más vacío. Este son los agentes los que lo van rellenando, pero tengo aquí pendientes de hacer.  
Dentro de pendientes de hacer que me tengo que hacer una colonoscopia. O sea, he llegado a una edad, me dicen que no duele. O sea, la me tengo que hacer una colonoscopia. A ver, es revisión normal la colonoscopia.  
Dentro de los pendientes que tengo que hacer, importante, esto no lo suelo leer yo, esto lo leen los agentes, pero dentro de los pendientes que tengo que hacer en algún sitio tiene que poner skills.  
¿Insisto, esto no lo dónde pone skills?  
No hay otro pendiente.  
Pero el director aquí, Francisco.  
A ver, aquí importante, yo todo esto no, a ver estos pendientes.  
Total, a ver esto total, estos pendientes.  
No son mis pendientes, o sea, mi lista de pendientes.  
O sea, mi lista sagrada de dependientes es esta.  
Con Google Keep y son estos.  
O sea, estos son los pendientes que tengo que hacer, que, por cierto, de LinkedIn he hecho ya el post del ese artículo, pero el post de LinkedIn ya lo he hecho y es el de los dinosaurios.  
Y meteo.  
Y meteoritos, este ya lo he hecho y me lo quito. O sea, este es mi lista de pendientes semanales, luego en el sistema interno.  
Estoy jugando y estoy aprendiendo.  
De esto, insisto, vamos a hablar en 2 días, pero por aquí hay algún sitio.  
Dentro de agentes pone tasks, no sé si pone tasks. Bueno, por aquí hay algún sitio donde el sistema me está diciendo tienes que hacer una skill de las tertulias.  
Tengo varias skills hechas que son automatizaciones con fichas y la de las tertulias.  
No me apetece hacerlo porque gasto más tiempo en hacer, o sea, habéis visto el proceso.  
Que es cómodo y si vas y luego, sobre todo cuando cuando hago el proceso de las skills, por ejemplo, la clase que vamos a ver mañana, esta tarde os voy a mandar la transcripción con la clase y vamos a jugar mañana con la clase con la transcripción.  
A mí el proceso de procesar las transcripciones de las clases me gusta hacerlo a mí, lo haces muy rápido y es que ves la clase que has dado y revisas lo que has dicho, revisas si lo has hecho bien o mal. O sea, hay procesos que aunque pudiera automatizarlos al 100 * 100%.  
Sacarme a mí mismo del proceso me costaría.  
Dudas, preguntas.  
Pues vamos a ver.  
Es que esto es una voz, estoy disfrutando Juan como un niño.  
Por favor, interviene más, intervén más.  
Juan intervén más.  
Por Siria.  
Es gravity.  
Ya hace unos meses y que me dije, por Dios, no puedo ya con más programas y más. Sí, llega un momento que todos nosotros.  
Está sería perplejo, están oyendo, perfecto, perdona.  
Llegó un momento que me dio la sensación de que teníamos que elegir uno, sin duda, no, sí, porque llega un momento porque es que no me puedo poner todas las semanas a aprender un programa nuevo y este en cuestión ya fue, dije no, siguiente, y hubo un momento que se me quede con un lado.  
Sí, me quedo aquí, profundizo en este, salvo que haya una herramienta que me dé otra cosa, otra y otra. Digo, ¿cuántas herramientas pensáis?  
Que a lo mejor debemos de dominar para estar al día, a ver, para apoyarnos en.  
O se nos está yendo de las manos.  
Controlar todo lo que sabe, no estoy. A ver, sí, sin duda, sí, por supuesto, es correcto. Yo me siento respondiendo a esa pregunta.  
Yo me siento como un surfero.  
En un tsunami.  
Me refiero.  
Por un lado, hay gente a los que ya les ha arrasado la ola.  
Hay otros que están tomándose el daiquiri en la playa, que viene la ola y les va a arrasar y yo me siento tomando olas.  
Que lo primero no puedes tomar todas.  
No puedes tomar todas, o sea, que además me gusta mucho porque yo Claude no la estoy usando tanto. Y cuando me has dicho que tú usas Claude, te he dicho estoy enamorado de Claude, te he hablado de la encíclica, te he hablado de no sé qué. O sea, me refiero, me gusta Claude, pero yo Claude es una de esas olas.  
¿Ya han pasado y lo que tú haces con Claude se puede hacer con Antigravity? Claro, pero .  
A ver, pero que Antigravity lo que me permite es es muy Antigravity, por un lado es Google, que pasado mañana vamos a ver dentro del ecosistema de Google.  
¿Usted qué le cosiste?  
Bing.  
Es muy importante.  
Vale.  
Porno gancho.  
Entonces, entre las 2 cosas sí me he creado la herramienta y que discuta.  
Yo he venido, Yo he venido solo con 2 herramientas que además en el grupo de WhatsApp y luego en la transcripción y mañana las 2 herramientas que me he y además las he descargado.  
Desde cero, que eso también tiene truco, un truco que veremos.  
Que cuando tú descargas y usas algo desde cero, no tienes una cosa que veremos, no sé si es mañana o pasado, no tienes Legacy.  
O sea, no tienes mochila cuando tú construyes algo desde cero. O sea, no es lo mismo empezar una organización desde cero. No es lo mismo Brasilia, que es una ciudad que construyen en mitad de la selva y ponen las calles que Madrid, que tienes del siglo 15, que tiran las calles, que la Gran Vía, que no sé qué. O sea, no es lo mismo empezar sin Legacy que con Legacy.  
O sea, cuando tú tiras todo y empiezas desde cero, yo sé que lo que estáis viendo ahora en pantalla.  
Es el sistema que he creado hoy. Además, para explicaros el núcleo central de la clase de hoy, que son los agentes que estaba desactualizado y en mi cabeza tengo ahora el tiempo que son y 20 y para la tertulia llego de sobra y luego la segunda cosa que tengo en la cabeza.  
Son los modelos chinos, pensando Juan en la pregunta que me has hecho de las olas. Sin embargo, yo más que en China, en estos 2 últimos, ¿por qué nadie está hablando de Mistral? Y como españoles europeos, no deberíamos de estar dando una oportunidad a Mistral y no está en nuestra cabeza aquí.  
Estados Unidos.  
A ver, Mistral.  
No Mistral.  
Con Mistral, mucha gente hablando de muchas cosas.  
Nadie ha dicho, yo lo uso. Istral sí que se está usando cada vez.  
Compite mejor Mistral, me estoy poniendo, ya quedan 9 minutos, que no hay ningún problema. O sea, si se hubiera, no Juan.  
Hey.  
Sí, no, pero Mistral se está usando y además las 3 veces que hemos chequeado, si hay alguien vivo, responden rápido. O sea, y si quisieran preguntar, preguntarían porque saben que funciona el micrófono y todo esto. Me pongo ya en modo tertulia con lo que te voy a decir, pero que creo que es interesante, aunque sea en modo tertulia.  
Estados Unidos tiene el dólar.  
El dólar es la divisa por excelencia. En dólar se negocia el oro. Perdón, el oro no, el petróleo. En dólar se hacen muchas cosas.  
China tiene el yuan.  
Y están sacando entre los bricks, están hablando de nuevos sistemas de pago con cripto, pero Estados Unidos con las stablecoins del mundo cripto está consiguiendo aumentar la deuda pública. A lo que voy es Europa con el euro.  
Tiene difícil competir frontalmente con el dólar porque el dólar ya es la posición predominante.  
Lo mismo que te estoy diciendo del dólar y de divisas aplica a los modelos hoy por hoy, los modelos mundiales punteros.  
OpenAI y OpenAI y Anthropic, pero es que yo creo que a Mistral no le interesa sumarse a la carrera de ratas.  
De OpenAI y Mistral, lo que sí que nos interesa en Europa es infraestructura, centros de procesos de datos pensando en el dólar.  
El dólar está bien, el euro no puede competir contra el dólar, pero lo relevante no es tanto el dólar.  
Sino los medios de pago, la infraestructura que te pueda permitir usar el dólar, usar el euro o usar los la cripto. A lo que voy es Mistral es modelo, Open AI, o sea, GPT es modelo. Lo relevante no son tanto los modelos que cada vez son más commodities. De esto hablaremos, que cada vez son más commodities.  
Sino cada vez más, lo relevante es la capacidad de adaptación que tiene el individuo o que tiene la empresa frente al cambio brutal.  
Para mí, Mistral es potente y lo está haciendo bien, pero sobre todo lo que hay que hacer es políticas de alfabetización a toda la población, o sea, alfabetización digital, a la población, a las empresas y luego infraestructura, CPDs que permitan correr los modelos y luego que las empresas tengan alfabetización digital en el sentido de.  
Un uso eficiente de la tecnología, o sea, porque el problema no es tanto usar los modelos o tener acceso al modelo, sino que la información que le metas a los modelos sea sea buena. No sé si me estoy explicando.  
Yo creo que sí, ¿no?  
Pues si tuviera más tiempo.  
Le diría que Antrophic.  
Google y Open AI me los metiera dentro de una carpeta que fuera Estados Unidos.  
También lo puedo hacer yo. Esto es como llega un momento que usas la IA para todo, meterlo en una carpeta. Es más, es más, os pido disculpas.  
Manda narices.  
Manda, manda narices.  
Vale, lo puedo crear en obsidian directamente, pero si a patarme los cordones no necesito a la IA.  
Que luego muchas veces pasa esto, que usamos la IA para todo.  
Lo que tenemos en Estados Unidos, Antrophic, Google y OpenAI.  
Y nos metemos en China.  
Y tenemos yo el que estaba buscando es GLM 5.  
DeepSig lo conocemos. DeepSig es potente, Minimax. La gente habla de él maravillas.  
Y GML 5.  
Ha salido hace muy poco tiempo, muy poco tiempo.  
Y es de los que tiene más potencia de computación parecida, no a los Fabel, sino al segundo nivel de Fabel, o sea, a los que están ahora en mercado tanto de Antrophic como de OpenAI. Y no sé si cuesta muchísimo menos en tokens.  
O sea, con esto, con esto, con esta comparación entre Estados Unidos y China.  
Me viene a la cabeza Tesla.  
Frente a los modelos de vehículos eléctricos chinos.  
Estados Unidos tiene a Tesla.  
China tiene coches que hacen vehículos eléctricos, un porrón cada uno de una forma. A ver, empresas de vehículos, o sea, una cosa es el motor de combustión, que ahí sí que o los híbridos, que ahí necesitas más tecnología. yo.  
Es un seguido.  
Correcto, sí, no, en Intereconomía empezaré, hay 30, o sea, voy solo yo a menos 20.  
Poneros en intereconomía si os apetece.  
Y volveré aquí a la 1:02 minutos, 3 minutos.  
¿Quién ¿Quién ha sido el que ha hablado ahora?  
Alejandro, Alejandro.  
De verdad y además es maravilloso, gracias.  
Porque me has cuidado.  
O sea, me refiero, tu intervención es preocupado por mí, mi salud mental, mi estado, y o sea, gracias porque lo más importante que a ver, yo solo soy dogmático, solo soy nazi con una cosa y es con el cuidado, o sea, nos tenemos que cuidar unos a otros.  
¿Pues os parece que nos veamos, hacemos un pequeño descanso y nos vemos a la 1:05? 
Es que me lo.  
Pues un placer.  
Hasta ahora.  
Okay.
## Parte 2
30 de junio de 2026, 13:06a.m.
46 min 37 s
Lo mismo, yo creo que lo mismo salimos a las 1:50.  
What is?  
Margarita, qué bien, Margarita Andrea Alejand, por un lado.  
La tertulia o dudas que tengáis también se pueden resolver. Juan, Juan está un poco mosclado, dice: solo pregunto yo cuando las realidades que me vienen estupendamente, y si tenéis vosotros también preguntas, fenomenal. Me había hecho antes una pregunta, Armando.  
No, perdón, Armando Nochema. ¿Qué ventajas tenemos con una estructura de archivos MD para poder sacar todo el potencial de herramientas de IA? El lenguaje natural de la IA, el lenguaje natural de la IA es el MD, o sea, por ejemplo, por ejemplo.  
Esto.  
¿Esto que me ha dado, o sea, GPP?  
Sí, yo.  
Lo copio.  
Lo copio.  
Y os lo mando a vosotros por WhatsApp, que no lo voy a mandar.  
Si os fijáis el formato en el cual.  
¿Estáis viendo aquí esto, no?  
El formato en el cual he copiado y pegado SMD.  
El lenguaje natural de la IA.  
Es el MD.  
Controlar.  
¿No vemos tu plantilla, tu no ves mi pantalla? Ahí, ahora sí, ahora sí, perfecto.  
Gracias, Chema, lo que te estaba diciendo estaba respondiendo.  
A tu pregunta, la pregunta es: ¿qué ventajas tenemos? ¿Por qué usamos archivos MD? El archivo MD es texto plano y lo que he hecho es me he venido a la tertulia, la el último GPT que tengo abierto, copio.  
¿Copio y si me voy, por ejemplo, al WhatsApp con vosotros?  
Y pego aquí.  
Si os fijáis el formato.  
SMD.  
O sea, GPT, ¿qué es un lector hipervitaminado de formato MD? Cloude, ¿qué es un lector vitaminado de formato MD? ¿Cómo funciona GPT por dentro? ¿Cómo funciona Cloud por dentro con formato MD? Es que cuando os digo que usemos todos.  
Formato MD, lo que os estoy diciendo es que hablemos fuera del sistema el idioma de la IA.  
Y si os habéis dado cuenta cuando he preparado la ficha MD de la tertulia, he cogido, he metido, he ido rápido, he ido más despacio y todo ha sido con formato MD. De acuerdo, Chema, más o menos.  
Luego, además.  
Os he compartido antes.  
Os he compartido antes.  
Un archivo MD.  
Os he compartido antes un archivo MD.  
no os lo he, o sea, el que os voy a compartir otro.  
Os voy a compartir un archivo MD.  
Que si no lo he compartido antes, os pido disculpas los materiales aquí. Si os fijáis, el PowerPoint con los materiales ocupa 3200 ks. La presentación del curso donde he traducido los materiales ocupa solo 86.  
Yo veo un archivo MD, aquí tengo los 2, si es este archivo MD.  
Lo puedo abrir con un editor normal, lo abro con un editor normal.  
No te preocupes porque no eres administradora, no pasa nada. Un archivo MD lo puedo un archivo MD.  
Lo puedo abrir con un editor de texto normal.  
Un archivo HTML en el fondo y en la superficie es texto plano también.  
Es texto plano también.  
Es texto plano también.  
Y en cambio, voy a abrir el PDF.  
Con el editor con Notepad.  
Y evidentemente.  
Esto está en un idioma que nadie es capaz de entender.  
Ni de la propia IA entiende este idioma, salvo que lo abra con una skill que le permita leerlo, abrir el pdfy compilarlo, por lo tanto.  
¿De qué os estoy hablando cuando os digo que uséis MD en lugar de PDFs?  
De consumir pocos tokens.  
Que luego aquí hay otro tema.  
Las IAs en general están entrenadas en inglés, nosotros usar una IA en español.  
Es más caro.  
Porque gran parte de los procesos los traduce del español al inglés, funciona en inglés y nos los devuelve otra vez traducidos al español.  
Hablarle a una IA en español consume más tokens. Lo que pasa es que no os preocupéis ahí, porque los tokens asociados con una traducción de términos son muy poquitos, igual que los tokens necesarios para hacer una transcripción son relativamente pocos. Hay procesos que son mucho más complejos y otros procesos que son menos complejos para un ser humano.  
Seleccionar una herramienta es un proceso cognitivo que no tiene gasto, apenas dices, pues ves un.  
Ves un clavo y dices, pues para esto un martillo. Luego ves un cacho de pollo y dices, para esto un tenedor. Luego ves una cinta de vídeo y si eres mayor dices, pues para esto un reproductor de vídeo. Cognitivamente, al ser humano, elegir una herramienta u otra no nos cuesta mucho.  
Para la IA elegir una herramienta es un proceso que le cuesta mogollón.  
A un ser humano, ordenar cosas nos cuesta mucho, a la I a ordenar, no hay menos.  
Y mañana hablaremos además de la cuántica con la cuántica.  
Todo esto de lo que estamos hablando va a más la cuántica, pero insisto, la cuántica mañana que no quiero abrir melones hoy, que no toquen, que no tocan.  
Pregunto por el grupo de WhatsApp.  
O por o por o por la plataforma.  
¿Habéis escuchado alguna alguna o la tertulia? ¿Alguna duda de la tertulia? ¿Alguna pregunta?  
No es necesario tampoco que la que la respondáis ahora.  
Creo que en la tertulia no he hablado nada o muy poco de tecnología.  
Bueno, en no sé si he hablado de tecnología o no, pero bueno, cuando mañana tenga la tertulia os la paso por aquí y luego mañana os enseño lo que hago con la transcripción de la tertulia y el sistema. Bueno, eso os lo paso, o sea, eso os lo enseño ahora mismo.  
Tengo aquí.  
Ahora mismo, Jesus Jesus, Jesus.  
Y te pido disculpas por no haber empezado con esto.  
Jesús, dale una foto a la pantalla.  
Oh, si estás conectado desde el móvil.  
A Jesús.  
Fenomenal.  
Perfecto, ¿dónde estaba? Con las tertulias, que esto dentro de os lo estoy enseñando solo para que se os quede.  
Dentro del archivo tengo las publicaciones, todas las publicaciones de LinkedIn que hago y todas las intervenciones que suelo tener en medios. Hay intervenciones que tengo sin contenidos y, en cambio, hay intervenciones que tengo con contenidos. Esta es, por ejemplo, la tertulia de la semana pasada.  
Un informe de la tertulia de lo que estuve hablando y abajo tenéis que quiero que os quedéis con esta estructura abajo, abajo tenéis.  
La transcripción de la tortuga de la transcripción de la tertulia.  
Siempre me gusta que todos los documentos que se hayan originado o en una clase o en una reunión tengas el acta para humanos y después toda la transcripción, porque esa transcripción mañana jugaremos con Google Notebook, el M te permite decir en qué momento o dime las anécdotas o cuántas veces se han mencionado o no sé qué o hazme un listado.  
De las herramientas que ha estado viendo en clase.  
Al final estamos generando contenido, mañana distinguiremos mucho entre entradas de información y salidas de información.  
¿La hora que preguntabas, Juan, o sea, el qué herramientas uso?  
Pues imagínate un niño que de repente con 20 años, o sea, un alguien que no ha salido a la calle, que con 20 años sale a la calle y ve coches, ve bicicletas, ve tiendas de diferentes tipos.  
Yo lo que os recomendaría es que si usas Cloude en lugar de antigravity, sigas con Cloude en lugar de antigravity, porque más o menos las 2 van a la par.  
Luego.  
Hay que hacer un pequeño esfuerzo siempre por ir un paso más allá y cuando digo un paso más allá, en este caso es en este caso son las APIs.  
¿Qué es un API?  
Pues al final es un agente que hace una llamada, o sea, un API es llamar a una aplicación, pero que hace una llamada al modelo y desde el modelo te da funciones. Mañana hablamos un poquito de los agentes y de cómo puedes llamar a las APIs.  
Pero un paso más allá, por ejemplo, con la sincronización de dispositivos, o te dedicas a temas de imagen y vídeos, vídeo editas vídeo alguna vez o no, pues ahí está Caden Life, o sea, en código abierto hay muchas aplicaciones.  
Que funcionan a nivel profesional sin exigirte pagar, o sea, dependiendo a o sea.  
Yo cada vez más, en función de las necesidades que voy teniendo, cuando detecto una necesidad, voy a GPTY le digo: ¿cómo podría esto, que es un dolor de muelas, tenerlo cubierto? Y según vas avanzando, vas descubriendo cosas, vas descubriendo máquinas virtuales, vas descubriendo sistemas, vas descubriendo.  
Mañana hablaremos un poquito de un poquito solo de máquinas virtuales.  
Pero que tampoco hay que volverse loco. Yo con máquinas virtuales todavía no estoy muy puesto, pero como lo acabo de mencionar, que es una máquina virtual.  
Pues en cierto modo y salvando las distancias.  
Esto que tengo delante, que es el ordenador que tengo en casa.  
No es una máquina virtual porque es un ordenador en remoto, pero si este ordenador, en lugar de estar físicamente en mi casa, estuviera en un servidor en la nube.  
Sería una máquina virtual. O sea, tú un servidor lo puedes dividir en cachitos, puedes hacer compartimentos, puedes hacer dockers y cada compartimento es como si fuera un ordenador dentro de un ordenador más grande. Me estoy explicando más o menos de eso, mañana un poco.  
Y.  
Bien.  
¿Resumen de lo que hemos estado hablando antes, quién es la persona que se incorporó tarde?  
A.  
Sergio, Sergio, me habías dicho Juan.  
Bueno, da igual 660. A Jesús, Jesús, te cuento muy rápido un resumen de todo lo que llevamos. He presentado una herramienta que se llama Antigravity, que Antigravity.  
Se puede parecer a Cloude Cowork, antigravity es de Google, Cloude Cloud Cowork es de.  
De Antrophic.  
¿Se puede parecer a Codex?  
Y se puede parecer a open open code.  
¿Qué es antigravity? Además, vosotros que sois programadores en origen antigravity es una herramienta que te ayuda a programar.  
Lo bueno que tiene esto, que es una de las cosas que he dicho antes, Jesús, es que en la vida del ingeniero informático.  
Estamos todos evolucionando hacia un mundo en el cual ya no es tan relevante programar como tal.  
Sino tener en la cabeza cómo funciona el sistema, tener en la cabeza saber bien qué queremos hacer.  
Esa planificación y luego la gestión asociada con la información. O sea, he estado trabajando con Antigravity, que Antigravity es esta.  
O sea, antigravity te metes en Google, pones antigravity y se descarga instantáneamente. Y para que leas antigravity lo que es, le voy a decir a new conversation.  
Esto antigravity es aquí tú le pones un prompt y te responde y luego puedes elegir diferentes modelos. Yo estoy con el más bajo para no consumir muchos tokens.  
Y luego puedes trabajar.  
En el entorno donde quieras.  
A ver, donde quieras no. De momento solo puedes trabajar en local, pero le podrías mandar alguna máquina virtual si hubiera, pero no quiero abrir este melón ahora y luego.  
Tiene una disciplina de proyectos que, ¿qué es un proyecto? En definitiva, una carpeta en local en la cual puedes hacer cosas.  
Tú antigravity, descárgatelo, te abres una carpeta vacía y le dices que te haga dentro de esa carpeta lo que te apetezca hacer. Yo de momento no he sido capaz de encontrar algo que pueda hacer dentro de una carpeta que antigravity no me lo haya podido hacer.  
Digo dentro de una carpeta, o sea, si le dices que te haga una casa, pues no sé qué pasará, pero.  
No, dentro de 1 año no. O sea, si tú le dices quiero que me hagas las especificaciones de una impresora a 3, o sea, sería un reto decirle antigravity, quiero que me hagas una casa, pues probablemente te dice, abre puertos, impresora 3D, no sé qué, no sé cuántos, o sea, te va guiando.  
Sí, por favor, sí.  
Perfecto.  
Pues quedan.  
Estupendo, porque entonces has visto la segunda parte, que es Obsidia, o sea, la gestión de información asociada con archivos MDS. Perfecto, pues lo que voy a hacer ahora es hablar de 2 cosas.  
Una muy por encima y la otra solo desde la base. Os voy a presentar la base de blockchain. Mañana seguiremos trabajando un poquito con la segunda parte de blockchain, que son smart contracts.  
Por el grupo de WhatsApp, ¿alguno tiene conocimientos de Mundo Cripto?  
Go.  
Chema dice que algo conoce, Andrea algo sí también, perfecto. O sea, vamos a ver poco. El curso es de tecnologías emergentes, pero vamos a va sin problema y además estupendo porque engancha perfectamente.  
Y voy a voy a volver a usar con vuestro permiso. Por un lado, voy a ver cómo ando de tokens.  
Que al final son buenas prácticas. Os habéis dado cuenta que voy a ver cómo ando de tokens en Obsidian?  
Empieza a notar que uno es mayor.  
Voy a ver cómo ando de toques.  
O sea, en la sesión de hoy apenas he consumido tokens y luego esta mañana, por si acaso hubiera habido algún problema, he activado el contador 2:30 antes de la clase, que dura 5 horas para que a mitad de la clase este se me pusiera cero, o sea que ni tan mal y este le llevaba, o sea.  
Vamos bien y luego me quedaría si consumo esta, me queda Claude.  
O sea que vamos estupendos.  
Voy a meterme aquí.  
Y voy a abrir el proyecto, el proyecto cuatro.  
Nueva carpeta.  
Proyecto cuatro que va a ser.  
Bitcoin y.  
Bitcoin y VR.  
Me gusta, me siento un vendedor de humos. Vamos a hablar de blockchain y de realidad virtual. O sea, es que a ver, con respeto y cariño a los que venden humos. o sea.  
No, pero hay conceptos que es importante y además.  
Bitcoin no va a ser blockchain, es que estoy pensando, mañana hablaremos de Ethereum.  
Hoy no vamos a entrar en el smart contracts. Hoy simplemente quiero soltar las bases de la blockchain y quiero hablar de una cosa fundamental, que además están las diapositivas blockchain, vry convergencia.  
¿Que la convergencia?  
Por un lado, tenemos antigravity, que antigravity por sí mismo mola. Por otro lado, tenemos obsidian, que obsidian por sí mismo mola, pero cuando juntamos antigravity con obsidian.  
Podemos volar esa convergencia entre 2 herramientas que cuando lo juntas, esto es.  
Yeah.  
Esto es obsidian. Lo que voy a hacer es abrir un vault nuevo, voy a abrir un nuevo sistema.  
Un nuevo sistema.  
Voy a abrir un nuevo sistema.  
Que además este a diferencia de la anterior, lo voy a abrir sin ningún archivo.  
Proyecto cuatro.  
Proyecto cuatro, dónde está, aquí está.  
Me ha abierto uno nuevo y por higiene cierro el antiguo.  
Tengo un proyecto vacío.  
Me vengo aquí 123, me creo uno nuevo, New Project.  
Two.  
Hey.  
Next.  
Default y nombre del proyecto, esto ya he aprendido a hacerlo bien.  
Perfecto.  
Que tengo un obsidian vacío, tengo una carpeta vacía, tengo estas 3 cosas, voy a ir cerrando cosas, voy a cerrar esta.  
Voy a cerrar todo lo que pueda cerrar en Chrome.  
Porque al final quieras o no la RAM.  
¿La vas cargando?  
Y.  
Cierro esta.  
Me están dando unas ganas de cerrar el PowerPoint, pero no voy a ser bueno.  
A ver, tengo una carpeta vacía, tengo antigravity y aquí tengo que explicar.  
Blockchain y.  
XR.  
Quiero 2 carpetas coma cada una por concepto, que esto es lo que me decías antes Juan, yo controlo de blockchain.  
DXR es suficiente, controlo suficiente como para hacer lo que puedo, lo que tengo que hacer aquí.  
Y se puede equivocar, pero yo le guío, quiero 2 carpetas cada una por concepto.  
Dentro de la de.  
Blockchain.  
Quiero las siguientes fichas.  
Bitcoin y o sea, Bitcoin y Satoshi, coma.  
Y.  
Registro, coma enlace al paper fundacional con resumen, coma Alastria, coma proof of work.  
Versus stake steak.  
Y.  
P2P.  
B 2 p.  
P 2 p, proof of work, proof of stake y clave pública, la clave pública y la clave clave pública y privada.  
Tas.  
Y lo que consideres en esta.  
Línea, los Smart.  
Contracts y Ethereum los dejamos para mañana.  
Pero que sepas que lo toca, veremos de XR, quiero hablar de VR a Ry todas esas cosas.  
Con RC cachondo.  
En esta parte.  
Humor a saco a poder ser con temas regionales.  
Español en España, en España, Ourense, Zaragoza. y.  
Los Me dan ganas de poner, no países valencianos.  
Por provocar, a ver.  
El cachondeo solo para la parte de.  
VR sin dejar el rigor.  
Luego fuera.  
Quiero un índice, un índice, un índice didáctico.  
Y que permita comprender todo y además una ficha donde juegues.  
Con la convergencia entre toda esta.  
Locura.  
Sí, me están diciendo, me están diciendo aquí, me dice, te queda solo media hora.  
¿Te suena lo de vísteme despacio que tengo prisa? Como me queda solo media hora, este probablemente es el prompt de todos los prompts que le he metido más trabajados, la parte de y además ellos tienen conocimientos del mundo blockchain.  
Mañana voy a seguir con blockchain y como me queda media hora, fundamental el humor. Que estas máquinas para el humor, por mucho que le digas que se pase 3 pueblos, los filtros éticos que tienen, no se va a pasar 3 pueblos. O sea, el humor lo tenemos que poner nosotros.  
Pero como me queda solo media hora o menos, me quedan 20 minutos, o sea, a menos 10 he acabado.  
Sí, no, al menos lo he acabado que eso es fundamental.  
Para los alumnos, porque tú te emocionas con lo que estás contando, pero la gente necesita, necesita irse a casa pronto y luego hemos quedado con un gran amigo en Vigo. Hoy es el único día que tengo tertulia y que luego hemos quedado a comer con Manuel Helms, que está muy malito y probablemente sea la última vez que comamos con él.  
Ojalá no. Si alguno por ahí le da por rezar, que rece por Manuel Gems, que es un tío estupendo.  
A ver si llega, no iba a hacer un chiste negrísimo con el lira para allá vivo, a ver si cuando lleguemos sigue el broma, hoy sí que seguirá.  
A.  
Diana.  
Estructura de un pronto.  
Me he esforzado en que lo que os quiero explicar, que además ellos ya saben, os cuento.  
¿Qué es el blockchain?  
El blockchain es un registro.  
¿Qué es un registro?  
Mira, le doy al enter, o sea, me gusta porque Juan, cuando tengo que contar lo que es un registro, necesito tener fichas que sirvan de ejemplo de lo que es un registro.  
No sé si me estoy explicando las fichas, es que a mí esto me parece una barbaridad.  
Best.  
El obsidia en vacío.  
Me hará para lo que le he pedido, puede que me haga un plan.  
no, ya me lo está haciendo.  
A mí ver cómo va creciendo esto.  
Y.  
Fundamental.  
Fundamental, fundamental, fuera quiero una ficha resumen que diga lo siguiente. Dime, Diana. No ven la pantalla, Juan.  
Que cuando te emociones te pongo el poco completo para que te vea. Vale, me olvido de volver a la pantalla.  
Ahora fundamental, fuera quiero una ficha de resumen que diga lo siguiente, no hay que entender la tecnología para usarla.  
Coma luego.  
Lock 6 no es más que un registro en negrita.  
Público.  
Un registro la.  
La corto, el bla, bla, bla.  
Concepto.  
De stocking.  
Bitcoin y Satoshi.  
Yp 2 p.  
Proof of work.  
Y proof of stake.  
Para.  
Tontos.  
Todo ello con enlaces y si quieres enriquecer con algo más, genial.  
A ver, os cuento, por un lado, ¿qué me ha dicho antigravity que ha hecho? Pues lo que ha hecho, lo que le he pedido. ¿Y ahora mismo, qué le acabo de pedir que haga? Lo que os quiero explicar, lo que quiero que os llevéis claro, se lo he pedido en una ficha. Yo lo sé explicar, lo llevo explicando mucho tiempo, llevo hablando de.  
Conozco Bitcoin desde el 2013, llevo hablando en público de Bitcoin. Empecé a salir en medios de comunicación en 2017 hablando de Bitcoin. Esto os lo voy a enseñar mañana. Esto os lo voy a enseñar mañana. Esto con detalle, si apretáis Garvía.es.  
Si apretáis gardia.es, que os lo estoy pasando por el grupo de WhatsApp, ¿dónde está el grupo de WhatsApp?  
¿Dónde está el grupo de WhatsApp?  
Estaba en otro lado, me acabo de gripar yo solo.  
Yo mismo estoy cayendo. Si apretáis en Garvía.es, es una página sencillita en formato Markdown. Aquí en asignaturas mañana veréis veremos juntos alguna cosa, pero lo que me interesa es dentro de Garvía.es tenéis.  
Dentro de publicaciones, todas mis apariciones, bueno, la última es el jueves pasado.  
Estuve en la sexta, pues aquí tenéis la primera, la primera. O sea, esto es una revista tal. La primera que he hecho es los 24 del 11 del 2017.  
Que tiene que ver con Bior, Bior, una cantante que lanzó una criptomoneda. O sea, yo empecé a hablar en medios de comunicación con el mundo cripto, con blockchain y todas estas cosas, y ahora he acabado siendo más generalista. ¿Por qué os enseño esto? Porque puedo, porque es para mañana por ir adelantando y tal.  
Vamos a qué es blockchain. Me gusta antes de qué es blockchain, lo de XR.  
A R realidad aumentada.  
En realidad aumentada.  
Ni una broma.  
Indicaciones GPS superpuestas en el parabrisas de un coche o en la cámara móvil. A ver, estoy corriendo con el modelo más suave. Si hubiera querido bromas, le hubiera tenido que subir el nivel. Le he pedido que me haga bromas, pero no me ha hecho ninguna broma.  
XR se refiere a la X, ¿qué quiere decir de XR? Si alguien lo sabe, que me lo di. Bueno, mira, extendida, XR es realidad extendida, o sea, XR es tiene que ver con visión.  
Tenemos la realidad virtual que todos la conocemos, te pones un casco y no está, y lo que estás viendo con tus ojos es otra cosa.  
Luego tenemos realidad aumentada, que sigues teniendo un dispositivo, unas gafas, por ejemplo, y la realidad aumentada es, pues el ejemplo que estaban poniendo ahí, ves una carretera y sobre la carretera tienes superpuestas las direcciones. O yo estoy viendo ahora a Diana aquí físicamente, estoy viendo a Juan físicamente.  
Y sobre te identifica facialmente y te pone un bocadillo que dice Diana, Morena. A ver, si la hubiera hecho yo, o sea, si fuera comercial, no habría datos personales. Si la hubiera hecho yo, le podría decir: busca en Facebook el perfil toda la información pública, ponla pim, pam, pum.  
Y vas viendo, según estás hablando con alguien, la ficha esto que os estoy diciendo.  
Técnicamente ya se puede hacer.  
Es ese poder de la convergencia, reconocimiento facial hay. No sé si os suena una empresa que se llama Palantir.  
Si no os suena Palantir, pues debería de sonar. Si no os suena Palantir es porque no tiene un producto que venderos a vosotros. Eso es Palantir. El producto que tiene no se lo vende a personas, se lo vende a gobiernos. Palantir es una de las empresas más valiosas del mundo y vende inteligencia artificial.  
a países. Palantir, tú le das la foto de alguien y todo esto que os estoy diciendo lo hace. Palantir, o sea, un dispositivo, cualquiera de las gafas que te proyecte... O sea, hacer una foto a alguien y tener toda la información, o eso tenerlo con realidad aumentada, es algo que no cuesta tanto.  
Realidad mixta.  
Vas jugando entre una y otra, o sea, la realidad mixta. Tú te puedes, pues estoy aquí, me quiero, estoy en el metro, me quiero evadir y entro en realidad virtual, pero luego salgo y he llegado a la estación y quiero seguir andando por la calle y tengo la o sea, la realidad.  
Mixta, vas jugando con las 2.  
Y luego hay otras erres que yo, sinceramente, el continuo de el continuo este de Milgram, no sé lo que es, le podría pedir a Antigravity, hazme una fit, es más, le podría o no, se lo voy a pedir rápido, hazme una.  
Ficha del continuo de Milgram y la reali da disminu ida enlazadas con el índice.  
Esa era la broma.  
Pues vuelvo a donde estaba.  
¿Chema, por qué está tan bien usar MD?  
Porque si esto mismo se lo hubiera pedido en PDF, todavía estamos esperando a que nos cargue la primera ficha, en cambio en MD.  
Aquí ya tengo metida el continuo de Vilgram y la realidad disminuida.  
La limitación de la vivos físicos.  
Esto es un enlace, la debilidad es.  
No es un enlace. ¿Por qué no me está entrando? ¿Por qué no me salta?  
Debo de tener algo en la configuración del.  
En la configuración del obsidian tengo, debo de tener algo que no me está enlazando con las fichas.  
El continuo Milgram está aquí.  
Aquí tenéis la información, debería de meterme en la configuración para ver por qué cuando aprieto el enlace.  
Porque el enlace los ha metido como esto sí, ya sé por qué es.  
¿Me has metido los enlaces como abrir archivo?  
Cambia todo y ponlo bien con corchetes. No seas bruto con cariño. O sea, esto está mal. Os pido disculpas por haberle dicho no seas bruto, pero es que queda poco tiempo.  
Y quiero que me meta bien los archivos. A ver, resumen, realidad virtual vista más o menos entendida.  
Y ahora ya me lo ha corregido.  
O sea, en Obsidian los enlaces los pones con 2 corchetes, hablas 2, abres 2 corchetes y así puedes ir. ¿Esto por qué me lo pone en negrita? Pues porque estará dentro de algún título, pero aquí pongo 2 corchetes, el proof of work o proof of y salto.  
A la ficha del.  
Bueno, es que estoy dentro de esa ficha, vale, o sea, le he puesto un enlace a la misma ficha.  
De momento, los que estáis en.  
Los que estáis en los que estáis en.  
WhatsApp.  
Los que no estáis aquí, es que he perdido el WhatsApp, lo he puesto en algún sitio y lo he perdido.  
Y no, y tengo muchas demasiadas ventanas abiertas.  
Los que estáis en WhatsApp me vais siguiendo más o menos.  
Sí, jo, gracias.  
Voy, o sea, lo de realidad virtual más o menos ya lo hemos visto.  
Y de eso me encantaría tener más conocimientos sobre espacial computing, pero sinceramente no los tengo, ni los tengo, ni tampoco creo que sea una de las cosas que más me motiven ahora. Prefiero tener. Prefiero ir trabajando sobre clones. A bueno, en realidad virtual, una de las cosas que tenéis en las diapositivas que veremos mañana.  
Es la idea de clones, de clones digitales, lo que os he enseñado, lo mío en el baúl.  
Es un clon, pero eso lo vamos a ver pasado mañana, los clones.  
Objetivo del día de hoy, introducir tecnologías, introducir, introducir antigravity y auxilian. Luego hablar un poquito de blockchain, que de blockchain seguiremos hablando mañana.  
¿Qué es el blockchain?  
Fundamental, no es necesario entender cómo son los dineros para usarlo. El blockchain es un registro.  
Un registro.  
Descentralizado e inmutable. Una vez registras algo en un blockchain, no se puede borrar.  
No se puede borrar ni modificar.  
Que la de la de la computación, mañana hablamos de cuántica y mañana hablamos de la clave pública y la clave privada. Lo que está registrado en el blockchain no se puede borrar.  
Esto.  
Deberes para mañana, he perdido el.  
Lo he recuperado, estaba aquí. Sí, lo he recuperado. Qué bien, deberes para mañana.  
Acabo de compartir en el grupo.  
Todos los datos, o sea, esta ficha del, o sea, el texto de la ficha la voy a compartir también.  
En documento, o sea, en el en formato MD, proyecto universidad de blockchain, la estoy compartiendo también.  
En el archivo MD y os voy cuando acabe esta sesión, que acabo en 2 minutos, todo lo que he hecho lo voy a meter dentro de un zip y os lo voy a mandar también por el grupo de WhatsApp.  
¿Resumen, me gusta qué demonios es un token?  
Lo que registras en la blockchain de momento.  
Y para registrar me hubiera gustado hablaros un poquito, pero mañana os hablo de wallets, de clave pública y de clave privada. Y sinceramente, el blockchain no me importa contároslo en 3 4 días a poquitos. Mañana hablamos de clave pública, clave privada, y si mañana no podemos hablar de smart contracts, hablamos el jueves.  
¿Porque qué es un smart contract? Es un programa que se ejecuta en la blockchain, es un bot.  
¿Qué es una clave pública en Bitcoin? Una persona humana que está ahí detrás, alguien que es la dueña de los tokens.  
¿Que es un smart contract? Alguien que llega a eso, o sea, un bot que está detrás de la clave pública. Importante con el del blockchain hoy, olvidaros, simplemente que os suene un poco la música de los clones. Hoy olvidaros, simplemente que os suene un poco la música. ¿Qué tenéis que llegaros de la sesión de hoy?  
2 herramientas, antigravity y obsidia. Mañana, en algún momento, si sigue Juan, diré, en lugar de antigravity, podéis usar todas estas otras herramientas. Y fundamental, ¿mañana qué vamos a tener? ¿Qué vamos a tener todos desde esta tarde?  
La transcripción de la sesión de hoy.  
Y eso que nos va a permitir repasar la sesión de hoy, avanzar, esquematizar y trabajar con datos buenos.  
Dudas, preguntas, os he dado mucha, mucha información en muy poco tiempo.  
¿Pero mola, no?  
¿Qué tal Juan? Hola, los del grupo, ¿qué tal vais?  
¿Has sobrevivido alguien?  
Gracias, Andrea, tú sí que molas, Gratze Mille.  
Margarita Encantado, guión, o sea, este este yo creo que es Jesús, este eres tú, Jesús.  
Muy bien, muy interesante. Chema, mucha. Pues gracias. A ver, al final, aunque os haya parecido un tostón, mentirme, mentirme y ya mañana me dais la colleja por la mañana al principio. No, sí.  
Sí, porque tú, Juan, tienes acceso a la plataforma, ¿no?  
Okay.  
Sí, pero mañana, bueno, yo la subo al grupo de WhatsApp, sí, o sea.  
Al principio se comparte, sí, en la aplicación.  
Sí, la transcripción en cuanto yo la tenga la comparto en el grupo de WhatsApp y luego es que no tengo acceso a la plataforma, pero es que tampoco si prefiero no tenerlo.  
Con cariño y respeto.  
Hola.  
Ay, ella es a que es secretario de la si.  
Ay, pues con vuestro permiso, con esto y un bizcocho hasta mañana a las 9:00.  
Yeah.