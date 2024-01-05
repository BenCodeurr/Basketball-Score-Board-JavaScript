
 function updateScore(value) {
    let currentScore = parseInt(document.getElementById('score-counter').innerText);

    let newScore = currentScore + value;

    document.getElementById('score-counter').innerText = newScore;
  }

 function updateScoreSecond(value) {
    let currentScore = parseInt(document.getElementById('score-counter-2').innerText);

    let newScore = currentScore + value;

    document.getElementById('score-counter-2').innerText = newScore;
  }

function reset(){
    document.getElementById('score-counter').innerText = 0;
    document.getElementById('score-counter-2').innerText = 0;
}


