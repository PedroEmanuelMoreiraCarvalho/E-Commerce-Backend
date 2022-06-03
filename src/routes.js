const express = require('express')
const ProdutoController = require('./controllers/ProdutoController')
const UserController = require('./controllers/UserController')

const routes = express.Router();

routes.get('/', function(req,res){
    res.json({message: "mim de papai"})
})

routes.get('/produtos', ProdutoController.index)
routes.get('/produtos/:_id', ProdutoController.get)
routes.post('/produtos', ProdutoController.store)
routes.delete('/produtos/:_id', ProdutoController.delete)
routes.put('/produtos/', ProdutoController.update)

routes.get('/users/:_id', UserController.getUser)
routes.post('/users', UserController.AddUser)
routes.post('/users/login', UserController.login)
routes.post('/users/logup', UserController.login)

module.exports = routes;