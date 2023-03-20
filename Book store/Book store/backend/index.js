const mongoose=require("mongoose")
const express=require("express")
const app=express()
const cors=require("cors")
const catRoutes=require('./routes/categoryRoutes')
const bookRoutes=require('./routes/bookRoutes')
const userRoutes=require('./routes/userRoutes')

mongoose.set('strictQuery', false); 
app.use(cors())
app.use(express.json()) //parser les données json  
app.use("/categories",catRoutes)
app.use("/books",bookRoutes)
app.use("/users",userRoutes)

require("dotenv").config()

   mongoose.connect(process.env.MONGO_URL).then(result=>
    
       app.listen(process.env.PORT,()=>{        //listen à 2 parametres:(PORT,fonction)
       console.log("Server is running with success  ")}) //La connection avec notre BD

    ).catch(error=>console.log(error)) //exception