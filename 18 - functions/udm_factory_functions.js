// As factory functions são capazes de gerar "moldes" de objetos
// através da definição de atributos e métodos

function criaCarro(marca, modelo, ano) {
  return {
    marca: marca,
    modelo: "teste",
    // Também pode ser ocultada a chave se for o mesmo nome do parâmetro
    ano,
    // getter é acessado como se fosse atributo/valor e não método com ()
    get todasInfos(){
      // Se não usar this ele vai retornar o valor passado no parâmetro
      return ano + marca + this.modelo
    },

    mostraModeloAno() { 
      console.log(`Este é um ${this.modelo} de ${this.ano}`) 
    }
  }
}

const carro = criaCarro("GM", "Kadett", 1998)
carro.mostraModeloAno()
console.log(carro.todasInfos)