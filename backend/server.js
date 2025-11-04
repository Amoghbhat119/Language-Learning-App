import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();


app.use(helmet());
app.use(express.json());


app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN, // http://localhost:5173
    credentials: true,
  })
);


app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));


app.get("/", (_req, res) => res.send("API running"));
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((e) => {
    console.error("DB connect failed:", e.message);
    process.exit(1);
  });
