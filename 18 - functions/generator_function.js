// Quando se declara a function* com esse asterisco ela passa
// a ser uma geradora e retorna um objeto gerador, que vai "retornando"
// valores sequencialmente através do yield e next()
function* geradora() {
    // Alguma lógica aqui
    yield 'Primeiro valor'
    // Outra lógica aqui
    yield 'Segundo valor'
}

const gen = geradora()
console.log(gen.next()) // {value: 'Primeiro valor', done: false}
console.log(gen.next()) // {value: 'Segundo valor', done: false}