// let counter = 0

// const id = setInterval(() => {
//     console.log(counter);
//     ++counter
// }, 1000)

// let button = document.querySelector('.button')

// button.addEventListener('click', () => {
//     clearInterval(id)
// })

const imagesUrl = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSYJEtAojHPESwroqkn6UV2RlovsM0JymgQ&usqp=CAU',
    'https://kaifolog.ru/uploads/posts/2020-06/1592383368_002.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCoVKmL3MD8QJEDJuT877vuiiptWNW0Q452RzE2W5O0XhwnIIcaivH3Ekzy5gnQTjnac&usqp=CAU'
]

const section = document.querySelector('.section');

section.style.background = `url(${imagesUrl[0]})`

let index = 1;

// let id;

// const id = setInterval(() => {
//     index === imagesUrl.length ? index = 0 : '';

//     section.style.background = `url(${imagesUrl[index]})`

//     ++index;

// }, 1000)

// section.addEventListener('.mouseenter', () => {
//     const setImg = () => {
//         setInterval(() => {
//             index === imagesUrl.length ? index = 0 : '';

//             section.style.background = `url(${imagesUrl[index]})`

//             ++index;
//         }

//     }), 1000)
