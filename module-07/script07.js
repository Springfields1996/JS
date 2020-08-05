// HOMEWORK, task 01

// const categories = document.querySelectorAll("#categories .item");
// const showQuantityOf = (category) =>
//   console.log(`В списке ${category.length} категории.`);
// showQuantityOf(categories);

// const showSubcategories = categories.forEach((element) => {
//   console.log(`Категория: ${element.children[0].textContent}.
// Количество элементов: ${element.children[1].children.length}`);
// });

// HOMEWORK, task 02

// const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];
// const list = document.querySelector("#ingredients");
// const listOfIngredients = ingredients.reduce((acc, ingredient) => {
//   const list = document.createElement("li");
//   list.textContent = `${ingredient}`;
//   acc.push(list);
//   return acc;
// }, []);
// list.append(...listOfIngredients);
// console.log(listOfIngredients);

// HOMEWORK, task 03

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];
// let photoLinks;
// const gallery = document.querySelector("#gallery");
// gallery.className = "photos";
// const photos = images.forEach((elem) => {
//   photoLinks += `<li><img class = 'photo' src = '${elem.url}'
//   alt = '${elem.alt}'></li>`;
// });
// console.log(photoLinks);
// gallery.insertAdjacentHTML("afterbegin", photoLinks);

// HOMEWORK, task 04

// const div = document.querySelector("#counter");
// const counter = document.querySelector("#value");
// const decrementBtn = div.firstElementChild;
// const incrementBtn = div.lastElementChild;
// let counterValue = Number(counter.textContent);

// function increment() {
//   counter.textContent = ++counterValue;
// }

// function decrement() {
//   counter.textContent = --counterValue
// };

// incrementBtn.addEventListener("click", increment);
// decrementBtn.addEventListener("click", decrement);

// HOMEWORK, task 05

// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");
// input.addEventListener("input", (elem) =>
//   elem.target.value.length !== 0
//     ? (output.textContent = elem.target.value)
//     : (output.textContent = "незнакомец")
// );

// HOMEWORK, task 06

// const input = document.querySelector("#validation-input");

// const checkText = function (elem) {
//   if (
//     elem.target.value.length > 0 &&
//     elem.target.value.length < this.getAttribute("data-length")
//   ) {
//     this.classList.add("invalid");
//     this.classList.remove("valid");
//   } else if (elem.target.value.length >= this.getAttribute("data-length")) {
//     this.classList.add("valid");
//     this.classList.remove("invalid");
//   } else {
//     this.removeAttribute("class");
//   }
// };

// input.addEventListener("input", checkText);

// HOMEWORK, task 07

// const input = document.querySelector("#font-size-control");

// const text = document.querySelector("#text");
// const result = "0";

// input.addEventListener(
//   "input",
//   (element) => (text.style.fontSize = `${element.target.value}px`)
// );
