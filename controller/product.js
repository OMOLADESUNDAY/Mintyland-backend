const {data}=require('../data.js')
const Product=require('../model/productSchema.js')
const LandAndEstate=require('../model/landAndEstateSchema.js')
// const landAndEstateSchema=require('../model/productSchema.js')
const express=require('express')
const app=express()
const getProduct = async(req, res) => {
    try {
      const product=await Product.insertMany(data.TrendingData)
        res.send(product)
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };
  const getSingleProduct=async(req,res)=>{
    const product =await Product.findOne({_id:req.params.id})
    if (product){
        res.send(product)
    }
    else{
        res.status(404).send({message:'Page not found'})
    }
}
const getAddToCart=async (req,res)=>{
  const product=await Product.findOne({_id:req.params.id})
 
  if (product){
      return res.send(product)
  }
  else{
      res.status(404).send({message:'Page not found'})
  }
 
}
const getTrending=async(req,res)=>{
  const trending=Product.find()
 
  if (trending){
      return res.send(trending)
  }
  else{
      res.status(404).send({message:'Page not found'})
  }
 
}








  module.exports={getProduct, getSingleProduct, getAddToCart,getTrending}
