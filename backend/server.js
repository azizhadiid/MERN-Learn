import express, { json } from "express";

const app = express();

app.get("/api/notes", (req,res) => {
    // Send Notes
    res.status(200).send("You Got 50 Notes");
});

app.get("/api/notes", (req,res) => {
    // Create Notes
    res.send("You Got 5 Notes");
});

app.post("/api/notes", (req,res) => {
    // Send Notes
    res.status(201).json({message: "Post Create Succesfully"})
});

app.put("/api/notes/:id", (req,res) => {
    // Send Notes
    res.status(200).json({message: "Note Update Succesfully"})
});

app.delete("/api/notes/:id", (req,res) => {
    // Send Notes
    res.status(200).json({message: "Note Delate Succesfully"})
});

app.listen(5001, () => {
    console.log("Server start on PORT: 5001");
});

