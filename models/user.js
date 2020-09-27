const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({
    login: String,
    password: String,
    email: String,
    name: String,
    surname: String,
    DOB: Date,
    age: Number,
    gender: String,
    userId: String,
    token: String,
    userRole: String,
});

const User = mongoose.model('User', userScheme);

module.exports = User;