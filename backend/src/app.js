import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import roomRoutes from './routes/roomRoute.js';
import bookingRoutes from './routes/bookingRoute.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:[ 'http://localhost:5173'],
    credentials: true,            
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.get('/', (req,res,next) =>{
    res.send("Hello");
});

app.use('/rooms', roomRoutes);
app.use('/bookings', bookingRoutes);

export default app;