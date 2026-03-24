const resultDisplay = document.getElementById('win'); 
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const playerScoreSpan = document.getElementById('player');
const computerScoreSpan = document.getElementById('computer');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');


const choices = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;



rockBtn.addEventListener('click', function() {
    userChoice = 'rock';
    userChoiceDisplay.textContent = "Камінь"; 
    generateComputerChoice();
    getResult();
});

paperBtn.addEventListener('click', function() {
    userChoice = 'paper';
    userChoiceDisplay.textContent = "Папір";
    generateComputerChoice();
    getResult();
});

scissorsBtn.addEventListener('click', function() {
    userChoice = 'scissors';
    userChoiceDisplay.textContent = "Ножиці";
    generateComputerChoice();
    getResult();
});


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    
    if (randomNumber === 0) {
        computerChoice = 'rock';
        computerChoiceDisplay.textContent = "Камінь";
    }
    if (randomNumber === 1) {
        computerChoice = 'paper';
        computerChoiceDisplay.textContent = "Папір";
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors';
        computerChoiceDisplay.textContent = "Ножиці";
    }
}

function getResult() {
   
    if (computerChoice === userChoice) {
        resultDisplay.textContent = "Нічия!";
        resultDisplay.style.color = 'white'; 
    }
    
    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDisplay.textContent = "Ти виграв!";
        resultDisplay.style.color = 'green';
        
        // Оновлюємо рахунок
        playerScore = playerScore + 1;
        playerScoreSpan.textContent = playerScore;
    }
    
    else {
        resultDisplay.textContent = "Ти програв!";
        resultDisplay.style.color = 'red';
        
        // Оновлюємо рахунок
        computerScore = computerScore + 1;
        computerScoreSpan.textContent = computerScore;
    }
}