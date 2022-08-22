const pOne = {
    score: 0,
    button: document.querySelector('#pOneBtn'),
    display: document.querySelector('#pOneDisplay')
}

const pTwo = {
    score: 0,
    button: document.querySelector('#pTwoBtn'),
    display: document.querySelector('#pTwoDisplay')
}

const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');
let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent){
    if(!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
        }
        player.display.textContent = player.score;
    }
}


pOne.button.addEventListener('click', function () {
   updateScores(pOne, pTwo)
})

pTwo.button.addEventListener('click', function () {
   updateScores(pTwo, pOne)
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset); 

function reset() {
isGameOver = false;
    pOneScore = 0;
    pTwoScore = 0;
    pOneDisplay.textContent = pOneScore;
    pTwoDisplay.textContent = pTwoScore;
    pOneDisplay.classList.remove('winner', 'loser');
    pTwoDisplay.classList.remove('winner', 'loser');
}