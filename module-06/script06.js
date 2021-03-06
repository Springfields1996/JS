import users from "./users.js";

// HOMEWORK, task 01

// const getUserNames = (users) => users.map((user) => user.name);

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// HOMEWORK, task 02

// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);

// console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// HOMEWORK, task 03

// const getUsersWithGender = (users, gender) =>
//   users
//     .filter((user) => {
//       if (user.gender === gender) {
//         return user.name;
//       }
//     })
//     .map((user) => user.name);

// console.log(getUsersWithGender(users, "male"));

// HOMEWORK, task 04
// const getInactiveUsers = (users) => users.filter((user) => !user.isActive);

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// HOMEWORK, task 05

// const getUserWithEmail = (users, email) => users.find((user) => user.email === email);

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// HOMEWORK, task 06

// const getUsersWithAge = (users, min, max) =>
//   users.filter((user) => user.age > min && user.age < max);

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// HOMEWORK, task 07

// const calculateTotalBalance = (users) =>
//   users.reduce((total, user) => (user.balance += total), 0);

// console.log(calculateTotalBalance(users)); // 20916

// HOMEWORK, task 08

// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName)).map((user) => user.name);

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// HOMEWORK, task 09

// const getNamesSortedByFriendsCount = (users) =>
//   users.sort((a, b) => a.friends.length - b.friends.length).map((user) => user.name);
// console.log(getNamesSortedByFriendsCount(users));

// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// HOMEWORK, task 10

// const getSortedUniqueSkills = (users) =>
//   users
//     .flatMap((user) => user.skills)
//     .reduce((unique, skill) => {
//       if (!unique.includes(skill)) {
//         unique.push(skill);
//       }
//       return unique;
//     }, [])
//     .sort();

// // variant #2
// const getSortedUniqueSkills = (users) =>
//   users
//     .flatMap((user) => user.skills)
//     .filter((skill) => (!users.includes(skill) ? users.push(skill) : "").sort());

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit',
// 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// let body = document.querySelector("body");
// let circle = document.createElement("div");
// body.append(circle);

// circle.style.width = "50px";
// circle.style.height = "50px";
// circle.style.backgroundColor = "tomato";
// circle.style.borderRadius = "50%";
// circle.style.margin = "0 auto";

// let url = "https://pokeapi.co/api/v2/pokemon/1/";

// (async () => {
//   let response = await fetch(url);
//   let pokemon = await response.json();

//   let card = document.createElement("div");
//   body.append(card);

//   console.log(pokemon);

//   card.style.width = "250px";
//   card.style.height = "650px";
//   card.style.backgroundColor = "grey";
//   card.style.margin = "0 auto";
//   let header = document.createElement("h2");
//   card.append(header);
//   header.textContent = pokemon.name;
//   header.style.textAlign = "center";

//   let img = document.createElement("img");
//   card.append(img);
//   img.style.display = "block";
//   img.style.margin = "0 auto";
//   img.style.width = "200px";
//   img.style.height = "auto";

//   img.setAttribute("src", pokemon.sprites.front_default);

//   pokemon.moves.forEach((elem) => console.log(elem.move.name));
// })();
