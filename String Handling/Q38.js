// 38. Write a js program to remove all extra blank spaces from given string.
let string = "Hello    world My     name is Hassan";
let remove = (str) => {
  return str.replace(/\s+/g, " ").trim();
};
console.log(remove(string));
