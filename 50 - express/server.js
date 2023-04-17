const express = require('express')
const app = express()

// Isso "converte" o req.body em um objeto pra não ser undefined
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.send(`
    <div id='minhaDiv'>
        <form action="/" method="post">
            <label>Seu CEP</label>
            <input type="text" name="cep">
            <button>Enviar</button>
        </form> 
    </div>
    `)
})

app.get('/testes/:primeiro?/:segundo?', (req, res) => {
    console.log(req.params, 'params here')
    console.log(req.query, 'query here')
    // res.status(200).send(req.query)
    res.status(200).send(req.params)
})

app.post('/', (req, res) => {
    console.log(req.body.cep, 'cep here')
})

app.listen(3000, () => {
    console.log('Servidor rodando na prota 3000...')
})