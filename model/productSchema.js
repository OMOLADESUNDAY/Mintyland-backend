const mongoose=require('mongoose')
// import mongoose from 'mongoose'
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name required"],
        trim:true
    },
    image:{
        type: String,
        required: true
    },
    no_of_review:{
        type:Number,
        required:[true,"number of reviews required"],
        trim:true
    },
    countInStock:{
        type:Number,
        required:[true,"count in stock required"],
        trim:true
    },
    category:{
        type:String,
        required:[true,"category required"],
        trim:true
    },
    price:{
        type:Number,
        required:[true,"price required"],
        trim:true
    },
    rating:{
        type:Number,
        required:[true,'rating required'],
        trim:true
    },
    description:{
        type:String,
        required:[true,'description required'],
        trim:true
    }
},
{
    timestamps:true
}
)

const Product= module.exports=mongoose.model('product',productSchema)
module.exports= Product