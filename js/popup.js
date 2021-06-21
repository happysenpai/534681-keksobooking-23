import {
  cardAvatar,
  cardTitle,
  cardAdress,
  cardPrice,
  cardType,
  cardGuest,
  cardRoom,
  cardCheckin,
  cardCheckout,
  cardFeatures,
  cardDescription,
  cardPhotos
} from './main.js';

const mainBlock = document.querySelector('#map-canvas');
const baseTemplate = document.querySelector('#card').content;

const fragment = () => {
  const cloneTemplate = baseTemplate.cloneNode(true);

  const newAvatar = cloneTemplate.querySelector('img').textContent;
  baseTemplate.querySelector('img').src = cardAvatar;

  const newTitle = cloneTemplate.querySelector('.popup__title').textContent;
  baseTemplate.querySelector('.popup__title').textContent = cardTitle;

  const newAdress = cloneTemplate.querySelector('.popup__text--address').textContent;
  baseTemplate.querySelector('.popup__text--address').textContent = cardAdress;

  const newPrice = cloneTemplate.querySelector('.popup__text--price').textContent;
  baseTemplate.querySelector('.popup__text--price').textContent = `${cardPrice} ₽/ночь`;

  const newType = cloneTemplate.querySelector('.popup__type').textContent;
  baseTemplate.querySelector('.popup__type').textContent = cardType;

  const newCapacity = cloneTemplate.querySelector('.popup__text--capacity').textContent;
  baseTemplate.querySelector('.popup__text--capacity').textContent = `${cardRoom} комнаты для ${cardGuest} гостей`;

  const newTime = cloneTemplate.querySelector('.popup__text--time').textContent;
  baseTemplate.querySelector('.popup__text--time').textContent = `Заезд после  ${cardCheckout}, выезд до ${cardCheckin}`;

  const newFeatures = cloneTemplate.querySelector('.popup__features').textContent;
  baseTemplate.querySelector('.popup__features').textContent = cardFeatures;

  const newDescription = cloneTemplate.querySelector('.popup__description').textContent;
  baseTemplate.querySelector('.popup__description').textContent = cardDescription;

  const newPhotos = cloneTemplate.querySelector('img')[2];
  baseTemplate.querySelector('img')[2].src = cardPhotos;

  window.console.log(newAvatar,newTitle,newAdress,newPrice,newType,newCapacity,newTime,newFeatures,newDescription,newPhotos);
  return mainBlock.appendChild(baseTemplate);
};
fragment();


