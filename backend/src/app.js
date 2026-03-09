const express = require('express')
const authRoutes = require("./routes/authRoutes")
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express();
app.use(cors({
    origin: 'https://biodata-generator-frontend.onrender.com',
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());



app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/api/auth",authRoutes)

module.exports = app; 