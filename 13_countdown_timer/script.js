const endDate = document.querySelector('input');
const clock = document.querySelector('clock');

endDate.addEventListener('change', e => {
  e.preventDefault();
  const temp = new Date(endDate.value);
  console.log(temp);
  startClock(temp);
});

const startClock = date => {
  timeLeft(date);
}

const timeLeft = date => {
  let currentDate = new Date();
  let time = Date.parse(date) - date.parse(currentDate);
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