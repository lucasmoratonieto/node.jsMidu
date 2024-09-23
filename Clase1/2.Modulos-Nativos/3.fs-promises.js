const fs = require('node:fs/promises')

fs.readFile('./archivo.txt','utf-8').then(text =>{
    console.log(text);
})

