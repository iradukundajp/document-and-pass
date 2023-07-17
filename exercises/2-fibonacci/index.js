/**
 * Generates the Fibonacci sequence up to a given number of terms.
 * @param {number|string} numTerms - The number of terms in the Fibonacci sequence. It can be a number or a string representation of a number.
 * @returns {number|string} - The Fibonacci term at the specified position, or "OOPS" if the input is invalid.
 */
const fibonacci = (numTerms) => {
    const parsedNumTerms = parseInt(numTerms);
  
    if (isNaN(parsedNumTerms) || parsedNumTerms < 0) {
      return "OOPS";
    }
  
    const sequence = [0, 1];
    if (parsedNumTerms <= 1) {
      return sequence[parsedNumTerms];
    }
  
    for (let i = 2; i <= parsedNumTerms; i++) {
      const nextTerm = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextTerm);
    }
  
    return sequence[parsedNumTerms];
  };
  
  module.exports = fibonacci;
  
  
