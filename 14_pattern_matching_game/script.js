const messager = document.querySelector('.message');
const gamearea = document.querySelector('.gamearea');
const btn = document.querySelector('button');
const gameColors = ['red', 'green', 'blue', 'yellow'];

let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 5;

btn.addEventListener('click', () => {
  if (!inPlay) {
    player();
  }
})

const player = () => {
  btn.disabled = true;
  gameClicks = [];
  userClicks = [];
  runSequence(playNum);
}

const runSequence = num => {
  let squares = document.querySelectorAll('.box');
  num--
  if (num < 0) {
    inPlay = true;
    return;
  }
  console.log(inPlay)
  let random = Math.floor(Math.random() * gameColors.length);
  gameClicks.push(gameColors[random])
  squares[random].style.opacity = '1';
  setTimeout(() => {
    squares[random].style.opacity = '.5'
    setTimeout(() => {
      runSequence(num);
    }, 100);
  }, 500);
}

const setup = () => {
  for (let i = 0; i < gameColors.length; i++) {
    let div = eleFactory('div');
    div.style.backgroundColor = gameColors[i];
    div.classList.add('box');
    div.style.opacity = '.5';
    div.myColor = gameColors[i];
    div.addEventListener('click', checkAnswer)
    gamearea.appendChild(div);
  }
}

const checkAnswer = e => {
  if (inPlay) {
    let el = e.target;
    userClicks.push(el.myColor);
    el.style.opacity = '1';
    console.log(e.target)
    setTimeout(() => {
      el.style.opacity = '0.5';
    }, 500);
  }
}

const eleFactory = elType => document.createElement(elType);

window.addEventListener('load', setup());