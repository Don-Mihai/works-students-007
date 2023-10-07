let a = prompt('Введите первое число');
a = Number(a)
let b = prompt('Введите второе число');
b = Number(b)

let operator = prompt('оператор (+, -, *, /, **)');

switch (operator) {
    case '+':
        alert(a + b);
        break;
    case '-':
        alert(a - b);
        break;
    case '*':
        alert(a * b);
        break;
    case '/':
        alert(a / b);
        break;
    case '**':
        alert(a ** b);

    default:
        break;
}
