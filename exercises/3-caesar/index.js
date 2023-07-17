/**
 * Applies the Caesar cipher to a given string.
 * @param {string} string - The string to encrypt or decrypt.
 * @param {number} shift - The number of positions to shift the characters.
 * @returns {string} - The encrypted or decrypted string.
 */
const caesar = (string, shift) => {
  const charCodeA = 'A'.charCodeAt(0);
  const charCodeZ = 'Z'.charCodeAt(0);
  const charCodea = 'a'.charCodeAt(0);
  const charCodez = 'z'.charCodeAt(0);

  return string.replace(/[a-zA-Z]/g, (char) => {
    const charCode = char.charCodeAt(0);
    let shiftedCharCode;

    if (charCode >= charCodeA && charCode <= charCodeZ) {
      shiftedCharCode = ((charCode - charCodeA + shift + 26) % 26) + charCodeA;
    } else if (charCode >= charCodea && charCode <= charCodez) {
      shiftedCharCode = ((charCode - charCodea + shift + 26) % 26) + charCodea;
    }

    return String.fromCharCode(shiftedCharCode);
  });
};

module.exports = caesar;

