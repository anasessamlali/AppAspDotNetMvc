const catalService=require("../services/catalogue.services")


const getBooks=async(req,res)=>{

    try{
         const books= await catalService.getAllBooks()
         res.status(200).json(books)
    }catch(error){
        res.status(500).json(error)
    }
}

const getBook=async(req,res)=>{
    try{
        const book= await catalService.getBookById(req.params.id)
        res.status(200).json(book)

    }catch(error){
        res.status(500).json(error)
    }
}
const deleteBook=async(req,res)=>{
    try{
         await catalService.deleteBookById(req.params.id)
        res.status(200).json("The book is deleted successfully")

    }catch(error){
        res.status(500).json(error)
    }
}
const updateBook=async(req,res)=>{
    try{
         await catalService.updateBook(req.body)
        res.status(200).json("Update of book successfully")

    }catch(error){
        res.status(500).json(error)
    }
}
const addBook=async(req,res)=>{
    try{
         await catalService.createBook(req.body)
        res.status(201).json("Livre bien ajouté")    //201 pour dire que le livre  été bien crée

    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}
const addCategory=async(req,res)=>{
    try{
         await catalService.createCategory(req.body)
        res.status(200).json("La Catégorie est bien ajoutée")

    }catch(error){
        res.status(500).json(error)
    }
}
const getCategories=async(req,res)=>{
    try{
        const categories= await catalService.getAllCategories()
        res.status(200).json(categories)

    }catch(error){
        res.status(500).json(error)
    }
}
const deleteCategory=async(req,res)=>{
    try{
         await catalService.deleteCategoryById(req.params.id)
        res.status(200).json("La catégorie est bien supprimée")

    }catch(error){
        res.status(500).json(error)
    }
}
module.exports={
    getBooks,
    getBook,
    addBook,
    deleteBook,
    updateBook,
    getCategories,
    addCategory,
    deleteCategory
}