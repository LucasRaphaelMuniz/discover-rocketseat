const express = require('express')

const app = express()

app.listen('3000')

//app.route('/').get((req,res) => res.send("hello"))
//app.route('/sobre').get((req,res) => res.send("hello sobre"))

//middleware
//app.use(express.json())

//app.route('/').post((req,res) => console.log(req.body))
//app.route('/').post((req,res) => res.send(req.body))

//put
//app.use(express.json())
//let author = "Lucas"
//app.route('/').get((req, res) => res.send(author) )
// put = editar
//app.route('/').put((req, res) => {
//  author = req.body.author
//  res.send(author)
//})

//DELETE
//app.route('/:identificador').delete((req, res) => {
//  res.send(req.params.identificador)
//})
//console.log('rodando')
