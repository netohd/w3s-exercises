/* 
Existem 8 tipos possíveis em JavaScript:

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

Date e array são considerados subtipos de objeto
*/

let _$texto = "Lorem ipsun"
let vetor = [_$texto, "Nada", "Texto com 'aspas' aninhada", 25]

console.log(vetor)

// Os tipos não são passados como parâmetro nas funções
function criaPessoa(nome, idade, altura, trabalha, linguagens, endereço) {
  let pessoa = {
    nome: nome,
    // Garante que será idade será inteiro
    idade: Number.parseInt(idade),
    altura: altura,
    trabalha: trabalha,
    linguagens: linguagens,
    endereço: endereço
  }
  console.log(pessoa)
}

criaPessoa("Antonio", 26, 1.75, true, ["js", "java", "python"], {rua: "João Pinheiro", numero: 12, bairro: "Centro"})