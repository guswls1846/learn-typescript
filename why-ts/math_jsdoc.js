// @ts-check

/**
 * @param {number} a
 * @param {number} b
 * */
function sum(a, b) {
  return a + b;
}

const test1 = sum(10, 20); // 30
const test2 = sum("10", "20"); // 1020

console.log(test1, test2);
