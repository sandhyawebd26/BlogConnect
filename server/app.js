const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db/connect");
const blogRoutes = require("./Routes/blogPostRoute");
const auth = require("./Routes/Auth");
const adminRoute = require("./Routes/adminRoute");
const path = require('path')
const categoryRoute = require("./Routes/categoryRoute");
// const img = require ('./uploads')

const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());  

app.use("/api/v1/uploads", express.static(path.join(__dirname, "./uploads")));

// User route
app.use("/api/v1/auth", auth);

// Admin route
app.use("/api", adminRoute);

// Blog  routes
app.use("/api/v1", blogRoutes);

// categories
app.use("/api", categoryRoute);

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
