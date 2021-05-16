const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");




// 1.construct router
// 2. Define Router
//3. Use Router in router.js
const router = new express.Router();

require('../db/connection')


//require schema
const User = require("../model/userSchema");

//routing

//using async await

/*
router.post('/register',async(req,res)=>{
    
    try{
        const pass=req.body.password;
        const cpass=req.body.confirmpass;
  

         if(pass===cpass){
 
         //data save to database
           const userform=new User({
            username:req.body.username,
            email:req.body.email,
            address:req.body.address,
            mobile:req.body.mobile,
            profession:req.body.profession,
            password:req.body.password,
            retypepass:req.body.confirmpepass
        })
       
        //generate Jwt
        const token=await createUser.generateAuthToken();
        console.log(`The Registration token is ${token}`)
         
        //cookie start
        res.cookie('jwt',token,  {
            express:new Date(Date.now()+300000),
            httpOnly:true
        })
        //cookie end
        
       //save config
        const storeuser=await userform.save()
        console.log(storeuser)
       
    }

    else{
        window.alert("Password not Match")
    }

    }
    catch (e){
        res.status(404).send(e)

    }
})
*/

//second way

router.post("/register", async (req, res) => {
  const {
    username,
    address,
    email,
    mobile,
    profession,
    password,
    confirmpass,
  } = req.body;

  if (
    !username ||
    !address ||
    !email ||
    !mobile ||
    !profession ||
    !password ||
    !confirmpass
  ) {
    return res.status(402).json({ error: "Please fill up the form" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(402).json({ error: "Email already exist" });
    } else if (password != confirmpass) {
      return res.status(402).json({ error: "Pass Not Match" });
    } else {
      const user = new User({
        username,
        address,
        email,
        mobile,
        profession,
        password,
        confirmpass,
      });

      await user.save();
      res.status(201).json({ message: "Successfully Stored" });

    }
  } catch (error) {
    console.log(error);
  }
});

//add user end
//get user
router.get("/getuser", async (req, res) => {
  const Userdata = await User.find();
  res.send(Userdata);
});

//get oneuser

router.get("/getUser/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const userdata = await User.findById(_id);

    console.log(userdata);

    if (!userdata) {
      res.status(404);
    } else {
      res.status(200).send(userdata);
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

//get imdividual student finish

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

        //middle ware

        const token=await usermail.generateAuthToken();
        console.log(`The login token part is ${token}`)
        res.cookie('jwt',token,  {
          expires:new Date(Date.now() + 25892000000),
            httpOnly:true
        })
        //here jwt cookie name 
        //aikhn 3000 mean kore ami ekta website a dhuklam 
        //thn login howar por autmoaticly 10/20mins porbe abar login koren
        //like nsu rds 
        //so token cokkies theke expire kore dei
       
       //cookie end
       //cookie token get 
       //cookie get kora lagbe cz jwt token cookie te ase
       //tar jonno npm i cookie-parser
       //var cookieParser = require('cookie-parser')

       //cookie parser app.js a use korte hobe. and 
       //extra ekta page khule ta get korte hobe
     //var cookieParser = require('cookie-parser')
      // app.use(cookieParser())





        //middleware end
        if(ismatch){
           res.json("Login Successfull")
            
        }

        else{
            res.send(400)
        }

    }

    catch(e){
        res.status(400).send("Invalid mail")
    }
})


//to verify about us page


const auth=require('../Middleware/auth')
 router.get('/about', auth,(req,res)=>{
  
    //here auth is come fromm middle ware auth file to check user is authentic or not
     console.log(`The valid token is ${req.cookies.jwt}`)
     res.send(req.rootUser)
   
  })
  

 //get data for both home page and contact page
  router.get('/getdata', auth,(req,res)=>{
  
    //here auth is come fromm middle ware auth file to check user is authentic or not
     console.log(`The valid token is ${req.cookies.jwt}`)
     res.send(req.rootUser)
   
  })


//Login start
/*router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "fill up the crediantls" });
    }

    const userLogin = await User.findOne({ email: email });
    //ekhn amra reg a jei password disi ta to hash hoye db a ase
    //so amra jokhon login korte jabo tokhon to password text akar a jabe
    //so bcrypt kore nite jate db er password and login er pass word match hoy
    //match na hole login hobe na

    //generate jwt for validation
    const ismatch = await bcrypt.compare(password, userLogin.password);


    if (userLogin&&ismatch) {
      const token = await usermail.generateAuthToken();
      res.cookie("jwt", token, {
        express: new Date(Date.now() + 30000147875757),
        httpOnly: true,
      });

      res.json("Login Successfully");
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (e) {
    res.status(404).send("Problem Occure");
  }
});
*/
module.exports = router;
