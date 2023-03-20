const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema({
nom:{type:String,required:true},
description:{type:String,required:true},
isbn:{type:String,required:true},
auteur:{type:String,required:true},
editeur:{type:String,required:true},
price:{type:Intl,required:true},
Date_publication:{type:Date,default:Date.now()},
category:{
type:mongoose.Types.ObjectId,  //Création de la relation entre la catégorie et les livres à l'aide de (id+reference du model category).
ref:"Category"   //La référence du model Category
}
});
const Book=mongoose.model("Book",bookSchema)
module.exports=Book