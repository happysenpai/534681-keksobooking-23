const errorCheck = function (min, max) {
  let displayError = '';
  let displayStatus = false;
  if (max <= min) {
    displayError = ('максимальное значение меньше минимального');
  }
  else if (min < 0 || max < 0) {
    displayError = ('одно из значений меньше 0');
  }
  if (displayError !== '') {
    displayStatus = false;
    return displayError && displayStatus;
  }
  else{
    displayStatus = true;
  }
};


const randomNumber = function(min, max){
  Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};


const randomCoordinate = function (min, max) {
  Math.floor(Math.random() * (max - min + 1) + min);
  return randomCoordinate;
};

errorCheck();
randomNumber(0, 9.8);
randomCoordinate(0, 9.8, 2);
