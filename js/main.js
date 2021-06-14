const errorCheck = function (min, max) {
  let displayError = '';
  if (max <= min) {
    displayError = ('максимальное значение меньше минимального');
  }
  else if (min < 0 || max < 0) {
    displayError = ('одно из значений меньше 0');
  }
  if (displayError !== '') {
    window.console.error(displayError);
    return false;
  }
  return true;
};


const randomNumber = function (min, max) {
  return errorCheck(min, max) ? Math.floor(Math.random() * (max - min + 1) + min) : null;
};


const randomCoordinates = function (min, max, floatQuantity) {
  return errorCheck(min, max) ? Math.floor(Math.random() * (max - min + 1) + min).toFixed(floatQuantity) : null;
};


randomNumber(0, 9.8);
randomCoordinates(0, 9.8, 2);

const HOUSE_CARD = {
  author: {
    avatar: 'img/avatars/user{{xx}}.png',
  },
  offer: {
    title: ('Супердом', 'такого вы еше не видели', '1 на миллион'),
    address: '',
    price: randomNumber(70, 100),
    type: ('flat', 'house', 'bungalow', 'hotel'),
    rooms: randomNumber(1, 4),
    guests: randomNumber(1, 8),
    checkin: ('12:00', '13:00', '14:00'),
    checkout: ('12:00', '13:00', '14:00'),
    features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    description: ('лучший дом с садом', 'дом вашей мечты', 'прекрасный вид на море'),
    photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
  },

  location: {
    lat: randomCoordinates(35.65000, 35.70000, 5),
    lng: randomCoordinates(139.70000, 139.80000, 5),
  },
};
const RANDOM_AVATAR = randomNumber(1, 8);
const RANDOM_TITLE = ['Супердом', 'такого вы еше не видели', '1 на миллион'];
const RANDOM_TYPE = ['flat', 'house', 'bungalow', 'hotel'];
const RANDOM_CHECKIN = ['12:00', '13:00', '14:00'];
const RANDOM_CHECKOUT = ['12:00', '13:00', '14:00'];
const RANDOM_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const RANDOM_DESCRIPTION = ['лучший дом с садом', 'дом вашей мечты', 'прекрасный вид на море'];
const RANDOM_PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const titleIndex = randomNumber(0, RANDOM_TITLE.length - 1);
const typeIndex = randomNumber(0, RANDOM_TYPE.length - 1);
const checkinIndex = randomNumber(0, RANDOM_CHECKIN.length - 1);
const checkoutIndex = randomNumber(0, RANDOM_CHECKOUT.length - 1);
const featuresIndex = randomNumber(0, RANDOM_FEATURES.length - 1);
const descriptionIndex = randomNumber(0, RANDOM_DESCRIPTION.length - 1);
const photosIndex = randomNumber(0, RANDOM_PHOTOS.length - 1);


const createHouse = () => ({
  avatar: `img/avatars/user${  0  }${RANDOM_AVATAR}.png`,
  title: RANDOM_TITLE[titleIndex],
  address: `${HOUSE_CARD.location.lat }${ HOUSE_CARD.location.lng}`,
  price: (HOUSE_CARD.offer.price),
  type: RANDOM_TYPE[typeIndex],
  rooms: (HOUSE_CARD.offer.rooms),
  guests: (HOUSE_CARD.offer.guests),
  checkin: RANDOM_CHECKIN[checkinIndex],
  checkout: RANDOM_CHECKOUT[checkoutIndex],
  features: RANDOM_FEATURES[featuresIndex],
  description: RANDOM_DESCRIPTION[descriptionIndex],
  photos: RANDOM_PHOTOS[photosIndex],
  lat: (HOUSE_CARD.location.lat),
  lng: (HOUSE_CARD.location.lng),

});
const CREATE_HOUSES = new Array(10).fill(null).map(() => createHouse());
createHouse();
window.console.log(CREATE_HOUSES);

