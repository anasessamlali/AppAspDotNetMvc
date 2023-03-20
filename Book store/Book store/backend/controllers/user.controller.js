const userservice=require("../services/user.services")

const getusers=async(req,res)=>{

    try {
        const users= await userservice.getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

const addUser=async(req,res)=>{ 
    try {
        await userservice.createUser(req.body)
        res.status(201).json("The user is adding with succès")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports={
    getusers,addUser
}