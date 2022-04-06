let numCartas;

while (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14) {
    numCartas = prompt("Informe o número de cartas com que deseja jogar:");
}

document.querySelector("body").classList.remove("hidden");

function turnCard (el) {
    if (el.querySelector(".back-face-turn") !== null) {
        el.querySelector(".back-face-turn").classList.remove("back-face-turn");
        el.querySelector("div").classList.remove("front-face-turn");
    } else {
        el.querySelector("div").classList.add("front-face-turn");
        el.querySelector(".back-face").classList.add("back-face-turn");
    }
}