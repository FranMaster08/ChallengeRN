class UserController{

    static getUsers=(req,res)=>{
        res.status(200).json({mensaje:'todos los usuarios'})
    }
}
module.exports=UserController