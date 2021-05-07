const mongoose=require("mongoose")
const validator = require('validator');


//schema start -> 
//scehma holo field er val ki type hbe ta define korar nam ai

const UserSchema= new mongoose.Schema({
    username:{
        //must be string hoite hobe
        //validation
        type:String,
        required:true,
        minlength:[2,"Min two Letters"],
        maxlength:30
    },

    mobile:{
        type:number,
        required:true,
    },

    address:{
        type:String,
        required:true,

    },
    profession:{
        type:String,
        required:true,

    },
    message:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,

        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Invalid Mail")
            }
        }

    },

    password:{
        type:String,
        
        required:true,
    },

    confirmpass:{
        type:String,
       
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    },

    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
    
})

//create collection Start

const User=new mongoose.model("USER",UserSchema)
module.exports=User
//express part a lagbe
//create collection end