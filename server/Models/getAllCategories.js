
const mongoose = require('mongoose');

const blogSchemas = new mongoose.Schema({
    category: String,
},
    { timestamps: true }
);

const Category = mongoose.model('category', blogSchemas);

module.exports = Category;
