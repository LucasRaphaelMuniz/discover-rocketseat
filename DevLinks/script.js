function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de perfil light-mode")
  } else {
    img.setAttribute("src", "https://avatars.githubusercontent.com/u/114521141?v=4")
    img.setAttribute("alt", "Foto de perfil dark-mode")
  }

  //pegar a tag img

  // substituir a imagem
}
