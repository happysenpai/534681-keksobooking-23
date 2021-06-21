//import {createOffer} from './data.js';
const mainBlock = document.querySelector('#map-canvas');
const baseTemplate = document.querySelector('#card').content;

const cloneTemplate = baseTemplate.cloneNode(true);

const newTitle = cloneTemplate.querySelector('h3').textContent;
baseTemplate.querySelector('h3').textContent = 'текст поменял';

window.console.log(newTitle);


mainBlock.appendChild(baseTemplate);
