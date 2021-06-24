import {createOffer} from './data.js';
const offers = new Array(1).fill().map(() => createOffer());

const cardAvatar = offers[0].autor.avatar;
const cardTitle = offers[0].offer.title;
const cardAdress = offers[0].offer.address;
const cardPrice = offers[0].offer.price;
const cardType = offers[0].offer.type;
const cardGuest = offers[0].offer.guests;
const cardRoom = offers[0].offer.rooms;
const cardCheckin = offers[0].offer.checkin;
const cardCheckout = offers[0].offer.checkout;
const cardFeatures = offers[0].offer.features;
const cardDescription = offers[0].offer.description;
const cardPhotos = offers[0].offer.photos;

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

  const newPhotos = cloneTemplate.querySelector('img')[1];
  baseTemplate.querySelector('img')[1].src = cardPhotos;

  window.console.log(newAvatar,newTitle,newAdress,newPrice,newType,newCapacity,newTime,newFeatures,newDescription,newPhotos);
  return mainBlock.appendChild(baseTemplate);
};


fragment();
export {fragment};
window.console.log(createOffer.autor.avatar);
/*Заведите модуль, который будет отвечать за генерацию разметки похожих элементов.

На основе временных данных для разработки и шаблона #card создайте DOM-элементы, соответствующие объявлениям, и заполните их данными:

Выведите заголовок объявления offer.title в заголовок .popup__title.
Выведите адрес offer.address в блок .popup__text--address.
Выведите цену offer.price в блок .popup__text--price строкой вида {{offer.price}} ₽/ночь. Например, «5200 ₽/ночь».
В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:
Квартира для flat
Бунгало для bungalow
Дом для house
Дворец для palace
Отель для hotel
Выведите количество гостей и комнат offer.rooms и offer.guests в блок .popup__text--capacity строкой вида {{offer.rooms}} комнаты для {{offer.guests}} гостей. Например, «2 комнаты для 3 гостей».
Время заезда и выезда offer.checkin и offer.checkout в блок .popup__text--time строкой вида Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}. Например, «Заезд после 14:00, выезд до 14:00».
В список .popup__features выведите все доступные удобства в объявлении.
В блок .popup__description выведите описание объекта недвижимости offer.description.
В блок .popup__photos выведите все фотографии из списка offer.photos. Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.
Замените значение атрибута src у аватарки пользователя .popup__avatar на значение поля author.avatar.
Предусмотрите ситуацию, когда данных для заполнения не хватает. Например, отсутствует описание. В этом случае соответствующий блок в карточке скрывается.

Отрисуйте один из сгенерированных DOM-элементов, например первый, в блок #map-canvas, чтобы проверить, что данные в разметку были вставлены корректно.

Подключите модуль в проект.*/
