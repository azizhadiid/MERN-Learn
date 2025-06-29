import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log("MONGODB IS SUCCESFULLY")
    } catch (error) {
        console.error("ERROR CONNECTION", error);
        process.exit(1)
    };
};