const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MAX_PRICE = 1000000;
const userTitleInput = document.querySelector('#title');
const userPriceInput = document.querySelector('#price');

userTitleInput.addEventListener('input', () => {
  const valueLength = userTitleInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userTitleInput.setCustomValidity(`Ещё ${  MIN_NAME_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userTitleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_NAME_LENGTH } симв.`);
  } else {
    userTitleInput.setCustomValidity('');
  }

  userTitleInput.reportValidity();
});

userPriceInput.addEventListener('input', () => {
  const valueLength = userPriceInput.value;
  if (valueLength > MAX_PRICE) {
    userPriceInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_PRICE } симв.`);
  } else {
    userPriceInput.setCustomValidity('');
  }

  userPriceInput.reportValidity();
});


const selectElement = (document.querySelector('#room_number'));
const seleectElement2 =selectElement.selectedIndex = 2;
seleectElement2.addEventListener('change', () => {
  document.querySelector('#capacity').selectedIndex = 2;

});
