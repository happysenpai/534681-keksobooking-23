import {cardTitle,cardAdress} from './main.js';
const mainBlock = document.querySelector('#map-canvas');
const baseTemplate = document.querySelector('#card').content;

const fragment = () => {

  const cloneTemplate = baseTemplate.cloneNode(true);

  const newTitle = cloneTemplate.querySelector('.popup__title').textContent;
  baseTemplate.querySelector('.popup__title').textContent = cardTitle;

  const newAdress = cloneTemplate.querySelector('.popup__text--address').textContent;
  baseTemplate.querySelector('.popup__text--address').textContent = cardAdress;

  window.console.log(newTitle,newAdress);
  return mainBlock.appendChild(baseTemplate);
};
fragment();


