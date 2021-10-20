'use strict';
/*
//SCOPING IN PRACTICE
function calcAge (birthyear){
    const age = 2037 - birthyear;
    
    function printAge (){
        let output = `You are ${age}, born in ${birthyear}`;
        console.log(output);

        if (birthyear >= 1981 && birthyear <= 1996) {
            //creating new variable with same name as outer scopes variable
            const firstName = 'Steven'; 
            //reassigning out scopes variable
            output = 'New Output';
            var millenial = true; //function scoped so accessible outside of block
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b){ //function is only available within if block (when use strict is on)
                return a + b;
            }
        }
        console.log(millenial);
        //console.log(add(2, 3)); //function is only available within if block (when use strict is on)
    }
    printAge();
   return age;
}

const firstName = 'Erik';
calcAge(1986);

// console.log(age); no access to these since they are in the function
// printAge(); no access as this functino is defined in the calcAge function

//HOISTING EXAMPLES
//variables
console.log(me); //undefined
// console.log(job); //in TDZ
// console.log(year); //in TDZ
var me = 'Jonas';
let job = 'teacher';
const year = '1991';
//functions
// console.log(add(2, 3)); //can be called
// console.log(addExp(2, 3)); //in TDZ
// console.log(addArrow(2, 3)); //var is undefined, so in practice is trying to do undefined(2, 3)

function add(a, b) {
    return a + b;
}

const addExp = function (a, b){
    return a + b;
}

var addArrow = (a, b) => a + b;

//example - hoisting causes all products to be deleted because undefined is a falsy value (same as 0)
if (numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted!');
}

var x = 1; //will create a property of the global window object
let y = 2; // wont
const z = 3; // wont


//THIS Keyword
console.log(this);
//this in the global scope points to the window object

const calcAge = function(birthyear){
    console.log(2037 - birthyear);
    console.log(this);
    //this is undefined because we are in strict mode
}
calcAge(1991);

const calcAgeArrow = (birthyear) => {
    console.log(2037 - birthyear);
    console.log(this);
    //this is the parent of the function, and therefore points to the global window object
}
calcAgeArrow(1991);

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
        //this is the object jonas
    }
}
jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();


const f = jonas.calcAge;
f();

var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
        //solution 1
        // const self = this;  // self or that  
        // const isMillenial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };
        
        //solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();

    },
    greet: () => console.log(`Hey ${this.firstName}`)
};
jonas.greet();
jonas.calcAge();

//operator {} is not a code block, so this of arrow function is of the gloab scope (window object)


//arguments keyword
const addExp = function (a, b){
    console.log(arguments);
    return a + b;
}
addExp(2, 5);
addExp(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;  
} 

addArrow(2, 5);


//primatives vs objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,

};
const friend = me;
friend.age = 27;
console.log('Friend', friend)
console.log('Me', me);
*/

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage', jessica);
console.log('After Marriage', marriedJessica);

//marriedJessica = {}; not allowed because of const delcaration

//copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
}

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Marriage', jessica2);
console.log('After Marriage', jessicaCopy);
// only works on the first level (shallow copy), so if there is an object in an object the copy and the original will point to the same object
//deep clone





