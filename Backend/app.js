const dotenv=require('dotenv')
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const path=require('path')
const port=process.env.PORT || 3000
const bcrypt=require('bcrypt')


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

//cookie parser to get token which is stored in cookie
var cookieParser = require('cookie-parser')
const jwt=require('jsonwebtoken')

 app.use(cookieParser())
 
 app.get('/validtoken', auth,(req,res)=>{
  
  //here auth is come fromm middle ware auth file to check user is authentic or not
   console.log(`The valid token is ${req.cookies.jwt}`)
  res.render('validtoken')
})





//connection
app.listen(port,()=>{
    console.log(`Connected from ${port}`)
})