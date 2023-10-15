// const user = {
//   name: "jopa",
//   age: 10200,
// };

// const numbers = ["a", "b", "c", "d"];

// for (let i = 0; i < numbers.length; ++i) {
//   console.log(`${i + 1} , ${numbers[i]}`);
// }

// console.log(numbers);
// --------------- 1method
// const numbers = ["a", "b", "c", "d"];
// numbers.forEach((item, index) => {
//   console.log(item, index + 1);
// });
// console.log(numbers);
// --------------- 2method
// const numbers = [1, 2, 3, 4];
// const newArr = numbers.map((item) => {
//   return item * 30;
// });
// console.log(newArr);
// console.log(numbers);
// --------------- 3method
// const numbers = [1, 2, 3, 4, 5, 6];
// const filteredArr = numbers.filter((item) => (item >= 4 ? true : false));
// console.log(filteredArr);

// const products = [
//   {
//     name: "apple",
//     price: "$1",
//     category: "fruits",
//   },
//   {
//     name: "banana",
//     price: "$2",
//     category: "fruits",
//   },
//   {
//     name: "orange",
//     price: "$3",
//     category: "fruits",
//   },
//   {
//     name: "table",
//   },
// ];

// const filteredArr = products.filter((product) =>
//   product.category === "fruits" ? true : false
// );
// console.log(filteredArr);
// function positiveSum(arr) {
//   let positiveArr = arr.filter((item) => (item > 0 ? true : false));

//   let result = 0;

//   positiveArr.forEach((item) => {
//     result += item;
//   });
//   return result;
// }
// const arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((result, item) => {
//   return result + item;
// }, 0);
// console.log(result);
// -----------

// const arr = [1, 2, 3];

// arr.push(4);

// arr.pop();

// console.log(arr);
/* function likes(names) {
  const n = names.length;
  switch (n) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${n - 2} others like this`;
  }
}
console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); */

// function likes(names) {
//   switch (names.length) {
//     case 0:
//       return "no one likes this";
//     case 1:
//       return names[0] + " likes this";
//     case 2:
//       return names[0] + " and " + names[1] + " like this";
//     case 3:
//       return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//     default:
//       return (
//         names[0] +
//         ", " +
//         names[1] +
//         " and " +
//         (names.length - 2) +
//         " others like this"
//       );
//   }
// }
// function likes(names) {
//   const n = names.length;
//   return n === 0
//     ? "no one likes this"
//     : n === 1
//     ? `${names[0]} likes this`
//     : n === 2
//     ? `${names[0]} and ${names[1]} like this`
//     : n === 3
//     ? `${names[0]}, ${names[1]} and ${names[2]} like this`
//     : `${names[0]}, ${names[1]} and ${n - 2} others like this`;
// }
