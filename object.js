// const proteinBar = {
//     name: 'Pikki',
//     price: 69,
//     proteinWeight: 8.8,
// }

// proteinBar.taste = 'Миндаль шоколад апельсин'

// // proteinBar.name = 'Вилки'

// console.log(proteinBar.name);


// const settingsSite = {
//     name: 'MySite',
// }

// const key = prompt('Введите новую настройку')

// settingsSite[key] = ''

// console.log(settingsSite)


// Изменение свойств через динамический ключ []
// const body = document.querySelector('body')

// const key = prompt('Введите ключ')

// const value = prompt('Введите значени')

// body.style[key] = value


// const user = {
//     firstName: 'John',
//     lastName: 'Due',
//     age: 18,
//     proffesion: 'Programmer',
//     bodyCharacteristics: {
//         height: 176,
//         weight: 74,
//         hair: 'black',
//     },
//     sayHisName: () => {
//         // alert('Привет меня зовут' + user.firstName)
//         alert(`Привет, меня зовут ${user.firstName} и мне ${user.age} лет`)
//     }
// }

// user.sayHisName()

// const character = (name, damage) => {

//     return {
//         name,
//         damage,
//         skills: 'Двойной удар',
//         attak: function () {
//             alert(`${this.name}, сила атаки - ${this.damage}, умриии!`)
//         }
//     }
// }

// character('СуперНаг', 10000).attak()

// character('УльтраДимон', 999).attak()



// ------- Первое задание---------


// const user = {
//     name: 'John',
//     surname: 'Smith'
// };

// user.name = 'Pete';

// delete user.name;

// console.log(user)


// ----------Второе задание--------------


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum)