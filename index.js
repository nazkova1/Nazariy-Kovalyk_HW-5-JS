//  Написати розв’язок нижче описаного завдання за допомогою конструкції switch:
// 1.	Користувач вводить число в prompt
// 2.	Після введення числа вистрибує алерт з оголошенням пори року до якої відноситься число (номер місяця) що ввів користувач.
// 3.	Якщо число не входить в діапазон від 1 до 12 тоді виводить що це неможливо.

let number = parseInt(prompt('Enter your number from 1 to 12'));
switch (number) {
    case 12:
    case 1:
    case 2:
        alert("It's a winter");
        break;
    case 3:
    case 4:
    case 5:
        alert('Spring is coming');
        break;
    case 6:
    case 7:
    case 8:
        alert('Summer time');
        break;
    case 9:
    case 10:
    case 11:
        alert("It's cold season, autumn");
        break;
    default:
        alert('Your number is wrong');
        break;
}

// 2. Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1.	Створити функцію яка буде приймати одне число.
// 2.	В середині функції перевіряємо чи це число є простим.
// 3.	Після перевірки виводимо повідомлення в console.log().


let n = parseInt(prompt('Enter number'))

function isSimple(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isSimple(n));

// 3. Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1.	Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// 2.	Кількість параметрів у функції може бути від 2х і більше.
// 3.	Забороняється використовувати Math.max().
// Приклад роботи:
// 1.	max(5,-2) – має повернути 5.
// 2.	max(5,-2, 30, 6) – має повернути 30

const arr = [5,-2, 30, 6];

let largest = arr.reduce(function(x,y) {
    return (x > y) ? x : y;
});

console.log(largest);