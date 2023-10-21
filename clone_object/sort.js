// [1, 2, 3, 111, 22, 3].sort((a, b) => a - b); // цикл

// function sortAndStar(stringArray) {
//   const sorted = stringArray.sort();
//   return sorted[0].split("").join("***");
// }
// console.log(sortAndStar(["We", "solve", "Katas"]));

// function twoSort(s) {
//   const sorted = s.sort();
//   return sorted[0].split("").join("***");
// }

// twoSort([
//   "bitcoin",
//   "take",
//   "over",
//   "the",
//   "world",
//   "maybe",
//   "who",
//   "knows",
//   "perhaps",
// ]);

// const twoSort = (s) =>
//   s
//     .sort((a, b) => (a > b ? 1 : -1))[0]
//     .split("")
//     .join("***");
