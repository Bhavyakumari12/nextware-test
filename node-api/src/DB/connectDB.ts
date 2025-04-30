import mongoose from "mongoose";

async function connectDB() {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      console.error("MongoDB URI is not provided");
      process.exit(1);
    }

    mongoose.Promise = global.Promise;
    await mongoose.connect(uri);
    console.log(`MongoDB connected successfully to ${uri}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export default connectDB;
