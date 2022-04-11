let totalCards;
let cards = [];
const gifs = ["images/bobrossparrot.gif", "images/explodyparrot.gif", "images/fiestaparrot.gif", "images/metalparrot.gif", "images/revertitparrot.gif", "images/tripletsparrot.gif", "images/unicornparrot.gif"];

let clickCount = 1;

let firstCard;
let secondCard;

let firstEl;
let secondEl;

let cardsTurned = 0;
let timeSeconds = 0;

let idInterval = setInterval(countTime, 1000);

startGame();

function startGame() {

    while (totalCards % 2 !== 0 || totalCards < 4 || totalCards > 14) {
        document.querySelector("body").classList.add("hidden");
        totalCards = prompt("Informe o número de cartas com que deseja jogar:");
    }
    
    totalCards = Number(totalCards);
    document.querySelector("body").classList.remove("hidden");
    
    addGifsToCards();
    cards.sort(comparador);
    addCardsToPlay();

}

function addGifsToCards() {
    for (let i = 0; i < totalCards / 2; i++) {
        let aux = 0;
        while (aux < 2) {
            cards.push(gifs[i]);
            aux++;
        }
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function addCardsToPlay() {
    for (let i = 0; i < cards.length; i++) {
        const elGame = document.querySelector(".game");
        elGame.innerHTML +=
            `<div class="card" onclick="turnCard(this)">
                    <div class="face">
                        <img src="images/front.png" />
                    </div>
                    <div class="back-face face">
                        <img src=${cards[i]}>
                    </div>
                </div>`;
    }
}

function turnCard(el) {

    const elemento = el.querySelector(".back-face-turn");

    if (elemento === null && clickCount % 2 !== 0) {
        firstCard = el.querySelector(".back-face img").getAttribute("src");
        firstEl = el;
        el.querySelector("div").classList.add("front-face-turn");
        el.querySelector(".back-face").classList.add("back-face-turn");
        clickCount++;
    } else if (elemento === null && clickCount % 2 === 0) {
        secondCard = el.querySelector(".back-face img").getAttribute("src");
        secondEl = el;
        el.querySelector("div").classList.add("front-face-turn");
        el.querySelector(".back-face").classList.add("back-face-turn");
        clickCount++;
        setTimeout(checkCards, 1000);
        setTimeout(countCardsTurned, 50);
    }
    setTimeout(totalMoves, 100);
}

function checkCards() {
    if (firstCard !== secondCard) {
        firstEl.querySelector(".back-face-turn").classList.remove("back-face-turn");
        firstEl.querySelector("div").classList.remove("front-face-turn");
        secondEl.querySelector(".back-face-turn").classList.remove("back-face-turn");
        secondEl.querySelector("div").classList.remove("front-face-turn");
    }
}

function countCardsTurned() {
    if (firstCard === secondCard) {
        cardsTurned += 2;
    }
}

function totalMoves() {
    if (cardsTurned === totalCards) {
        alert(`Você terminou com ${clickCount - 1} jogadas em ${timeSeconds} segundos!`);
        setTimeout(playAgain, 500);
    }
}

function playAgain() {

    let playAgain;
    playAgain = prompt("Gostaria de jogar de novo? (sim/não)");
    playAgain = playAgain.toLowerCase();

    while (playAgain !== "sim" && playAgain !== "não") {
        alert("Digite uma resposta válida! (sim/não)");
        playAgain = prompt("Gostaria de jogar de novo? (sim/não)");
    }

    if (playAgain === "sim") {
        document.location.reload(true);
    } else if (playAgain === "não") {
        alert("Obrigado por jogar!");
    }
}

function countTime() {
    const el = document.querySelector(".time");
    if (cardsTurned !== totalCards) {
        timeSeconds++;
        el.innerHTML = `Você está jogando há ${timeSeconds} segundos.`;
    } else {
        clearInterval(idInterval);
    }
}
