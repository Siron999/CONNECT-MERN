import jwt from 'jsonwebtoken';

//token verification
export const auth=async(req,res,next)=>{
    try {
        const token =req.header("x-auth-token");
        if(!token) return res.status(401).json({message:"No Authorization Token, Access Denied"});
        const verified= jwt.verify(token,process.env.TOKEN_SECRET);
        if(!verified) return res.status(401).json({message:"Token Verification Failed, Access Denied"});

        req.user=verified._id;
        next();
    
    } catch (error) {
        res.status(400).send(error);
    }
};

export const authPost=async(req,res,next)=>{
    try {
        const user_Id =req.header("user_Id");
        if(!user_Id) return res.status(401).json({message:"No Authorization Id, Access Denied"});
        

       
        next();
    
    } catch (error) {
        res.status(400).send(error);
    }
};

// //roleadmin verification
// export const authRoleAdmin=async(req,res,next)=>{
//     try {
//         const token =req.header("x-auth-token");
//         const verified= jwt.verify(token,process.env.TOKEN_SECRET);
//         if(verified.role !== "admin"){
//             return res.status(401).json({message:"Token Verification Failed, You are not an Admin"})
//         };
//         next();
    
//     } catch (error) {
//         res.status(400).send(error);
//     }
// };

// //role staff verification
// export const authRoleStaff=async(req,res,next)=>{
//     try {
//         const token =req.header("x-auth-token");
//         const verified= jwt.verify(token,process.env.TOKEN_SECRET);
//         if(verified.role !== "staff"){
//             return res.status(401).json({message:"Token Verification Failed, you are not a Staff"})
//         };
//         next();
    
//     } catch (error) {
//         res.status(400).send(error);
//     }
// };


