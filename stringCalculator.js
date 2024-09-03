class StringCalculator {
    add(numbers) {
      if (numbers === "") return 0;

      let delimiter = /[\n,]/; // Default delimiters
      if (numbers.startsWith("//")) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].substring(2), 'g');
        numbers = parts[1];
      }

      const numbersArray = numbers.split(delimiter).map(Number);
      return numbersArray.reduce((sum, num) => sum + num, 0);
    }
  }
  
  module.exports = StringCalculator;
  