# 🧾 Informe de Sesión — 9 de febrero de 2026

**Máster en Gestión de Riesgos**  
**Duración:** 1 h 20 min  
**Formato:** Clase demostrativa + debate guiado  
**Eje central:** IA aplicada, agentes, orquestadores, código abierto y riesgo tecnológico real

---

## 1. Naturaleza de la sesión

Sesión **no técnica en sentido clásico**, pero **crítica desde el punto de vista de riesgos**.  
El objetivo no fue “enseñar herramientas”, sino **reordenar la cabeza de los alumnos** respecto a:

- Qué es realmente un **LLM**
    
- Qué es un **agente**
    
- Qué es un **orquestador**
    
- Dónde está el **riesgo tecnológico real**
    
- Qué significa **usar IA en un entorno profesional regulado**
    

La clase funcionó como una **torre de control conceptual**: se sobrevolaron sistemas, arquitecturas, permisos, errores y consecuencias.

---

## 2. Mensaje troncal de la sesión

> **El riesgo no está en la herramienta.  
> Está en no entender la arquitectura.**

Se insistió en que:

- La IA **no es magia**
    
- Los términos inflados (“smart contract”, “agente”, “cloud”) **ocultan simplicidad técnica**
    
- El verdadero riesgo aparece cuando **no se entiende qué hace cada capa**
    

---

## 3. Marco conceptual presentado

### 3.1 LLM (Large Language Model)

- Motor básico: **prompt → respuesta**
    
- No decide, **responde**
    
- No tiene objetivos propios
    
- Riesgo bajo si se usa como interfaz conversacional
    

### 3.2 Agente

- **LLM + contexto persistente + una instrucción clara**
    
- Diseñado para **hacer siempre lo mismo**
    
- Reduce error humano
    
- Riesgo: **automatizar mal una mala instrucción**
    

Ejemplo conceptual trabajado:

> “Le subo una transcripción → me devuelve resumen y ficha”  
> Sin prompt adicional cada vez.

---

### 3.3 Orquestador de agentes

- Sistema que **coordina varios agentes**
    
- Decide qué agente actúa, cuándo y cómo
    
- Puede:
    
    - Crear ficheros
        
    - Ejecutar scripts
        
    - Abrir navegador
        
    - Leer carpetas
        
    - Automatizar flujos completos
        

👉 **Aquí aparece el riesgo serio**

---

## 4. Demostración práctica en directo (clave de la sesión)

Se mostró en tiempo real:

- Un **orquestador** funcionando
    
- Ejecutándose en un **ordenador físico independiente**
    
- Accediendo:
    
    - A navegador
        
    - A carpetas
        
    - A búsquedas web
        
- **Sin usar APIs**, sino autenticación directa
    

Esto permitió visualizar algo fundamental:

> **Un orquestador no “piensa”:  
> ejecuta exactamente lo que se le permite ejecutar.**

---

## 5. Riesgos tecnológicos analizados (en lenguaje de riesgos)

### 5.1 Riesgo operativo

- Borrado accidental de carpetas
    
- Ejecución de tareas no deseadas
    
- Automatización sin reversión
    

**Mitigación:**

- Sandboxes
    
- Control de permisos
    
- Versionado / rollback
    

---

### 5.2 Riesgo reputacional

- Envío de mensajes
    
- Respuestas automáticas no supervisadas
    
- Interacciones no deseadas con terceros
    

**Idea clave:**

> Para “liarla”, el usuario tiene que **autorizar previamente**.

---

### 5.3 Riesgo de seguridad / datos

- Instalación en el ordenador personal
    
- Acceso implícito a información sensible
    
- Exposición por mala configuración
    

**Mensaje claro al alumnado:**

> _Nunca_ probar estas herramientas en entornos con datos sensibles.

---

## 6. Arquitectura segura mostrada (modelo recomendado)

Se explicó un **modelo profesional de bajo riesgo**:

- Orquestador en:
    
    - Mini-PC dedicado **o**
        
    - Máquina virtual aislada
        
- Acceso:
    
    - Solo lectura a información crítica
        
- Sincronización:
    
    - Carpetas mediante herramientas descentralizadas
        
- Posibilidad de:
    
    - Borrado total tras ejecución
        

👉 En términos de riesgos: **segmentación + aislamiento + reversibilidad**

---

## 7. Código abierto vs código cerrado (bloque filosófico-estratégico)

Se introdujo el **código abierto** no como ideología, sino como **modelo de resiliencia**.

### Código cerrado

- Ecosistema controlado
    
- Menos fricción
    
- Menos flexibilidad
    
- Dependencia del proveedor
    

### Código abierto

- Comunidad desarrolla para comunidad
    
- Evolución acelerada
    
- Transparencia técnica
    
- **Ventaja estructural cuando se combina con IA**
    

Idea clave transmitida:

> Ningún sistema cerrado puede competir en velocidad  
> con una comunidad + IA + reutilización.

---

## 8. Software libre → Open Source (distinción importante)

Se explicó la evolución conceptual:

- **Software libre**: libertades de uso, estudio, redistribución y mejora
    
- Problema semántico del “free”
    
- **Open Source**:
    
    - Mismo espíritu
        
    - Permite modelo económico
        
    - Base del ecosistema profesional actual
        

Mensaje clave para alumnos:

> Se puede **vivir profesionalmente** del open source  
> sin vender licencias, vendiendo **criterio, instalación y mantenimiento**.

---

## 9. APIs y consumo (riesgo económico)

Se explicó con claridad:

- Qué es una API (llave ↔ cerradura)
    
- Diferencia entre:
    
    - Autenticación directa
        
    - Llamadas vía API
        
- El **coste en tokens**
    
- Cómo el consumo escala rápido cuando:
    
    - Hay grandes volúmenes de datos
        
    - Hay orquestación automática
        

Mensaje de riesgos:

> La IA mal diseñada no quiebra por fallo técnico,  
> quiebra por **coste invisible**.

---

## 10. Anonimización de datos (riesgo legal y compliance)

Se introdujo un concepto **clave para banca y consultoría**:

- Sustitución de identidades reales por códigos
    
- Procesamiento sobre datos anonimizados
    
- Reversión posterior
    

Mensaje importante:

> No es sofisticado:  
> es **disciplina previa al uso**.

---

## 11. Encaje con el Máster y con el mercado laboral

Se dejó claro al alumnado:

- No se les va a contratar como programadores
    
- Se les va a contratar por:
    
    - Entender modelos
        
    - Saber pedirlos
        
    - Saber supervisarlos
        
    - Saber detectar errores y riesgos
        

Frase implícita de la sesión:

> “No saber programar ya no es excusa.  
> No entender lo que pasa sí lo es.”

---

## 12. Conexión con la asignatura de Riesgos

La sesión aterrizó en una idea central del máster:

> **El riesgo no es una asignatura.  
> Es una arquitectura de decisiones.**

- Riesgo tecnológico
    
- Riesgo operativo
    
- Riesgo reputacional
    
- Riesgo de modelo
    
- Riesgo de dependencia
    

Todo **antes** de regulación, compliance o informes.

---

## 13. Cierre de la sesión

Se explicó la estructura futura de la asignatura compartida:

- Bloque de **cultura financiera y regulatoria**
    
- Repasos rápidos para homogeneizar nivel
    
- Modelización financiera aplicada
    
- Riesgos emergentes: IA, cripto, cloud, descentralización
    

La sesión terminó **a propósito** con sensación de saturación controlada:

> “No hace falta entenderlo todo hoy.  
> Hace falta saber **por dónde no meterse**.”

---

## 14. Takeaways para el alumno

- Un LLM responde, un agente ejecuta, un orquestador coordina
    
- El riesgo no es la IA, es **el permiso**
    
- Nunca experimentar con datos sensibles
    
- Código abierto ≠ gratis
    
- IA + open source = acelerador brutal
    
- En riesgos, **no entender el sistema es el mayor riesgo**
    

## Apendice 1. Software libre
[openclaw] Perfecto. Aquí tienes una **lista ordenada (de fácil → pro)** para que entren en código abierto sin perderse, con **enlaces oficiales** y 1 línea de “para qué sirve”. (La idea es que empiecen por el bloque 1 y, si les engancha, sigan bajando).

### BLOQUE 1 — “PACK MÍNIMO” (si solo instalan 6 cosas)
1) Firefox (navegador)
https://www.mozilla.org/firefox/
Alternativa real a Chrome + buen ecosistema de privacidad/extensiones.

2) uBlock Origin (bloqueador de anuncios/trackers)
https://ublockorigin.com/
Si quieren “internet sin basura”, esto es lo primero.

3) Bitwarden (gestor de contraseñas, open source)
https://bitwarden.com/
Higiene digital seria (y sirve para vida profesional).

4) LibreOffice (ofimática)
https://www.libreoffice.org/
Word/Excel/PowerPoint sin depender de Microsoft para todo.

5) VLC (vídeo/audio)
https://www.videolan.org/vlc/
Reproduce todo. Cero drama.

6) 7‑Zip (compresor)
https://www.7-zip.org/
Zip/Rar/7z y ya está.

### BLOQUE 2 — NOTAS, CONOCIMIENTO Y “SEGUNDO CEREBRO”
7) Obsidian (no es 100% open source, pero usa Markdown y es local-first)
https://obsidian.md/
Puente perfecto: lo importante es que tus notas son archivos .md (te las llevas a cualquier sitio).

8) Joplin (alternativa 100% open source a Obsidian/Evernote)
https://joplinapp.org/
Notas + Markdown + sync opcional.

### BLOQUE 3 — PRIVACIDAD / COMUNICACIÓN / NUBE PROPIA
9) Signal (mensajería)
https://signal.org/
Open source y muy buen estándar.

10) Proton (correo; apps no todas son open source, pero enfoque privacidad)
https://proton.me/
Si quieres separar “vida personal” de “vida profesional”.

11) Nextcloud (tu Google Drive propio)
https://nextcloud.com/
Para los que quieran soberanía: archivos, calendario, contactos.

### BLOQUE 4 — PROGRAMAR / AUTOMATIZAR (sin volverse loco)
12) Visual Studio Code (editor; es “source-available”, alternativa 100%: VSCodium)
VS Code: https://code.visualstudio.com/
VSCodium: https://vscodium.com/
Para empezar a tocar código en serio.

13) Python
https://www.python.org/
El idioma “universal” para automatizar y analizar.

14) Git (control de versiones)
https://git-scm.com/
La herramienta básica para pensar como ingeniero (aunque no sean ingenieros).

15) Docker (contenedores; no todo es open source puro, pero estándar brutal)
https://www.docker.com/
Para montar servicios y no romper el ordenador.

### BLOQUE 5 — MULTIMEDIA / CREATIVIDAD (OPEN SOURCE DE VERDAD)
16) GIMP (imagen)
https://www.gimp.org/
Edición tipo Photoshop.

17) Inkscape (vectorial)
https://inkscape.org/
Alternativa a Illustrator.

18) Blender (3D)
https://www.blender.org/
Industria real, no “hobby”.

19) Kdenlive (vídeo)
https://kdenlive.org/
Edición de vídeo potente.

20) Audacity (audio)
https://www.audacityteam.org/
Edición de audio/podcast.

### BLOQUE 6 — SEGURIDAD / BACKUP (para adultos)
21) KeePassXC (gestor de contraseñas offline)
https://keepassxc.org/
Si quieren 100% local sin depender de servicio.

22) VeraCrypt (cifrado de disco/archivos)
https://www.veracrypt.fr/
Para cifrar carpetas/USBs sensibles.

23) Duplicati (backups)
https://www.duplicati.com/
Backups programados, cifrados.


## Apendice 2. Set-up de Open Claw
[openclaw] El setup donde estoy corriendo ahora (y que tengo documentado en tu vault) es este:

*Hardware (servidor casa)*
- *MiniPC:* GMKtec NucBox G3 Plus (Intel *N150*, 4C/4T, turbo ~3.6GHz)
- *RAM:* *16 GB DDR4-3200* (expandible a 32GB)
- *SSD:* *512 GB NVMe*
- *Red:* *Ethernet 2.5G* + Wi‑Fi 6 / BT 5.2

*Host / runtime (OpenClaw)*
- Corre en *Windows (local-first)*
- *Host name:* NucBoxG3_Plus


# Transcripción
9 de febrero de 2026, 8:19p.m.
1 h 20 min 44 s
A ver.  
A ver por partes.  
Algo me habéis preguntado.  
Cloudbot, Cloudbot. Bueno, yo he estado viendo básicamente la gente que lo usa, gente que no sabe que te pueden hacer el lío básicamente, porque sí, o sea, tú te lo puedes cargar libremente, te explicas cómo es por ejemplo. Ahora te explico cómo lo tengo usado yo y cómo, eso es.  
Espera, le he hecho un si no me hola, tengo clase con mis alumnos de riesgos, los del Murf.  
¿Tienes ficha en mi bault?  
Dentro de asigna.  
Duras, dime.  
Un resumen de todas las sesiones que llevo con ellos. Sí, espera. ¿Cómo que datos y que trabaje con los datos? para que entre.  
Cantales es credenciales ante un saqueo, eso de esa credencial ya están en el aire. Espera que tienes razón, tienes, entiendo lo que estás diciendo.  
Y antes de que sigas te digo, Ángel, que tienes razón. Lo que pasa es que además de tener razón, el WhatsApp se suele quedar colgado. Voy a ver si está trabajando.  
Vale, el WhatsApp se queda colgado. Déjame que abre a Telegram, que ese sí que funciona.  
La gran web.  
Pero lo haces una vez y ya está.  
I want.  
Ahora te lo voy a enseñar yo.  
No te da permiso si ya está.  
A ver, es que yo con Telegram no sé meterme, da igual.  
A ver, da igual, da igual.  
Da igual, a ver, Clau, bueno, vamos por partes, empiezo con la clase y luego nos.  
mira qué bien.  
¿Habéis visto que le he preguntado a WhatsApp? Hola, tengo clases con mis alumnos, los del tal. Vale, resumen rápido, pero con chicha de todo lo que llevas dado hasta ahora con ellos. Curso 2526, bloque principal, esperar a ver si esto está bien, perfecto, bloque principal.  
Principio de identificación y gestión de riesgos, sesiones uno a 5, sesión uno el 14 del 10, geopolítica como marco, sesión 222 del 10 les diste el sistema operativo obsidia más markdown más enlaces, sesión 3, riesgo de tipo de interés, sesión cuatro, política monetaria, sesión 5, curva de tipos, curva swap.  
Forwards.  
Si me dices en una frase qué vas a hacer hoy con ellos, tema exacto, objetivo, te lo convierto en un guión de apertura de 3 minutos más 5 preguntas. Pues esperar que ya que estoy con ellos, ahora os explico esto de qué va.  
Ya que estoy con vosotros.  
Vosotros sois estos.  
Yeah.  
¿Esto sois vosotros, no?  
Sí.  
Y le voy a pasar la le voy a pasar el PowerPoint.  
Yeah.  
¿Habéis visto que igual que se lo he pasado a él el PowerPoint directamente? Vale, pues buenas, Miguel Terry, esto de guapo me ha llamado guapo, lo siento. Y David Angulo, jaj, la he enviado por correo.  
Y esto es gracias, este es Pablo y este es mi hijo Pablo.  
¿Que le ha hecho Sticker? No, esta es Diana, aquí estamos, perdón.  
Quiero abrir.  
Gestión, os cuento y os cuento aplicación, o sea, respondiendo a.  
Respondiendo a Ángel.  
Y además, voy a intentar acabar a menos 20.  
Menos 20, menos 20 las 10:00 las 10:40.  
Voy a intentar acabar a las 10:00, no voy a intentarlo, voy a acabar a las 10:40 encendido y esto antes de eso.  
A ver, esto que os voy a pasar es drogadura, esto no recomiendo a nadie.  
Cortana.  
No, a ver, no es lo que voy a hacer, primero os voy a pasar.  
Esto es lo de que me hable el.  
WhatsApp.  
Mucho cuidado con ello.  
Yeah.  
¿Se puede cerrar la puerta?  
Sí, sí.  
Yeah.  
Good.  
Vale, esto es lo de que me hable el WhatsApp. Os cuento. Y vamos por partes y ahora vemos de qué vamos, de qué va la asignatura. Pero antes de ver de qué va la asignatura, y además me gusta daros, daros estos contenidos después de David.  
Porque David os da una visión del mundo.  
¿Y este te quiero 2 cuadras, que entre antegraviviendo te cuidas por la mano, no es compatible, o sea, me refiero, son compatibles las 2 visiones?  
David, David, lo que os enseño son fundamentos y luego tú con Antigravity puedes volar y muchas veces con Antigravity para poder volar más tienes que conocer los fundamentos. O sea, tienes que saber lo que es una librería, tienes que saber, os habrá explicado David hoy que es una librería. ¿Cómo se descargan? Tenéis todos Python.  
Sí.  
Pues es absolutamente compatible, es más, se realimentan brutalmente, os cuento.  
Un LLM, todos sabéis lo que es.  
Es una estructura muy básica, es la de un prompt. Tú le preguntas algo y te responde.  
Al final.  
La idea del LLM del prompt está en todo lo que vamos a ver, todo lo que o sea, yo que acabo de hacer con mi WhatsApp.  
Un pronto, la primera línea de contacto es un LLM.  
No, dentro de los LLMs.  
Tenemos.  
Los pagentes.  
¿Qué es un agente?  
Importante, una gente no es vamos a hablar de cripto en algún momento, no tardando mucho.  
Un smart contract no es ni smart ni un contrato. Un smart contract es un programita que se ejecuta de forma automática. No sé si me explico. Cuidado con las palabras, porque muchas veces cuando se usan determinadas palabras, parece, o sea, las palabras dan poderes sobrenaturales al concepto y realmente un smart contract es simplemente un programa informático que se.  
Se ejecuta de forma automática, vale.  
¿Qué es un agente?  
Pues no es más que.  
123 X.  
Picheros.  
¿MD con contexto, ¿entendéis lo que acabo de decir? ¿Sabéis lo que es un fichero MD? No, un fichero MD es simplemente los ficheros que yo os mando con las transcripciones. Es un fichero de texto plano, que los ficheros estos son los que leen, o sea, este tipo de ficheros.  
Es un fichero texto plano con instrucciones, o sea, una gente son x ficheros dando una serie de instrucciones de contexto.  
Luego más una instrucción.  
Sencilla.  
Una o 2, pero prefiero poner más una instrucción sencilla.  
¿Por qué es un agente?  
Pues es un LLM al que le pides una cosa y te la hace.  
Un LM, tú hablas con él, no, tú puedes hablar y le puedes pedir al LM lo que sea y él te va a responder lo que le dé la gana. Tú le preguntas y él te responde. Todos tenéis claro lo que son los LLMS, en cambio un agente.  
Es algo que tú programas. La programación de la gente es muy sencilla porque es decirle lo que tiene que hacer.  
Por ejemplo, o sea, yo no lo tengo hecho con la gente, no lo tengo hecho, pues no sé por qué.  
Pero lo podría hacer con un agente, tú les yo a la gente le subo la transcripción y me da el fichero y el resumen.  
El agente recibe una transcripción y te da o le subes un PDF y te da, o sea, no tienes ni que darle un prompt, que le puedes dar luego un prompt, ¿me seguís?  
Bien, y hay un tercer nivel.  
Es antigravity.  
Oh.  
Open cloud.  
Que lo que es antigrado y openclaw son orquestadores de agentes.  
¿Por qué estadores?  
¿Qué es un orquestador?  
El que dirige a varios agentes a que hagan cosas.  
¿Habéis usado Antigravity todos?  
Si no lo habéis usado, no hay problema.  
Pero los que lo hayáis usado, supongo, espero que hayáis sentido cosas.  
A.  
The resume.  
De hecho, con su tiempo antigravity se puede adoptar, ahí automatizar en el proceso.  
Vamos por partes, porque entre gente que no lo ha usado y lo que estás proponiendo es como subirse a un avión y perderle el miedo al avión y ponerte a pilotar un caza.  
Y.  
¿Qué es antigravity, que es un orquestador?  
La entrada es un LLM, pero tú le hablas.  
Y él en relación con la instrucción que le has dado.  
Busca la forma.  
De hacerlo y para buscar la forma de hacerlo te pueden montar agentes, te pueden montar programas en Python, te puede hacer lo que sea.  
Tú le puedes decir, hazte una página web, sí, y te la hace, dicho lo cual.  
Aquí es donde David es importante porque lo suyo es que todo lo que le vayas pidiendo antigravity que vaya haciendo tú desde arriba, lo vayas supervisando y controlando.  
Sí, bien, hasta aquí bien, no antigravity, lo abres en una carpeta, lo ejecutas en una carpeta.  
Y ya está, no hay riesgo, no hay riesgo porque tú eres el que lo ejecutas. Él, antes de tocar algo, te pide permiso. A ver, no hay riesgo.  
Bueno, tiene control de revisiones. O sea, si quieres dar marcha atrás en algún momento, puedes dar marcha atrás. Y lo que sí que os pediría es que siempre lo uséis con cuidado. O sea, nunca entréis, nunca metáis antigravity en un sitio donde haya datos sensibles, usarlo siempre en un sandbox. ¿Sabéis lo que es un sandbox?  
Un sandbox es un arenero, es una carpeta.  
Aparte donde dices pues voy a meter mano aquí si se borra esta carpeta o desaparece, no tengo ningún problema.  
Hasta aquí bien.  
O sea, antigravity, el poder que puede llegar a tener y os estoy mirando dónde está César. Vale, digo, miro a César o miro a Ángel por vuestros conocimientos, por si estoy metiendo la pata con lo que digo, el riesgo máximo.  
Al que te enfrentas con antigravity.  
Es que te borre el archivo entero o perder el archivo entero en el que estás trabajando.  
Y luego, según le vas dando permisos, te puede mandar un puede mandar emails a quien quiera. O sea, me refiero, si tú eres un poco Berzas, pues puedes acabar mandando emails a gente. Hay un riesgo de reputacional ahí, pero que antigravity.  
No me preocupa porque.  
Porque para liar la parda tú tienes que tener un conocimiento previo.  
¿Me estoy explicando?  
Bien, ahora vamos.  
Ah.  
Open Cloud.  
Santigravity es de Google.  
Antigravity es una herramienta de Google y la han sacado a producción después de que esté hiper súper probada.  
Open Cloud.  
Es un señor en su casa de código abierto.  
Un segundito.  
Mira, recibido PDF, te dejo un resumen nacionable para abrir la clase de hoy. ¿Qué haces hoy? Intro del curso, objetivo del curso, visión práctica.  
Objetivo del curso, visión práctica de cómo se integran los riesgos en una empresa bancaria y el marco regulatorio. Cambio de época, de esto ya hemos hablado, caso práctico, porque la universidad no consigue prácticas. Situación del sistema financiero más ideas introduces IFRS 9. De esto hablaremos.  
Cloud, código abierto, descentralización, apertura. Hoy arrancamos gestión estratégica de riesgos dentro de la empresa con una idea simple: el riesgo no es un tema ni una casilla de compliance, es la forma en la que una empresa, y especialmente un banco, toma decisiones bajo incertidumbre.  
El objetivo del curso es práctico, ver cómo se integran los riesgos en la gestión. ¿Qué implicación tiene para la estrategia la organización y el gobierno interno y cómo la regulación?  
Estructura para bien y para mal el terreno de juegos.  
Y lo vamos a hacer desde un cambio de época, cloud, software, o Tc, descentralización, nuevas formas de intermediación y una presión constante sobre perfecto, el riesgo no es teoría, es arquitectura.  
De las decisiones, esto.  
Tanto permiso para que ahora te explico, Ahora te explico, esto es un resumen de.  
¿Habéis visto lo que he hecho o no? Se lo he al mismo tiempo que os lo he mandado a vosotros. Ahí va, a ver cómo vuelves.  
Bien.  
Go in the block for that local.  
Resumen hasta ahora, un LLM agentes y después de agentes antigravity open cloud como orquestadores de agentes, vale.  
Y luego, en paralelo con eso, os he mandado el PowerPoint de la sesión de hoy.  
Y se lo he metido a Cloudbot. Vale, os estaba explicando qué es Cloudbot para explicaros qué es Cloudbot.  
David Soto.  
David Soto.  
Este.  
¿Copiar David Soto, dónde está esto sois vosotros?  
No, but.  
A ver.  
No te preocupes, a ver por qué os he puesto esto, no por la historia, que ahora os lo cuento, sino hay un señor que se llama Peter Steinberg, Steinberg.  
Sinverger.  
Peter Steinberger es un programador.  
¿Que tienes GitHub? ¿Lo conocéis todos?  
Pues este es un programador.  
Os cuento, esto es el 28 de enero. Esto son 2 días después de que salga. Os cuento la historia muy rápida. Es un programador que en su casa.  
¿Dice por qué no me cojo parte de lo que has dicho tú antes, por qué no me cojo parte de las tripas antigravity?  
Desarrollo un ordenador que tenga, o sea, desarrollo un orquestador de agentes que se instale en un ordenador, que coja el control del ordenador.  
Y que desde el ordenador entre por.  
Una sesión de web de WhatsApp.  
Que lo puedas enganchar también con Telegram y tú te comuniques con el LLM, con el orquestador a través de WhatsApp o de Telegram, tiene también una consola en local.  
Él no tiene, o sea, Open Cloud no tiene un LL, no es un LLM, igual que Antigravity no es un LLM. Tú con Antigravity puedes elegir el LLM que usas. No sé si me explico, yo en este caso al mío me ha autentificado con mi.  
Con mi, Con mi GPT, o sea, no uso ni API.  
No uso ni API.  
Autentificado desde el servidor.  
No, al WhatsApp no, a GPT, hazle el leme.  
Ahora vamos a ir viendo todas estas palabras.  
Vamos a ir viendo todas esas palabras, pero lo que quiero que veáis, María antigranity lo usas.  
¿Y cuáles son?  
Vale, pero lo has usado, lo has usado y lo has pedido cosas. Antigravity no es un.  
Anterior y tú cuando lo usas.  
Llama a un LL, no sé si me estoy explicando, sí.  
Vale, en este sentido, Open Cloud es lo mismo, pero es un señor que estaba en su casa, desarrolla este programa.  
Yo me lo instalo un domingo.  
Rubén me lo manda el domingo también o el lunes. A Rubén yo le tengo en mi cabeza entre los top consumidores de cosas extrañas.  
Porque no me has todo lo que me has mandado es en tiempo. Mi hija estaba ingresada en La Paz. Yo me lo puse según me idan, no sé dónde. No sé si os lo he contado o no lo he contado, pero lo instalé en menos de 5 minutos y estuve con el y estuve con el WhatsApp funcionando. Me lo instalé en mi propio ordenador.  
Espera, me lo instalé en mi propio ordenador, estuve funcionando con él y luego es un señor que crea un programa. Yo me lo instalé, funcioné y estaba hablando con mi WhatsApp como si estuviera hablando. Tengo aquí una conversación con Diana que la tengo aquí bastante divertida.  
Del día.  
¿Aquí está, no?  
Aquí por aquí estamos.  
Estuve probando con ella.  
A ver dónde está, tiene que ser. Estoy probando un **** ahí, que bien asiste. Espera, Watson saluda a Diana, justo estoy trasteando. Watson prueba, mira, esto es el , el uno, perdón, el 26 de enero.  
Es domingo, ella está en La Paz.  
Hola Diana, prueba recibida, estoy conectado y te leo. No, esto es lunes, esto es lunes, esto es un lunes 26 es lunes. Por defecto voy en modo Watson, solo quería.  
He mirado, no, esto ya es tarde, esto ya es tarde.  
As your mouth.  
Estamos en la 901, está la maternidad. Vale, no es más tarde esto, ella está aquí ingresan.  
Solo Watson, estoy llegando, te puedo llamar, me quiere, la quiero.  
Saluda a Diana Watson, prueba.  
Mi querido Watson, sin problema, no te preocupes, mira aquí.  
Justo este es el domingo. No he leído, es que quiero que veáis esto. No he leído el mensaje hasta ahora. Ayer creo que a esa hora ya estaba durmiendo. Ella me dice, sin problema, no te preocupes.  
Y responde, gracias Diana, me alegro. Si hoy quieres me dices cómo está Alicia y si necesitas que os prepare algo práctico, turnos, lista de cosas para el hospital, mensajes a la familia, lo que sea.  
A las 7:04.  
Ella me dice te quiero y me dice yo también te tengo mucho cariño, Diana, aquí estoy para lo que necesites de verdad. Se lo decía Luis, no a ti entendido. ¿Quieres que se lo reenvíe a Luis tal cual te quiero o ya se lo has dicho tú?  
Esto es tal cual. A ver, mirad las horas. Yo acababa de salir de La Paz, ella me dio el relevo, reenvíaselo y yo lo recibo a la misma hora. ¿Qué es esto? O sea, yo probé esto en mi ordenador.  
Probé con Diana y con Miguel Ángel.  
Y sin yo darle permisos.  
Sí le había dado un permiso para que hablara con Diana con Watson 2 puntos.  
Pero ese permiso se los habéis visto como se lo ha saltado, o sea, se pone a hablar con Diana, con mi mujer. Espera, vamos, espera, ¿entendéis que esto no es un sistema seguro si lo instalas en tu ordenador?  
Siguiente paso.  
En esa misma semana, esto os estoy hablando un lunes. Cloudbot sale el viernes anterior, esa misma semana le mete un Antrophic, les dice que cambien el nombre y se llama Mold y el sábado se llama OpenCloud, que o sea, el viernes se llama OpenCloud. En una semana ni un Pokémon, evoluciona tanto en tan poco tiempo.  
O sea, 33 evoluciones en entre medias, la noticia que os he mandado, la noticia que os he mandado de que el señor que lo que esto en el cambio de nombre.  
De Cloud Amolt en el cambio de nombre.  
Deja comete un error de 10 segundos, pierde el control de su cuenta de GitHub y unos hackers.  
Crean una criptomoneda desde su cuenta de GitHub, la publicitan.  
Y en menos de no sé cuánto es, lo tenéis aquí explicado. En 10 segundos es lo que él tiene la cuenta sin nombre, pero le deberían de, o sea, le quitan el permiso y luego empiezan a anunciar un token.  
Y no sé en cuánto tiempo en minutos 16 16000000 USD recauda.  
No él, sino los hackers, ¿me seguís?  
That's super a feeling anxiliate.  
A ver.  
¿Me seguís? Sí, vale, ahora.  
Para mí, para lo que yo hago.  
A mí me viene estupendo Claudo, me gustó y dije, *****, yo lo quiero tener en mi vida.  
Y tengo por 200 pavos, me compré un.  
Tengo una, no es, no es mi Raspberry Pi, o sea, diles a mis alumnos cómo tengo instalado.  
Claro, que los hago un amplio.  
Guía incluida, porfa, sí tengo un ordenador que son 200 pavos de ordenador conectado a conectado. Lo tengo debajo de la tele. En principio lo compré para que para ver series, para descargarte cosas y ver cosas.  
Es un ordenador.  
Que está es una cajita, ahora os dirá el modelo.  
Mira, aquí está, vale, aquí tienes un texto como lo tengo.  
Pero no me ha dicho del tipo de.  
A ver.  
Busca en.  
Mi Paul L.  
¿Ordenador, dónde estás corriendo ahora?  
Oh, cómo se llama lo que hacen los youtubers, el outfit, no el.  
No, cuando tú ves tu cuando tú ves.  
No, cuando tú me dices, mira, este esta es mi habitación, así tengo setas.  
El set no resumen, tengo un ordenador.  
Que os lo cuento, físico, físico. Es un ordenador físico que está ahora conectado, que es muy pequeñito, que ahora te da la descripción y que no se calienta y que puede estar todo el día conectado y no pasa nada. Me costó menos de 200 pavos, ciento en Amazon.  
Ahora te lo da y te lo, o sea, es un ordenador muy ligero porque el cuando corre no corre en el ordenador, sino corre, corre online. Yo tengo por un lado mi teléfono.  
¿Y mi ordenador portátil?  
Mi ordenador portátil y el teléfono vale.  
Tengo una aplicación que se llama Synthing. Synthing es para sincronizar carpetas, es de código abierto. Synthing es una carpeta, es una aplicación que si tú tienes una carpeta aquí y una carpeta aquí.  
Tienes el mismo cuando los tienes conectados a la misma red de forma descentralizada, tienes conectadas las es más.  
Es más, es más, mira, este es el ordenador.  
Reenviar.  
¿Dónde estáis vosotros?  
Riesgos, vale, si no preguntas.  
Tal mismo en.  
Probablemente sí, probablemente sí, pero a ver, pero te cuento dónde está, dónde está. Bueno, ahora para preguntar por WhatsApp.  
Esto habrá que pagarlo también, que no, que no. Mira, este es, me estoy conectando, que no, que no, que a mí no me.  
Para responder un WhatsApp con su.  
Claro, que literalmente entre entrar página web, hay forma de un sitio, entre esos por los ***** y otros.  
Este es el ordenador de mi casa, este es el lookbox que tengo, este que estáis viendo.  
Este es y para que veáis si soy cutre.  
Está encendido todo el día porque tengo.  
Yeah.  
Lo de que se mueva el ratón.  
No sucedieron con otra.  
¿Y luego esto es, por un lado, por qué me he conectado aquí?  
Porque os quiero enseñar, os quiero enseñar Synthing. ¿Me seguís? Synthing es lo que permite sincronizar las carpetas.  
¿El ordenador, aquí tengo el OpenCloud, vale?  
Este ordenador solo ve, no escribe.  
Esto es un ordenador independiente.  
Esto solo ve y solo ve en concreto mi vault de obsidia.  
O sea, en este ordenador solo ve como mucho que puedo hacer borrarme la copia que tiene el local y como mucho alguien que coja que tenga acceso a mi Open Cloud que puede ver todos los datos que tengo en el bolt.  
¿Me explico o no me explico? Y bueno, incluso podría cuando termine la tarea le pides que lo borre y así nunca tendrían nada que utilizar contra ti, ¿no?  
Podría llegar a pedírselo, o sea, esto es esto es un servidor físico, pero que también perfectamente podría tener una máquina virtual.  
Yo es que lo miré en máquina virtual, pero a mí esas cosas me dan, tú lo pones en una máquina virtual. Una máquina virtual es como tener un ordenador conectado, ¿me seguís?  
A ver, , vamos a ver una cosa más, esto os lo he pasado. El setup donde estoy corriendo ahora y que tengo documentado en un Volt es este: hardware, mini PC, GEM.  
Bus.  
Esto si lo miráis por ahí.  
Son 109 pavos.  
No 199,99.  
Literalmente un MAC mini, pero en chino, ¿no? Sí, yo tal, porque yo lo que estoy viendo es que la gente que hace para trabajos con comlejos de Atraujo y le compra un MAC mini literalmente y lo pone ahí hasta que se muera. Hombre, yo siempre puedo hacer más cosas, a ver.  
Por.  
Me meto un servidor indicado.  
Quiero hablarles de código abierto.  
Quiero darles una lista ordenada de programas con enlaces.  
Twenty-five, Saradi, Saradi, Saradi.  
Que les permita entrar en la URL del ordenador, el mundo del cómo la URL directa de.  
Sí, te lo he pasado ya.  
¿Pero esto qué es? Es un ordenador que trabaja solo con esto.  
Y ni tan mal.  
¿Luego las máquinas virtuales, os suena la palabra máquina virtual?  
Pues os estoy dando muchos conceptos, pero que luego se pueden ir ordenando y se mandarán ordenados.  
¿Entendéis que me he conectado a través de Google Desktop a mi ordenador de casa?  
Esto es.  
El.  
Sí.  
voy para atrás  
Yo me he metido en remote desktop y tengo aquí entro con mi usuario de Google y luego aquí tengo mi portátil y aquí tengo el que os he enseñado.  
Me conecto.  
Me pide un PIN.  
Yep.  
¿Esto qué es esto es un ordenador?  
Que tengo en casa, debajo del de la tecla. ¿Qué es una máquina virtual? Pues es esto mismo. Lo que pasa es que en lugar de tenerlo debajo de la casa, de la de la lo tienes en un servidor de Google. Ejemplos de máquinas virtuales, Google Cloud.  
Google Cloud, o sea, ya está ahí.  
¿Y por 30 eur al mes?  
Tenéis una máquina tremenda.  
Mi ordenador, bueno, yo probablemente que haga cuando tenga un poco de tiempo.  
Pues pillarme una máquina virtual por 30 pavos al mes y en lugar de el equivalente a los 30 pavos al mes que te dan en Google y Google Cloud, sería equivalente a un servidor que te puede costar en casa 3000 EUR.  
¿Veis los beneficios de la economía de escala? ¿Tú te comprarías un portátil de 3000 pavos para tenerlo en casa? Puede que te lo llegues a comprar o no, pero es que por 30 pavos o por 2030 EUR tienes el servicio equivalente y yo llego aquí, te conectas como me he conectado aquí y entras dentro del ordenador.  
Y puedes desde aquí conectarte. O sea, esto es un ordenador que es una patata. Yo aquí no puedo correr el antigravity, pero lo mismo he hecho con un ordenador que lo tengas, si llegas a cualquier terminal tonto y te conectas y por lo tanto lo del.  
Lo de las máquinas virtuales mola, sí mola también sin fin. Lo que te permite es tener las mismas carpetas en diferentes sitios.  
¿Habéis tenido clase con David Sanguro?  
La clase de David Angulo es mecánica.  
Es decir, esta abrir el capo.  
Y empezar a tocar cosas concretas, la clase de David Ángulo.  
Si no hubiera inteligencia artificial, os vendría muy bien.  
Pero estaría limitada solo a lo que David Angulo os dice que tenéis que hacer dentro de riesgos. Eso ya os permite ganarnos la vida estupendamente.  
¿Me estoy explicando? O sea, Python aplicado a riesgo no necesita ser un programador con saber los modelos, programarlos en Python, luego contratas a un programador y que él los ejecutivo hasta aquí bien.  
Lo que pasa es que antigravity y lo sé, o sea, tú a un el LM le puedes preguntar cualquier cosa. ¿Qué es cualquier cosa? Pues lo que yo le, o sea, a ver, yo aquí estoy hablando, estoy abusando.  
Estoy, estoy, bueno, este no soy yo, veo el perfecto, no es por un nombre. Me lo he puesto aquí por el nombre, por Miguel Miguel Terry.  
Y lo que voy a hacer.  
Please.  
Okay.  
Para las tareas multitarea, voy, no me sí me gusta, sí me gusta.  
Bloque 3, nube a.  
¿Cómo es TDH?  
Andrés, no merece la pena. Si quieres cotillear algo, lo que te vaya a pasar ahora. Ya veo que no tiene nada de LinkedIn.  
No le conozco todavía. ¿Dónde estáis? Andrés, ¿qué más da?  
A ver, os acabo de compartir una cosa más.  
Lo que os estaba diciendo, David os ha dado una sección.  
La hizo se ha dado una sesión.  
En la cual nos ha enseñado mecánica, mecánica, además aplicada en el caso concreto, que es la gestión de riesgo.  
Yo de que os estoy hablando, en cambio, no os estoy hablando de un poquito de cómo funciona una torre de control, de un aeropuerto, un poquito de cómo funciona un puerto, un poquito de cómo funciona una moto, un poquito de cómo funciona un tractor.  
Estoy dando cultura general de diferentes sitios.  
Que si no fuera por que hay, por un lado tenéis LLMS y por otro lado tenéis antigravity, no tendría sentido que os diera toda esta información.  
Bill.  
Existe.  
Sí, existen los LLM y existe al Tigran. Y creedme que con la mezcla de las 2:00 cosas podéis hacer muchas, muchas, muchas, muchas cosas en poco tiempo. ¿Os acordáis la clase Pablo de comercio exterior? De acuerdo de los incoternos, la de los incoternos. ¿Os acordáis?  
Que fue una clase estructurada solo.  
Para enseñaros a obsidian y la hice tirando del elemen.  
Pues eso es como si hubiera venido yo. ¿Los Picapiedras los habéis visto?  
Sí, no, pero Jazmín no.  
It was right.  
Hello.  
Pues yo me siento, Jasmin, pensando en esa como si tuviera este coche.  
Que van corriendo con los pies.  
Yeah.  
A cuenta.  
No, y menos hoy o cualquier otro día.  
Vale, ya está Jazmín, me siento.  
Me siento como los Picapiedra, o sea, me siento con aquella clase como si hubiera estado, pero es que en tan poco tiempo esto ha evolucionado tremendo. ¿Me seguís?  
Voy lo que os quería decir.  
Me gustaría decir, estoy tratando.  
Lo que os estoy diciendo, la clase de la mecánica. La mía he pasado por un puerto, luego he hablado de sin fin, luego he hablado. Hay un concepto fundamental que tenéis que entender, es el código abierto, o sea, lo del código abierto de pasada y sin entrar en detalle.  
El pasado sin entrar en detalle, os dije en algún momento que iba a hacer lo que acabo de mandar, lo que hacer ahora, mandarlo. Por un lado, frente al código abierto está el código cerrado. ¿Tenéis Apple alguno?  
Vale, Apple, el ecosistema de Apple es todo código cerrado. ¿Eso qué quiere decir? Que los de Apple desarrollan las cosas, tú pagas por el uso de lo que desarrollan y a cambio te dan un sistema que es cerrado, que no falla y que ni tan mal.  
El código abierto.  
Es otra forma de pensar y de funcionar. Son programas que desarrolla la comunidad para la comunidad. ¿Se veis? ¿Qué es el código abierto?  
Pues yo desarrollo con lo de GitHub, es código abierto. O sea, tú en el momento en el cual subes algo a GitHub, lo estás poniendo en un repositorio que cualquiera puede llegar y descargarse.  
Si combinamos el código abierto.  
Con la inteligencia artificial y con antigravity encuentras a gente que hace cosas increíbles en poco tiempo y luego llega otro, ve lo que ha hecho 1/3 y lo mejora. Y sobre esa cosa increíble te hace otra cosa más increíble y luego te hace otra cosa más increíble. ¿Me explico o no? Sí, vale, ¿qué os acabo de pasar?  
Os acabo de pasar una lista.  
Ordenada de fácil a pro.  
Para que Para que entréis en código abierto sin perderos con enlaces oficiales y una línea de para qué sirve. La idea es que empecéis por el bloque uno y si os engancha, que sigáis bajando.  
¿Entendéis que esto?  
Él lo ha hecho el Open Cloud, que yo al Open Cloud lo bueno, al Open Cloud lo único que he hecho es le he dado contexto, yo es que le conozco y él me conoce a él.  
Y él me está ayudando, sin que yo se lo haya dicho, a dar la clase.  
Me estoy explicando, sí, y dentro de esto os enseño cosas. ¿Firefox os suena? Firefox es de código abierto.  
Y Firefox, si necesitáis alguna cosa de Firefox, tenéis extensiones que ha hecho la comunidad.  
Ublock Origin es un bloqueador de anuncios. Yo no lo conocía, pero si quieren Internet sin basura, lo suyo es Firefox.  
No lo sé.  
Bit Warden, gestor de contraseñas, LibreOffice, Ofimática y yo que sé, esto lo pone aquí.  
¿Eso qué es lo que haces?  
Repeat.  
Yo te os digo, voy a los que a los que conozco, ¿vale?  
Es, pero en código abierto y es compatible con Word, con Excel y con PowerPoint.  
O sea.  
VLC es para ver vídeos, pero os enseño los que conozco. Obsidian no es 100 * 100%, pero usa Markdown y es lo bueno. Obsidian no es 100 * 100% código abierto, pero.  
Sigo, sigo, sigo. Signal para mensajería. Si os queréis dedicar al narcotráfico, es lo que se suele usar.  
Protón, protones para mandar correos.  
¿Visual Studio iPhone lo conocéis?  
Hit, bueno, esto de Docker, Ángel se emocionará cuando lo vea.  
But you slow down.  
Vale, este es Kaden Life es para editar vídeo.  
Me encanta, buenísimo para edición de vídeo y, por supuesto, gratis.  
Y luego.  
Tal cual.  
Creo que lo vi, hay uno que es Geek, UniStar, el que te de los archivos países y los ordenadores. ¿Cómo que es que son estas? Este Git, no, pues no, no, esto no es Apple, o sea, pero.  
¿Pero qué quiero que veáis que existe el código abierto? ¿Qué es el código abierto? La comunidad desarrollando para la comunidad. En principio, esto del código abierto suena a hippie.  
El tema es que cuando lo del código abierto lo combinas con este esquema que os he puesto a la pizarra.  
No hay, No hay rival.  
Apple, por mucho que se esfuerce, y digo Apple por ir al que mejor puede hacer las cosas de forma cerrada, por mucho que se esfuerce Apple, igualar al poder que tiene la comunidad no llega luego dentro de lo que es la comunidad.  
Importante.  
El código abierto empieza como a ver, las fixars tal mano suena, no vale, pues voy a hablar bien y luego, además, como sale la transcripción.  
Richard.  
Tal man, este Richard Stallman.  
Richard Stallman es el padre del software libre.  
¿Qué problema tiene libre en inglés?  
Graves.  
¿Que vas al Mercadona?  
Libre, software libres en español. El software libre es una comunidad que eso sí que es un poco más hippie. Si le veis a Richard Stallman.  
Yo creo que toma libre not gratis.  
A ver, el código, el código, perdón, el software libre son unas comunidades de software que empiezan en los años 80 y hay cuatro libertades fundamentales, libertad.  
Espera, prefiero leerlas y decirlas bien, sí, libertades.  
Where libre teniendo.  
Las cuatro libertades del software libre.  
Aquí está las cuatro libertades del software libre, libertad de uso.  
Libertad de estudio, libertad de redistribución y libertad de mejora, sí.  
Libertad de uso.  
Estudio, redistribución y mejora.  
Estudio y mejora, estoy hablando de software, ¿vale?  
Imaginaos que en lugar de ese software fueran libros y hay libertad de usar.  
Libertad de estudio y libertad de redistribuir los libros y libertad de mejorarlos.  
Claro.  
Para usar un libro, para estudiar un libro y para mejorar un libro que hay que saber hacer.  
Leer, en cambio, para redistribuirlo no necesitas saber leer. ¿Entendéis que eso ha aplicado al software? La libertad de.  
Uso y de redistribución. No necesitas saber leer, pero si quieres estudiar y mejorar, sí que necesitas saber leer. ¿Qué es leer la metáfora? Estoy usando leer como metáfora de qué de coba, de programar, o sea, para estudiar y para mejorar el código.  
En teoría, necesitas saber programar.  
Importante ahora.  
¿Es necesario ahora saber programar para mejorar el código? A ver, entre para nada y, o sea, no seas tan radical con que porque ya uno más una es 2, no hace falta mirar el código.  
Pero un poco sí que hay que saber, un poco sí que hay que saber el programa, la estructura, por lo menos, claro.  
Va el código, a ver, un poco, sí que hay que saber el programa, un poco.  
¿Entendéis que la clase de David es perfecta?  
Que venga David a explicar fundamentos.  
¿Y luego?  
Libertad de uso, libertad de estudio, redistribución y mejora. Estas son las 4:00 libertades del software libre. El problema que tiene el software libre en inglés es el free, que free se puede entender como gratis también.  
Del software libre se evolucionó.  
¿Al open source, al código abierto, y qué es el código abierto?  
Lo mismo del software libre.  
Grabando, pero ya no.  
Puedes cobrar si quieres.  
O sea, ya lo puedes elegir, o sea, me refiero, tú te lo puedes descargar, pero si tú, Diego, necesitas un servicio o yo os podría cobrar ahora por estar enseñándoos esto que estamos viendo. Y de hecho, es lo que te iba a decir, de hecho, y de hecho lo estoy haciendo.  
O sea, ¿me entendéis lo que digo o no? Sí, o sea, si fuera software libre, no tendría sentido estar sacando rendimiento económico del intercambio de información. Al ser código abierto, se entiende que la gente necesita cobrar para, o sea, tú puedes.  
Venderle código. o sea.  
Tú puedes llegar a la universidad.  
Y cobrar por instalarles un sistema y cobrar por hacer un mantenimiento, un sistema de código abierto.  
O sea, yo puedo coger cualquiera de estas implementaciones, vendérselas a alguien, decirle que es código abierto, pero cobrarle evidentemente no una licencia porque no puedo cobrar una licencia, pero sí puedo cobrar por mis servicios.  
Sí.  
A.  
Tú ahora mismo lo tienes conectado a Obsidia. Si tú quieres preguntarlo en Google, automáticamente él podría acceder. Si quiero preguntarle algo en Google, sí.  
Pero muy mal, yo para Google, a ver, pero se conecta, o sea, el ordenador, este ordenador.  
Si yo le pregunto algo a Google, hace exactamente dónde está. Aquí está el ordenador. Si le pregunto en WhatsApp, a ver, se lo voy a preguntar. Ya estaría haciendo algo que no lo has dicho tú que haga, que sí, espera, pero busca en.  
Google busca en Internet.  
Toda la no toda no información.  
Sobre Ángel Fariña.  
No, Ángel, ¿qué más? Martínez, Martínez, ¿qué más? Fa, a ver, Riz Fariza.  
¿Vale, sabes lo que me va a hacer?  
En la máquina virtual, que yo le he dado permiso para lo que va a hacer, para lo que va a hacer, sí lo tiene y lo que va a hacer es en esta, no es una máquina virtual, en este orden, mira.  
¿Veis lo que veis como? ¿Dónde salgo? ¿Pero veis? ¿Veis lo que acaba de hacer?  
¿Pero veis lo que acaba de hacer?  
En la máquina en la que está.  
Yo que he hecho desde aquí.  
Mira, aquí está hecho.  
En abierto lo que aparece de Ángel Fariza sin tirar.  
De nada en privado es básicamente esto: perfil profesional, figura como Ángel, tal. A ver, no, a ver, Ángel, yo no le tengo, lo tengo sin API.  
Si le metiera una API, tendría que pagar. Ahora voy a lo de la API. No, no. No. ¿Y qué voy a hacer? Voy a cerrar esto. Esto lo estoy cerrando en el ordenador en el que ha buscado. Que da igual, Ángel. Da igual.  
Hola.  
A ver, ha abierto Internet.  
Ha hecho una búsqueda en Google y ha buscado, o sea, si es lo que te he dicho que iba a hacer, o sea, lo tengo sin APIs. Voy a explicar qué son las APIs, pero que quiero que veáis, en este caso es equivalente lo que ha hecho el agente, lo que ha hecho el orquestador de agentes decirle a GPT.  
Que abra Internet y busque Ángel en Internet y luego saque la información relevante que tenga. ¿Veis un poco el proceso?  
Google.  
Base.  
¿Que yo soy consciente cuando le pido cosas de qué es lo que le hacemos?  
Por un lado solo he medido en un WhatsApp y luego me he metido en el ordenador para que para que vierais vosotros qué es lo que la gente está haciendo en el ordenador.  
¿Un api es un api?  
Es otra de las piezas del de que se de mover, estáis muy perdidas.  
Un poquito, vai, pero podemos tutorías, tiempo, Jazmín, ¿qué tal?  
Vale, si hay que estrangular algo de esto y me decís.  
Porque mira este a Diego, tú.  
Vale, a ver, pero por registro.  
Es lo que te está diciendo es como es para saber exactamente si este ángel es el que estoy buscando, que le meta el DNI para, pero el DNI es información confidencial de grado, viendo el rollo, se puede perfectamente, pero dile que sí, a ver qué te sale.  
Claro, no Api. ¿Qué es un API? ¿Os suena lo de API? Pero os suena. Dime, María.  
Ah.  
Ya sé que es un concentrados África, sí, ya sé que es diferente, pero tampoco sabes que exactamente.  
Es exactamente eso, pero si además te lo mandan en las prácticas.  
Sí, a ver, vamos o no.  
A ver una AI.  
Las cosas entre ordenadores no es que sean sencillas, es que es una llave. Me refiero a una llave. Entendéis que solo puede abrir una puerta y una llave. ¿Os imagináis tener una llave sin saber cuál es el cerrojo?  
Es lo más inútil, o sea, si tú tienes una llave o tienes el cerrojo o no lo tienes, una llave solo sirve para el cerrojo.  
Pues con los ordenadores suele suceder lo mismo.  
Si tú quieres poner en el ordenador tu nombre con mayúscula o aprietas exactamente las teclas o no va.  
Okay.  
En este sentido.  
Cuando tú quieres algo de otro ordenador o cuando tú quieres, por ejemplo, en este caso.  
En este caso, el orquestador, que no sé bien cómo funciona. El orquestador no usa un LLML, sino llama.  
A llama a un LLM para que sea usado.  
Esa llamada.  
Se puede hacer de 2 formas.  
Ovía.  
Autentificador o vía.  
Yo, en lo que os acabo de enseñar, lo tengo todo hecho con autentificador. Me explico, , por ejemplo, todos los servidores.  
Todos los servidores, no todas las todo lo todos los navegadores tienen APIS.  
Y tú puedes llamar, corregirme si digo alguna barbaridad. ¿Es correcto lo que estoy diciendo? Tú puedes llamar a caza, tú puedes llamar a Explorer, a la API y que te haga una búsqueda sin necesidad de hacer una búsqueda a través de un explorador. ¿Me seguís?  
O sea, yo lo que acabo de hacer con Ángel de buscar información sobre Ángel.  
¿Cómo lo ha hecho?  
Abriendo una sesión con mi usuario.  
No sé si es no abriendo una sesión.  
Pero no con mi usuario de Gmail. Ha abierto una sesión en un navegador sin usuario. Ha mirado Ángel.  
Y es como si hubiera sido yo cuando usa GPT.  
Lo mismo, por eso no, tú a este, a este, al a Open Cloud, le puedes poner un API tanto de navegador como de la IA. El problema de que le pongas un API tanto de navegador como la IA.  
Es que las apis hay que pagar.  
Entonces se te puede disparar el coste. Yo de momento lo que estoy haciendo es si quiero tirar de aquí.  
Lo tiró David.  
Y luego la API la tengo para otra cosa, porque es que con antigravity es que no necesito tirar de APIs. ¿Vosotros tiráis de APIs con algo? Sí, sí. Porque todo lo que yo me conecto son... Hay algunos que son graves, eh. Un software que necesitaban de telefactor. No. Es posible estar los servicios prácticamente. ¿Por eso? No. ApiKey de echa GPT tengo.  
Y tengo API de cada software de cada página. ¿Y cuánto te gasta? Hombre, yo metí 10 dólares, aceptilas y todavía me en una y he metido caña a eso. Pero yo pagué hace 6 meses y me queda. Y todavía te queda del API de GPT de GPT, entonces mola.  
No, es lo único que es verdad que no lo consume rápido, pero porque todavía no le he puesto a hacer estas barbaridades en el momento en el que es que es una locura, pero básicamente es hacer multitarea ordenada cronológicamente y que la información se queda guardada, interpreta la información y luego pase. Eso es un orquestador.  
Claro, pero.  
Con todo API me refiero.  
Eso sí, ahí no lo ahí no usas API porque el consumo, igual que si vosotros gastáis gasolina.  
Son litros de gasolina.  
Aquí, cuando consumís cosas de ella, el consumo se mide en tokens.  
¿Y qué es un token? Depende del contexto.  
O sea, una cosa es hacerle una búsqueda, o sea, lo de pedirle que busque información de Ángel es relativamente sencillo. ¿Por qué? Porque es un nombre, el contexto es sencillo. A la gente le digo que abra el navegador, mete el dato en el navegador y luego de las búsquedas de las primeras 10 búsquedas que hace, coge la información.  
Y te lo resume. ¿Entendéis que eso es fácil o relativamente sencillo? En cambio, yo cuando le estoy pidiendo aquí.  
Que me revise mi vault, que son más de 4000 archivos y que dentro del vault, a ver, se lo he dado ordenado. O sea, yo intento agilizarle el contexto, pero lo digo, mira dentro de la carpeta tal busca tal. Aún así, ahí tiene un consumo más grande, que es lo que estaba diciendo Ángel con los orquestadores.  
Es para datos sensibles anonimizándolos.  
Lo automatizas. ¿Sabéis lo que quiere decir automatización? Ay, perdón, anonimización de datos. Pues muy sencillo, vosotros sois 11 personas, ¿no? *****, 11 personas, 13 sois 13 personas.  
Pues necesito una base de, o sea, necesito un archivo que lo tengo con vuestros nombres. Anonimización de datos sensibles. Necesito una base de datos con vuestros nombres, que la tengo.  
Y luego en todo el sistema o en el o en la información que le vaya a subir a GPC antes de subirlo.  
Lo que hago es que Ana sea Juana o mejor que Juana, que Ana sea 1937 o un código más grande.  
Se corre el programa, ejecuta lo que tenga que ejecutar y a la vuelta, cuando me lo devuelva, le vuelvo a meter otro programa y en 1937 sale.  
Eso es la normalización de datos sensibles y todo lo que tú le has dado al la protección y cómo lo protegen.  
¿Cómo? ¿Cómo realiza ese proceso de anomista? O sea, prácticamente si te dices esto vale esto, esto vale esto. O sea, tú antes de subir, o sea, el problema, tú tienes datos sensibles. Por ejemplo, vuestros exámenes. En el caso de vuestros exámenes es fácil, porque pongo Typex en el nombre, subo los exámenes y ya está.  
Sí, pero si tú tienes una denuncia o tú tienes datos de clientes a cascoporro.  
Pues antes de subir el programa, que la N sea un uno. O sea, que le pongas tu propio nombre con un alias. Pero luego se puede... No. Si tienes muchos nombres sin... Da igual, da igual. Mira, las mejores.  
Aquí tienes y luego importante.  
Importante la búsqueda que yo haría si me pidieran esto o tuviera que vender esto o tuviera un anonymization.  
Open source.  
Aquí lo tenéis en GitHub.  
Sí, hay que tener cuidado, pero que me entendéis lo que estoy diciendo porque abrís una puerta.  
Fortnite a partir de ahora.  
Yo tenía el autentificado. Entonces, dime, en el caso de que a mí lo que me preocupa sobre todo es el grupo hackeo, de que parece que tiene la base de datos para él, el grupo de toda la base de datos, prácticamente tiene preocupación. A mí eso es lo que me preocupa.  
A ver, frente al hackeo es que entren en un sistema. Sí. ¿Entrar en el sistema tienes el Esquema Nacional de Seguridad? Sí, sí. Que si cumples con el Esquema Nacional de Seguridad, pues va a ser difícil que entren. Pero yo lo que he estado viendo es que prácticamente el problema de esto es que no te enseña cómo protegerte.  
La gente normal se lo descarga en el propio regalo suyo.  
Y el problema es que, bueno, yo por lo que he visto en TikTok, básicamente es que un hacker experimentado puede ver literalmente una lista de gente con protección que hace un filtro y de toda esa gente que no tiene protección dice, pues voy a entrar en estos 400 ordenadores, automáticamente 1 minuto tiene toda la información de 400 ordenadores.  
Sí, eso a mí es algo que me preocupa, el hecho de que pueda hacer una respuesta inversa. Estás hablando de OpenCloud. ¿Qué es lo primero que he dicho de OpenCloud? Sí, claro, por eso no me lo he descargado y por eso estoy... Yo me lo he descargado, según os he comentado, en un ordenador que está solo dedicado a esto.  
Y además, todo lo que recibe ese ordenador, ¿dónde está? Todo lo que recibe este ordenador es solo lectura. Y si alguien entra a este ordenador, a ver, a ver, yo no sabía lo que haría sería que cuando haga la tarea que elimina automáticamente la memoria, total.  
Y trabaja con máquinas virtuales, una máquina virtual que tú tengas al el open cloud en un servicio, pero luego sobre todo open cloud tiene 2 semanas y lo han hecho en código abierto. Ha sacado ya cloud.  
El opus opus 3, que opus 3 es brutal, pagas 20 pagos y te funciona como antigravity. O sea, me refiero, olvidaos de Open Cloud y pensar en el antigravity, perdón, en Antrophic, el claude opus no sé qué.  
Pero sobre todo, sobre todo, olvidaos, olvidaos.  
De todo salvo LLMS y Antigravity, si queréis.  
¿Por qué? Porque con antigravity y LLMs puedes aprender a aprender, o sea, todo esto que os estoy diciendo.  
Dentro de un mes puede aparecer otra tecnología que deje obsoletas, pero a ver qué quiero que veáis cosas. A ver, mejor no. Por un lado, hagáis lo que hagáis, María, pensando en tu API.  
Ayer te pidieron en las prácticas que quiero una.  
Entendéis que estamos en un máster de riesgos donde tenéis que ver cosas de modelización financiera, pero os están pidiendo en las prácticas conocimientos asociados con inteligencia artificial, conocimientos asociados con programación.  
¿Sabéis programar? ¿Cómo que no? ¿Cómo que no? Después de la clase de la vida, uno ya ninguno puede decir que no. A ver, hay que repasarse la primera vez.  
Andrés, que cualquiera de las chicas, José Luis, perdón, por el tema de cualquiera de las chicas pueden tener reparos en mentira.  
Me está llamando mentiroso, Samuel. No, estoy diciendo lo que estoy diciendo. Yo entiendo que cualquiera de ellas pueda tener algún reparo en mentir. Sí, que yo no. ¿Tú entonces me estás llamando mentiroso? No, no puedo. No, lo que te estoy diciendo, lo que te estoy diciendo, mentiroso.  
¿Sabes programar? No. Andrew. Madre mía. Andrew. Sí.  
Andrés, que para lo que os van a pedir que desarrolléis no van a contratar, o sea, a vosotros no os van a contratar de desarrollar para desarrollar código. A vosotros os contratarán para los modelos que tienen cerca, saber si sois capaces de ponerlos. Si te contratas y llamas a Ángel.  
Y realmente, a la hora de programar, tú no vas a ser el que programa.  
Hay un aprendizaje que está ahí, pero si tú dices que no sabes programer, ¿qué me van a hacer?  
Contratar al que diga que sí.  
No miente, no habéis tenido clase con David Angulo, vais a tener más, estáis teniendo clase conmigo, os estoy enseñando herramientas.  
¿Dudas? ¿Sabes programar, Andrés? Eso es.  
A ver.  
¿Os cuento, dónde está? ¿Qué límites? Quiero acceder a algún tipo de información, no puede acceder un permiso previo que porque la tenemos abierta aquí.  
Qué gozada y esto te va a gustar, relax.  
Yeah.  
Venga, va, que esto es fácil. ¿Qué les pasa a estos? Este es el Este es Clau, o sea.  
Esto no lo he hecho yo, no, yo no, esto es el propio Cloud, este es Cloud.  
Esto es él.  
Cerrar, pienso que todas las cosas que tú le has escrito por WhatsApp, pero insisto, yo esto no le, o sea, tú te descargas esto, tú te descargas el programa y este es el agente, tiene el agente, this folder, this home, treated that way, first ramp.  
Every session, read soul, memory, daily notes, long term, memory. O sea, aquí está lo que él hace. Eso se va todo a mano, no, que no, que no, que no.  
Esto se lo ha cogido él, yo de esto no le he dado nada.  
Pero esto son las reglas.  
Identity Watson, un asistente familiar digital con mena sarcástica.  
Bueno, que hay como un mejorador de a ver, sí, a ver todos estos modos.  
Modos SMD.  
Yo le tengo puesto para que trabaje con esto es como un Skill MD en Obsidian Capture Spec.  
Soul Soul boundaries, private things, stay private tools.  
¿Aquí tiene las 2 direcciones que os ha pasado?  
Y este soy yo.  
Extensión, tareas, captura aquí, mira, tareas base, captura instantánea, gestión del vault. O sea, esto son las tripas de la gente y scripts no tienen ninguno definido. Memorias. Le he pedido que vaya actualizando cada día, o sea, que cada día vaya haciendo un registro, un log.  
De lo que vamos viendo, mucha energía puesta en sistema golf, reorganización y en ritmo sostenible ante semanas con más carga. Cerrar domingo tal el día anterior. Mira, se nota que el resumen semanal open loops para completar cerrar.  
Esto, Ángel, yo le voy a dar bastantes prombres, ¿verdad? Pero yo quiero ver la parte de permiso. Aquí están, aquí se definen.  
Y no hay en un mes, literalmente me di a España va a ver que no, que le han robado dinero o cuentas o lo que sea. Porque toda la gente que guarda las contraseñas en el Firefox que no sabe ni que las tiene y todo su vida.  
Luis, busca en Google.  
Pero salgo de aquí, vale, te veo el remoto se lo puede tener en el móvil, no lo sé, móvil.  
Esto lo han hecho los agentes poniéndose de acuerdo. Nada, que no, que no, que no. que no es nada, es como.  
Que no, que no, que no, que esto es, sí, esto es como claro, ¿no?  
Pero para los agentes, eso es como que lo han hecho, él no, el propio cloud, sí, mucho scout, pero eso es de acuerdo. No, no estoy de acuerdo. En teoría, no sé, pero ¿qué es esto tú? Volveremos al trueco. Y esto menos WhatsApp, es for Sale, o sea, eso. No, yo no seguro que he visto.  
Lo que sí que había, lo que sí que dije yo es como una especie de redit para gentes, que sí es lo del mol, es lo del club, pero.  
A ver, cuidado, cuidado con el ruido.  
El.  
El pago ese que su propio campo desarrolló una voz.  
A ver, sí, no, pero no vamos a empezar a entrar en.  
A ver, os cuento.  
Sí, es verdad. Estoy intenta ya, a mí me despierta a las 7:00 de la mañana. Vale, que esto es fácil.  
¿A qué vamos a dedicar esta asignatura que le voy a dar a medias con Juan Carlos Estepa? Juan Carlos Juan Carlos Estepa le conoceréis el horario lo mando actualizado en breve.  
Es.  
Por un lado, tengo las cuatro primeras quiero dar, hay 2 que le haremos mañana y un poquito de sistema financiero, que lo que quiero es cultura general que tenéis que tener cultura general tanto de derecho administrativo, sistema financiero. Voy a repasar cosas rápido para ver si las lleváis. Luego un poquito de modelización financiera pensando en corporate finance.  
Y luego, parte de lo que ya hemos visto de blockchain, de cripto, o sea, al final este es el repaso de la asignatura y si queréis, si estáis fritos, nos lo dejamos ya por hoy.  
Sí.

---

## 🧭 Conexiones
- **Asignatura Central:** [[00 Área operativa/01 Asignaturas/06 MUGRF 2025-26|06 MUGRF 2025-26]]
