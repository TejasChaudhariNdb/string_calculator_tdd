const StringCalculator = require('./stringCalculator');

test('Empty string returns 0', () => {
  const calc = new StringCalculator();
  expect(calc.add("")).toBe(0);
});

test('Single number returns that number', () => {
    const calc = new StringCalculator();
    expect(calc.add("1")).toBe(1);
  });

  test('Two numbers separated by comma return their sum', () => {
    const calc = new StringCalculator();
    expect(calc.add("1,5")).toBe(6);
  });


  test('Handles new lines between numbers', () => {
    const calc = new StringCalculator();
    expect(calc.add("1\n2,3")).toBe(6);
  });
