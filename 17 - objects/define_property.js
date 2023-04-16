// defineProperty ou defineProperties são formas de criar atributos nos
// objetos de uma forma mais verbosa porém mais configurável/segura
function ContaBancaria(titular, numero, agencia, tipo) {
    this.titular = titular
    this.numero = numero
    this.agencia = agencia
    this.tipo = tipo

    Object.defineProperty(this, 'saldo', {
        enumerable: true, // torna visísvel
        value: 3500,
        writable: true, // permite alteração
        configurable: false // permite redefinição/exclusão
    })

    this.mudaSaldo = (novoSaldo) => {
        this.saldo = novoSaldo
    }
}

const minhaConta = new ContaBancaria('Antonio Neto', 12798723, 1544, 'corrente')
console.log(minhaConta)
minhaConta.mudaSaldo(2200)
console.log(minhaConta)

console.log(Object.keys(minhaConta))