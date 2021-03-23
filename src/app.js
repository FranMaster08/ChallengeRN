//[OPCIONAL] connfiguramos el server para las variables de entorno
require('dotenv').config()

//1) crear el objeto de express [app]
const express =require('express')
const path=require('path')
const nunjucks=require('nunjucks')
const app=express()


//2) configurar el servidor para recibir ojetos JSON o formularios
app.use(express.json())//prepara JSON
app.use(express.urlencoded({extended:false})) //prepara el server para formularios

//3) Crear las rutas
//rutas [GET] Verbo
//http://localhost:[PUERTO]/
// app.get('/',(req,res)=>{
//     res.status(200).json({mensaje:'Hola Mundo'})
// })


//INICIO OPCIONAL
//3.1 [OPCIONAL] configuramos el motor de vistas (nunjucks ,pug,ejs,handlebars (hbs))
//3.1.1 Exportamos la carpeta public
app.use(express.static(path.resolve(__dirname,'/public')))
//3.1.2
app.set('view engine')
nunjucks.configure(path.resolve(__dirname,'./views'),{
    autoescape:false,
    express:app
})
//FIN OPCIONAL

//3.2) agrego los ruteros

//http://localhost:5000/nav/

app.use('/',require('./routes/navigation.routes'))
app.use('/user',require('./routes/usuarios.routes'))


//4) Poner a escuchar
app.listen(process.env.PORT,()=>{
    console.log(`Server  is runnimg in port ${process.env.PORT}`);
})


