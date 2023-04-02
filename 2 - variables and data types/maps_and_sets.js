// Os maps são parecidos com vetores, pois armazenam chaves
// e valores respectivos, porém as chaves podem ser de qualquer
// tipo de dado, além disso tem o atributo size p/ saber tamanho
// do map, é mais fácil de iterar e não possui chaves default

const myMap = new Map([
    [5, 22],
    ['textKey', 'hello!'],
    [2, 'teste']
])

console.log(myMap)

// No set não pode ter valor repetido, o segundo 1 será descartado
// É praticamente a mesma coisa de um array
const myArr = [1, 1, 2, 55, 109, 8, 55]
const mySet = new Set(myArr)

// Dá pra iterar sem o .values() também
for (let value of mySet.values()) {
    console.log(value)
}

console.log(mySet)