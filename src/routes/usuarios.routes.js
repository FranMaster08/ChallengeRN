const express=require('express')
const route=express.Router()


route.get('/',(req,res)=>{
    res.status(200).json({mensaje:'estoy en la ruta de usuarios'})
})



module.exports=route

