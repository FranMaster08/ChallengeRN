const express=require('express')
const controller=require('../controller/navigation.controller')
const route=express.Router()

//http://localhost:5000/nav/
route.get('/',controller.home)
route.get('/Concepto',controller.AbmOp)
route.get('/Login',controller.AbmOp)



module.exports=route

