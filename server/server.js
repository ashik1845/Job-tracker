import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "https://hireflow-jobtracker.netlify.app/"],
  credentials: true
}));
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/applications", applicationRoutes);

// Error handler (must be last)
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
