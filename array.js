// const numbers = ['a', 'b', 'c', 'd']

// for(let i = 0; i < numbers.length; ++i) {
//     console.log(`${numbers[i]} ${i + 1}`)
// }

// console.log(numbers)

// --------------1-- forEach--------------
// просмотр данных
// const numbers = ['a', 'b', 'c', 'd']

// numbers.forEach((item, index) => {
//     console.log(item, index + 1)
// })

// --------------2----map-------------
// для преобразования и создания нового массива
// const numbers = [1, 2, 3, 4]

// const newArr = numbers.map((item) => {
//     return item * 10
// })

// console.log(newArr)

// ------------3--- filter-----------------
// const numbers = [1, 2, 3, 4, 5, 6]

// const filteredArr = numbers.filter((item) => item >= 4 ? true : false)

// console.log(filteredArr)

// const products = [
//     {
//         name: 'apple',
//         price: '$1',
//         category: 'fruits',
//     },
//     {
//         name: 'orange',
//         price: '$2',
//         category: 'fruits',
//     },
//     {
//         name: 'banana',
//         price: '$3',
//         category: 'fruits',
//     },
//     {
//         name: 'table',
//     }
// ];

// const filteredArr = products.filter((product) => product.category === 'fruits' ? true : false )

// console.log(filteredArr)
// -----------4-----reduce----------------------

// const arr = [1 , 2, 3, 4, 5]

// const result =  arr.reduce((result, item) => {
//     return result + item
// }, 0)

// console.log(result)

// -----------5----push pop shift unshift--------------------

// const arr = [1, 2, 3]

// arr.push(4)

// arr.pop()

// console.log(arr)
// function countDown(number) {
//   // вывод в консоль
//   console.log(number);

//   // уменьшаем значение на один
//   const newNumber = number - 1;

//   // условие выхода
//   if (newNumber > 0) {
//     countDown(newNumber);
//   }
// }

// countDown(4);

// let number = 4;
// while (number >= 0) {
//   console.log(number);
//   number--;
// }

// const obj = {
//   value: 3,
//   next: {
//     value: 5,
//     next: {
//       value: 2,
//       next: null,
//     },
//   },
// };

// function getArray(obj) {
//   return obj ? [obj.value, ...getArray(obj.next)] : [];
// }

// console.log(getArray(obj));
