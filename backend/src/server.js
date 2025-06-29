import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimier from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// middleware
app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());
app.use(ratelimier);

// app.use((req,res,next) => {
//     console.log(`Req method is ${req.method} & req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", noteRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log("Server start on PORT: ", port);
    });
});