import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://azizalhadiid88:IXeXCXPuMyZEAZtG@cluster0.7a1xq8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log("MONGODB IS SUCCESFULLY")
    } catch (error) {
        console.error("ERROR CONNECTION", error);
        process.exit(1)
    };
};