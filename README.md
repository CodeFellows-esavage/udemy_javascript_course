# udemy_javascript_course
Repository containing notes and all projects associated with the  complete-javascript-course on udemy.


# Javascript Fundamentals Part 1

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



