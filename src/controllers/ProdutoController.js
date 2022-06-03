const Produto = require('../models/produto')

module.exports = {
    async index(req,res) {
        const produtos = await Produto.find()
        res.json(produtos)
    },

    async get(req,res){
        const {_id} = req.params
        const produtos = await Produto.findOne({_id});
        res.json(produtos)
    },

    async store(req,res) {
        const { name,cost,images,category,quant } = req.body
        let dataCreate = {}
        dataCreate = {
            name, cost, images, category, quant
        }
        const produtos = await Produto.create(dataCreate)
        res.json(produtos)
    },

    async delete(req,res){
        const {_id} = req.params
        const produtos = await Produto.findByIdAndDelete({_id})
        res.json(produtos)
    },

    async update(req,res){
        const { _id,name,cost,images,category,quant } = req.body
        let dataCreate = {}
        dataCreate = {
            name, cost, images, category, quant
        }
        const produtos = await Produto.findByIdAndUpdate({_id}, dataCreate, {new: true})
        res.json(produtos)
    }
}