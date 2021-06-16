const TITLES = ['Супердом', 'такого вы еше не видели', '1 на миллион'];
const TYPES = ['flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['лучший дом с садом', 'дом вашей мечты', 'прекрасный вид на море'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const MIN_AVATAR_VALUE = 1;
const MAX_AVATAR_VALUE = 8;

const MIN_PRICE_VALUE = 70;
const MAX_PRICE_VALUE = 100;

const MIN_ROOMS_VALUE = 1;
const MAX_ROOMS_VALUE = 4;

const MIN_GUESTS_VALUE = 1;
const MAX_GUESTS_VALUE = 8;

const MIN_COORDINATES_LAT = 35.65000;
const MAX_COORDINATES_LAT = 35.70000;

const MIN_COORDINATES_LNG = 139.70000;
const MAX_COORDINATES_LNG = 139.80000;

const COORDINAT_FLOAT_COUNT = 5;

const OFFERS_COUNT = 10;

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


const houseOffer = () => {
  const avatarValue = randomNumber(MIN_AVATAR_VALUE, MAX_AVATAR_VALUE);
  const titleIndex = randomNumber(0, TITLES.length - 1);
  const typeIndex = randomNumber(0, TYPES.length - 1);
  const checkinIndex = randomNumber(0, CHECKINS.length - 1);
  const checkoutIndex = randomNumber(0, CHECKOUTS.length - 1);
  const featuresIndex = randomNumber(0, FEATURES.length - 1);
  const descriptionIndex = randomNumber(0, DESCRIPTIONS.length - 1);
  const photosIndex = randomNumber(0, PHOTOS.length - 1);
  const priceValue = randomNumber(MIN_PRICE_VALUE ,MAX_PRICE_VALUE);
  const roomsValue = randomNumber(MIN_ROOMS_VALUE, MAX_ROOMS_VALUE);
  const guestsValue = randomNumber(MIN_GUESTS_VALUE, MAX_GUESTS_VALUE);
  const coordinatesLat = randomCoordinates(MIN_COORDINATES_LAT, MAX_COORDINATES_LAT, COORDINAT_FLOAT_COUNT);
  const coordinatesLng = randomCoordinates(MIN_COORDINATES_LNG, MAX_COORDINATES_LNG, COORDINAT_FLOAT_COUNT);
  return{
    avatar: `img/avatars/user${  0  }${avatarValue}.png`,
    title: TITLES[titleIndex],
    address: `${coordinatesLat } ${  coordinatesLng}`,
    price: priceValue,
    type: TYPES[typeIndex],
    rooms: roomsValue,
    guests: guestsValue,
    checkin: CHECKINS[checkinIndex],
    checkout: CHECKOUTS[checkoutIndex],
    features: FEATURES[featuresIndex],
    description: DESCRIPTIONS[descriptionIndex],
    photos: PHOTOS[photosIndex],
    lat: coordinatesLat,
    lng: coordinatesLng,
  };
};
const offers = new Array(OFFERS_COUNT).fill().map(() => houseOffer());
window.console.log(offers);

