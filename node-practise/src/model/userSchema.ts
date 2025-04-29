import mongoose from "mongoose";
  const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    age: Number,
    dob: Date,
    otp: String,
    otpExpiresAt: Date
  })
  
export const user = mongoose.model("user", userSchema);
