require("dotenv").config();
const walletRoutes = require("./routes/walletRoutes");
const freezeRoutes = require("./routes/freezeRoutes");
const policyRoutes = require("./routes/policyRoutes");
const transactionRoutes=require("./routes/transactionRoutes");
const agentRoutes = require("./routes/agentRoutes");


const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/wallet", walletRoutes);
app.use("/", freezeRoutes);
app.use("/policy", policyRoutes);
app.use("/transactions",transactionRoutes);
app.use("/agent",agentRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// Health Check
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is healthy",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});