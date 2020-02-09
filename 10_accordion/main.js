const accordion = document.querySelectorAll('.panel');
accordion.forEach(item => {
  item.addEventListener('click', e => {
    accordion.forEach(ele => {
      if (e.currentTarget === ele) {
        ele.classList.toggle('active')
      } else {
        ele.classList.remove('active')
      }
    })
  })
})

// accordion.forEach(item => {
//   item.addEventListener('click', e => {
//     e.currentTarget.classList.toggle('active')
//   })
// })