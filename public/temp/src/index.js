// require('dotnev').config({path:'./env'})
// import dotnev from "dotnev" 
// import connectDB from "./db/index.js";

// dotnev.config({
//     path:'./env'
// })

// connectDB()

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chai Backend Server is Running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

 /*import express from "express"
const app=express()
(async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}``/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERRR :",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port $ {process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR",error)
        throw err
    }
}) */
