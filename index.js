import express from "express";
import dotEnv from "dotenv";
const app = express();
dotEnv.config();
app.listen(process.env.PORT,() =>{
 console.log(`server is running at port ${process.env.PORT}`);
});
