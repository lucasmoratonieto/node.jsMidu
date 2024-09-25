const http = require('node:http')
const fs = require('node:fs')



const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req,res)=>{
    if(req.url == '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h1>Bienvenido a mi página de inicio</h1>')
    }else if (req.url == '/contacto'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h1>Bienvendio a mi  página de contactos</h1>')
    }else if(req.url == '/imagen'){
        fs.readFile('./ferrari.png', (err, data)=>{
            if(err){
                res.statusCode = 500
                res.end('<h1>500 Internal server error</h1>')
            }else{
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })

    }else{
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h1>404</h1>')
    }

}

const server = http.createServer(processRequest)


server.listen(desiredPort, ()=>{
    console.log(`Server listen on port ${desiredPort}`)
})

//por que me aparecen dos reques en la consola cuando solo lo hago una vez

//Cuando entro en la web hace dos request, hace la peticion que le pido y otra para el favicon.