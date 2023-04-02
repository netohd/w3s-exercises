import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function searchUser(user) {
  // O fetch tbm é uma promise (permite then catch e finally, 
  // portanto precisa de uma variável) para receber seu retorno
  const data = await fetch(`https://api.github.com/users/${user}`)
  .then(response => { 
    return response.json() })

  return data
}

async function main() {
  const data = await searchUser('netohd')
  console.log(data, 'data here')
  console.log('test')
}

async function forEachTest() {
  const artists = await prisma.artist.findMany()
  console.log(artists[50], 'artist')
  const allElements = []
  allElements.push({ nome: 'Antonio' })

  // [Não funciona] => artists.forEach(async element => {
  // Explicação: forEach é um loop que não espera chamadas
  // assíncronas. Solução: for of
  for (let element of artists ) {
    let currElement = await prisma.customer.findUnique({
      where: {
        CustomerId: element.ArtistId,
      },
    })
    allElements.push(currElement)
  }
  return allElements
}

async function main2() {
  const result = await forEachTest()
  console.log(result[1], result.length, 'result here')
}

main2()
// main()