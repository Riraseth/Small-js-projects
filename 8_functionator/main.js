let myBlock;
let myFunctionList;
let funList = [];
const movementArray = ['right', 'left', 'up', 'down'];
document.addEventListener('DOMContentLoaded', () => {
  myBlock = document.createElement('div');
  myBlock.textContent = 'Set path';
  myBlock.style.width = '100px';
  myBlock.style.height = '100px';
  myBlock.style.backgroundColor = 'red';
  myBlock.style.color = 'white';
  myBlock.style.lineHeight = '100px';
  myBlock.style.textAlign = 'center';
  myBlock.style.position = 'absolute';
  myBlock.style.top = '100px';
  myBlock.style.left = '150px';
  document.body.appendChild(myBlock);
  myFunctionList = document.createElement('div');
  document.body.appendChild(myFunctionList);
})

document.addEventListener('keydown', e => {
  e.preventDefault();
  let keys = e.key;
  switch (keys) {
    case 'ArrowUp':
      addFun('up');
      break;

    case 'ArrowDown':
      addFun('down');
      break;

    case 'ArrowLeft':
      addFun('left');
      break;

    case 'ArrowRight':
      addFun('right');
      break;
    case 'c':
      myBlock.style.backgroundColor = randomColor();

      break
    case 'r':
      let temp = movementArray[Math.floor(Math.random() * movementArray.length)]
      addFun(temp);
      break
    case 'Enter':
      mover();

      break
    default:
      break;

  }
})


const mover = () => {
  if (funList.length > 0) {
    //The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
    let current = myBlock.getBoundingClientRect();
    let element = funList.shift();
    let item = element.textContent.replace('+', '').trim();
    myFunctionList.removeChild(element);
    myBlock.innerHTML = 'Move: ' + item;
    switch (item) {
      case 'up':
        myBlock.style.top = current.top - current.height + 'px';
        break;
  
      case 'down':
        myBlock.style.top = current.top + current.height + 'px';
        break;
  
      case 'left':
        myBlock.style.left = current.left - current.width + 'px';
        break;
  
      case 'right':
        myBlock.style.left = current.left + current.width + 'px';
        break;

      default:
        console.log('default')
        break;
      
    }
    setTimeout(mover, 300);
  } else {
    myBlock.innerHTML = 'Set path';
  }
}


const addFun = val => {
  let span = document.createElement('span');
  span.textContent = `+ ${val}`;
  span.style.padding = '10px';
  span.style.display = 'inline-block'
  span.style.border = '1px solid #ddd';
  myFunctionList.appendChild(span);
  funList.push(span);
  span.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = 'red';
    e.target.color = 'white';
  })
  span.addEventListener('mouseout', e => {
    e.target.style.backgroundColor = 'white';
    e.target.color = 'black';
  })
  span.addEventListener('click', e => {
    let curIndex = funList.indexOf(e.target);
    console.log(curIndex);
    let tempRemove = funList.splice(curIndex, 1);
    myFunctionList.removeChild(e.target);
  }
  )
}

//toString(16) - changes value to  hex
//substr(-6) - last 6 digits
const randomColor = () => `#${Math.random().toString(16).substr(-6)}`


// const goLeft = () => {
//   let temp = myBlock.offsetLeft;
//   temp = temp - 50;
//   myBlock.style.left = temp + 'px';
// }

// const goRight = () => {
//   let temp = myBlock.offsetLeft;
//   temp = temp + 50;
//   myBlock.style.left = temp + 'px';
// }

// const goTop = () => {
//   let temp = myBlock.offsetTop;
//   temp = temp - 50;
//   myBlock.style.top = temp + 'px';
// }

// const goDown = () => {
//   let temp = myBlock.offsetTop;
//   temp = temp + 50;
//   myBlock.style.top = temp + 'px';
// }