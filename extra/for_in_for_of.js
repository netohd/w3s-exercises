// for (index in obj) = > itera sobre chaves/property de um objeto, 
// index seria valor correspondente a chave E AO VALOR TB

// for (element of arr) => itera sobre os elementos de um objeto, uso
// indicado p/ iterar sobre array

// forEach não suporta promises/async, ele não espera

const myArray = [1, 2, 3];
const myObj = { nome: 'antonio', idade: 26, telefone: { ddd: 31, numero: 99988967 } }

for (const index of myArray) {
  console.log(index);
}

for (const key in myObj) {
    console.log(key)
}