const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((previous, current) => previous + current, 0)
};

const multiply = function(a) {
	return a.reduce((previous, current) => previous * current, 1);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
  if (num == 1 || num == 0) {return 1}
  return factorial(num -1) * num
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
