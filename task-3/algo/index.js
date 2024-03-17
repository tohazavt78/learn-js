//1
const expect = function (val) {
  return {
    toBe: function (val2) {
      if (val !== val2) {
        throw new Error("Not Equal");
      } else {
        return true;
      }
    },
    notToBe: function (val2) {
      if (val === val2) {
        throw new Error("Equal");
      } else {
        return true;
      }
    },
  };
};
//2
const sumExceptMaxMin = (numbers) => {
  const minNum = Math.min(...numbers);
  const maxNum = Math.max(...numbers);
  let minCount = 0;
  let maxCount = 0;
  let result = numbers.reduce((sum, num) => {
    if (num === minNum) {
      minCount++;
      if (minCount > 1) {
        return sum + num;
      }
    } else if (num === maxNum) {
      maxCount++;
      if (maxCount > 1) {
        return sum + num;
      }
    } else {
      return sum + num;
    }
    return sum;
  }, 0);
  return result;
};
const num1 = [1, 2, 3, 4, 5];
const num2 = [5, 3, 5, 4, 8];
const num3 = [5, 3, 3, 5, 4, 8];
console.log(sumExceptMaxMin(num1));
console.log(sumExceptMaxMin(num2));
console.log(sumExceptMaxMin(num3));
//3
const animals = [
  {
    id: "3e2c2a1e-5949-4113-8d87-d693dad1c661",
    name: "Animal 1",
    age: 2,
    sex: "male",
  },
  {
    id: "3e2c2a1e-5949-4113-8d87-d693dad1c662",
    name: "Animal 2",
    age: 4,
    sex: "female",
  },
  {
    id: "3e2c2a1e-5949-4113-8d87-d693dad1c663",
    name: "Animal 3",
    age: 10,
    sex: "male",
  },
];

const vaccines = [
  {
    id: "d02ec2d9-70f7-40ab-b195-3e954ab84d65",
    animal_id: "3e2c2a1e-5949-4113-8d87-d693dad1c661",
    date: "2023-10-02",
    type: "common",
  },
  {
    id: "bbb8da92-ff9e-4d8b-9c66-ee41bc5d9dc3",
    animal_id: "3e2c2a1e-5949-4113-8d87-d693dad1c663",
    date: "2023-05-14",
    type: "common",
  },
  {
    id: "5c814c74-6ee6-4764-8d21-d518b5070c85",
    animal_id: "3e2c2a1e-5949-4113-8d87-d693dad1c662",
    date: "2023-06-12",
    type: "rabies",
  },
  {
    id: "f1b4d1dd-9cf5-433e-b0cf-a02363b70293",
    animal_id: "3e2c2a1e-5949-4113-8d87-d693dad1c661",
    date: "2022-10-01",
    type: "common",
  },
  {
    id: "f1b4d1dd-9cf5-433e-b0cf-a02363b70294",
    animal_id: "3e2c2a1e-5949-4113-8d87-d693dad1c662",
    date: "2021-12-31",
    type: "common",
  },
];
function getRabiesVaccinedAnimals() {
  const rabiesVaccines = vaccines.filter(
    (vaccine) => vaccine.type === "rabies"
  );
  return animals.filter((animal) =>
    rabiesVaccines.some((vaccine) => vaccine.animal_id === animal.id)
  );
}
function mapAnimalsWithVaccines() {
  return animals.map((animal) => {
    const animalVaccines = vaccines.filter((vaccine) => vaccine.animal_id === animal.id);
    return { ...animal, vaccines: animalVaccines || [] };
  });
}console.log(getRabiesVaccinedAnimals());
console.log(mapAnimalsWithVaccines());
//4
function getRepeatingNumbers(arr) {
  const counts = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const numbers = Object.keys(counts).filter((num) => counts[num] >= 2);
  const count = numbers.length;

  return { count, numbers: numbers.map(Number) };
}
const num4 = [1, 3, 1, 5, 6, 3, 7, 8, 4, 5, 4, 1];
console.log(getRepeatingNumbers(num3));
//5
function validateNewUser(user) {
  let errors = {};
  let success = true;

  if (!user.name) {
    errors.name = "Name is required";
    success = false;
  }
  if (!user.email) {
    errors.email = "Email is required";
    success = false;
  }
  if (!user.phone) {
    errors.phone = "Phone is required";
    success = false;
  }
  if (!user.id) {
    errors.id = "ID is required";
    success = false;
  }

  if (user.name && typeof user.name !== "string") {
    errors.name = "Name should be a string";
    success = false;
  }
  if (user.surname && typeof user.surname !== "string") {
    errors.surname = "Surname should be a string";
    success = false;
  }
  if (user.email && typeof user.email !== "string") {
    errors.email = "Email should be a string";
    success = false;
  }
  if (user.phone && typeof user.phone !== "string") {
    errors.phone = "Phone should be a string";
    success = false;
  }
  if (user.id && typeof user.id !== "number") {
    errors.id = "ID should be a number";
    success = false;
  }

  let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (user.email && !emailRegex.test(user.email)) {
    errors.email = "Email format is incorrect";
    success = false;
  }

  let phoneRegex = /^\d+$/;
  if (user.phone && !phoneRegex.test(user.phone)) {
    errors.phone = "Phone format is incorrect";
    success = false;
  }

  if (user.name && (user.name.length < 2 || user.name.length > 20)) {
    errors.name = "Name length should be from 2 to 20 letters";
    success = false;
  }
  if (user.surname && (user.surname.length < 2 || user.surname.length > 20)) {
    errors.surname = "Surname length should be from 2 to 20 letters";
    success = false;
  }
  if (user.email && user.email.length < 5) {
    errors.email = "Email length should be at least 5 letters";
    success = false;
  }
  if (user.phone && user.phone.length !== 12) {
    errors.phone = "Phone length should be 12 digits";
    success = false;
  }
  if (user.id && user.id < 1) {
    errors.id = "ID should be at least 1";
    success = false;
  }

  return { success, errors };
}

console.log(validateNewUser({ name: "Yana" }));
console.log(
  validateNewUser({ name: "Y", surname: "Hoho", id: 3, phone: "234bjhbk324" })
);
