require("dotenv").config(); // Load environment variables from .env file FIRST

const express = require("express");
const connectDB = require("./config/database");
const app = require("./app");

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Port configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});