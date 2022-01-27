// Rock Paper Scissors



//Computer Selection
function computerPlay() {
    const selection = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * selection.length);
    return selection[random];
}

