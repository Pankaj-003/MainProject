import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoute.js';
import productRoute from "../routes/productRoute.js";
import cors from 'cors'
//configure env
dotenv.config();

//rest object
const app = express();

//database config
connectDB();

    
//middelwares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoute);

//rest api
app.get('/', (req, res) => {
    res.send("<h1>Welcome to ecommmerce my name is pankaj app</h1>")
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`server running ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white);
})


//Hello
//How Are You
//New