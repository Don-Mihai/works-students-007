// // -------------------------------1-----------------
// const getData = async () => {
//   let isLoading = true;
//   try {
//     const data = await fetch(
//       "https://645f57d47da4477ba9554f96.mockapi.io/users"
//     );
//     const procData = await data.json();

//     console.log(procData);
//   } catch (error) {
//     console.log("Произошла ошибка: " + error);
//   }
//   isLoading = false;
// };
// getData();
// // -------------------------------2------------------
// // fetch("https://645f57d47da4477ba9554f96.mockapi.io/users")
// //   .then((data) => {
// //     return data.json();
// //   })
// //   .then((procData) => {
// //     console.log(procData);
// //   });
// // // -------------------------------3------------
// let isLoading = true;

// fetch("https://645f57d47da4477ba9554f96.mockapi.io/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Произошла ошибка: " + error))
//   .finally(() => {
//     isLoading = false;
//   });
