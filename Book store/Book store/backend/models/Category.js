const mongoose=require("mongoose")
const CategorySchema=new mongoose.Schema({
    name:{type:String},
    Description:{type:String},
     
});
const Category=mongoose.model("Category",CategorySchema)

module.exports=Category
