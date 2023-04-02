// https://api.github.com/users/${username}
// https://api.github.com/users/${username}/repos

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
  console.log('teste')
}

async function forEachTest() {
  const artists = await prisma.artist.findMany()
  console.log(artists[50], 'artists')
  const allElements = []

  artists.forEach(async element => {
    let currentElement = await prisma.customer.findUnique({
      where: {
        CustomerId: element.ArtistId,
      },
    })
    allElements.push(currentElement)
  });


  return allElements
  
}

const result = forEachTest()
console.log(result, 'result here')
// main()