import { user } from "@models";
import HttpError from "@utils";
import bcrypt from "bcryptjs";

export const _createUser = async (userData: any) => {
  try {
    const { name, email, password, company, age, dob } = userData;
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      throw new HttpError("Email is already registered.", 400);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({
      name,
      email,
      password: hashedPassword,
      company,
      age,
      dob,
    });
    return await newUser.save();
  } catch (error) {
    throw new HttpError("Error creating user: " + error);
  }
};

export const _login = async (data: any) => {
  try {
    const { email, password } = data;
    const userData = await user.findOne({ email });
    if (!userData) {
      throw new HttpError("Invalid credentials", 401);
    }
    const valid = await bcrypt.compare(password, userData?.password as string);
    if (!valid) {
      throw new HttpError("Invalid password", 401);
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    userData.otp = otp;
    userData.otpExpiresAt = new Date(Date.now() + 10 * 60000);
    await userData.save();
    return userData;
  } catch (error) {
    throw new HttpError("Error fetching user: " + error);
  }
};

export const _verifyOtp = async (data: any) => {
  const { email, otp } = data;
  console.log(email, otp);
  const userData = await user.findOne({ email });
  console.log(userData);
  if (
    !userData ||
    userData.otp !== otp ||
    new Date() > (userData?.otpExpiresAt || 0)
  ) {
    throw new HttpError("OTP invalid or expired");
  }
  userData.otp = null;
  userData.otpExpiresAt = null;
  await userData.save();
  return userData;
};

export const _deleteUser = async (email: string) => {
  try {
    const deletedUser = await user.findOneAndDelete({ email });
    console.log(deletedUser);
    if (!deletedUser) {
      throw new HttpError("User not found", 404);
    }
    return deletedUser;
  } catch (error) {
    throw new HttpError("Error deleting user: " + error);
  }
};
