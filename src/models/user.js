const mongoose = require('mongoose')

const DataScheema = new mongoose.Schema({
    email: String,
    password: String
})

const User = mongoose.model('User', DataScheema)
module.exports = User; 