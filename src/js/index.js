const botaoAlterarTema = (document.getElementById("botao-alterar-tema"));
const botaoAlterarMusica = (document.getElementById("botao-alterar-musica"));
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".botao");
const imagemBotaoTrocaDeAudio = document.querySelector(".botao-on");
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

botaoAlterarMusica.addEventListener("click", () => {
        const modoMusicaOn = body.classList.contains("modo-on");

        body.classList.toggle("modo-on")
        if (modoMusicaOn) {

                imagemBotaoTrocaDeAudio.setAttribute("src", "./src/imagens/musicaon.png");

        } else {

                imagemBotaoTrocaDeAudio.setAttribute("src", "./src/imagens/musica-off.png");
        }
});