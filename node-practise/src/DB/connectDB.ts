import mongoose from "mongoose";


async function connectDB() {
    try{
      const url = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";
      mongoose.Promise=global.Promise;
      await mongoose.connect(url);
      console.log(`MongoDB connected successfully to ${url}`);
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

export default connectDB;