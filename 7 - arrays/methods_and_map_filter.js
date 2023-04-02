let numVet = [2, 5, 29, 32, 66]
numVet.pop() // remove último elemento e o retorna
numVet.push() // adiciona novos elementos

console.log(numVet)
console.log(numVet.shift())  // Remove o primeiro e o retorna
console.log(numVet.join("-")) // Separa elementos com o argumento passado

// Filter é usado para retornar apenas elementos de um vetor que
// atendem uma condição determinada, nesse caso nomes que contém A
let myArr = ['Joao', 'Antonio', 'Maria', 'Igor']
let newArr = myArr.filter(current => current.includes('a'))
console.log(newArr, 'newArr')

// Map cria um novo vetor a partir de um já existente passando uma
// regra para modificar seus elementos
let singleArr = [2, 33, 89, 'Joao']
let doubleArr = singleArr.map(current => {
    if (typeof(current) == 'number')
        return current * 2
})
console.log(doubleArr, 'double')
