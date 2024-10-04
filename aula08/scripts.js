var botao = document.getElementById("botao-voltar-topo");

console.log(botao);

// também funciona desta forma
// botao.addEventListener("click", function () {
//     window.scrollTo({ top: 0, behavior: "smooth" });
// });

botao.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

function funcaoVisibilidadeBotao() {
    if (document.documentElement.scrollTop > 80) {
        botao.style.display = "block";
    } else {
        botao.style.display = "none";
    }
}

window.onscroll = function () { funcaoVisibilidadeBotao() };
