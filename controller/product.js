const {data}=require('../data.js')
const Product=require('../model/productSchema.js')
const LandAndEstate=require('../model/landAndEstateSchema.js')
// const landAndEstateSchema=require('../model/productSchema.js')

const getProduct = async(req, res) => {
    try {
      // console.log(productSchema)
        // await 
        const products=await Product.find()
        // Product.insertMany()
        // const createProduct=await Product.insertMany(data.TrendingData)
      
        // const { username, password } = req.body;
        // const productSchema=await productSchema.create({username,password})
        // res.status(200).json({productSchema});
        
        // res.send(createProduct)
        res.send(products)
        
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };

  const getSingleProduct=async(req,res)=>{
    // const product= await Product.findOne((x)=>Number(x._id) === Number(req.params.id))
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
