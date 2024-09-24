const http = require('node:http')
const processRequest = (req, res) =>{
    const {method, url} =req

    switch(method){
        case 'GET':
            switch(url){
                case '/':
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>Mi pagina web</h1>')
            }
    }
}

const server = http.createServer(processRequest)

server.listen(1234), () =>{
    console.log('Server listening on port http://localhosto:1234');
}