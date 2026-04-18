import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";    
import File from "../models/file.js";    
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateResumeSummary = async (resumeText) => {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const prompt = `
You are an expert resume analyzer.

Summarize this resume in a structured way:

1. Candidate Summary
2. Key Skills
3. Experience overview
4. Strengths
5. Weaknesses / gaps

Resume:
${resumeText}
`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const file = await File.create({
        content : response.text()
    })
    return response.text();
};