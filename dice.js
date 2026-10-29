const diceImage = document.getElementById('diceImage');
const rollButton = document.getElementById('rollButton');
const resultText = document.getElementById('resultText');

rollButton.addEventListener('click', () => {
    const rollResult=Math.floor(Math.random()*6)+1;
    diceImage.src=`./image/dice ${rollResult}.jpeg`;
    resultText.textContent=`You rolled a ${rollResult}!`;
});