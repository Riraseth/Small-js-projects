const playArea = {};
const player = {};

playArea.stats = document.querySelector('.stats');
playArea.main = document.querySelector('.main');
playArea.game = document.querySelector('.game');
playArea.btns = document.querySelectorAll('.btn');
playArea.page = document.querySelectorAll('.page');
document.addEventListener('DOMContentLoaded', getData);

let gameObj;
playArea.btns.forEach(btn => {
  btn.addEventListener('click', handleBtn)
})

function getData() {
  playArea.main.classList.add('visible')
  fetch("https://api.myjson.com/bins/htsg4").then(response => {
    return response.json();
  }).then(myJson => {
    gameObj = myJson.data;
    buildBoard();
  }).catch((error) => {
    console.error('There has been a problem with your fetch operation:', error)
  })
}

function handleBtn(e) {
  if (e.target.classList.contains('new-game')) {
    startGame();
  }
}

function startGame() {
  player.score = 0;
  player.lives = 3;
  playArea.main.classList.remove('visible');
  playArea.game.classList.add('visible');
  player.gameOver = false;
  startPop();
}

function startPop() {
  let newPop = random();
  newPop.classList.add('active');
}

function random() {
  const pops = document.querySelectorAll('.pop');
  const idx = Math.floor(Math.random() * pops.length);
  if (pops[idx].count == playArea.last) {
    return random();
  }
  playArea.last = pops[idx].count;
  return pops[idx];
}

function buildBoard() {
  let rows = 4;
  let cols = 4;
  let count = 0;
  playArea.game.style.width = cols * 100 + (cols * 2);
  playArea.game.style.margin = '40 auto 0 auto';
  for (let i = 0; i < rows; i++) {
    let divMain = document.createElement('div');
    divMain.setAttribute('class', 'row');
    divMain.style.width = cols * 100 + (cols * 2);
    for (let j = 0; j < cols; j++) {
      let div = document.createElement('div');
      div.setAttribute('class', 'pop');
      div.style.cursor = 'pointer';
      count++;
      div.textContent = count;
      div.count = count;
      divMain.appendChild(div);
    }
    playArea.game.appendChild(divMain)
  }
}