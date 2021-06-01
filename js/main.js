var randomNumber = function (min, max) {
    if (max <= min) {
        return false;
    }
    return Math.floor(Math.random() * (max - min + 1) + min); 
    };
  
  var randomValue = randomNumber(1, 3);
  console.log(randomValue);


  var randomFloat = function (min, max) {
    if (max <= min) {
        return false;
    }
    return Math.random() * (max - min) + min;
  };
  
  var randomValue = randomFloat(1.3, 1.2);
  console.log(randomValue.toFixed(1));