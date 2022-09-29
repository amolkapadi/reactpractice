const express=require('express');
const mongoose = require('mongoose');
const app=express();

const dotenv =require("dotenv");
dotenv.config();

// //add schema
// const students=require("./models/studSchema");
const cors = require("cors");
//add router
const router =require("./routes/router");


app.use(cors());
app.use(express.json());

app.use(router);

mongoose.connect(process.env.Database).then(()=>{
    console.log("Database connection Done")
}).catch((err)=>{
    console.log(err);
});
app.listen(5000);




