const randomNumber = function (min, max) {
  if (max <= min ){
    window.console.error('максимальное значение меньше минимального');
  }
  if (min < 0 ) {
    window.console.error('минимальное значение меньше 0');
  }
  if (max < 0) {
    window.console.error('максимальное значение меньше 0');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomFloat = function (min, max) {
  if (max <= min ){
    window.console.error('максимальное значение меньше минимального');
  }
  if (min < 0 ) {
    window.console.error('минимальное значение меньше 0');
  }
  if (max < 0) {
    window.console.error('максимальное значение меньше 0');
  }
  return Math.random() * (max - min) + min;
};

randomNumber();
randomFloat().toFixed(2);
