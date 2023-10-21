// let counter = 0;
// const id = setInterval(() => {
//   console.log(counter);
//   ++counter;
// }, 1000);

// let button = document.querySelector(".glow-on-hover");

// button.addEventListener("click", () => {
//   clearInterval(id);
// });

// button.addEventListener("click", () => {
//   setInterval(id);
// });

const imagesUrl = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg",
  "https://www.thenoahcenter.org/wp-content/uploads/2022/04/IMG_6345-scaled-scaled.jpg",
  "https://www.cats.org.uk/media/1132/ginger-cat-staring-white-cat.jpg",
  "https://images.theconversation.com/files/541015/original/file-20230803-19-fmuwe.jpg?ixlib=rb-1.1.0&rect=10%2C0%2C6647%2C4626&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
];
const section = document.querySelector(".section");

section.style["background-image"] = `url(${imagesUrl[0]})`;
let index = 1;

const section = setInterval(() => {
  index === imagesUrl.length ? (index = 0) : "";

  section.style["background-image"] = `url(${imagesUrl[index]})`;

  ++index;
}, 2000);

let id;

const setImg = () => {
  id = setInterval(() => {
    index === imagesUrl.length ? (index = 0) : "";

    section.style["background-image"] = `url(${imagesUrl[index]})`;

    ++index;
  }, 2000);
};
setImg;
section.addEventListener("mouseenter", () => {
  clearInterval(id);
});

section.addEventListener("mouseleave", () => {
  setImg();
});
