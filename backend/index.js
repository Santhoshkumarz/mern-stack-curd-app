const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./model/Users')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/curd")

//create
app.post("/createUser",(req,res)=>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//get
app.get('/',(req,res)=>{
    userModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//get update 
app.get('/getUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
//update
app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findByIdAndUpdate({_id: id}, 
        {name:req.body.name, email:req.body.email,age:req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//Delete
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})
//listen
app.listen(8080,()=>{
    console.log("Server running")
})