import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();
const APIKEY = process.env.GOOGLE_GEMINI_API_KEY;
console.log("GEMINI KEY: in ai service", APIKEY);

const ai = new GoogleGenAI({
  apiKey: APIKEY,
});

const generateContent = async (prompt) => {
  try {
    console.log("GEMINI KEY: in ai service- in generateContent", APIKEY);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    console.log("response of AI :... ", response.text);
    return response.text;
  } catch (error) {
    return error.message;
  }
};

export default generateContent;
