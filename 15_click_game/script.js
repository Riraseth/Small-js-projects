const playArea = {};
const player = {};

playArea.stats = document.querySelector('.stats');
playArea.main = document.querySelector('.main');
playArea.game = document.querySelector('.game');
playArea.btns = document.querySelectorAll('.btn');
playArea.page = document.querySelectorAll('.page');

player.score = 0;
player.lives = 3;

playArea.btns.forEach(btn => {
  btn.addEventListener('click', handleBtn)
})

function handleBtn() {
  console.log('hello')
}
