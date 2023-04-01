const {data}=require('../data.js')

const recentltySoldSchema=require('../model/recentlySoldSchema')
// const landAndEstateSchema=require('../model/productSchema.js')

const getRecentlySold = async(req, res) => {
    try {
       
        const products=await recentltySoldSchema.find()
        
        res.send(products)
        // res.send(createrecentltySold)
        
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };

  module.exports={getRecentlySold}