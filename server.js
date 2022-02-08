const express = require("express");
const dotenv = require("dotenv");
const customErrorHandler = require("./middlewares/errors/customErrorHandlers")
const connectDatabase = require("./helpers/database/connectDatabase")
const router = require("./routers");// burada routers altındaki index dosyasını alması gerektiğini otomatik olarak algılıyor.

//Environment Variables
dotenv.config({
    path: "./config/env/env.config"
})

//MongoDB Database Connection 

connectDatabase();

const app = express();

app.use(express.json());
const PORT = process.env.PORT;

app.use("/api",router);

app.use(customErrorHandler);

app.listen(PORT, () => {
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV} `);
})


