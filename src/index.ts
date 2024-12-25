import express from "express";
import fileRoutes from "./routes/fileRoutes";

const app = express();

app.use('/api' ,fileRoutes);

app.listen(8900 , ()=>{
    console.log("Server listening at localhost:8900")
})