//завдання 1
let a = +prompt("введіть перше число :");
let b = +prompt("введіть друге число :");

if (a > b) {
    alert("більше число: " + a);
} else if (b > a) {
    alert("більше число: " + b);
} else {
    alert("числа рівні");
}
//завдання 2
let num1 = +prompt("введіть перше число :");
let num2 = +prompt("введіть друге число :");
let op = prompt("Введіть операцію (+, -, *, /) :");
let result;
switch (op) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 === 0) {
            result = "помилка ділення на 0";
        } else {
            result = num1 / num2;
        }
        break;
    default:
        result = "невідома операція";
}
alert("результат : " + result);
//завдання 3
let x = +prompt("введіть число :");
let mod;
if (x < 0) {
    mod = -x;
} else {
    mod = x;
}
alert("модуль числа : " + mod);
//завдання 4
let year = +prompt("введіть рік :");
let days = (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? 366 : 365;
alert("кількість днів у році: " + days);
