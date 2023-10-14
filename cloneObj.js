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
// const role = {
//     name: 'Мухамед',
//     isAdmin: false,
//     isManager: true,
// }


// const user = {
//     name: "John",
//     age: 30,
//     gender: "male",
//     interests: 'Музыка, MMA',
// }

// // console.log({ ...user, ...user.role })

// const person = { ...role, ...user }

// console.log(person)

// const person = { ...user }





// let zorro = 'конь'

// let superman = zorro

// superman = 'трусы красные'


// // zorro = конь
// // superman = трусы красные
// console.log(zorro)



// ------- Первое задание ---------
// const user = {
//     name: 'John',
//     surname: 'Smith'
// };

// user.name = 'Pete';

// delete user.name;

// console.log(user)


// ---------- Второе задание--------------
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// console.log(sum)

// ------------- Опциональная цепочка--------------

const user = {
    fio: 'wqeqweq',
    // roles: [
    //     'admin',
    //     'moderator',
    // ]
}

console.log(user?.roles?.length)
// console.log(user?.name)