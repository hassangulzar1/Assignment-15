// 8. Write a js program to find total number of alphabets, digits or special character in a string.
let string = "Hassan123..,";
function findAll(str) {
  let checkAlphabets = str.match(/[a-z]/gi).join("").length;
  let checkDigits = str.match(/[1234567890]/g).join("").length;
  let checkSpecial = str.match(/[!@#$%^&*.,]/g).join("").length;
  return `
  Total Alphabets = ${checkAlphabets}
  Total Digits = ${checkDigits}
  Total SpecialChracter = ${checkSpecial}`;
}

console.log(findAll(string));
