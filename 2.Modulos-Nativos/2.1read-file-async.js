const fs = require('node:fs')

fs.readFile('./archivo.txt','utf-8', (err,text) =>{
    console.log(text);
})

