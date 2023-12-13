function isPalindrome(string) {
  // Start coding here
  const charArray = Array.from(string);
  const reversedArray = charArray.slice().reverse();
  return charArray.join("") === reversedArray.join("");
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
