const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234;

const server = http.createServer((req,res)=>{
    console.log('Request received', req.url);
    res.end('Hola mundo')
})

server.listen(desiredPort, ()=>{
    console.log(`Server listen on port ${desiredPort}`)
})

//por que me aparecen dos reques en la consola cuando solo lo hago una vez

//Cuando entro en la web hace dos request, hace la peticion que le pido y otra para el favicon.