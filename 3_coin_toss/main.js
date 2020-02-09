const message = document.querySelector('.message');
const buttons = document.querySelectorAll('button');
const coinArray = ['Heads', 'Tails'];
let score = [0, 0]

buttons.forEach(button => {
  button.addEventListener('click', e => {
    let playerGuess = e.target.textContent;
    let computerToss = Math.floor(Math.random() * buttons.length);
    let computerGuess = coinArray[computerToss];
    let output;
    if (playerGuess === computerGuess) {
      output = 'Player wins'
      score[0]++
    } else {
      output = 'Computer wins'
      score[1]++
    }
    message.innerHTML = `<p>${output}</p><p>Player ${score[0]} : ${score[1]} Computer</p>`
  })
})