const errorCheck = function (min, max) {
  let displayError = '';
  if (max <= min) {
    displayError = ('максимальное значение меньше минимального');
  }
  else if (min < 0 || max < 0) {
    displayError = ('одно из значений меньше 0');
  }
  if (displayError !== '') {
    window.console.error(displayError);
    return false;
  }
  return true;
};


const randomNumber = function(min, max){
  return errorCheck(min, max) ? Math.floor(Math.random() * (max - min + 1) + min) : null;
};


const randomCoordinates = function (min, max, floatQuantity) {
  return errorCheck(min, max) ? Math.floor(Math.random() * (max - min + 1) + min).toFixed(floatQuantity) : null;
};


errorCheck();
randomNumber(0, 9.8);
randomCoordinates(0, 9.8, 2);
