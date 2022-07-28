const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        require:true
    },
    category:{
      type:String,
      require:true
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

const Post = mongoose.model("Post",postSchema)

module.exports = Post;