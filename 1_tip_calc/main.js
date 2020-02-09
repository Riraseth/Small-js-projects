const form = document.querySelector('#tip_form')
const input = document.querySelector('.input')
const result = document.querySelector('.result')



form.addEventListener('submit', e => {
  e.preventDefault();
  try {
    if (input.value === '') throw 'need a number';
    let cost = (input.value * 1.2432).toFixed(2);
    result.textContent = cost;
    result.classList.add('show');
    input.value = '';

  } catch (error) {
    console.log(error)
  } 
})
