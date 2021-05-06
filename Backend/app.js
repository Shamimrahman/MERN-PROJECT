const express=require("express")
const app=express()
const mongoose=require("mongoose")
const path=require('path')
const port=process.env.PORT || 3000

// connect db of mongodb atlast
const DB='mongodb+srv://shamim:12345@cluster0.arxxp.mongodb.net/Mernstack?retryWrites=true&w=majority'
mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
.then(()=>

    console.log("Database Connection Successful")
).catch((err)=>console.log(err)

//then r catch part ai hoilo promise
)
//connection of db end

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