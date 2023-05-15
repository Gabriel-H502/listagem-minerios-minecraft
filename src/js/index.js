const body = document.querySelector("body")
const botaoAlterarTema = document.getElementById("botao-alterar-tema")
const imagemBotaoTrocarTema = document.querySelector(".icone-sol")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocarTema.setAttribute("src", "./src/images/Sun.webp")
    } else {
        imagemBotaoTrocarTema.setAttribute("src", "./src/images/Moon.webp")
    }
})



