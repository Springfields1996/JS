"use strict";

// HOMEWORK, task 01

//всё и так понятно))
// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// HOMEWORK, task 02
//тоже всё очень просто :)
// const calculateEngravingPrice = (message, pricePerWord) =>
//   message.split(" ").length * pricePerWord;

// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         10,
//     ),
// );

// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         20,
//     ),
// );

// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// );

// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// );

// HOMEWORK, task 03

//по-моему, вполне изящное решение :)
// const findLongestWord = function (string) {
//   return string.split(" ").sort((a, b) => b.length - a.length)[0];
// };
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("May the force be with you"));

// HOMEWORK, task 04

// const formatString = (string) =>
//   string.length > 40 ? string.slice(0, 40) + "..." : string;

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

// HOMEWORK, task 05

// const checkForSpam = (message) => {
//   message = message.toLowerCase();
//   return message.includes("spam") || message.includes("sale");
// };

// console.log(checkForSpam("Get best sale offers now!"));

// HOMEWORK, task 06

// let input;
// const numbers = [];
// let total = 0;

// //получаем данные от пользователя и проверяем их тип,
// //если тип - число, то записываем его в переменную,
// //до тех пор, пока не пользователь не отменит
// do {
//   input = prompt("Введите число");
//   if (isNaN(input)) {
//     alert("Было введено не число, попробуй еще раз. Ты сможешь, мы в тебя верим!");
//   } else if (input !== null) {
//     numbers.push(input);
//   }
// } while (input !== null);

// // перебираем элементы массива и складываем их
// for (let number of numbers) total += +number;

// //проверяем, не пустой ли массив, и если нет, то выводим результат
// if (numbers.length) {
//   console.log(`Общая сумма чисел равна ${total}`);
// } else {
//   console.log("А вот нужно было число ввести, а не сразу отмену тыкать :)");
// }

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

