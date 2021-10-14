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
const jonas = [
    firstName,
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    friends
];

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

const friends = ['Micheal', "Steven", 'Peter'];
friends.push('Jay');
console.log(friends);

///objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends:['Micheal', "Steven", 'Peter']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//Challenge
//Jonas has 3 friends, and his best friend is called Michael
//create this sentence without hard coding any of the values (Jonas, 3, Micheal)

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends:['Micheal', "Steven", 'Peter'],
    hasDriversLicense: true,
    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    //}
    // calcAge: function(){
    //        return 2037 - this.birthYear;
    // }
    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    calcLicense: function() {
        this.result = this.hasDriversLicense ? 'a' : 'no';
        return this.result;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he as ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }

};


console.log(jonas.calcAge(1991));
console.log(jonas['calcAge'](1991));
console.log(jonas.calcAge(jonas.birthYear));

// console.log(calcAge()); //log object method using this

console.log(jonas.age);

//challenge
//"Jonas is a a 46-year old teacher, and he has a Drivers License."
console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and he as ${jonas.calcLicense()} drivers license.`);
console.log(jonas.getSummary());


for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}  `)
}


const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', "Steven", 'Peter']
];

const types = []; //empty array

//log every element of an array
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
}

//create a new array with types of each element
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    types.push(typeof jonas[i]); // or types[i] = typeof jonas [i];
    //important to use .push to add to the end of the array, vs .unshift which would add to the begining
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for ( let i = 0; i < years.length; i++){
    // let ageCalc = 2037 - years[i];
    // ages.push(ageCalc);
    ages.push(2037 - years[i])
}
console.log(ages);


//only want to print elements that are strings:
console.log('---ONLY STRINGS---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}
//want to exit loop after finding number:
console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}


//looping backwards
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', "Steven", 'Peter']
];

for (let i = jonas.length - 1; i >= 0; i-- ){
    console.log(jonas[i]);
}


for (let exercise = 1; exercise <= 3; exercise++){
    console.log(`-------Starting Exercise ${exercise} -------`)
    for(let rep = 1; rep <= 5; rep++){
        console.log(`Lifting weights repetition ${rep} 🏋️‍♀️ `)
    }
}
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
}

let rep = 1;
while(rep <= 10) {
    console.log(`WHILE Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}
*/

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6){
    console.log(`You rolled a ${dice}!`);
    dice = Math.trunc(Math.random() * 6) + 1;
}