import {registerValidation,signInValidation} from '../validation/validation.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


//register controller
export const registerController=async (req,res)=>{
    try {
    const {name,email,password,passwordCheck}= req.body;
     //validating
     const {error} = registerValidation(req.body);
     if(error) return  res.status(400).send(error.details[0].message);

       //checking if user is already registered
    const emailExist= await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).json({message:"Email Already Exists"});

    //confirm password
    if(password !== passwordCheck) return res.status(400).json({message:"Password Not Matching"});

    //hashpassword
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

  

    
    
    const newUser=new User({
        name,
        email,
        password:hashedPassword,
    });
    
        const savedUser= await newUser.save();
         //creating token
    const token= jwt.sign({_id:savedUser._id},process.env.TOKEN_SECRET);

        res.json({token, user:{
            _id:savedUser._id,
            name:savedUser.name,
            email:savedUser.email,
        }});
    } catch (err) {
        console.log(err.message);
        res.status(500).json({message:err.message});
    }


};



//login controller
export const loginController=async (req,res)=>{
    try{
    const {email,password}= req.body;

    //validating
    const {error} = signInValidation(req.body);
    if(error) return  res.status(400).send(error.details[0].message);

    //checking if user is  registered
    const user= await User.findOne({email});
    if(!user) return res.status(400).send("User Not Found");

    //passwordcheck
    const passwordExist = await bcrypt.compare(password,user.password);
    if(!passwordExist) return res.status(400).send("Password is incorrect");

    //creating token
    const token= jwt.sign({_id:user._id},process.env.TOKEN_SECRET);

 
    res.json({token, user:{
        _id:user._id,
        name:user.name,
        email:user.email,
    }});
    } catch(error){
        res.json(error);
    }



};


export const deleteController=async (req,res)=>{
   try {
    const deletedUser= await User.findByIdAndDelete(req.user);
    res.status(200).json(deletedUser); 
    } catch (error) {
        res.status(500).json(error);
    }

};




export const tokenCheckController=async (req,res)=>{
    try {
    const token =req.header("x-auth-token");
    if(!token) return res.send(false);

    const verified= jwt.verify(token,process.env.TOKEN_SECRET);
    if(!verified) return res.send(false);

    const user= await User.findById(verified._id);
    console.log(req._id);
    if(!user) return res.send(false);

    res.status(200).json(true); 
    
     } catch (err) {
         res.status(500).json({error:err.message});
     }
 
 }