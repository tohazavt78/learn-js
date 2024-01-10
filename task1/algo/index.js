let array1 = [1, 3, 5, 2, 4];
const result1 = array1.sort();
console.log(result1);

let array2 = [
  { age: 19, name: "Anton" },
  { age: 24, name: "Yana" },
];
const result2 = array2.filter((item) => item.age > 20);
console.log(result2);

let array4 = ["table", "name", "city", "train", "village"];
let result = [];
for (let str of array4) {
  if (str.startsWith("t") === true) {
    result.push(str);
  }
}
console.log(result.join());