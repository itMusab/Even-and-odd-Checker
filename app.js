let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

let playerXName = 'Player 1';
let playerOName = 'Player 2';

let scores = { X: 0, O: 0, draw: 0 };

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const cells = document.querySelectorAll('.cell');
const gameInfo = document.getElementById('gameInfo');

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function updateNames() {
    const newX = document.getElementById('player1Name').value.trim();
    const newO = document.getElementById('player2Name').value.trim();

    playerXName = newX || 'Player 1';
    playerOName = newO || 'Player 2';

    document.getElementById('displayPlayer1').textContent = playerXName;
    document.getElementById('displayPlayer2').textContent = playerOName;

    updateGameInfo();
}

function updateGameInfo() {
    const name = currentPlayer === 'X' ? playerXName : playerOName;
    gameInfo.textContent = `${name} Turn`;
}

function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index');

    if (gameBoard[index] !== '' || !gameActive) return;

    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;

    checkWinner();
}

function checkWinner() {
    for (let pattern of winPatterns) {
        const [a,b,c] = pattern;

        if (gameBoard[a] &&
            gameBoard[a] === gameBoard[b] &&
            gameBoard[b] === gameBoard[c]) {

            const winnerName = currentPlayer === 'X' ? playerXName : playerOName;
            gameInfo.textContent = `🎉 ${winnerName} won!`;
            gameActive = false;

            scores[currentPlayer]++;
            document.getElementById(`score${currentPlayer}`).textContent = scores[currentPlayer];

            pattern.forEach(i => cells[i].classList.add('winner'));
            return;
        }
    }

    if (!gameBoard.includes('')) {
        gameInfo.textContent = "🤝 Draw!";
        gameActive = false;
        scores.draw++;
        document.getElementById('scoreDraw').textContent = scores.draw;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateGameInfo();
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    updateGameInfo();

    cells.forEach(c => {
        c.textContent = '';
        c.classList.remove('winner');
    });
}

function resetAll() {
    resetGame();
    scores = { X: 0, O: 0, draw: 0 };
    document.getElementById('scoreX').textContent = '0';
    document.getElementById('scoreO').textContent = '0';
    document.getElementById('scoreDraw').textContent = '0';
}
