import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; // Ensure this file exports a valid function
import orderRoutes from "./routes/orderRoutes.js"; // Ensure proper export of routes
import errorHandler from "./middleware/errorHandler.js"; // Ensure proper export of middleware

dotenv.config(); // Load environment variables
connectDB(); // Connect to the database

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/orders", orderRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
