// Single die roll.

let dice = ["1 / One", "2 / Two", "3 / Three", "4 / Four", "5 / Five", "6 / Six"];



function rollDice () {
let index = Math.ceil(Math.random() * 6) -1;
let chosenNumber = dice[index]; document.getElementById("diceResult").textContent = chosenNumber;
}

document.getElementById('rollDiceBtn').addEventListener('click', rollDice);

// Double dice roll.