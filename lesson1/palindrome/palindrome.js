function isPalindrome(input) {
  let regExp = /[^A-Za-z0-9]/g;
  input = input.toLowerCase().replace(regExp, '');
  let len = input.length;
  for (let i = 0; i < len/2; i++) {
    if (input[i] !== input[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
module.exports.isPalindrome = isPalindrome