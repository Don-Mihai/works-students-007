function countDown(number) {

    // вывод в консоль
    console.log(number);

    // уменьшаем значение на один
    const newNumber = number - 1; // 3

    // условие выхода
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);

let number = 4

while(number > 0) {
    console.log(number);
    number--;
}
