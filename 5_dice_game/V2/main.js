const button = document.querySelector('button');
const output = document.querySelector('.output');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
let score = [0, 0];
const dice = [
  [5],
  [1, 9],
  [1, 5, 9],
  [1, 3, 7, 9],
  [1, 3, 5, 7, 9],
  [1, 3, 4, 6, 7, 9]
];

button.addEventListener('click', () => {
  let rollDice = [roll(6), roll(6)]
  //first element removal (first div in this case)
  updateOutput(player1, rollDice[0]);
  updateOutput(player2, rollDice[1]);
  checkWinner(rollDice[0], rollDice[1])
})

const roll = num => Math.floor(Math.random() * num + 1)

const updateOutput = (el, num) => {
  let holder = builder(num);
  if (el.children[0]) {
    el.children[0].remove();
  }
  el.appendChild(holder);
}

//create dice element
const builder = roll => {
  let div = document.createElement('div')
  let dieArray = dice[roll - 1];
  //i = 1  because we start with div no. 1
  for (let i = 1; i < 10; i++) {
    let elem = document.createElement('div');
    elem.setAttribute('class', 'dot');
    if (dieArray.includes(i)) {
      elem.classList.add('black')
    }
    div.appendChild(elem);
  }
  div.setAttribute('class', 'dicer')
  return div
}

const checkWinner = (resultA, resultB) => {
  if (resultA > resultB) {
    score[0]++
    output.innerHTML = `<p>Player 1 wins</p><p>Score:</p><p>Player 1 ${score[0]} : ${score[1]} Player 2</p>`
  } else if (resultA < resultB) {
    score[1]++
    output.innerHTML = `<p>Player 2 wins</p><p>Score:</p><p>Player 1   ${score[0]} :   ${score[1]} Player 2</p>`
  } else {
    output.innerHTML = `<p>It's a draw</p><p>Score:</p><p>Player 1   ${score[0]} : ${score[1]}   Player 2</p>`
  }
}