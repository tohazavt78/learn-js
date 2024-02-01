let fruitsForYana = ["apple", "pineapple", "kiwi"];
let fruitsForAnna = ["banana", "apple", "kiwi", "orange"];
let commonFruits = fruitsForAnna
  .filter((item) => {
    return !fruitsForYana.includes(item);
  })
  .concat(
    fruitsForYana.filter((item) => {
      return !fruitsForAnna.includes(item);
    })
  );
console.log(commonFruits);

let nums1 = [1, 2, 3];
let nums2 = [3, 4, 5];
let nums = nums1.concat(nums2);
let uniqueNums = [...new Set(nums)];
console.log(uniqueNums);

let mapResponse = (response) => {
  return response.map((item) => ({
    ...item,
    name: item.name || item.id,
  }));
};
const info = [
  { id: 1, name: "Yana", value: 5 },
  { id: 2, value: 10 },
];
console.log(mapResponse(info));

const group = [
  { name: "Yana", age: 12 },
  { name: "Anna", age: 13 },
  { name: "Nina", age: 55 },
];

let getSortedChildren = (people, order) => {
  const filteredChildren = people.filter((person) => person.age <= 18);

  const sortedChildren = filteredChildren.sort((a, b) => {
    if (order === "DESC") {
      return b.age - a.age;
    }
    if (order === "ASC") {
      return a.age - b.age;
    }
  });

  return sortedChildren.map((child) => child.name).join(", ");
};

console.log(getSortedChildren(group));
console.log(getSortedChildren(group, "ASC"));
console.log(getSortedChildren(group, "DESC"));
