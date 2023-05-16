const postBlogController = async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    const body = req?.body;
    const blogImage = req?.file?.filename;
  
    try {
      const data = await postBlogModel({ body, blogImage });
      console.log("data=>",data);
      res.send(data);
    } catch (err) {
      console.log("ERROR=>",err);
      res.send(err);
    }
}

module.exports=postBlogController;