const botaoAlterarTema = (document.getElementById("botao-alterar-tema"));
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".botao");
const botaoPlayer = (document.getElementById("botao-player"));
const imagemBotaoAudioDesligado = document.querySelector(".player")

botaoAlterarTema.addEventListener("click", () => {
        const modoEscuroAtivo = body.classList.contains("modo-escuro");

        body.classList.toggle("modo-escuro")
        if (modoEscuroAtivo) {

                imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

        } else {

                imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
        }
});