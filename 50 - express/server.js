import express from 'express'
import { router } from './routes.js'
const app = express()

// "Converte" o req.body em um objeto pra não ser undefined
app.use(express.urlencoded({
    extended: true
}))
app.use(router)

app.listen(3000, () => {
    console.log('Servidor rodando na prota 3000...')
})