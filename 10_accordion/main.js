const accordion = document.querySelectorAll('.panel');
// accordion.forEach(item => {
//   item.addEventListener('click', e => {
//     accordion.forEach(item => {
//       item.classList.remove('active')
//     })
//     e.currentTarget.classList.add('active')
//   })
// })

accordion.forEach(item => {
  item.addEventListener('click', e => {
    e.currentTarget.classList.toggle('active')
  })
})