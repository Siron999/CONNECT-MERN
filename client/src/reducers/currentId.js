const reducer =(currentId= "" ,action) => {
    switch (action.type) {
        case 'SET':
            return action.payload;
            
        default:
            return currentId;
            
    }
};

export default reducer;