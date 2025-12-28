import { GoogleGenerativeAI } from "@google/generative-ai";
import { CamParams } from "../types";

// Initialize lazily to prevent app crash on load if key is missing
const getAiModel = () => {
  const apiKey = process.env.API_KEY || "DUMMY_KEY_FOR_UI_ONLY";
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    return genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  } catch (e) {
    console.error("Failed to init API client", e);
    return null;
  }
};

export const explainCamProfile = async (params: CamParams): Promise<string> => {
  const model = getAiModel();
  if (!model) return "Error: Cliente AI no inicializado.";
  if (!process.env.API_KEY) return "Nota: Configura tu API Key en .env para ver explicaciones reales.";

  const prompt = `
    Actúa como un profesor experto de ingeniería mecánica.
    El estudiante ha configurado una leva con los siguientes parámetros:
    - Radio Base: ${params.baseRadius} mm
    - Altura de elevación (Lift): ${params.lift} mm
    - Velocidad: ${params.rpm} RPM
    - Tipo de movimiento: ${params.profile} (SHM = Armónico Simple, UNIFORM = Velocidad Constante, CYCLOIDAL = Cicloidal)
    - Ángulo de subida: ${params.riseAngle} grados
    
    Por favor, explica brevemente (máximo 150 palabras):
    1. Las ventajas y desventajas mecánicas de usar el perfil de movimiento ${params.profile}.
    2. Si hay riesgos de "jerk" (sacudida) infinito con esta configuración.
    3. Una aplicación práctica típica para este tipo de leva.
    
    Usa formato Markdown. Sé conciso y didáctico.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Lo siento, hubo un error al conectar con el asistente inteligente.";
  }
};

export const generateQuizQuestion = async (): Promise<string> => {
  const model = getAiModel();
  if (!model) return "Error: Cliente AI no inicializado.";
  if (!process.env.API_KEY) return "Nota: Configura tu API Key en .env para ver preguntas reales.";

  const prompt = `
    Genera una pregunta corta de opción múltiple sobre diseño de levas, diagramas de desplazamiento, velocidad o aceleración.
    Incluye la pregunta, 4 opciones y la respuesta correcta explicada al final.
    Formato Markdown.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error(error);
    return "Error generando pregunta.";
  }
};