import express from 'express';
import {registerController,loginController,deleteController,tokenCheckController} from '../controllers/userController.js';
import {auth} from '../middlewares/auth.js';
import User from '../models/User.js';


const router=express.Router();


router.post('/register',registerController);
router.post('/login',loginController);
router.delete('/delete',auth,deleteController);
router.post('/tokencheck',tokenCheckController);


router.get('/',auth,async (req,res)=>{
    const user = await User.findById(req.user);
    res.json({
        _id:user._id,
        name:user.name
    });



})

export default router;