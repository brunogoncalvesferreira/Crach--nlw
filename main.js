const LinksSocialMedia = {
  github: 'brunogoncalvesferreira',
  youtube: 'UC0cbk6vFw_q15MN_c_Br-8A',
  facebook: 'bruno.goncalves.180625',
  instagram: 'bruunogf',
  twitter: 'BrunoGoferreir'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
