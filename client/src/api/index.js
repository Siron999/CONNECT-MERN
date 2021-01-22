import axios from 'axios';

const url='http://localhost:4000';



export const fetchPosts=(user_Id)=> axios.get(`${url}/posts`,{headers: { "user_Id": user_Id }});

export const createPost=(newPost)=> axios.post(`${url}/posts`,newPost);

export const updatePost=(id,updatedPost)=> axios.patch(`${url}/posts/${id}`,updatedPost);

export const deletePost=(id)=> axios.delete(`${url}/posts/${id}`);

export const likePost=(id)=> axios.patch(`${url}/posts/${id}/likePost`);

export const registerUser=(registerUser)=> axios.post(`${url}/users/register`,registerUser);

export const loginUser=(loginUser)=> axios.post(`${url}/users/login`,loginUser);

export const tokenCheck=(token)=> axios.post(`${url}/users/tokencheck`,null, {headers: { "x-auth-token": token }});
export const userRes=(token)=> axios.get(`${url}/users/`,{headers: { "x-auth-token": token }});

