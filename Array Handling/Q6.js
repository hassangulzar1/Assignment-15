// 6. Write a js program to count total number of even and odd elements in an array
let arr = [1, 2, 3, 45, 6];
let even = 0;
let odd = 0;
for (const e of arr) {
  if (e % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}

console.log(`Even Count: ${even} Odd Count: ${odd}`);
