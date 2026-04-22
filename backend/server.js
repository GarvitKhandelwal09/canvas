import express from 'express';
import cors from 'cors';
import connectDB from './config/dbConfig.js';
import multer from 'multer';
import dotenv from 'dotenv';
import { extractTextFromPDF } from './file/fileextract.js';
import { login } from './user/controllers/login.js';
import { signup } from './user/controllers/usercontroller.js';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Middleware
app.use(express.json());
app.use(cors());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Define the model with System Instructions
const model = genAI.getGenerativeModel({ 
  model: "gemini-3-flash-preview",
  systemInstruction: "You are a professional technical interviewer. Ask one concise question at a time and wait for the user to respond. Do not use markdown like bolding or headers; keep it plain text for chat bubbles."
});

// Test route
app.get("/", (req, res) => {
    res.send("Server is running on this port");
});

// Connect MongoDB
connectDB();

// User routes
app.post("/login", login);
app.post("/signup", signup);

// File Upload Route
app.post("/upload", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        const resumedata = await extractTextFromPDF(req.file.buffer);
        console.log("Resume content extracted successfully");

        res.json({
            message: "File uploaded successfully",
            file: {
                filename: req.file.originalname,
                mimetype: req.file.mimetype,
                size: req.file.size
            }
        });
    } catch (error) {
        console.error("Upload Error:", error);
        res.status(500).json({ message: "Error processing PDF" });
    }
});

// ✅ FIXED PRACTICE ROUTE
app.post("/practice", async (req, res) => {
    try {
        const { message, history } = req.body;   

        // 1. Format the history
        const formattedHistory = (history || [])
            .map(msg => ({
                role: msg.role === "bot" ? "model" : "user",
                parts: [{ text: msg.text }],
            }))
            // 2. CRITICAL: Remove the very first message if it is from the 'model'
            // Gemini strictly requires the first message in history to be from 'user'
            .filter((msg, index) => !(index === 0 && msg.role === "model"));

        // Start chat with the cleaned history
        const chat = model.startChat({
            history: formattedHistory, 
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const aiResponse = response.text();

        res.json({
            reply: aiResponse
        });
        console.log("AI Response:", aiResponse);
    } catch (error) {
        console.error("Gemini API Error:", error.message);
        res.status(500).json({ reply: "I'm having trouble processing that. Can you try again?" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});