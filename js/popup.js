const baseTemplate = document.querySelector('#card').content;

const createCard = (offer) => {
  const card = baseTemplate.cloneNode(true);

  card.querySelector('img').src = offer.autor.avatar;

  card.querySelector('.popup__title').textContent = offer.offer.title;

  card.querySelector('.popup__text--address').textContent = offer.offer.address;

  card.querySelector('.popup__text--price').textContent = `${offer.offer.price} ₽/ночь`;

  card.querySelector('.popup__type').textContent = offer.offer.type;

  card.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;

  card.querySelector('.popup__text--time').textContent = `Заезд после  ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;

  card.querySelector('.popup__features').textContent = offer.offer.features;

  card.querySelector('.popup__description').textContent = offer.offer.description;

  card.querySelector('.popup__photos img').src = offer.offer.photos;

  return card;
};

export {createCard};
