const mongoose = require('mongoose');
const blogSchemas = mongoose.Schema({
    title:{
        type:String
    },
    CategoryId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorys",
    },
    blogImage:{
        type:String,
    },
    description:{
        type:String
    },
  },{timestamps: true}
  )

const Blog = mongoose.model('blogs',blogSchemas);

const postBlogModel = (ody, blogImage)=>{
    const {title,CategoryId,}= body
                                      
}

module.exports ={postBlogModel}