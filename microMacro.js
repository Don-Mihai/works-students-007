

// let p = new Promise(function (resolve, reject) {
//     console.log('Создание промиса'); // 3
//     resolve();
// });

// p.then(function () {
//     console.log('Обработка промиса'); // 4
// }).then(() => {
//     setTimeout(function timeout() {
//         console.log('Таймаут');
//     }, 0);
// }).then(() => {
//     console.log('Конец скрипта');
// })



// базовый порядок без учитывания скорости интернета, удалённости сервера, времени в timeout
// микро таски (обычные функции)
// new Promise
// setTimeout(  ,0)
// fetch()


const p = new Promise()

p.then(console.log(1)).then(() => setTimeout(() => console.log(2)))





Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);


// 1 7 3 5 2 6 4 ++

// 1 7 3 5 2 4 6

// 1 7 2 3 5 6 4


// 1 7 