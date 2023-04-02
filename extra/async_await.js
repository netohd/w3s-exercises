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
  
  // const arrTest = ['netohd','antonio','carlos','joao']
  const artists = await prisma.artist.findMany()
  console.log(artists[50], 'artists')
  const allElements = []
  const index = 0

  artists.forEach( async element => {
    const currentElement = await prisma.user.findUnique({
      where: {
        id: index,
      },
    })
    index++
    allElements.push(currentElement)
  });

  return allElements
  
}

forEachTest()
// main()