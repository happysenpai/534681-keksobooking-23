import {createOffer} from './data.js';

const OFFERS_COUNT = 10;

const offers = new Array(OFFERS_COUNT).fill().map(() => createOffer());

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


export {
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
};
