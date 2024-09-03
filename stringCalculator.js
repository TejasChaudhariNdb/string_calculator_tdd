class StringCalculator {
    add(numbers) {
      if (numbers === "") return 0;
      const numbersArray = numbers.split(',').map(Number);
      return numbersArray.reduce((sum, num) => sum + num, 0);
    }
  }
  
  module.exports = StringCalculator;
  