import express from "express";

const app = express();

app.get("/api/notes", (req,res) => {
    // Send Notes
    res.status(200).send("You Got 5 Notes");
});

app.get("/api/notes", (req,res) => {
    // Create Notes
    res.send("You Got 5 Notes");
});

app.listen(5001, () => {
    console.log("Server start on PORT: 5001");
});

