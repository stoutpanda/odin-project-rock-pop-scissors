// Rock Paper Scissors

const selection = ["Rock", "Paper", "Scissors"];
const invalidInput = "Not A Valid Selection";
const modNum = selection.length;

//Scores
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let roundCount = 0;
//results Div
let resultDiv = document.querySelector(".results");


//Computer Selection
function computerPlay() {

    const random = Math.floor(Math.random() * selection.length);
    return selection[random];
}

function playerSelection(playerInput) {

    //take players input, convert to string, downcase string, take char at first position and upcase and rejoin, verify that in selection array
    const stringInput = (typeof (playerInput) === 'string') ? playerInput : (playerInput.toString());
    const lowercaseInput = stringInput.toLowerCase();
    const capitalFirst = lowercaseInput.charAt(0).toUpperCase();
    const normalizedInput = capitalFirst + lowercaseInput.slice(1);

    const verifiedInput = selection.includes(normalizedInput) ? normalizedInput : invalidInput;

    if (verifiedInput !== invalidInput) {
        return verifiedInput;
    }
    else {
        console.log(invalidInput);
    }

}

function playRound(playerInput) {

    //check players selection, use position within array as value, subtract and modulous. 0 should be tie, odds loss and evens wins. 
    const computerInput = computerPlay();
    const playersChoice = playerSelection(playerInput);
    const playersValue = selection.indexOf(playersChoice);
    const computersValue = selection.indexOf(computerInput);
    let response = "You chose " + playersChoice + " & the Computer chose: " + computerInput;

    const result = ((playersValue - computersValue) % modNum);


    //    //debug
    //    console.log(playersChoice + " " + playersValue);
    //    console.log(computerInput + " " + computersValue);
    //    console.log(result);
    roundCount++;
    if (result === 0) {
        response = "You Tied! " + response;
        ties++;

    }
    else if (result === 1) {
        response = "You Win! " + response;
        playerScore++;
    }
    else {
        response = "You Loose! " + response;
        computerScore++;
    }


    let score_response = " Current Game Score: Player: " + playerScore + " Computer Score: " + computerScore + " Ties: " + ties;
    roundResult(response, score_response);
    checkScore();

}


function roundResult(response, score_response) {

    let roundResult = document.querySelector(".roundResult");
    let scoreResult = document.querySelector(".score");
    roundResult.textContent = "Round Results: " + response;
    scoreResult.textContent = score_response;
}

function checkScore() {

    let finalScoreP = document.createElement("p");
    finalScoreP.classList.add("finalScore");

    if (playerScore == 5 || computerScore == 5) {

        const finalScore = "You played: " + roundCount + " Final Score: \nPlayer: " + playerScore + " Computer: " + computerScore + " Ties:  " + ties;
        if (playerScore > computerScore) {
            finalScoreP.classList.add("playerWins");
            finalScoreP.textContent = "Congratulations, you WIN!!! " + finalScore;
            gameEnd(finalScoreP);

        }
        else if (computerScore > playerScore) {
            finalScoreP.classList.add("computerWins");
            finalScoreP.textContent = "Sorry, you LOOSE! " + finalScore;
            gameEnd(finalScoreP);

        }
        else {
            console.log("The game was a tie! Play again!" + finalScore);
        }
    }
}

function gameEnd(finalScoreP) {
    btns.forEach((btn) => btn.remove());
    resultDiv.appendChild(finalScoreP);
    resetBtn = document.createElement('button');
    resetBtn.textContent = "Click here to reset game";
    resetBtn.addEventListener('click', resetGame);
    resultDiv.appendChild(resetBtn);

}

function resetGame() {

    //for now reloading game, made this function so you could reset the state of the game instead if wanted.
    location.reload();
}


// HTML Game Logic Below.

//Button Listners
const btns = document.querySelectorAll('button.rps_button');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        playRound(btn.id.toString())
    })
});

