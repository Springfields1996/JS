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
//     .map((user) => {
//       if (user.gender === gender) {
//         return user.name;
//       }
//     })
//     .filter((elem) => elem !== undefined);

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

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit',
// 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
