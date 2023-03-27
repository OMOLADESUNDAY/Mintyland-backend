
const express=require('express')
const {router}=require('./route/product')
const {recentlySoldRouter}=require('./route/recentltySold.js')
const {Estaterouter}=require('./route/landandEstate.js')
const {userRouter}=require('./route/user.js')
const {data}=require('./data')
const {connectDB}=require('./db/connect.js')

require('dotenv').config()

const app=express()

const MongoDbUrl= process.env.MONGOURL
const port =process.env.PORT || 5000 
//middleware
const cors = require("cors");

app.use(cors());
app.use(express.json())
app.use('/api/trending',router)
app.use('/api/product',router)
app.use('/api/landandestate',Estaterouter)
app.use('/api/login',userRouter)
app.use('/api/recentlysold',recentlySoldRouter)

// app.get('/api/trending/:id',async(req,res)=>{
//     const trending=data.TrendingData.find((x)=> Number(x._id) === Number(req.params.id))
   
//     if (trending){
//         return res.send(trending)
//     }
//     else{
//         res.status(404).send({message:'Page not found'})
//     }
   
// })
app.get('/api/landandasset/:id',(req,res)=>{
    const landandasset=data.LandAndEstateData.find((x)=> Number(x._id) === Number(req.params.id))
   
    if (landandasset){
        return res.send(landandasset)
    }
    else{
        res.status(404).send({message:'Page not found'})
    }
   
})



app.use("/api/post", router);
//db config



//Listener
const start=async()=>{
    try {
        await connectDB(MongoDbUrl)
        app.listen(port, () => console.log(`listening at port ${port}`));    
    } catch (error) {
        console.log(error)
    }
}
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})
start()
