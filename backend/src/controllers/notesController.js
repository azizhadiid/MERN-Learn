import Note from "../models/Note.js"

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("ERROR in getAllNotes Controller", error);
        res.status(500).json({
            message: "Internal Serve error"
        });
    };
};

export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({
            message: "Note is Not Found"
        });
        res.status(200).json(note);
    } catch (error) {
        console.error("ERROR in getNoteById Controller", error);
        res.status(500).json({
            message: "Internal Serve error"
        });
    };
};

export const createNote = async (req, res) => {
    try {
        const {
            title,
            content
        } = req.body;
        const newNote = new Note({
            title,
            content
        });

        const saveNote = await newNote.save();
        res.status(201).json(saveNote);
    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const updateNote = async (req, res) => {
    try {
        const {
            title,
            content
        } = req.body;
        const updateNote = await Note.findByIdAndUpdate(req.params.id, {
            title,
            content
        }, {
            new: true
        });

        if (!updateNote) res.status(404).json({
            message: "Note is Not Found"
        });

        res.status(200).json(updateNote);
    } catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote) return res.status(404).json({
            message: "Note not found"
        });
        res.status(200).json({
            message: "Note deleted successfully!"
        });
    } catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }

};