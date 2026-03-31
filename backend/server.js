const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // ✅ properly called

console.log("ENV CHECK:", process.env.MONGO_URI);

// Test route
app.get("/", (req, res) => {
    res.send("Server is running on this port");
});

// Connect MongoDB
connectDB();

// User routes
const { login } = require('./user/controllers/login');
const { signup } = require('./user/controllers/usercontroller');
app.post("/login" ,(req,res)=>{
    signup(req,res)
    console.log(req.body)
})

 // all /api/users/* routes handled in userRoutes.js

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

