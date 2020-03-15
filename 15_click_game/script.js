const playArea = {};
const player = {};

playArea.stats = document.querySelector('.stats');
playArea.main = document.querySelector('.main');
playArea.game = document.querySelector('.game');
playArea.btns = document.querySelectorAll('.btn');
playArea.page = document.querySelectorAll('.page');
document.addEventListener('DOMContentLoaded', getData());

async function getData() {
  playArea.main.classList.add('visible');
  try {
    const response = await fetch('https://api.myjson.com/bins/htsg4');
    const result = await response.json();
    gameObj = await result.data;
    buildBoard();
  } catch (error) {
    console.log(error);
  }
}

function buildBoard() {
  playArea.scorer = document.createElement('span');
  playArea.scorer.innerHTML = 'Press button to start';
  playArea.stats.appendChild(playArea.scorer);
  let rows = 4;
  let cols = 4;
  let count = 0;
  playArea.game.style.width = cols * 100 + cols * 2;
  playArea.game.style.margin = '40 auto 0 auto';
  for (let i = 0; i < rows; i++) {
    let divMain = document.createElement('div');
    divMain.setAttribute('class', 'row');
    divMain.style.width = cols * 100 + cols * 2;
    for (let j = 0; j < cols; j++) {
      let div = document.createElement('div');
      div.setAttribute('class', 'pop');
      div.style.cursor = 'pointer';
      count++;
      div.textContent = count;
      div.count = count;
      divMain.appendChild(div);
    }
    playArea.game.appendChild(divMain);
  }
}

function updateScore() {
  playArea.scorer.innerHTML = `Score: ${player.score} Lives: ${player.lives}`;
}

let gameObj;
playArea.btns.forEach(btn => {
  btn.addEventListener('click', handleBtn);
});

function handleBtn(e) {
  if (e.target.classList.contains('newGame')) {
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
  updateScore();
}

function startPop() {
  let newPop = randomPop();
  newPop.classList.add('active');
  newPop.addEventListener('click', hitPop);
  const time = Math.round(Math.random() * 1500 + 750);
  const val = Math.floor(Math.random() * gameObj.length);
  newPop.old = newPop.textContent;
  newPop.v = gameObj[val].value;
  newPop.innerHTML = gameObj[val].icon + '<br>' + gameObj[val].value;
  playArea.inPlay = setTimeout(() => {
    newPop.classList.remove('active');
    newPop.removeEventListener('click', hitPop);
    newPop.textContent = newPop.old;
    if (newPop.v > 0) {
      player.lives--;
      updateScore();
    }
    if (player.lives <= 0) {
      gameOver();
    }
    if (!player.gameOver) {
      startPop();
    }
  }, time);
}

function gameOver() {
  player.gameOver = true;
  playArea.main.classList.add('visible');
  playArea.game.classList.remove('visible');
  document.querySelector('.newGame').textContent = 'Try again';
}

function randomPop() {
  const pops = document.querySelectorAll('.pop');
  const idx = Math.floor(Math.random() * pops.length);
  if (pops[idx].count == playArea.last) {
    return randomPop();
  }
  playArea.last = pops[idx].count;
  return pops[idx];
}

function hitPop(e) {
  let newPop = e.target;
  player.score = player.score + newPop.v;
  updateScore();
  newPop.classList.remove('active');
  newPop.removeEventListener('click', hitPop);
  newPop.textContent = newPop.old;
  clearTimeout(playArea.inPlay);
  if (!player.gameOver) {
    startPop();
  }
}
