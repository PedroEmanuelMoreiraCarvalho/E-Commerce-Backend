const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const routes = require('./src/routes.js')

const app = express()

mongoose.connect('mongodb+srv://admin:aLDeftPDWg6XI0jG@cluster0.jak6h.mongodb.net/loja_de_roupas?retryWrites=true&w=majority').then(
    console.log("conectado ao banco de dados")
)

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3001, ()=>{
    console.log("Servidor iniciado com sucesso")
})