const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResults = calculator.plus(2, 3);
const minusResults = calculator.minus(plusResults, 3);
const timesResults = calculator.times(2, minusResults);
const divideResults = calculator.divide(timesResults, 3);
const powerResults = calculator.power(2, divideResults);

console.log(plusResults);
console.log(minusResults);
console.log(timesResults);
console.log(divideResults);
console.log(powerResults);
