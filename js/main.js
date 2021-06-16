const TITLES = ['Супердом', 'такого вы еше не видели', '1 на миллион'];
const TYPES = ['flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['лучший дом с садом', 'дом вашей мечты', 'прекрасный вид на море'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

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


const offers = () => {
  const avatarValue = randomNumber(1, 8);
  const titleIndex = randomNumber(0, TITLES.length - 1);
  const typeIndex = randomNumber(0, TYPES.length - 1);
  const checkinIndex = randomNumber(0, CHECKINS.length - 1);
  const checkoutIndex = randomNumber(0, CHECKOUTS.length - 1);
  const featuresIndex = randomNumber(0, FEATURES.length - 1);
  const descriptionIndex = randomNumber(0, DESCRIPTIONS.length - 1);
  const photosIndex = randomNumber(0, PHOTOS.length - 1);
  const priceValue = randomNumber(70, 100);
  const roomsValue = randomNumber(1, 4);
  const guestsValue = randomNumber(1, 8);
  const coordinatesLat = randomCoordinates(35.65000, 35.70000, 5);
  const coordinatesLng = randomCoordinates(139.70000, 139.80000, 5);
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
const createHouses = new Array(10).fill().map(() => offers());
window.console.log(createHouses);

