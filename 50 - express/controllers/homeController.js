export const homePage = (req, res) => {
    res.send(`
    <div id='minhaDiv'>
        <form action="/" method="post">
            <label>Seu CEP</label>
            <input type="text" name="cep">
            <button>Enviar</button>
        </form> 
    </div>
    `)
}