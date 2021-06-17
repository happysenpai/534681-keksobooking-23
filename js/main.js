import {createOffer} from './data.js';

const OFFERS_COUNT = 10;

const offers = new Array(OFFERS_COUNT).fill().map(() => createOffer());
window.console.log(offers);
