//[OPCIONAL] connfiguramos el server para las variables de entorno
require('dotenv').config()

//1) crear el objeto de express [app]
const express =require('express')
const app=express()


//2) configurar el servidor para recibir ojetos JSON o formularios
app.use(express.json())//prepara JSON
app.use(express.urlencoded({extended:false})) //prepara el server para formularios

//3) Crear las rutas
//rutas [GET] Verbo
//http://localhost:[PUERTO]/
app.get('/',(req,res)=>{
    res.status(200).json({mensaje:'Hola Mundo'})
})


//4) Poner a escuchar
app.listen(process.env.PORT,()=>{
    console.log(`Server  is runnimg in port ${process.env.PORT}`);
})


