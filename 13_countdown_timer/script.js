const endDate = document.querySelector('input');
const clock = document.querySelector('clock');
let timeInterval;
let timeStop = false;

endDate.addEventListener('change', e => {
  e.preventDefault();
  clearInterval(timeInterval);
  const temp = new Date(endDate.value);
  startClock(temp);
  timeStop = false;
});

const startClock = date => {
  const updateCounter = () => {
    displayTimeLeft(date)
  }
  updateCounter();
  if (!timeStop) {
    timeInterval = setInterval(updateCounter, 1000);
  } else {
    clearInterval(timeInterval);
  }
}

const timeLeft = date => {
  let currentDate = new Date();
  let time = Date.parse(date) - Date.parse(currentDate);
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / 1000 / 60) % 60);
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  return {
    'total': time,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}

const displayTimeLeft = date => {
  let tl = timeLeft(date);
  if (tl.total <= 0) {
    timeStop = true;
    console.log(timeStop)
  }
  let entries = Object.entries(tl);
  entries.forEach(entry => {
    let el = document.querySelector(`.${entry[0]}`);
    if (el) {
      el.textContent = entry[1];
    }
  })
}