const User=require('../model/userSchema.js')
const {data} =require('../data.js')
const expressAsyncHandler=require('express-async-handler')
const bcrypt=require('bcryptjs')
const generateToken = require('./utils.js')
const postInfo =expressAsyncHandler(
  async(req, res) => {
    try {
        const { email,password } = req.body;
        const user=await User.findOne({email:email})
        if(user){
          if(bcrypt.compareSync(password,user.password)){
            res.send({
              _id:user._id,
              name:user.name,
              email:user.email,
              isAdmin:user.isAdmin,
              token:generateToken(user)
            })
            return
          }
        }
       res.status(401).send({message:'invalid email or password'})
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
) 
const postSignInfo=expressAsyncHandler(
  async(req, res) => {
    const isAdmin=false
    try {
        const {username,email,password } = req.body;
        const checkExist=await User.findOne({email:email})
        if(checkExist){
          res.status(409).json({message:'email already exist'})
        }
        else{
          const newPassword=bcrypt.hashSync(password)
            const user=await User.create({name:username,isAdmin,email,password:newPassword})
            res.send(user)
        }
        
          
         
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
) 



module.exports={postInfo,postSignInfo}


