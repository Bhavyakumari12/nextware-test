import mongoose from "mongoose";

async function connectDB() {
  try {
    const username = process.env.MONGO_USERNAME;
    const password = process.env.MONGO_PASSWORD;
    const clusterUrl = process.env.MONGO_URL;
    const database = process.env.MONGO_DB;

    if (!username || !password || !clusterUrl || !database) {
      console.error("MongoDB URI is not provided");
      process.exit(1);
    }

    const url = `mongodb+srv://${username}:${password}@${clusterUrl}/${database}?retryWrites=true&w=majority`;
    mongoose.Promise = global.Promise;
    await mongoose.connect(url);
    console.log(`MongoDB connected successfully to ${url}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export default connectDB;
