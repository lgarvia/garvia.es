# 📅 Día 3: Módulo 2. Aplicación de Tecnologías Emergentes en Proyectos (Parte 1)

Este documento detalla el plan de contenidos oficiales, objetivos pedagógicos y actividades prácticas programadas para la tercera jornada del curso.

---

## 🎯 Objetivos de Aprendizaje de la Jornada
Al finalizar este tercer día, el alumnado debe ser capaz de:
1. **Evitar el Hype Tecnológico:** Analizar la diferencia entre modas pasajeras e innovaciones con valor real, asumiendo la capacidad de absorción y la madurez de la propia organización.
2. **Utilizar el Radar Tecnológico:** Navegar y construir radares tecnológicos profesionales (estilo Thoughtworks) distinguiendo los anillos de adopción (Adoptar, Probar, Evaluar, Resistir).
3. **Aplicar el Framework I-M-A:** Evaluar sistemáticamente la adopción de tecnologías basándose en tres filtros objetivos: **Impacto** estratégico, **Madurez** de la tecnología y **Alineamiento** operativo.
4. **Evaluar Madurez con TRL y Hype Cycle:** Clasificar tecnologías en base a los 9 niveles del *Technology Readiness Level* (TRL) y el Hype Cycle de Gartner para determinar si están listas para producción.
5. **Diseñar Estrategias de Convivencia Legacy:** Seleccionar y justificar arquitecturas de integración con software heredado (Fachadas API-First, buses de datos y el *Patrón del Estrangulador* o Strangler Fig).
6. **Integrar Metodologías de Innovación:** Explicar los encajes cruzados de **Design Thinking** (espacio del problema, empatizar y definir con POV), **Lean Startup** (construir-medir-aprender con MVPs y métricas accionables) y **Scrum** (ejecución y entrega iterativa).
7. **Gestionar la Resistencia al Cambio:** Utilizar el modelo **ADKAR** (Awareness, Desire, Knowledge, Ability, Reinforcement) y tácticas de influencia para mitigar el rechazo de los usuarios ante la disrupción.

---

## 📚 Estructura de Contenidos por Unidad

### Unidad 1: Integración de Tecnologías en Proyectos Existentes (1.5 h – 2 h)
*   **Identificación de Oportunidades:** El equilibrio entre la vigilancia tecnológica externa, la escucha interna de los cuellos de botella de negocio y el benchmarking sectorial.
*   **El Framework de Filtros I-M-A (Impacto, Madurez, Alineamiento):**
    *   *Impacto:* Medible con KPIs de negocio y ventaja competitiva (las 5 fuerzas de Porter).
    *   *Madurez:* Medida con los 9 niveles de TRL (Fase de investigación 1-3, desarrollo 4-6, despliegue 7-9) y el ciclo de expectativas de Gartner.
    *   *Alineamiento (Capacidad de Absorción):* Evaluación de deudas técnicas legacy, competencias técnicas del equipo, cultura jerárquica/horizontal y recursos FinOps.
*   **Laboratorio de Validación (Sandbox):** La filosofía *Fail Fast* (equivocarse rápido y barato).
    *   *Prueba de Concepto (PoC):* Aislada, código desechable para verificar factibilidad técnica (1-2 semanas).
    *   *Prototipo:* Fachada visual para validar la experiencia de usuario (UX) e interactuar con stakeholders.
    *   *MVP (Producto Mínimo Viable):* Enfocado en validar la hipótesis de valor de negocio con usuarios reales (Mago de Oz, Conserje, Smoke Test).
    *   *Piloto:* Validación operativa de estabilidad y escalabilidad en un módulo acotado con usuarios reales.
*   **Implantación y Escalado:** El "Triángulo de la implantación" (Herramientas, Procesos, Personas).
    *   *Refactorización de Procesos:* La regla de Lean Six Sigma (Eliminar $\rightarrow$ Simplificar $\rightarrow$ Automatizar) para evitar la automatización ciega de procesos ineficientes.
    *   *Convivencia Legacy:* Patrón del Estrangulador para sustituciones paulatinas frente a despliegues *Big Bang*.
    *   *El Día Después (Operaciones):* Modelo de gobierno posterior (COBIT), el coste total de propiedad (TCO) y escalabilidad.

### Unidad 2: Herramientas y Metodologías para la Innovación (2 h – 2.5 h)
*   **Design Thinking (Problem Space $\rightarrow$ Solution Space):**
    *   *Empatizar y Definir:* Observación de parches de trabajo de usuarios. Formulación del *Point of View* (POV): `[Usuario] necesita [Necesidad] porque [Insight]`.
    *   *Idear y Prototipar:* Técnicas SCAMPER y prototipos rápidos de baja fidelidad (Mago de Oz o fachada de APIs).
    *   *Testear:* Validación sistemática con guiones y mallas receptoras de información.
*   **Lean Startup (Ciclo de Aprendizaje Científico):**
    *   *Bucle Crear-Medir-Aprender:* Diseñar el experimento a la inversa (comenzando por qué aprender).
    *   *Hipótesis de Fe:* Hipótesis de Valor (¿soluciona un problema core?) e Hipótesis de Crecimiento (¿cómo escala?).
    *   *Métricas:* Diferenciar métricas de vanidad (descargas, visitas) de métricas accionables (tasa de retención, CAC/LTV).
    *   *Pivotar o Perseverar:* Tipos de pivotes (tecnológico, de zoom-in, de segmento de cliente).
*   **Desarrollo Ágil con SCRUM (Motor de Ejecución):**
    *   *Valores del Manifiesto Ágil:* Software funcionando y adaptación al cambio frente a la rigidez.
    *   *Roles en Scrum:* Product Owner (el qué), Scrum Master (facilitar y eliminar bloqueos/impedimentos), Developers (dueños de la calidad técnica y la estimación).
    *   *Artefactos:* Product Backlog, Sprint Backlog e Incremento funcional conforme a la *Definition of Done* (DoD).
    *   *Eventos:* Sprint Planning (estimación con Planning Poker y control de deuda técnica), Daily Scrum (15 minutos para sincronización diaria), Sprint Review (demostración de software funcional a stakeholders) y Sprint Retrospective (inspección del proceso de trabajo del equipo).

---

## 🛠️ Plan de Actividades Prácticas

*   **Actividad: Protocolo Reset - El test del clip (15 min)**
    *   *Dinámica:* Ejercicio lúdico/creativo para demostrar de forma empírica el valor de la inteligencia colectiva y romper bloqueos creativos ante problemas técnicos.
*   **Actividad: Enciende el radar (20 min)**
    *   *Dinámica:* Navegación y análisis crítico de blips reales del radar de Thoughtworks para aprender a discernir entre tecnologías estables y ruido.
*   **Actividad: El Comité de Inversión Tecnológica (30 min)**
    *   *Dinámica:* Simular una mesa de dirección evaluando tecnologías emergentes (Blockchain, IA generativa, etc.) para un proyecto de negocio específico a través del framework I-M-A.
*   **Actividad: El Ingeniero Empático (30 min)**
    *   *Dinámica:* Aplicar las fases de Empatía y Definición (Design Thinking) sobre un caso de estudio real (ej: Residencia Horizonte) para extraer el POV clave.
*   **Actividad: El laboratorio del MVP (30 min)**
    *   *Dinámica:* Diseñar un MVP de tipo Mago de Oz o Conserje para probar una tecnología compleja con usuarios sin escribir código de backend.
*   **Actividad: Planning Poker de Incertidumbre (25 min)**
    *   *Dinámica:* Simular una Sprint Planning utilizando barajas de Planning Poker para estimar el esfuerzo relativo de historias de usuario complejas y distribuirlas en un tablero Kanban de control de deuda técnica.
