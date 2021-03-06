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

  const featuresGallery = () => {
    const findLi = card.querySelector('.popup__features');
    findLi.innerHTML = '';
    for (let ii = 0; ii < (offer.offer.features).length; ii++)
    {
      const newli = document.createElement('LI');
      newli.classList.add('popup__feature', `popup__feature--${offer.offer.features[ii]}`);
      findLi.appendChild(newli);
    }
  };
  featuresGallery();

  card.querySelector('.popup__description').textContent = offer.offer.description;

  const removeImg = card.querySelector('.popup__photos img');
  removeImg.remove();
  const photoGallery = () => {
    const addImg = card.querySelector('.popup__photos');
    for (let ii = 0; ii <  (offer.offer.photos).length; ii++)
    {
      const img = document.createElement('IMG');
      img.src = offer.offer.photos[ii];
      img.classList.add('popup__photo');
      img.height = '40';
      img.width = '45';
      img.alt = 'Фотография жилья';
      addImg.appendChild(img);
    }
  };
  photoGallery();
  return card;
};

export {createCard};
