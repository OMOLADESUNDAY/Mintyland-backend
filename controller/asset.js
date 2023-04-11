const User=require('../model/userSchema')
const getAsset=async(req,res)=>{
    const {id}=req.params
    try {
        const asset= await User.findOne({_id:id});
        if(asset){
            res.send(asset.assets.asset)           
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports={getAsset}