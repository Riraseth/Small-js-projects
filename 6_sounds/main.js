const sounds = document.querySelectorAll('.sound');

sounds.forEach(sound => {
  sound.addEventListener('click', function(e) {
    let sound = e.target.textContent
    let lowerSound = sound.toLowerCase();
    playSound(lowerSound)
    addStyle(lowerSound)
  })
})

const playSound = name => {
  let sound = new Audio(`sounds/${name}.mp3`);
  sound.play()
}

const addStyle = name => {
  let activeEle = document.querySelector('.' + name)
  activeEle.classList.add('active')
  setTimeout(() => {
    activeEle.classList.remove('active')
  }, 200);
}