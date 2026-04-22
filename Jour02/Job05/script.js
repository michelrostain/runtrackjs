// window.scrollY — combien de pixels tu as scrollé depuis le haut
// document.documentElement.scrollHeight — hauteur totale de la page
// window.innerHeight — hauteur visible de la fenêtre

document.addEventListener("scroll", (event) => {
    const scrollPourCent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight))*100
    const r = Math.round(255 * scrollPourCent / 100)
    const g = Math.round(255 * (1 - scrollPourCent / 100))
    const b = 0
    const footer = document.querySelector("footer")
    footer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})