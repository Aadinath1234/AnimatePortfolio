import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

// Initialize the express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", contactRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
