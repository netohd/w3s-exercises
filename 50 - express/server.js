const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.listen(3000, () => {
    console.log('Servidor rodando na prota 3000')
})