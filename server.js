const express = require("express");
const dotenv = require("dotenv");

//Environment Variables
dotenv.config({
    path: "./config/env/env.config"
})

const app = express();
const PORT =  process.env.PORT;
console.log(PORT)
app.get("/",(req,res) =>{
    res.send("Hello")
})

app.listen(PORT, () =>{
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV} `);
})