let fruitsForYana = ['apple', 'pineapple', 'kiwi'];
let fruitsForAnna = ['banana', 'apple', 'kiwi', 'orange'];
let commonFruits = fruitsForAnna
.filter((item) => {
   return !fruitsForYana.includes(item)
})
.concat(
 fruitsForYana.filter((item) => {
   return !fruitsForAnna.includes(item)
 })
)
console.log(commonFruits);

let nums1 = [ 1, 2, 3 ];
let nums2 = [ 3, 4, 5 ];
let nums = nums1.concat(nums2);
let uniqueNums = [ ... new Set(nums)];
console.log(uniqueNums);

let mapResponse = (response) => {
    return response.map(item => ({
      id: item.id,
      name: item.name || item.id,
      value: item.value
    }));
  }
const info = [{ id: 1, name: "Yana", value: 5 }, { id: 2, value: 10 }];
let cloneInfo = [ ... info];
console.log(mapResponse(cloneInfo));

const peoples = [{ name: "Yana", age: 12 }, { name: 'Anna', age: 13 }, { name: 'Nina', age: 55 }]
let getSortedChildren = (people, order = "DSC") =>{ 
  const filteredChildren = people 
    .filter(person => person.age <= 18 && person.hasOwnProperty("age")); 
 
  const sortedChildren = filteredChildren.sort((a, b) => { 
    if (order === "DSC") { 
      return a.age - b.age; 
    } else if (order === "ASC") { 
      return b.age - a.age; 
    } ;
  }); 
 
  return sortedChildren.map(child => child.name).join(", "); 
};
console.log(getSortedChildren(peoples));
console.log(getSortedChildren(peoples, "ASC"));
console.log(getSortedChildren(peoples, "DSC"));
