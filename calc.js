const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => {
  if (b === 0) {
    return 0;
  }

  return a / b;
};

module.exports = { sum, sub, multi, div };
