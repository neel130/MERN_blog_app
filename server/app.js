const express = require("express")
const dotenv = require('dotenv')
dotenv.config();
const connectDatabase = require("./mongodb/connect")
connectDatabase();

// ROUTE IMPORTS
const authroute = require("./routes/authRouter")
const userroute =require("./routes/userRoute")
const postroute = require("./routes/postRout");



const app = express();
app.use(express.json());

// ROUTES
app.use("/user",authroute)
app.use("/user",userroute)
app.use("/post",postroute)

 


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port no ${process.env.PORT} `)
})