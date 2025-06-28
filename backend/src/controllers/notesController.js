export const getAllNotes = async (req,res) => {
    res.status(200).send("You just fetched the notes");
};

export const createNote = async (req,res) => {
    res.status(201).json({message: "Post Create Succesfully"});
};

export const updateNote = async (req,res) => {
    res.status(200).json({message: "Note Update Succesfully"});
};

export const deleteNote = async(req,res) => {
    res.status(200).json({message: "Note Delate Succesfully"});
};