// const proteinBar = {
//     name: 'Pikki',
//     price: 69,
//     proteinWeight: 8.8,
// }

// // ключ + значение = свойство


// proteinBar.taste = 'Миндаль шоколад апельсин'

// proteinBar.name = 'Вилки'

// delete proteinBar.name


// console.log(proteinBar);



// const settingsSite = {
//     name: 'My site',
// }

// const key = prompt('Введите новую настройку')

// settingsSite[key] = ''

// console.log(settingsSite)



// // изменение свойст через динамический ключ
// const body = document.querySelector('body')

// const key = prompt('Введите ключ')

// const value = prompt('Введите значение')

// body.style[key] = value



// // так не делайте
// const example = {
//     'camel Case': 'example'
// }
// example['camel Case']




// const user = {
//     firstName: "John",
//     lastName: 'Due',
//     age: 18,
//     profession: 'Programmer',
//     bodyCharacteristics: {
//         height: 176,
//         weight: 74,
//         hair: 'black',
//     },
//     sayHisName: () => {
//         alert(`Привет, меня зовут ${user.firstName} и мне ${user.age} лет`)
//     }
// }

// user.sayHisName()

// const character = (name, damage) => {

//     return {
//         name,
//         damage,
//         skills: 'двойной рассекающий удар!',
//         attak: function() {
//             alert(`${this.name}, моя мощь - ${this.damage}, Умриииииии!`)
//         }
//     }
// }

// character('СуперНагиборХХХ', 10000).attak()

// character('УльтраДимон', 999).attak()





// Объявляем объект person с методом greet
const person = {
    name: "John",
    greet: function() {
      console.log(`Привет, меня зовут ${this.name}`);
    }
  };
  
  // Вызываем метод greet объекта person
  person.greet(); // Выведет: Привет, меня зовут John
  



  // Объявляем объект person с методом greet, используя стрелочную функцию
const person2 = {
    name: "Mike",
    greet: () => {
      console.log(`Привет, меня зовут ${this.name}`);
    }
  };
  
  // Вызываем метод greet объекта person
  person2.greet(); // Выведет: Привет, меня зовут undefined