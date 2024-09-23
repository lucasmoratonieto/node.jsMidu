const {readFile} = require('node:fs/promises');

(
   async ()=>{

       console.log('Leyendo primer archivo');
       const text = await readFile('../archivo.txt','utf-8')
       console.log('Primer texto', text);
       console.log('Hace cosas mientras lo lee');
       
       console.log('Lee el segundo archivo');
       const seconText= await readFile('../archivo2.txt', 'utf-8')
       console.log('Segundo texto', seconText);
   }
)()
