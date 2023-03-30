function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const alt = document.querySelector("#profile p")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar_light.png")
    alt.setAttribute("alt", "Essa foto clara é nova :(:")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    alt.setAttribute("alt", "Essa foto escura é antiga :(:")
  }
}
