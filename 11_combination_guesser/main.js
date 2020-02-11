const gameArea = document.querySelector('.game');
const btn = document.querySelector('button');
const message = document.querySelector('.message');
let size = document.querySelector('.size');
size.value = 4;
let gamePlay = false;
let score = 0;
btn.addEventListener('click', () => {
  if (!gamePlay) {
    gamePlay = true;
    gameArea.innerHTML = '';
    tempSize = size.value == 4 ? 4 : size.value
    maker(tempSize);
    btn.innerHTML = 'Check combo';
  } else {
    score++;
    message.innerHTML = `Guesses: ${score}`;
    const numbers = document.querySelectorAll('.numb');
    let winCondition = 0;
    numbers.forEach(number => {
      if (number.value == number.correct) {
        number.style.backgroundColor = 'green';
        number.style.color = 'white';
        winCondition++;
      } else {
        let color = number.value > number.correct ? 'blue' : 'red';
        number.style.backgroundColor = color;
        number.style.color = 'black';
      }

      if (winCondition == numbers.length) {
        gameEnd();
      }
    })
  }
})


const maker = (size) => {
  for (let i = 0; i < size; i++) {
    let el = document.createElement('input');
    el.setAttribute('type', 'number');
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.classList.add('numb');
    el.style.width = '50px';
    el.correct = Math.floor(Math.random() * 10);
    el.value = 0;
    gameArea.appendChild(el);
  }
}

const gameEnd = () => {
  message.innerHTML = `You solved the combo in ${score} guesses`;
  gamePlay = false;
  score = 0;
  btn.innerHTML = 'Restart game';
}
