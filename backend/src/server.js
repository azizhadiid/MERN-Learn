import express, { json } from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();
connectDB();

app.use("/api/notes", noteRoutes);

app.listen(5001, () => {
    console.log("Server start on PORT: 5001");
});