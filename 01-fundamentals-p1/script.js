// let js = 'amazing';
// let num = 40 + 8 + 23 - 10;
// console.log(num);

// let firstName = 'Matilda';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

console.log(typeof true);
console.log(typeof 'Jonas');
console.log(typeof 23);

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;
const birthday = 'June 5th, 1986';
console.log(birthday);
birthday = '06/05/1986';
console.log(birthday);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2);

let x = 10;
x-= 5;
console.log(x);

console.log(ageJonas > ageSarah);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018)

// const averageAge = ageJonas + ageSarah / 2; //no () used
// console.log(ageJonas, ageSarah, averageAge);
const averageAge = (ageJonas + ageSarah) / 2; // () used
console.log(ageJonas, ageSarah, averageAge);

const firstName = "Jonas";
const job = "teacher";
const birthYear = "1991";
const year = 2037;

let jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

jonas = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonas);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);

const age = 15;

if (age >= 18){
    console.log('Sarah can start driving liscense 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years.`)
}
const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}
console.log(century);

//type conversion
const inputYear = "1991";
console.log(inputYear+18);
//result: 199118
console.log(Number(inputYear)+18);
//result: 2009

//type coercion
console.log("I'm " + 23 + ' years old');

console.log("23" + 10);
console.log("23" - 10);

let height; // or height = 0;
if (height) {
    console.log("Height is defined");
} else {
    console.log("Height is undefined");
}
//result is false because height has no assigned value
height = 1;
if (height) {
    console.log("Height is defined");
} else {
    console.log("Height is undefined");
}
//result is true

const age = 18;
if(age === 18) console.log("you just became an adult");

const hasDriversLicense = true;
const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive){
    //     console.log("Sarah can drive");
    // } else {
        //     console.log("someone else should drive");
        // }
        
        const isTired = true;
        const shouldDrive = hasDriversLicense && hasGoodVision;
        
        if (hasDriversLicense && hasGoodVision && !isTired){
            console.log("Sarah can drive");
        } else {
            console.log("someone else should drive");
        }
        


const day = 'monday';

switch(day) {
    case 'monday': //day === 'monday' uses strict equality 
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log("write code examples");
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('not a valid day');
} 

//without break; the code goes to the next day.
//same code as switch but written with if else format
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday'){
    console.log('prepare theory videos');
}else if (day === 'wednesday' || day === 'thursday'){
    console.log("write code examples");
}else if (day === 'friday'){
    console.log('record videos');
}else if (day === 'saturday' || day === 'sunday'){
    console.log('enjoy the weekend');
} else {
    console.log('not a valid day');
}
*/

const age = 20;
age >= 21 ? console.log('I can drink wine! 🍷') : console.log('I have to stick with water. 💧');


const drink = age >= 21 ? 'wine! 🍷' : 'water 💧';

//these two code blocks execute the same thing

// let drink;
// if (age >= 21){
//     drink = 'wine 🍷';
// } else{
//     drink = 'water 💧';
// }

console.log(drink);

console.log(`I like to drink ${age >= 21 ? 'wine 🍷' : "water 💧"}`);