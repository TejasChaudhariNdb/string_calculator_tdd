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
      const negatives = numbersArray.filter(num => num < 0);
      if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
      }

      return numbersArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
    }
  }
  
  module.exports = StringCalculator;
  