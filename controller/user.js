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
// const getInfo = async(req, res) => {
//   try {
//       const { name,email,password,isAdmin } = req.body;
//       const user=await User.insertMany(data.user)
//       // const user=await User.create({name,email,password,isAdmin})
//       res.status(200).send(user);
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };


module.exports={postInfo}


