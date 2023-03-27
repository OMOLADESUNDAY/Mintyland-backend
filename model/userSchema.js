const mongoose=require('mongoose')
// import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,'username required'],
        trim:true,
        unique:true 
    },
    password:{
        type:String,
        required:[true,"password required"],
        trim:true
    },
    name:{type:String,required:[true,'name required']},
    isAdmin:{type:Boolean,default:false,required:true}  
},
{
    timestamps:true
}

)

const User =module.exports=mongoose.model('User',userSchema)
module.exports=User