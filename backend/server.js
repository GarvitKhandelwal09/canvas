import express from 'express';
import cors from 'cors';
import connectDB from './config/dbConfig.js';
import multer from 'multer';
import dotenv from 'dotenv';

import { login } from './user/controllers/login.js';
import { signup } from './user/controllers/usercontroller.js';

dotenv.config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Middleware
app.use(express.json());
app.use(cors());

console.log("ENV CHECK:");

// Test route
app.get("/", (req, res) => {
    res.send("Server is running on this port");
});

// Connect MongoDB
connectDB();

// User routes
app.post("/login", login);

app.post("/signup", signup);

app.post("/upload", upload.single("file"), (req, res) => {
    console.log(req.file);

    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    res.json({
        message: "File uploaded successfully",
        file: {
            filename: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});