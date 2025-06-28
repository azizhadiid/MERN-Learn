import express, { json } from "express";
import noteRoutes from "./routes/noteRoutes.js";

const app = express();

app.use("/api/notes", noteRoutes);
// app.use("/api/product", productRoutes);
// app.use("/api/posts", productRoutes);
// app.use("/api/payment", productRoutes);
// app.use("/api/email", productRoutes);

app.listen(5001, () => {
    console.log("Server start on PORT: 5001");
});

