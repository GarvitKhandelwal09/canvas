import pdfParse from "pdf-parse";
import { generateResumeSummary } from "./aiprocess.js";

const extractTextFromPDF = async (buffer) => {
    const data = await pdfParse(buffer);
    generateResumeSummary(data.text)
    return data.text;
    
};
 export { extractTextFromPDF };