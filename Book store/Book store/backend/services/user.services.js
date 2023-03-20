const User=require("../models/User")
const bcrypt=require("bcrypt")

const getAllUsers=async()=>{
      return await User.find()
}

const createUser=async(u)=>{
    const salt = await bcrypt.genSalt()
    u.password= await bcrypt.hash(u.password,salt)// la fonction hash a 2 paramètres (mot de passe, salt génerer)
   
    return await User.create(u)
}

  module.exports={

    getAllUsers, createUser   
}