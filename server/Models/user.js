const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    contact: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);


module.exports = { User };
