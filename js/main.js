import {OFFERS_COUNT} from './data.js';
import {createOffer} from './data.js';
const offers = new Array(OFFERS_COUNT).fill().map(() => createOffer());
window.console.log(offers);
