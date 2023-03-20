//Toutes les fonctions pour gérer les livres avec leurs catégories.
const Book=require("../models/Book")  //import le model Book .
const Category=require("../models/Category") //import le model Category.  


const getAllBooks=async()=>{

    return await Book.find().populate("category")
}

const createBook=async(b)=>{
    return await Book.create(b)
}

const getBookById=async(id)=>{
    return await Book.findById(id)
}

const deleteBookById=async(id)=>{
    return await Book.findByIdAndDelete(id)
}

const updateBook=async(b)=>{
    return await Book.findByIdAndUpdate(b._id,b)
}

const getAllCategories=async()=>{
    return await  Category.find()
}
const createCategory=async(c)=>{
    return await Category.create(c)
}
const deleteCategoryById=async(id)=>{
    return await Category.findByIdAndDelete(id)
}

module.exports={
    getAllBooks,
    createBook,
    getBookById,
    deleteBookById,
    updateBook,
    getAllCategories,
    createCategory,
    deleteCategoryById
}