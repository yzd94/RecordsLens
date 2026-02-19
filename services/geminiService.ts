
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const translateTextWithAI = async (text: string, targetLang: string = "French") => {
  if (!API_KEY) throw new Error("API Key missing");

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Translate the following text encountered in a visual lens to ${targetLang}. 
    Text: "${text}"
    Provide context of the translation in a very luxury, sophisticated tone.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          original: { type: Type.STRING },
          translated: { type: Type.STRING },
          detectedLanguage: { type: Type.STRING },
          context: { type: Type.STRING, description: "A sophisticated description of the translation context." },
        },
        required: ["original", "translated", "detectedLanguage", "context"]
      }
    }
  });

  return JSON.parse(response.text);
};

export const analyzeImageForTranslation = async (base64Image: string) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: base64Image
        }
      },
      {
        text: "Extract any visible text from this image and translate it to French. Return JSON with 'original', 'translated', 'detectedLanguage', and 'context'."
      }
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          original: { type: Type.STRING },
          translated: { type: Type.STRING },
          detectedLanguage: { type: Type.STRING },
          context: { type: Type.STRING },
        }
      }
    }
  });

  return JSON.parse(response.text);
};
