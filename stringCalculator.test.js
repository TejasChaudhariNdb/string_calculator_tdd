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

  test('Handles custom delimiters', () => {
    const calc = new StringCalculator();
    expect(calc.add("//;\n1;2")).toBe(3);
  });

  test('Throws error for negative numbers', () => {
    const calc = new StringCalculator();
    expect(() => calc.add("1,-2")).toThrow("negative numbers not allowed -2");
  });

  test('Throws error for multiple negative numbers', () => {
    const calc = new StringCalculator();
    expect(() => calc.add("1,-2,-3")).toThrow("negative numbers not allowed -2,-3");
  });

  test('Count the number of times Add() is called', () => {
    const calc = new StringCalculator();
    calc.add("1,2");
    calc.add("3");
    expect(calc.getCalledCount()).toBe(2);
  });
