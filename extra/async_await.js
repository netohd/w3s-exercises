// https://api.github.com/users/${username}
// https://api.github.com/users/${username}/repos

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
  
  const arrTest = ['netohd','antonio','carlos','joao']
  const allElements = []

  arrTest.forEach(async element => {
    currentElement = await fetch(`https://api.github.com/users/${element}`)
    .then(response => { 
      return response.json() })

    allElements.push(currentElement)
  });

  return allElements
  
}

console.log(forEachTest())
// main()