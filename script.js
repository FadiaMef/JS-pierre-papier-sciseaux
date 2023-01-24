const choices = ['rock', 'paper', 'scissors'];
const generateComputerChoice = () => {
    const random = Math.floor(Math.random() * 3)
    return choices[random];
}
const updateScores = () => {
    if(resultDisplay.textContent.includes('win'))
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    else if(resultDisplay.textContent.includes('lose'))
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
}
const makeChoice = e => {

    const player = e.target.id;
    const computer = generateComputerChoice();

    if (player === computer) {
        resultDisplay.textContent = 'draw';

    } else if (computer === 'rock') {
        resultDisplay.textContent = player === 'scissors' ? 'you lose!' : 'you win!';

    }
    else if (computer === 'paper') {
        resultDisplay.textContent = player === 'scissors' ? 'you win!' : 'you lose!';

    } else if (computer === 'scissors') {
        resultDisplay.textContent = player === 'rock' ? 'you win!' : 'you lose!';
    }
    playerChoiceDisplay.textContent = player;
    computerChoiceDisplay.textContent = computer;
    resultDisplay.style.color = resultDisplay.textContent.includes('win') ? 'green' : 'red';
    updateScores();
}

const computerChoiceDisplay = document.querySelector('#computer > span');
const playerChoiceDisplay = document.querySelector('#player > span');
const resultDisplay = document.querySelector('#output');

const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');


choices.forEach(choice => {
    document.getElementById(choice).addEventListener('click', makeChoice)
})


