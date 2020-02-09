const btn = document.querySelector('.btn')
const output = document.querySelector('p');
const div = document.querySelector('div')

const showOutput = () => {
  const date = new Date();
  // console.log(date.get())
  let current = date.getHours();
  // current = 'kek';
  let message;
  if (current > 17) {
    message = `it's evening`;
    div.style.backgroundColor = 'darkblue';
  } else if (current > 12) {
    message = `it's afternoon`
    div.style.backgroundColor = 'blue';
  } else if (current > 0) {
    message = `it's morning`
    div.style.backgroundColor = 'yellow';
  } else {
    message = `something went wrong`;
    div.style.backgroundColor = 'black'
  }
  output.innerText = message;
}
btn.addEventListener('click', showOutput);