// setTimeout(() => {
//   console.log(1);
// }, 2000);

// console.log(2);

// const example = () => {
//   console.log(3);
// };

// fetch("adawd").then(() => {
//   console.log(5);
// });

// example();

// console.log(4);

// let p = new Promise(function (resolve, reject) {
//   console.log("Создание промиса");
//   resolve();
// });

// p.then(function () {
//   console.log("Обработка промиса");
// }).then(() => {
//   setTimeout(function timeout() {
//     console.log("Таймаут");
//   }, 0).then(() => {
//     console.log("Конец скрипта");
//   });
// });

// микро такски (все обычные функции)
//new promise
//setTimeout(  ,0)
//fetch()

// let p = new Promise(function (resolve) {
//   console.log(1);
//   resolve();
// });

// p.then(() => {
//   setTimeout(() => console.log(2));
// })

//   .then(() => {
//     Promise.resolve().then(() => console.log(3));
//   })
//   .then(() => {
//     Promise.resolve().then(() => setTimeout(() => console.log(4)));
//   })
//   .then(() => {
//     Promise.resolve().then(() => console.log(5));
//   })
//   .then(() => {
//     setTimeout(() => console.log(6));
//   })
//   .then(() => {
//     console.log(7);
//   });
