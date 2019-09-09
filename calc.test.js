const { sum, sub, div, multi } = require('./calc');

describe('Calculator', () => {
  it('sums two numbers', () => {
    expect(sum(2, 3)).toEqual(5);
  });

  it('subtracts two numbers', () => {
    expect(sub(2, 3)).toEqual(-1);
  });

  it('multiplies two numbers', () => {
    expect(multi(3, 4)).toEqual(12);
  });

  it('divides two numbers', () => {
    const result = div(2, 3);
    const truncadedResult = parseFloat(result.toFixed(3));

    expect(truncadedResult).toEqual(0.667);
  });

  it('does not allow divide a number by zero', () => {
    expect(div(2, 0)).toEqual(0);
  });

  it('does not allow divide zero by a number', () => {
    expect(div(0, 2)).toEqual(0);
  });

  it('does not allow divide zero by zero', () => {
    expect(div(0, 0)).toEqual(0);
  });
});
