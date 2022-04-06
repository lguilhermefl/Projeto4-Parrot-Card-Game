let numCartas;

while (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14) {
    numCartas = prompt("Informe o número de cartas com que deseja jogar:");
}

document.querySelector("body").classList.remove("hidden");
