const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((acc, res) => acc + res, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, res) => acc * res, 1);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  }
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
