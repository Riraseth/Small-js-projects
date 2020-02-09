const wording = ['Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Nazywał się biję, tego dnia powiadał. Dobrze, mój Tadeuszu bo tak szanownych gości. W ślad widać było ogrodniczki. Tylko smutno, że on w Tabor w tabakierę podawał starcowi. Wojski się przed ganek wysiadł z rana, bo tak przekradł się z tych pól malowanych zbożem rozmaitem wyzłacanych pszenicą, posrebrzanych żytem.', 'Gdzie bursztynowy świerzop, gryka jak naoczne świadki. I starzy i gumiennym pisarzom, ochmistrzyni, strzelcom i nas powrócisz cudem Gdy się w uczciwości, w drobne strączki białe dziwnie ozdabiał głowę, bo tak Suwarów w pół kroku Tak każe u progu rękę dał Podkomorzynie Tadeusz przyglądał się uparta coraz straszniej, srożéj.']
const message = document.querySelector('.message')
const playText = document.querySelector('textarea')
const button = document.querySelector('button')
let startTime
let endTime

button.addEventListener('click', function () {
  if (this.textContent === 'Start') {
    playText.disabled = false;
    playGame();
  } else if (this.textContent === 'Done') {
    playText.disabled = true;
    button.textContent = 'Start'
    endGame()
  }
})

const endGame = () => {
  let date = new Date();
  endTime = date.getTime()
  let totalTime = ((endTime - startTime) / 1000);
  let str = playText.value;
  //count words
  let wordCount = wordCounter(str);
  let speed = Math.round((wordCount / totalTime) * 60);
  let finalMessage = `You typed at ${speed} words per minute`
  finalMessage += `<br>${compareWords(message.textContent, str)}`
  message.innerHTML = finalMessage
}

const wordCounter = strWords => strWords.split(' ').length

const compareWords = (str1, str2) => {
  let words1 = str1.split('');
  let words2 = str2.split('');
  let counter = 0;
  words1.forEach((word1, index) => {
    if (word1 === words2[index]) {
      counter++
    }
  })
  return (counter + " correct out of " + words1.length + " words");
}


const playGame = () => {
  let random = Math.floor(Math.random() * wording.length);
  message.textContent = wording[random];
  let date = new Date();
  startTime = date.getTime()
  button.textContent = 'Done'
}
setTimeout()
