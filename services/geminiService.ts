
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

export const chatWithChethiyaAI = async (message: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is having a nap. Please try again in a moment!";
  }
};
