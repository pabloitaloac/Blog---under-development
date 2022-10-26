//config bases of this file
const express = require('express')
const router = express.Router()


router.get('/', (req,res) => {
    // res.render('admin/index')
    // res.render('index', { title: 'Hey', message: 'Hello there!'});
    res.send("SEND funcionando")
})

router.get('/posts',(req,res) => {
    res.send(`POSTS`)
})

router.get('/categorias',(req,res) => {
    res.send(`CATEGORIAS`)
})






//export to main file
module.exports = router