const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'



// fs.readdir(folder,(err, files)=>{
//     if (err){
//         console.error('Error de directorio', err);
//         return
//     }

//     files.forEach(file =>{
//         console.log(file);
//     })
// })

async function ls(folder) {
    let files
    try{
        files = await fs.readdir(folder)
    } catch{
        console.error(`No se ha podido leer el directorio ${folder}`);
        process.exit(1)
    }
    const filesPromises = files.map(async file =>{
        const filePath = path.join(folder, file)
        let stats
        try{
            stats = await fs.stat(filePath) // Info del archivo   
        } catch{
            comsole.error(`No se ha podido leer el archivo ${filePath}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd':'-'
        const fileSize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleString()

        return ` ${fileType} ${file} ${fileSize.toString()} ${fileModified}`
    })

    const filesInfo = await Promise.all(filesPromises)
    
    filesInfo.forEach(fileInfo => {
        console.log(fileInfo);
    });

}

ls(folder)