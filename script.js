// // let name = prompt("what is your name?", "");
// // alert(`твое имя ${name}`);

// while (true) {
//   let operator = prompt("Введите (+, -, *, /) или 'Exit' для выхода:");

//   if (operator === "Exit") {
//     break;
//   }

//   let num1 = +prompt("Введите первое число:");
//   let num2 = +prompt("Введите второе число:");
//   let result;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       if (num2 !== 0) {
//         result = num1 / num2;
//       } else {
//         alert("Деление на ноль невозможно.");
//         continue;
//       }
//       break;
//     default:
//       alert("Недопустимый оператор.");
//       continue;
//   }

//   alert(`Результат: ${result}`);
// }
// function oddEven(n) {
//   return n % 2 == 1 ? "odd number" : "even number";
// }
function oldYoung(age) {
  return age < 16 ? "children" : age < 50 ? "young man" : "old man";
}
