import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './configs/mongodb.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000
connectDB()

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Welcome bad boy")
})

app.listen(PORT, ()=>{
    console.log("port: ", PORT)
})


