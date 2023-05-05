
import userModel from "../models/userModel.js";
import {hashPassword} from "../helpers/authHelper.js";

export const registerController = async (req, res) =>{
    try{
const {name, email, password, phone, address} = req.body;
//validation 

if(!name)
{
    return res.send({error: "Name is required"});
}
if(!email)
{
    return res.send({error: "Email is required"});
}
if(!password)
{
    return res.send({error: "Passwoed is required"});
}
if(!phone)
{
    return res.send({error: "phone number is required"});
}
if(!address)
{
    return res.send({error: "assress  is required"});
}


//check user

const existingUser = await userModel.findOne({email});

// Existing user
 if(existingUser){
     return res.status(200).send({
         success:true,
         messange : "Already Register please login",
     })
 }   
 //register User
 const hashedPassword = await hashPassword(password);
 //save
 const user = await new userModel({name, email, phone, address, password:hashedPassword}).save()
res.status(201).send({
    success:true,
    messange:"User Register successfully",
    user
})
}
catch(error){
console.log(error);
res.status(500).send({
    success:false,
    messange: "error in Registrationa",
    error
});
    }
};


