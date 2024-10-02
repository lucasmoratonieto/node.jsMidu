import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'


//Ahora es asi para meter un json.


//Una manera de leer un json en ESModules

// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

//JSON ESModules recomendado por ahora. Ya no se recomienda, ver la primera de ahora asi.
// import { createRequire } from 'node:module'
// const require = createRequire(import.meta.url)
// const movies = require('./movies.json')

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.get('/', (req, res)=>{
    res.json({message:'Hola seniores'})
})

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234


app.listen(PORT, ()=>{
    console.log(`Server listen on port http://localhost:${PORT}`);
})