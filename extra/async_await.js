// https://api.github.com/users/${username}
// https://api.github.com/users/${username}/repos

const searchUser = new Promise(res => {
  fetch(`https://api.github.com/users/netohd`)
    .then(response => {
      res(response.json)
    })
})

async function main() {
  searchUser.then(response => {
    console.log(response)
    console.log('teste')
  }
  )
}

main()