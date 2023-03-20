const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({ 
    lName:{type:String,required:true},
    fName:{type:String,required:true} ,       //required :true ==>pour dire que le champ est obligatoire
    email:{type:String,required:true},
    password:{type:String,required:true},
    image:{type:String}
})
const User=mongoose.model("User",userSchema)
module.exports=User