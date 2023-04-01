const {data}=require('../data.js')

const recentltySoldSchema=require('../model/recentlySoldSchema')
// const landAndEstateSchema=require('../model/productSchema.js')

const getRecentlySold = async(req, res) => {
    try {
      // console.log(productSchema)
        // await 
        const products=await recentltySoldSchema.find()
        // Product.insertMany()
        // const createrecentltySold=await recentltySoldSchema.insertMany(data.RecentSold)

        // const { username, password } = req.body;
        // const productSchema=await productSchema.create({username,password})
        // res.status(200).json({productSchema});
        res.send(products)
        // res.send(createrecentltySold)
        
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };

  module.exports={getRecentlySold}