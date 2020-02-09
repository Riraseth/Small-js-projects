const message = document.querySelector('.message');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const answers = ['It will work', 'Maybe not', 'Probably not', 'Highly likely', 'I don\'t know']
btn.addEventListener('click', () => {
  let response = Math.floor(Math.random() * answers.length);
  console.log(answers[response]);
  message.innerHTML = `
  <p>You asked: ${input.value}</p>
  <p>And the answer is: ${answers[response]}</p>
  `;
  input.value = '';
})