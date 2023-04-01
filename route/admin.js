const express=require('express')
const adminrouter =express.Router()
const {createNewProduct,deleteProduct,updateProduct} =require('../controller/Admin.js')

adminrouter.post('/upload',createNewProduct)
adminrouter.patch('/update/:id',updateProduct)
adminrouter.delete('/delete/:id',deleteProduct)


module.exports={adminrouter}