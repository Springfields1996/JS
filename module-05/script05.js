"use strict";

// HOMEWORK, task 01

// const Account = function (object) {
//   this.login = object.login;
//   this.email = object.email;
// };

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, email: ${this.email}`);
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// HOMEWORK, task 02

// class User {
//   constructor({ name, age, followers }) {
//     typeof name === "string" ? (this.name = name) : (this.name = "?");
//     typeof age === "number" ? (this.age = age) : (this.age = "?");
//     typeof followers === "number" ? (this.followers = followers) : (this.followers = "?");
//   }
//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//   }
// }

// const mango = new User({
//   name: "Mango",
//   age: 15,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: "Poly",
//   age: 12,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// HOMEWORK, task 03

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     for (let elem of this.items) {
//       if (elem === item) {
//         items.splice(this.items.indexOf(elem), 1);
//       }
//     }
//   }
// }

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор",
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// HOMEWORK, task 04

// class StringBuilder {
//   constructor(string) {
//     if (typeof string === "string") {
//       this._value = string;
//     }
//   }
//   get value() {
//     return this._value;
//   }

//   append(str) {
//     this._value += str;
//   }

//   prepend(str) {
//     this._value = str + this._value;
//   }

//   pad(str) {
//     this._value = str.concat(this._value) + str;
//   }
// }

// const builder = new StringBuilder(".");
// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

// HOMEWORK, task 05

// class Car {
//   static getSpecs(car) {
//     console.log(
//       `Car
//       Max speed: ${car.maxSpeed},
//       Speed: ${car.speed}, 
//       Is on: ${car.isOn}, 
//       Distance: ${car.distance}, 
//       Price: ${car.price}`
//     );
//   }
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor(car) {
//     this.maxSpeed = car.maxSpeed;
//     this._price = car.price;
//     this.speed = 0;
//     this.isOn = false;
//     this.distance = 0;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(value) {
//     return (this._price = value);
//   }

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this.isOn = true;
//   }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     if (this.speed + value <= this.maxSpeed) {
//       this.speed += value;
//     }
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     if (this.speed - value > 0) {
//       this.speed -= value;
//     }
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if (this.isOn) {
//       this.distance = this.distance + hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000



let a;

a = "*****************************************************************************************************************
  ********************************************END-OF-HOMEWORK******************************************************
    ******************************************************************************************************************";

// 1) Даны два массива: ['a', 'b', 'c'] и[1, 2, 3].Объедините их вместе.
// 2) Дан массив['a', 'b', 'c'].Добавьте ему в конец элементы 1, 2, 3.
// 3) Дан массив[1, 2, 3].Сделайте из него массив[3, 2, 1].
// 4) Дан массив[1, 2, 3, 4, 5].С помощью метода slice запишите в новый элементы[1, 2, 3].
// 5) Дан массив[1, 2, 3, 4, 5].С помощью метода splice преобразуйте массив в[1, 4, 5].
// const a = [1, 2, 3, 4, 5];

// const arr1 = ["a", "b", "c"];
// const arr2 = [1, 2, 3];

// const newArr = arr1.concat(arr2);
// console.log(newArr);

// const arr1 = ["a", "b", "c"];

// arr1.push(1, 2, 3);
// console.log(arr1);

// const arr1 = [1, 2, 3];
// const arr2 = arr1.reverse();
// console.log(arr2);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.slice(0, 3);
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// // 1) Вибираємо випадкове число (від 0 до довжини масива);
// const a = [1, 2, 3, 4, 5];
// const random = Math.floor(Math.random() * a.length);
// console.log(a[random]);

// 2)// -) Записуємо в змінну строку з промта
// -) Зробити строку масивом
// -) Скопіювати масив в нову змінну
// -) Реверсимо масив
// -) З масивів робимо строки

// const arr = prompt("Введите число");
// const newArr = arr.split(" ").reverse().join(" ");
// console.log(newArr);

// const MAIN_ITEMS = ["камень", "ножницы", "бумага"];
// let userItem = prompt(
//   "Чтобы сыграть с компьютером в игру *Камень, ножницы, бумага* введи выбранный тобою предмет, и нажми ОК"
// ).toLowerCase();
// let total = 0;
// let random;
// do {
//   random = Math.floor(Math.random() * MAIN_ITEMS.length);
//   if (MAIN_ITEMS.includes(userItem)) {
//     if (userItem === MAIN_ITEMS[random]) {
//       userItem = prompt(
//         `Ничья! Ты выбрал ${userItem}, и компьютер также выбрал ${MAIN_ITEMS[random]}.
//         Твой счёт не изменился, и составляет ${total} очков. Играешь ещё?`
//       ).toLowerCase();
//     } else if (
//       (userItem === "камень" && MAIN_ITEMS[random] === "ножницы") ||
//       (userItem === "ножницы" && MAIN_ITEMS[random] === "бумага") ||
//       (userItem === "бумага" && MAIN_ITEMS[random] === "камень")
//     ) {
//       total += 1;
//       userItem = prompt(
//         `Ты выиграл! Ты выбрал ${userItem}, компьютер выбрал ${MAIN_ITEMS[random]}, а ${userItem}, как известно, побеждает ${MAIN_ITEMS[random]}.
//         В этой беспощадной схватке ты зарабатываешь 1 очко, и твой счёт тепер равняется ${total}. Попробуешь повторить свой успех? `
//       ).toLowerCase();
//     } else {
//       total -= 1;
//       userItem = prompt(
//         `Ты проиграл! Ты выбрал ${userItem}, компьютер выбрал ${MAIN_ITEMS[random]}, а ${userItem}, как известно, не может победить ${MAIN_ITEMS[random]}.
//         Твой счёт уменьшается на 1 балл и теперь равняется ${total}.
//         Восстание машин не за горами, сегодня компьютер отбирает у тебя 1 очко, а что он отберет у тебя завтра? Работу? Семью?
//         Попробуешь взять реванш?`
//       ).toLowerCase();
//     }
//   } else {
//     userItem = prompt(
//       "Чтобы продолжить, введи нужное слово и нажми ОК. Это может быть либо *камень*, либо *ножницы*, либо *бумага*"
//     ).toLowerCase();
//   }
// } while (userItem !== null);

// let creaturesArr = [];
// class Creature {
//   constructor(type, planet, status, sex) {
//     this.type = type;
//     this.planet = planet;
//     this.status = status;
//     this.sex = sex;
//   }
//   get show() {
//     return `This ${this.type} is from ${this.planet} and has ${this.status} status`;
//   }
//   set changePlanet(str) {
//     this.planet = str;
//     return this.planet;
//   }
//   static intro() {
//     console.log("There is a billions types of creatures all around the world!");
//   }
//   static checkCreatures() {
//     console.log(creaturesArr);
//   }
// }
// class Human extends Creature {
//   constructor(name, type, planet, status, sex, nationality) {
//     super(type, planet, status, sex);
//     this.name = name;
//     this.nationality = nationality;
//   }
//   addToCreaturesList() {
//     creaturesArr.push({
//       name: this.name,
//       planet: this.planet,
//       nationlity: this.nationality,
//     });
//   }
// }

// class Animal extends Creature {
//   constructor(name, type, planet, status, area, pawsQuantity) {
//     super(type, planet, status);
//     this.name = name;
//     this.area = area;
//     this.pawsQuantity = pawsQuantity;
//   }
//   addToCreaturesList() {
//     creaturesArr.push({
//       name: this.name,
//       type: this.type,
//       planet: this.planet,
//       area: this.area,
//       pawsQuantity: this.pawsQuantity,
//     });
//   }
// }

// class Alien extends Creature {
//   constructor(name, type, planet, status, gender, limbsQuantity, headsQuantity) {
//     super(type, planet, status);
//     this.name = name;
//     this.gender = gender;
//     this.limbsQuantity = limbsQuantity;
//     this.headsQuantity = headsQuantity;
//   }

//   addToCreaturesList = function () {
//     creaturesArr.push({
//       name: this.name,
//       type: this.type,
//       planet: this.planet,
//       limbsQuantity: this.limbsQuantity,
//       headsQuantity: this.pawsQuantity,
//     });
//   };
// }

// let shrewmouse = new Animal("shrewmouse", "animal", "Earth", "3D", "underground", 4);
// let elephant = new Animal("elephant", "animal", "Earth", "3D", "jungle", 4);
// shrewmouse.addToCreaturesList();
// elephant.addToCreaturesList();

// Creature.checkCreatures();
// console.log(shrewmouse);

// let Adam = new Human("Adam", "human", "Mars", "three-dimensional", "male", "Ukrainian");
// Adam.addToCreaturesList();
// let Eva = new Human("Eva", "human", "Venus", "three-dimensional", "female", "Ukrainian");
// Eva.addToCreaturesList();
// Creature.checkCreatures();

// ________________________TASK#1// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства:
//  name (имя, наследуется от User), surname (фамилия, наследуется от User),
//  year (год поступления в вуз).
//  Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.// Вот так должен выглядеть класс User, от которого наследуется наш Student:

// let yearNow = new Date().getFullYear();
// class Pupil {
//   constructor(name, surname) {
//     this._name = name;
//     this._surname = surname;
//   }

//   get name() {
//     return this._name;
//   }

//   get surname() {
//     return this._surname;
//   }

//   getFullName() {
//     return `${this._name} ${this._surname}`;
//   }
// }

// class Student extends Pupil {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this._year = year;
//   }

//   get year() {
//     return this._year;
//   }

//   getCourse() {
//     return yearNow - this._year;
//   }
// }

// let student = new Student("Иван", "Иванов", 2017);
// console.log(student.name); //выведет 'Иван'
// console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.year); //выведет 2017
// console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2020
// student.getCourse();
