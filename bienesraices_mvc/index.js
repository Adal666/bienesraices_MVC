import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express()


//Habilitar pug
app.set('view engine', 'pug')
app.set('views', './views')

//Carpeta publica
app.use(express.static('public'))

app.use('/auth', usuarioRoutes)


const port = 3000
app.listen(port, () => {
    console.log(`El servidor esta jalando en el puerto http://localhost:${port}`)
})