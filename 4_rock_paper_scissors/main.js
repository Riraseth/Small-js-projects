const message = document.querySelector('.message');
const score = document.querySelector('.score');
const btns = document.querySelectorAll('button');
let winner = [0, 0];

btns.forEach(btn => {
  btn.addEventListener('click', playGame)
})

function playGame(e) {
  let computerSelection = Math.floor(Math.random() * btns.length)
  let playerSelection = e.target.textContent;
  switch (computerSelection) {
    case 0:
      computerSelection = 'Rock';
      break;
    case 1:
      computerSelection = 'Paper';
      break;
    case 2:
      computerSelection = 'Scissors';
      break;
    default:
      break;
  }
  let result = checkWinner(computerSelection, playerSelection);
  if (result === 'Player') {
    result += ' wins';
    winner[0]++
  }
  if (result === 'Computer') {
    result += ' wins';
    winner[1]++
  } else {
    // result += ''
  }
  score.innerHTML = `Player ${winner[0]} : ${winner[1]} Computer`;
  messager(`${playerSelection} vs ${computerSelection} <br><br> ${result}`)
}

const messager = (mes) => {
  message.innerHTML = mes;
}


const checkWinner = (pl, co) => {
  if (pl === co) {
    return "Draw";
  }
  if (pl === "Rock") {
    if (co === "Paper") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (pl === "Paper") {
    if (co === "Scissors") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (pl === "Scissors") {
    if (co === "Rock") {
      return "Computer";
    } else {
      return "Player";
    }
  }
}
