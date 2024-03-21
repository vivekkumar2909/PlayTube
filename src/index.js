// require('dotenv').config({path : './env'})
// import mongoose from "mongoose";
// import DB_NAME from './constant';
// import express from "express";
import dotenv from 'dotenv';
import DB_Connection from "./db/index.js";
import app from './app.js';

dotenv.config({path : './env'});

// const app = express();

DB_Connection().then(()=>{
    app.listen(process.env.PORT || 7000, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
    app.on('error',(error)=>{
        console.log("Error",error)
        throw error;
    })
}).catch((err)=>{
    console.log("MongoDB Connection Failed",err);
})











// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.URL}/${DB_NAME}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//             useFindAndModify: false
//         });

//         app.on("error", (err) =>{

//             console.log("err",err)
//             throw err;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });

//         // console.log("Connected to MongoDB");
//     } catch (error) {
//         console.log("Error", error)
//         throw error;
//     }
// })();