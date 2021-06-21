import {createOffer} from './data.js';

const OFFERS_COUNT = 10;

const offers = new Array(OFFERS_COUNT).fill().map(() => createOffer());

const cardTitle = offers[0].offer.title;

const cardAdress = offers[0].offer.address;


export {cardTitle,cardAdress};
