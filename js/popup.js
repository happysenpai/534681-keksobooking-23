import {PHOTOS} from './data.js';
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

  const removeImg = card.querySelector('.popup__photos img');
  removeImg.remove();
  const photoGallery = () => {
    const addImg = card.querySelector('.popup__photos');
    let ii = 0;
    for (ii = 0; ii < 3; ii++)
    {
      const img = document.createElement('IMG');
      img.src = PHOTOS[ii];
      img.height = '40';
      img.width = '45';
      img.alt = 'Фотография жилья';
      img.addClass ='classname';
      addImg.appendChild(img);
      img.addClass = '123';
      window.console.log(img);
    }
  };
  photoGallery();
  return card;
};

export {createCard};
