// let p = new Promise(function (resolve, reject) {
//     console.log('Создание промиса');
//     resolve();
// });

// p.then(function () {
//     console.log('Обработка промиса');
// }).then(() => {
//     setTimeout(function timeout() {
//         console.log('Таймаут');
//     }, 0);
// }).then(() => {
//     console.log('Конец скрипта');
// })




// Базовый порядок без учитывания скорости интернета, удаленности сервера, времени в timeout
// микро таски ( обычные функции)
// new promise
// setTimeout(  ,0)
//fetch()



console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// 1 7 3 5 2 6 4