"use strict";

// HOMEWORK, task 01

// const logItems = function (array) {
//   let arrayLength = array.length;
//   for (let i = 0; i < arrayLength; i += 1) {
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
// let text = [];
// const findLongestWord = (string) =>
//   string.split(" ").sort((a, b) => b.length - a.length)[0];

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

//                                    ДОМАШКА ЗАКАНЧИВАЕТСЯ ЗДЕСЬ
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

// const ask = (question, yes, no) => (confirm(question) ? yes() : no());
// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

//

// const repeat = (str = "", n = 2) => str.repeat(n);

// // console.log(repeat("Mama", 4));

// const average = (...args) => {
//   let total = 0;
//   for (let number of args) {
//     total += number;
//   }
//   return total / args.length;
// };

// console.log(average(1, 2, 3));

// const checkTicket = (number) => {
//   let total1 = 0;
//   let total2 = 0;
//   let firstThree = number.slice(0, 3);
//   let lastThree = number.slice(3);
//   for (number of firstThree) {
//     total1 += number;
//   }
//   for (number of lastThree) {
//     total2 += number;
//   }
//   return total1 === total2
//     ? "У вас счастливый билет"
//     : "К сожалению вы не выиграли, попробуйте еще раз";
// };

// console.log(checkTicket([1, 3, 5, 5, 3, 1]));

// const computeOrizurus = (total) => {
//   let array = [];
//   array.push(Math.round(total / 6), Math.round((total / 6) * 2));
//   return `Мальчики сделали по ${array[0]} самолётика, а Катя - целых ${array[1]}`;
// };

// console.log(computeOrizurus(28));

// const getPower = (n) => {
//   let i = 0;
//   while (Math.pow(2, i) <= n) {
//     i++;
//     if (Math.pow(2, i) === n) {
//         return i
//     };
//   }
// };

// const getPower = (n) => {
//   for (let i = 0; i < n; i++) {
//       if (Math.pow(2, i) === n) {
//           return i
//       };
//   }
// };
// console.log(getPower(256));

// const getPower = (n) => {
//   for (let j = 1; n > 1; j++) {
//     n /= 2;
//       if (n === 1) {
//           return j
//       };
//   }
// };
// console.log(getPower(256));

// function getLargestWord(string) {
//   const words = string.split(" ");
//   let largestWord = words[0];

//   for (const word of words) if (word.length > largestWord.length) largestWord = word;

//   return largestWord;
// }

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { x: 5, j: 10, ...a, z: 15, ...b };

// console.log(c); // {x: 0, j: 10, y: 2, z: 3}

// function foo(arr, prop) {
//   const newArr = [];
//   for (let elem of arr) {
//     elem[prop] !== undefined ? newArr.push(elem[prop]) : "";
//   }
//   return newArr;
// }

// const products = [
//   { name: undefined, price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(foo(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(foo(products, "quantity")); // [4, 3, 7, 2]

// console.log(foo(products, "category")); // []

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   for (const product of allProdcuts) {
//     if (product.name == productName) return product.price * product.quantity;
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800

