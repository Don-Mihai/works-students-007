// const user = {
//     name: "John",
//     age: 30,
//     gender: "male",
//     interests:'Музыка, MMA',
// }


// const saller = user

// saller.name = 'Курбан'

// user.gender = 'binary'


// console.log(saller)


// --------------------------

<<<<<<< HEAD
const user = {
    name: "John",
    age: 30,
    gender: "male",
    interests:'Музыка, MMA',
    role: {
        isAdmin: false,
        isManager: true,
    }
}

const person = {...user}
=======
// const role =  {
//     name: 'Мухамед',
//     isAdmin: false,
//     isManager: true,
// }
>>>>>>> main

// const user = {
//     name: "John",
//     age: 30,
//     gender: "male",
//     interests:'Музыка, MMA',
// }

// const person = {...role, ...user}

// console.log(person)
// -------------------------------


// let zorro = 'конь'

// let superman = zorro

// superman = 'трусы красные'


// // zorro = конь
// // superman = трусы красные
// console.log(zorro)

// ----------------- опционлаьная цепочка

const user = {
    fio: 'adfasfasfds',
    // roles: [
    //     'admin',
    //     'крутая роль'
    // ]
}

console.log(user?.roles?.length)