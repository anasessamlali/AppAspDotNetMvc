const express=require("express")
const router=express.Router()
const catalcontroller=require("../controllers/catalogue.controller")

router.route("/").get(catalcontroller.getBooks)
                 .post(catalcontroller.addBook)

router.route("/:id").get(catalcontroller.getBook)
                    .put(catalcontroller.updateBook)
                    .delete(catalcontroller.deleteBook)



module.exports=router 