import express from 'express';
import { createUser, deleteUser, login, verifyOtp } from '../controller';


const router = express.Router();
router.post('/register', createUser);
router.post('/login', login);
router.post('/verify-otp', verifyOtp);
router.delete('/delete-account', deleteUser);

export default router;