---
titulo: "MUGRF – Sesión 1: Sistema de conocimiento, IA y repositorio compartido"
fecha: 2026-10-05
curso: "Máster Universitario en Gestión de Riesgos Financieros (2026-2027)"
sesion: 1
asignatura: Ética
institucion: ICADE
tipo: sesion
estado: preparado
---
---
# MUGRF – Sesión 1: Sistema de conocimiento, IA y repositorio compartido

## 1. Idea central de la sesión

La primera sesión se planteó deliberadamente de una forma poco convencional.

Aunque formalmente la asignatura es **Ética**, el objetivo inicial no fue comenzar por el temario tradicional, sino proporcionar desde el primer día una infraestructura de trabajo que pueda utilizarse durante todo el Máster.

La sesión giró alrededor de una idea:

> **En un mundo en el que los modelos de inteligencia artificial mejoran continuamente, la ventaja no está únicamente en utilizar el mejor modelo, sino en tener bien organizada la información sobre la que esos modelos trabajan.**

Por ello se construyó progresivamente un sistema formado por cuatro capas:

1. **Una carpeta local** como unidad básica de trabajo.
    
2. **Obsidian** como sistema para organizar y conectar conocimiento.
    
3. **Un arnés de IA** capaz de trabajar directamente sobre esa información.
    
4. **GitHub** como repositorio común para compartir y actualizar materiales durante el Máster.
    

La sesión no pretendía que los alumnos dominaran inmediatamente todas estas herramientas. El objetivo era comprender **la arquitectura general del sistema** y comenzar a utilizarla desde el primer día.

---

# 2. Una nueva forma de trabajar

La sesión comenzó con una reflexión sobre cómo está cambiando el entorno tecnológico.

Durante distintas etapas de la informática hubo diferentes recursos críticos:

- procesador;
    
- disco duro;
    
- batería;
    
- memoria RAM;
    
- capacidad de cálculo;
    
- contexto e información disponible para los sistemas de IA.
    

Se utilizó la analogía de la **RAM como mesa de trabajo**:

> Cuanto mayor sea la mesa, más cosas podemos tener abiertas simultáneamente.

En el entorno actual, caracterizado por múltiples procesos, agentes y herramientas trabajando en paralelo, la memoria y la capacidad de gestionar contexto adquieren una importancia creciente.

Pero el argumento se extendió más allá del hardware.

La inteligencia artificial está multiplicando nuestra capacidad para producir, procesar y relacionar información. Por ello aparece un problema nuevo:

> **No basta con generar más información. Tenemos que aprender a gestionarla.**

---

# 3. Primera capa: una carpeta

El ejercicio comenzó creando una carpeta vacía.

La simplicidad era deliberada.

Todo el sistema desarrollado posteriormente debía descansar sobre algo comprensible y controlable por el alumno:

**una carpeta normal del ordenador.**

Esta idea es importante porque evita depender completamente de aplicaciones propietarias.

Los archivos siguen siendo archivos.

La información permanece bajo control del usuario.

Las aplicaciones pueden cambiar, pero la estructura básica puede sobrevivir.

---

# 4. Obsidian: de la biblioteca a la red de conocimiento

## 4.1. La metáfora de la biblioteca

Tradicionalmente hemos gestionado información utilizando una lógica parecida a una biblioteca:

- abrir un documento;
    
- leerlo;
    
- modificarlo;
    
- guardarlo;
    
- cerrarlo;
    
- clasificarlo dentro de una carpeta.
    

Obsidian permite utilizar una lógica diferente.

En lugar de imaginar una biblioteca llena de libros independientes, podemos imaginar una pared cubierta de **post-its conectados entre sí**.

Cada nota representa una pequeña unidad de conocimiento.

La potencia no está solamente en cada nota individual, sino en las relaciones que establecemos entre ellas.

---

## 4.2. El vault

La carpeta creada inicialmente se abrió como un **vault de Obsidian**.

Un vault no es esencialmente una base de datos compleja.

Es una carpeta que contiene archivos.

Obsidian añade sobre esa carpeta una capa de navegación, visualización y conexión.

Esta característica es fundamental porque mantiene separadas dos cosas:

**Información**

Los archivos pertenecen al usuario.

**Herramienta**

Obsidian permite trabajar cómodamente con esos archivos.

---

# 5. Markdown: el formato básico

Las notas utilizadas por Obsidian son archivos `.md`.

`.md` significa **Markdown**.

Markdown puede entenderse como:

> **texto plano hipervitaminado.**

Un archivo Markdown puede abrirse incluso con un editor básico de texto.

Sin embargo, determinados caracteres permiten incorporar estructura y formato.

Ejemplos:

```
# Título principal

## Segundo nivel

**Texto en negrita**

*Texto en cursiva*

- Elemento
- Otro elemento

- [ ] Tarea pendiente
- [x] Tarea realizada
```

La ventaja fundamental es que el contenido no queda encerrado dentro de una aplicación determinada.

Esto facilita:

- portabilidad;
    
- automatización;
    
- búsqueda;
    
- procesamiento mediante scripts;
    
- utilización por modelos de IA;
    
- control de versiones;
    
- conservación a largo plazo.
    

---

# 6. Enlaces y conocimiento conectado

Una de las características esenciales de Obsidian son los **WikiLinks**.

Ejemplo:

```
[[Riesgo de mercado]]
```

Este enlace conecta una nota con otra.

También es posible escribir un enlace hacia una nota que todavía no existe.

Al pulsarlo, Obsidian crea esa nota.

Durante la sesión se construyeron varias notas y se fueron conectando entre sí.

Después se utilizó la **vista de grafo** para visualizar esas relaciones.

El resultado permite entender una idea fundamental:

> El conocimiento no tiene por qué organizarse únicamente como una jerarquía de carpetas. También puede organizarse como una **red de conceptos relacionados**.

Aplicado al Máster, por ejemplo:

```
Gestión de riesgos
      │
      ├── Riesgo de mercado
      │       ├── Volatilidad
      │       ├── VaR
      │       └── Stress Testing
      │
      ├── Riesgo de crédito
      │       ├── PD
      │       ├── LGD
      │       └── Expected Loss
      │
      └── Riesgo operacional
              ├── Procesos
              ├── Tecnología
              └── Ciberseguridad
```

Pero estos elementos pueden, además, enlazarse transversalmente.

El sistema empieza entonces a parecerse menos a un archivador y más a una **red de conocimiento**.

---

# 7. Reducir la fricción

Apareció durante la sesión otro principio importante:

> **Todo aquello que hacemos repetidamente debería requerir el menor número posible de pasos.**

Los atajos de teclado son un ejemplo sencillo.

Si una operación realizada cientos de veces puede hacerse pulsando dos teclas en lugar de siete, merece la pena aprender ese atajo.

Pero el principio es mucho más general.

La automatización consiste precisamente en identificar tareas repetitivas y reducir progresivamente su fricción.

Esta idea aparecerá de nuevo al introducir los agentes de IA.

---

# 8. Segunda capa: el arnés de inteligencia artificial

Una vez creado el sistema de información se incorporó una segunda herramienta: **Antigravity**.

La distinción conceptual realizada en clase es importante:

### Modelo

Es el sistema de inteligencia artificial que razona y genera respuestas.

### Arnés

Es el entorno que permite que ese modelo interactúe con:

- archivos;
    
- carpetas;
    
- programas;
    
- terminal;
    
- código;
    
- herramientas;
    
- otros recursos del ordenador.
    

Un chatbot convencional responde preguntas.

Un agente integrado en un arnés puede además **actuar**.

Puede leer archivos, crear carpetas, modificar documentos, ejecutar código o construir aplicaciones.

Esto aumenta enormemente su utilidad.

También aumenta el riesgo.

---

# 9. Cómo construir un buen prompt

Durante la demostración se presentó una estructura sencilla para pensar los prompts.

Un prompt puede dividirse en tres componentes:

## 9.1. Contexto

Explicar dónde estamos y qué estamos intentando hacer.

Ejemplo:

> Estoy con los alumnos del Máster de Riesgos y quiero enseñarles cómo funcionan conjuntamente Obsidian y un agente de IA.

## 9.2. Petición

Indicar claramente qué queremos.

Ejemplo:

> Preséntate.

## 9.3. Requisitos o restricciones

Indicar qué debe o no debe hacer.

Ejemplo:

> No hagas nada más; únicamente preséntate.

La estructura básica puede resumirse como:

```
CONTEXTO
+
PETICIÓN
+
RESTRICCIONES
```

No siempre será necesario escribir explícitamente las tres partes, pero pensar de esta forma ayuda a mejorar enormemente las instrucciones.

---

# 10. El tono también es información

Se mostró además que el contexto no se transmite solamente mediante instrucciones formales.

Expresiones aparentemente irrelevantes como:

> "¿Qué tal, bro?"

también comunican información.

Indican, por ejemplo:

- informalidad;
    
- proximidad;
    
- tono esperado;
    
- tipo de relación.
    

Los modelos interpretan todo el contexto disponible.

Por ello, **la forma en que preguntamos también condiciona la respuesta**.

---

# 11. El agente trabajando sobre nuestra información

Antigravity se abrió directamente sobre la carpeta utilizada como vault.

A partir de ese momento el agente pudo observar su contenido.

Se le pidió inicialmente que simplemente dijera qué veía.

Identificó:

- configuración de Obsidian;
    
- archivos Markdown;
    
- estructura de carpetas;
    
- notas existentes.
    

Después comenzó a actuar sobre ellas.

---

# 12. Generación automática de conocimiento

Como demostración se pidió al agente crear nuevas notas relacionadas con gestión de riesgos.

El sistema generó contenido relacionado con:

- introducción a la gestión de riesgos;
    
- riesgo de mercado;
    
- riesgo de crédito;
    
- riesgo operacional;
    
- riesgo tecnológico;
    
- ciberseguridad;
    
- stress testing;
    
- otros conceptos relacionados.
    

Posteriormente se reorganizó la información creando una estructura más ordenada.

La demostración permitió visualizar un cambio fundamental:

> Ya no tenemos únicamente un sistema donde nosotros escribimos notas. Tenemos un sistema donde **un agente puede ayudarnos a construir, organizar y mantener esas notas**.

---

# 13. La importancia de ordenar antes de escalar

El agente fue capaz de generar gran cantidad de información muy rápidamente.

Precisamente por ello apareció inmediatamente otro problema:

**el desorden.**

Se pidió entonces reorganizar el contenido mediante carpetas e índices.

Este momento ilustra una de las ideas más importantes de la sesión:

> **La velocidad de generación sin arquitectura produce caos más rápidamente.**

La IA permite escalar.

Pero antes de escalar necesitamos estructura.

---

# 14. Manuales generados durante la sesión

Se pidió al agente generar materiales dentro de la carpeta de primeros pasos.

Entre ellos:

- manual de Markdown;
    
- manual de Obsidian;
    
- manual de Antigravity;
    
- ejemplos;
    
- diagramas;
    
- elementos relacionados con gestión de riesgos.
    

Los documentos se fueron refinando mediante nuevas instrucciones.

Esto permitió observar otra característica esencial del trabajo con LLM:

> **La primera respuesta rara vez tiene que ser la respuesta definitiva.**

El proceso adecuado es iterativo:

```
Pedir
↓
Observar
↓
Evaluar
↓
Corregir
↓
Ampliar
↓
Volver a evaluar
```

---

# 15. Los modelos no son deterministas

Se insistió explícitamente en que un LLM puede proporcionar respuestas diferentes ante peticiones similares.

Por ello:

> **Todo contenido generado debe revisarse.**

El modelo puede:

- olvidar instrucciones;
    
- añadir elementos no solicitados;
    
- interpretar incorrectamente una petición;
    
- inventar información;
    
- mezclar idiomas;
    
- producir una respuesta formalmente convincente pero incorrecta.
    

La sesión mostró varios ejemplos reales de este comportamiento.

No se ocultaron los errores: se utilizaron como parte del aprendizaje.

---

# 16. "Conócete a ti mismo": tecnología y ética

La referencia a la inscripción de Delfos —**"Conócete a ti mismo"**— permitió conectar la demostración tecnológica con la asignatura de Ética.

También se relacionó con _Matrix_ y con la idea de conocer las propias limitaciones.

La tecnología amplifica nuestras capacidades.

Precisamente por ello resulta todavía más importante conocer:

- qué sabemos;
    
- qué no sabemos;
    
- qué puede hacer la máquina;
    
- qué no puede hacer;
    
- cuándo debemos confiar;
    
- cuándo debemos verificar;
    
- qué responsabilidad conservamos nosotros.
    

La ética tecnológica no consiste solamente en imponer restricciones externas.

Comienza por **comprender nuestras propias capacidades, limitaciones y responsabilidades**.

---

# 17. Planificar antes de ejecutar

Al activar modos en los que el agente puede trabajar con gran autonomía aparece un problema evidente.

Un agente con permisos suficientes puede:

- modificar archivos;
    
- borrar información;
    
- ejecutar comandos;
    
- instalar software;
    
- acceder a carpetas;
    
- producir efectos no deseados.
    

Por ello se propuso una práctica fundamental:

> **Antes de permitir que un agente ejecute una tarea importante, pedirle que explique qué piensa hacer.**

Es decir:

```
Quiero conseguir X.

Antes de hacer nada:
1. dime cómo lo vas a hacer;
2. explícame qué archivos vas a modificar;
3. identifica los riesgos;
4. espera mi autorización.
```

La idea puede resumirse como:

> **Planificar antes de ejecutar.**

---

# 18. Control humano

La automatización no elimina la responsabilidad humana.

Al contrario.

Cuanto mayor es la capacidad de actuación de la herramienta, mayor debe ser nuestra capacidad de supervisión.

El esquema correcto no es:

```
Humano → IA → resultado
```

sino:

```
Humano
  ↓
Objetivo
  ↓
IA propone
  ↓
Humano supervisa
  ↓
IA ejecuta
  ↓
Humano verifica
```

Este principio es especialmente importante en gestión de riesgos.

---

# 19. Copias de seguridad y entornos de trabajo

Se recomendó trabajar con especial cuidado cuando un agente tiene capacidad para modificar archivos.

Una estrategia sencilla consiste en separar:

### Información original

La información que no queremos poner en riesgo.

### Zona de trabajo

Una copia sobre la que el agente puede experimentar, modificar o incluso equivocarse.

Si el resultado es correcto, posteriormente puede trasladarse al sistema principal.

Principio:

> **Si algo es importante, no permitas que un agente experimente sobre la única copia existente.**

---

# 20. El problema de los errores acumulativos

Un modelo puede cometer un pequeño error.

Ese error puede convertirse posteriormente en contexto para nuevas operaciones.

El agente puede entonces construir nuevas conclusiones sobre una premisa incorrecta.

La consecuencia es una posible cadena:

```
Error pequeño
↓
Información incorrecta
↓
Nueva inferencia
↓
Nueva información
↓
Amplificación del error
```

Por ello la supervisión debe realizarse durante el proceso y no únicamente al final.

Esta lógica resulta especialmente relevante para la gestión de riesgos:

> **Una pequeña desviación no detectada puede convertirse en una fuente creciente de riesgo.**

---

# 21. Tercera capa: crear artefactos

La siguiente demostración pretendía mostrar que un arnés de IA no sirve únicamente para gestionar notas.

Se pidió crear varios artefactos.

Entre los ejemplos aparecieron:

- una página web;
    
- elementos interactivos con JavaScript;
    
- diagramas Mermaid;
    
- un simulador relacionado con riesgos;
    
- código Python;
    
- un ejercicio de backtesting.
    

La intención no era enseñar programación en profundidad.

La idea era mostrar que la barrera entre:

-

# Transcripción
5 de octubre de 2026, 8:05p.m.
1 h 36 min 31 s
A ver, os cuento.  
Desde hace 1 año y medio, no desde hace 1 año.  
Stop.  
Este es el segundo curso que grabo absolutamente todo lo que, bueno, ahora vamos a ir viendo cosas, pero en principio grabo. O sea, el año pasado grabé todas las clases que di, ahora, o sea, ahora vamos viendo cosas. Dijo el programa este, Claudia.  
Y lo que se está grabando todo y me la suda, me va de verga.  
¿Tenéis que ser concepto? Casi todo, salvo el cuidado, el cuidado en relación con, o sea, no vosotros conmigo, sino pues al final vamos a estar aquí un tiempo y nada más. Antes ha comentado Carmen lo de que no vais a tener tiempo para relajaros.  
Yo creo que es perfectamente compatible, estar relajado, currar un montón y tan mal. No solo es compatible, sino al nivel en el que estamos, con la inteligencia artificial, con la locura que estamos viviendo, con la cantidad de información, si no conseguimos estar relajados, lo mismo estamos poniendo en riesgo  
Poquito dentro de la salud.  
Perfecto, dudas, preguntas, voy a ir rápido y al grano, rápido con las cosas. José Antonio Vega está por aquí, estoy José Antonio Vega está por aquí, debería de pasar. Si os quedáis con esos papeles en resto de vuestra vida, yo José.  
Me llamo Carlos Antes, sí. ¿Y por qué hay algún Carlos? ¿Hay algún Carlos?  
A Enrique, sí, más o menos le tenía Mario, te tengo fichado.  
Miguel Miguel, Miguel o Miguel Alberto, lo que tú quieras, no.  
Es un poco de decir.  
¿Cómo tu hermano? ¿Cómo te llamas? Hermano me dice huevón. Vale, no, ya a ver, todos tenéis el ordenante.  
Me estoy metiendo en un en un sitio donde suelo ir el mes de, o sea, este mes de octubre, cuando no sé a dónde ir, me meto en octubre. Es mi carpeta. Cada uno os metéis en vuestra carpeta, en la carpeta que sea. Me seguís una carpeta que tengáis fácil acceso.  
¿Puede ser el escritorio, sabéis? Y aquí voy a abrir una nueva carpeta, nuevo carpeta y esta carpeta lo voy a llamar.  
Primer día máster de riesgos.  
Es más, no la dejo aquí. De momento tengo aquí una carpeta que es máster de riesgos, pero es una carpeta, es una carpeta vacía, ¿vale?  
La podéis llamar como queráis, todos lo habéis abierto.  
Vale.  
Esto es una carpeta vacía ahora.  
Mi ordenador tiene 8 gigas de RAM. ¿Sabéis lo que significa eso? ¿Alguno o todos?  
Google.  
Es poco una ******, correcto, o sea, 8 gigas, a ver, 8 gigas de RAM. La RAM es como la mesa de trabajo.  
Cuanta más pequeña es la mesa de trabajo, pues más cariño hay que tener. No suelo tener problemas, pero eso me obliga de vez en cuando a tener abierto esto. Chrome consume, Chrome consume mucho y de momento.  
Con Chrome lo que voy a hacer con ello.  
Y me lo cargo a saco. Luego, si hay que volver, se vuelve, pero yo me lo estoy cargando por mí mismo. La RAM es como la mesa de trabajo. La RAM es memoria.  
Al principio voy muy rápido, muy rápido. Luego os paso la transcripción con resúmenes y me paro donde yo crea que hay que pararse un poquito más. Al principio, antes de que nacierais, alguno estaba vivo con las Torres Gemelas.  
¿Te acuerdas? Vale, ¿alguno más estará vivo?  
Antes de lo de la, o sea, José Antonio y yo, cuando trabajábamos antes, había unos ordenadores. Cuando trabajábamos antes, había unos ordenadores que tenían, se hablaba del Pentium del 386, el procesador era relevante.  
Y luego el disco duro era relevante también. Mi primer ordenador no tenía disco duro, el segundo 20 megas de RAM. Luego pasamos a los móviles. Cuando tú diseñas pensando en los móviles, empieza a ser relevante la batería.  
O sea, hay vosotros os descargáis 2 aplicaciones, puede que sea la misma aplicación y hay una que te deja el móvil seco de batería. En cambio, hay otra que tira muy bien de batería. Me seguís y ahora que estamos trabajando con inteligencia artificial, con varios procesos en paralelo, empieza a ser relevante la RAM. Hablaremos de Nvidia, hablaremos de microprocesadores.  
Hablaremos, os diré también cómo se llama mi asignatura, pero hoy no.  
Porque lo de hoy es transversal. las Bueno, sí os lo digo, la asignatura se llama ética y vamos a hablar de bastantes cosas de ética. Ética tiene que ver con hacer las cosas bien, pensar y luego hacer. Y creo que lo mejor que puedo hacer el primer día es deciros que me estoy saltando el programa La Bartola, pero quiero que tengáis herramientas que os permitan desde el primer día.  
Hacer que vuestra vida sea mucho más sencilla.  
Sí, bien, la RAM, esto por un lado, he abierto una carpeta vacía.  
Voy a abrir una herramienta que deberíais de tener todos, que es obsidia.  
Si algunos no la tienen, no pasa nada, no toquéis nada. De momento tenéis que ver algo parecido a esto si lo abrís.  
Alguno no está aquí.  
Bing.  
Bueno, pero se parece esto, vale, cierro cualquier otra cosa. Tengo una carpeta así, todos tenéis una carpeta así parecida.  
A ver, estáis, espera, no toquéis nada, los que estéis en la anterior no toquéis. ¿Estáis en algo parecido a esto?  
Si estáis en algo parecido a esto.  
Si estáis en algo parecido a esto, pero que puede ser algo parecido a esto.  
Y estáis en algo parecido a esto, tocáis aquí abajo y abajo pone una cosa que pone administrar bóvedas.  
Y entonces venís aquí.  
¿Estáis todos aquí?  
Tell me.  
A.  
Bueno, no vas a hacer encuestas de satisfacción, voy a saco, estoy aquí todos.  
¿A ti no?  
Ahí lo veis, aquí sí.  
Dice abrir carpeta.  
¿Y qué carpeta tenéis que abrir?  
La que tenéis antes vacía, o sea, la que habéis abierto antes.  
¿Primer día de máster, yo la llamo así, pum, seleccionar carpeta, vale?  
Y ahora tenéis que estar todos en una cosa así.  
Os cuento, todas las herramientas que vamos a ver hoy trabajan sobre una carpeta.  
Y esa carpeta, o sea, en general.  
¿Alguno es ingeniero informático o algo de eso? ¿Son ingenieros informáticos? Uno, el año pasado teníamos 2, yo creo, Ángel y tengo que explicar que son días. Bueno, varios días de entrar todo el año pasado. ¿Dónde estás, Álvaro?  
Está bien, estamos ahí.  
Obsidian ques.  
Pensar que hasta ahora vuestra vida, cuando gestionabais información, tenía que ver con la metáfora de la biblioteca me vale.  
Veis una biblioteca, cogéis un libro, lo cogéis, lo abrís. Los libros no hay que escribir, pero se puede escribir algo, lo guardáis, lo cerráis. Obsidian es eso mismo, es un gestor de información, pero en lugar de con libros, con notas de post.  
Notas de poste. ¿Qué voy a hacer ahora? Empapelar metafóricamente. Voy a empapelar esto de notas de poste. Vale, voy a empezar a tirar notas de poste.  
En la carpeta que estaba vacía, ahora aparece una carpeta oculta que se llama obsidian.  
Pero vengo aquí. Ay, no pasa nada, no pasa nada. ¿Te quedas con el contacto alguno de esta gente? Sí, sí, me he metido en el grupo. Es que esto merece la pena tenerlo controlado porque es magia, de verdad. Hasta luego, chao. Voy a forrar todo de notas de post.  
¿Entendí la idea?  
¿Qué acabo de hacer? Pues abrir 2322 notas. ¿Y qué voy a hacer? Pues igual que las he abierto, las he borrado y se ha borrado. ¿Y qué voy a hacer? Volver a abrir otras cuantas. ¿Y qué voy a hacer?  
Right.  
¿Hay 28 gigas, no?  
Borrar.  
Borrar, no preguntar de nuevo, eliminar, listo, no preguntar de nuevo es o sea.  
Hay una idea también fundamental, que es la fricción, o sea, merece la pena que os, o sea, el Excel lo manejéis más o menos todos.  
Vais a tener clase con Fernando Hernández Sobrino y una de las cosas en las que insistirá mucho es en los short cuts, en los atajos de teclado. No hay que sabérselos todos, pero si en vuestra vida hay elementos o hay momentos en los cuales repetís cosas con frecuencia, si podéis hacer algo tocando una o 2 teclas en lugar de tocando 7.  
Hacerlo tocando una o 2 teclas, listo.  
Notas de posting, voy a ir, pues porque haya un poco, me voy a quedar.  
¿Con la 2, vale?  
Y.  
Hola, esta es mi primera nota.  
Y aquí puedo.  
Poner cosas, listo.  
Entro aquí que tengo. Hola, esta es mi primera nota. ¿Veis que el nombre coincide el nombre del archivo?  
¿Y este tipo de archivo todos sabéis alguien no sabe lo que es la extensión de un archivo?  
¿Extensión de un archivo o suena?  
Google.  
Vale, este es el nombre de un archivo y en mi caso o en vuestro caso, yo lo que os recomiendo que hagáis es que aquí le deis en dentro de ver.  
Mostrar y que extensiones de nombres de archivos, si no le dais a mostrar, no aparecen y la extensión es después del nombre del archivo aparece un punto y pueden ser 23 o cuatro letras.  
Os sonarán, por ejemplo, extensiones como PNGIF JPG.  
Son extensiones de.  
Archivos que tienen que ver con imagen.  
PNG son gráficos vectoriales, GIF son imágenes, pero que son vídeos que se mueven poquito, que tienen posibilidad de moverse.  
MP 3, MP cuatro, MP 3 es sonido, MP cuatro M 6. Esto es una extensión que se llama punto MD, MD es markdown. Si yo quisiera abrir esto desde fuera, doy con el botón derecho, abrir con el bloc de notas.  
Y veis que dentro del archivo pone y aquí puedo poner cosas que es texto claro.  
Listo.  
Go.  
Y.  
¿Qué ventaja tiene auxiliar? Que no tengo que abrir, guardar, cerrar. Voy en automático, voy a abrir otra nota.  
Y.  
Esta es la segunda.  
Entendéis que he abierto un archivo, he creado archivo, estoy escribiendo dentro del archivo y aquí y bueno.  
Open Whisper.  
Y aquí voy a poner la segunda nota con un enlace.  
Open Whisper es lo que me permite dictarle. En lugar de escribir le dicto, luego os os paso referencia a todas las herramientas que voy a enseñar son de código abierto. Open Hay Whisper Flow que hay que pagar 12 pavos. Open Whisper con una API de Grok con Q.  
Lo vamos viendo todo, no os preocupéis, pero Open Whisper es lo que uso para dictarle.  
Y aquí voy a poner un enlace. ¿Qué es un enlace? Estoy dentro de.  
De la nota y abro un corchete, el corchete es Alt GR, el botón de Alt GR y al lado de la P abrís corchete uno y 2.  
Y aquí puedo poner un enlace con.  
La primera nota, por ejemplo, listo.  
¿Y si aprieto aquí voy a la primera nota, con quién voy a enlazar la primera nota?  
¿Pues con la segunda, veis?  
¿Qué puedo pasar de una nota a otra?  
Voy a crear ahora.  
Un enlace vacío.  
Y lo voy a decir.  
Esta será la tercera nota.  
¿Por qué digo que esta será la tercera nota? Porque no está creada cuando aprieten este enlace que me va a hacer el programa.  
Me ha creado la tercera nota.  
Y voy a enlazar la tercera nota, por ejemplo, con la primera, listo.  
Y como esta ya es.  
La tercera nota, esta es la tercera nota y me pide: estoy cambiando el nombre. ¿Quieres cambiar el nombre en todas? Esto solo hay que hacerlo una vez, siempre actualizar y hasta cuando cambias el nombre del archivo, te cambia el nombre en todas las referencias de la nota. ¿Me seguís?  
Pamela.  
Lo del sí, lo del corchete.  
Aísla.  
O si en lugar de enlazar tú pones lo que sea, aprietas en lo que sea y se crea un archivo con el nombre de lo que sea.  
Pero poco, o sea, no hables en función de adelantar una.  
O.  
Como yo estoy siempre.  
No, 2 corchetes.  
Otro.  
Bueno.  
2 seguidos más o menos.  
¿Los tienes en si no te funciona, no puedes decir probablemente la.  
A ver.  
That's what's going to do.  
Really go.  
No, esto no me había pasado nunca, más o menos lo que he hecho es ir referenciando. He ido las notas, las he ido referenciando y llega un punto que lo que hago es abro 2 corchetes y en lugar de.  
Coger una de estas.  
Me lo invento.  
Y cuando tú aprietas aquí ya te crea una nueva nota.  
Y ahora aquí, por ejemplo, voy a abrir la vista gráfico.  
Y tengo un gráfico con las telenotas.  
¿Veis que es información, conocimiento entrelazado?  
Es.  
Tipo.  
No tengáis a ver, estáis aprendiendo y yo lo que estoy haciendo es daros elementos de juegos sencillos.  
Pero que son elementos de juegos, no todos cogeréis todo a la misma velocidad y eso es aprendizaje. Pongo la lista, la nota, la lista de gráfico, Álvaro.  
Álvaro, ¿ves que la nota me lo invento solo está enlazada con la tercera? Claro, pues aprieto en me lo invento.  
No hay ningún enlace dentro y lo voy a enlazar ahora con.  
Con la segunda.  
Con la segunda es solo vale.  
Vuelvo a la vista gráfico.  
Y ahora me lo invento, está enlazado con la segunda y este enlace de la tercera. ¿Por qué está enlazado con la tercera? Porque de la tercera hay un enlace que tira a la a la de un elemento. ¿Me seguís? Es el camino original.  
Bueno, a ver una.  
Una limpia, un enlace que.  
A ver, puedo crear, voy a crear 2 cosas, ¿vale?  
Erico, por un lado, voy a crear una.  
Una nueva nota, esta es una nota.  
¿Qué he puesto, no?  
Hola, no, lo que hago es salir de aquí.  
Salgo salgo porque salgo para poder pinchar enlace, si no sales no puedes pinchar el enlace.  
Pues.  
Lo.  
Switch.  
Listo.  
¿Qué es el formato markdown?  
¿Qué es el formato markdown? ¿Qué tiene de especial? Es texto plano, pero determinados caracteres, determinados caracteres los recoge como si fueran formato. Es un texto plano hipervitaminado, por ejemplo.  
Si pongo, si pongo asterisco.  
Hola, el un asterisco es cursiva. ¿Me seguís? Un texto entre 2 asteriscos es cursiva si en lugar de un asterisco.  
Pongo 2 asteriscos, esto es negrita.  
Sí.  
Parecido a WhatsApp, pero parecido más bien a lo que te da GT cuando le preguntas algo y te da un texto raro.  
Ese texto raro lo copias y lo pegas aquí y va directamente formateado. Por ejemplo, un hashtag. Esto es un hashtag, hola, pero si pongo hashtag.  
Y espacio, esto es título uno.  
Y esto es.  
Título 2, listo.  
Hasta aquí bien.  
What?  
No.  
2 asterisco y espacio.  
No os preocupéis, os estoy dando mucha información en poco tiempo y os voy a dar todavía mucha más, pero no, pero insisto, no os preocupéis, listo de momento más o menos.  
¿Qué es esto que os he enseñado? Si solo fuera por obsidia, no habría tenido tanta y tanto interés en meteros esto la primera sesión a primera hora.  
Pero all me vas.  
Sí.  
Súper ratón, no sabéis quién es, ¿no?  
Y si digo, es que es una cosa que he descubierto el otro día, José Antonio, vas a flipar. ¿Alguien sabe lo que significa sorbo o sorba? ¿O con vosotros ya también lo tuve el otro día o no?  
¿Dónde estamos cuando? Espera, chorro, ¿sabes lo que significa? Pues los de 20 años no.  
De los años de Madrid.  
Pues los del interior no lo saben.  
Habrá gente aquí que no lo sepa.  
O sea, Luis Toro.  
es la gente de más edad es como el novio o la novia o la pareja es diferente el chaval es como el chaval es mal es madre bajero es de la baja  
A ver, ¿puedo seguir? A ver, ¿entendéis lo que acabo de hacer?  
¿Entendéis lo que acabo de hacer? He creado post-its, he sacado los rotuladores de colores y he pintado un poco encima de los rotuladores de colores. Esto lo dejamos así.  
Abro la otra antigravity, ¿vale?  
Estoy abriendo Antigravity y aquí en Antigravity todos deberíais de ver algo parecido a esto sin esto de la izquierda que tengo yo, pero algo parecido a esto.  
¿Alguien tiene la cuenta? ¿Alguien ha usado alguna vez con Google lo de Gemina y de estudiante?  
¿Lo tenéis todos? ¿Se caduca este mes? Sí, en octubre. Hay una oferta, a ver, yo... ¿Quién no tiene Google de estudiante?  
Vale, eso se arregla en 1 segundo.  
A ver, no quiero meter, no quiero abrir el WhatsApp ahora. ¿Quién tiene WhatsApp web abierto con Google de o sea?  
¿Alguno tenéis WhatsApp web abierto? Manda en el grupo de WhatsApp el enlace con para hacerte la cuenta de Google gratis el año.  
No, si tienes 2, bueno, tú sí.  
Creo que sí, pero tienes que abrirte otro usuario y por cuenta de Gmail.  
Si como habla tienes otra universidad, tienes que abrir una nueva cuenta Gmail.  
Entonces, su cuenta de Gmail puedes usar.  
Una diferencia. ¿Lo has compartido, José Antonio? Sí. Perfecto.  
¿Tenéis abierto tigres y todos?  
Por un lado, para no quemar tokens.  
Para no quemar token os ponéis todos y en o sea, elegís el modelo Gemini 3.6 plus low.  
Cuidado, no cojáis el 3.1 pro low, sino 3.6 flash low, vale.  
Con el modelo low tiráis para lo que queráis, de sobra bien.  
Esto qué es?  
Esto así os debe de sonar a GPT, os debe de sonar a un LLM. Aquí le podéis preguntar cosas y te responde como si fuera GPT.  
Pero además, permite.  
Lo que vamos a hacer ahora, me estáis siguiendo más o menos todos. Álvaro, estás ahí.  
Voy a abrir.  
¿Aquí pone project a la izquierda, no?  
Y donde projects aparece Create New Project, que es una carpetita.  
Le doy a create new project.  
¿Y qué carpeta hay que coger?  
¿Dale antes, vale?  
Acabo de abrir antigravity con la carpeta.  
¿Qué tal, bro? Estoy aquí con mis alumnos del máster de riesgos. De momento, bueno, les quiero enseñar Obsidian y Antigravity todo junto, pero no quiero que hagas nada más, salvo presentarte.  
Estoy con mis alumnos del máster de riesgos. De momento bueno les quiero enseñar Obsidian y Antigravity todo junto, pero no quiero que hagas nada más, salvo presentarte, ¿vale?  
Todo sale lo que es un pronto.  
Esto es un prompt, parte de un prompt.  
Aunque parezca, a ver, lo de Bro, puede que haya matado 5 gatos, haya secado.  
Estoy aquí, o sea.  
¿Se le puede el prompt? Hay 1000 formas de 1000 formas de clasificar los prompt en mi cabeza. Un prompt tiene 3 partes. En general, esto es una universidad de los jesuitas. Antonio Arroyo, ¿te acuerdas de él?  
Bueno, falleció, casi me casa, no me dejaron casarme porque la lio en un bautizo, yo creo antes, una semana antes o no, pero soy fan absoluto de él y este me decía que los que nunca tendían una tendencia a dividir todo entre partes.  
La nube desenlace.  
¿Te acuerdas? Pues de pronto está dividido en repartes.  
Una primera es el contexto que me das el contexto fundamental.  
Yo le estoy situando, estoy con mis alumnos del máster de riesgos, ¿veis?  
De momento, bueno, les quiero enseñar obsidia y anti granity y todo junto. Eso es parte del contexto, es parte de lo que quiero hacer, contexto.  
Petición, estoy haciendo una petición clara.  
Sí, preséntate y luego requisitos asociados con la salida. Aquí cuesta un poco más verlo, pero no quiero que hagas nada más, no quiero que hagas nada más, solo quiero que te presentes. ¿Me enseguís? Te estoy dando contexto, estoy diciendo lo que quiero.  
Le estoy diciendo como quiero, lo que quiero, listo.  
Le doy a la entera.  
Luego, al decirle qué tal bro, le estoy mandando también un mensaje a la máquina.  
Hola.  
O que estamos en un ambiente informal.  
Hola a todos, un saludo muy especial para ti y para todos los alumnos del máster de riesgo. Me presento, soy AntiGravity, un asistente de inteligencia artificial avanzado diseñado por el equipo de Google DeepMy. Estoy pensado para trabajar mano a mano con vosotros en proyectos de programación, análisis de datos, automatización de tareas y gestión de conocimientos. Si le hubiera dicho que sois alumnos.  
Del máster de costura me hubiera hablado ahí de modelaje, de o sea, de páginas web, de diseño, no sé qué. Es genial estar hoy aquí en vuestra clase. Si combináis la potencia obsidian para la organización del conocimiento y notas vinculadas tal que mola, que mola. Tenéis un tándem brutal, mucho éxito en la clase y quedo a vuestra disposición para cuanto para cuando me necesitéis. ¿Listo?  
Presentate se ha presentado.  
Perfecto, ahora quiero que mires la carpeta en la que he abierto. Dime qué ves. No quiero que hagas nada más, salgo de decirme lo que ves.  
Vale, me está pidiendo permiso. Yo le voy a decir que permiso a todos y lo de los permisos es un poco rollo y en paralelo con el permiso que me está pidiendo, me meto aquí en los 3 puntos.  
Project Settings y lo que le voy a decir es en agent settings.  
Turbo mode, es decir, que no me vuelve a pedir un permiso nunca.  
Importante, esta herramienta es muy poderosa.  
Si no la conturas bien, le puede hacer, puede borrar cosas sin permiso, las puede hacer cosas que pueden.  
¿Acabado haciendo daño en el equipo, me seguís?  
A.  
Me he metido aquí en el proyecto, en los 3 puntos, he apretado los 3 puntos y pone Project Settings y dentro del Project Settings I en Settings y aquí he seleccionado el modo turbo.  
Que es que no me vuelve a pedir permiso y luego es una herramienta poderosa. ¿Yo cómo funciono con ella? En lugar de decirle, te digo, quiero esto, dime cómo lo vas a ver.  
Y luego en ese, dime cómo lo vas a hacer, estoy yo ya teniendo cuidado con el con el con lo que vaya a hacer. Así él me dice lo que va a hacer, yo ya sé lo que va a hacer. Muchas veces con esto empiezas a dar permisos y no lees, o sea, no tienes tiempo para leer. Es mucho mejor cambiar, dime lo que vas a hacer.  
Entonces te dejo hacer lo que sea que vayas a hacer.  
En la carpeta actual veo lo siguiente, directorio de configuración obsidia, archivos de notas markdown, esta es esto tal cual.  
Perfecto, de primeras quiero que vea que vean ellos cómo puedes funcionar. Me gustaría que en lugar de las notas que o además de las notas que hay, crees unas 8 notas más y las entrelaces.  
Home.  
Todas estas pantallas para que vean cómo es para tener, sí.  
Hacia la derecha debería.  
Es que es bastante cuando dices.  
Gracias, bro.  
Yeah.  
Yes.  
Hola.  
Anda.  
¿Habéis ¿Habéis visto que le debería de haber dicho aguanta, no empieces todavía con el riesgo de creer, pero ya te ha venido arriba?  
This.  
Le dicen lo de.  
Yes.  
Tengo de lo que pasa.  
Yeah.  
That's in Manuel.  
Pues es que el modelo está el elegido su modelo de.  
That's not.  
That's good.  
You.  
Se pide el permiso.  
Rock.  
¿Veis la carpeta que lo he llenado?  
A ver.  
Importante, veis por un lado la carpeta y luego que lo he llenado.  
Está estupendo, pero jo, menudo viaje has pegado. Me encanta lo que has hecho. Lo que pasa es que antes de ir tan rápido quiero ordenar un poco la vida. Por un lado, pon una carpeta que sea la carpeta número cero, donde metas las no quiero borrar nada de momento, las notas primeras que había.  
Luego pon una carpeta que sea la cero 2 en la que pongas esto de conceptos fundamentales del riesgo y luego una carpeta que sea cero uno, que ahora te digo que meter dentro, que sean primeros pasos, allí un índice fuera donde vayas guardando todo para que nos podamos ordenar la vida también.  
Seguís.  
Que le he pedido un poquito de orden, un poquito de orden en la vida.  
****.  
Google.  
Pasa de todo ninguno, ya está de todo, porque luego el mismo activer que si necesita los plugins te los va poniendo.  
¿Pablo? Sí, nada, es que me pone que todo unos requisitos para para adquistarme. Lo mismo, lo mismo que ya estás intentando entrar desde tu cuenta personal. Bueno, me quiero una, me quiero una cuenta. Sí, pero todavía estás blogueado en tu navegador, tienes la cuenta de tu día. Me tienes la pestaña de incógnito y logéate desde ahí.  
Eso es.  
I don't know.  
Vivir.  
Cortana.  
What's not?  
O.  
Base.  
¿Veis qué bonito me lo ha dejado?  
Índice principal.  
Notas iniciales.  
Primeros pasos, conceptos fundamentales, introducción a la gestión de riesgos, nota principal.  
Riesgo de crédito, riesgo de mercado, riesgo operacional.  
Vale.  
Listo.  
¿Cómo hago para gestionar esto, José Antonio? Restaurando hacer la derecha, permite el asignar la doble o si no arriba. Esto como estaba antes. No, si la restas hacia los laterales, pero con el ratón a la altura del centro de la pantalla. Bueno, hay que venir aprendido por.  
Por mi parte, visto esto.  
¿Cómo lo veis?  
¿Encargar el qué?  
Al control supreme.  
Administrador de procesos.  
Hello.  
Google.  
Mis doble tareas.  
Perdón.  
A.  
Pero no lo sé.  
En principio el mío no es un, o sea, mi ordenador, este ordenador yo creo que es antes de.  
Para.  
Google.  
Creo que no.  
¿Cómo me llevas el pan?  
¿Lo siento, pedir la de la universidad?  
Hola de la universidad podéis entrar, empresa, digamos a.  
Pero que voy.  
Con la comillas deberíamos de poder. Bueno, a ver una cosa fundamental, esta herramienta que se estoy enseñando antigravity.  
Anti-gravity es el arnés. Esto se llama arnés. Un arnés es la caja en la cualmente es un modelo. Es el arnés de Google, pero GPT tiene su propio arnés.  
Claude tiene su propio arnés, que es Claudia Cowork, y si tiene su propio arnés de código abierto que yo todavía no he usado y existe Open Code, es de código abierto con modelos gratuitos que tiene su propio arnés. Yo estoy usando el de Google porque va rápido, o sea, relación calidad precio ni tamal.  
Listo.  
¿Pobáis dudas?  
Hola, este paso de para que.  
Play.  
El proyecto.  
Primero hay que abrir.  
No.  
¿Qué tal estáis? ¿Qué tal vais?  
Yeah.  
Send a message.  
Good.  
Y tenemos un problema, es que estaba años ya llegar al que ya había, le dice que no puede descargar.  
Para eso tú dile que tienes más de 18 y te pido una foto.  
Es que cambiar la el amor.  
Pero no quiero saber lo que hace Lourdes con esa cuenta de un menor.  
Claro, es que me depende.  
A ver, sigo rápido, sigo rápido porque ya la mecánica más o menos lo habéis cogido.  
Te cuento en la en la carpeta de primeros pasos quiero que me hagas un manual de formato Markdown, un manual de Obsidian y un manual de Antigravity.  
¿Y se te ocurre algo más que podamos enseñarles que esté chulo?  
Que quiero lo que antes os he explicado, entendedme de mala manera.  
Lo que antes os explico de mala manera os lo quiero explicar ahora de forma FT con manual y compartirlo con vosotros.  
Pues mira, diagramas.  
Idea por un lado.  
Me ha creado.  
Me ha creado.  
Primeros pasos.  
Cuidado aquí, ahora sí lo he hecho bien, pero entendéis que cada vez que le preguntas a un modelo a un LLM te da una respuesta diferente.  
¿Entendéis que hay que revisar todo y que a veces se puede haber olvidado de rellenar esto?  
¿Qué me ha hecho?  
3 manuales y he añadido 11/4. ¿Por qué? Pues porque le ha apetecido.  
Manual de format de Obsidian. Obsidian, ¿qué es? Conceptos fundamentales: vault, WikiLinks, vista de grafo, atajos de teclado, bloques especiales.  
Listo.  
A ver, le puedes.  
El de obsidian me encanta, pero como ejemplo quiero que lo hagas un poquito más largo.  
Más completo y que mole y además adáptamelo un poquito a los riesgos. Y si puedes poner como ejemplo lo de la queimada de los gallegos, lo del conjuro de la queimada, bueno, y me encanta lo del Pazo de Ferfiñans, lo de conócete a ti mismo, tal en gallego y en español, porfa.  
Quiero que este el manual de obsidian, que así luce poco, que luzca un poquito más.  
Voy a subir el modelo un poco, bueno, no es necesario que lo suba, digo por la velocidad.  
Manual de obsidian.  
Mateos, El Consuro.  
A ver.  
Me gustaría que fuera el lo de la queimada entero, el largo y lo del pazo de Ferfiñans también.  
¿El Pazo de Cerciñás, dónde está Cambados, Alvariño? Y es una escritura que ahora lo veréis, conócete a ti mismo, conócete a ti mismo, por semejar a Dios, proceden como pinturas de la púa mano, cruce el ovicio, abraza la virtud, entonces el calebo.  
Pero hay un parrafito que a mí es el que me gusta mucho y es el que me gusta.  
Trata de rodearte de gente que sea mejor de ti.  
No sé por qué me he acordado de Pedro Sánchez y de la relación, lo mismo lo hago. Bueno, a ver.  
Mirad, búhos lechuzas, José, ¿lo reconoces?  
No sé si es entero.  
No, este no, o sea, el del paso lo reconozco yo.  
Sí, lo del paso no lo he encontrado.  
Lo del paso que le he pedido, yo creo que no lo ha encontrado.  
¿Veis? No lo ha encontrado con esto también que quiero que veas, que no todas las me pongo un cabectrónico, quiero encontrarme un cuento.  
Herramientas valen para todo y las.  
Map.  
Yo pongo cabezón lo encuentro.  
Quiero la inscripción del plazo de Ferfiñal Centera en gallego y en español, porfa.  
Entera en gallego y en español, porfa.  
Que me apetece y luego ahora vuelvo aquí, manual de antigravity.  
Lo de el manual de Antigravity le podría pedir más cosas, pero vale, o sea, ya estáis viendo cómo funciona Antigravity. Me interesa realmente el manual de Markdown.  
Guía esencial de formato mardown, encabezados y jerarquía lo hemos hablado, estilos de texto lo hemos hablado.  
Listas no ordenadas.  
A mí las tareas, espera que lo ha hecho.  
Le voy a subir un poquito la.  
No les voy a.  
A ver, vamos por partes.  
En el manual de formato Markdown me gustaría que te lo curraras un poco más. Me gustaría que apareciera el texto primero en formato Markdown sin formato y luego pusieras ya la cosa que estás representando, que te extiendas, que haya tablas, que haya además los ejemplos un poquito más grandes, más largos, porfa.  
Manual de obsidian.  
Nada, no me gusta, lo dejo. Manual de marda.  
Ahora mismo este sí que se le ocurre un poquito más, lo veis.  
¿Esto qué es?  
¿Qué es lo que es exactamente lo que le he pedido? Primero tenéis un ejemplo.  
Mi código.  
Y luego el código ejecutado, o sea, aquí es como se vería en el formato carnau, o sea, sinoxidian. O sea, esto si abrís el texto, claro, se vería así.  
Y esto es copia y.  
Sí.  
Hay otro truco con esto, lo aquí tenéis un botón que dice modo fuente si aprieto este botón.  
Todo se ve con modo fuente.  
Sidio.  
¿Veis la idea?  
¿Quedaros con esta lista, quedaros con esta lista, que hay cochete X, cochete X, cochete y sin cochete, vale?  
¿Si le quito el formato modo fuente, veis que la lista ya ahora qué voy a hacer si aprieto aquí como check, ejecutar el consuro?  
Si aprieto aquí, ¿entendéis que lo que estoy haciendo realmente es poner una x?  
En el archivo.  
Listo.  
Manual de Antigravity, manual de Markdown.  
Snippets de código fórmulas de riesgo. Le estoy volviendo un poco loco, me lo está haciendo la mitad en gallego.  
¿Código de Markdown, esto qué es?  
¿Programa, o sea, auxilian, de dónde viene?  
Voy a cerrar.  
Google.  
Sí.  
This is only the City.  
Nosotros mola esto.  
A ver, esto de dónde viene Obsidian, ¿cuál es el origen? Programadores que usaban Obsidian para gestionar código unos con otros, para escribir, para verlo, para procesarlo. ¿Yo para qué lo uso? No solo yo, sino mucha gente para gestionar no solo código, sino también conocimiento.  
Hey.  
Calcular pérdidas, el código, esto es código.  
Vale, conceptos fundamentales de riesgo, ciberseguridad, riesgo tecnológico. Le voy a subir, estoy yendo con lo voy a subir por la velocidad y un poco por todo. He subido el modelo, pero habéis visto que con el modelo más bajo ni tan mal.  
Revisa lo del pazo de Ferfiñans y ponlo bien.  
Se lo voy a pedir al modelo más potente. De momento, dudas, preguntas, como lo veis.  
Hemos visto 2 herramientas, Obsidia, que es un gestor de información que puedes abrir y cerrar fichas con relativa velocidad, y luego a ese gestor de la información en esa librería con post-its, donde tiene un robot, que ese robot tú le das instrucciones y le dices, pues empacerán y todo eso.  
Ábreme fichas.  
Hola.  
Mira, me está buscando la manual de obsidia working y ahora me lo va a hacer bien.  
Líneas que ha escrito en verde ha escrito 65.  
Y en rojo las que ha quitado.  
¿Y luego?  
Control C.  
Como además estamos viendo cosas de ética, o sea, como esta asignatura se llama ética.  
¿Dónde ponía lo de conocerte a ti mismo, a alguien le suena?  
¿Cómo es el?  
Please.  
Sí, en Delfos.  
Conócete a ti mismo y si habéis visto la película, la película de.  
Matrix.  
¿Habéis visto Matrix? Pues en Matrix también en el oráculo dice: conócete a ti mismo.  
De los comida.  
No seas soberbio, antes humilde, no mientas, no mientas porque es la mayor vileza 2 viles. Procura amigos mayores que ti, pues porque con esto, con verdad secreto y limpieza de alma, no sucederá bien.  
Obsidian, me lo ha puesto ya bien. Bueno, y lo buah, conócete a ti mismo, auditoría interna y gobierno de datos, huye.  
Me lo he analizado con esto, dudas de momento que está.  
A ver.  
Como vamos de sobra.  
Vamos al siguiente nivel, crea la carpeta 3 donde vamos a poner de forma ligera para que ellos vean el poder, pero sin tampoco enrollarnos mucho. 3 cuatro ejemplos de artefactos. Mientras lo haces, yo voy mirando el mermaid.  
Lo de mientras lo haces, yo voy mirando el mermail, el mermail lo quito, 334 3 cuatro ejemplos de artefactos. Me gustaría que hicieras una web sencilla, algo que se mueva con JavaScript y algo que pueda ayudarles a ellos a ver cómo pueden aplicar todo esto por aquí. Sé creativo y lo que hagas estará bien hecho.  
O sea, que le he dicho no solo vale para gestionar información, sino también vale para hacer páginas web, para hacer lo que queráis. No hay límite, vamos a vais a tener conmigo bastantes más clases. Hablaremos de bastantes más cosas, pero lo que quiero es que no solo os quedéis con Antigravity como una herramienta.  
Que permite gestionar obsidian, sino que va a más. Y aquí me había dejado diagramas visuales con Mermaid.  
Y voy a darle a permitir.  
Y esto es un diagrama.  
Mapa de conexión de riesgos, pues ha hecho 22 mapas, podría hacer más.  
Pero ni tan mal, riesgo de mercado, riesgo de crédito, modelos, stress testing, matriz de mitigación.  
Dime.  
Pero si bien lo que haces es.  
Ya, pero está bien.  
Absolutamente, estamos ahora fundamental, estamos usando ahora la tecnología que vamos a usar durante el resto de nacionalidad.  
Viendo lo que estoy diciendo, dentro de un mes vamos a tener mejor tecnología que la que tenemos ahora. Vamos a tener mejores modelos que nos van a permitir ser más eficientes y más rápido. Por lo tanto, mi recomendación: olvidaros de la inteligencia artificial, olvidaros de los modelos.  
¿En qué nos tenemos que centrar?  
Tener nuestra información, gestionar nuestros datos mejor y pegado, pues tenemos que centrar y tener organizada muy limpia la casa.  
La semana pasada.  
Apareció Instinct, Instinct es una herramienta nueva.  
Y os os aseguro que en 2 minutos tenía acceso instil, solo una copia de lectura sin tocar a toda mi información a través de un plan.  
Y luego mi información, no tendremos tiempo para hablar y conocernos y las cosas.  
¿Merece la pena el sistema?  
José Antonio, de momento no te he enseñado nada nuevo.  
Pero en plan en contacto con la herramienta así, yo creo que sí que es curioso, la yo la estoy utilizando así, es decir, una de las cosas que.  
Es que todos tenemos una carpeta donde vamos.  
Todo y no sabemos.  
Y llega un día en que dices igual no con alquilar, porque te comen todo.  
Ir ahí.  
Es nuestro claude, o el trailer, obtén la misma estructura de proyecto, créame el ninguna de seguimiento, prepara la reunión con la forma en el comité de dirección, perdena toda la estructura, perdona todos absolutos.  
Instalar.  
Entonces, ese cambio es lo que está diciendo Luis, que es muy importante. Si tú tienes controlado el acceso a la información con la que puedes trabajar, un salto cualitativo y un salto en velocidad que puedes tener las cosas que tú hagas es altísimo. Por ejemplo, ahora montar un curso puede llevar 3 días.  
O 10 minutos.  
O sea, el curso no, pero que me refiero, os a ver, os a ver.  
Esto es el mejor con ejemplos.  
Llevo una semana y media que he conectado todo mi sistema con el correo electrónico. Thunderberg al final es un sistema de carpetas, la conexión con el correo electrónico.  
Fue la hice hace una semana y ayer estábamos viendo el correo electrónico.  
Y yo he dirigido desde hace años.  
Aquí está ordenando TFMES. Desde hace años habré habré dirigido TFMES.  
Ciente FM, no se exageró.  
Según me iba mandando TCMs, todos los tenían una misma carpeta de correos de correo electrónico.  
Pues ayer lo que le dije es.  
Ayer lo que le dije esto es ayer.  
¿Me busca el correo electrónico, la carpeta TCM si te cuento, vale?  
También tengo en paralelo la carpeta tal echa un ojo y te sigo contando.  
Hay un resumen de trabajos dirigidos en el Excel hasta el año 2000 hasta el año 2021 2022. He perdido la cuenta. Desde el año 2022 no llevaba registro de mis de mis TFMs, pero todos los correos de gente a los que dirigía TFM los iba emitiendo en una carpeta. me 6.  
Lo que le dije es que lo podría buscar, lo podría buscar, pero tardas un poquito de tiempo lo que le dije.  
Lista todos los TFMs que tienes en el correo, métemelos, contrástalos con el Excel y me los clasificas y os enseño como tengo desde ayer todos los TFMs. Tengo aquí una carpeta.  
Que se llama TFMex curso, estos son los 3 que tengo ahora en activo.  
Estos son los que tengo ahora en activo.  
Este registro me lo hizo ayer.  
Son 110 TFMs con el título y de cada uno de los TFMs yo le dije, recórrete todo el correo electrónico. Soy profe también en el IEB, voy en Icade, me voy al año 2023 al azar, por ejemplo, pues ese año dirigí pocos, dirigí solo 2.  
Me voy a ir al año 2024 solo uno, pues algo ha fallado.  
¿Te parece pocos 2025?  
Yo creo que he dirigido más.  
2022 y dentro de cada uno me ha descargado el último de los adjuntos del correo para poder liberar.  
Yo creo que hay más o debería haber más 2023767778.  
The total television.  
Es importante que si no conocéis muy bien la herramienta, si no os queréis conocer la herramienta, trabajéis en una copia segura.  
de trabajo y en esa zona de trabajo es copia de lo que tenéis en otro sitio, que podéis escribir, borrar, que no haya peligro de que de repente te ha borrado.  
Si algo es importante, es una copia al final, está en la de la zona de trabajo, haz una copia, llévatela a tu para que no estés perdiendo. Esto lee más rápido que tú, conecta mejor que tú, pero también se equivoca. Y hay veces que aunque estés con un modelo solo, te pides que te haga algo,  
te comete una rata o te cuela una rata y esa rata se va agrandando. Esa semilla de error se puede ir incrementando. Entonces, siempre esté trabajando de la máquina. Es decir, ¿te estás pidiendo que haga algo? Fenomenal, pero con esta estructura y el álbum se controla.  
José, parece que se me ha quedado tirado.  
Come to now.  
Has quedado parado, vuelve a darle porfa, he apretado el botón rojo.  
Preparado y le he vuelto a dar, me seguís.  
Sigue 10 de los tokens, pero.  
No, los tokens aquí dices mirar uso.  
Yo llevo consumido un 91 3% llevo consumido de lo que puedo consumir durante las próximas 5 horas y durante esta semana que la semana se acaba en un día y 13 horas.  
Llevo consumido un 35, o sea, me queda libre, disponible un 35% de los tokens.  
La semana se regenera.  
Pero cuidado porque hay veces que sin darte cuenta y lo digo porque a mí se lo hizo su amigo Miguel Ángel y yo me lo hizo.  
¿Puedes dar una instrucción que no tenga el arte bien definido, que te coma treinta y punto millones de  
Y darte cuenta, me dice, no tienes acceso hasta dentro de un mes.  
Mirad lo que le he pedido antigravity, ¿habéis visto lo que le he pedido?  
Que me haga 3 cosas para enseñaros que antigravity vale para más cosas que solo.  
Y aquí, casos prácticos.  
¿Dónde está Obsidian? Aquí índice, voy al índice simulador interactivo de riesgo. Este artefacto es una herramienta web completa e interactiva, desarrollada en tal como abrirlo. Abro el HTML, me vengo aquí.  
Casos prácticos.  
Simulador de riesgo.  
Abrir con Chrome.  
A ver, sí, ya le he dicho, estoy con gente de riesgos, quiero que y mira, conócete a ti mismo e afasta los mercados financieros.  
Esto lo he hecho con antigravity.  
Antigravity, le he dicho.  
No, ay.  
Los dos consumen, si llevas de, cómo se, cuanto más precisos sean, los que no sé estoy diciendo.  
Pero estos artefactos en concreto son de muy bajo consumo. Estos le he pedido sencillo, o sea, aquí hay que saber, os , vamos a tenemos tiempo y nos quedan mogollón de clases. Esta es solo la primera y os quiero enseñar una cosa más, pero lo que le he pedido.  
Erico.  
Es vamos al siguiente nivel, se lo he pedido antigravity, crea en la carpeta 3, donde vamos a poner de forma ligera para que ellos vean el poder, pero sin tampoco enrollarnos mucho, 3 cuatro ejemplos de artefactos.  
Me gustaría que hicieras una web sencilla, algo que se mueva con JavaScript y algo que pueda ayudarles a ellos a ver cómo aplicar todo esto por aquí. Sé creativo y lo que hagas estará bien hecho. Te da una instrucción bastante abierta.  
Y él me ha creado simulador script de backtesting cuantitativo en Python. y.  
Este es un script que le podría decir desde el propio Antigravity, mete, compílamelo, metemelo en un punto PY. Vosotros no tendréis Python instalado, pero Antigravity le decís que os instale Python y os lo instala también y ejecuta melo, es más.  
Perfecto, lo del programa de Python, exacréame el archivo punto py y ejecútame un punto bat para poder activarlo directamente desde el ordenador.  
El punto PY es el programa de Python y el punto bat es para yo, sin necesidad de abrir la línea de comandos, podré preguntarlo. No os preocupéis, todo esto lo vamos a ir aprendiendo. Y es más, todo esto, si no sabéis, me podéis preguntar antigravity y cómo lo hago y cómo.  
¿Puedo ejecutarlo sin abrir el compilador? A ti ya lo que os va a decir muchas veces que lo hagáis vosotros. Cuidado cuando hagáis esto, sobre todo con estable, porque hubo un genial que le vivió un ransomware.  
Yo creo. Sí, sí, sí. Sí, que sí. Sí, por eso si vais a hacer algo que sea sencillo, que hacedlo en un entorno que podáis bloquear, o que quede fuera del trabajo ordinario, en una página virtual o en...  
dentro de nuestro equipo que tenemos la lía. Porque si no le dais la distribución precisa, el sistema funciona y lo ejecuta hasta el último recurso. Eso pone aquí con cloud, este estaba intentando piratear una web, y dijo: "créame un virus ransomware para tal". O si el otro ejecutor sin distribución, miro para adelante.  
A ver, yo todo lo que os estoy enseñando son cosas que controlo.  
O sea, no soy experto programador, pero si os fijáis lo que me acaba de decir, un punto bat y aquí está el punto PY. Este es el Python que yo cuando apriete aquí el ejecutar bat bat testing.  
Me va a ejecutar él, me lo ha lo ha ejecutado. O sea, tampoco es máster de riesgos, configuración 1000000, horizonte temporal, 250 días de mercado, resultados de la auditoría, ha corrido el programa y me da el resultado.  
Sí.  
Me podría haber pedido un modelo, imagen, lo que sea.  
¿Pero qué acabo de hacer? Crear un programa PY, lo he ejecutado, lo ha corrido y de momento es vais a tener clase con David, que os va a enseñar más con dime.  
You.  
De los.  
No, a ver, por un lado trabaja en la carpeta en la que está trabajando y luego cada vez más antigravity. Si le sacas de la carpeta, funciona fuera de la carpeta. O sea, le podrías decir, le podrías dar búscame, mira.  
Busca los 2 últimos programas que tengo en la carpeta de descargas.  
¿Entiendes lo que estoy haciendo, no?  
No, porque le he puesto en el porque lo he puesto en el este.  
Pero se ha, me está buscando, se ha metido en el user profile. Esto trabaja contigo en el ordenador con una potencia descomunal.  
Y me queda una cosa, una cosa más.  
Sí.  
Está bien decirle por algo digo.  
Yes.  
Porque no sé cómo lo hace.  
A ver, depende, sí, depende muchas veces, por ejemplo, con el propio antigravity.  
Por un lado.  
Este es mío.  
Yo cuando tengo que hacer algo delicado abro un hilo determinado, yo ahora que estoy haciendo aquí estoy mezclando cosas.  
He pasado del conjuro de Lagrimada, luego al otro, luego al otro. Si tuviera que hacer algo serio, por un lado, el Tron lo diseñaría y lo traería de fuera.  
Además, no con el propio Antigravity, el otro hilo o a ver Claude para prompts, no, a mí para prompts me gusta GPT, GPT rápido es cómodo GPT online. Luego Antigravity me gusta para infantería, en mi cabeza GPT es un lado.  
es un jeta, domina la psicología. Claude es el niño imperfecto, que le pides cualquier cosa y te lo hace todo estupendo, pero se gasta una pasta por el camino. No le pidas a Claude, Golferías, Golferías a GPT. O luego, Bronk, pero con Q, el de... el más. Y luego,  
Y el INAI, o sea, Google es bueno no solo por Google en sí mismo, sino por el ecosistema que tiene.  
Yeah.  
Le he pedido que busque lo de las 2:00 carpetas y se está volviendo un poquito loco.  
A mi more.  
¿Le corto 96, veis que no está gastando tanto, no?  
Pero.  
A ver a que va para que busque 2 archivos, la que está liando lo voy a parar.  
Quiero hacer la siguiente.  
Perfecto, vamos con la última. Esto quiero que sea un poquito diferente. Quiero que crees una carpeta que se llame máster de riesgos, que el objetivo que quiero que tengas con esta carpeta es que sea una repo de todo una repo que comparto con ellos por GitHub.  
De todo el programa es una carpeta que con el tiempo es la primera vez que estoy haciendo esto, pero con el tiempo me gustaría que fuera una carpeta donde los alumnos tengan todo lo que hemos ido compartiendo.  
Antes de hacerlo me das un plan, me echas una mano porque quiero hacerlo, que sea rápido, cómodo, no molestar nada y que funcione.  
Quiero que solo me des el plan.  
¿Qué quiero hacer, una carpeta?  
¿Esa carpeta la voy a convertir en un repo de FitHub? ¿Sabéis todos que es FitHub?  
No, quizás no es más que un buen Drive y perdicariado.  
Google Drive, un Drive es un sitio en la nube donde puedes compartir información, pero GitHub sí que se sí que lo usan programadores. Todos debéis de tener un usuario de GitHub.  
Cuenta de fiscal y yo lo que voy a hacer es con mi antigram.  
Lo que voy a hacer es...  
Aquí tienes el plan estratégico para montar el repositorio máster de riesgo de forma limpia, rápida, modular y pensada para crecer durante todo el curso sin dolores de cabeza.  
Objetivo, crear una estructura de repositorio GitHub pensada para que los alumnos puedan clonarla o descargarla en un click y abrirla directamente como un bol de obsidio. Tenían organizadas las clases, el material teórico, el código práctico y los artefactos y mezclar notas personales. Actualizar el repositorio GitPull o descarga cada semana conforme subas nuevas sesiones.  
Fases del plan arquitectura de la carpeta, máster de riesgos, diseñar una estructura limpia que separe la teoría, el código y las sesiones.  
Filtros y clave, los alumnos usan Obsidian, pero no queremos que las configuraciones de plugins o temas locales de cada uno socren entre sí. Configuración de Git Ignore inteligente que mantenga la carpeta limpia y sin conflictos.  
Eso hay una carpeta en vuestro en local que va a ser una copia del report. ¿Me seguís? Dentro de esa carpeta va a haber un archivo que se llama git ignore. En ese archivo se va a apuntar lo que tú quieres que se ignore cuando se suba o se baje.  
Estoy explicando.  
GitHub lo usaban históricamente programadores.  
Nosotros probablemente programemos, pero en este caso el que va a hacer las funciones de programador es antigravity, sí.  
Redmi de bienvenida, iniciación de GitHub. Vamos a hablar de servidores, vamos a hablar, pero va quedando relativamente en poco tiempo y quiero compartir con vosotros todo lo que hemos visto durante la sesión y quiero dejar establecido un canal de comunicación con todos vosotros.  
Este canal lo iremos mejorando todos juntos.  
¿Pregunta para empezar, prefieres que la carpeta la creemos aquí mismo dentro de este proyecto o un nivel arriba en tu carpeta proyectos, por ejemplo, en de 2 puntos máster de riesgos para que quede como un repositorio independiente?  
De proyectos máster de riesgos, no tengo de proyectos máster de riesgos, esto es un inventado.  
Le voy a de esta es esta sí que es máster de riesgos.  
Copiar como ruta acceso estoy al mío. Como me ha preguntado, le voy a responder.  
Quiero que crees el repo en la siguiente ubicación.  
De proyectos máster de riesgo.  
Y que se llame la carpeta origen.  
Master.  
Repo Master.  
De riesgos.  
2026 2027.  
Repogi.  
Master de riesgos.  
A crear la carpeta, le voy a decir que dentro de esa carpeta meta todo lo que hemos hecho hoy. Ese repo va a ser un repo privado que se pueda acceder con enlace. Os paso, voy a ver a decirle que me cree un código QR para que os cometéis con el código QR.  
¿Y los 41 pudiste sacar algo?  
Luego mi intención es que en ese repo cada uno tengáis una carpeta con inbox, uno para poder ir intercambiando cosas y comunicándonos.  
Dudas.  
Entre vosotros lo podéis hacer también. Me refiero, digo que entre vosotros. O sea, que esto es mío para vosotros, pero podéis, o sea, yo a lo que os animo es a que gestionéis vuestra vida.  
¿Con agentes, qué es lo potente de esto? Yo ya no tengo que pensar en guardo esto, lo meto en un email y otro lo mando, sino que simplemente al finalizar esta sesión, lo pero es decir, guárdalo todo y mandas.  
Happy Dale.  
Estado ya se ha ejecutado.  
Estructura del repositorio, todo listo. El repositorio ha quedado creado estructura y versionado con git en la ubicación exacta que solicité. Estructura del repositorio creado.  
Ya se ha ejecutado.  
A ver, ya se ha ejecutado git init, vale cuando crees el repositorio en tu cuenta GitHub.  
Sube el repositorio a mi cuenta de GitHub.  
Antigravity, lo que os puede pedir es vuestro usuario de y luego os puede pedir que os lo guéis, pero en cualquier caso os doy mi repo y no necesitáis vuestro usuario para descargar el repo.  
Lo que pasa es que si luego queréis interactuar con él, entonces sí.  
Es una pregunta para los que no son nuevos. Cuando tú entras en Instagram, no quieres es una serie de grandetas y luego abajo está la descripción del cliente. Es algo muy inpetitivo. Y luego abajo. ¿Qué es lo que viene? ¿Qué es lo que te da? Sí, mira.  
No habéis entrado nunca y no lo conocéis, no, pero no es necesario entrar.  
O sea, no es necesario entrar, pero voy a ir, voy a buscar un repo GitHub.  
Bueno, uno de los míos, el de donde está.  
Su amor, quiero uno que sí lo tengo cuidado.  
Stop.  
Este sistema 231 macro.  
Esto es un repo de  
Es lo que dices.  
Está arriba la estructura de tarjetas, luego eso que veis ahí con los códigos, etcétera. Luego abajo está  
La explicación de qué es lo que vas a encontrar en cualquier repositorio. Eso es, o sea, ¿qué es un repositorio? Esto es un repositorio.  
Y este enlace.  
Si este enlace os lo no tengo abierto web WhatsApp, si este y esto con esto trabajaremos. Si este enlace se lo metéis antigravity, le decís descárgame este repo, os descarga todo lo que hay ahí dentro y luego dentro de GitHub hay un archivo importante que es el Redmi, que es el que él te va a poner aquí.  
Para explicarte lo que hay aquí dentro, esto en concreto, ¿qué es? Soy yo el autor. Cada fin de semana ejecuto un radar de temas geopolíticos donde me va diciendo cosas, pero no os quiero volver locos.  
E.  
No haces bien cuando cuando accedáis a un de alguien.  
No sabéis si esa persona lo hace de manera deval o lo hace de manera maravillosa. No me jodas, tío, créalo tú.  
Perdón. Antes de instalar cualquier cosa que me diga en el GitHub, le di a la herramienta que os lo audite. Auditame este GitHub, dime si lo que tiene es peligroso para mí o puede causarme los problemas en el equipo, antes de hacer cualquier discusión que os pueda aceptar acciones.  
Eso que es el producto es anti-grade. O sea, tú tienes el cliente. Este tiene 200.000 estrellas y lo ha descargado, no sé cuánta gente tienes. Cópiatelo y llévatelo a no sé dónde. Normalmente lo que haces es coger el pickup y decirle otro anti-grade. Dentro del sistema donde estoy trabajando.  
Pero tampoco les vuelvas locos, o sea, de momento, hemos visto hoy, muy sencillo.  
Punto uno, obsidia, que obsidia lo que permite es gestionar información y recomendación es.  
Que al acabar cada sesión.  
Pongáis, pues hoy que realizó con Susana.  
Pues la temática financiera, el VAL, latir.  
No lo sé. Hoy hemos visto matemáticas, pronto es sencillo como esto. Hoy hemos visto matemáticas financieras se va a decir cuál alguna ficha, si entre una ficha en la sesión.  
Esto es obsidia. Luego hemos visto en 1 segundo nivel antigravity, antigravity que te permite hacer.  
Prácticamente lo que te dé la gana. Cuidado, que lo que te dé la gana es un concepto muy amplio. Vosotros, a lo largo del programa, vais a ir viendo con diferentes profesores diferentes herramientas. No os estoy diciendo. Hay un proverbio chino que dice que si solo tenéis un pasquillo, solo tenéis clavos.  
Yo lo que quiero es que tengáis, de momento, un martillo. Si queréis darle un martillazo a alguien, tenéis ausidia para gestionar la información y luego instalar lo que tengo hoy. ¿Por qué? Por tres motivos. Lo que puedo, porque es muy cómodo compartir con vosotros toda la información que hemos visto hoy.  
Y porque es la primera vez que estoy haciendo esto con un grupo y quiero también experimentar.  
E iremos viendo cómo evoluciona esto sobre la marcha. Yo, GitHub, vale, GitHub tampoco hay que ser muy experto, tiene pool y push, o sea, hay gente trabajando en la primera carpeta, tiene control de revisiones y pool cuando bajas algo a local y bush cuando lo subes. Si hay conflicto entre lo que sube uno y lo que sube otro, te guarda 2 versiones.  
Que el sistema tiene, cuidado que aquí hay conflicto en tal línea, en tal línea y en tal línea. Tú puedes hacer una cosa, esto GitHub tiene herramientas de inteligencia artificial dentro, que puede ser, por ejemplo, un next. 2 ficheros con los que hay conflicto te lo juntan uno.  
Pero insisto, hoy no quiero.  
Que nos estoy instalando la herramienta oficial de GitHub, pues la debería de tener ya instalada.  
Ya la tengo instalada por otro lado, pero bueno.  
Sí.  
Gracias.  
Done.  
Perfecto, estupendo. ¿Y ahora cómo la comparto con mis alumnos?  
Está todavía trabajando.  
Puede no sé hacer algo.  
Puedes hacer lo que ponemos a la un área.  
Estoy guiando.  
Igual que lo está haciendo Luis para enseñaros cómo funciona esto, se va a hacer con automatizaciones, vas pegándole pantallazos y de ahí ya va leyendo, te va dando pasos.  
Por ejemplo, crear exámenes en Google otro día le pedí a la I.  
Te ayudará a subir el.  
El banco de preguntas.  
Entonces, aprovechando por lo que es una herramienta que os potencia aún más, lo decía aquel compañero antes, y esto me va a quitar el trabajo.  
Lo que hace es provenceros a vosotros. ¿Sabéis qué es lo que queréis hacer? Las bases del negocio es una herramienta para hacerlo más rápido.  
Pero siempre te doy la cuenta que si compartís información no sea pública.  
No puedes hacerlo y niñas que tengan.  
Si queréis, si estáis trabajando con la confianza, tienes que trabajar con otro tipo.  
Esto es para cosas públicas. Quiero hacer un estudio comparativo de la evolución de los mercados entre Europa, Estados Unidos y China. Estoy aquí, y para hacer ese análisis en dos horas de trabajo, puedo tener el mega análisis que hago una consulta de  
Pero sabiendo que con eso voy a hacer algo yo que tiene.  
Le acabo de preguntar, te queda mucho y se lo he mandado.  
Porque a ver, el problema, el error que no es error.  
A veces, o sea, yo tengo GitHubs, tengo repos GitHubs compartidos con personas. Es la primera vez que me está tardando tanto en crearlo.  
Pero pasan las mejores familias. En general no me suele pasar tanto. Hoy sí están pasando, le ha pasado a José, me está volviendo a pasar.  
Y sinceramente, puede ser un día de carga de servidores, puede ser la hora, puede, puede, puede, puede, le voy a dar a parar.  
No, esto no es RAM, esto no es mi RAM, esto es fuera, o sea, esto es que lanza.  
Y las veces que he parado y he vuelto a empezar a ejecutarlo ejecutan la rabia.  
Quedan quedan colgados. Por algún motivo se quedan en la parte de atrás del servidor.  
Es el most about the parallel.  
Ya está instalada la herramienta GitHub, solo falta autorizarla con un clip. Si ya estoy en este aparato, tío.  
Espera, esperar.  
A.  
Oscar.  
Tengo GitHub instalado en este equipo ya con toda la autorización y el código. Dame un prompt para lo que tengo que hacer y ya está. Ponme el enlace de la ruta donde hay que subirlo.  
O sea, me quiere dar de alta el equipo cuando ya lo tengo, sabes, no es necesario darle de alta otra vez al equipo.  
E.  
Email.  
A ver más rápido que todo eso.  
Ahora esto sí que es mi RAM.  
Copiar como ruta de acceso.  
Es que no quiero.  
Crea el siguiente repo en mi cuenta de.  
¿Has visto lo que he hecho al final? Me he ido a un proyecto que ya tengo abierto donde tiene toda la información, le digo que cree el repo.  
Google.  
Pero.  
No, this is okay.  
Lo bueno es más tonto si lo utilizas como un sustituto de la partida del trabajo complicado.  
Yo acceso a la fija, tengo por fuera del aire.  
Podría crearlo, pero me estoy obcecando igual que el pato de Certiñans. La inscripción me la sé, me la sé, me estoy , me estoy obcecando en hacerlo directamente. ¿Por qué? Pues porque soy cabezón.  
Pero al final, todos los casos que estoy dando os estoy enseñando muchas cosas en poco tiempo, pero Osidia, somos capaces de gestionar los talla.  
¿Python vais a ser capaces de programar y de leer el programa sin la IA? Lo que parece que la IA lo que te permite es mucho más rápido. ¿Cuántas cosas hemos estado viendo en esta en este tiempo de clase que hemos dado?  
Y todo documentado me joroba.  
En joroba.  
Vale, mejor va, pero que por la si es que estoy siendo cabezón y el error es ser cabezón.  
Solo entra.  
Master de riesgos, descripción, create, mira al final.  
Ya está creado.  
Pues sí, la verdad que yo he supe facto con todo.  
¿Que qué? ¿Eso qué quiere decir en o sea, bueno o mal que te devuelvan eso? Pensando de que si podemos hacer esto hoy en 1 año que o sea, doblamos estar básicamente.  
Bueno, sí, sin duda, a ver, dentro de 1 año, no.  
A ver, no, por un lado, esto está todo allá.  
Y vamos a y esto es lo que nos permite. Tenemos esto hablaremos la la semana que viene no tenemos clase el lunes, tenemos clase el lunes siguiente, la semana que viene nos vamos a Segovia el viernes, pero gran parte de lo que tenemos que entender con esto y por eso es mi mi obsesión en que sea el primer día.  
nos obliga a cambiar cognitivamente la forma de pensar. La clase del miércoles, al final, ¿qué va a pasar? La clase del miércoles es a la hora, o sea, ¿podéis todos venir a las 2:30? ¿Os he puesto 2:30? Si he puesto dos a las dos. Si podéis venir todos de 2 a 6:30, genial.  
Es excepcional, Antonio Mota, que por lo que sea tiene la de cogido y pues lo que vamos a hacer es os lo mando. ¿Qué hora es? Son y 39, os lo mando por WhatsApp, el enlace del repo, os doy las instrucciones, el prompt y ya está, de acuerdo.  
Yo os pido disculpas por el pequeño gatillazo. Deberes, estamos viendo.  
¿Quién ha pedido los deberes?  
A ver, vamos bien, o sea, lo que quiero es establecer eso como canal de comunicación.  
To turn it in the footpatch.  
Thank you.  
A.  
Interested in Laura.  
E.  
O.  
O K.  
Pues.  
O.  
¿Cómo lo has visto? Estaría muy bien, bien, gracias. Venga, puedes, ¿tienes boda o no al final? ¿Qué pasa? El, pues te echaremos de menos.  
Bing.  
Qué rabia no tener el que no haya funcionado.  
Yeah.  
Mira.  
Y.  
¿Cómo les puedo invitar a que entren en el repo?  
Pues.  
Rápido, dígame.  
Créame un mensaje de WhatsApp para mandárselo a ellos.