# Informe de la Sesión 4

**Curso: Tecnologías Emergentes e Inteligencia Artificial**  
**Universidad de Vigo – Generación D / Red.es**  
**Fecha:** 3 de julio de 2026  

---

## Objetivo de la sesión

La cuarta y última sesión tuvo como objetivo principal **consolidar los conceptos de soberanía digital, gestión del cambio y el diseño de exocórtex personales**, conectando la teoría con la práctica de los alumnos. 

A lo largo de la jornada se detalló el flujo de sincronización y automatización local por voz, se debatió sobre la gestión de sistemas heredados (*Legacy*) utilizando la metáfora arquitectónica de la Catedral de Ourense, y se exploraron los pilares de la teoría de la información (Claude Shannon y Erwin Schrödinger). Finalmente, la sesión concluyó con la demostración de herramientas de inteligencia artificial creativa (*Google Labs* y *Flow Music*) y la firma del **Compromiso de Transferencia** a 15 días por parte de los alumnos.

---

# 0. Resumen de los principales temas tratados

En esta cuarta jornada formativa se abordaron los siguientes pilares de conocimiento práctico y teórico:

- **Automatización y flujo de transcripción:** El ciclo de grabación en movilidad, sincronización local mediante *Syncthing* y procesamiento 24/7 con *Whisper* en el servidor local sin depender de nubes corporativas.
- **La Catedral de Ourense como repositorio de Git:** La arquitectura por adición, los *commits* históricos intergeneracionales y la gestión ágil de sistemas heredados (*Legacy* y *estrangular el proceso*) frente al diseño cerrado tradicional de un "PDF".
- **Teoría de la información y anti-entropía:** Los fundamentos de Claude Shannon y Schrödinger aplicados a la IA. La necesidad de orden en la base de conocimiento para evitar la "obesidad cognitiva" del *exocórtex*.
- **Control y monitorización remota de agentes:** Uso de bots de Telegram (*Jarvis* / *Hermes*) para el control operativo, depuración de logs y comandos de reinicio (*restart*) desde el móvil.
- **IA creativa en la práctica:** Creación en directo de un rap/muñeira veraniego con *Google Flow Music* y *Google Labs* integrando la bitácora del curso y los nombres de los alumnos.
- **Compromiso de Transferencia:** La importancia del micro-cambio accionable a 15 días y la clausura física del curso en Ourense.

---

# 1. El flujo de automatización y la soberanía del exocórtex por voz
Se detalló paso a paso la arquitectura técnica que permite al profesor procesar su memoria diaria sin intervención manual:
1. **Grabación en movilidad:** Grabación de audio en texto o notas de voz mediante el dispositivo móvil (Xiaomi).
2. **Sincronización P2P soberana:** Uso de **Syncthing** para transmitir el archivo de audio directamente al servidor local doméstico (Windows/WSL corriendo en segundo plano) sin pasar por servidores de Apple o Google.
3. **Procesamiento de fondo (Demond/Python):** Un script de Python que monitoriza la carpeta de grabaciones detecta el archivo, llama a la API de Whisper (en entornos Groq) para realizar la transcripción en segundos y la vuelca como metadatos ordenados (YAML/Markdown) en la carpeta `inbox cognitivo`.
4. **Seguridad radical:** Los bots de Telegram y las APIs externas solo tienen permisos de escritura en la carpeta temporal de *inbox*, manteniendo la base de conocimiento central (*Obsidian Vault*) con acceso exclusivo de lectura para evitar la corrupción de datos por parte de los agentes.

---

# 2. La Catedral de Ourense y la gestión de sistemas heredados (Legacy)
Se utilizó la morfología urbana e histórica de la Catedral de Ourense para ilustrar la transformación digital de las organizaciones:
- **Catedral "PDF" frente a Catedral "Git":** A diferencia de las catedrales góticas planificadas desde el inicio por un único arquitecto (como León o Notre Dame), la Catedral de Ourense creció orgánicamente durante 8 siglos por adición. Cada generación añadió un elemento (una pared románica, una nave gótica, un cimborrio renacentista, almenas de castillo o una tienda de chuches en el soportal) respetando el trabajo anterior. Es el equivalente físico a un repositorio de Git donde se hacen *commits* y *merges* continuos. Sorprendentemente, tras 800 años, el proyecto sigue compilando.
- **Gestión del Legacy:** En las empresas, no se puede demoler el sistema antiguo de golpe. La transformación digital requiere "estrangular" los procesos antiguos de forma progresiva. El profesor ejemplificó esto manteniendo su antiguo *Google Keep* para listas inmediatas mientras migra paulatinamente su exocórtex a Obsidian.
- **Diseño para ser descubierto:** Al igual que la catedral, que no fue diseñada para verse desde un dron sino para sentirse al caminar por sus calles medievales angostas, un segundo cerebro personal o corporativo debe estructurarse para el descubrimiento iterativo y la conexión de ideas, no como un plano rígido e inmutable.

---

# 3. Teoría de la información y la evitación de la obesidad cognitiva
Se conectaron los principios de la física y la matemática con la curación de contenidos para IA:
- **Claude Shannon y Claude (Anthropic):** Se analizó la teoría de la información de Shannon, que define la estructura matemática de la transmisión de datos. Como homenaje, la empresa Anthropic bautizó a su modelo de lenguaje como *Claude*.
- **Erwin Schrödinger y la anti-entropía:** En su libro *¿Qué es la vida?*, Schrödinger define la vida como un proceso antientrópico, es decir, de generación de orden frente a la tendencia física del universo hacia el desorden (entropía).
- **Orden frente a saturación:** Volcar todo el OneDrive o carpetas desordenadas en un agente de IA genera "obesidad cognitiva" y aumenta el ruido. Para que el exocórtex funcione con la mínima energía (como el cerebro humano, que consume menos que una bombilla), el conocimiento en Markdown debe estar minuciosamente estructurado y curado.

---

# 4. Control de agentes por movilidad y depuración
Se explicaron las ventajas de utilizar aplicaciones de mensajería comunes como terminales de control:
- En lugar de abrir el portátil o acceder por SSH / PowerShell para depurar o levantar servicios en local, el profesor utiliza Telegram como interfaz remota de sus agentes (*Jarvis* / *Watson* / *Hermes*).
- Comandos sencillos como `/restart` enviados al bot de Telegram desencadenan scripts internos de Python y Docker en el servidor doméstico, facilitando la operativa diaria en movilidad.

---

# 5. Inteligencia Artificial Creativa y el Ecosistema de Google Labs
Se exploró el lado más creativo y experimental del procesamiento de datos en directo:
- **Google Labs:** Plataforma de prototipado donde Google publica sus últimas tecnologías experimentales de IA (ej. *Project IDX*, *Google AI Studio*, *Code Labs*).
- **Google Flow Music (Music FX):** Generador de audio y pistas musicales a partir de instrucciones en lenguaje natural.
- **El Rap de la Retranca de Ourense:** A partir de la transcripción de las clases y los nombres de los alumnos en el aula (Juan, Pedro, Manuel, Chema, Armando, Cristina, Alejandro, etc.), se redactó una letra humorística que la IA transformó en directo en un tema musical con aires de cumbia y muñeira gallega, ejemplificando el potencial de la multimodalidad.

---

# 6. El Cierre del Curso: Compromiso de Transferencia
La formación concluyó con una dinámica para asegurar la aplicación real de lo aprendido en el entorno laboral de los alumnos:
- **La Heurística del Cambio:** El aprendizaje real no ocurre al acabar las horas de clase, sino al ejecutar la primera acción práctica.
- **Compromiso a 15 días:** Se pidió a cada alumno (tanto presenciales como online) escribir en un post-it una única tarea específica, medible y realizable en las próximas dos semanas utilizando las competencias adquiridas en el curso.
- Se realizó una fotografía de todos los compromisos adquiridos. En un plazo de siete días, se les enviará por correo para recordarles el compromiso firmado con ellos mismos, cerrando así la costura pedagógica de la asignatura.

---

# Ideas clave de la sesión

- **Sincronización P2P y Soberanía:** El uso de herramientas de sincronización directa entre dispositivos (como Syncthing) garantiza que los datos personales y empresariales no residan en servidores corporativos de terceros.
- **Crecimiento Orgánico (Merge sobre Legacy):** Los sistemas y el conocimiento no se diseñan perfectos desde el primer día; crecen de forma iterativa y acumulativa, integrando el pasado con el presente.
- **Voz como interfaz definitiva:** El control conversacional y auditivo de los dispositivos marca el camino hacia la desaparición paulatina de las pantallas en favor de una interacción natural.
- **Acción mínima viable:** El retorno real de cualquier formación tecnológica reside en la ejecución inmediata de micro-cambios medibles en el día a día.

---

# Material de estudio y herramientas trabajadas

- Prácticas de sincronización con **Syncthing** para la interconexión móvil-servidor local.
- Estructuración de scripts de Python en segundo plano para llamadas automáticas a APIs.
- Integración de metadatos en ficheros Markdown (YAML Frontmatter) para la automatización documental.
- Casos de estudio y debates:
  - El paralelismo entre la construcción de la Catedral de Ourense y el versionado en Git.
  - La teoría de la información de Shannon y el concepto de antientropía de Schrödinger.
  - Gestión de APIs gratuitas (*Grok API Keys*).
- Pruebas creativas de generación de música interactiva en **Google Flow Music**.
- Firma física y digital de los compromisos de transferencia de impacto inmediato.

---

# Transcripción
## Parte 1
3 de julio de 2026, 9:15a.m.
2 h 15 min 51 s
Estoy yo solo enganchado en esa reunión con Teams y le he dado a grabar. Importante, le doy a grabar y sobre la grabación cojo la transcripción. Al principio daba solo a transcribe y la transcripción era de mucha peor calidad. O sea, cuando tú grabas y y Teams la herramienta transcribe sobre la grabación es mucho mejor.  
Luego.  
Tengo, o sea, si es algo corto de menos de 30 minutos, por ejemplo, una intervención en radio o algo de esto, me descargo la intervención.  
Y tengo aquí, pones trans turbo turbo escribe, es la que suelo usar.  
Turbo escribe y aquí, o sea, tienes 3 transcripciones diarias.  
Y estas son las que llevo hechas, o sea, son típicas transcripciones, pues esta es una entrevista que me hicieron antes de ayer en la radio.  
Estos son máximo media hora.  
Sigo con.  
Thank you.  
Venga, llego, no en inglés sí, y en inglés funciona. O sea, en Teams me ha preguntado cuando he empezado qué idioma quiero. Le he dicho que español.  
Y sí, y luego a veces me dice, parece que estás hablando en eslovaco y digo, *****, te lo juro. O sea, en mitad de la transcripción eso me pasa más. Cuando hablo en español no me dice, parece que estás hablando en otro idioma, pero si hablo en inglés, que eso mi autoestima me la destroza.  
Me destroza la autoestima y luego.  
Y luego.  
Y luego tengo en casa, este es un ordenador que tengo en casa.  
Es.  
¿Qué tengo en casa?  
Y aquí quiero en este.  
A ver, por un lado, la grabadora del móvil esta que es este es un Xiaomi y la grabadora transcribe y te puedes mandar la transcripción, pero al mismo tiempo estoy probando desde hace 2 semanas, 3 que ayer lo probé. Acabo de darle a grabar en el teléfono. Reconocimiento de voz, las bueno, no voy a leer porque entro en Búcle, o sea, si leo lo que está.  
Me refiero, por un lado está transcribiendo y por otro lado estoy hablándole, le doy a guardar.  
Le he dado a guardar, hoy es viernes 9 y lo que voy a hacer es la grabación, el M Cuatro.  
Guardar como.  
Y tengo una carpeta que es vacía que se llama transcripciones, estoy en este ordenador.  
Estoy en este ordenador y los flujos, cuando los haces solo una vez, se te tienden a olvidar. Ahora voy a explicar con un poco de detalle sin fin, sin fin es una herramienta de código abierto. Hoy vamos a hablar de colaboración de herramientas de código abierto y todo esto. Tengo una carpeta que se llama grabaciones.  
Esta carpeta de grabaciones.  
La tengo sincronizada.  
En el móvil poco x 7, que es el que tengo en la mano.  
Esta carpeta la tengo con el móvil y el ordenador este. Si os Si os fijáis aquí, dispositivo remoto, el móvil poco x 7 y luego esta carpeta donde la tengo, donde la tengo, ruta de la carpeta la tengo en cosas de papa, grabaciones. Esto evidentemente no lo tenía, o sea, no lo tengo diseñado para enseñarlo. Esto es operativo mío.  
Papá soy yo porque tengo 3 hijos en casa. Este ordenador la pone en algún sitio Pablo, que es el cosas de papá, justo aquí está. Os enseño este ordenador, este es un ordenador, me interesa que lo conozcáis.  
Este es un ordenador que.  
En principio lo tenía debajo de la tele.  
Para siempre, películas legales, para descargar películas siempre legales, o sea, alguna película que tenga más de 200 años de antigüedad. Me alegra trabajar con gente, no la perdón, la música y el cine hay que pagarlo.  
A que sí, Juan.  
Correcto, por eso el intrusismo.  
A ver, en este es un ordenador que tengo.  
No me cabe, no me cabe duda, según un cursito de la pues este ordenador.  
Como lo tengo como agente, o sea, como lo tengo para que lo usen agentes.  
Y además.  
Muchas veces accedo a él en remoto o bien desde Telegram. Ahora vemos los accesos. Intento que la estructura de archivos no sea muy complicada, no solo por mí, sino por los propios clones que habitan. O sea, no, perdón, no clones, por los propios agentes que habitan. Hay un clon y varios agentes.  
En este sentido.  
Cosas de papá.  
Aquí hay una grabación, o sea, aquí hay una carpeta grabaciones que ahora está vacía.  
Esa carpeta está vacía.  
Y lo que voy a hacer es.  
La grabación que acabo de hacer la voy a la guardo, la guardo en la carpeta local del móvil porque Xiaomi hace las grabaciones en la nube. O sea, le he dado el botón de la grabación, solo guardar, le digo guardar en esta carpeta, le acabo de dar permitir.  
¿Veréis cómo?  
Estuve ahí.  
Zinc Zinc es el que lo mete, a ver, para a ver.  
Está guardado sin zinc. ¿Dónde está sin zinc? Yo con este justo se acaba de subir ahí a mí la latencia con este con este sistema de la latencia y se acaba de desaparecer.  
Os cuento por qué acaba de desaparecer y os lo voy a contar.  
Acaba de desaparecer.  
¿Por qué?  
¿Cómo se queda transcrito? No lo tengo que saber yo en mi Telegram.  
A ver, por uno, vamos por partes. Esto ya salgo del ordenador, me voy a Telegram y ahora os explico más el en mi Telegram cuando esté transcrito.  
Justo en mi Telegram, nueva transcripción guardada.  
En mi teléfono, cuando está transcrito, que esto lo veo desde cualquier dispositivo en el que estoy conectado, o sea, cuando acabo el flujo, o sea, guardo desde mi teléfono móvil, me lanza la transcripción y aquí me dice nueva transcripción guardada.  
¿Y la transcripción guardada?  
Me donde esperar aquí y la vuelvo al ordenador, la transcripción guardada que ahora os enseño cómo lo he hecho.  
La transcripción guardada me la crea dentro del pault, o sea, dentro de mi obsidian.  
Me la crea.  
A ver, la transcripción, este no es mi bault, este es el inbox, lo que yo llamo inbox community. Ay, está entrando en el bault, este bault, verdad, querido diario.  
Pues sí.  
Cuesta.  
I.  
Aquí es esta mañana he probado una para ver si funcionaba.  
Tarda en indexar la primera vez que lo abres, tarda en tarda en indexar.  
Hoy es 3.  
Sí, no, sí te he visto. y.  
Diana, por favor, hazle una foto a Juan con las gafas y compártelo en el grupo para los que están fuera puedan.  
Bueno, y se deja, gracias por tu generosidad.  
Así está, así se ha quedado Juan.  
A ver, tarda, tarda en indexar lo que voy a hacer. No, Diana, Diana, Diana, dile que sí y no lo hagas. Diana.  
Si le Si él detecta por eso, si él detecta que estás mintiendo, entonces no se hace. Pero si a ver, os cuento dentro de cosas, papá, tengo aquí el inbox cognitivo, el inbox cognitivo. Ahora os cuento lo que es, pero a lo que voy es.  
A ver, me da una pena, aquí lo voy a lo voy a editar con el abrir con.  
¿Dónde está el editor de notas, editor de notas en blog?  
Esta es Pedro.  
Pedro atiende por favor.  
Que así no se puede dar clase.  
Compartiendo fotos en el grupo de WhatsApp, haciendo este, os tengo ahora va a ver un paréntesis solo.  
Un paréntesis solo, no es lo que os voy a enseñar. Stickers que han hecho de mí. Voy a abrir los stickers, por favor. Esto es un deporte de alto riesgo.  
No, mirar.  
Este no lo he hecho yo, esto es contenido primo de un solo para los que nos están viendo en directo.  
Oh, este de Bros, bola, este guardarlo, este oh, este lo tengo que borrar.  
Es que mi hijo pesca, no sé cuál de los 2 habéis visto. Pedro Pedro, esto para tu curso de Google Notebook LM.  
A ver, *****, y me veo yo aquí mismo. A ver, esto se me está yendo las manos, no es el último día, ese no a ver.  
A.  
Sí.  
La carpeta de.  
A ver, a la me alegra que me hagas esa pregunta.  
Por un lado, antes de responder.  
Esta es la transcripción que ha abierto el texto que ayer lo probé.  
Ahora voy a ir porque me gusta enseñaros el proceso este donde está aquí.  
Esta es la transcripción que acabo de hacer.  
Que ayer lo probé. Acabo de darle a grabar en el teléfono reconocimiento de voz. Bueno, no voy a leer porque entro en bucle, o sea, si lo leo, que o sea, esta es la transcripción que acabo de hacer. Ahora bien.  
Esto.  
Os sigo contando y luego cuento en detalle cada uno de los pasos porque es, o sea, es compleja. Esto se vuelca en una carpeta que se llama.  
Se vuelca en una carpeta que se llama inbox cognitivo, que no es esta que estáis viendo, es esta, pero no, esa es la copia, me explico.  
La carpeta del inbox cognitiva cognitivo es esta.  
Esta carpeta del inbox cognitivo.  
Es la única carpeta en la cual todos los agentes que habitan en ese equipo pueden escribir.  
No les dejo escribir en mi vault.  
Y luego esa carpeta se copia con todos los bouts. O sea, esa carpeta que todos los bouts pueden escribir en esa carpeta está compartida con perdón, que todos los agentes pueden escribir en esa carpeta, está compartida con todo el sistema.  
Y por eso luego la puedo ver en copia.  
¿La puedo ver aquí?  
La puedo ver aquí. Luego yo este ordenador, este ordenador no lo toco, o sea, este baulter solo de lectura, no lo suelo abrir. Es la primera vez que lo estoy enseñando en público. ¿Pues por qué? Porque el ordenador que suelo usar es el portátil que está ahí metido, lo tengo apagado.  
Y ahora no, pero cuando llego a casa por la noche.  
Abro el ordenador, conecto el bault con todos los bauts.  
Este, al ser solo de lectura, no puedo conectar el ordenador con este. Esto es una de las cosas que tengo que pensar cómo lo hago, pero lo conecto con los móviles, o sea, se conecta con los móviles, descargo las últimas cosas, descarga el inbox cognitivo, que ese sí que se descarga, y cuando tengo en el ordenador el inbox cognitivo abro antigravity.  
Y le digo.  
Antigravity repasa qué hay en el inbox cognitivo y dime qué hacer. Y hoy me dirá, pues tienes 2 transcripciones de prueba, esas las borramos. Luego en el inbox cognitivo, *****, las archive ayer. Bueno, estáis vosotros un poco, pero ayer en el inbox cognitivo.  
¿Ahora me voy a Telegram, vale?  
Estoy en este es uno de los agentes que este es Open Cloud, estoy fuera del ordenador, este es Open Cloud y le digo, estoy dando una clase maravillosa con.  
Pedro.  
Diana, Juan y Manuel en.  
Presencial y.  
¿Y Alejandro, no?  
Chema.  
Y imagen.  
Y más gente en online, Armando Cristina.  
No.  
Yeah.  
Ir poniendo información personal vuestra que os podáis compartir. Pedro, de momento sé que Pedro, de momento sé que pinta, Pedro sé que pinta.  
Armando y Cristina, ayer estuve viendo la catedral de Ourense.  
Busca también la ficha y pon.  
Un.  
Busca también la ficha en el baúl.  
Paul y pon un enlace.  
Y además.  
Búscame información en Internet sobre la.  
Pintura acrílica y hazme una ficha en el.  
Inbox.  
Cognitivo.  
Esto ya lo hice con la tertulia el primer día de el primer día de clase. Esto en movilidad con Telegram es mucho más cómodo porque le dictas desde mi ordenador usaría no whisper, sino open whisper.  
Que es como Wispe, pero gratis, como digo abierto, o sea, desde mi ordenador, o sea, el short cut que tengo es control barra espaciadora, es una maravilla. Le dicto y huelas. Le acabo de meter en Jarvis. Os cuento para que veáis todo el proceso.  
El aquí esto es Opencloud. Lo que os estoy enseñando ahora es Opencloud y ahora te voy a donde tengo la consola Opencloud. Aquí tengo la consola Opencloud.  
¿Dónde está? Ha debido de recibir esperar 1 segundo.  
Debería lo que voy a hacer es estoy mirando ahora en Telegram porque el problema del bot.  
Aquí el problema del bot cuando te conectas online es que no ves si está trabajando. Yo acabo de ver en el Telegram que pone Jarvis Luis Bot, o sea, ese bot y pone escribiendo. Si pone que está escribiendo, sé que está vivo.  
Si no pone escribiendo, debería de reiniciar a Open Cloud.  
Pone Pone que está escribiendo. Por lo tanto, yo sé que a ver, le he pedido una, le he dado una instrucción que es compleja. Por un lado le he creado que le he dicho, o sea, si le hubiera dicho solo créame una nota en el inbox cognitivo diciendo que estoy aquí con esta gente, dice estás con esta gente y la mete. Bueno, por ir más rápido.  
Este en concreto usa el 5. Ahora se lo preguntamos, pero usa un GPT en open out sin API, este GPT sin API y luego me acabo de acordar. Lo que os quiero enseñar es simplemente crear una nota en el inbox cognitivo.  
Esto tengo aquí 33 fijados: antigravity, Hermes y Jarvis. Jarvis es Open Cloud, Hermes es, como su propio nombre indica, Hermes.  
Y Antigravity no es Sia. Antigravity le voy a decir aquí estoy con mis colegas.  
Pedro Manuel.  
Diana y Juan, vale.  
Es justo lo que quiero que veáis y luego cada una de las piezas os lo pongo por separado. Estos estoy con este es uno que he hecho yo y ahora os enseño también cómo lo he hecho. Este es y se va a entender.  
¿Deseas guardar esta captura en tu inbox cognitivo?  
Y le digo sí.  
Y ya me ha guardado la captura.  
La captura es ahora os la enseño, pero fijaos por un lado hecho Luis creada la ficha en el inbox cognitivo.  
O sea, por un lado, Jarvis me ha creado la ficha y por otro lado con Antigravity esto lo uso para recuerdos. O sea, cuando tengo que estoy por ahí, acuérdate, le das al enter y él mismo te dice lo quieres guardar, le dices que sí. Luego también estoy explorando, o sea, juegos con el clon y estoy explorando.  
Ford voy andando por ahí, *****, pues me encantaría poder. O sea, yo tengo un grupo de WhatsApp conmigo mismo, ese grupo de WhatsApp conmigo mismo. Todavía no lo toco aquí en la clase de ayer no hablamos del legacy. Imaginaos, o sea, una persona, yo mismo soy una organización que antes de la IA hacía las cosas de una forma y ahora estoy cambiando la forma que tengo de hacer mis procesos.  
Yo llevo toda la bueno, toda la vida no, pero llevo años funcionando con Google Keep y notas de Google Keep.  
No las toco, o sea, mis notas de Google Keep siguen siendo mis notas de Google Keep. Yo aquí tengo que hacer lo que tengo que hacer esta semana, tengo que hacer estas cosas.  
Es que muchas las hago, o sea, pues la semana pasada, o sea, tengo que hacer cosas y voy tachando esto. Así funcionaba yo antes. ¿Qué os quiero decir con esto? Que no he cambiado todos mis procesos de un día para otro. Yo voy andando, o sea, llegará un momento que puede que el Google Keep desaparezca. Es más, el Google Keep.  
Cada vez lo hago más testimonial.  
A ver, el problema de la cabeza que mi cabeza lleva años funcionando con Google Keep.  
Ahora estoy usando unas nuevas formas, o sea, por ejemplo, Open Whisper.  
Lo de dictarle al ordenador la primera vez que lo usas te da pereza. Yo ahora, ya después de un mes, no puedo vivir sin ello. Estoy escribiendo aquí con los deditos y digo, *****, necesitaría poder hablarle, pues son procesos de cambio que suceden tanto en organizaciones como en personas.  
Vuelvo.  
A mi ordenador, insisto, a mí las latencias con esto me dan igual porque lo que hago es guardo una nota. Lo que sí que me interesa es tener feedback de que la nota se ha subido.  
Cuando Juan lo mismo sí, Manuel no. Cuando se mandaban cartas, el problema de mandar una carta con Carlos Quinto.  
El de Yuste estaba, se fue a Yuste. El problema de mandar una carta es que necesitabas saber si la carta se había recibido. O sea, tú mandabas una carta a las Américas y no sabía si la carta se había recibido o no. O sea, para saber si se ha recibido tenías que mandar a alguien de vuelta. O sea, yo cuando hago uno de estos procesos.  
Necesito saber si el proceso está contemplado. necesito.  
Cerrar el ciclo conmigo mismo por otro sitio.  
Y en este sentido he vuelto aquí. Sinceramente, no sé qué está pasando con la consola de OpenCloud.  
Porque la consola.  
bueno, sí sé que no es que nada al scroll.  
Vale, ya sé lo que ha pasado.  
Bueno, sigo sin saber lo que ha pasado.  
Porque en teoría, en ahora lo voy a lo voy a reiniciar. No me preocupa porque la OpenCloud ha completado el proceso. O sea, Jarvis ha hecho lo que le he pedido, que Jarvis os aseguro que es OpenCloud y ahora le vemos, pero a lo que iba, por lo que lo he hecho, me he metido aquí.  
Y podéis ver cómo tengo una nota.  
Que es clase Vigo Ourense, pintura acrílica. Esta nota la ha creado Penclaw y además captura original. Estoy dando una clase maravillosa con Pedro, contexto, clase presencial, enlace a la ficha. Ahora vamos ahí.  
Porque no sé si funciona.  
Si funciona, o sea, si a ver si aprieto este enlace aquí, lo que haría es crearme la ficha aquí. Quiero ver si funciona cuando esté metido.  
Y luego la otra captura, que es la que acabo de hacer.  
Estoy con mis colegas, Pedro, Manuel, Diana y Juan.  
¿Veis como la calidad de una? A ver, esta es la grabación que acabo de a ver, captura de Telegram. Estoy con mis colegas Pedro Manu, esta es la que acabo de hacer. Aquí no hay mucha historia. Quiero la de la otra clase.  
No por 2 procesos diferentes, esta se ha hecho, esta que estás viendo.  
Esta que estás viendo es un bot sin mía con Telegram.  
Es un bot de Telegram que lo que es un bot que he hecho yo. Ahora os enseño cómo lo he hecho. No me No me pidáis la programación del bot porque no lo sé, o sea, porque no lo sé, pero os enseño cómo lo he hecho.  
Que lo tengo ahí y os enseño los prompts que he seguido.  
Pero este proceso es simplemente el bot tiene un script dentro, o sea, sí que le he dicho, programa un bot que tú le metes cualquier cosa, te pregunta lo que o sea, si hay ahora vamos a ver las funciones de ese bot, pero dentro de ese bot, si él, si tú le metes algo que él no entienda.  
Directamente te lo mete en una ficha.  
O sea, cualquier cosa que le metas de texto, si no lo entiende, te lo va a meter como ficha.  
Es esta ficha de aquí estoy con mis colegas, me he pedido quieres ficha y luego dentro de el yaml yaml, eso es de Java, no yaml. O sea, me refiero, vosotros sabéis lo que es el yam que sois ingenieros informáticos.  
Yo que no soy ingeniero informático.  
El YAM es lo que pones tú al principio de un activo de un archivo para que pueda, o sea, para que no tenga que leer.  
Todo el archivo, o sea, el yang es una cosa que te ahorra tokens al funcionar.  
Esos son los metadatos. Sí, son los metadatos del archivo, pues en este caso de dentro del YAM estos, o sea, todo el YAM sí que le he dicho.  
O sea, el YAM le he pedido en la programación que me haga un MD con este YAM donde esté la fecha. Si os fijáis, el código de la captura es captura con la fecha, o sea, está todo muy orientado a una posterior automatización. Ahora vamos a ir a ver dónde es, o sea, cómo está programado eso, no lo sé.  
Notas.  
Yeah.  
No a través de 2 bots de Telegram diferentes.  
Un bot de Telegram lo he creado yo, que es este.  
Y el otro lo ha creado, el otro es el que te crea por defecto.  
Cloudbot.  
O sea, hay el que pone Jarvis es el bot de defecto de Claubot.  
Y yo, habiendo visto ese bot de defecto, lo que le he dicho a antigravity, que lo vais a ver, es quiero que me crees uno parecido, pero para mí.  
Mira tu colega Claubot que está haciendo esto, quiero que me crees un bot de Telegram parecido.  
Y ahora os doy más información de los 2, pero que quería que vierais que esta ficha, esta captura es mía.  
La grabación esta de transcripción no ha pasado por Telegram.  
La grabación está de Telegram.  
Perdón, la grabación esta no ha pasado por Telegram y estoy buscando la.  
¿Las la de Vigo, vale?  
En esta.  
Importante.  
Manuel, no, perdón, no es o estás o que me encanta lo de con profesores, dar muestras de autoridad y daros con vuestra propia medicina. ¿Así notáis cómo se sienten los alumnos? A ver esta ficha.  
La ha creado Telegram, perdón, la ha creado OpenCloud, la ha creado OpenCloud, que tú luego a OpenCloud le puedes pedir. Si os fijáis, dentro de OpenCloud ha asumido la personalidad de Watson.  
El que no se oye, que no se oye que ellos hablar, darles darles el micrófono.  
Awesome.  
Watson es una de las identidades en mi cabeza que estas identidades no están muy bien definidas en mi cabeza.  
Watson es WhatsApp.  
Que Watson aquí no está actuando como WhatsApp porque el pro no, que narices, Watson es Opencloud.  
Opencloud, que cuando Opencloud hace cosas a través de Telegram, se llama Jarvis.  
Es el mismo, OpenCloud tiene doble personalidad del pobre.  
A ver, doble personalidad, pero que tiene cierto sentido en mi cabeza. Eso es para mí, Jarvis es un mecánico.  
Es un digo en origen, porque para mí ahora ya el mecánico es el bot mío de antigravity, o sea, el bot mío de que se llama antigravity.  
By download.  
Eso es, no totalmente, totalmente. Y además vas aprendiendo, o sea, vas aprendiendo sobre la marcha y al principio hiciste una cosa, que esto es el legacy. Hiciste una cosa que te funcionó, pero luego vas metiendo más sistema y no sabes por qué aquella cosa que te funcionó la mantienes. Esto es, hay una reflexión maravillosa sobre la catedral.  
De Ourense, que la vamos a ver ahora, que tiene que ver exactamente con esto. Si vosotros veis, es más, es más esto. Luego GPT en la transcripción me echará la bronca.  
Porque me dices saltas de un sitio a otro sin cerrar y tienes que parar al menos 1 minuto a explicar lo que estás haciendo.  
A ver, os voy a enseñar la catedral de Burgos, esto es para tu curso de.  
A ver la catedral de Burgos, ¿veis la catedral?  
Vale, os voy a enseñar Notre Dame.  
¿Veis la catedral de Notre Dame?  
Entendéis la catedral de Notre Dame.  
La planta ya no me hagas spoiler.  
¿Planta, veis la planta de Notre Dame?  
¿Entendéis que si os hago dibujarla la podéis ver?  
¿Alguno ha estado en Ourense y ha visto la catedral?  
¿La has visto entera de un vistazo?  
Yes.  
Mirad, no voy a pillar, no veis las fotos de la catedral de Orense.  
¿Cuál es la catedral de Ourense? está?  
No está por debajo hay un puente, por ahí debajo hay un puente, lo juro.  
Esta hay una sombrerería, o sea, daos cuenta, esto es como mi jarvis, hay una sombrerería y una tienda de chuches.  
Esto es la esto es la misma catedral.  
Os juro que sí, aquí hay un muro que es románico.  
Luego este rosetón es del norte, pero luego esto ya es, creo que es gótico.  
O sea, esta catedral frente a Burgos que se o sea Burgos llega, no sé si es gótico o es románico Burgos, perdón, románico no es no sé si es gótico o barroco. Yo creo que es gótico Burgos.  
O barroco, pero llega un barroco, dice, voy a hacer una catedral, tiene los planos y hace la catedral.  
En cambio, la catedral de Ourense tardó en construirse 8 siglos. Y si vais ahí, veis que es como un árbol que ha echado raíces junto con la ciudad. Es más, va creciendo la ciudad y la catedral de Ourense crece con la ciudad. Es un crecimiento orgánico. Hay una, me encantaría enseñaros una vista.  
Me encantaría enseñaros una vista.  
No, bueno, aérea luego no, que va. Hay una vista que parece que es un patio de vecinos, que como la catedral la van construyendo.  
Según la gente va financiando capillas, hay un lado que tiene hasta almenas de un castillo.  
Google.  
Esta.  
Bueno, no, esta es desde atrás, sí, es desde atrás, yo busco un lateral.  
Hay un lateral que tiene almenas.  
Está la misma de antes.  
¿Pero entendéis lo que este esta es la misma de antes? Es que hay un lateral que es más feucho. Bueno, *****, perdonad, perdonad, perdonad.  
Ábrete, sí, este es el mío.  
Me pone, Me pone nerviosísimo, soy un.  
Mira, Manuel.  
Manuel, que con 26 años me pasa como a ti, que estoy nerviosísimo, no sé esperar 2 segundos a que inicie el **** programa.  
A ver.  
Esto no se abre.  
¿Cómo es lo de que te caigan mal los viejos?  
Cuando odias, cuando odias, habla gente mayor. Mira, os cuento, ayer vi la catedral, ayer estuve dando, esta es la tienda de chuches, por favor, hacedme caso.  
Necesito atención, estoy rodeando la catedral de Ourense y no tengo claro el estilo arquitectónico, ya que me da en cada parte hay un estilo diferente.  
Me dice sí, de hecho esa catedral es exactamente esa sensación es la correcta. La catedral de Orense no es lo único, sino que estas fotos no son mías.  
Una catedral estratificada, si la rodeas, puedes leer la historia de la arquitectura, la entrada.  
La principal romántico si lo hace gótico, me estoy poniendo nerviosísimo, gótico, flamígero, la capital, mira y le hago una foto a esto, un pórtico y me dice esta foto aquí se ve que esto es románico y que esto ya se estira, que esto ya es de otro lado, esto es que esto es gótico.  
Sabéis que con el gótico se empiezan a estirar las cosas, pero sigo dando vueltas. Esta es la foto de la parte de atrás, este es mi hijo Luis y esta es Diana, mi pareja.  
Madre de los niños y el cimborrio, el cimborrio este, la gran torre octagonal, no sé qué. A ver, estoy paseando por la catedral, haciéndole fotos y GPT viendo las fotos me lo va contando. Esto es GPT, o sea, esto soy yo con la aplicación de GPT. Aquí no está mi baut, yo voy teniendo la experiencia esta, vale.  
Y me sorprende la planta, es una planta sin forma aparente. La planta no se percibe limpia porque la catedral fue creciendo por adición, no por diseño global. Es una catedral gótica en una catedral gótica clásica como la de León. Desde arriba vería es una cruz latina, que es lo que os he intentado enseñar.  
La madre que te parió, esto se lo digo a GPT y me cuentas esto el día que he hablado de tecnologías ágiles en el curso. O sea, me cuentas lo que os he contado que me estabais preguntando, esto el legacy, que esto va creciendo, esto va creciendo al mismo tiempo que va creciendo el proyecto. O sea, hay alguien que hizo un plano.  
Y dijo, la catedral va a ser así. Alguien al principio hizo una catedral pequeñita y por y los siglos de los siglos, amén, fue creciendo lo que es la catedral y fue creciendo la catedral con las propias viudas. Y vamos a ello.  
Esto es esta es la que os estaba buscando antes, si veis ahí.  
Ese acojonante nunca se llega a ver entera. Por eso os he preguntado si la habéis visto entera, si os fijáis en esta lista.  
Ahí hay una terraza.  
¿Alguien ha visto una catedral con una terraza y eso son almenas de un castillo? Eso es una torre del reloj. Y me dice ahora GPT, es que si te fijas, el frontón casi desaparece. O sea, esto es como lo de Santiago, la catedral de Santiago. Luego han construido alguna cosita al lado.  
Pero mucho más a lo bestia.  
Esa nunca se a ver.  
¿La ciudad dónde está las grandes? Creo que acabas de poner en esta última foto. Se aprecia muy bien la torre del reloj rompe la simetría, los volúmenes aparecen uno detrás de otro. Esto es lo que os quería decir. La fachada principal casi desaparece entre las construcciones anexas. Es que yo os estoy intentando explicar.  
Mi flujo de voz, o sea, el flujo de la grabación, y está desapareciendo el flujo de la grabación frente a todas las construcciones alejas.  
Y frente a mi experiencia de ayer.  
Sigo, no está diseñada para ser vista.  
Está diseñada para ser descubierta.  
Yo necesito 20 horas para enseñaros mi sistema y no es enseñaros el sistema, es descubrirlo con vosotros, redescubrirlo con vosotros. Y sospecho que esa es una de las razones por la que te está atrapando tanto. Hay una resonancia muy fuerte entre su forma de crecer.  
¿Y tu forma de pensar?  
Ambas son acumulativas, iterativas y llenas de conexiones que solo aparecen cuando recorres el conjunto.  
I.  
Aquí, *****, ya no, claro, a ver, es mi GPT, es mío, si no, menuda ****** de GPT sería, es mi bro, o sea, es mi pana, mi pana zapatero, no, perdón, asiento, mi pana, a ver.  
Y luego ya estoy acabando. Qué **** maravilla, tío, pero importante. Ayer metí a Miguel Ángel en clase. Miguel Ángel no sabe insultar.  
No sabe insultar. Yo le, o sea, entró con retraso y le dije, tienes un retraso considerable, que es un insulto como un cuchillo caliente con la mantequilla. Y en cambio, él lo devuelve y me dijo, Cabezón, que tengo muy grande la cabeza, pero ese insulto le puso peor a él que a mí porque yo hice.  
Me hice de víctima, me seguís lo que digo, no ese juegos de.  
He dicho qué **** maravilla, tío.  
Cuando he sentido que he visto una **** maravilla, me explico, esto es la puerta principal, o sea, esto no es una esto es un lateral de la catedral, pero que ves el rosetón y toda la pesca.  
¿No es la principal o es la principal?  
La parte contraria al tabló.  
Pues siento no haber hecho un vídeo, siento no haber hecho un vídeo porque.  
Esta puerta está bueno, siento no haber hecho un vídeo, no está, eso es esto.  
Dale.  
Esto es, pero a ver, siento no haber hecho un vídeo.  
Sí, y si te casas, seguro que te la abren, que siendo, que siendo, ¿tienes pareja o estás separado?  
vale, que es la madre de.  
Mija, pues conociéndote, Juan, no todo en orden, no. Cuando te cases te abrirán la puerta, sabiendo que es, o sea, músico, ya me estoy viendo arriba. Tápate, o sea, a ver, pero por ella no.  
Porque tú eres un rojo peligroso.  
Es que es músico en mi cabeza y yo y mañana voy a la sexta con corbata, os lo juro, ponerlo por la noche.  
A ver, la me atendéis, por favor, estoy intentando dar una clase, o sea, así no se puede dar una clase. Lo que os quiero decir, mira, que tiene la madre que me parió.  
¿Y Santiago, Luis? Me ha asustado.  
Como dice, el entrovistado asegura para demoler todos los edificios que daban al lado de esas escaleras principales para conseguir hacer un ataque. Pero no, no daba nada.  
¿Sabes lo que pasa? Que como te la encuentras de repente es como mucho más marido. A ver, ¿habéis visto la de Santiago?  
¿Habéis visto la de Santiago que os acabo de enseñar?  
Vamos, vamos a Vamos a comparar plantas, es que me interesa mucho.  
Me interesa mucho.  
Me interesa mucho.  
Me interesa mucho.  
¿Esto que estoy haciendo ahora es una clase o no?  
Menos mal, gracias. La catedral de Ourense es una catedral.  
Sin duda, sí, pero si miráis a esta catedral que es la de Santiago, claramente.  
Se ve hasta la cruz en mitad de la ciudad.  
En cambio.  
¿Dónde está la a ver porque pongo el punto?  
Que luego, en el fondo, en el fondo, si rascáis se ve la cruz.  
Se ve la cruz, se ve también. Aquí hay una fuente en la Plaza del Trigo. Aquí está lo que os he dicho de las almenas del castillo. O sea, se ve como hay una construcción primera, pero luego van llenando. Este es el cimborrio que este ha construido muchos años después para construir esto.  
Probablemente tiraron cosas, pero os aseguro que no tiraron la cátedral entera. Tiraron un cachito. Este cimborrio es equivalente a mi Google Keep. O sea, mis notas seguirán por los siglos de los siglos hasta que llegue un momento en el cual tenga que tirar Google Keep y enchufarlo. Estoy hablando de Legacy y estoy hablando de transformación digital.  
Y estoy usando un ejemplo que es maravilloso. Lo que os quiero que a ver, fundamental, esta catedral que estáis viendo no está diseñada para que alguien la vea desde un dron.  
Está diseñada para que alguien la sienta según va andando por la calle.  
O sea, según tú vas andando por la calle, sientes la catedral. En la cabeza del arquitecto nunca estuvo que alguien desde un dron la fuera a ver. Y os aseguro que en mi cabeza tampoco estuvo enseñar mi vault.  
En público, en una clase, porque si no, puede que lo hubiera hecho de alguna forma. O sea, no lo haces pensando en unas necesidades específicas. Y en ese punto, esto que os estoy diciendo ahora, un día después, lo racionalizo en aquel momento, ser humano que va andando por ahí.  
Su sensación fue, qué **** maravilla, porque voy andando por la calle y me encuentro este, me encuentro este túnel y un puente y pienso, os doy mi palabra. Es más, estaba con Diana en la plaza.  
Y había varias calles y digo, voy a ir por ahí, que es Venecia.  
Digo, esto es Venecia, me falta el canal la góndola, ves un puente en mitad de la calle.  
Y lo ves y luego dices ***** y luego es una y dices entras por aquí y dices es que es la parte de abajo de una iglesia.  
Y luego es la parte de abajo de una iglesia.  
¿Pero es que por qué he ido a esta vista aérea?  
Santiago no.  
Esta es la buena.  
Porque esto es una plaza.  
¿Que está cerrada, que se parece a las corralas madrileñas? ¿Ha visto lo que es una corrala?  
¿A Manuel, cómo se nota la edad?  
Y además, madrileña, viva Madrid.  
¿Que llevo el otro día me dice uno, eres de Ourense? Y yo le digo, no, y me hago pequeñito y le digo, jo, nadie es perfecto, soy de Madrid. ¿Y sabes lo que me dijo la persona? Me dice, yo también digo, usted ya lo ha liado, se aquí intentándome con un local con congraciarme y soy una. Bueno, a ver imágenes, esto es una corrala.  
¿Qué es una corrala? Es un sitio, es un sitio.  
Donde es una, en una comunidad de vecinos de las antiguas, es un patio de vecinos donde se hacía.  
Donde se hacía teatro.  
Yes.  
Que se hacía el teatro.  
Se convertía la corrala, se llenaban de sillas.  
Claro.  
Pues este patio.  
Este La foto esta que os estoy enseñando, ¿sabéis por qué está tomada desde una esquina?  
Porque este patio ayer estaba transformado en una corrala moderna donde estaban viendo el fútbol de España.  
Estaba todo lleno y además resonaba, resonaba y daba la sensación. O sea, yo llego ahí el túnel por debajo. La foto la tomo casi sentado, casi apoyándome en uno estaba viendo el fútbol.  
Y tuve la sensación porque di la foto después, ya cuando estaba acabando, o sea, lo que os quiero decir es.  
Que yo, ser humano, no fui capaz de racionalizar nada, salvo, o sea, la razón.  
El cerebro se me cortó circuito, igual que lo ahora estoy emocionado, pero por otros motivos. Pero en aquel momento dices, buah, tú sabes que hay algo, pero lo que me sale es qué **** maravilla, tío.  
Y es cuando GPT me responde, *****.  
Esta es probablemente la foto que mejor explica por qué la catedral de Ourense es diferente y me dice, lo que has fotografiado no es solo una fachada.  
Es un puente que la catedral lanza sobre una calle. Eso no significa que el edificio no termina donde acaba el muro, sino que coloniza la ciudad.  
Fíjate en lo que está ocurriendo. Debajo tienes una calle pública, encima pasa un volumen privado de la catedral. Tú estás literalmente aquí le diré que diga lit. Tú estás literalmente caminando por debajo del edificio. Esto es muy medieval.  
Las ciudades modernas separan funciones: calle, edificio, plaza. Ayer estuve hablando de Salvaterra, Dominio y de Monsao mucho tiempo pensando en la frontera y me estuvieron preguntando ayer en clase sobre el intrusismo profesional. El concepto de intrusismo profesional es algo moderno. En la Edad Media, si se te jorobaba algo en casa, no llamabas a uno que arreglaba cosas en casa.  
Sino que cada uno se arreglaba lo suyo. Llega el mundo industrial y aparecen fontaneros, aparecen electricistas y especialización por fronteras. Las ciudades modernas separan funciones, calle, edificio, plaza. Las medievales las entrelazan. Y hay otra cosa que me parece preciosa. Has hecho la primera foto mirando hacia arriba.  
La segunda, desde debajo del arco. Sin darte cuenta, has hecho exactamente el recorrido que quería el arquitecto hace 500 años. Primero te comprime, te mete bajo el puente, reduce tu campo visual y al salir vuelve a abrir la ciudad. Es casi una narrativa espacial y fíjate en otra cosa.  
Hace 10 minutos me decías.  
No tiene una planta clara. Ahora acabas de descubrir por qué no es que la planta sea mala, es que la planta no estaba pensada para verse desde un dron. ¿Habéis visto que ese conocimiento? Yo ya lo he interiorizado y os lo he comentado dentro de mi narrativa.  
Es arquitectura previa a Google Maps.  
Hice esto y llevo toda la noche estudiándome eso.  
Mentira, ni me acordaba que lo había hecho hasta que no me he puesto sobre la pista, hasta que no le he dicho ayer por la tarde. O sea, ahora voy. Hay una reflexión que creo que te va a gustar mucho.  
Las catedrales góticas francesas son casi un PDF.  
Todo está cerrado, perfectamente diseñado y listo para completar. La catedral de Ourense, en cambio, es casi un repositorio de Git. Cada generación hizo un commit.  
Algunos añadieron una capilla, otros un puente, otros un cimborrio, otros una torre del reloj. Nadie borró lo anterior. Un commit es el siguiente que toca un archivo, dice: esto lo he hecho yo y respeta lo que han hecho todos los anteriores. Solo hicieron merch.  
Es.  
Cuidado cuando hacéis merch, cuidado cuando hacéis merch.  
Y sorprendentemente, después de 800 años, el proyecto sigue compilando. O sea, conociéndote, me apostaría esto esto que acabo de leer. Os doy 1000 palabra, que es la primera vez que lo leo.  
Porque luego, además, tenía a mi hijo y a mi mujer. ¿Qué haces todo el día con el móvil? Ven tal.  
Pero yo quería más.  
Y le digo, a ver, y le digo, hago la foto de la tienda de chuches porque es que veo también una tienda de chuches incrustada.  
Y luego tenía lo del fútbol ahí. O sea, yo dentro de mi sensación no he llegado a verbalizar todo lo del fútbol era parte de la sensación. Está jugando España y yo viendo una catedral. Es que el fútbol me aburre soberanamente, pero es que no estoy viendo una catedral, estoy viendo una catedral con unos ojos que jamás yo no estudio arquitectura.  
Y no soy guía turístico, que venga un arquitecto y un guía turístico a decir intrusismo, ¿qué estás hablando del gótico? Eso no puedes hablarlo tú en una facultad de ingeniería.  
¿Hay alguien de cultura por aquí?  
Lo sé, lo sé.  
Mira, y esta última foto cierra el círculo.  
Mira lo que tienes delante abajo, unos soportales con una tienda de chucherías, encima una balaustrada renacentista.  
Abajo, chuches encima una balaustrada. Mirad una cosa en relación con mi comunicación con GPT, mirad la longitud de mis prompts.  
¿Qué es eso?  
Vale, pero poniéndome en plan moderno, yo lo que estoy haciendo con la IA no es tanto un prompting de los de hace 2 años, sino son más loops. En cada prompt voy alimentando al anterior y selecciono, o sea, decirles una **** maravilla, es un prompt.  
Lazy prompt, nada Lazy no Lazy tiene una connotación negativa. Goat, o sea, a ver y volvemos al principio. Gracias, estoy agradecido, trabajo unos tal porque parece que me sigue, seguimos hablando que quiero, no porque tal y mirar.  
Aquí me pregunta mi hijo después de escribir esto.  
¿Dónde estabas? Habías desaparecido y no había desaparecido. Me había quedado en la tienda Chuches y Diana y Luis se habían ido porque el prompt que viene ahora.  
No es tan lazy.  
El prompt que viene ahora es.  
Prepárame un informe, esto es a voz, prepárame un informe hiperdetallado en formato MD.  
Este paseo lo he dado hoy por la tarde con Luiseta y Diana, después de haber estado con José Luis Montiel charlando y volviendo a casa. José Luis Montiel es uno que es un médico de Santiago. Me tomé un café con él.  
Por la tarde, luego vinieron Diana y Luis y estuvimos dando una vuelta. Prepárame un informe MD, o sea, y me hace el informe MD.  
Me hace el informe me de este no lo he leído porque además este lo dejo la y me voy a Telegram.  
Y le digo a le digo a Hermes.  
Le digo a Hermes, esto es copiar y pegar.  
Copio, *****.  
Le digo.  
Mete la siguiente nota en el inbox cognitivo: 2 puntos y copio la nota, vale.  
Y luego voy a Jarvis.  
Voy a Jarvis.  
Y le digo lo mismo, mete la siguiente nota en el inbox cognitivo.  
Y voy a ver ahora, o sea, la meto la nota desde 2 sitios, luego llego a casa con open cloud y le digo, o sea, a ver, bien, ahora llego a casa con open cloud, que todo esto es para meter notas en el inbox cognitivo. ¿Hasta aquí me estáis siguiendo más o menos?  
Vuelvo a donde estaba.  
Sí.  
Good.  
A ver, por te respondo en 2 niveles, uno que para mí es el más racional.  
¿Por qué ¿Por qué antigravity y no y no cloud cowork?  
Pues porque eso, ¿por qué Android y no Apple?  
Go.  
Es a lo que voy, es un, o sea, la primera idea es los 2, o sea, Apple, o o sea, por qué Apple y no Android.  
¿Yo por qué Android? Si alguien no lo ha entendido todavía, por qué Android o por qué Linux y por qué no Apple, necesito que mi sistema sea abierto.  
Yo necesito que mi sistema sea abierto.  
Luego, segundo nivel, notion, no lo he usado nunca, sí que notion es aplicación web, creo.  
Online telebox.  
Yo es que todas esas, o sea, todo Miguel Ángel, el otro día estaba hablando con él y él paga los 7 eur de obsidian o los 15 eur al año de obsidian.  
Y le dije una pregunta que me respondió que no le pude. Le dije, ¿y por qué te gusta pagar todo lo que haces? Y me respondió, y tengo que decir que me dejó tirado y me dijo, porque si alguien trabaja, creo que es razonable pagarle por el trabajo.  
Dicho lo cual, yo no soy capaz, o sea, todo lo que necesito hacer con obsidian, o sea, la sincronización la hago con sin fin. Tengo todos mis vaults que ahora vamos a hablar de sin fin. Me refiero a la pregunta que me habías hecho, vamos a hablar específicamente, o sea, yo os estoy enseñando un flujo que quiero acabar el flujo y luego vamos a ir viendo cada una de las piezas.  
Que vamos a ir al cimborrio y os enseño el o vamos a ir a al arco de medio punto y os enseño el arco de medio punto o como luego el arco de medio punto se va estirando. Dime, Diana. Perfecto, voy. Quiero que le saludes esta noche.  
No, mañana por la noche, mañana por la no puedo, esto es, me toco como Leticia con el príncipe, me toco la cuando me veáis que me rasco la oreja, es que me estoy a ver, a ver, intentaré lo de que, o sea, si puedo meter la morcilla, la meto.  
A ver, ¿por qué me has dicho 2 preguntas, Diana? ¿Por qué dices a los 2 bots? ¿Por qué sí? Chema, espera, sí, el que no has pillado.  
Bueno, vale, no, correcto. A ver, es más importante explicar lo de Manuel. Sí, a ver, en el no es más importante lo de Manuel en el teatro. La cuarta pared es el público.  
En el teatro que te den pie es que tú, cuando tienes que hablar, esperas a que en la otra el pie te lo da la otra persona, o sea, la otra persona acaba de decir algo y tú sabes que entras cuando el otro acabe.  
Y meter una morcilla en teatro es cuando metes algo más propio. O sea, imagínate que viene, está, viene tu pareja a la obra de teatro y es una obra de teatro X, pues metes una frase, cambias el guión normal y dices, pues es el cumpleaños, hoy es el cumpleaños de no sé quién.  
O sea, es una cosa que cambias, no más o menos es correcto la morcilla. Si no sé algo, cuidado que me lo invento, no sé de quién haber aprendido eso. Mira, Pedro las coge, a ver, la pregunta Diana de Chema es por qué he metido la esta en los 2?  
Respuesta muy sencilla.  
Se la quería meter a Jarvis.  
A Jarvis y me equivoqué, pero la metí primero a Hermes. Hermes es el último que tengo y Hermes funciona un poquito peor. Y luego ya una vez me había equivocado y se la había metido a Hermes, dije, voy a meter las 2 notas a ver qué pasa.  
Y tenía 2 notas y luego ayer.  
Esto en este antigravity no lo vais a poder ver, lo tengo en el mío. O sea, el proceso de digerir mi inbox por la noche lo hice con mi ordenador portátil y le dije 2 cosas.  
Que van en línea con todo esto. O sea, le dije más cosas, pero hay 2 cosas que van. Le dije a antigravity, compárame rápido las 2 notas a ver si hay alguna diferencia entre una y otra. ¿Por qué? Porque es un LLM el que está procesando el trabajo. Le da una nota literal para que la meta y yo no sé si aunque le des una nota literal la puede cambiar porque es un LLM.  
Por eso, o sea, yo ahí tengo, o sea, por un lado, respondiendo al Chema, ¿por qué lo he metido en los 2? Fue un error.  
Un error lo tendría que haber metido solo en uno, pero también estoy explorando qué pasa. O sea, yo generalmente lo que suelo hacer con los agentes es no les digo que una nota de GPT me la metan ellos en el inbox, sino generalmente al agente le pido la nota directamente. O sea, no es la primera vez que he usado.  
Y ahora que lo pienso, y ahora que lo pienso, podría haberle copiado y pegado, es más, ahora que lo pienso.  
Ahora que lo pienso, Chema, gracias, bro, gracias, bro. Diana, mira a ver si Chema contesta.  
Porque esto va dedicado, Chema, contesto, gracias. Jo, gracias, Chema. ¿Nos podías saludar a Jesús? Mira, a Jesús es más fácil saludarle. Hago, no sé, alguien esto no digo, Jesús, Jesús. O sea, bueno, a ver, Chema va dedicado.  
Que no sé lo que va a pasar, copio aquí, copio el markdown.  
Me vengo a Telegram.  
Y es que no había pensado en que en mi en el bot que yo he hecho.  
Si le doy al enter.  
Sí.  
Me queda.  
No es que lo has lo ha subido en 2 mensajes.  
Y me ha pedido 2 si y no sé si el primer si lo vamos ahora muy rápido a ver si hay solo una nota.  
Lo que vamos a ver es si hay una nota y luego en la nota que encontremos.  
Voy a buscar arquitectura empresarial.  
Gracias, Chema.  
Porque me has permitido, o sea, yo he usado en mi cabeza, como suelo usar más los agentes. He usado al agente cuando se hubiera metido la nota por este sistema. Vamos a ver qué pasa.  
Me meto.  
Mira, se ha desconectado, me meto en el ordenador.  
Lo pongo en pantalla, he apretado F 11 para ponerlo en pantalla completa. Estoy entrando en el ordenador.  
Está debajo de la clase de casa.  
Y a ver, captura.  
Captura, esta captura es el paseo.  
¿Por qué no lo está viendo con el Jam? Porque tengo modo fuente ya lo ve con el Jam.  
Captura de Telegram.  
Hemos dicho que había que buscar, lo tengo copiado.  
¿Dónde está buscar?  
Buscar.  
¿Vale, veis que solo ha copiado media nota?  
Nunca existía un punto desde el cual comprender el edificio.  
Y luego, aprovechando esto.  
Nunca existía un punto desde el cual comprender el edificio, el edificio y mi vida.  
A ver, vuelvo 1 segundo, tengo una necesidad.  
Y es en las otras 2 notas que he subido con Telegram, no sé si la gente las ha copiado enteras o no.  
Que yo creo que eso sí lo debe tener resuelto Hermes y Antigravity porque comparé el este y las 2 notas estaban igual, pero simplemente voy por un lado a ver con esto y luego voy a contestar a tu pregunta, lo juro, Manuel.  
Con esto.  
Acabo un proceso en el inbox cognitivo, perdón, un proceso, no acabo una un.  
Grupo de procesos que son procesos de entrada.  
Por diferentes canales.  
O sea, yo uso y luego cuidado con los procesos de porque hay proceso también a veces en los procesos de entrada. O sea, yo estoy procesando fuera, o sea, al final un LLM la transcripción no la usa LLM. Ayer vimos los RAS que le tienes que meter el tema vectorizado al RAS, o sea, un LLM procesa ceros y unos.  
Quitando a ver, una cosa es el ensamblador y por encima del ensamblador, esto es, o sea, la transcripción en bruto es como si fuera C. Es un programa que al ser humano, o sea, tú puedes leer la transcripción, pero al ser humano la transcripción le cuesta. La transcripción es lo que hablamos ayer del data lake.  
Aquí acabo en el inbox meto data lakes.  
Data Alex y luego necesito casitas del lago.  
That lake houses, lake houses.  
Y luego está el warehouse, que es toda lo que es el baúl entero.  
No, a ver, Manuel.  
Manuel, Manuel, necesito una nomenclatura.  
No necesito ponerle nombre a las cosas.  
Pues si quieres cogemos estas, cogemos estas cuatro transcripciones y todo lo que quieras de mí.  
Y public no, sí, Manuel, te lo estoy diciendo completamente en serio, coge todo lo que quieras de mí.  
Y alguna tendría que pedir permiso, Diana, o sea, y ahí habría habría precio, pero si soy capaz de aparecer mañana en la sexta.  
Habría, o sea, en algún habría precio. O sea, yo, o sea, lo del el freemium, el producto freemium es hasta que empiezas a pedir cosas raras. Yo soy freemium, hasta que no, pero lo que te estoy diciendo es completamente en serio. Yo necesito un ingeniero informático en mi vida, tengo todas las transcripciones.  
Y te puedo dar toda la información que quieras. Las transcripciones yo creo que es información suficiente como para sustentar cualquier artículo JCR del número que queráis.  
Y publicamos los 3, tú si te suena eso de JCR.  
Vale, pues no es necesario, pero Francia, JCR es una cosa que nos hacen a los académicos.  
Para, o sea, yo necesito publicar JCRs. ¿Por qué? Porque no hay huevos. A ver, está quedando grabado, le estoy diciendo a Pedro.  
Lo más importante solo.  
Can you mess?  
¿Tienes un ordenador?  
Ahí te voy a dar una copia solo de lectura de todo el baúl.  
Ahora lo hacemos con sin fin.  
O sea.  
Diana, le he dicho a Pedro y se lo digo que no tiene, o sea, que no tiene huevos y acabamos de apostar una comida el día que tengamos publicado el JCR, si ha tenido huevos de acompañarnos, vengo a Ourense y comemos con Juan y con Fran. y.  
Y el que y con Chema, no lo digo completamente en serio.  
Y con Manuel y con Manuel, yo soy un.  
Se vivió en en revivir pública.  
Qué fácil, qué fácil es.  
Qué fácil es hablar, sí, a ver qué, Manuel, qué fácil es hablar.  
Okay, el puesto que desee es el tipo.  
Qué fácil es hablar mucho, bla, bla, bla, un preprint, soy ingeniero informático, soy ingeniero informático y luego.  
Ay, perdón, Alejandro, Alejandro, te vienes a comer también invisible. ¿En qué sentido? Hay un libro que es, o sea.  
Bien.  
No taxonomía, conchuro de mellas, le ponemos cosas gallegas.  
A ver.  
No, pero tengo.  
Alejandro está.  
Que no he entendido yo, Alejandro, explícate mejor.  
Está escribiendo, perfecto, gracias.  
A ver, sigo con el tema.  
Sigo con el tema, Pedro.  
Pero no entiendo, creo que no salgo.  
Es el de mí.  
Estoy, pero no entiendo, creo que no sabe.  
Yo grabé sin permiso en el micrófono.  
que te está dando, le estáis dando permisos en.  
No, yo tengo ahora un problema.  
He dado aquí al F 11 y pensaba que se me había olvidado que estaba en el otro ordenador.  
Y ahora ya no sé si estoy, ahora ya no me he emocionado, vuelvo a donde estaba.  
Esto es una de las cosas fundamentales de los hábitos vitales, de los hábitos vitales.  
De los ámbitos vitales que tenemos que cuidar, uno fundamental es el de no perder el hilo.  
Nos pasará a todos. Yo hago todo lo posible. Ayer perdí el hilo en clases.  
Hey.  
Espera, voy F 11, Chema, necesito verte, leerte.  
No os preocupéis, sigue tranquilo, Chema, tengo ganas de no voy a apretar aquí, no. O sea, digo, pero porque ya te he visto en LinkedIn. Ay.  
Lo ha eliminado Armando.  
Bueno, pero da igual, vuelvo, no supongo que sería para otro grupo. O sea, no te preocupes, Armando, si es también por se me escapa, o sea, dando clase, vuelvo a donde estaba y además esto que acabo de hacer os lo digo completamente en serio.  
Es una pausa también.  
Porque estoy dando mucha información en poco tiempo, mucha, mucha.  
Resumiendo y nos situó, situó donde estoy.  
¿Cuántos queda?  
4 minutos, voy rapidísimo. Me has preguntado lo de la grabación y yo os estoy enseñando un proceso entero que es un proceso que empieza fuera del baúl.  
O sea, empieza en un dispositivo móvil, le metes y te deja un archivo en el inbox cognitivo. Todos los de fuera solo pueden tocar en el inbox en el inbox cognitivo. La pregunta que me habías hecho.  
¿La pregunta que me hayas hecho es en relación con sin zinc en relación dónde está aquí?  
¿Esto en relación con sin Zing, me habías preguntado sobre la carpeta de grabaciones, que en cuántos dispositivos tengo las grabaciones?  
Solo en 2: origen y destino. Me refiero las grabaciones, solo lo tengo en el móvil y en este, o sea, es un proceso de un punto a otro. Hay un dispositivo que mete la grabación y hay otro que lo procesa llegado el momento.  
Muy fácil porque en el ordenador, el programa que está en el ordenador, ¿qué hace?  
Cuando recibe un archivo en ese ordenador.  
Primero crea la transcripción en el inbox cognitivo con la API de Whisper. La API de Whisper solo coge 20 minutos. Ahora os lo enseño muy rápido, me quedan 2 minutos y esa API la coge. A lo que voy es no me costaría nada si quiero meter todos los móviles de una empresa.  
Aquí ir metiendo dispositivos, pero cuantos más dispositivos metáis, más inseguro es el proceso, más riesgo hay. Pero yo ahora, pensando en el proceso, cualquier grabación que entre de esa carpeta se procesa y lo que os quiero enseñar y ya os libero.  
Lo que os quiero enseñar y ya os libero, este es el antigravity.  
Que tengo en el ordenador local, es el antigravity que tengo en el ordenador local y tengo Opencloud. Voy a ir enseñando luego la estructura de cada uno de los agentes. Voy a ir hablando de sinc, o sea, voy a ir hablando un poco de todo, pero desde aquí controlo a un bot, desde aquí controlo a Hermes.  
Aquí tengo un proyecto que son todos los agentes juntos, cada agente, o sea, cada agente, perdón, cada proyecto tiene una carpeta, una serie de carpetas. Luego, a su vez, vamos a ver cómo cada agente tiene una carpeta. Al final, al crear los proyectos, lo que estoy diciendo es saber en qué carpetas voy trabajando. Me interesa tener todos los agentes juntos.  
Por si hago algo.  
Y afecte a todos.  
Y luego me interesa el orden. A ver, ¿dónde está lo de las grabaciones? Las grabaciones yo creo que están aquí: voto antigravity, automatic, recording.  
Esto.  
Os leo desde el principio y con esto vais a entender.  
El proceso, esto es un poco como lo de la catedral.  
Te cuento, hay una carpeta cosas de cosas de papá grabaciones en la que van a ir apareciendo grabaciones. Me encantaría que siempre que apareciera una nueva grabación en esta carpeta el sistema hiciera una transcripción, guardarse el archivo con la transcripción en formato MD en el inbox cognitivo está en la misma ruta y borrarse la grabación. El archivo con el MD que estuviera en la transcripción me gustaría que tuviera.  
Es grabación de transcripción siendo el número de orden, o sea, esto es el prompt en el cual le digo lo que quiero.  
Me lo hace, esto no lo veáis. Eran las APIs de Grok, pero que son gratis, o sea.  
Me gustaría que consideraras las mejoras que habías puesto antes, o sea, me va diciendo cuidado que sí, que no.  
¿Qué tengo que hacer para que funcione? Me gustaría que como el resto del sistema funcionara de forma automática al arrancar el ordenador porque me he dejado un tal listo. Ya he iniciado el en el bot. En este momento me lo ha guardado en el inicio del sistema. Esto son cosas que yo antes hacía sin antigravity. Ahora ya cada vez más dependo de antigravity, pero ni tan mal.  
Hay varias grabaciones de prueba y el sistema no hace nada.  
Pero depende de que antigravity esté ejecutando, no besugo, me dice, sigue sin funcionar de forma automática. Ya encontré el motivo y lo he solucionado. Es muy difícil, por no decir imposible, que la primera vez que intentéis hacer algo salga a la primera.  
En la vida las cosas no salen a la primera.  
No salen a la primera.  
He subido un audio que es muy grande y la API ha contestado con el código 413, demasiado grande cuando sucede esto tal y me dice para abordar estas necesitamos encontrar algunas tal troceado de audio me propone varias soluciones, perfecto, dale, ejecuta y luego aquí llega un momento, creo recordar, no se activa de forma adicional, yo le propongo otra, de momento no apliques lo de los interlocutores y darle una vuelta.  
A ver, o sea, tú tienes que ir hablando pensando en el proceso.  
Y el LLM es de ideas fijas, va por un camino y no se separa de ese camino. La innovación surge de la, o sea, si tú te dejas abandonar por el LM, el LM acaba en un callejón sin salida y tú estás con él en un callejón sin salida. Muchas veces eres tú el que tienes que conociendo el proceso ir para adelante y para atrás. Os podéis ir si queréis.  
No me refiero, que es que esto es más o menos lo que querías.  
Oh.  
Sí, el loop, o sea, que luego a Antigravity le podéis quitar los permisos.  
Le podéis quitar los permisos para que lo haga todo en automático.  
Pero a mí me cuesta, o sea, dependiendo el proceso, lo de quitarle los permisos y que vaya en automático, hay que saber mucho en qué tipo de procesos lo haces y en cuáles no. Una cosa que decía Juan ayer, que tiene todo el sentido, es yo es que al final todos mis procesos son de tanto valor añadido que no puedo automatizarlos al 100 * 100%.  
¿Eso qué quiere decir? No lo digo por ti Juan, sino lo digo en general. Eso quiere decir que la persona que está usando la IA gana pasta.  
Porque si no ganara tanta pasta, entonces se podría automatizar. O sea, que al final el valor aportado por el humano es suficientemente relevante como para acompañar, como para que la IA tenga que ser acompañada en el proceso, porque necesitas.  
Me quedan 3 horas, necesito que abras temas.  
luego la empresa de dueño  
Cuesta escalar muy difícil los escalar.  
Te explicas perfectamente y ahí, a ver, que cueste escalar no significa que cueste, o sea, que sea escalable, pero cuando estamos hablando de automatizaciones a este nivel o acabas haciendo hamburguesas.  
Oh.  
O ***** lo que estás aportando, o sea.  
Yo sin mía, sin mía, te aseguro que esta clase no hubiera sido igual, sin mía.  
Pero quiero pensar, lo que pasa es que durante el acompañamiento también que tú no sabes.  
Sí.  
Lo sabes más o menos, empiezas a construirlo, empiezas a tener una conversación y.  
Tienes activado también el modo creatividad, con lo cual, o sea, todo lo que he explicado, cualquiera de la cualquier de la.  
Claro.  
La todo lo que estoy explicando. Estoy volviendo un poco a las ciudades medievales. A las ciudades medievales había artesanos. Quiero pensar que aunque todo lo que estoy explicando.  
Con tutoriales en YouTube se puede aprender.  
No creo que haya nadie en el mundo que haya comparado la catedral de Ourense con el con procesos ágiles de programación. Eso creo que sí que es genuino. Quiero pensar que aporto algo y Juan, Juan, que se dedica a cultura con música. Además, no es, yo no le he escuchado tocar la guitarra como para lo de las canas, también dicen cosas en tu caso.  
Eres un bueno, en tu caso es el ya se está yendo Manuel, pero es el típico ejemplo de alguien que habla, pero luego no remata.  
Esperemos una queimada está en juegos. No, un placer, gracias. Qué maravilla tener a personas. Sí, no digo personas y Chema, ¿dónde estás? Chema y Alejandro.  
A ver, espera que tengo aquí abierto el F 11, me lo voy a llevar, ya sé cómo.  
Que luego me echan, o sea, Diana, GPT es como tú. Me duele todavía lo de las, me dice, habla, tienes en tu vida tantas como las.  
Sí, que GPT me dijo, mira, le doy al F 11, vale, y GPT me dice, te pasa en la vida como las pestañas de me lo dijo ayer en directo, además delante de todo el mundo.  
Hablas, mira, aquí tengo abierto corralas, la catedral desde arriba, la catedral de Santiago, el estilo arquitectónico.  
Voy cerrando cosas y luego tengo aquí también el WhatsApp. ¿Qué bien, alguien ha hablado?  
Qué bien, graciñas.  
Poca cobertura en la oficina. Era un mensaje que puse hace 10 minutos, no te Armando, no te preocupes, estamos, estamos genial, Chema. A lo que voy, voy a ir por orden, que estaban aquí Manuel y Pedro y me ha venido muy bien para dar una vuelta alrededor de la catedral, pero vamos, vamos pasito a pasito.  
A las 11:30 hacemos un descanso.  
No es que no media hora no.  
No a las 11:30 hacemos el descanso, son y 37 a las 10:37 nos quedan 50 minutos.  
Google.  
¿Estás vacilando? Un poco menos de ahora. Vale, perdón. O sea, digo, a ver, perdón, no te preocupes.  
A ver.  
A ver, a ver, a ver.  
Os cuento, quiero explicaros todo esto por parte, si bien explicado, me falta.  
Me voy a meter en.  
Encha GPT.  
No me gustó ayer.  
Me gustó ayer el nano banana nuevo.  
Drive.  
Página principal, proyectos, ordenadores, vale en ordenadores.  
Tengo desde mi ordenador lo que os dije ayer, tengo compartido.  
El tengo compartido.  
La carpeta del baúl de obsidian y a Geminai le voy a decir.  
Le he pedido un esquema de cómo funciona el sistema y sobre el esquema que me dé voy a ir metiendo alguna capilla en relación con lo que os quiero explicar.  
Procesos, a ver.  
Os voy leyendo lo que me va diciendo, ¿vale?  
Por un lado, esto es el es un poquito el setup con Claude y Antigravity. Ya habéis visto el papel que hago. El papel de Claude y Antigravity es desde un terminal.  
La foto general, la visión general y análisis profundo. Esto que estoy haciendo ahora es análisis profundo. Lo estoy , lo estoy haciendo desde Gemini a través del Google Drive, pero que esto lo podría hacer también con Cloude o Antigravity. Lo estoy haciendo desde Gemini, pero.  
No puedo escribir desde Gemini, o sea, lo estoy haciendo porque al final quiero explicaros a vosotros. En cambio, cuando yo uso cloud de Wantigravity no solo analizo, sino que también le digo escribe y estoy hablando sobre el bault.  
Aquí estructura, entradas, proceso, el vale perfecto, salida y output.  
Vale, y ahora dame la infografía. No sé si le puedo pedir una imagen. Supongo que sí, es Yeminai.  
Es Geminii, esto es una maravilla. Es Geminii, dame la infografía, está pensando.  
Y además es el Gemini. Acordaros el nano banana que descubrimos ayer, la nueva versión de nano banana, que en teoría tiene que ser bastante rápido, bastante rápida.  
Debería de ser rápida.  
Y luego voy a ir buscando.  
Flujo.  
¿Open, qué memoria tienes?  
16 gigas de RAM.  
Con memoria interna.  
¿Te apoyas en el disco duro o está todo dentro?  
Me apoyo.  
Esto es mío, perdóname, es que he visto esta imagen. Bueno, claro que es mío porque lo he hecho yo.  
Claro, a ver, os pido disculpas. Sabéis que he visto una imagen que era mía y me he quedado noqueado. Dime, la 16 gigas tengo.  
Un montón de, pero la ahora te lo enseño. En cuanto me meta, a ver, esta es.  
A ver.  
¿Tiene que haber alguna de OpenCloud sencillita?  
¿Y tienes una buena que es otra?  
Perfecto, este me gusta.  
Input output.  
no me gusta.  
No me gusta porque no es el mío.  
Olvidaos, os pido disculpas.  
Este mira, este sí que me gusta más.  
Os cuento, entrada, procesas y salida.  
Cómo mola.  
Luego hay otra, bueno, entrada.  
Procesas y salida, este esquema.  
Este esquema, entrada, proceso y salida, tú puedes enganchar que esta salida.  
Sea la entrada de otro proceso.  
O sea, lo que estaba buscando aquí hay 2 niveles, por un lado hay un primer nivel.  
Hay un nivel muy sencillo, ayer Chema.  
Chema, ayer estabas preguntando y me vengo aquí, ayer estabas preguntando cómo funciona este sistema o cómo se puede hacer que funcione el sistema en un nivel muy básico.  
En un nivel muy básico tenemos Obsidian Vault. ¿Qué es Obsidian Vault? Es una carpeta donde está todo. Para mí esto es el corazón y dentro de esta carpeta tengo en el inbox las cosas que van entrando y luego las cosas que van saliendo. El Vault es la carpeta sobre la que trabaja.  
Que.  
Y luego a esa carpeta sobre la que trabaja todo.  
Desde fuera.  
Hay 3 agentes.  
Hermes Open Cloud.  
¿Y el bot que me he puesto yo? Cada uno de estos 3 agentes, ¿qué son? ¿Qué es cada agente? Y esta es la clave que quiero que entendáis, cada agente es una carpeta compromiso.  
¿Me estoy explicando o no?  
Es un agente. Ahora os voy a enseñar cada uno de los agentes, pero cada agente.  
Es una carpeta donde dentro tiene instrucciones.  
Voy a dejar el mío, o sea, el vault para el final y voy a ir a los agentes respondiendo a la pregunta que me habías hecho.  
Este disco duro.  
Tiene 475 gigas.  
De memoria no es muy grande.  
Y de los 475 gigas tengo ocupados, pues poquitos y luego el vault mío.  
Ocupa, debería de ocupar poco.  
Solo 129 megas.  
Pero importante, son 129 megas de MDS, que 129 megas de MDS es mucho MD y luego el inbox cognitivo no ocupa nada de nada, solo aire 56 KS.  
Porque son las son carpetas pequeñitas.  
Y aquí tengo el bot de Antigravity que si siguieran por aquí.  
Si siguieran por aquí Manuel y Pedro.  
Esto es lo que les , lo que les enseñaría. Esto no lo he abierto en la vida. Lo voy a abrir porque sois ingenieros informáticos.  
Editar con.  
Loc denotas.  
Y esto es un programa en Python.  
Este programa en Python está 247 corriendo en este ordenador.  
Y este programa es el que ejecuta las cosas que le puedo pedir al bot de Python, que ahora os digo qué cosas se les puede pedir.  
24 horas, siempre estás.  
Yo soy de la luz.  
Eso es, salvo que se vaya la luz.  
Este está encendido 247. Este ordenador siempre ha encendido, no se calienta, o sea, no pasa. O sea, es un ordenador que puede estar encendido y es pequeñito. Es más, cuanto más pequeño sea el ordenador para estar encendido siempre ni tan mal. O sea, no lo sé, lo suyo sería a ver, es mío y es casero, pero lo suyo sería.  
Tener no solo uno, sino tener 2.  
En 2 edificios separados.  
O si se da la luz en uno, que desde el otro puedas actuar contra el otro y a su vez un par de copias en una nube.  
O en un disco duro, yo os voy a enseñar una cosa.  
Hago esta pantalla. Ay, me he equivocado de él. A ver, hago esta pantalla. Os voy a enseñar una cosa que es muy sencilla.  
Pero quiero que lo veáis.  
Esto.  
Esto es.  
Open Cloud, vale, estoy fuera del ordenador y estoy con Telegram.  
Esto es open cloud.  
Y estoy fuera del ordenador con Telegram, ¿vale?  
¿Qué estoy haciendo? Estoy con Telegram.  
Y en los bots, si dices help, creo.  
Aquí hay varias cosas. O sea, yo le he ido metiendo funcionalidades de cosas que me interesan. El sistema de vectores es mío y le voy a decir, es mío, o sea, vector son fichas MD que me interesa saber. Estos son vectores y si yo ahora comercio, ¿cómo está el comercio global si aprieto un cuatro?  
Me dice, está la ficha del comercio global, pues si Trump la ha liado hace poco y aquí puedes seleccionar.  
O cancel y digo cancel y salgo de aquí.  
A lo que voy, perfecto, a lo que voy, lo que voy a hacer desde este bot.  
Este es el mismo, o sea, si aquí pongo hola, ¿qué haces? Me va a decir que si quiero guardar una nota y le digo que sí y estoy metiendo más basura en el inbox cognitivo. GPT ayer decía que me estresa esa basura en el inbox cognitivo, pero.  
Pero no me estresa porque la tengo toda en el mismo sitio y una vez al día saco la basura por la noche, o sea, no me causa ningún estrés.  
A lo que voy, ¿qué voy a hacer desde aquí? Que esto es una de las cosas que me interesa. Ángel, sé que es porque lo he hecho varias veces.  
Esto voy a hacer restart.  
Que le puedes, o sea, lo que voy a hacer es.  
¿Restart y restart, qué va a hacer? Le va a mandar la orden a Open Cloud de reiníciate.  
¿Por ejemplo, en qué contexto lo podría usar?  
Pues sí, estoy aquí con WhatsApp.  
Y le digo.  
Hola.  
Esto soy yo conmigo mismo, pero aquí OpenCloud debería de responder.  
Pues me ha respondido.  
A veces no responde aquí.  
¿Si no responde aquí, qué tengo que hacer?  
Esperar 1 segundo que guardo esto. ¿Qué tengo que hacer? Tengo que reiniciar y si reinicio, insisto, esto es Telegram, que puedo estar desde mi móvil dando vueltas por Madrid o por Ourense.  
Le digo restar.  
Se ha cerrado en mi ordenador esto.  
Y lo está reiniciando.  
He dicho, reiníciate.  
¿Lo está reiniciando?  
Me encanta, siempre te pone una galletita de la fortuna cuando empieza OpenCloud. OpenCloud se reinició y dice porque la mejor, o sea, porque la respuesta correcta normalmente es un script.  
¿Lo ha reiniciado?  
Y acaba de reiniciar el agente.  
Os doy mi palabra de que yo antes de haber tenido esto de restar cada vez que tenía que reiniciar el agente, tenía que buscar el código, tenías que poner el nombre, o sea, era un rollete.  
En cambio ahora por Telegram pongo restart y mi vida es mucho más cómoda.  
Mucho más cómoda.  
Bien, vuelvo al ordenador este.  
Esperar que tengo que ordenar las ventanas, que si no, luego GPT me echa broncas con razón.  
Y voy a cerrar la catedral, la cerramos, el estilo de la catedral lo cerramos. Este gráfico me ha roto el corazón, lo cerramos, lo cerramos, lo cerramos.  
Aquí Google Keep lo cerramos, transcripciones lo cerramos, notebook no, Stitch.  
Se han ido, mirar el acrílico.  
Sí, cuando venga Pedro le enseño el acrílico.  
Servidor de casa, vuelvo aquí, ¿vale?  
Os cuento.  
Hoy anti o sea.  
Hey.  
Sinceramente, no tengo claro dónde tengo todas las cosas, pero es relativamente fácil de encontrar. Estoy buscando 3 carpetas, estoy buscando una carpeta de OpenCloud, una carpeta de Hermes y una carpeta de que esta sí la he encontrado antes del bot de Antigravity.  
Esta carpeta del bot de antigravity.  
Todos estos programas que no tengo ni idea, mira, aquí hay una que pone Redmi.  
Voy a editar, esta la creo GPT.  
Antigravity, Telegram, link y enlace cognitivo. Este bot de Telegram es el puente de comunicación en tiempo real entre tu dispositivo móvil, Telegram y tu entorno de conocimiento local. Obsidian vault e inbox cognitivo. Funciona de forma 100 * 100% asíncrona, autónoma y persistente como un demonio de fondo en Windows. Me encanta.  
Estructura de la documentación.  
¿Este qué hace?  
Pero en veis, a ver, perdón, perdón, perdón, o sea, comparto 1 segundo.  
¿Ves cómo no sabes insultar?  
Y ha puesto un corazón. Diana, además, o sea, Diana, bueno, ya está, ya está, lo dejamos, sí, y que me llamen, o sea, vamos por partes. Este bot de Telegram funciona de forma 100 100% asíncrona.  
A ver, con respecto a la gente que tiene discapacidad.  
O sea, el claro ejemplo es Miguel Ángel. Entendéis que alguien normal no estaría todo el día pensando en a ver, lo dejo. Esto es ruido y son distracciones, son como los vídeos de gatitos.  
Yo lo he, lo estoy recuperando. Hay un día, a ver, ya que estamos, a ver, yo no quería esto que va a pasar ahora, yo no quería.  
Es viejuno.  
En el o sea, antes había.  
Los que yo recuerdo a mi padre.  
Pues nada.  
Sí, no, y además una formal y la gente lo ve como.  
Está está más distinto, aprende.  
Coge, mira.  
Échale un ojo y así aprendes a usar correctamente el terminado. Este libro es 100 * 100% cierto.  
Es 100, o sea, me refiero, es existe y había un día que se celebraba el día. A ver, que además aquí hay un tema fundamental, hablamos de Alzheimer, estamos hablando de tecnología en un mundo industrial, alguien que tuviera una persona, o sea, el término correcto, evidentemente, o sea, subnormal en el caso de Miguel Ángel la aplica como anillo al dedo.  
Pero para hablar de alguien con discapacidad es una persona que tiene discapacidad. Yo tengo bastantes discapacidades, ninguna declarada de forma oficial, pero todos tenemos discapacidades en diferentes ámbitos.  
Todos tenemos diferentes discapacidades en diferentes ámbitos. En el mundo industrial era más barato tirar a la persona con discapacidad a la basura que parar el proceso productivo, y todo lo que era relación con discapacidad era a través de.  
De economía social, pero asistencial. Es más, había una ley a la gente con discapacidad hasta le hasta le retiraban el se nombraba un, o sea, le retiraban la *****, cómo se dice desde un punto de vista jurídico, les retiraban a las personas con discapacidad la.  
No, la custodia no, la tutela personal, o sea, les nombraban un tutela, o sea, les declaraban a las personas con discapacidad les declaraban incapaces.  
La capacidad de tomar decisiones jurídicas se las retiraban.  
Cuando ahora cada vez más lo que se está haciendo, por ejemplo, personas adultas con síndrome de Down, cada vez hay más sentencias de jueces en el cual les explican con todo el cariño del mundo la sentencia. Tienes que, o sea, a lo que voy es que en ese sentido la sociedad está evolucionando perfectamente y tenemos que.  
Saber que cuando estamos hablando de subnormal estamos hablando de alguien con el perfil de Miguel Ángel, que os lo traje en clase ayer. O sea, es algo que podemos discutir, pero yo creo que es bastante.  
Visual.  
Dicho lo cual, os pido disculpas y voy.  
Fundamental en informática, siempre, siempre, siempre documentar todos los procesos. Me gusta mucho esto que está pasando porque yo no sé cómo funciona mi bot, el de Telegram, pero en cuanto he entrado en la carpeta hay un archivo que se llama Readme Redmi, que esto es como lo de Alicia en el País de la de las Maravillas. Léeme.  
Tú lo lees y dice este voz de Telegram, os os doy mi palabra de que esto es mío.  
O sea, y mío no quiere decir que lo posea yo. Mío quiere decir que me sirve a mí, que lo uso yo, que lo he creado yo con ayuda de bueno, estructura de la documentación. Hemos organizado toda la información técnica y operativa del bot. A ver, esto no tengo, lo siento.  
bueno, sí, pero.  
Me gustaría compartirlo con vosotros.  
Es que aquí no tengo el Redmi, este lo tengo en un ordenador donde no tengo.  
WhatsApp conectado.  
Pues sí.  
Es lo que voy a hacer.  
Hazme un favor, Diana.  
Conéctate tú con tu WhatsApp.  
Ay.  
Sí.  
Go.  
¿Piensa si de algún querido tienes algún WhatsApp a la vista? ¿Lo va a ver todo el mundo tu WhatsApp? O sea.  
No, ahí no me lo coge, pues aquí.  
No, Diana.  
¿Por qué quieres salir? Porque en el mío tengo la transcripción del Teams en mi WhatsApp, tú estás en el grupo también.  
Tú estás.  
Mira qué bien te equivocaste de grupo no que no se equivoca de grupo que este no tiene.  
Okay.  
A ver qué más da.  
Descar que mi siente ni parece. Eso me lo decía mi madre mucho. A ver, voy Luis Garvía, este soy yo.  
A ver, lo hemos hecho bien o no, este equipo sí, C, sí.  
Decidme todo lo que queráis que comparta.  
Cosas de papá.  
Bot de antigravity y lo que os estaba diciendo que voy a compartir es de momento el redmi.  
Este Redmi.  
Es este de aquí.  
Estructura de la documentación, controles de arranque y para el local.  
Si queréis vosotros hacer algo parecido, tan sencillo como copiar este Redmi en antigravity.  
Y decirle, me quiero inspirar en esto para hacer lo que sea que queráis hacer.  
Os cuento.  
Este es.  
Os voy a enseñar.  
¿Este cómo se creó?  
Espero tenerlo aquí.  
Hoy estaba, perdonad.  
Mira, está aquí, qué bien.  
Creo que es este.  
Better.  
Te cuento varias cosas, he creado el bot y el token lo tienes en la carpeta, ya había creado en algún sitio.  
Optimización.  
Lo siento, Cristina, voy, no te preocupes, Cristina.  
Voy ahora.  
1 segundo, que es que lo de subir un scroll de estos.  
Qué bien, no he encontrado Cristina, voy a por ti.  
Y discúlpame por.  
Y disculpame, abrir imagen.  
A ver.  
Cuando se haya Cristina, cuando estés conectada, pon un mensaje.  
¿Pero ya se ha conectado, no? Bueno, si lo puedo ver yo también. A ver, vamos por partes al que no esté en el grupo de WhatsApp, que no se preocupe y si alguien se acaba de conectar hace poco.  
Que tampoco se preocupe, os cuento, vamos por Ay, Cristina, no la veo conectada.  
No veo que se haya conectado.  
No veo que se haya conectado Cristina.  
A ver, os cuento.  
Dice que no tiene el móvil operativo. No te preocupes, Cristina, si estás viendo la pantalla, los contenidos.  
Los contenidos.  
bueno, es Juan, o sea, perdón, Chema.  
¿Te importaría?  
*****, estoy, o sea, si me da por el camino largo.  
A ver.  
A ver, auxiliar.  
Auxiliares, un grupo de WhatsApp que tengo conmigo mismo y este no está, no tiene que ver con el clon ni con nada, pero me viene estupendamente. Estoy compartiendo en la Universidad de Vigo, ¿te importaría, Chema, este enlace copiarlo en el grupo de este enlace, copiarlo en el Teams?  
Ahut.  
Qué gusto trabajar con profesionales.  
En la cárcel, si dices esto, soy voluntario de prisiones desde hace muchos años. Si dices esto de qué gusto trabajar con profesionales, alguno se pone nervioso porque, pero bueno, voy, vuelvo antes de seguir.  
Cristina no se llamaba Cristina, si necesitas que luego en la segunda parte de la clase os explico esto. ¿Cómo está esto? Yo os lo explico con GitHub Garvía.es dentro de asignaturas. Ayer no subí la transcripción de hoy, me ha faltado apretar un botón esta noche.  
O sea, aquí no está la transcripción de hoy, pero en este enlace, en esta página web, se entra ponéis garvía.es y dentro de asignaturas veis tecnología y liderazgo, Universidad de Vigo.  
Aquí tienes el enlace al Google Notebook el M que estoy compartiendo con vosotros. Este sí que está actualizado hasta la clase de ayer.  
Y luego las presentaciones y las y los las diferentes transcripciones que estamos viendo.  
Fenomenal, hoy esto cerrado, esto vuelve a su sitio.  
Y aquí está.  
Os cuento.  
Empieza en mi vault.  
Esto es un prompt que tengo en mi bowl y esto es una cosa que le digo con bastante frecuencia.  
Carga todos los archivos de la raíz del bault y del sistema operativo y ahora te cuento cosas.  
¿Qué es esto el equivalente a apretar un botón y decirle al ordenador que arranque?  
Si tú, un ordenador, no aprietas el botón, no se enciende.  
¿Eso lo entendéis todos, no, Juan? ¿Qué pasa cuando aprietas el botón? El ordenador carga una serie de archivos.  
En el arranque.  
Si queréis que se cargue siempre un programa, hay que poner en inicio ese programa. El ordenador carga una serie de archivos y ya una vez tiene esos archivos cargados.  
Tira, esto los agentes lo hacen de forma automática sin que se lo digas.  
Y esto, o sea, te cargan un archivo. ¿Qué carga cuando le digo esto, qué carga el ordenador?  
A ver, este no es este es el mío que carga el ordenador.  
Os lo os lo he enseñado ya un par de días en mi bol. Este es mi bol, más de 6000 archivos que carga carga.  
Estos 3 archivos, estos 3 archivos que realmente podrían ser perfectamente uno o 2. Claude tiene por proyecto siempre un archivo que se llama Claude, que es el que tú en un proyecto lo lee al principio. Voy a empezar por Claude.  
Carga esto y dice: identidad y contexto Luis Garvía, que soy yo, el profesor. Lógica de interacción, brutal, honestidad, protocolo de tareas. Ahora entro a que veáis esto con más detalle.  
Proyectos activos, curso de Ourense, impartición presencial de las 20:00 y transcripción diaria, zonas prohibidas, limitaciones, no mezclar capas, no introducir, checklist de arranque. He leído este documento claude.md, he revisado el perfil.md, he verificado el puntero de vital.  
De vitalidad en estado personal, esto es una cosa que me he metido yo hace poquito tiempo.  
Que me gusta y que lo voy a ver. He estado en estado personal actual. Tengo aquí un sistema de vectores académico, proyectos, perdón, en académico.  
M o C's map of context, map of content. Los boults necesitan mapas a veces y tengo aquí diferentes mapas en el sistema personal. Estoy jugando con esto.  
Y esto es que, como hemos dicho, que se llama el archivo estado personal actual.  
Estado personal actual, esto lo actualizo una vez a la semana.  
Y esto no lo he leído nunca.  
Pocos o ideas que magnetizan y curvan la RAM de fondo. No tengo ni idea de lo que es esto en órbita, gravedad estable, me mola, satélite, baja gravedad física de la atención, gravedad, ni idea.  
Siento no poderos decir que es esto, pero es que no lo sé.  
O sea, sí sé lo que es, o sea, pero no está, o sea, lo tengo ahí probando. Resumen.  
A ver, os cuento que es en mi cabeza esto que todavía no está operativo. Lo que quiero es que cada semana no solo ejecute toda la actividad que estoy haciendo, sino que en función de esa actividad me dé métricas psicológicas mías, me diga si estoy bien de energía, si se me pida mucho la pinza.  
Sí, o sea.  
Métricas a raíz de lo que lea, si estoy a gusto, si no, si estoy muy cansado, si no.  
De momento es proyecto y de momento no he llegado a conectarlo del todo.  
Y puede que no llegue a conectarlo nunca. O sea, no tengo ninguna. Sí que me interesa mucho.  
Esto es una herramienta para aprender brutal e igual que tengo yo ahora 2 cosas en la cabeza en relación con el bault, que son 2 cosas que me parecen importantes. Por un lado es tener flexibilidad cuando le quiera meter cosas, que es lo de las grabaciones que os he enseñado con detalle antes. O sea, si voy andando por la calle se me ocurre algo, tener formas o si le hago una foto, pues lo de ayer de la catedral de Ourense es maravilloso.  
Veo la catedral de Orense, voy hablando con GPT.  
Voy hablando con GPT y luego hago una ficha en formato MD y la meto.  
Pues en ese mismo sentido.  
El que esto me ayude emocionalmente, pues ni tan mal, pero bueno, me estoy enrollando mucho. Perdón, a lo que iba, esto es el arranque, el perfil, o sea, esto le dice cómo funciona el bound, que se puede hacer de forma más complicada o menos complicada.  
Este es mi perfil.  
Esto Claude es para los proyectos de Claude.  
Esto es para cualquier agente.  
¿Qué pasa esta semana y luego system context? Esto es para máquinas y me gusta este. Me gusta mucho porque se entiende en un vistazo definir la estructura cognitiva del Vault y servir como contexto base para Claudia Open Cloud y otros agentes.  
Arquitectura cognitiva, capas y niveles.  
Esto es cómo funciona.  
A lo que voy y me vengo para acá, estoy con antigravity y os digo, hola bro, carga todos los archivos de la raíz del bault.  
Y sistema operativo. Hola Luis, he cargado y analizado todos los archivos. El dashboard agente me dice que ha cargado y ahora le digo escuchar y leer, porfa, porque este prompt es importante para que entendamos cómo funcionan las cosas.  
Le digo, te cuento, lo que estás viendo es la copia del bault, que es de solo lectura.  
La que tengo en el ordenador que está conectado 247.  
Dentro está, dentro está.  
La carpeta del inbox cognitivo, o sea, fuera del baut. Tengo la carpeta y fuera hay una carpeta que se llama inbox cognitivo, que es la que usamos para comunicarnos de vuelta con el baut. Le estoy dando contexto sobre un contexto que ya tiene, pero quiero que se asegure de que sobre lo que voy a programar.  
O sobre lo que va a programar, o sea, le estoy diciendo, este es el marco.  
Este es exactamente el marco.  
Considerando lo anterior, me gustaría crear un bot de Telegram para poder controlar este bault desde mi móvil a través de antigravity. Sería posible y que si le pido que haga algo, lo deja en el inbox cognitivo que está fuera del bault.  
Y él me dice.  
Es totalmente posible, yo intento crear un bot tipo estos.  
Y al final.  
Hay, o sea, a enchufarle una API en aquel momento no llegué, pero aquí me da un plan de implementación y le digo, te cuento varias cosas. He creado el bot, el bot y tienes el token. O sea, el bot se crea dentro de Telegram. O sea, cuando digo que he creado el bot.  
Es donde tengo Telegram.  
Cuando digo que creo el bot es.  
Dentro de Telegram.  
Esto es Telegram.  
A ver, tenemos aquí una cosa que es botfather.  
Ver si.  
Tenemos aquí una cosa que se llama Bob Father, que aparece El Padrino, Bob Father justo.  
A ver, botfather es un bot que es de Telegram, pero Telegram, Telegram es el bot oficial de Telegram.  
Donde tú, dándole instrucciones, creas un bot que me debería de abrir esto.  
Estos de Letaconts son la biblioteca secreta.  
De mola.  
El Godfather.  
No le da la nada de arrancar.  
Hey.  
Jesús.  
Sí, no, pero a ver, Botfader es una cuenta de Telegram, o sea, es que no me la está abriendo, pero esto ya no depende de mí, no me la está abriendo, no depende de mí.  
Y lo que quiero es compartir con vosotros, Bob Father, y lo que voy a hacer ahora voy rápido es que ya os lo compartí ayer. os voy a.  
Os quiero, es que aprovechando que tengo WhatsApp.  
Esto ya lo compartí ayer en el grupo, lo estoy volviendo a compartir, este es Open Cloud.  
Y este es.  
Ayer yo creo que os mandé uno de Hermes que no es el correcto.  
Voy a ver si.  
Os mando el GitHub de Hermes que con decirle antigravity.  
Que os lo o sea, le ponéis el enlace, acabo de compartir con vosotros.  
2 enlaces que poniendo Open Cloud en Google llegáis a este enlace y poniendo Hermes en Google llegáis a este copiáis y pegáis este enlace se lo se lo pegáis a antigravity y si le decís créame un bot.  
Perdón, créeme, un agente de Hermes, instálame el agente de Hermes en este ordenador te lo instala, pero cuidado que los agentes de Hermes estamos en el último día de un curso de 20 horas.  
Lo he empezado el primer día hablando de Open Cloud.  
Y Dermes, los lo estoy dejando justo al final. El primer día a primera hora hablé de Antigravity, Antigravity Mola, Open Cloud y Hermes. Cuidado porque es una inteligencia artificial que se instala en tu ordenador.  
¿La sientes como si fuera magia?  
Y se y te puede hacer unos estropicios tremendos.  
O sea, yo cuando uso Hermes les uso para tareas muy concretas. Le podría pedir, no se lo voy a pedir ni voy a experimentar con ello, pero le podría pedir bórrame archivos y te borra archivos.  
Me estoy explicando.  
Dicho lo cual, insisto, quedan 10 minutos para el descanso.  
Este es el ordenador que tengo en casa, me vuelvo a conectar y os voy a enseñar cómo funciona.  
Os voy a enseñar cómo funciona.  
¿Hermes y cómo funciona Open Cloud?  
Este es Open Cloud.  
Que sinceramente, no sé dónde está.  
Y como no sé dónde está, le tengo que buscar. Opencloud, esta es la carpeta.  
¿Dónde está?  
¿Cómo puedo ver dónde está esta carpeta? Open Cloud y Cloud.  
Bueno.  
Voy a buscarlo.  
Voy a buscarlo, pero para ir a buscarlo, primero tengo que ir aquí. Vale, os lo enseño. Open Cloud, ¿dónde está? Porque tiene su propia Pault. Me meto aquí en Cloud.  
Cierro la memoria.  
Cierro todo, este es el agente, es un baúl, abrir, hace abrir en una carpeta donde está, a ver, mostrar en carpeta, listo.  
Dentro de una carpeta usuarios que se llama Pablete, Pablo es uno de mis hijos dentro de usuarios Pablete.  
¿Veis que pone Cloud?  
Y este es el mes, pues dentro de esta, este es un bowl.  
Este es el agente.  
Este es el agente Clau.  
Y aquí hay porquería que me ha metido Miguel Ángel.  
Este es el agente y mirad, el agente ha creado 2 punto PY de la tertulia. Como yo preparo con la tertulia de vez en cuando, el propio agente ya ha visto que varias veces le he pedido la tertulia.  
¿Te acuerdas que me lo preguntaste, usas algún tipo de plantilla?  
Pues él te engañé.  
¿Por qué? Porque te dije que no usaba plantilla para preparar la tertulia y resulta que sí la uso sin saberlo, porque como se lo he pedido varias veces a la gente, la gente ha aprendido.  
A ver, si os fijáis, esto es una carpeta bastante desordenada.  
Este es el agente en una carpeta bastante desordenada. ¿Que ¿Qué hay dentro de la carpeta? Si esto lo instaláis por primera vez, esta carpeta estará bastante más ordenada. ¿Veis que hay archivos MD?  
Dentro de estos archivos interesan los 3 que están en perdón, los archivos que están en mayúscula, todo y en concreto me interesa este que se llama Soul.  
Me estoy metiendo.  
¿Dónde estoy en la misma carpeta con obsidian?  
Voy a soul.  
Esto es cada vez que el agente se reinicia.  
Le he dado antes a reinicio.  
El programa empieza desde cero. Ese programa está activo en el ordenador y esta es la nota de arranque. O sea, el ordenador abre agentes Soul, abre los archivos en mayúsculas, lee los archivos en mayúsculas.  
Y es que este sol me parece bastante cachondo.  
¿Who you are? ¿Quién eres? No eres un chatbot.  
¿Estás en proceso de ser una persona? Esto no lo he dicho yo, de ser alguien.  
¿Estás en proceso de ser alguien? Esto no lo digo yo. Esto es el señor que programó OpenCloud. Es el mensaje que dejó ahí y es parte del funcionamiento. o sea.  
¿En la gente son archivos MDS y os deberíais de estar preguntando, y con qué inteligencia artificial funciona?  
Con la que tú le des.  
La inteligencia artificial va aparte, tú le puedes meter una API.  
Tú te puedes meter Claude Sonet tremendo y con una API tremenda que funcione de forma salvaje y que sea carísimo.  
O le puedes meter, en mi caso, yo pago los 20 eur al mes de GPT.  
Yo lo tengo con GPT auth, es decir, no me cobra nada. Tampoco le pido muchas, muchas cosas. Le pido a lo largo del día 3 cuatro consultas y Hermes lo tengo con Clau, perdón, Grok con Q.  
Que creo con que son modelos de código abierto en un ordenador y los va cambiando.  
Interesante, si estamos hablando de APIs.  
¿Cómo se llama el de las APIs que cambian?  
Esperar 1 segundo, si hablamos de apis interesante.  
¿Cómo se llama el API que cambia APIs entre?  
Los principales modelos, si estamos hablando de APIs.  
Tenemos que Open Router, si estamos hablando de APIs, os recomiendo que Open Router es un servicio maravilloso. Open Router.  
¿Al final, qué es una API? Resumiendo mucho.  
Una api.  
Es al camarero al cual le pides que te traiga las bebidas. Si tú le pides un vaso de agua, el vaso de agua gratis.  
Y dependiendo la API hay APIs que te cobran.  
Open router.  
Una maravilla.  
Acabo de compartir en el grupo de WhatsApp Open Router.  
Y voy a compartir también.  
Proc con Q para las APIs, pero con Q.  
Lo comparto.  
Y.  
Pongo una maravilla más grande.  
Para.  
Los 2 servicios.  
Anteriores.  
Son claves.  
Son at this.  
Con servicios.  
Gratuitos en su mayor parte para uso de APIs.  
En Colia.  
A ver, Open Router, ¿qué hace? Open Router es una API intermedia que de forma dinámica va viendo Cloude, va viendo ChatGPT, va viendo modelos chinos y según tú entres, te va buscando en función de lo que busques. Cualquiera de los otros puedes pagar una suscripción también a Open Router.  
Open Router, a su vez dentro de esa suscripción, te suscribe por dentro a los otros modelos de APIs. Yo en APIs no intento no pagar nada de nada de nada y tengo aquí para este que os estoy enseñando. tengo.  
ChatGPT con clave que pago 20 eur al mes.  
Y a lo que voy, os estoy enseñando el soul, el alma.  
Y esto son instrucciones, esto lo podéis cambiar, luego identity.  
Mira Juan.  
La identidad.  
De OpenCloud.  
Nombre Watson.  
Un asistente de IA familiar digital con vena sarcástica cuando toque, directo y competente pero cercano, alterna formalidad y cachondeo según el momento.  
Raymas.  
Agentes.  
Aquí sí que hay instrucciones en relación. Aquí está para mí lo fundamental: escribe solo, escribe solo en el inbox cognitivo y siempre que escribas en el inbox cognitivo, guarda este código.  
Importante en cuanto a los códigos, quedan 2 minutos para el descanso, luego seguimos. Importante para los códigos, yo en mi bault por defecto todo lo que está dentro de mi bault.  
He sacado la residencia en Estonia, pero no la he usado todavía. Todo lo que está en mi vault tiene este código numérico.  
¿Por qué? Porque me permite encontrar todo lo que se ha publicado en un día y luego ejecuto un script en el cual me van metiendo unos resúmenes diarios. Y si os fijáis, en esta nota están todas las notas que he creado. Esto es un script que va en automático. ¿Qué Quiero que veáis que estas notas no tienen el guión bajo.  
¿Por qué? Porque estas notas son secundarias. Si paso una lectura, si le paso un automatismo para identificar las fechas, estas no salen, mientras que las notas que sí que he ido creando, me meto en académico, clases, las clases que he compartido con vosotros, sesiones.  
Estas son las 3:00 clases que hemos dado juntos, si os fijáis sí que tiene el código de fechas.  
Para mí, los códigos esos son fundamentales para para que los bots puedan ir rápido por el sistema.  
Y todo lo que crea.  
Todo lo que crea.  
Hermes, perdón, todo lo que crea Watson.  
Lo crea con un código que no me confunde a mí y que no confunde a los agentes, o sea, es un código que.  
Está condenado a desaparecer, es un código temporal.  
Ahora lo vemos operando, aquí están las instrucciones de la gente.  
Identidad, memoria, motos y voy a ir.  
Voy a ir a Hermes.  
Y nos va a Hermes, para que veáis Hermes ni lo tengo aquí.  
Hermes, abrir.  
Está hemos dicho en usuarios, Sony 30, ya lo dejamos y seguimos luego.  
Lo dejamos con Hermes y seguimos luego, de acuerdo.  
Pensar si tenéis preguntas.  
¿Y lo de lo dejamos ahora, te parece corto, sí?  
Hasta ahora que si podéis, puedes poner el QR.

## Parte 2
3 de julio de 2026, 12:10a.m.
1 h 52 min 44 s
Bien, a lo que voy de aquí al final de la sesión.  
Quiero acabar de explicaros mis agentes, quiero cerrar el proceso del bault.  
Luego quiero hablar de Shannon por un lado.  
Y de este paper de que es el fundacional de GPT.  
¿Y alguien me puede compartir? Cristina, genial. Te agradezco esa pregunta. ¿Puedo compartir los enlaces anteriores?  
Habrá cosas más que público. Hay muchos enlaces y hay muchas cosas, pero no te preocupes por asignaturas. Garvía. Ay, espera, aquí estoy, me meto en Garvía.es dentro de Garvía.es asignaturas dentro de asignaturas.  
Tenemos tecnología y liderazgo y voy a copiar.  
Control V aquí.  
A compartir la pantalla de Luis, la mía, porfa.  
Vamos, vamos, vamos.  
Perfecto, lo único que he hecho es meterme en Garvía.es y en esta página web.  
Vais a tener las transcripciones. Luego hoy será en esta misma página web tenéis, o sea, esta es el enlace que acabo de compartir. Aquí tenéis un enlace que si lo apretáis.  
Este chat es mejor que el de Teams, no es igual el de Teams, o sea, el de Teams es oficial, este es nuestro. Lo que pasa es que el de Teams no lo tengo instalado en este ordenador porque tener el Teams abierto me consume muchos recursos.  
Manuela, ahí va.  
Ahí va, ahí va, ahí va.  
Mira el grupo, tengo, o sea, espera, voy a compartirlo. ¿Esto qué os hago?  
Esto quiero que, o sea.  
Bueno, claro, porque lo ha leído, este chat es mejor, que bueno, es que este es oficial de a ver, esto es una broma interna, lo que le voy a responder ahora.  
Como empecemos, es justo a lo que iba Chema. No vamos a empezar con los , lo con los GIFs. El que esté viendo la pantalla, este soy yo. A ver, esto los han hecho mis alumnos y esta es mi hija. Bueno, esto ya está, no sigo bajando. Voy a buscar los GIFs y voy a buscar a.  
Esto es una broma interna.  
Es que Manuel no sé si alguno le conoce, pero tiene un parecido grande.  
¿Me metes en llamada y me pone de la barra?  
A ver, lo mismo. Vamos a ver, esto no hay que hacerlo. Esto esto está mal, esto que estoy haciendo está mal, pero creerme que en vivo todavía ganan parecido. No sé si entendéis ya la broma interna que acabo de hacer. Os pido disculpas por esto.  
A ver dónde estamos. ¿Dónde estamos? Me he perdido el hilo. No hay que perder el hilo jamás o hay que saber recuperarlo. Duras declaraciones.  
Que no, como el chat oficial de la asignatura, no hay nada.  
A ver.  
Perdón.  
¿Puedo seguir, voy dónde estábamos?  
Cristina, todo esto es culpa tuya. No es broma, es broma. O sea, no conozco a la pobre Cristina. Si apretáis aquí engarvia.es, tenéis los contenidos y luego el curso no acaba aquí. Me falta por compartir la última de las transcripciones.  
Y probablemente me pase un par de días compartiendo resúmenes de las transcripciones, por ejemplo, de las aplicaciones que he dado ordenadas de temas de código abierto.  
Todo esto está en también.  
Sí, no te preocupes, gracias. ¿Dónde está Jesús? Sí, los gracias.  
A ver, cuando terminamos, oye, tienes pensado subir totalmente, no voy a parar, no voy a parar hasta.  
Estoy poniendo nerviosísimo y ya voy.  
Hasta que esto parezca un.  
Grupo de WhatsApp de padres y madres, Diana, mira y madres, no.  
De chavales del colegio.  
Totalmente. Vamos a seguir compartiendo cosas. Sí que habrá. Por ejemplo, os compartí ayer que este sí lo voy a volver a compartir.  
Os compartí ayer que este sí que lo quiero volver a compartir.  
Está *****, anda que no hemos generado cosas.  
El Rubio, pero os comparte, a ver, esto se ve aquí.  
Os compartí ayer.  
Y antes de ayer he compartido varios varias infografías.  
Esta la voy a volver a compartir solo por compartir una de las o sea.  
Esta infografía.  
Está bien porque esta infografía, si os fijáis más o menos.  
Se parece a lo que os estoy contando en más detalle o lo que os estoy contando con más detalle desde el clon. A ver, me queda poco tiempo y además poco tiempo del de del de verdad.  
Y no quiero llenar todo el tiempo que por tiempo son, no os asustéis, son una, o sea, acabo a las 2:00, queda 1:40 de tiempo dentro de eso. Antes no lo había dejado a la mitad.  
Os había comentado que tenemos a Cloud, que Cloud Open Cloud son una serie de archivos.  
Luego tenemos también a Hermes.  
Hermes es otro agente como es.  
Pero un poquito mejorado. La gente que sabe de esto y que usa de estas cosas, Miguel Ángel dice que es mucho mejor Hermes que Cloud. Está más orientado, mientras que Cloud lo ha hecho una sola persona.  
Y lo hizo relativamente rápido. Hermes lo han hecho un conjunto de programadores y es una herramienta que es hecha por informáticos para informáticos.  
Informáticos como preinformáticos.  
Vamos a ver las tripas de Hermes que hemos visto antes, las tripas de Cloud. Esto es Obsidian, obsi, espera que no quiero F 11.  
Esto es Obsidian. Obsidian que es una herramienta que permite Obsidian, la vimos el primer día de clase y el segundo día de clase. Obsidian es una herramienta que permite ver archivos MD de forma rápida.  
Tengo en este ordenador Cloud, Hermex, Hermes, mi inbox cognitivo y mi inbox de Obsidian. Cada uno de estos son cuatro sistemas de carpetas diferentes que luego desde Antigravity o desde Cloude se pueden abrir como proyecto.  
Cada uno se puede abrir como proyecto, voy.  
Voy a.  
Hermes, bueno, estoy en Hermes, bien.  
Si os fijáis, está todo mucho más bonito yo ordenado. Bueno, dejadme que vaya 1 segundo a Cloud, que Cloud está ordenado también.  
Cloud está ordenado también, pero quiero que veáis dentro de Cloud que antes no os no os lo he contado, memoria, memory.  
Está me morí.  
Voy a ir a la al primero de los registros.  
Esto lo crea, este es el día que me instalé cloud por primera vez, el 29 de enero.  
Esto es memoria interna del propio agente.  
¿Con qué IA funciona el agente está con GPT?  
Vía Auz, o sea, sin API y Hermes, os he dicho que con Grok.  
Día de pruebas, este es el primer, el segundo día, día de pruebas de captura fuera del bound. Ya tenía definido el inbox. No, antes ya me había instalado Cloud Low C un poquito antes. Esto ya me lo estaba instalando y lo empecé a juntar y aquí podéis ver.  
Lo que he ido haciendo, que esto.  
Esto, si veis.  
Yo esto es la primera vez que lo estoy viendo este blog rápido.  
Puede que al principio lo viera un poco, Telegram Levy pidió la última clase, a ver.  
¿Lo podéis? Estos agentes pueden leer WhatsApp.  
¿Pero el problema de leer Diana, te acuerdas, tiene el micrófono Diana, no?  
Sí.  
Dime.  
Estaba, espera 1 segundo.  
Es que esta es hace tiempo, no lo voy a buscar porque no están visibles. ¿Te acuerdas cuando estaba Alicia ingresada?  
Bueno, esta varía, pero no tiene, o sea, la última en enero.  
Open Cloud aparece un domingo. Yo me lo instalo sin saber lo que es en mi ordenador, no en el ordenador de debajo de la casa, sino en el ordenador. En mi ordenador me lo instalo saliendo de casa porque me tengo que ir al metro.  
Y esa noche la paso en el hospital con Alicia mientras tú estabas en casa.  
Me instalé en casa. Open Cloud en menos de 10 minutos se conectó a mi WhatsApp y desde el WhatsApp iba hablando con él, iba hablando con él instalado en mi ordenador. Es decir, ese día estuve jugando con fuego, pero tampoco le decía bórrame todo. No sabía lo que era la herramienta y estaba jugando con él.  
Le iba dando permisos como yo veía que funcionaba con WhatsApp, desde el WhatsApp le decía: mándale un mensaje a Diana.  
Sí, señor, te acuerdas que estuviste hablando sin darte cuenta.  
Yo veo, me meto en el WhatsApp de Diana y pone, tienes 3 mensajes con Diana.  
Meto y veo que Diana me ha escrito.  
Y OpenCloud le ha contestado.  
Sí, que no sabía que estaba hablando con José, pensaba que estaba hablando con.  
Yopen Cloud te había contestado además.  
A ver, estábamos con una niña ingresada en el hospital, entrando, saliendo al hospital. O sea, me refiero, tampoco estábamos como locos, que luego, si con calma ves esos mensajes, dices no los he escrito, yo lo ha escrito la IA.  
Pero le respondió la IA y luego sigo jugando en clase un poquito con Open Cloud, que era el nuevo juguete.  
Y veo en grupos de WhatsApp que Open Cloud contesta como si fuera uno más del grupo, pero en mi nombre porque Open Cloud se conecta con WhatsApp.  
Abriéndote una sesión de WhatsApp web.  
Es decir, que es como si fueras tú en WhatsApp.  
Es decir, que si te escribe a ti, Diana, yo no veo el no leído.  
O sea.  
¿Cómo lo has hecho para que no te respondan un contacto?  
No tiene sí, a ver cómo he hecho eso, cómo he hecho eso. A ver, este es sí, te lo puedo decir.  
Porque está en tools.  
Hola.  
A ver, lo que estoy haciendo es estoy.  
Este.  
Es que WhatsApp, a ver, tiene que estar al principio.  
A ver, en algún sitio de la WhatsApp no es la palabra que tengo que buscar.  
Aquí está.  
No es no, este es esta es memoria, no hay un archivo de estos.  
A ver, hay un archivo de estos donde está la configuración, si alguien sabe más agentes memory.  
Aquí, mira.  
Diana.  
Group chats, you have access to your human staff. That doesn't mean you serve their staff in groups, you are a participant, not there, no, pero hay aquí alguna instrucción. Tools, tools, no markdown tables, use bullet list instead herbits.  
Aquí hay una instrucción.  
Memorí, o sea, todo esto se lo digo desde el Telegram, te voy a ver para que veáis.  
Me voy a meter a mí mismo, vale que aquí antes ya me ha dicho que estaba.  
Dentro de tu configuración.  
¿Dónde puedo ver?  
Loss.  
Permisos que tienes en.  
WhatsApp.  
A ver, que para esto lo suyo es habérselo preguntado en Telegram, es el mismo Telegram.  
Y antes me ha dicho.  
A ver, me.  
Hoy a Telegram también.  
Me manejo mucho más cómodo con Telegram, con los con los agentes. Mira, aquí está.  
Me ha contestado.  
Miro la configuración Open Cloud en el fichero Open Cloud J Son, vale, dentro de Open Cloud hay un fichero que es J Son.  
Ese fichero J son.  
Habría que abrirlo con ese fichero con J. Son, habría que abrirlo.  
Con el note, con el note.  
Con algún editor de notas y la sección concreta es J Son Channels WhatsApp Policy 671 y esto es Diana Group Policy Disabled. Si yo este disabled lo pongo como activado.  
Ya lo tienes moviéndose.  
Y luego por Telegram me ha contestado más o menos lo mismo.  
¿Esto qué es? ¿Esto que estáis viendo qué es? Esto es un agente comercial. A ver, comercial no, porque no es OpenCloud es un programa de código abierto que alguien montó, lo tiene subido en GitHub, GitHub. Tú desde Antigravity o sin Antigravity te puedes descargar el programa de GitHub, instalarlo en tu ordenador, corre el programa y le tienes que meter a ese programa una API.  
¿Una API, qué es?  
A ver, esto visto, no entendido más o menos.  
Open cloud.  
Sí, y luego Chema, total, a ver, yo desde aquí, desde Hermes, o sea, perdón, desde Hermes.  
Yo desde aquí.  
Sema, yo desde aquí le podría decir dale permisos de dale, o sea, yo desde aquí podría configurar a OpenCloud.  
Lo que pasa es que el funcionamiento de Open Cloud con grupos, luego los grupos de WhatsApp que tengo son suficientemente erráticos y al final hay un tema entre esfuerzo que tú dedicas a desarrollar, lo que sea que vas a desarrollar y eficiencia que tienes en el uso. O sea, yo podría meter en nuestro grupo de WhatsApp.  
A un agente.  
Pero prefiero cuando lo haga.  
Tenerlo suficientemente estandarizado como para no estar experimentando con mis alumnos.  
Para experimentar ya tengo a mi mujer, es broma, o sea, a mi mujer o los alumnos que tengo en tiempo real en cada momento con vosotros. Hoy estoy experimentando que si la catedral de Ourense, no sé qué, o sea, al final no lo sé.  
Y.  
Voy para allá, sigo, esto es Open Cloud.  
Voy ya.  
Hermes, Hermes, igual que OpenCloud, también tiene un Soul.  
This file defines defines the agent personality and Tom, the agent will embody whatever you write here. O sea, si os fijáis, mi Hermes.  
No lo tengo al pobre ni configurado, se llama Hermes y es Hermes.  
Hermes tiene ya un set de skills.  
Estas skills no son las que vienen por defecto, habrá algunas que vienen por defecto.  
¿Pero él solo se va que es una skill? ¿Os suena lo de las skills, Juan?  
Pero digo en entorno Claude.  
¿Tú sabes que a cloud le puedes poner skills?  
Eso es, no le dejas programado una tarea. La tarea programada es una tarea programada, una Skill es.  
Tiene una serie de skills y tú puedes definir skills. Una skill es una habilidad. Es algo que Cloud repite. Son cosas que Cloud Cloud muchas veces, si le dices ábreme un doc, pues lo que usa es una skill que le permite abrir docs y tú puedes programar skills. es que.  
¿Hermes tiene skills y qué es un skill? Mirad.  
Una skill no es más que un MD.  
Esta es la skin, es un MD.  
¿Dónde tiene definido dentro del MD un prompt?  
¿Qué es una skill? Es algo que sabe que sabe hacer el agente. ¿Y cómo se definen las skills? Pues dentro de un prompt, aquí tenéis todo lo que puede hacer el agente que tú le podrías decir: crea una nueva skill para transcribir, crea una nueva skill para lo que te de la gana.  
Y agrada a mí, a ver alguna que se pueda.  
But note taking.  
Obsidian skill.  
Use this skill for file system first obsidian bolt work, reading notes, listing notes, searching notes.  
Esto son las tripas. Yo le pido cosas a Hermes o le pido cosas a Jarvis, perdón, a Watson a través de Telegram. Él hace lo que yo le pido, pero además con lo que yo le voy pidiendo va aprendiendo.  
Y o bien se instala una skill, o sea, tiene vida propia.  
¿Yo qué hago desde fuera con antigravity?  
Que a esto no le dedico mucho tiempo. ¿Qué hago desde fuera con Antigravity?  
Tengo aquí Open Cloud, que desde yo fuera te digo.  
Conéctate con no sé qué, no sé, o sea, la labor de taller no la hago entrando en los archivos, sino desde fuera con Antigravity. Le digo, mira, coge, pon, crea, quita.  
Se entiende más o menos Juan.  
¿Antigravity, o sea, qué es un agente, qué es mi vault?  
Si tenéis preguntas, hacerlas cuanto antes. Mi bol son todas estas carpetas.  
Estos son mi bolt, este es mi historia personal, esto es todo lo que yo tengo.  
Y ahora, o sea, esto sí lo conozco.  
Igual que yo tengo eso.  
Hermes, o sea, los agentes Open Cloud, cuando lo instalas, crea algo parecido a eso.  
Desde el chat.  
La puerta nunca.  
Mi clon, mi clon es eso que estás viendo, sí, pero mi clon no tiene dentro una IA genuina.  
No hay una ahí adentro del clon. Mi clon es simplemente un sistema y luego tengo y luego tengo fuera antigravity y desde un ordenador tengo a los 2 agentes que leen el volt.  
Si podrías entrar en antigravity directamente porque en el móvil no tengo antigravity.  
Si estuviera todo el día adelante el ordenador.  
No usarías eso, no usaría Telegram.  
Y luego Telegram.  
Para mí es muy fácil si tengo que reiniciarlo.  
Y lo tengo programado desde Telegram, darle una orden. Iría solo con el portátil. Si tuviera, si yo tuviera todo el día un portátil.  
En mi cabeza o al lado, o sea, si yo viviera con un portátil al lado.  
Lo único de lo que me preocuparía es de las copias de seguridad.  
Ahora bien, como voy andando por la calle.  
Ese por un lado, ese ordenador está funcionando 247 debajo de la tele.  
Y ese ordenador 247 de debajo de la tele. Entro, entro o bien desde el portátil, entro o bien desde el portátil o bien desde los bots. El bout que estás viendo ahora, que es el del.  
No.  
La figura de bots no sería necesaria y luego automatizaciones no vas a estar todo el día mirando el portátil.  
Las tareas programadas de Claude sí que merece la, o sea, para tú ejecutar una tarea programada de Claude, el ordenador tiene que estar encendido.  
Y no se ejecuta la tarea.  
Sí, no, sí, pues si tienes un ordenador encendido.  
Tiene que haber un programa corriendo en ese ordenador que puede ser Claude. O sea, si el ordenador está encendido, el sistema operativo del ordenador está corriendo.  
Pues sobre ese sistema operativo del ordenador pones un sistema operativo que es tuyo asociado con tu actividad humana.  
Y luego, dentro de ese sistema operativo humano.  
Mira, Chema, y para interactuar con tu clon, ¿cuándo eliges usar un bot u otro? ¿Cuándo y por qué lo haces con Hermes o para qué y cuándo, por qué y para qué con Jarvis? Te cuento, yo primero instalé OpenCloud antes de conocer que existía Hermes.  
Mi vida la hago toda con Open Cloud, con Jarvis.  
Lo que pasa es que lo que acabo de descubrir o lo que estoy descubriendo es que Hermes a medio largo plazo es mucho, mucho más estable, o sea, Open Cloud.  
Os he enseñado el archivo y es una basura, o sea, mete cosas, crea, borra, que tengo que meterle un repaso, tengo que limpiarlo. Y en cambio, Hermes he entrado y digo, *****, si este tío está creciendo de forma ordenada, él solo ha creado skills.  
O sea, Hermes, por mucho que me duela darle la razón a Miguel Ángel, esto negaré bajo tortura que le he dado la razón a Miguel Ángel, pero Hermes es.  
Un producto mucho más avanzado que OpenCloud, pero yo uso OpenCloud.  
Porque sí. ¿Por qué tengo instalado también Hermes? Porque Miguel Ángel me insistió, le dije a Antigravity que me lo instalara y al final tener 2 te permite aprender uno y tener otro. O sea, esto es equivalente. Antes me habíais preguntado, Chema me había preguntado.  
Diana, tenías la pregunta y he contestado solo a una de las 2:00.  
Sí, hace tiempo, antes del descanso, me había preguntado por creo que me había preguntado por Linux.  
Hermes es gratis, Open Cloud es gratis y es de código abierto. Ahora voy a código abierto.  
¿No utilizas Linux?  
A ver, uso Windows, uso Windows como sistema operativo y siempre he usado Windows. Luego, muchas de estas cosas para funcionar se tienen que meter en el en la línea de comandos, o sea, se se tienen, hay que entrar en el Powershell al principio de la I A, o sea, al principio o hasta hace 2 meses, 3 meses.  
Metí en el powershell, pero desde que uso antigravity en mi vida no entro en el powershell, es antigravity el que entra en el powershell y luego.  
Yo, Linux, bueno, Linux, ¿por qué Windows y no Linux? Porque.  
Perfecto.  
¿Y por qué le digo? Sí, porque me he equivocado. ¿Por qué? Pero ya una vez me equivoco, experimento. ¿Por qué Linux? Perdón, ¿por qué Windows sino Linux? Porque Linux hay que saber programarlo, hay que saber los comandos y sinceramente no sé cómo son los comandos de Linux.  
Pero al final sí que antigravity para muchas cosas te instala un entorno Linux. ¿Cómo se instala un entorno Linux? Pidiéndoselo antigravity.  
I did.  
Antigravity se hace en diciembre, Open Cloud en enero, Hermes, o sea, todo lo que os estoy.  
¿Dónde estás?  
Sí.  
A ver, el problema que tienen estas cosas es que lo que estamos viendo es la punta de un iceberg mucho más profundo. No estamos, me acaba de preguntar.  
Y me gusta Chema, no me lo ha preguntado hace un rato, me dice, me habla de Linux.  
Linux es para programadores. Yo no sé usar Linux, pero sé que Linux está mucho más cerca de la máquina.  
A ver, yo uso Linux con Atigravity y luego aquellas cosas que entiendo, tengo que aprender un poco para usar Linux mejor. Me voy acercando a ellas. Tenemos que aprender. Estamos aprendiendo constantemente todos.  
¿Y esto son unas herramientas brutales, cuándo y por qué lo hago con Hermes y para qué después?  
A ver, debería de usar Hermes para más cosas, pero es que realmente en lo que tengo centrada mi atención.  
Es en mi propio vault, que luego a mi propio vault le pregunto cosas y le digo: ¿qué podrías aprender de cómo funciona Hermes? ¿Qué podrías mi vault aquí dentro del área operativa?  
Tengo skills.  
Pero que estas skills sí que son mías, son de los procesos que hago yo semanales y que es una skill.  
Hermes tienes que conectarlo con sí Hermes, cuando lo instalas en el proceso de instalación te dice dame la API o conéctame con Google. Si os dice dame la API en el proceso de instalación.  
Si os dice, dame la API, os metéis en.  
Grok, a ver, si tenéis una API fenomenal, pero a mí lo de dar, o sea, yo prefiero vivir sin os metéis en Grok con Q.  
Starbuilding.  
Y aquí en Apiki, o sea.  
Continuo, os logueáis con Google y aquí en Api Key tenéis claves APIs gratis que funcionan de modelos abiertos y ya lo tenéis funcionando con IA.  
La pregunta de la actuación, la soberanía.  
No.  
¿Qué diferencia abrir en el club?  
Sí, yo a mi le dan una carpeta de mi Drive.  
No lo he hecho hasta ahora, es una conclusión que estaba llegando a hacerlo, que es por seguridad y te da un poco de cosa. No, y hay una cosa más fundamental, me voy a poner, me voy a poner, , me voy a poner académico.  
Me voy a poner académico.  
¿Lo que es? Esto es aquí.  
Gente que dice gracias, pues Cristina, más. O sea, Cristina, siento pudor entre mis stickers y los tuyos. Pido disculpas, es que estoy viendo esas. O sea, el mundo sería mucho más bonito.  
A ver.  
He visto las flores aquí, esto es a lo que iba.  
A ver, aquí hay un.  
Attention is all.  
YouTube Need, este es un paper en el que está basada toda la tecnología de GPT.  
Y este señor es Shannon, el de la teoría de la información de Shannon, que si habéis estudiado ingeniería informática os debería de sonar a todos. Y qué casualidad que no es casualidad, se llama Claude.  
No es casualidad.  
Porque es Claude, se llama Claude.  
No se sabe del todo, pero estos 2 señores tienen que ver. La pregunta que me has hecho es qué pasa si le meto toda la información del mundo o toda la información de mi OneDrive.  
Más o menos quiero decir que yo venía ya pensando en vida.  
Vete a juntarme la recta ya.  
Pasando el vértigo ese que te da, sí, compartiendo todo y.  
Estoy ya todo drive como carpeta.  
Voy a ello, salvo por la soberanía y lo local. Voy a ello por un lado.  
Por un lado.  
Hay una diferencia fundamental y es el concepto de sistema.  
Ahora mismo tenemos en este aula en el que estamos, no lo sé, 30 ordenadores, están todos los ordenadores apagados y son 30 ordenadores independientes.  
El cuerpo humano son muchas, muchas, muchas células.  
Si tú le metes.  
Todo tu OneDrive estamos en el ejemplo que hablábamos ayer de los libros.  
Todo tu Todo tu OneDrive son un montón de libros tirados a la basura, no hay un sistema.  
Para que el sistema funcione, el sistema tiene que ser algo único.  
En mi sistema es un sistema operativo. Aprietas un botón, entra por un sitio. Si tú lo apagas, todo se acaba. El cuerpo humano es un sistema.  
Había un chiste horrible por ahí de uno que está en la cárcel, pierde un brazo, lo mandan fuera, pierde otro brazo, lo mandan fuera para que lo entierren, pierde la pierna, lo mandan fuera y al final le dice uno te estás escapando a cachos.  
Evidentemente un brazo por ahí no tiene vida con independencia al cuerpo.  
Un sistema es un todo que funciona con cierto sentido. Tú de lo que me estás hablando con el OneDrive es lo que mi, o sea, es llenar todo de archivos, archivos y archivos fundamental.  
La analogía con el propio cuerpo humano.  
¿Tiene sentido comer todo? Es que cuanto más como, más energía tengo.  
¿Y cómo más? ¿Y cómo más que hablo desde el punto de vista del cuerpo humano, Miguel Ángel, qué le está pasando con su propio clon?  
Que tiene es una metáfora, por Dios, tiene obesidad mórbida porque no hace más que comer, comer, comer y un poco de deporte hay que hacer.  
Es el deporte ese.  
Pues la catedral, el dar clase, el compartir, no solo hay que pensar, o sea, el cuerpo humano desde un punto de vista energético, nuestro cerebro.  
Y en el consumo de una bombilla.  
Incluso menos.  
Y mira que nuestro cerebro es capaz de hacer actividad.  
A lo que voy es que decía por un lado, attention is all you need.  
El origen de GPT es.  
Diana, céntrate en esto que te estoy diciendo dentro de todo el ruido, que hay mucho ruido en el mundo.  
GPT busca en qué me tengo que centrar, o sea, para construir un LLM dentro de las tripas del LLM, busca en qué se tiene que centrar, busca en qué tiene que centrar la atención y luego Shannon, el de la teoría de la información.  
Lo que dice es que la vida, perdón, la vida, la naturaleza. Hay un principio por ahí que es fundamental, que es el segundo principio, el primero de la termodinámica es lo que entra, es lo que sale, la conservación de la energía, lo que entra en un sistema es lo que sale. Ese no nos importa ahora, lo que nos importa es el segundo.  
El segundo principio de la termodinámica lo que dices.  
El desorden del universo tiende de forma natural a crecer, es decir, yo tengo una taza aquí, tiro la taza al suelo y de forma natural la taza cuando toca el suelo se rompe.  
Sería impensable el proceso contrario, tiro la taza rota y se ordena.  
La naturaleza tiende.  
Por naturaleza al desorden.  
Yeah.  
El señor este Schrödinger tiene un libro maravilloso que es que es la vida, muy cortito. Son clases que Schrödinger daba.  
Y Schrödinger dice que la vida es el único proceso.  
Antientrópico.  
Es decir, la vida es orden. Si él escribió qué es la vida antes de que se conociera el genoma humano, pero él lo que decía es tenemos que tener algo ordenado y tú coges el genoma humano, vas al neandertal.  
Y ni una memoria RAM aguanta, o sea, la memoria, o sea, si está escrito en piedra, sí puede aguantar, pero al final la memoria tiende a borrarse. En cambio, el cuerpo humano.  
A través de generaciones y generaciones conserva la información. Sanon lo que dice es el cuerpo, o sea, la vida.  
No, perdón, Schrodinger lo que dice es la vida es orden.  
La vida es orden, es antientropía. Cuanto más y mejor ordenamos nuestro sistema, cuanto más sencillo es, cuanto más menos energía gastamos y mejor funciona el sistema. Y Shannon, el de la teoría de la información, lo que dice es cuanta más calidad tiene la información.  
Menos energía gasta. ¿Tú eres capaz de aprenderte de memoria un número de 100 dígitos? Ahora, si te digo un número de 100 dígitos, te lo sabes. Imagínate que el número fuera solo unos.  
Obvio que sí, entiendes que un número con solo unos es mucho más fácil de memorizar porque está más ordenado.  
Si fuera 10101010 nos cuesta un poquito más, nos cuesta un poquito más, pero nos acordamos también.  
Cuanto mejor ordenado esté el sistema, más cómoda es nuestra vida. ¿Y qué hay que hacer para que el sistema esté ordenado? Pues no meterle.  
El One Drive de golpe, sino el pensar cómo reestructuro el sistema o cómo pues una carpetita, algo, pues piensa en algo que esto es justo, quedan 10 minutos para la una. Mentalmente, a la una me había puesto que os tenía que poner unos deberes del desde la una hasta las 2.  
De ver es que vamos a ir haciendo todos juntos, pero me adelanto.  
Una de las cosas, no. O sea, el resto de la clase hasta las 2:00, los que me estéis escuchando, Chema, quiero Chema y todos los que me estáis escuchando. Cristina, quiero que penséis y Juan, a ti te voy a machacar. De aquí a la hora y 10 minutos que quedan, te voy a machacar.  
Es una amenaza absolutamente y esto es, pues te lo voy a seguir licuando. Lo que quiero que penséis que Juan ya lleva pensándolo 1 hora y pico y espero que vosotros también.  
Es en cómo vais a aplicar todo esto que estamos viendo.  
Voy a ser generoso.  
El lunes.  
Os voy a dar el fin de semana para que descanséis.  
No, a ver, es broma, pero tampoco. O sea, yo lo que os he contado de aquí, o sea, llevo horas enseñándoos mi sistema.  
Lo que quiero es que empecéis a pensar no en el mío, sino en el tuyo, y en ese sentido, si hay alguien que sea animalista.  
Adoro a los animales, me gusta la carne, pero lo siento por la metáfora que voy a usar.  
¿Cómo te puedes comer a un elefante?  
Chema, lo voy a hacer, o sea, voy a hacer tu foto.  
Sabía yo porque te he visto, no se ve la foto.  
Es que veía la foto justo. Me alegra de que esa foto sea así. Es que veía la foto, veo mal.  
Y veía la foto y pensaba, Chema, que estaba preocupado por lo preocupado, no tengo información sobre lo que cubre la gorra.  
Es broma, pero que te he visto en LinkedIn. Y si por favor, si alguno está en LinkedIn, que me ponga su perfil de LinkedIn, que comparte en el grupo. Gracias por reírte, Chema, porque lo de meternos con las capilaridades, agradezco que te hayas reído. A Chema ya le tengo.  
Alejandro.  
Exactamente, a ver.  
Voy a ti Alejandro, ahora si alguien tiene LinkedIn y no le he agregado, por favor que ponga el enlace ahí y en cuanto vea el enlace en el grupo pincho y le agrego.  
¿Cómo se come uno uno a un elefante?  
Me gusta porque yo lo hubiera dicho.  
O sea, yo lo que suelo decir, ¿sabes cómo se come un elefante, Juan?  
Fileta filete.  
Y Alejandro ha metido 22 variables con hambre.  
No, pero hay que tener hambre.  
Hay que tener hambre.  
Tipo y un cuchillo.  
O sea, el tiempo lo tenemos todos, es más, pensando en el tiempo.  
Pensando en el tiempo, es que leo lo de Chema y me descojono. Tiene un punto cómico escuchar a Luis hablando de orden.  
Y Chema, mi mujer te da la razón.  
A ver, mi sistema esto, mirad, mirad la pantalla.  
Mirar la pantalla que tenéis debajo.  
Esto está bastante ordenado.  
Esto está bastante ordenado, es más.  
Si os fijáis en random.  
Filosofía.  
Mirad lo que tengo aquí.  
El paseo por la catedral de Ourense.  
Y necesito saber.  
Si está la ficha entera.  
Y para que veas si soy ordenado, Chema.  
Desde el WhatsApp de Diana, no desde el mío.  
Desde el WhatsApp de mi mujer voy a compartir.  
José Luis Montiel es un buen amigo.  
Que Diana le vio por primera vez ayer y yo solo he visto un día, pero digo porque es la persona que aparece en esa nota.  
¿Dónde está, dónde está, dónde está? en?  
Cosas de papá, que yo soy el obsidian bolt.  
¿Veis que ahora mismo tengo yo un poquito? Me está costando llegar, a ver, me está costando llegar, es random.  
Filosofía.  
Paseo catedral de Ourense.  
Y aquí tenéis el.  
A lo que voy.  
La vida humana es complejidad.  
El ser humano es complejidad.  
Respondiendo a tu pregunta.  
Poco a poco, o sea, tu sistema vital es complejo. Digo, tu OneDrive no es una, o sea, tú como ser humano, Juan, dices OneDrive es una unidad, pero la realidad es que ese OneDrive es un montón de cosas, en carpetas, en proyectos diferentes. O sea, ahí dentro no hay orden.  
But...  
Olear un orden.  
Ahí ayer compartí lo mismo.  
Correcto, a ver un poco como lo de la catedral de Ourense.  
Claro, claro, tú aspiras a que como has empezado el clon de una manera concreta, pensando en él, cómo tu añadido cortex.  
Pues ya has empezado desde realizándolo desde el sistema y de una manera lo más limpia posible. A ver, tengo.  
Exacto.  
A ver, ese es el equilibrio, es más, ahora mismo estoy buscando, o sea, que paseo Santiago de 6 años estará ahí escondido.  
Y un beat ahí, dejando un mundo en cero, y no tendrá prácticamente importancia en tu vida. Y cuando, y nuestra vida, o sea, y yo he visto, estoy pensando en el final de Blade Runner. Nosotros no lo recordamos todo, porque hostia, nos exploraría la señora. A ver.  
¿Y nosotros?  
¿Yo por qué estoy ahora, porque he salido de donde estaba y por qué me voy a conectar?  
¿Por qué lo me voy a conectar a mi LinkedIn?  
Que para mí pensar en el drive es ahora como ayer os lo dije.  
Ayer os lo dije.  
Si hay algo que puedas hacer en menos de 1 minuto, hazlo en menos de 1 minuto.  
Si hay algo que puedas hacer en menos de 1 minuto, hazlo en menos de 1 minuto.  
¿Y por qué estoy haciendo esto? Porque si a la, o sea, si a Cristina.  
No le pido conexión ahora.  
Probablemente no se lo pida en ningún otro momento.  
Y ya le he pedido la conexión.  
Me da la sensación, créeme.  
Y además voy a jugar con esto ya Cristina, ya esto ya está y ahora tengo que volver a donde estaba, no tengo.  
Me da la sensación.  
Y voy a dejar el me da la sensación.  
De que la catedral de Ourense.  
Chema.  
De que la catedral de Ourense no se me va a olvidar en la vida, lo estaba diciendo, seguramente.  
¿Laca, te acuerdas? Mira, y esta es una pregunta trampa, necesito que estéis en el grupo de WhatsApp todos.  
Cristina, he visto tu foto.  
Me encanta la foto y te voy a hacer una pregunta que sé que me vas a contestar.  
Si le preguntara, mira, se lo voy a buscar, a ver, es que los las bromas solo duran un día.  
Y voy a preguntar a Harry.  
¿Te acuerdas? Esta pregunta va para todos.  
¿Dónde estabas el 11 s, Cristina?  
¿A que sí que te acuerdas dónde estabas el 11 ese?  
Manuel.  
El 11 s, o sea, Chema, ¿dónde estabas el 11 s? Alejandro Jesús, ¿dónde estabas el 11 s? Mira qué gozada, gracias trabajando.  
Alejandro, pero trabajando dime exactamente el trabajo que estabas haciendo. ¿Dónde estabas trabajando? Dame detalles.  
Mira, Chema, eso es lo que estaba buscando. Iba a salir con una voz, Cristina.  
Sí, Chema.  
Esteban, estabas trabajando, ibas a salir. Bueno, eres Alejandro, no estabas trabajando. Sí, estaba trabajando. Sí, estaba una sala con mucha gente y estábamos todos, pero con la televisión.  
Perfecto, pegados a la te acuerdas de la gente con la que estabas.  
¿Alguna persona sí, dime algún nombre, algún nombre de alguna persona?  
Vale, pero sí que tienes la imagen, la imagen mental de las personas con las que estabas, de alguno de ellos sí que tienes.  
I see.  
¿Te das cuenta de que hemos, o sea, eres Alejandro, no?  
¿Tienes perdón por la pregunta que te voy a hacer, si quieres no contestes, eres padre?  
Sí, tengo 2 hijos de 24 y. ¿Te acuerdas dónde estabas el día que nació tu hijo y lo que estabas haciendo?  
Estaba caminando por un pasillo, un hospital. ¿Y te acuerdas del pasillo del hospital?  
¿Quién te comunicó que había nacido el niño?  
Pues salió, no conocía tampoco a los médicos de la enfermeras, salió ahí en la enfermera y no me estaba todo eso.  
¿O sea, qué acabo? ¿Qué acabo de hacer con tu bault de obsidian, Alejandro? He ido a 2 recuerdos, el 11 de septiembre del año 2001. Por un lado, con el 11 de septiembre te acordarás también de Notre Dame, te acordarás de dónde estabas el día de la pandemia, te acordarás el día del gol de Iniesta.  
A ver, Miguel Ángel no siente. Miguel Ángel no siente estrés y se acuerda de todas estas cosas. No tiene que ver tanto con el estrés que sí, sino con la emoción.  
Parece que es especialista en el estrés y te tira desde un puente, hace puenting, hace preguntas y esas preguntas se quedan grabadas con mucha más facilidad, porque la mente se acelera y es capaz de ver más fotogramas por segundo y grabar los plumas de inglés. Pero bueno, que no te lo te lo compro, te lo compro, no lo sabías y puedes compartir la referencia por el grupo.  
Porfa, hazlo porque estoy deseando leerlo y además no, *****, hacer puente y me subí el otro día aquí en Ourense al puente del milenio. Esa es otra de las cosas que no se me van a olvidar, es que está muy alto y me agarré. Resumen, el componente emocional es importante.  
O sea, al final.  
No nos acordamos de todos los recuerdos y dentro de el vault que estoy compartiendo con vosotros, dentro de este sistema os cuento muy rápido todo lo que está, o sea, esto es tecnología y luego dentro de mi propia vida, que lo llevo desde el móvil y entro aquí en el área operativa.  
Tengo lo mismo que tengo en mi cerebro en el neocórtex frontal, que es la memoria a corto plazo. Perdón, la memoria a corto plazo, no la memoria de trabajo.  
La memoria de trabajo es lo que hace.  
Que perdamos el hilo, estoy hablando una cosa, luego te cambian y de qué estábamos hablando. La memoria de trabajo es un poco parecida a la RAM de un ordenador, pero aquí no estoy hablando de ordenadores, no os quiero liar.  
¿Qué tengo en el área operativa? Os tengo a vosotros en este viaje de Ourense. Tengo un curso en Madrid que tengo abierto. Os enseño todo lo que tengo en el área operativa.  
El área operativa es grande, pero dentro del área operativa me interesa las asignaturas. Soy profesor para mí las asignaturas que doy.  
Es lo que está más arriba del todo y aquí estáis vosotros, Universidad de Vigo.  
Que llevo la preparación, o sea, esta es la ficha.  
De preparación, os enseño la ficha de preparación de hoy, bloque de tiempos y mapa de calor. Hoy ni ha abierto mano banana.  
De una, a ver, insisto, GPT, la IA, los LLMs gestionando tiempo no son.  
Lo mejor del mundo.  
Pero esto que Juan me lo ha pedido de forma natural en el descanso, yo lo tenía ya programado, lo de cuando quede 1 hora de clase.  
Pediros cómo vais a aplicar esto en vuestra vida, pero es que lo tengo yo programado en el curso, en las diapositivas del curso que tenéis en la plataforma. Está también y tiene bastante sentido pedirlo, que como soy yo, Chema, de desordenado.  
Si no lo tengo ahí apuntado, acabo las 2:00 y no he cerrado el curso. Me lo dice GPT constantemente. Cuando le subo las transcripciones me dice: Luis, no abras más ventanas.  
No es para mañana, mañana ya no hay.  
Esto es muy jesuítico, esto está en todas las, o sea, yo este es un curso, entrar, o sea, en todas está lo de entrar con la suya, a ver, entrar con la o sea.  
Los jesuitas dicen mucho lo de entrar con la suya para salir con la tuya.  
Que a mí me gusta reformularlo y es entrar con la vuestra para salir con la nuestra, es decir, preguntaros.  
Y con la información que tengo de vosotros, hacer algo común. Os cuento cuando recibes, o sea, recibes las diapositivas que no has hecho tú.  
Eso es.  
La suya, no la vuestra, sino la del que me manda las diapositivas. Yo esas diapositivas las sigo, pero sigo las diapositivas para dar lo que yo quiero sin salirme de las diapositivas, pero doy lo que yo quiero, el enfoque integrador.  
Entrar con la suya tal. A ver, tampoco me lo he leído tanto. La costura, el hilo para colaborar en proyectos de ingeniería no necesitamos comprar software corporativo de chat ruidoso. La colaboración asíncrona moderna se apoya en 2 pilares: texto, plano, markdown y control de versiones distribuidas mediante Git. Git. Ahora vamos a Git.  
Unidad 2 mejores, o sea, no me lo voy a leer por no meter ruido, o sea, no me lo voy a meter a leer por no meterme yo a mí mismo ruido.  
Estoy.  
Enseñándos dentro de la asignatura.  
Universidad de Digo.  
La transcripción de ayer, que si os fijáis, la transcripción de ayer ya está dentro del archivo guardada.  
Cuando acabe este curso.  
Pues este curso, tanto para mí como para vosotros, será.  
Uno más de los cursos que he impartido en el IEB, soy profe de la Universidad de Nueva York.  
A ver, no llevo grabándome estos cursos, solo tienen los alumnos porque con un script los cogió. Esto sí que son todos los cursos que llevo dados en la Universidad de Nueva York en Madrid. Transcripciones solo tengo.  
Aquí ya no había esta es el primero de transcripciones, estas son todas las sesiones que he dado.  
Esto fue en en octubre, en septiembre, octubre, noviembre y esta es la primavera. Llevo grabándome 1 año en Guay U. No es universidad que tienen un campus en Madrid y soy profe allí, New York University.  
Si tú pones.  
En Wayu.  
Madrid.  
Y Garvía.  
Pues aquí, New York University.  
En Madrid, esta es una profe.  
Montse Almudena, esta sabe de temas árabes, este, pues de algo, o sea, Aida no la, no la conozco, Isabel, tal, tal, tal, y este soy yo, sí, y este soy yo.  
Que aquí.  
A ver, es acojonante, me parece increíble, me parece un milagro.  
No, los de Estados Unidos vienen, vienen a Madrid. O sea, aquí no entran españoles, sino son gente que paga una pasta en Estados Unidos, que vienen, pasan un cuatrimestre. Yo pongo notas en americano.  
Pero sí, pensad los que nos estáis escuchando, pensad que llevo.  
Años de profe.  
O sea, no es la primera clase que estoy dando y luego llevo 1 año usando, bueno, llevo 1 año, llevo desde el inicio de GPT usando la IA.  
Con agentes con antigravity llevo desde diciembre con OpenCloud desde enero.  
Hermes lo he usado muy poco.  
Pero se parece mucho a opencloud, o sea, me refiero pensar que estáis ante un usuario que os lleva ventaja en cuanto a experiencia de uso.  
Yes.  
A ver, de 3 meses, pero no, a ver, no son 3 meses. A mí me parece brutal desde un punto de vista cognitivo, me parece un milagro que te he dicho aquí en Guayu.  
Y en 10 segundos he sido capaz de ponerte.  
He pasado por todos los miembros del faculty del claustro docente de Nueva York.  
He enseñado mi ficha y he vuelto. O sea, el ser capaz de haber hecho ese ejercicio informativo en tan poco tiempo a mí me parece un milagro. Además, yo desde Ourense, físicamente en Ourense y compartiéndolo con gente que está en Alicante, en Zaragoza. O sea, tener esa capacidad y esa y esa capacidad no es la IA.  
Es mi cabeza.  
Me refiero a ver, es mi cabeza, pero qué sencillo.  
Pero está entrenada, o sea, lo que te quería decir y no son 3 meses de entrenamiento, llevo dando clase 10 años, lo sé, he entendido lo que quiere.  
Nada.  
Okay.  
A ver, si quieres algo así, más alucinante todavía.  
Juan, Juan, esta semana ha salido nano banana, el barato, o sea, nano nano banana, el bueno lo compartí ayer con vosotros, una versión rápida de nano banana que la compartimos ayer y la experimentamos juntos. Os he compartido que lo tenéis en el grupo, una envidia ha sacado.  
APIs gratis, todavía no lo he mirado, pero estoy deseando ver las APIs gratis de Nvidia.  
O sea, Fable Fable ha vuelto a la vida esta semana. Fable ha vuelto a la vida esta semana. Yo no lo he usado, pero ayer traje a Miguel Ángel, que él sí lo ha usado y estuvo ayer todo el día usando Fable.  
Miguel Ángel, con lo de Fable, ha redactado.  
O sea, ha hecho un trabajo maravilloso, pero es que él tenía que hacer un trabajo. O sea, yo porque he usado, porque he usado, porque he usado en la nueva nana.  
Porque he compartido con vosotros 2 infografías en tiempo real. Al final, esto es lo que me ha preguntado Chema antes. Chema me ha dicho, ¿y por qué has compartido las 2 fichas con 2 agentes? Porque me he equivocado, pero importante, una vez me he equivocado, he hecho de la necesidad virtud.  
Ese error, ese error.  
Lo he convertido.  
En un experimento, un pequeño experimento de ver cómo funciona un agente contra el otro, o sea, al final.  
Lo que tenemos que tener en la cabeza es ese punto de ir un poquito más allá, de no dejarnos llevar y decir, *****, pues han venido los Reyes Magos, me han traído juguetes.  
Pues vamos a estar al menos 10 minutos jugando con los juguetes, no estoy diciendo que juguemos todo el año con los juguetes.  
Pero al menos 10 minutos han venido los Reyes Magos y nos han traído un juguete.  
Hablando de juguetes, hablando de juguetes.  
Ay, hablando de juguetes, entendido más o menos el clon. Esta es la parte operativa. Si necesitáis cualquier cosa, yo en el grupo de WhatsApp sigo estando hablando de juguetes.  
Vamos a jugar, queda poco tiempo, quedan 45 minutos. Hay una canción de Víctor Jara maravillosa, es 'Te recuerdo Amanda' y dice que la vida es eterna en 5 minutos. Te recuerdo Amanda, vamos a por música.  
Gemini.  
A ver, vamos a por música, pero vamos con orden.  
Vamos con orden, Chema.  
Google.  
Labs.  
Google Labs.  
Copiar.  
Google Labs.  
Comparto.  
Imagínate, a ver, Chema, todas las clases estas las tienes en.  
Todas las clases Chema de Equayuda están en inglés, pues imagínate en gallego para los o sea, bueno, da igual y Zaida, Juan Rivas.  
Sí, comiendo con una chica que se llamaba Laura y en una cafetería, la cafetería se llamaba Zaida.  
¿Y Laura, Laura, ha pasado a hacer algo en tu vida?  
Una amiga perfecto.  
Pero date cuenta de la memoria cómo funciona.  
Ya, sí, yo tengo la televisión encima, sentados en Hollandesa y los aviones. ¿Sabes lo que nos pasa con la cabeza?  
¿Sabes lo que nos pasa con la cabeza?  
Que cuando tenemos estrés, cuando nos hacemos mayores.  
Vamos más rápido y perdemos la capacidad de vivir. Empezamos a morir mucho antes de morir. O sea, pasa el tiempo rápido a mí estos días en Ourense a toda hostia, pero al mismo tiempo estoy viviendo con una intensidad que es de esos días que, o sea.  
Estos días en Ourense miro para atrás y digo, *****, si llevo toda mi vida con vosotros aquí en el curso, pasa muy rápido, pero el momento que estoy viviendo cuando tienes hijos sucede algo también temporal. El tiempo vuela, pero al mismo tiempo es como si llevaras con tus hijos toda la vida. Cuando tu hijo tiene un mes dices *****.  
Sí, dejas de vivir para ti y vives para otro. Hay un tema, bueno, hay muchos temas, pues 629, ¿quién se acaba de unir ahora? Es broma, es broma, el 629 encantado.  
A ver.  
Sí, no, que voy, que voy cuando puedas porfa, le pues en algún momento leeré. A ver, voy al Google Labs y voy a Notebook LM, voy a Notebook LM, ¿vale?  
En Google no Google M.  
Tengo todas las transcripciones.  
Voy a pedir, hazme.  
Dime algo que sea gallego, muñeira.  
Un rap tipo muñeira, no sé qué es un rap tipo muñeira.  
Muy cachondo en español con todos los integrantes de las.  
de la De las sesiones.  
Con algún guiño a cada uno.  
Y insistiendo en que.  
Luis, el profesor es desordenado.  
Y desastre, dice, y desastre según su mujer.  
Diana, podría seguir, le estoy dando, o sea, el contexto es bueno.  
El contexto es bueno, por un lado, aquí he dejado un horno en el pollo, ¿vale?  
Un pollo en el horno, o sea, los disléxicos, los disléxicos también somos persianas. A ver, Google Labs.  
Si os fijáis, Google Labs es un montón de herramientas, aunque estuviera.  
A Google Labs Stitch hemos hablado de él. Stitch hemos hablado de él. Voy a usar Google Flow Music.  
Estos tenemos aquí cada una de estas herramientas.  
Cada una de estas herramientas merece la pena dedicarle un tiempo. ¿Cómo le podemos dedicar un tiempo?  
¿O sea, cómo podemos hacer una selección previa? Dime herramientas de.  
Google Labs que puedan ser interesantes para ingenieros informáticos.  
Dame una lista para WhatsApp con.  
Herramienta, enlace y utilidad. Esto se lo estoy preguntando a Gemini.  
No se lo preguntaría a GPT porque es la competencia.  
Hola, la primera antigravity, Google AI Studio, Notebook el M, Google Code Labs, Gemini.  
Quiero una lista de 15 ítems y menos rollo.  
Project IDX, espacio full stack, code labs, fire.  
Vale.  
Gracias Alejandro, lo que acaba de compartir Alejandro me lo reenvío.  
A auxiliar.  
Lo que acaba de compartir Alejandro me lo reenvío a auxiliar y estos son herramientas.  
Para.  
Ingenieros y le voy a decir.  
Ahora.  
Ahora sin repetirte herramientas para.  
Gente normal que sean curiosas y divertidas o productivas.  
O productivas, quedan 40 minutos. Acaba de entrar mi hijo en el aula. Acércale un micrófono, Juan.  
No, acércaselo, no puede saludar, saluda.  
No sé, a ver si quieres bailar.  
No va a haber, no creas expectativas, herramientas. Luis, no me interrumpas, es broma, le quiero a ellos. A ver, acabo de compartir herramientas curiosas y , o sea, a ver, Google Labs es brutal lo que tiene. Voy al horno a ver si está ha venido mi hijo y me estoy creciendo. Voy a ver cómo está el pollo y el horno.  
¿El pollo, el pollo del horno ya está, vale?  
Saco sin ver lo que ha sacado, sin ver lo que ha sacado dentro de Google Labs. Os quiero enseñar una herramienta que se llama Flow Music. Flow Music. ¿Dónde está Stitch Google Flow Music? ¿La veis todos? Abro Google Flow Music y le digo.  
Quiero que me conviertas esto en un éxito del verano que se entienda y tenga aires gallegos con.  
Gaitas y todo.  
Dale bro, te amo, dale bro, te amo fundamental, perdón.  
A ver, control C.  
Espera, a ver, os pido, sí.  
Vale.  
Es que no.  
Oh, 5.  
Permíteme, si soy yo, ¿qué número es el que aparece Diana? ¿Qué número es el que aparece por el culo de la hinco? Perdón, lo siento.  
Lo siento.  
Lo siento.  
O sea, podría haber aparecido cualquier otro número, pero he visto a Dios ahí, ha entrado mi hijo, lo siento, a ver.  
Estoy creando expectativas, necesito.  
¿Necesito feedback? ¿Cómo vais? ¿Alguno sigue ahí o ya os he matado a todos? Google Flow Music Control V.  
Le doy.  
Está pensando importante, esto es Google Flow Music, que si esto se lo hubiera retranca digital en Ourense.  
Está generando 2, está generando 2, 2 fundamental. Si esto se lo digo a Gemini, Gemini invoca a Google Flow Music, Gemini invoca a Google Flow Music.  
Pero esto es una herramienta independiente.  
Si esto no es liderazgo.  
¿Si esto no es liderazgo, qué es poesía? Juan, ¿qué es poesía? ¿Qué es música?  
Tú eres poesía.  
Vamos a ello. Esperad, perdonad, os pido disculpas. A ver, elegid.  
No preference, quiero todos, a ver cómo quiero desde el principio.  
¿Voy a voy a con este, vale?  
¿Dónde está?  
A ver, no quiero elegir, quiero todas.  
No quiero elegir.  
Quiero todas.  
Why?  
No lo sé, lo he intentado, pero se lo he pedido y me las he dado a todas. Empiezo por retranca digital en Ourense.  
No lo voy a bajar, que venga Fran.  
No, oye, Juan.  
E.  
Good job.  
Check.  
Como que hablan de la.  
España.  
Roberto.  
Sí.  
Sí.  
un desastre Luis un caótico total mientras él Busca un archivo en local él se defiende soy de la Virgen del puño cerrado mi Diana responde me tienes el cerebro mariano en primera vida está Juan  
que para él es lo mejor de pronto entra Miguel Ángel presidente mi señor aprendimiento y mucho nivel subnormal no tienes ni idea se gritan los dos a la vez desde Zaragoza callado conectado esta Chema  
En un espacio compartido, resolviendo el dilema. Teclea que teclea, sin poder usar el micrófono de su sala. Sabe el Fable 5 y la innovación no le resbala. ¡Mamma mia! ¡Por eso va la gana Andrea! Gracias, Miguel, la Italita buscando la bolsa con mucho afán, Luis. Dime del despedimiento.  
¿Las acciones dónde van? Armando desde Alicante, vigila la escena y el power es el que envenena. Alejandro no da basto, lo escucha a velocidad gordo.  
Vamos al siguiente.  
Claro que.  
Sí.  
Esto me suena más a cumbia.  
Papa.  
I.  
¿Es el cierre, no? A ver, es el cierre, voy a.  
Y esta es la primera.  
Hola.  
de la inteligencia artificial que arranca el compás de esta muñeca ra tecnológica desde Ourense, aquí está el trope Luis siempre al mando, que habla tan rápido que parece que está volando. Esto acaba mal y a su lado está Diana, su mujer y salvación.  
Mientras él busca un arco local.  
A mí me gusta más, a mí me gustó más esta.  
La segunda, a mí me ha de.  
Estoy un poco con Juan. A ver, vamos.  
Muy de.  
Muy de orquesta de pueblo.  
Quiero algo mucho más elegante.  
No.  
A ver, importante, ¿estáis por ahí?  
Importante.  
La información que le he dado de partida es brutal, que son las transcripciones de las propias clases. Luego a Google Flow le he dado la letra ya hecha. Podría no haberle dado la letra hecha y entonces se lo hubiera imaginado más. También la letra que le he dado hecha no me la he llegado a leer.  
No sé si estáis escuchando, hay otra música.  
Que suene la galleta de la inteligencia artificial que arranca con parte esta primera rap tecnológica desde Ourense. Ahora no lo oyen, Fenomenal.  
Con un proceso, que locura mental, ya se lo ha dicho Luis, sabes demasiada si esto acaba mal y a su lado está Diana su mujer y salvación, que lo mira y suspira con mucha resignación. Eres un desastre, Luis, un caótico total, dice Diana mientras él busca un archivo en local.  
Con él se detiende, soy de la Virgen del puño cerrado.  
y Diana responde me tienes el cerebro mareado en primera fila está Juan el Gallego Mola o no Mola  
Hold.  
Pues aún hay más.  
Vamos a.  
Google Flow video.  
Vamos a Google Flow Vídeo.  
Esto es todo lo que os estoy enseñando, hay versión gratuita y de pago.  
Para la música, la versión vamos a vídeo.  
¿Dónde está?  
Este Google Flow Vídeo.  
A ver, aquí tarda un poquito más en procesar y luego, dependiendo de las imágenes.  
Tardo un poquito más en procesar, le subes una foto, voy a ver el histórico de proyectos, mirad.  
Con esta foto.  
Bueno, y es que encaja con nano banana, han cambiado nano banana.  
Con esta foto, esta es la foto que subí en el IEVE.  
El negocio es la negación del ocio. Grábatelo bien. La inercia de la escuela es la masa de un tren. El maquinista pita pero no puede frenar. ¿Vas a saltar de vía o te vas a dejar aplastar?  
O sea, a partir de esta foto hace este vídeo.  
No hay más, o sea, lo he hecho. o sea.  
Tampoco estamos en, o sea, a ver más vídeos, no, este es uno en concreto.  
Aquí aparecerá familia.  
Esta es Diana, no estaba vestida de no estaba yo disfrazado de romano. Le pedí antes a Geminay que me disfrazara de romano.  
Vale, me piden por favor que no saque estos vídeos.  
O sea, yo no tengo un disfraz de romano.  
Tengo más en algún sitio, yo he estado más.  
A ver.  
Jugar.  
Tengo 1000 puntos que se actúa, o sea, no tengo 1000 puntos que son gratis. Crear un vídeo que cuesta, no sé si son 50, o sea, no lo hago por el tiempo, o sea, no lo dejo de hacer, no por el coste de los tokens, que serán 50, sino por el tiempo. O sea, me quedan 25 minutos de curso.  
Y me he metido con todas las aplicaciones de el Google Labs. Quiero hablar de 2 cosas más antes de acabar. Si tenéis cualquier pregunta, por favor, hacérmela.  
Si tenéis cualquier pregunta, por favor, hacérmela. A ver, y luego sigo en el WhatsApp. O sea, no me voy de aquí, ya desaparezco y os seguiré pasando enlaces, pero sí que quiero para mí esto.  
Esto es importante en cuanto a.  
¿En cuanto a?  
La cantidad de material que genera.  
Google, esta semana, ¿os acordáis que el martes vimos Nano Banana?  
El nano banana, el nuevo que ha sacado nana banana, pues es que el nano banana nuevo afecta a todo esto.  
Hace que todas estas herramientas sean cada vez mejor, se realimentan unos a otros. Antes de ayer estuvimos hablando de convergencia. La convergencia que hay entre tecnologías es brutal.  
¿Y sigo aquí dónde está? ¿Dónde está? Tenía un Gemini por ahí, que es al que voy a ir. Gemini. Voy a recuperar el Gemini en el que estaba.  
Y que bien en Wayú fuera.  
A.  
Telegram fuera.  
Alguna pregunta de mi clon, lo voy a cerrar.  
Aquí es brutal.  
Es brutal.  
Es brutal.  
¿Chema, estás escribiendo?  
Chun Chun.  
Me quedan 2 cosas y tengo tiempo de sobra, o sea, en parte estoy parando para que haya un proceso de asimilación. los Vamos a ver cuál sería la recomendación más importante que nos darías sobre tu clon. Me voy a hacer uno y decir no dejes de hacer esto, ¿vale?  
Os cuento el mío, yo es a ver, salgo en medios de comunicación.  
Y luego escribo en LinkedIn, yo tengo 2, tenía 2 Excels, 2 Excels, uno donde iba anotando todas las publicaciones de LinkedIn y otro Excel donde.  
Donde donde tenía todas las el enlace de la página web en la en el cual salgo en medios. Lo primero que hice en el puente de mayo es que luego lo he ordenado. En el puente de mayo fueron dentro de archivo.  
Esto es como la parte antigua de la catedral que está metida, que luego se ha ido construyendo sobre la catedral. Yo lo primero que hice fueron estas 2 carpetas. Hice un script.  
Esto es todo lo que he publicado en LinkedIn, todo lo que he publicado en LinkedIn, que esto es un script que se mete en LinkedIn y te coge aquí el post de LinkedIn que has hecho.  
Pero.  
Pues antes publicaba.  
Cada mes, cada ahora que tengo todo automatizado, o sea, soy yo el que bueno, soy yo el que escribe, soy yo el que escribe con la ayuda de la IA, el al botón de publicar en LinkedIn lo aprieto yo.  
Pero público.  
Cada 5 días, cada 6 días, perdón, cada 5 días no, 5 publicaciones, o sea, entre 2 publicaciones a la semana y 5 publicaciones a la semana.  
Entre 2 y 5, pero.  
A ver, no público a diario por no saturar a la a la gente. Luego una publicación me requiere un poquito de cada publicación, me requiere un poquito de esfuerzo. No estoy vacilando cuando digo un poquito de esfuerzo, o sea, un poquito de esfuerzo es un poquito, no es mucho.  
Ya prepa, dime.  
Preparar una clase me requiere mucho más esfuerzo, pero esta es la que publiqué antes de ayer. La hice por la tarde sobre la salida a bolsa de Space X. Importante, yo esto en mi cabeza ya estaba de antes y luego uso LinkedIn en parte para recibir feedback de la gente que comenta.  
Yo de la gente que me sigue, esta es la que publiqué, o sea, para este curso, pues cuando estaba preparando el curso me acordé, o sea, esta imagen vino a mi mente.  
Y esta la he hecho con GPT.  
Esto fue.  
Diana que está aquí puede darte.  
Estaba hablando con ella y le dije, *****, qué idea se me ha ocurrido los nómadas, los pueblos nómadas. Me gustaría saber más de pueblos nómadas, porque además aplicarían al nómada digital. Le dije a GPT que me diera, o sea, esto que os acabo de decir tal cual os lo he dicho, GPT.  
Me lo Me hizo una, o sea, mongoles, beduinos, tuaregs, samis. Cada uno de estos pueblos tienen su historia.  
Le pedí una infografía y mediana.  
Sí, ahora voy a aproveche más, le pedí una infografía, luego esto, o sea, a ver todo esto que parece que le he dedicado mucho, mucho tiempo.  
Son publicaciones que se generan con la IA prácticamente en automático.  
¿Dónde estás Juanque?  
A la décima planta.  
Cómo mola, me quedan, voy ahora con Chema, voy ahora con Chema, causas.  
Con el corazoncito, a ver, luego yo el LinkedIn es que me tocaron de LinkedIn hace tiempo y soy Top Voice, que eso hace, o sea, me refiero yo a LinkedIn, soy su empleado gratis.  
Que me viene bien porque tengo visibilidad.  
Pero yo trabajo gratis a cambio de abrazos y reconocimiento público para LinkedIn, pero LinkedIn yo lo uso para pensar en voz alta con gente que no conozco físicamente.  
Yo tengo lo de Space X, la salida a bolsa, es lo más, los satélites. Y ayer vino José Luis Montiel y me estuvo preguntando por los satélites de Space X, que es una cosa, o sea, ya estamos acabando el curso. O sea, me refiero, queda poco tiempo, hoy no es, o sea, hoy no es el día para abrir el melón de Space X.  
E.  
La dime, Diana, que decía Chema.  
Pues sí, la recomendación Diana, Diana, eso es lo que estaba contestando. En mi caso concreto, lo que hice fue empezar por LinkedIn.  
Y empezar por las intervenciones en medios estas intervenciones.  
Esto es lo que ejecuta un script. Esto una vez tienes, yo tenía los enlaces, tenía estos enlaces.  
Y si tú le dices antigravity que cuando yo empecé con esto no había antigravity, fue era GPT el que me decía el programa a hacer en Python.  
Ahora empezar es mucho más cómodo.  
Yo le decía, quiero, empecé a usar obsidian sin que hubiera antigravity y yo a GPT le decía, hazme un programa con Python para automatizar la subida de archivos. Me hacía el script, yo ejecutaba el script.  
Y veía como esos archivos se iban llenando por arte de magia.  
En el bault y me emocionaba.  
O sea, cuando ves, o sea, piensa Chema respondiendo a tu pregunta, Chema, ¿a qué te dedicas o dime un hobby?  
¿Te automatizas en LinkedIn o automatizas? No, LinkedIn para automatizar es ****** porque te te obliga a cambiar, o sea, a automatizar. Si tú te das el enlace, el enlace es público, por lo tanto cada 2, cada 3, cuatro semanas o cada 2 meses con antigravity ya.  
Le digo, mira, LinkedIn ha cambiado el modo, hackealo.  
Atigravity lo hace, pim, pam, y lo vuelvo a así. A ver, Juan, Chema, no.  
¿Tema, no?  
Chema, no me digas esto cuando quedan 15 minutos.  
¿Te acuerdas las cosas que le decía? Sí, ríete, ríete, me **** en la madre. Perdón, perdón, perdón, perdón, no quiero faltar a nadie, solo a Miguel Ángel.  
¿Has visto al Chema lo que se dedica como hobby?  
Pues si te dedicas a la magia, el mejor libro del mundo.  
No.  
Este la buena magia.  
Pero que no me lo diga el último día.  
Benditos.  
Pasa, me quiero casar contigo, Diana, Luis, Luis, llama a Chema, papá.  
Papá.  
La buena magia.  
What?  
Buah, a ver, Chema.  
Gema.  
Mira, esta no la ves venir, hay que esta no la ves venir. Juan, mira la pizarra.  
Como tú.  
No, ya he dicho como tú cuando la magia.  
No.  
Yeah.  
Es que Luis.  
Tienes que conocer a Manuel, ahora vendrá.  
Y cuando le veas, entenderás él como tú, eso es.  
Yo creo que no es para tanto. ¿El qué? ¿Quién? ¿Quién está hablando? ¿Tema o Manuel? Manuel, le dejes compartir eso que tú ya sabes.  
Venga, dale, número.  
A ver, queda poco tiempo y me quedan muchas cosas que hacer en este tiempo, la buena magia.  
Ya existía esto de antes.  
Ya existía esto, vale.  
No te preocupes que esto no lo voy a compartir con nadie. No te preocupes que esto no lo comparto con nadie, no sale de aquí, Manuel.  
¿Lo has hecho con una banana?  
A ver, Manuel, perdón, Chema, respondiéndote a ti.  
Si tienes una biblioteca, yo empezaría con fichas de la biblioteca, por ejemplo, dentro de mi propio vault. A mí me encanta leer.  
Me encanta leer y todos los libros que voy leyendo.  
Tengo Google Read y es y esto es otra automatización con Google Read, Google, perdón, Google Read, no, Google.  
Good reads, good reads.  
Gurrids es un una red social donde tú puedes, los libros que te vas leyendo los vas metiendo.  
Pues yo de Google Reads, si tú tienes todos tus libros subidos, o sea, estoy pensando en voz alta. En tu caso concreto, si tienes un archivo doc, Chema, si tienes un una carpeta con magia, con trucos de magia, con no sé qué o con libros o con biblioteca, pues una idea puede ser el automatizar.  
Esa carpeta e ir creando notas, o sea, empieza con algo que cuando lo veas te mole y te anime a seguir.  
Me queda 12 minutos, voy a empezar a meterle un poco de velocidad a esto. Me interesa mucho que conozcáis GitHub.  
¿Qué es Jeep Har?  
Manuel, ¿qué es GitHub? Necesito un ingeniero en mi vida, un profesor de informática en mi vida.  
Un repositorio.  
Es una plataforma para desarrolladores, plataforma para desarrolladores, compartir programas de código.  
Abierto.  
Compartir programas de código abierto, GitHub es una plataforma en la cual me voy a conectar.  
Me han pedido un código de verificación, a ver, me voy a conectar desde Google.  
A ver si me pide un código.  
No, si ya tenía a ver, olvidaos, no me voy a conectar.  
Os la voy a enseñar sin conectarme.  
¿Cómo puedo ver mi GitHub?  
No puedo ver mi.  
A ver.  
Sí, lo tengo, sí lo comparto.  
Oh, perdón.  
Pido, sí, en el historial, *****.  
En el historial.  
Este es mi en mi historial.  
Aquí ya está, es el de Garvía. Perfecto, os cuento, Jithab, en qué consiste.  
Chema.  
Eres un mago.  
Efectivamente, a ver, GitHub es un repositorio. En este caso esto es mío, pero os he pasado el, por ejemplo, hablamos de criptos aquí.  
A ver, yo no soy, o sea, no tengo mucha visibilidad y tampoco. ¿Esto qué es el GitHub del Bitcoin? Aquí podéis ver todo el histórico del Bitcoin desde que nació. ¿Os acordáis que hemos hablado de cripto en algún momento? En el GitHub del Bitcoin tenéis cripto.  
¿Por qué os he enseñado el mío en concreto? Porque GitHub no solo permite a los programadores compartir información, sino que hay una cosa maravillosa que se llama GitHub Pages.  
Que GitHub Pages permite compartir páginas web.  
Este es el servidor que uso para alojar.  
¿Mi web qué es?  
Garvia.es con git hub.  
Belles.  
GitHub permite alojar páginas web. Lo que os acabo de dar es un servidor gratis. Bendita Virgen del Puño.  
Un servidor y además no es un servidor cutre salchichero, es un servidor que GitHub ha alojado por Microsoft para todos los programadores y que funciona a una velocidad tremenda. Esta es mi página web, el index de la web, asignaturas y os voy a buscar a vosotros asignaturas dentro de asignaturas.  
Está.  
Está tecnología y liderazgo de Vigo, aquí está el index.  
El index y si me meto, perdón, el index bueno está aquí dentro, el index index bueno está aquí dentro. Perdón, este es el index de la web.  
¿Y veis que este index es las son las tripas de la página web?  
¿Se entiende lo que acabo de explicar, Chema?  
Thank you.  
¿Cómo que no?  
A.  
Bueno, pero porque no la tengo indexada, o sea, la empecé a hacer en diciembre. Te cuento, llegan las vacaciones de diciembre y yo que soy profe tenía lo de mi baul y dije, me tengo que montar lo mismo de mi baul, pero la pregunta que has visto las preguntas que ha hecho Cristina, no Cristina, que me ha dicho.  
Es que estoy en el curso, pero no estoy en el grupo de WhatsApp. Necesitaba tener un enlace que yo lo comparto y dentro de ese enlace está todo lo que hemos visto en el curso.  
Y le dije a GPT, necesito alojar mi página gratis, ¿cómo qué me recomiendas hacer? Y me dice GitHub y yo no había usado GitHub nunca y digo, soy muy torpe, no sé programar, es que GitHub es para programadores y hoy con Manuel he estado haciendo bromitas de los cómics con la catedral y todo eso.  
Es que.  
¿El qué Luis Garvía, el qué quiere saber Garvía.es?  
La acabo de compartir en el grupo de WhatsApp, la tienes aquí garbía.es.  
¿Tema, esto entendido, no?  
Pues voy a por el siguiente, aún hay más.  
Y es que tenéis todo lo que queréis, lo que queráis del mundo lo tenéis.  
A ver, estoy cerrando el curso.  
Con mis alumnos gallegos.  
Estoy cerrando el curso con mis alumnos gallegos que soy gallegos y del resto de España, vale.  
A ver con mis alumnos.  
A ver, hay que esto es lo de la hay que ver.  
Estoy cerrando el curso con mis alumnos.  
Quedan 4 minutos, estoy cerrando el curso con mis alumnos.  
Son.  
Gallegos y del resto no son del son de toda España.  
Son de toda España.  
Quiero que en línea con los archivos anteteriores des una lista brutal de archivos de perdón de programas, fundamental de programas de código.  
Abierto.  
Clasificada por.  
Tipos de programas coma que les estalle la cabeza, diles que ha sido un placer, quedan 3 minutos de curso y que seguimos.  
Hablando por el grupo de WhatsApp.  
Pero la lista quiero que sea brutal, contexto.  
Del curso: 2 puntos, control V fundamental, le acabo de dar contexto del grupo.  
Yeah.  
Me quedan 3 minutos. Brutal cierre de curso, tecnología y liderazgo. 2026 UVIGO ha sido un auténtico placer compartir este curso de verano con vosotros en el campus de Ourense. Recordar flujos agénticos, LLMs locales y soberanía. Módulo uno, infraestructura cloud Zero Trust, módulo 3, log.  
A ver, esto está bien, esto está bien.  
Esto está bien.  
Pero.  
Hay que aportar algo, vamos con el cierre de curso.  
A ver, entorno sandbox.  
Yeah.  
Vale, esto tiene que ver con el curso en concreto, pero.  
¿Pero dónde está? ¿Dónde está? Me quedan 2 minutos.  
Y otro más que les sirva.  
¿Cómo?  
Personas humanas.  
Y con niños galegos, cosas útiles de verdad.  
A ver, esto esto está bien, pero le estoy retando. Retar a los modelos mola.  
Cosas, o sea, retar a los modelos mola. Este ni lo he leído, esto ni lo he leído.  
Y yo creo que, por ejemplo, no está. Bueno, da igual porque os he enseñado yo Google Flow Music, rotar a los soberanía Standard Notes, Kiwix, Free Tooth, Candor, Home Assistant. No me gusta.  
¿No has puesto?  
Garden Life.  
Bing.  
Thing Caden Life, sin Thing, queda 1 minuto.  
Mozilla.  
No te enrolles tanto y que sea bueno.  
Sin fin, Kaden Life, Mozilla, Thunderbird, Home Assist, Kiwix, Free Tooth, Thundor, Walla, a ver y.  
Y dogs.  
Excel.  
Falta ciberseguridad, o sea, cualquier tipo de herramienta que queráis ya es el tiempo, ya he cumplido cualquier tiempo, cualquier.  
Y son las cosas.  
A ver, esto es broma, broma, ya hemos digo broma, la vida, no sé si la vida es broma o si eso lo ha dicho alguien Juan.  
No lo sé.  
La vida es bella, eso sí, resumen, no quiero acabar el curso.  
Esto soy yo el que lo escribe y es mucho más importante que la morralla de LLM.  
Graciñas.  
Gracinias.  
Graciñas resumen que al final un placer a ver lo del código abierto. Hay muchos programas, muchos, muchos, muchos, cada vez más con la IA hay una convergencia brutal. Jesús, gracias a ti desde Ourense, que ahora voy a Madrid.  
Y Alicante, si te apetece, pásame el link de LinkedIn y nos conectamos por ahí. Si no, tampoco pasa nada. O sea, me refiero al final esto de lo que va es de compartir.  
Un verdadero placer, pues Chema, lo mismo te digo, Margarit, bendecido día, mis bendiciones para ti, Margarita, Alejandro, un placer, pero me añadiste, yo a ti no, dime cómo te llamas, Jesús, pregúntale a Hermes, no, Hermes, Hermes no lo vas a ver.  
Por eso te estoy preguntando, o sea, Hermes, Hermes sabe, o sea, es fundamental cuando trabajéis con la gente, saber lo que sabe Hermes y lo que no.  
En este, si no te Jesús, si no me dices tu nombre y apellidos ahora, o sea, si no.  
A ver.  
Que lo único es ahora.  
Esto es lo de Jesús Serrano, es muy bestia, este es de Microsoft, le quiero mucho y se dedica vídeo con IA.  
Dime a pedidos, Jesús, bueno, pásame el te hago a Jesús Vergara.  
Jesús Domínguez, es que el problema de estas cosas es, ay, calvo. *****, Chema, no quería hacer esto. A ver, vamos a parar la grabación. Yo paro la transcripción.
