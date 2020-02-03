import './style.css';
import Data from './data.xml';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML= 'Getting Start';
  element.className = 'hello';

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;
  element.appendChild(btn);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
