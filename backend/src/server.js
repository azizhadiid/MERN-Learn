import express, { json } from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
connectDB();

// middleware
app.use(express.json());

app.use("/api/notes", noteRoutes);

app.listen(port, () => {
    console.log("Server start on PORT: ", port);
});