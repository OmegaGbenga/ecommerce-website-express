const { generateToken } = require("../config/jwtToken");
const User = require("../models/usermodel");
const asyncHandler = require('express-async-handler');
const createUser = asyncHandler( async(req, res)=>{
    const email = req.body.email; 
    const findUser = await User.findOne({email:email});
    if(!findUser){
        //create new User
        const newUser = await User.create(req.body)
        res.json(newUser); 
    } else{
        throw new Error('User Already exists')
    }
});

const loginUserctrl = asyncHandler(async(req,res)=>{
    const{email, password} = req.body;
    //check if user exists or not
    const findUser = await User.findOne({email});
    if(findUser && (await findUser.isPasswordMatched(password))){
        res.json({
            _id:findUser?._id,
            firstname:findUser?.firstname,
            lastname:findUser?.lastname,
            email:findUser?.email,
            mobile:findUser?.mobile,
            token:generateToken(findUser?._id),
        });
    }else{
        throw new Error("Invalid Credentials");
    }

});

//Get all users
const getallUser= asyncHandler(async(req, res)=>{
   try {
    const getUsers = await User.find();
    res.json(getUsers)
   }
   catch(error){
    throw new Error(error)
   }
})

module.exports = {createUser, loginUserctrl, getallUser};