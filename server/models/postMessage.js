import mongoose from 'mongoose';

const postSchema= mongoose.Schema({
    title: String,
    message: String,
    creator:String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type:Number,
        default:0,
    },
    user_Id:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:new Date(),
    },

});


const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;