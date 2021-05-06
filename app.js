const express=require("express")
const app=express()
const path=require('path')
const port=process.env.PORT || 3000



//router
app.get('/',(req,res)=>{
    res.send("Welcome to Mern Project")
})

//connection
app.listen(port,()=>{
    console.log(`Connected from ${port}`)
})