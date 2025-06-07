// For each characters in the string
//    is it alphanumeric char ?
//    if not do nothing
//    if yes push the char

function isAlphanumeric(char) {
  const lower = char.toLowerCase();
  const code = lower.charCodeAt(0);
  if ((code >= 48 && code <= 57) || (code >= 97 && code <= 122)) {
    return true;
  }
}

const palindromes = function (string) {
  let arr = Array.from(string.toLowerCase());
  arr = arr.filter((c) => isAlphanumeric(c));

  if (arr.toString() === arr.reverse().toString()) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
