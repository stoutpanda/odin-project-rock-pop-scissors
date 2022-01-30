// Rock Paper Scissors

const selection = ["Rock", "Paper", "Scissors"];
const invalidInput = "Not A Valid Selection";
const modNum = selection.length;

//Scores
let playerScore = 0;
let computerScore = 0;
let ties = 0;
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

   roundResult(response);

}

function roundResult(response) {
    
    let roundResult = document.createElement("p");
    roundResult.classList.add('score', 'roundResult');
    roundResult.textContent = response;
    resultDiv.appendChild(roundResult);
}

function checkScore() {


    const finalScore = "You played: " + numberOfGames + " Final Score: \nPlayer: " + playerScore + " Computer: " + computerScore + " Ties:  " + ties;
    if (playerScore > computerScore) {
        console.log("Congratulations, you WIN!!! " + finalScore);
    }
    else if (computerScore > playerScore) {
        console.log("Sorry, you LOOSE! " + finalScore);
    }
    else {
        console.log("The game was a tie! Play again!" + finalScore);
    }

}


// HTML Game Logic Below.

//Button Listners
const btns = document.querySelectorAll('button.rps_button');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        playRound(btn.id.toString())
    })
});

