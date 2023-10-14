// const proteinBar = {
//     name: "Pikki",
//     price: 69,
//     proteinWeight: 8.7,
// }

// // КЛЮЧ ЭТО ИМЯ ЦЕНА, А ТО ЧТО ОНИ ПОКАЗЫВАЮТ ЭТО ЗНАЧЕНИЕ. СВОЙСТВО ЭТО ИХ СОВОКУПНОСТЬ
    
// const proteinBar2 = {
//         name: "Pikki2",
//         price: 69,
//         proteinWeight: 8.7,
//     }

// const settingsSite {
//     name: "My site",
    
// }

// const key = prompt('Введите новую настройку')


// settingsSite[key] = ''

// console.log(settingsSite)

//  console.log(proteinBar.name)

// const user = {
//     firstName: "John",
//     lastName: "Due",
//     age: 23,
//     profession: "Programmer",
//     features: {
//         height: 176,
//         weight: 74,
//         eyeColor: black,
//     }, 
//     sayName: () => {
//         alert (`Привет меня зовут ${user.firstName} и мне ${user.age} лет` )
//     },

// }


const character = (name, damage)=> {
    return {
        name,
        damage,
        skills: "Двойной расcекающий удар", 
        attack: function() {
            alert(`${this.name}, сила атаки - ${this.damage} уии!`)
        }


    }
}

character().attack()



