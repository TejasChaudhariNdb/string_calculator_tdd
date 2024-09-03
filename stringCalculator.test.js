const StringCalculator = require('./stringCalculator');

test('Empty string returns 0', () => {
  const calc = new StringCalculator();
  expect(calc.add("")).toBe(0);
});
