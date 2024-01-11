let array1 = [1, 3, 5, 2, 4];
const result1 = array1.sort();
console.log(result1);

let array2 = [
  { age: 19, name: "Anton" },
  { age: 24, name: "Yana" },
];
const result2 = array2.filter((item) => item.age > 20);
console.log(result2);

let arr = [{age: 5, id: 1}, {age: 10, id: 2}, {age: 15, id: 3}];
const oldest = arr.reduce((prev, cur) => {
  if (prev.age > cur.age) {
    return prev
  }
  return cur
});
console.log(oldest.id);

let array4 = ["table", "name", "city", "train", "village"];
array4 = array4.filter(str => str.startsWith('t'));
console.log(array4.join());
