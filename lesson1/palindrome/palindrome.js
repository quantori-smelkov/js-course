function isPalindrome(input) {
  // define regular expression to filter all non-letters and numbers
  let regExp = /[^A-Za-z0-9]/g;
  // next line handles null-undefined (!input) and [] (input.length === 0) or {} (Object.keys(input).length === 0) inputs
  if (!input || input.length === 0 || Object.keys(input).length === 0) {return false};
  input = input.toLowerCase().replace(regExp, '');
  let len = input.length;
  // next line handles empty string after replacement of all non-letters and numbers
  if (input.length === 0) {return false};
  for (let i = 0; i < len/2; i++) {
    if (input[i] !== input[len - 1 - i]) {
      // return false once first inconsistency of chars happens, fail fast
       return false;
   }
 }
 return true;
}
module.exports.isPalindrome = isPalindrome