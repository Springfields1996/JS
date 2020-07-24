"use strict";

// HOMEWORK, task 01

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// (user.mood = "happy"), (user.hobby = "skydiving"), (user.premium = !user.premium); //or user.premium = false;

// for (let item of Object.keys(user)) {
//   console.log(item, ":", user[item]);
// }

// HOMEWORK, task 02

// const countProps = (obj) => Object.values(obj).length;

// console.log(countProps({ name: "Mango", age: 2 }));

// HOMEWORK, task 03

// const findBestEmployee = function (employees) {
//   const arrEmployee = Object.values(employees);
//   const arrNames = Object.keys(employees);
//   const indexOfBiggestNum = arrEmployee.indexOf(Math.max(...arrEmployee));
//   return arrNames[indexOfBiggestNum];
// };

//или, как вариант, стрелочная функция и без переменных

// const findBestEmployee = (employees) =>
//   Object.keys(employees)[
//     Object.values(employees).indexOf(Math.max(...Object.values(employees)))
//   ];

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// );

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// );

// HOMEWORK, task 04

// const countTotalSalary = function (employees) {
//   let total = 0;
//   for (let sum in employees) {
//     total += employees[sum];
//   }
//   return total;
// };

// console.log(countTotalSalary({})); // 0
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// );

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// );

// HOMEWORK, task 05

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, props) {
//   let newArray = [];
//   for (let elem of arr) {
//     elem[props] && newArray.push(elem[props]);
//   }
//   return newArray;
// };

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

// HOMEWORK, task 06

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProduсts, productName) {
//   let total = 0;
//   for (let elem of allProduсts) {
//     if (Object.values(elem).includes(productName)) {
//       total = elem.price * elem.quantity;
//     }
//   }
//   return total;
// };

// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800

// HOMEWORK, task 07

// Еле сделал, уверен что половину задач выполнил неправильно, но они вроде хоть как-то работают, изначально собирался
//просто попробовать свои силы в этом, не собирался доделывать, был уверен что работать это не будет, но вроде как-то
//работает. Буду рад комментариям насчёт того, как лучше оптимизировать код в некоторых местах, и относительно того,
//какое решение было бы проще.

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const { DEPOSIT, WITHDRAW } = Transaction;

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type, id) {
//     this.transactions.push({ amount, type, id });
//     if (type === "deposit") {
//       return this.deposit(amount);
//     } else {
//       return this.withdraw(amount);
//     }
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     return (this.balance += amount);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       alert("На счету недостаточно средств");
//       return;
//     }
//     return (this.balance -= amount);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (let elem of this.transactions) {
//       for (let el in elem) {
//         if (elem[el] && id) {
//           return elem;
//         }
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (let array of this.transactions) {
//       for (let arr in array) {
//         if (array[arr] === type) {
//           total += array.amount;
//         }
//       }
//     }
//     return total;
//   },
// };

// account.createTransaction(250, "deposit", 1);
// account.createTransaction(280, "deposit", 2);
// account.createTransaction(50, "deposit", 3);
// account.createTransaction(200, "withdraw", 4);
// account.createTransaction(100, "withdraw", 5);
// account.createTransaction(15, "withdraw", 6);

// console.log(account.getBalance());
// console.log(account.getTransactionDetails(1));
// console.log(account.getTransactionTotal("deposit"));

