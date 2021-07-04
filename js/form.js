const form = document.querySelector('.ad-form');
const titles = document.querySelector('#title');
//const price = document.querySelector('#price');

form.onsubmit = function(evt) {
  if (titles.value.length < 30) {
    window.console.log('меньше 30 символов');
    evt.preventDefault();
  }

};
