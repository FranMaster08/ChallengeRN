const database=require('../db/database')
class NavController{

    static home=(req,res)=>{
        res.render('Home.html')
    }
    static AbmOp=(req,res)=>{

        res.render('AbmOperaciones.html',{db:database})
    }
    static login=(req,res)=>{
        res.render('Login.html')
    }  

}
module.exports=NavController