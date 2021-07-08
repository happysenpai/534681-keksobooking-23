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

const v1 = document.querySelector('#room_number');
const v2 = document.querySelector('#capacity');

const SelectChange = (select1, select2) =>{
  select1.value = select2.value;
};
v1.addEventListener('change', (event) => {
  SelectChange(event);
});

SelectChange(v1,v2);
