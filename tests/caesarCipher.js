function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

function shiftChar(char, shift) {
  const code = char.charCodeAt(0);

  //uppercase letters
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
  }

  //lowercase letters
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
  }

  //non-alphabetic characters
  return char;
}

export default caesarCipher;
