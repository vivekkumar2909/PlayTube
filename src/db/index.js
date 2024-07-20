import mongoose from "mongoose";
import DB_NAME from "../constant.js";
// import express from "express";

// const app = express();


const DB_Connection = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.URL}${DB_NAME}`);
        console.log(` Mongodb Connection !! DB Host${connectionInstance.connection.host}`);
    } catch (e) {
        console.log("MondoDb connection Error", e);
        process.exit(1);
    }
}

export default DB_Connection;

