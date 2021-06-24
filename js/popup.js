const mainBlock = document.querySelector('#map-canvas');
const baseTemplate = document.querySelector('#card').content;

const createCard = (offers) => {
  const cloneTemplate = baseTemplate.cloneNode(true);

  cloneTemplate.querySelector('img').src = offers.autor.avatar;

  cloneTemplate.querySelector('.popup__title').textContent = offers.offer.title;

  cloneTemplate.querySelector('.popup__text--address').textContent = offers.offer.address;

  cloneTemplate.querySelector('.popup__text--price').textContent = `${offers.offer.price} ₽/ночь`;

  cloneTemplate.querySelector('.popup__type').textContent = offers.offer.type;

  cloneTemplate.querySelector('.popup__text--capacity').textContent = `${offers.offer.rooms} комнаты для ${offers.offer.guests} гостей`;

  cloneTemplate.querySelector('.popup__text--time').textContent = `Заезд после  ${offers.offer.checkin}, выезд до ${offers.offer.checkout}`;

  cloneTemplate.querySelector('.popup__features').textContent = offers.offer.features;

  cloneTemplate.querySelector('.popup__description').textContent = offers.offer.description;

  cloneTemplate.querySelector('.popup__photos img').src = offers.offer.photos;

  return mainBlock.appendChild(cloneTemplate);
};

export {createCard};
