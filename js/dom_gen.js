import {createOffer,TITLES} from './data.js';
const mainBock = document.querySelector('#map-canvas');
const baseTemplate = document.querySelector('#card').content;

const newTitle = baseTemplate.querySelector('h3').textContent;
baseTemplate.querySelector('h3').textContent = 'текст поменял';

window.console.log(newTitle);



mainBock.appendChild(baseTemplate);
