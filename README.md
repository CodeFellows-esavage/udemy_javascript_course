# udemy_javascript_course
Repository containing notes and all projects associated with the  complete-javascript-course on udemy.

## Table of Contents
- [JavaScript Fundamentals Part 1](#JavaScript-Fundamentals-Part-1)
- [JavaScript Fundamentals Part 2](#JavaScript-Fundamentals-Part-2)

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
- `.unshift()` - adds an element to the end of an array
  - also returns value (length of the array)
- `.pop()` - removes the last element from an array
  - returns value of removed element
- `.shift()` - removes the first element from an array
  - returns value of removed element
- `.indexOf()` - returns index of a value in an array
- `.includes()` - returns `true` or `false` if the item is in an array or not


