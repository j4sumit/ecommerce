// const express = require('express');
// const colors = require('colors');

import express from 'express';
import colors from 'colors';
import dotenv from  'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';

// configure env
dotenv.config()


// database configs
connectDB();

// rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth',authRoutes);

//rest api

app.get('/', (req, res)=> {
    res.send('<h1>welocome to ecommerce project</h1>');
})

//port
const PORT = process.env.PORT || 8080;

//RUN LISTEN
    app.listen(PORT, ()=>{
        console.log(`server running on mode ${process.env.DEV_MODE} and PORT on ${PORT}`.bgCyan.white)
    })