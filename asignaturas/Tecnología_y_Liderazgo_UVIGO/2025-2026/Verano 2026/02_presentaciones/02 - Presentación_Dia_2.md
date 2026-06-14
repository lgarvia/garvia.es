# 📅 Día 2: Módulo 1. Tendencias Tecnológicas Emergentes (Parte 2)

Este documento detalla el plan de contenidos oficiales, objetivos pedagógicos y actividades prácticas programadas para la segunda jornada del curso.

---

## 🎯 Objetivos de Aprendizaje de la Jornada
Al finalizar este segundo día, el alumnado debe ser capaz de:
1. **Evaluar Modelos de Servicio y Cómputo:** Diferenciar con rigor modelos de servicio en la nube (IaaS, PaaS, SaaS) y de ejecución (VMs, contenedores, serverless), sopesando control operativo, velocidad y acoplamiento con el proveedor (*vendor lock-in*).
2. **Diseñar Arquitecturas de Datos Modernas:** Explicar conceptualmente el paso de Big Data y Data Lakes tradicionales a arquitecturas *Lakehouse* y descentralizadas (*Data Mesh*), justificando la gobernanza y los pipelines limpios como pilar para la IA.
3. **Analizar la Infraestructura IoT y Edge:** Describir la arquitectura de un sistema IoT extremo a extremo, evaluando el ROI de procesar en el extremo (*Edge Computing* con IA integrada) frente a centralizar en la nube.
4. **Implementar Marcos de Ciberseguridad:** Utilizar la triada CIA extendida (añadiendo autenticidad y trazabilidad) y el marco **NIST CSF** (Govern, Identify, Protect, Detect, Respond, Recover) en entornos híbridos y distribuidos.
5. **Aplicar Paradigmas de Defensa:** Explicar el funcionamiento práctico de arquitecturas **Zero Trust** (*never trust, always verify*), **SASE** y la cultura **DevSecOps** (*shift-left* en el pipeline de desarrollo).
6. **Mitigar Amenazas Específicas de IA:** Identificar vectores de ataque contra modelos (prompt injection, envenenamiento de datos, exfiltración) mapeados bajo el **OWASP Top 10 para LLM/GenAI** y proponer esquemas de gobierno como *AI TRiSM* o el *NIST AI RMF*.
7. **Anticipar el Impacto Cuántico:** Explicar cómo la computación cuántica (qubits, superposición, entrelazamiento) amenaza a algoritmos asimétricos actuales (RSA/ECC) y justificar la necesidad actual de **Cripto-agilidad** frente al escenario *harvest now, decrypt later*.

---

## 📚 Estructura de Contenidos por Unidad

### Unidad 5: Cloud Computing y Datos a Escala (65 min)
*   **Modelos de Servicio y Ejecución:** IaaS (infraestructura física virtualizada), PaaS (plataformas autogestionadas), SaaS (aplicación completa). Máquinas Virtuales vs. Contenedores (orquestados por Kubernetes) vs. Serverless (ejecución ligera por eventos).
*   **Evolución del Cómputo de Datos:** De clústeres Big Data batch (Hadoop/Spark) a la separación Data Lake (datos crudos) + Data Warehouse (datos analíticos estructurados). El estado del arte con *Lakehouse* (estructura unificada) y la organización distribuida de *Data Mesh* (ownership por dominio).
*   **Pipelines Modernos y Gobierno:** Flujo Ingestión $\rightarrow$ Almacenamiento $\rightarrow$ Procesamiento $\rightarrow$ Consumo. Los catalizadores del gobierno del dato: propiedad clara, catálogo y linaje, control de calidad y gestión de accesos.

### Unidad 6: IoT, Edge e Integración con IA (75 min)
*   **Arquitectura IoT (El "Tubo de Datos"):** Sensores físicos $\rightarrow$ Redes de comunicación (Wi-Fi, 5G, LPWAN) $\rightarrow$ Plataformas de procesamiento (Cloud/Edge) $\rightarrow$ Aplicaciones y actuadores.
*   **Casos de Uso Sectoriales con ROI:** IIoT (fábricas inteligentes y mantenimiento predictivo), Smart Cities (gestión de recursos y tráfico), Salud conectada (wearables médicos) y Domótica.
*   **La Frontera Inteligente (Edge AI + 5G):** Despliegue de modelos de machine learning ligeros en gateways para tomar decisiones locales en milisegundos con alta resiliencia y privacidad. Concepto de *Gemelos Digitales* alimentados en tiempo real.

### Unidad 7: Ciberseguridad en Entornos Híbridos e IA (85 min)
*   **Superficie de Ataque y Nuevas Amenazas:** Ransomware as a Service (RaaS), ataques a la cadena de suministro de software e intrusiones persistentes (APTs). El desvanecimiento del perímetro físico: redes dispersas, APIs expuestas y ataques con movimiento lateral.
*   **Paradigmas de Defensa Modernos:**
    *   *Zero Trust:* Verificación continua de identidad, dispositivo y contexto de forma granular.
    *   *SASE (Secure Access Service Edge):* Convergencia de red y seguridad desde la nube.
    *   *DevSecOps:* Seguridad por diseño y concepto de *shift-left* (threat modeling, escaneo SAST/DAST, control de dependencias e infraestructura como código - IaC).
*   **La IA en Ciberseguridad:**
    *   *Defensiva:* Detección de anomalías en tráfico y logs a escala, filtrado de alertas.
    *   *Ofensiva:* Automatización del kill chain por agentes, phishing creíble a escala y generación de malware mutante.
*   **Seguridad Específica de Modelos de IA:** Mapeo de vectores de ataque con **OWASP Top 10 LLM** (Prompt Injection, Data Leakage, etc.). Técnicas de mitigación (Aprendizaje Federado y Datos Sintéticos) y marcos de gobierno (*AI TRiSM*, *NIST AI RMF*).

### Unidad 8: Computación Cuántica y Tendencias Futuras (75 min)
*   **Fundamentos Cuánticos:** Qubits, superposición y entrelazamiento. Por qué no son ordenadores genéricos rápidos, sino procesadores especializados en problemas matemáticos concretos.
*   **Amenaza a la Confianza en Red:** El algoritmo de Shor y la debilidad de la criptografía de clave pública actual (RSA/ECC). Análisis del riesgo de la captura pasiva hoy para descifrado futuro (*harvest now, decrypt later*).
*   **Transición Criptográfica:** El papel de la Criptografía Poscuántica (PQC) estandarizada por el NIST y ENISA. El principio de **Cripto-agilidad** en las organizaciones: inventariar y diseñar capas criptográficas modulares y desacopladas de la aplicación.
*   **Tendencias Transversales:** Centralidad de la identidad digital, factor humano como defensa activa, soberanía de datos europea (GAIA-X, EU Data Act) y la regulación NIS2.

---

## 🛠️ Plan de Actividades Prácticas

*   **Actividad Integradora Unidad 5: Arquitectura de datos en la nube (30–35 min)**
    *   *Dinámica:* Trabajo en grupos pequeños (3-4 personas). Diseñar la arquitectura de datos (ingestión, almacenamiento crudo/curado, procesos batch/tiempo real y mitigación de un riesgo dominante de coste, soberanía o seguridad) para una empresa digital típica.
*   **Actividad Unidad 6: Casos de uso IoT - del dispositivo al sistema (15 min)**
    *   *Dinámica:* Analizar un sistema IoT real mapeando su "tubo de datos" y evaluando los impactos operativos, físicos y de privacidad de un fallo en la telemetría.
*   **Actividad Aplicada Unidad 6: Convergencia IoT + IA + 5G + Edge (30 min)**
    *   *Dinámica:* Diseñar un esquema de toma de decisiones dividiendo qué lógica debe ejecutarse en el dispositivo (Edge) por latencia y privacidad y qué debe centralizarse en el gemelo digital en la nube.
*   **Mini-actividad Unidad 7: Identificar riesgos en un caso de Smart City (15 min)**
    *   *Dinámica:* Ejercicio de análisis rápido de amenazas de seguridad y cumplimiento normativo (AI Act/eIDAS) en un entorno municipal hiperconectado.
*   **Actividad de Cierre Unidad 8: ¿Qué me llevo de todo el módulo? (10–15 min)**
    *   *Dinámica:* Reflexión individual por escrito identificando un aprendizaje clave de cada uno de los bloques y proponiendo un *micro-cambio* organizativo o técnico accionable en su puesto de trabajo a partir de mañana.
