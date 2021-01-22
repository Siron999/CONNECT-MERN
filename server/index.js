import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


//importing rotes
import postRoutes from './routes/posts.js';
import userRouter from './routes/userRouter.js';

dotenv.config();

const app = express();



app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());


//setting up routes
app.use('/posts',postRoutes);
app.use('/users',userRouter);



app.get('/',(req,res)=>{

    res.send('Welcome to Gaming Hub');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=> console.log(`Server running on PORT: ${PORT}`)))
    .catch((error)=> console.log(error.message));

    mongoose.set('useFindAndModify',false);

