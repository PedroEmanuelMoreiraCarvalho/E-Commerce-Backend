const mongoose = require('mongoose')

const DataScheema = new mongoose.Schema({
    name: String,
    cost: String,
    images: Array,
    category: Array,
    quant: String
})

const produto = mongoose.model('Produto', DataScheema)
module.exports=produto; 