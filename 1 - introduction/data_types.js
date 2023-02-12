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

function criaPessoa(nome, idade, altura, trabalha, endereço) {
  let pessoa = {
    nome: nome,
    idade: idade,
    altura: altura,
    trabalha: trabalha,
    endereço: endereço
  }  
  console.log(pessoa)
}

criaPessoa("Antonio", 26, 1.75, true, 
{
rua: "João Pinheiro", 
numero: 12, 
bairro: "Centro"
})