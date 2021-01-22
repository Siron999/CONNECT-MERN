import * as api from '../api';
import {CREATE,UPDATE,DELETE,FETCH_ALL,LIKE} from '../constants/actionTypes';

//ACTION CREATORS

export const getPosts=()=> async(dispatch)=>{

    try {
        let token = localStorage.getItem("auth-token");
        const tokenRes=await api.tokenCheck(token);
        if (tokenRes.data) {
            const userRes = await api.userRes(token);
            const user_Id=userRes.data._id;
            const {data}=await api.fetchPosts(user_Id);
            dispatch({type:FETCH_ALL,payload:data});
        }else {
            dispatch({type:FETCH_ALL,payload:[]});
        };

        
        
        
    } catch (error) {
        console.log(error.message);
    }
    
};


export const createPost=(post)=> async(dispatch)=>{

    try {
        let token = localStorage.getItem("auth-token");
        const tokenRes=await api.tokenCheck(token);
        if (tokenRes.data) {
            const userRes = await api.userRes(token);
            const user_Id=userRes.data._id;
            const newPost={...post,user_Id}
            const {data}=await api.createPost(newPost);
            dispatch({type:CREATE,payload:data});
        }
        else {
            const error = {message:"Not Logged In"};
            throw(error);
        };
        
    } catch (error) {
        console.log(error.message);
    }
    
};

export const updatePost=(id,post)=> async(dispatch)=>{

    try {
        const {data}=await api.updatePost(id,post);
        dispatch({type:UPDATE,payload:data});
    } catch (error) {
        console.log(error.message);
    }
    
};

export const deletePost=(id)=> async(dispatch)=>{

    try {
        await api.deletePost(id);
        dispatch({type:DELETE,payload:id});
    } catch (error) {
        console.log(error);
    }
    
};

export const likePost=(id)=> async(dispatch)=>{

    try {
        const {data}=await api.likePost(id);
        dispatch({type:LIKE,payload:data});
    } catch (error) {
        console.log(error.message);
    }
    
};