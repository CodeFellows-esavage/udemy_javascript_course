'use strict';
// console.log("script.js is linked");
/*
function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Function Declaration
// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }
// can be simplified to:
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//function expression

const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

//arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// //arrow function multiple code lines
// const yearsUntilRetirement = birthYear => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return retirement; //need to write return line when there is more than one line of code being actioned
// }
// console.log(yearsUntilRetirement(1986));

//arrow function multiple code lines, multiple parameters
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //return retirement; //need to write return line when there is more than one line of code being actioned
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(1986, 'Erik'));
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//non array
const friend1 = "Micheal";
const friend2 = "Steve";
const friend3 = "Peter";
//array
const friends = ['Micheal', "Steven", 'Peter'];
console.log(friends);

//const years = new Array(1999, 2004, 2012);

console.log(friends[0]);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

//Exercise
const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge([years.lenth - 1])];
*/
const friends = ['Micheal', "Steven", 'Peter'];
friends.push('Jay');
console.log(friends);
