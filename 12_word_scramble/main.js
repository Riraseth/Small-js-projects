const message = document.querySelector('.message');
const guess = document.querySelector('input');
const btn = document.querySelector('button');
let inplay = false;
let scramble = '';
let scrambled = '';
let score = 0;
const wordsArray = ['javascript', 'website', 'document', 'angular', 'react', 'bootstrap']

btn.addEventListener('click', () => {
  if (!inplay) {
    inplay = true;
    score = 0;
    guess.value = '';
    btn.textContent = 'Guess';
    guess.classList.toggle('hidden');
    scramble = createWord();
    scrambled = scrambleWord(scramble.split('')).join('');
    message.textContent = scrambled;
  } else {
    score++;
    if (guess.value === scramble) {
      console.log('correct');
      inplay = false;
      btn.textContent = 'Play again?';
      message.textContent = `Correct it was ${scramble} and it took you ${score} guesses`;
      guess.classList.add('hidden');
    } else {
      console.log('guess again');
    }
  }
})


const createWord = () => {
  let randomIndex = Math.floor(Math.random() * wordsArray.length);
  let tempWord = wordsArray[randomIndex];
  return tempWord
}


const scrambleWord = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    // let temp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = temp;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}