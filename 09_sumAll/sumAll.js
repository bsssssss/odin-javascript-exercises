const sumAll = function(...nums) {

  for (let i of nums) {
    if (typeof i !== "number" || i < 0 || !(Number.isInteger(i))) {
      return "ERROR";
    }
  }

  let sorted = nums.sort((a, b) => a - b);
  let a = sorted[0];
  let b = sorted[1];
  let res = 0;

  for (let i = a; i <= b; i++) {
    res += i;
  }
  return res;
};

// Do not edit below this line
module.exports = sumAll;
