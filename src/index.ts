//libs
import express from "express"
import session from 'express-session'
import pensador from "./frases"

//variavéis
const server = express()
const port = process.env.PORT || 8080


//funcionalidades
server.use(session({ secret: 'adkaskfaokfoasksdaff', resave: true, saveUninitialized: true }))
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')//quem pode acessar a api
    res.header('Acess-Control-Allow-Headers', 'Origin,X-Requrested-With ,Content-Type, Accept,Autorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATH,DELETE,GET')//CRUD
        return res.status(200).send({});//resposta
    }


    next();

}

)
server.get('/frases/:frase', async(req, res) => {
   let frases=await pensador(req.params.frase)
   res.send(frases)
})

server.listen(port, () => { console.log(`server on in port ${port}`) })