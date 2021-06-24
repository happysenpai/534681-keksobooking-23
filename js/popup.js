const mainBlock = document.querySelector('#map-canvas');
const baseTemplate = document.querySelector('#card').content;

const createCard = () => {
  const cloneTemplate = baseTemplate.cloneNode(true);

  const newAvatar = cloneTemplate.querySelector('img').textContent;
  baseTemplate.querySelector('img').src = '';

  const newTitle = cloneTemplate.querySelector('.popup__title').textContent;
  baseTemplate.querySelector('.popup__title').textContent = '';

  const newAdress = cloneTemplate.querySelector('.popup__text--address').textContent;
  baseTemplate.querySelector('.popup__text--address').textContent = '';

  const newPrice = cloneTemplate.querySelector('.popup__text--price').textContent;
  baseTemplate.querySelector('.popup__text--price').textContent = `${''} ₽/ночь`;

  const newType = cloneTemplate.querySelector('.popup__type').textContent;
  baseTemplate.querySelector('.popup__type').textContent = '';

  const newCapacity = cloneTemplate.querySelector('.popup__text--capacity').textContent;
  baseTemplate.querySelector('.popup__text--capacity').textContent = `${''} комнаты для ${''} гостей`;

  const newTime = cloneTemplate.querySelector('.popup__text--time').textContent;
  baseTemplate.querySelector('.popup__text--time').textContent = `Заезд после  ${''}, выезд до ${''}`;

  const newFeatures = cloneTemplate.querySelector('.popup__features').textContent;
  baseTemplate.querySelector('.popup__features').textContent = '';

  const newDescription = cloneTemplate.querySelector('.popup__description').textContent;
  baseTemplate.querySelector('.popup__description').textContent = '';

  const newPhotos = cloneTemplate.querySelector('.popup__photos img').src;
  baseTemplate.querySelector('.popup__photos img').src = '';

  window.console.log(newAvatar,newTitle,newAdress,newPrice,newType,newCapacity,newTime,newFeatures,newDescription,newPhotos);
  return mainBlock.appendChild(baseTemplate);
};

export {createCard};
