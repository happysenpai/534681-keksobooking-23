const randomNumber = function (min, max) {
  if (max <= min || min < 0 || max < 0) {
    // eslint-disable-next-line no-console
    console.log('Не правильное значение');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomFloat = function (min, max) {
  if (max <= min || min < 0 || max < 0) {
    // eslint-disable-next-line no-console
    console.log('Не правильное значение');
  }
  return Math.random() * (max - min) + min;
};

randomNumber();
randomFloat();
