const reducer =(user = {token:null, user:{_id:null,email:null,name:null}} ,action) => {
    switch (action.type) {
        case 'REGISTER':
            return action.payload;
            
        case 'LOGIN':
            return action.payload;
            
        case 'LOGOUT':
            return action.payload;
        
        
        case 'TOKEN_CHECK':
        return action.payload;
       
        default:
            return user;
            
    }
};

export default reducer;