const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require("cors");
const connectDB = require('./db/connect');
const blogRoutes = require('./Routes/blogRoutes');
const auth = require("./Routes/Auth");
const path = require('path');
const adminRoute = require('./Routes/adminRoute')
const blogRoute = require('./Routes/blogRoutes');
const getAllCategoriesRoute = require('./Routes/getAllCategoriesRoute');


const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join("./uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + "-" + Date.now() + ".jpeg");
    }
  })
}).single("user_file");

//   const upload = multer({ storage: DestinationsFunction });


app.post("/upload", upload, (req, res) => {
  res.send("file uploaded")
})


//Static files
// app.use("/upload", express.static("../Blogs"));


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
app.use('/api', adminRoute);  

//BlogPost Routes
app.use('/api/vi/blogPost', blogRoute);

app.listen(4000, () => {
  console.log("Server started at port 4000");
});