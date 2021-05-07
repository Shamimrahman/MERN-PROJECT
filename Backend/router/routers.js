const express=require('express')

// 1.construct router
// 2. Define Router
//3. Use Router in router.js
const router=new express.Router()

//require schema
const User =require('../model/userSchema')

//routing
router.get("/",(req,res)=>{
    res.send("Hello from Students Database")
})

//using async await
router.post("/register", async(req,res)=>{
    try{
        const user=new User(req.body)
        const createUser= await user.save()
        res.status(201).send(createUser)
        res.send("Data Store Sucessfully")
    }

    catch(e){
      res.status(400).send(e)
    }
})

//add user end
//get user
router.get("/getuser",async(req,res)=>{
    const Userdata=await User.find()
    res.send(Userdata)
})


//get oneuser

router.get('/getUser/:id', async (req,res)=>{
      
    try{
     const _id=req.params.id
     const userdata= await User.findById(_id)
 
     console.log(userdata)
 
     if(!userdata){
         res.status(404)
     }
     else{
         res.status(200).send(userdata)
     }
    }
 
    catch(e){
        res.status(400).send(e)
    }
 
 
 })
 
 //get imdividual student finish
 


module.exports=router

