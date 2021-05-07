const dotenv=require('dotenv')
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const path=require('path')
const port=process.env.PORT || 3000

//for use in all file
dotenv.config({path:'./config.env'})

// connect db of mongodb atlast
//connect mongobd db
require('./db/connection')
//connection of db end

//to get json data from postamn
app.use(express.json())

//get router
const router=require('./router/routers')
app.use(router)
//get router end






//middleware
const middleware=(req,res,next)=>{
    console.log('Authorized')
   
    next()
   }
//router
app.get('/',(req,res)=>{
    res.send("Welcome to Mern Project")
})



app.get('/about',middleware,(req,res)=>{
    res.send("Welcome to Secret Page")
})
//connection
app.listen(port,()=>{
    console.log(`Connected from ${port}`)
})