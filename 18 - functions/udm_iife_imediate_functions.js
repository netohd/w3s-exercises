// As funções imediatas serverm para executar uma função 
// assim que a mesma é declarada, fechando um escopo "sem tocar no escopo global"

const nome = 'Maria'; // Aqui antes da IIFE tem que ter o ; se não dá erro

(function() {
  const nome = 'Antonio'
  
  function falaOiNome() {
    console.log(`Oi ${nome}!`)
  }
  // Considera variável nome dentro do bloco
  falaOiNome(nome)
})()

console.log(nome)