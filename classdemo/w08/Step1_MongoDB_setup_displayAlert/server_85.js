import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import connectDB_85 from './db/connect_85.js'
import mongoose from 'mongoose';

app.get('/',(req, res) => {
    res.send('Welcome 湯士緯 209410785');
});

const port = process.env.PORT || 5000;


const start = async () => {
    try{
        await connectDB_85(process.env.MONGO_LOCAL_URL).then( () => {
            console.log('Connecting to MongoDB');
        });
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    }catch(err){
        console.log(err);
    }
}

start();