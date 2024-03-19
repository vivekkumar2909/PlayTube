import mongoose from "mongoose";
import DB_NAME from './constant';
import express from "express";

const app = express();
; (async () => {
    try {
        await mongoose.connect(`${process.env.URL}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        app.on("error", (err) =>{

            console.log("err",err)
            throw err;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

        // console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error", error)
        throw error;
    }
})();