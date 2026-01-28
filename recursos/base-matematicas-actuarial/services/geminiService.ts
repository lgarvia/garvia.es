
import { GoogleGenAI } from "@google/genai";

// Initialize only if API key is present
const apiKey = process.env.API_KEY;
const ai = apiKey && apiKey !== 'undefined' ? new GoogleGenAI({ apiKey }) : null;

/**
 * Gets an actuarial explanation from the Gemini model.
 * Uses gemini-3-flash-preview for general text tasks.
 */
export const getActuarialExplanation = async (prompt: string, lang: 'es' | 'en'): Promise<string> => {
  if (!ai) {
    return lang === 'es'
      ? "El asistente de IA no está configurado (falta la API Key). Por favor, contacta con el administrador."
      : "The AI assistant is not configured (API Key missing). Please contact the administrator.";
  }
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are an expert Actuary and University Professor. 
        Your goal is to explain actuarial math concepts to finance students simply.
        Expertise in:
        1. Survival (px vs qx) and their complementary nature.
        2. Risk Theory and Ruin Probability (mention Solvency II and the 0.05% target if relevant).
        3. Insurance and Pensions (Actuarial PV).
        Use clear financial analogies. Keep answers concise and didactic.
        CRITICAL: Respond in ${lang === 'es' ? 'Spanish' : 'English'}.`,
      },
    });
    // Use .text property to get the generated text. Do not call as a method.
    return response.text || (lang === 'es' ? "Lo siento, no pude procesar tu duda." : "Sorry, I couldn't process your question.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'es' ? "Ocurrió un error al consultar al experto." : "An error occurred while consulting the expert.";
  }
};
