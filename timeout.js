// let counter = 0;

// const id = setInterval(() => {
//     console.log(counter);
//     ++counter
// }, 1000)



// let button = document.querySelector('.button')

// button.addEventListener('click', () => {
//     clearInterval(id)
// })

const imagesUrl = [
    'https://st.europaplus.ru/mf/p/236802/news/373/037400/content/4958e76b84a6ff53fbff9da9b922e260.jpg',
    'https://m.ridus.ru/images2/02/78/30278_720x405.webp',
    'https://dpru.obs.ru-moscow-1.hc.sbercloud.ru/images/article/2015/03/19/84acb98b-00da-4fcc-9275-c79742a3546d.jpg',
    'https://avatars.dzeninfra.ru/get-zen-vh/271828/b5beed3822c4a5bf-15883c2b9ee91191-6e36ad6a2482ad66-761cd41e85a4583f/1080x1920'
]

const section = document.querySelector('.section')

section.style['background-image'] = `url(${imagesUrl[0]})`

let index = 1;

let id;

const setImg = () => {
    id = setInterval(() => {
    
        index === imagesUrl.length ? index = 0 : '';
    
        section.style['background-image'] = `url(${imagesUrl[index]})`
    
        ++index;
    
    }, 2000)
}

setImg()


section.addEventListener('mouseenter', () => {
    clearInterval(id)
})

section.addEventListener('mouseleave', () => {
    setImg()
})

