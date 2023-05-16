const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const connectDB = require('./db/connect');
const blogRoutes = require('./Routes/blogRoutes');
const auth = require("./Routes/Auth");
const adminRoute = require('./Routes/adminRoute')
const blogRoute = require('./Routes/blogRoutes');
const getAllCategoriesRoute= require('./Routes/getAllCategoriesRoute');


const app = express();

// Connect to MongoDB
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//User route
app.use("/api/v1/auth", auth);
// Blog category routes
app.use('/api/v1/blogs', blogRoutes);


//get all blog categories
app.use('/api', getAllCategoriesRoute);



//Admin route
app.use('/api/v1', adminRoute);

//Static files
app.use("/api/Blogs", express.static("../Blogs"));


//BlogPost Routes
app.use('/api/vi/blogPost', blogRoute);

app.listen(4000, () => {
    console.log("Server started at port 4000");
});