import {createOffer} from './data.js';
import {createCard} from './popup.js';
const OFFERS_COUNT = 10;

const offers = new Array(OFFERS_COUNT).fill().map(() => createOffer());

createCard(offers[0]);

