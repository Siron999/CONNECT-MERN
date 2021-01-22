import * as api from '../api';


export const registerUser=(user)=> async(dispatch)=>{

    try {
        await await api.registerUser(user)
            .then(userData=> { 
                const {data}=userData ;
                localStorage.setItem("auth-token",data.token);  
                dispatch({type:'REGISTER',payload:data});
            })
            .catch(responseJson=> { console.log( responseJson.response.data) });
    } catch (error) {
        console.log(error);
    }
    
};

export const loginUser=(user)=> async(dispatch)=>{
    try {
        await api.loginUser(user)
            .then(userData=> { 
                const {data}=userData ;
                localStorage.setItem("auth-token",data.token);  
                dispatch({type:'LOGIN',payload:data});
            })
            .catch(responseJson=> { console.log( responseJson.response.data) });
        
        
    } catch (error) {
        console.log(error);
    }
    
};


export const tokenCheck=()=> async(dispatch)=>{

    try {
        let token = localStorage.getItem("auth-token");
        
        if (token === null) {
            localStorage.setItem("auth-token", "");
            token = "";
          };

        const tokenRes=await api.tokenCheck(token);
        if (tokenRes.data) {
        const userRes = await api.userRes(token);
       

        dispatch({type:'TOKEN_CHECK',payload:{token,user:userRes.data}});
    } else{
        dispatch({type:'TOKEN_CHECK',payload:{token:null, user: {_id:null,email:null,name:null}}});
    }
} catch (error) {
        console.log(error.message );
    }
    
};

export const logout=()=> async(dispatch)=>{
    localStorage.setItem("auth-token","");
    dispatch({type:'LOGOUT',payload: {token:null, user:{_id:null,email:null,name:null}}});

};