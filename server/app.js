const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db/connect");
const blogRoutes = require("./Routes/blogPostRoute");
const auth = require("./Routes/Auth");
const user= require('./Routes/usersRoute');
const adminRoute = require("./Routes/adminRoute");
const path = require('path')
const categoryRoute = require("./Routes/categoryRoute");
// const authMiddleware= require("./middleware/auth")
const checkoutRoute=require('./Routes/checkoutRoute');

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 

// const img = require ('./uploads')

const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());  

app.use("/api/v1/uploads", express.static(path.join(__dirname, "./uploads")));

// User route
app.use("/api/v1/auth", auth);

app.use("/api/v1", user);

// Admin route
app.use("/api", adminRoute);

// Blog  routes
app.use("/api/v1", blogRoutes);

// categories
app.use("/api", categoryRoute);

//payment route
app.use("/", checkoutRoute);

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
