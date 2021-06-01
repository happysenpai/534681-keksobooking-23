const randomNumber = function (min, max) {
  if (max <= min) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};


randomNumber();

const randomFloat = function (min, max) {
  if (max <= min) {
    return false;
  }
  return Math.random() * (max - min) + min;
};


randomFloat();
