function isPalindrome(input) {
  let regExp = /[^A-Za-z0-9]/g;
  if (input.length === 0) {return false};
  input = input.toLowerCase().replace(regExp, '');
  let len = input.length;
  if (input.length === 0) {return false};
  for (let i = 0; i < len/2; i++) {
    if (input[i] !== input[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
module.exports.isPalindrome = isPalindrome