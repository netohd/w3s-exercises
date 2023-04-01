// https://api.github.com/users/${username}
// https://api.github.com/users/${username}/repos

async function searchUser(user) {
  await fetch(`https://api.github.com/users/${user}`)
    .then(response => {
      return (response.json())
    })
    .catch(e => console.log(e, '------ Error ------'))
}

async function main() {
  await console.log(searchUser('netohd'))
  console.log('teste')
}

main()