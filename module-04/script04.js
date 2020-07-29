"use strict";

// HOMEWORK, task 01

// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//         this.discount = value;
//     },
//     showOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost;
//         this.orders.push(order);
//     },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// HOMEWORK, task 02

// const inventory = {
//   items: ["Knife", "Gas mask"],

//   add(itemName) {
//     this.items.push(itemName);
//     console.log(`Adding ${itemName} to inventory`);
//   },

//   remove(itemName) {
//     this.items = this.items.filter((item) => item !== itemName);
//     console.log(`Removing ${itemName} from inventory`);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// const storeStatistic = {
//   coats: 0,
//   suits: 0,
//   shoes: 0,
// };

// const StoreSells = function (type, color, size, quantity) {
//   this.type = type;
//   this.color = color;
//   this.size = size;
//   this.quantity = quantity;

//   this.message = function () {
//     console.log(
//       `Вы заказали ${this.type}, цвет ${this.color}, размер ${this.size}, в количестве ${this.quantity}`
//     );
//   };
//   this.counter = function () {
//     if (this.type === "coat") {
//       storeStatistic.coats += this.quantity;
//     } else if (this.type === "suit") {
//       storeStatistic.suits += this.quantity;
//     } else if (this.type === "shoes") {
//       storeStatistic.shoes += this.quantity;
//     } else {
//       console.log("К сожалению, данного товара не существует");
//     }
//   };
// };

// let coats = new StoreSells("coat", "orange", "L", 2);
// console.log(coats());
// console.log(storeStatistic);

// message.bind(StoreSells)("coat", "blue", "s");

// const ShowMeTheHotel = function (name, capacity, stars) {
//     this.name = name;
//     this.capacity = capacity;
//     this.stars = stars;
//     this.greet = function() {
//         console.log(`Hello at ${this.name}`)
//     }
//     this.order = function(n) {
// if(n<this.capacity) {
//     this.capacity -= n;
//     console.log(`you booked ${n} apartments at ${this.name}`)

// } else( console.log('we have no appartments for you'));
//     }
// }

// let Hayyat = new ShowMeTheHotel('Hayat', 500, 5);
// let Hilton = new ShowMeTheHotel('Hilton', 200, 5)

// Hayyat.greet();
// Hayyat.order(1);
// Hayyat.order(50);

// Hilton.greet();
// Hilton.order(10);

// console.log(Hayyat)

const Manager = function (name = "manager", sales = 0) {
  this.name = name;
  this.sales = sales;

  this.sale = function (product) {
    this.sales += 1;
    console.log(`Manager ${this.name} sold ${product}`);
  };
};

const danny = new Manager("Danny");
danny.sale("phone");
console.log(danny.sales);
