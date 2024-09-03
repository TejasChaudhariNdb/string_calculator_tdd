const StringCalculator = require('./stringCalculator');

test('Single number returns that number', () => {
    const calc = new StringCalculator();
    expect(calc.add("1")).toBe(1);
  });

  test('Two numbers separated by comma return their sum', () => {
    const calc = new StringCalculator();
    expect(calc.add("1,5")).toBe(6);
  });