const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
let port = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config();


const cors = require("cors");
const app = express();

//middleware
app.use(cors())
app.use(express.json())

app.use("/books", router);


mongoose.connect("mongodb+srv://Admin:Nodejs@cluster0.hzr9c.mongodb.net/bookstore?retryWrites=true&w=majority"
).then(() => console.log('Database connection Done !!!')).catch((err) => console.log(err));

app.listen(port,()=>{
    console.log(`App running on port ${port}`)
});
