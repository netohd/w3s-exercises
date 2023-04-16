// Os prototypes podem ser usados para trazer mais performance,
// já que a ideia é prototipar, ou generalizar métodos ou atributos
// que todas as instâncias teriam
function Casa(endereco, area, moradores) {
    this.endereco = endereco
    this.area = area
    this.moradores = moradores
}

// Quando uma instância do tipo Casa é criada (new) ela automaticamente
// "herda" os protótipos definidos para aquela constructor/classe
Casa.prototype.mostraEndereco = function() {
    console.log(`Esta casa fica em ${this.endereco}`)
}

const minhaCasa = new Casa('Rua dos Bobos', 72, 3)
minhaCasa.mostraEndereco()
console.log(minhaCasa)