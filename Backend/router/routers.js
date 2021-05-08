const express=require('express')
const bcrypt=require('bcryptjs')

// 1.construct router
// 2. Define Router
//3. Use Router in router.js
const router=new express.Router()

//require schema
const User =require('../model/userSchema')

//routing
router.get("/",(req,res)=>{
    res.send("Hello from USER Database")
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
 
//Login start
router.post('/login',async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password

        const usermail=await User.findOne({email:email})
          //ekhn amra reg a jei password disi ta to hash hoye db a ase
         //so amra jokhon login korte jabo tokhon to password text akar a jabe
         //so bcrypt kore nite jate db er password and login er pass word match hoy
         //match na hole login hobe na
        
         const ismatch=await bcrypt.compare(password,usermail.password)
        if(ismatch){
            res.status(201).render("/")
            
        }

        else{
            res.send("Please Use Proper Information")
        }

    }

    catch(e){
        res.status(400).send("Invalid mail")
    }
})

module.exports=router

