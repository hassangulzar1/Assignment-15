// 7. Write a js program to count total number of negative elements in an array.
let arr = [1, 3, 5, 6, -2, 3 - 5, 2];
let negative = 0;
for (const e of arr) {
  if (e < 0) {
    negative++;
  }
}
console.log(`Negative count: ${negative}`);
