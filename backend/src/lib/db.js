import mongoose from "mongoose";

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error("MongoUri is required")
        }

        const conn = await mongoose.connect(mongoUri);

        console.log("MongoDb connected", conn.connection.host);
    } catch (error) {
        console.error("MongoDb connection error:", error.message);
        process.exit(1);
    }
}