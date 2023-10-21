let first = prompt("первое число");
first = Number(first);

let second = prompt("второе число");
second = Number(second);

let operation = prompt("знак + - * /");

switch (operation) {
  case "+":
    console.log("Ваш ответ: ", first + second);
    break;
  case "-":
    console.log("Ваш ответ: ", first - second);
    break;
  case "*":
    console.log("Ваш ответ: ", first * second);
    break;
  case "/":
    console.log("Ваш ответ: ", first / second);
    break;

  default:
    break;
}
