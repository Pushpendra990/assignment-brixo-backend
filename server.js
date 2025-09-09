import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import cookieParser from "cookie-parser";
import ifscRoutes from './src/routes/ifscRoutes.js';

import connectDB from "./src/config/db.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//   })
// );

app.use('/api/v1', ifscRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
