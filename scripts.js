let totalCards;
let cards = [];
const gifs = ["images/bobrossparrot.gif", "images/explodyparrot.gif", "images/fiestaparrot.gif", "images/metalparrot.gif", "images/revertitparrot.gif", "images/tripletsparrot.gif", "images/unicornparrot.gif"];
let count = 0;

while (totalCards % 2 !== 0 || totalCards < 4 || totalCards > 14) {
    totalCards = prompt("Informe o número de cartas com que deseja jogar:");
}

while (cards.length < totalCards) {
    const elGame = document.querySelector(".game");
    let aux = 0;
    while (aux < 2) {
        cards.push(gifs[count]);
        elGame.innerHTML +=
            `<div class="card" onclick="turnCard(this)">
                <div class="face">
                    <img src="images/front.png" />
                </div>
                <div class="back-face face"></div>
            </div>`;
        aux++;
    }
    count++;
}

document.querySelector("body").classList.remove("hidden");

function comparador() {
    return Math.random() - 0.5;
}

cards.sort(comparador);

for (let i = 0; i < cards.length; i++) {
    const elBackCard = document.querySelectorAll(".back-face");
    elBackCard[i].innerHTML = `<img src=${cards[i]}>`;
}




/*
while (backFaces.length < cards.length) {
    let backFaces = document.querySelectorAll(".back-face");
    const divGame = document.querySelector(".game");
    for (let i = 0; i < totalCards; i++) {

    }
}*/





function turnCard(el) {
    if (el.querySelector(".back-face-turn") !== null) {
        el.querySelector(".back-face-turn").classList.remove("back-face-turn");
        el.querySelector("div").classList.remove("front-face-turn");
    } else {
        el.querySelector("div").classList.add("front-face-turn");
        el.querySelector(".back-face").classList.add("back-face-turn");
    }
}

