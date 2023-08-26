const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require('./Routers/userRouter.js')

const app = express();

app.use(express.json());

app.use('/api/user' , userRouter)


require("dotenv").config();
const url = process.env.ATLAS_URL;

app.use("/", (req, res)=>{
    res.send("Hello Bhavan");
})

mongoose.connect(url)
.then(()=>{
    app.listen(8000);
    console.log("Mongoose connected.")
})
.catch((err) =>{
    console.log(err)
})