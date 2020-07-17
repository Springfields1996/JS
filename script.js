"use strict";

//homework, task 01

const name = "Генератор защитного поля";
let price = 1000;
console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

price = 2000;
console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

//homework, task 02

const total = 100;
const ordered = 50;

if (total < ordered) {
  console.log("На складе недостаточно товаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}

//homework, task 03

const ADMIN_PASSWORD = "qwerty09";
let message = prompt("Password");

if (message === null) {
  message = "Отменено пользователем!";
} else if (message === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);

//homework, task 04

let credits = 23580;
const pricePerDroid = 3000;
const buy = prompt("Сколько дроидов вы хотите купить?");
let order = Number(buy) * pricePerDroid;
let message;

if (buy === null || buy === "") {
  message = "Отменено пользователем!";
} else if (isNaN(+buy)) {
  message = "Введите число! ";
} else if (credits >= order) {
  message = `Вы купили ${buy} дроидов, на счету осталось ${(credits -= order)} кредитов.`;
} else {
  message = `Недостаточно средств на счету! Вам недостаёт ${order - credits} кредитов`;
}
alert(message);

//homework, task 05
let price;
let country = prompt(
  "Укажите страну, в которую необходимо доставить товар"
).toLowerCase();
let message;
country = country.charAt(0).toUpperCase() + country.substring(1);

switch (country) {
  case "Китай":
    price = 80;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  case "Чили":
    price = 250;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  case "Австралия":
    price = 170;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  case "Индия":
    price = 80;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  case "Ямайка":
    price = 120;
    message = `Доставка на ${country} будет стоить ${price} кредитов`;
    break;

  default:
    message = "В вашей стране доставка не доступна";
}
alert(message);

//homework, task 06

let input;
let total = 0;

do {
  input = prompt("Введите число");
  !isNaN(input) ? (total += +input) : alert("Введенным символом должно быть число");
} while (input !== null);
alert(total);
