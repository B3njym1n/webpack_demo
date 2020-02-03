import _ from 'lodash';
import './style.css';
import Data from './data.xml';
import printMe from './print.js';
import Icon from './PaperPlane.svg';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML= _.join(['Hello', 'webpack'], ' ');
  element.className = 'hello';

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;
  element.appendChild(btn);

  // add the image to our existing div
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
