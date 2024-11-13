import mongoose from "mongoose";

const connectMongoDB = async (): Promise<void> => {
    try {
        const uri = process.env.MongoDB_URI;
        if(!uri) {
            throw new Error("MongoDB_URI is not defined in enviorment varibles.");
        }
        await mongoose.connect(uri);
        console.log("Connnected to MOngoDB");
    } catch (error){
        console.log("error connetcing to MongoDB", (error as Error).message);
    }
};
export default connectMongoDB;