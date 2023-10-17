import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import cors from "cors"

const app = express();
app.use(cors())
dotenv.config();
const port = 8000;

const connect = () => {

    mongoose.connect(process.env.MONGO_URL)
     
    .then(() => {
        console.log(`connected to DB`);
      })
      .catch((err) => {
        throw err;
      });
  };

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use((req, res, next)=>{
    req.body.date = new Date()
    console.log(req.body);
    next()
})

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/post", postRoutes);


app.listen(port, ()=>{
    console.log(`server chal gya port number ${port}`);
    connect();
}); 