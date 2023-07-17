/**
 * Translates a given English word or phrase to another language.
 * @param {string} text - The text to translate.
 * @param {string} language - The target language for translation.
 * @returns {string} - The translated text.
 */

const translate = (text) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    const translatedWords = text.split(' ').map((word) => {
      if (vowels.includes(word[0].toLowerCase())) {
        return word + 'ay';
      }
  
      let i = 0;
      while (i < word.length) {
        if (word.slice(i, i + 2).toLowerCase() === 'qu') {
          i += 2;
        } else if (vowels.includes(word[i].toLowerCase())) {
          break;
        } else {
          i++;
        }
      }
  
      return word.slice(i) + word.slice(0, i) + 'ay';
    });
  
    return translatedWords.join(' ');
  };
  
  module.exports = translate;
  
  


