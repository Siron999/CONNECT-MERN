
import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';


export const getPosts= async (req,res)=>{  

    try {
        const user_Id = req.header("user_Id");
        const postmessages= await PostMessage.find({'user_Id':user_Id});
         res.status(200).json(postmessages);
    } catch (error) {
        res.status(404).json(error);
    }

};

export const createPost= async (req,res)=>{
    const post= req.body;
    const newPost= new PostMessage(post);
    try {
       await newPost.save();
       res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json(error);
    }

};

export const updatePost= async (req,res)=>{
    const {id:_id}= req.params;
    const post= req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
    
    try {
        const updatedPost= await PostMessage.findByIdAndUpdate(_id,{...post, _id } ,{new:true});
       res.status(201).json(updatedPost);
    } catch (error) {
        res.status(409).json(error);
    }

};

export const deletePost=async (req,res)=>{
    const { id :_id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
    try {
    await PostMessage.findByIdAndDelete(_id);
    
    res.status(201).json({message:"Post Deleted"});
    }catch(error){
        res.status(409).json(error);
    }
    


};


export const likePost= async (req,res) =>{
    const { id :_id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

    try{
    const post= await PostMessage.findById(_id);
    const updatedPost= await PostMessage.findByIdAndUpdate(_id,{likeCount:post.likeCount + 1} ,{new:true});
     res.status(201).json(updatedPost);
}catch(error){
    res.status(409).json(error);
}

}