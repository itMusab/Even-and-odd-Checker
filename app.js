let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const msg = document.getElementById("message");

    if (!guess) {
        msg.innerText = "Please enter a valid number!";
        return;
    }

    if (guess === secretNumber) {
        msg.innerText = "Correct! 🎉 You guessed it!";
    } 
    else if (guess > secretNumber) {
        msg.innerText = "Too high! 🔼";
    } 
    else {
        msg.innerText = "Too low! 🔽";
    }
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("message").innerText = "";
    document.getElementById("guessInput").value = "";
}
