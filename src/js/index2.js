const botaoAlterarTema = (document.getElementById("botao-alterar-tema"));
const botaoAlterarMusica = (document.getElementById("botao-alterar-musica"));
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".botao");
const imagemBotaoTrocaDeAudio = document.querySelector(".botao-on");
const botaoPlayer = (document.getElementById("botao-player"));
const imagemBotaoAudioDesligado = document.querySelector(".player")

var audio = new Audio('./src/Audios/weare.mp3');
var modoMusicaOn = body.classList.contains("modo-on");

imagemBotaoTrocaDeAudio.setAttribute("src", "./src/imagens/musica-off.png");


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
        this.modoMusicaOn = body.classList.contains("modo-on");
        
        body.classList.toggle("modo-on")
        if (this.modoMusicaOn) {
                
                imagemBotaoTrocaDeAudio.setAttribute("src", "./src/imagens/sound-off.svg");
                audio.pause();
                
        } else {
                
                imagemBotaoTrocaDeAudio.setAttribute("src", "./src/imagens/sound-on.svg");
                audio.play(); 
                
        }
        
});
