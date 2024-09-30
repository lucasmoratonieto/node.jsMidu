const express = require('express')
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()

app.disable('x-powered-by')

// app.use((req, res, next) =>{
//     console.log('Mi primer middleware');
//     //Revisar las cookies y demas cosas que se pueden hacer con esto.

//     // Sin next no continua y se queda ahi pillado
//     next()
// })



app.use((req, res, next) =>{

    if(req.method != 'POST') return next()
    if(req.headers['content-type'] != 'application/json') return next()

    //Aqui solo llegan request que son post y que tiene el header contnt type application json

    let body  = ''

    req.on('data', chunk =>{
        body += chunk.toString()
    })
    req.on('end', ()=>{
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        //mutamos la reques y metemos la info en el req.body
        req.body = data
        next()
    })
})


app.get('/pokemon/ditto', (req, res) =>{
    // for html
    // res.status(200).send('<h1>Mi página</h1>')
    // for JSON
    res.json(ditto)

})

app.post('/pokemon', (req,res)=>{
    res.status(201).json(req.body)
})

app.use((req,res)=>{
    res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})