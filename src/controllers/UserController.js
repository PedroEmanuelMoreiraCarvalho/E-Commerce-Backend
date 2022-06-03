const User = require('../models/user')

module.exports = {

    async getUser(req,res){
        const {_id} = req.params
        const user = await User.findOne({_id});
        res.json(user)
    },

    async login(req,res){
        const { email, password } = req.body
        const user = await User.find({email: email});
        const sucess = ((user.length) && (password === user[0].password)) ? {res: true} : {res: false}
        res.json(sucess)
    },

    async logup(req,res){
        const { email } = req.body
        const user = await User.find({email: email});
        const sucess = user.length ? {res: true} : {res: false}
        res.json(sucess)
    },

    async AddUser(req,res) {
        const { email, password } = req.body
        let dataCreate = {}
        dataCreate = {
            email, password
        }
        const user = await User.create(dataCreate)
        res.json(user)
    },

    async delete(req,res){
        const {_id} = req.params
        const user = await User.findByIdAndDelete({_id})
        res.json(user)
    },

    async update(req,res){
        const { email, password } = req.body
        let dataCreate = {}
        dataCreate = {
            email, password
        }
        const user = await User.findByIdAndUpdate({_id}, dataCreate, {new: true})
        res.json(user)
    }
}