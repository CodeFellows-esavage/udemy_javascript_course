# udemy_javascript_course
Repository containing notes and all projects associated with the  complete-javascript-course on udemy.

## Table of Contents
- [JavaScript Fundamentals Part 1](#JavaScript-Fundamentals-Part-1)
- [JavaScript Fundamentals Part 2](#JavaScript-Fundamentals-Part-2)
- [Developer Skills & Editor Setup](#Developer-Skills-&-Editor-Setup)
- [HTML and CSS](#HTML-&-CSS)

# JavaScript Fundamentals Part 1

## What is JavaScript

JavaScript is a high-level, object-oriented, multi-paradigm (a programming language that supports both procedural and object-oriented programming philosophies) programming language.
- programming language, tool that allows you to control computer
- high-level -abstractions over small details (we don't have to worry about memory management)
- object oriented - mostly based on objects for storing most kinds of data
- mutli-paradigm - you can use different programming styles

Role of Javascript in web development: programming language of the internet, and make content dynamic (building web application).

Modern Frameworks/Libraries for developing in Javascript (100% based on Javascript):
- React
- Angular
- Vue

Javascript can run outside of the web browser. Example: Node.js allows Javascript to run on the server.

Native mobile application development
- React Native
- Ionic

Native desktop application development:
- Electron

Javascript Versions
 - ES2015 (released in 2015) was the biggest update to Javascrip language ever, aka ES6
 - yearly releases since 2015
 - ES = ECMAScript
 - ES6 through ES11 (2015 - 2020) are known as modern JavaScript
   - really through present date

## Inserting Your Script
Where to locate JavaScript `<script>` callout: [Stack Overflow](https://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup)
    - Summary: if you place it in the head, HTML stops loading while the website pulls the JavaScript file. Placed at the bottom of the `<body>` results in the full website being loaded before fetching the JavaScript file, which can lead to slow website loading times. Ideally you place the `<script>` in the head with using either an `async` or `defer` attribute.
  
    - `<script src="path/to/script1.js" async></script>`
    - `<script src="path/to/script1.js" defer></script>`

## Values and Variables
Value - a piece of data (most fundamental programming unit), can be a name or a number (smallest unit of information in JavaScript)
- can be stored in a variable by declaration
- are either an OBJECT or a PRIMITIVE value
  - OBJECT: `let me = { name: 'Jonas'};`
  - PRIMITVE: `let firstName = 'Jonas';`
- 

Variables - a "box" where you can store a value.

Naming Convention:
- camelCase - first word is lower case, each additional word is capitalized
- cannot start a variable name with a number `let 3years = 3;` would throw an error
- can only contain numbers, letters, $, and _
- cannot use reserved javascript keyword, for example `new`, `function`, `name`,  etc
- do not start with uppercase word (convention because it is reserved for object oriented programming)
- constants are written in ALL UPPERCASE example: `PI = 3.1415`
- you should be able to understand the expected data held in the variable from the variable name
  - example pairs: `myFirstJob` vs `job1`, `myCurrentJob` vs `job2`

## PRIMITIVE Datatypes (7)
1. Number: Floating point numbers used for decimals and intergers (always considers the decimal even when not displayed) ex: `let age = 23;`
2. String: Sequence of characters used for text always contained within quotes `''` or `""` ex: `let firstName = 'Jonas';`
3. Boolean: Logical tupe that can only be `true` or `false`, used for making decisions with code ex: `let fullAge = true;`
4. Undefined: Value taken by a variable that is not yet defined (`empty value`) ex: `let childeren;`
5. Null: Also means `empty value`
6. Symbol (ES2015): Value that is unique and cannot be changed
7. BigInt(ES2020)): Larger integers than the Number type can hold

JavaScript has a feature called dynamic typing, which means JavaScript automatically selects the data type of the value when stored in a variable.
- use `typeof` to determine the assigned typing of a value ex: `console.log(typeof true);`

## Let, Const and var
- Let (ES6): Used to declare variables that can change later (during execution of our program)
  - Changing the assignment value of a variable after it is declared is referred to reassignment OR mutation (mutating a variable).
  - useful for declaring empty variables at the beging of a script that are later reassigned values later on in the program
- Const (ES6): Use this variable declaration when the value of the variable will not change at any point. Infact JavaScript will throw and error if you try to reassign the value after it has been declared.
  - 
  - ```
    const birthday = 'June 5th, 1986';
    console.log(birthday);
    birthday = '06/05/1986';
    console.log(birthday);
    ```
  - the code above will result in `Uncaught TypeError: Assignment to constant variable.`
  - cannot declare empty const variables as you cannot change them later on `const job;`, as this will result in `Uncaught SyntaxError: Missing intializer in const declaration`.
- Var (oldway): looks similar to `let` (can be reassigned), avoid using.

**Best practice:** Always use `const` by default and only use `let` when you are absolutly sure the variable value needs to change at somepoint. Avoid using `var`.
- minimizing variables that can mutate reduces opportunity for bugs

## Basic Operators
Operator allows you to transform or combine values
- mathmatical
  - addition `+`
  - subtraction `-`
  - mutiplication `*`
  - division `/`
  - exponents `**`
- comparison (used to produce boolean values)
  - greater than `>`
  - less than `<`
  - greater than or equal to `>=`
  - less than or equal to `<=`
- logical
- assignment
  - equals sign `=`
  - increment `++` add one
  - decrement `--` subtract one
  - `+=`, -= `*=`, `/=` x plus, minus, times, divided by x and the value

## Operator Precedence
[Mozilla Operator Precedence Resource](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

JavaScript has 21 difference precedences. A higher precedence number means that operation is prioritized in JavaScript (21 highest priority, 1 lowest priority). In addition to each precedence number, some operations are read `left to right` such as addition and subtraction, while other are read `right to left` such as assignment operators.
- `left to right`: 25 - 10 - 5 will result in 10 as the operations are performed left to right
- `right to left`: the result below logs 10, as JavaScript performs the mathmatical operators first, then when complete assigns the result to x.
  ```
    let x;
    x = 25 - 10 - 5
    console.log(x)
  ```

## Strings and Template Literals
Sequence of characters used for text always contained within quotes `''` or `""` ex: `let firstName = 'Jonas';`

You can concatenate simple or complex strings using the `+` operator:
```
const firstName = "Jonas";
const job = "teacher";
const birthYear = "1991";
const year = 2037;

let jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);
```

A better way to do this would be template literals.

A template literal can assemble multiple pieces into one final string using backticks `` and ${variable_name} to reference any variables.

```
jonas = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonas);
```

Both of the above produce the same result: *I'm Jonas, a 46 years old teacher!*

Multi-line strings:
- Oldway:
    ```
    console.log('String with \n\
    multiple \n\
    lines');
    ```
- Template Literal:
    ```
    console.log(`String with
    multiple
    lines`);
    ```

## Taking Decisions: If/Else Statements
If/Else Control structure:
```
if(condition) {
code to be executed if true
} else {
code to be execute if false
}
```
## Type Conversion and Coercion
Converting a string to a number or boolean, or vice versa. You cannot convert to undefined, null, etc.

Type Conversion - when you manually convert from one type for another.
- `Number()` - function must start with capital N
  - converts to a number, this doesn't permanently change the value type, it only affects instances where the `Number()` function is called.
        ```
        const inputYear = "1991";
        console.log(inputYear+18);
        //result: 199118
        console.log(Number(inputYear)+18);
        //result: 2009
        ```
  - if you try to use `Number()` on a string, `Number("Erik");` result will be NaN (Not a Number [invalid number]) which ironically has a typeof = number.
- `String()` - function must start with captial S
  - `console.log(String(23));` results in an output of "23".

Type Coercion - when JavaScript automatically converts from one type to another.
- Whenever there is an `+` operator between a number and a string, JavaScript will automatically convert that number to a string.
  - `console.log("I'm " + 23 + ' years old');`, 23 is converted to a string and the result is "I'm 23 years old".
- Whenever there is an `-`, `*`, `/`, `>`, `<` operators between a number and string number, JavaScript converts the strings to a number.
  - `console.log("23" - 10);` result is 13 as "23" is converted to 23 then 10 is subtracted.

## Truthy and Falsy Values
Boolean() function in JavaScript converts a value to a boolean.
- function must start with captial B

Falsey Values (5 only) will all become `false` when converted to a boolean, all other values will become `true`.
1. 0 `console.log(Boolean(0));` results in `false` 
2. '' `console.log(Boolean(''));` results in `false` 
3. undefined `console.log(Boolean(undefined));` results in `false` 
4. null `console.log(Boolean(null));` results in `false` 
5. NaN `console.log(Boolean(NaN));` results in `false` 

Truthy Values - every other value that is not a falsy value above.

The `Boolean()` function is rarely used, and we mostly rely on JavaScript Coercion.

JavaScript uses type coercion when using
 - example, any value entered into a if else statement, Javascript will automatically try to convert to a boolean using the truthy/falsey number guidelines.
 - can use to check if a variable is defined or not:
    ```
    let height; // or height = 0; <-- this is a bug, because it is defined as 0, but be aware it will say it is undefined
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
    ```

## Equality Operators: == VS. ===
`==` - loose equlity operator
- `'18' == 18` is true ('18' was converted to 18)
`===` - strict equality operator, this does not perform type coercion
- `'18' === 18` is false ('18' is not converted to a number)

**Try to use the strict `===` equality operator by default for cleaner code and avoiding bugs.**

`!=` - loose different operator
`!==` - strict different operator

**Again, the strict `!==` operator is preferred.**

## Boolean Logic
Boolean logic is a branch of computer science which uses true and false values to solve complex logic problems, using several logical operators.

Logical Operators:
- AND - if A and B are `true`, result returns `true` all other combinations with a `false` returns `false`
- OR - if either A or B are `true` result will return `true`
- NOT - inverts the ture/false value

## Logical Operators
`&&` - AND operator
`||` - OR operator
`!` - NOT operator

## The Switch Statement
The switch statement is an alternative way to write and if else statement where you are cycling through multiple variables (example with day of the week shown below). Switch statements typically require slightly more code but are generally easier to understand visually.

Switch Statements are comprised of a few components:
```
switch(variable_being_cycled){
    case 'alternate_value_for_variable':
        code to be executed;
        additional code to be executed;
        break;
    default:
        code to be executed;
}
```
- switch(): calls the function on a variable
- case: defines the value being evaluated for that variable, would typically have multiple cases in a switch statement
- break: stops code below the break from being executed
- default: code that will execute if value is called that isn't expected

Switch statement compared to if else statement:
```
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
```
 ## Statements and Expressions
 Expression - a piece of code that produces a value: (3 + 4), 1991, true && false
 Statement - a bigger piece of code that does not produce a value of itself
    ```
    if (23 > 10) {
        const str = '23 is bigger';
    }
    ```
- 23 is bigger is a expression
- the whole code is a statement
- expressions cannot be placed in template literal

## The Conditional (Ternary) Operator
The Conditional Operator allows you to write something similar to an if else statement but all in one line.
- only one line of code can be executed after true statement,
  - `?` precedes condition if true
  - `:` precedes condition if false
  - example:
    ```
    const age = 23;
    age >= 21 ? console.log('I can drink wine! 🍷') : console.log('I have to stick with water. 💧');
    ```
Is an expression and can be used to conditionally assign values to variables.
```
const drink = age >= 21 ? 'wine! 🍷' : 'water 💧';

//these two code blocks execute the same thing

let drink;
if (age >= 21){
    drink = 'wine 🍷';
} else{
    drink = 'water 💧';
}
```
The conditional operator can also be placed in a template literal as it's output is a value.
```
console.log(`I like to drink ${age >= 21 ? 'wine 🍷' : "water 💧"}`);
```
Not a replacement for if else statements, but is perfect for taking quick decsions.

## Javascript Releases ES5, ES6, ES+
1995 Netscape, Bredan Eich creates the first version of JavaScript called Mocha
1996 mocha renamed to livescript and then again to JavaScript, Microsoft copies JavaScript from NetScape and names it JScript
1997 ES1 released to standardize JavaScript
2009 ES5 released with lots of features
2015 ES6 biggest update to language ever, changed to annual release cycle

JavaScript releases always provide backwards compatibility so they don't break the web (all the way back to ES1).

JavaScript is not forwards compatible as they are limited by what the web browsers can read.

How to use modern javascript:
1. During Development: use latest version of Google Chrome
2. During Production: use Babel to transpile and polyfill your code (convert back to ES5 to ensure browser compatibility).

ES5 is supported by all browsers today.

ES6+ is well supported by all modern browsers but not older browsers (modern JavaScript)

# JavaScript Fundamentals Part 2

## JavaScript Strict Mode
Adding the `'use strict';` as your first line of code in your JavaScript script activates strict mode.

Strict mode does two things:
1. Forbids the coder from performing certain actions
2. In certain situations creates visible errors in the developer console where without strict mode it would have failed silently
   - misspelling variables in code
   - preventing from using future keywords as variables (interface, private)

Best practice is to always code in strict mode.

## Functions
Functions are a piece of code you can reuse over and over again. They can hold multiple lines of code.

```
function function_name() {
    code to be executed;
}
```

Calling, invoking, or running the function:
- `function_name();`

Functions can both recieve (parameters) and return data.
- Parameters: represent the input data into a funcition
  - `function_name(parameter1, parameter2);
  - values of the parameters are called the **arguement**
- Return: using return at the end of a function allows you to utilize a value or result of the function outside of the function.
  - immediately exits the function
  - code written after the return line will not be executed (eg: a console.log after the return line)

Principle: Do not repeat yourself (code) (referenced as keeping your code dry). Use functions to maintain clean efficient code.

## Function Declarations VS Expressions
Function delcalarations can be called before the function is declared, where a function expression cannot. Function expressions are functions stored in a variable. It is developer preference in which method they choose to use.

A function declaration is structure as:
```
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);
```

A function expression is stuctured as:
```
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
```

## Arrow Functions
A special form of function expression that is shorter and faster to write
- Return result is implicit for arrow functions with one line of code to execute
- Multiple code lines require an explicit return call and braces {} to encolse both codes lines
- Multiple paramaters can be handled by placing the parameters in paraenthesis ()
- Arrow functions loose their advantage when the function gets too complex
- Call the function just like function declarations and function expressions
- Arrow functions do not get a "this" keyword (more on this later)

Basic arrow function:
```
const calcAge3 = birthYear => 2037 - birthYear;
```

Delcare variable to store arrow function, argument for arrow function, `=>`, code to be executed and returned.

Multiline arrow function:
```
const yearsUntilRetirement = birthYear => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
   return retirement;
}
```
Note the addition of writing the return line and capturing code in curly braces

Multiline, mulitparameter arrow function:
```
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
}
```
Note parameters are now in paranthesis ()

## Functions Calling Other Functions
A common practice, that can help maintain dry code and reduce the number of lines in code that need to be updated should the way the code executes.

example:
```
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
```
Returns "Juice with 8 apple pieces and 12 orange pieces."

## Arrays
Arrays are a type of datastructure. They can use arrays to bundle multiple variables, without having to declare multiple versions.
- arrays are 0 based, which means the first element in the array is 0
- arrays have properties
  - array_name.array_property
  - .length for example pull the total number of elements in the array.

Inputing data into an Array:

```
//non array
const friend1 = "Micheal";
const friend2 = "Steve";
const friend3 = "Peter";
//array
const friends = ['Micheal', "Steven", 'Peter'];
```
Ensure when making an array of strings the comma is outside of the strings quotation marks.

Alternately you can write array's using this additional syntax:
```
const years = new Array(1999, 2004, 2012);
```

Although, using the brackets (literal syntax) is the more common way.

example:
```
const firstName = 'Jonas';
const jonas = [
    firstName,
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    friends
];
```

Getting data out of an Array:

You can pull data out of an array using the syntax below, which will result in "Micheal".
```
console.log(friends[0]);
```
You can mutate an array by assigning a position in the array a new value.
```
friends[2] = 'Jay';
```
Changes last person from Peter to Jay. So even an array declared with const can be mutated. But you cannot reassign all of the values.

When creating arrays you can assign numbers, strings, expressions, variables, or even other arrays to a given position.
```
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
```

Passing arrays into functions:

## Array Operations (Methods)
- `.push()` - adds and element to the end of an array
  - returns a value (length of the array), do get that value you can store it in a variable
- `.unshift()` - adds an element to the begining of an array
  - also returns value (length of the array)
- `.pop()` - removes the last element from an array
  - returns value of removed element
- `.shift()` - removes the first element from an array
  - returns value of removed element
- `.indexOf()` - returns index of a value in an array
- `.includes()` - returns `true` or `false` if the item is in an array or not


## Objects
Objects are another type of data structure in JavaScript. They allow you to define key value pairs. A major difference between arrays and objects, is that the order of items in an object does not matter when you want to retrieve the data (JavaScript will display these alphabetically).
- can only access array information based on order information
- use arrays for more ordered information and objects that have less order


Object Literal Structure:
```
const object_name = {
    key1: 'string_value_key1',
    key2: number_value_key2,
    key3: expression_key3,
    key4: [array_key4]
}
```
example (compare to array):
```
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends:['Micheal', "Steven", 'Peter']
};
```
The above object example has 5 properties (number of key values).

## Dot vs. Bracket Notation
Dot Notation
```
console.log(jonas.lastName);
```
Bracket Notation:
```
console.log(jonas['lastName']);
```

Both in the example above would return the same value. The only difference is that will bracket notation `[]` you can place an expression in the brackets to result in the value you want to pull from the object.
```
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
```

When computing a property name, the bracket `[]` notation must be used, all other cases best practice is to use dot `.` notation.

Variables cannot be called in dot `.` notation: `object_name.variable_name` will return undefined (falsy value). Again, bracket `[]` notation must used to do this.

Adding values to an Object:
Dot notation
- `jonas.location = 'Portugal';
Bracket notation
- `jonas['twitter'] = '@jonasschmedtman';`

## Object Methods
Any function attached to an object property is called a method. These functions are declared in the same manner as [function expressions](#Function-Declarations-VS-Expressions), with the only difference being instead of storing the function in a variable, it is now stored in a property of the object.

Example with an object method (calcAge)
```
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends:['Micheal', "Steven", 'Peter'],
    hasDriversLicense: true,
    calcAge: function(birthYear){
        return 2037 - birthYear;
    }
};
```

How to call the value out of a object method (dot & bracket notation):
```
console.log(jonas.calcAge(1991));
console.log(jonas['calcAge'](1991));
```
In the example above calcAge is referencing a property `birthYear` which is already defined in the object. This is repetitive and not a clean way to do this. Object methods actually have a way to call this property directly using the `this` keyword (`this` variable) to avoid entering the same data twice.
```
    calcAge: function(){
           return 2037 - this.birthYear;
    }
```
Notice - you don't need to put the property in the parenthesis.

If you need to access the result in an object method multiple times, it can be cumbersome to call the function multiple times, so there is a more efficient way to do this. Instead you can calculate the age once and store it in the object and when the value is needed you can pull it from the property.

```
calcAge: function(){
    this.age = 2037 - this.birthYear;
    return this.age;
}
```
The result of the function above is now stored in the property .age of jonas.

Array's are actually special objects, which is why we are able to use array methods on them. The difference being, we are able to define our own methods with objects.

## Iteration: The For Loop
Loops are a type of control structure and are fundamental aspect of a programming language as they allow you to automate repetative tasks.

For loop leeps running while condition is **TRUE**.

For Loop Structure:
```
for(intial_state; condition; increment){
    code to be executed;
}

for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}  `)
}
```

## Looping Arrays, Breaking and Continuing
One of the most useful applications of the for loop is to loop through arrays.

example:
```
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', "Steven", 'Peter']
];

//log every element of an array
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i]);
}
```

Loops can not only be used to read from an array, but also write to an existing array.
- when doing this method there are two syntaxes that can be used:
  - `types[i] = typeof jonas [i];`
  - `types.push(typeof jonas[i]);`
  - it is important to use .push vs .unshift as .unshift will change the order of the values

```
const types = []; //empty array

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    types.push(typeof jonas[i]);
}
```

Statements:
- `continue` - exit current condition of loop and continue on starting at the next iteration
    ```
    //only want to print elements that are strings:
    console.log('---ONLY STRINGS---')
    for (let i = 0; i < jonas.length; i++) {
        if (typeof jonas[i] !== 'string') continue;
        console.log(jonas[i], typeof jonas[i]);
    }
    ```
- `break` - completely exit the loop
    ```
    //want to exit loop after finding number:
    console.log('---BREAK WITH NUMBER---')
    for (let i = 0; i < jonas.length; i++) {
        if (typeof jonas[i] === 'number') break;
        console.log(jonas[i], typeof jonas[i]);
    }
    ```

## Looping Backwards and Loops IN Loops
Looping backwards through an array is very similar to looping forwards. The intial counter, condition, and increment just need to be updated to reflect the new end goal.

example (looping backwards):
```for (let i = jonas.length - 1; i >= 0; i-- ){
    console.log(jonas[i]);
}
```
Looping in a loop can be used to cycle through various conditions within a loop.

example (loop in loop):
```
for (let exercise = 1; exercise <= 3; exercise++){
    console.log(`-------Starting Exercise ${exercise} -------`)
    for(let rep = 1; rep <= 5; rep++){
        console.log(`Lifting weights repetition ${rep} 🏋️‍♀️ `)
    }
}
```
## The While Loop
You can only specify the condition in the delcaration of a while loop. The other two components (repetitions and increment) outside of the loop.

The while loop is more versitile because it doesn't need a counter. And as a result you can solve for specific problems **when you do not know how many times the loop should run**.

```
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6){
    console.log(`You rolled a ${dice}!`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
```

Condition must be `TRUE` for the loop to continue.

If you do not change the condition or re-prompt, you will create an infinite loop.

# Developer Skills & Editor Setup

Solving Problems:
1. Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem.
2. Divide and conquer: Break a big problem into smaller sub-problems.
3. Don't be afraid to do as much research as you have to.
4. For bigger problems, write pseudo-code before writing the actual code.

Use Google, StackOverflow and MDN to help find solutions you can understand to the problems you are having.

Debugging Process
1. Identify the BUG - become aware during development, testing, or user reports, understanding the context (browsers/users)
2. Find the BUG - isolate exactly where the bug is happening in the code
3. FIX the bug - replace the wrong solution with the new correct solution
4. Prevent - search for the same bug in similar code, and/or write tests using testing software

Debugging:
- Using the chrome inspect tool, you can access the .js script in the `Sources` tab and insert break points in the code to identify where the bug is occuring

# HTML & CSS
`!` in vscode creates the basic html template:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
Best practice is to use class attributes vs id attributes when applying styling in CSS.

Box Model:
![Box Model](https://user-images.githubusercontent.com/2182637/36812968-fa45682a-1d26-11e8-80fe-414ecacf28ab.png)
- **Content**: text, images, etc
- **Padding**: transparent area around the content, inside of the box
- **Border**: goes around the padding and the content
- **Margin**: space between boxes
- **Fill Area**: area that gets filled with background color or background image
  - fills everything inside of margin

Global selector `*` can be used to select all element types at the beginning of an HTML document and reset them as shown below.
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
box-sizing: this makes it so when specifying the width of an element, it includes padding and borders.
