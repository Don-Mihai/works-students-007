// const numbers = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < numbers.length; ++i) {
//     console.log(`${numbers[i]} + ${i + 1}`)
// }

// console.log(numbers)

//-------------1----forEach--------------------
//Просмотр даннах

// const numbers = ['a', 'b', 'c', 'd']

// numbers.forEach((item, index) => {
//     console.log(item, index + 1)
// })

//--------------2----map-----------
//Создание нового преобразованного массива

// const numbers = [1, 2, 3, 4]
// const newArr = numbers.map((item) => {
//     return item * 10
// })

// console.log(newArr)


//-----------3---

// const numbers = [1, 2, 3, 4, 5, 6]

// const filteredArr = numbers.filter((item) => {
//     if (item >= 4) {
//         return true
//     } else return false
// })

// console.log(filteredArr)

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

// const filteredArr = products.filter((product) => product.category === 'fruits' ? true : false)

// console.log(filteredArr)

//-----------------4--reduse-----------

// const arr = [1, 2, 3, 4, 5]

// const result = arr.reduce((result, item) => {
//     return result + item
// }, 0)

// console.log(result)

//---------5-----push pop shift unshift----

// const arr = [1, 2, 3]

// arr.push(4)

// arr.pop()

// console.log(arr)

