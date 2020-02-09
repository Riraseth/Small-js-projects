const button = document.querySelector('#roll_button')
const reset_button = document.querySelector('#reset_button')
const output = document.querySelector('#output')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')

let score = [0, 0]

button.addEventListener('click', () => {
  let rolls = [roll(6), roll(6)]
  let temp
  let winner
  if (rolls[0] === rolls[1]) {
    temp = `It's a draw`
  } else if (rolls[0] > rolls[1]) {
    temp = 'Player 1 wins'
    score[0]++
  } else {
    temp = 'Player 2 wins'
    score[1]++
  }

  if (score[0] === score[1]) {
    winner = 'No one is winning'
  } else if (score[0] > score[1]) {
    winner = 'Player 1 is winnig'
  } else {
    winner = 'Player 2 is winning'
  }

  output.innerHTML = `${temp}<p>Player 1 [${score[0]}] : [${score[1]}] Player 2</p>
  <p>${winner}</p>`
  player1.innerHTML = diceFace(rolls[0])
  player2.innerHTML = diceFace(rolls[1])
})

const roll = num => Math.floor(Math.random() * num + 1);
const diceFace = roll => `&#${9855+roll};`

reset_button.addEventListener('click', () => {
  score = [0, 0]
  output.innerHTML = `Start the game<p>Player 1 [${score[0]}] : [${score[1]}] Player 2</p>
  <p>Waiting..</p>`
  player1.innerHTML = ''
  player2.innerHTML = ''
})




