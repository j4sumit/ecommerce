import userModel from "../models/userModel.js";
import {comparePassword, hashPassword} from "../helpers/authHelper.js";
import JWT from "jsonwebtoken"

export const registerController = async (req, res) =>{
    try{
const {name, email, password, phone, address} = req.body;
//validation 

if(!name)
{
    return res.send({message: "Name is required"});
}
if(!email)
{
    return res.send({message: "Email is required"});
}
if(!password)
{
    return res.send({message: "Passwoed is required"});
}
if(!phone)
{
    return res.send({message: "phone number is required"});
}
if(!address)
{
    return res.send({message: "assress  is required"});
}


//check user

const existingUser = await userModel.findOne({email});

// Existing user
 if(existingUser){
     return res.status(200).send({
         success:false,
         messange : "Already Register please login",
     });
 }   
 //register User
 const hashedPassword = await hashPassword(password);
 //save
 const user = await new userModel({name, email, phone, address, password:hashedPassword,}).save();
res.status(201).send({
    success:true,
    message:"User Register successfully",
    user,
});
}
catch(error){
console.log(error);
res.status(500).send({
    success:false,
    messange: "error in Registrationa",
    error,
});
    }
};

// POST login
export const loginController= async(req, res)=>{
    try{
const{email, password} = req.body
//validation
if(!email || !password){
    return res.status(404).send({
        success:false,
        message:"invalid email or passwoed"
    });
}
// check user
const user = await userModel.findOne({email});
if(!user)
{
    return res.status(404).send({
        success:false,
        message:"Email is not registered", 
    });
}
const match =await comparePassword(password, user.password);
if(!match)
{
    return res.status(200).send({
      success:false,
      message:"Invalid password"
    });
}
// token
const token = await JWT.sign({_id : user._id}, process.env.JWT_SECRET, {expiresIn:"7d",});
    res.status(200).send({
        success:true,
        message:"login successfully",
        user : {
            _id : user._id,
            name :user.name,
            email:user.email,
            phone: user.phone,
            address:user.address,
        },
token,
    });
}
    catch(error)
    {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Email in not registered",
            error,
        });
    }
};
// test controller
export const testController = (req, res) =>{
 try{
     res.send("protected route");
}
catch(error){
    console.log(error);
    res.send({error});
}
}