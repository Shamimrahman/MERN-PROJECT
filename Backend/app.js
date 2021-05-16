const dotenv=require('dotenv')
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const path=require('path')
const port=process.env.PORT || 5000
const bcrypt=require('bcrypt')
var cors = require('cors')
var cookieParser = require('cookie-parser')
const jwt=require('jsonwebtoken')






//for use in all file
dotenv.config({path:'./config.env'})

// connect db of mongodb atlast
//connect mongobd db
require('./db/connection')
//connection of db end
app.use(cookieParser())

app.use(cors())

//to get json data from postamn
app.use(express.json())

//to get json data from frontend
//Get data from ui
app.use(express.urlencoded({extended:false}))


//get router
const router=require('./router/routers')
app.use(router)
//get router end

//cookie parser to get token which is stored in cookie


//Get cookie and validate uset to give permission entry into about page
 
 

 


//connection
app.listen(port,()=>{
    console.log(`Connected from ${port}`)
})

