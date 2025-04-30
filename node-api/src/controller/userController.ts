import { Request, Response } from "express";
import { _createUser, _login, _deleteUser, _verifyOtp } from "@services";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await _createUser(req.body);
    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error: any) {
    res.status(error.statusCode || 500).json({
      message: (error as Error).message || "Internal server error",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await _login(req.body);
    res.status(201).json({
      message: "Login successful",
      data: user,
    });
  } catch (error: any) {
    res.status(error.statusCode || 500).json({
      message: (error as Error).message || "Internal server error",
    });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const user = await _verifyOtp(req.body);
    res.status(200).json({
      message: "OTP verified successfully",
      data: user,
    });
  } catch (error: any) {
    res.status(error.statusCode || 500).json({
      message: (error as Error).message || "Internal server error",
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await _deleteUser(req.body.email);
    res.status(200).json({
      message: "User deleted successfully",
      data: user,
    });
  } catch (error: any) {
    res.status(error.statusCode || 500).json({
      message: (error as Error).message || "Internal server error",
    });
  }
};
