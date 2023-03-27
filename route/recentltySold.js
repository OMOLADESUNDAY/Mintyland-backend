// const {getProduct}=require('../controller/product.js')
const express=require('express')
const recentlySoldRouter =express.Router()
const {getRecentlySold} =require('../controller/recentlySold.js')

recentlySoldRouter.get('/',getRecentlySold)

module.exports={recentlySoldRouter}