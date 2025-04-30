import express from 'express';
import connectDB from './DB/connectDB';
import bodyparser from 'body-parser';
import cors from 'cors';
import { loggerMiddleware } from './middleware';
import 'module-alias/register';
import { userRoute } from './routes';
import dotenv from 'dotenv';
dotenv.config();

const app= express();
const PORT= 3000;

connectDB();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
app.use(loggerMiddleware);
app.use('/api', userRoute);
app.listen(PORT, () => {    
    console.log(`Server is running on port http://localhost:${PORT}`);
}
);
