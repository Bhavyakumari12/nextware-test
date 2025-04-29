import { Request, Response } from "express";
import { userService } from "src/service";


export const createUser =  async (req: Request, res: Response)=> {
  try {
    console.log(req.body);
    const user = await userService.createUser(req.body);
    res.status(201).json({
      message: 'User created successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message || 'Internal server error',
    });
  }
};


export const login = async (req: Request, res: Response) => {
  try {
    const user = await userService.login(req.body);
    res.status(201).json({
      message: 'Login successful',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message || 'Internal server error',
    });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const user = await userService.verifyOtp(req.body);
    res.status(200).json({
      message: 'OTP verified successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message || 'Internal server error',
    });
  }
};


export const deleteUser = async (req: Request, res: Response) => {  
  try {
    const user = await userService.deleteUser(req.body.email);
    res.status(200).json({
      message: 'User deleted successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message || 'Internal server error',
    });
  }
}