const express=require("express")

// import express  from "express"
const userRouter=express.Router()
const {postInfo}=require('../controller/user.js')
// const {getproduct}=require('../controller/product.js')
userRouter.post('/',postInfo)


module.exports={userRouter}



