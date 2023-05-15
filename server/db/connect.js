const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sandhyaginare:F6WDbpyfoU1XjH91@cluster0.3x70kwl.mongodb.net/Blogweb?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
};

module.exports = connectDB;
