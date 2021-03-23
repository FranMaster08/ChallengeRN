class NavController{

    static home=(req,res)=>{
        res.status(200).json({mensaje:'estas navegando a home'})
    }
    static AbmOp=(req,res)=>{
        res.status(200).json({mensaje:'estas navegando a Abm de Operaciones'})
    }
    static login=(req,res)=>{
        res.status(200).json({mensaje:'estas navegando a el login'})
    }  

}
module.exports=NavController