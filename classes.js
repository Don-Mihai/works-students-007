// class Person {
//   constructor(name, role, damage) {
//     this.name = name;
//     this.role = role;
//     this.damage = damage;
//   }

//   sayHello() {
//     console.log(
//       `Hi! My name is ${this.name} and I am ${this.role}. Tebe pizda na poebalu ${this.damage} damage`
//     );
//   }
// }
// const person1 = new Person("John", "WARRIOR", 500);
// const person2 = new Person("Eblan", "MAGE", 300);
// const person3 = new Person("Su4ka", "SHALAWA", 250205);
// person1.sayHello();
// person2.sayHello();
// person3.sayHello();

// наследование 1
// class Enemy {
//   constructor(power) {
//     this.power = power;
//   }

//   attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
// }

// class Alien extends Enemy {
//   constructor(name, phrase, power) {
//     super(power);
//     this.name = name;
//     this.phrase = phrase;
//     this.species = "alien";
//   }

//   fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
//   sayPhrase = () => console.log(this.phrase);
// }

// class Bug extends Enemy {
//   constructor(name, phrase) {
//     this.name = name;
//     this.phrase = phrase;
//     this.species = "bug";
//   }
//   hide = () => console.log("You can't catch me now!");
//   sayPhrase = () => console.log(this.phrase);
// }

// class Robot extends Enemy {
//   constructor(name, phrase) {
//     this.name = name;
//     this.phrase = phrase;
//     this.species = "robot";
//   }
//   transform = () => console.log("Optimus prime!");
//   sayPhrase = () => console.log(this.phrase);
// }

// const alien1 = new Alien("siska", "jopasosat");
// alien1.fly();
// alien1.sayPhrase();
// alien1.attack();

// инкапсуляция 2

// полиморфизм
