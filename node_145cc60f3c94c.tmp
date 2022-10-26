const express = require('express')
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')

const app = express()

const path = require('path') //maiusculo TESTE



//CONFIG
    //Body Parser
        app.use(express.urlencoded({extended: true}))
        app.use(express.json())

    //Handlebars
        app.engine('handlebars', handlebars.engine({
                                    defaultLayout: true
        }));
                app.set('view engine', 'handlebars')

    //Public - to use static files
        // app.use(express.static(path.join(__dirname, 'public'))) //to use static files at public folder. Use the 'path.join' to avoid errors in route
        // app.use(express.static('public'))
          

    //mongoose


//ROUTES
    //GLOBAL
        app.get("/", (req,res)=>{
            res.send(`HOME`)
        })

        app.get("/teste", (req,res)=>{
            res.render('tst')
            // res.send(`TESTE DE RENDER. SEND OK, testar render`)
        })


    //ADMIN
        var admin = require('./routes/admin')

        app.use('/admin', admin)    //prefixo + const


    //USER



//ETC
const PORT = 8081
app.listen(PORT, () => {
    console.log('SERVER ON. localhost:8081')
})








