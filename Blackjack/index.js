let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let sum = firstCard + secondCard;
let nextCard = Math.floor(Math.random() * 10) + 2;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let pCardEl = document.getElementById("pCard-el");
let dCardEl = document.getElementById("dCard-el");

const startGame = () => {
  playGame();
};

const playGame = () => {
  pCardEl.textContent = `Card1: ${firstCard}`;
  dCardEl.textContent = `Card2: ${secondCard}`;
  if (sum <= 20) {
    message = "Want another card, partner?";
  } else if (sum === 21) {
    message = "That's BLACKJACK! You win!";
    hasBlackjack = true;
  } else {
    message = "You busted out...dealer wins!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = `Total: ${sum}`;
};

const drawCard = () => {
  message = "Drawing a new card from the deck!";
  sum += nextCard;
  playGame();
};
// CASH OUT!
