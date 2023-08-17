import express from "express";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";

const app = express();

const port = 8000;

app.use(express.json());

app.use((req, res, next)=>{
    req.body.date = new Date()
    console.log(req.body);
    next()
})

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);


app.listen(port, ()=>{
    console.log(`server chal gya port number ${port}`);
}); 