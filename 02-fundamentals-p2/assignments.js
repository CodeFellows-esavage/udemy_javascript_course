'use strict';
// console.log("assignments.js is linked");
/*
LECTURE: Functions
1. Writeafunctioncalled'describeCountry'whichtakesthreeparameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Callthisfunction3times,withinputdatafor3differentcountries.Storethe returned values in 3 different variables, and log them to the console

function describeCountry (country, population, capitalCity){
    const countryIntro = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return countryIntro;
}

const chinaIntro = describeCountry('China', 21.5, 'Beijing');
console.log(chinaIntro);
const japanIntro = describeCountry('Japan', 13.9, 'Tokyo');
console.log(japanIntro);
const russiaIntro = describeCountry('Russia', 12.5, 'Moscow');
console.log(russiaIntro);
*/

/*
LECTURE: Function Declarations vs. Expressions
1. Theworldpopulationis7900millionpeople.Createafunctiondeclaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
2. Tocalculatethepercentage,dividethegiven'population'valueby7900 and then multiply by 100
3. Call'percentageOfWorld1'for3populationsofcountriesofyourchoice, store the results into variables, and log them to the console
4. Createafunctionexpressionwhichdoestheexactsamething,called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)


function percentageOfWorld1(population){
    return (population/7900)*100;
}

const chinaPercent = percentageOfWorld1(1439);
const indiaPercent = percentageOfWorld1(1380);
const usaPercent = percentageOfWorld1(333);
console.log(chinaPercent, indiaPercent, usaPercent);

const percentageOfWorld2 = function(population){
    return (population/7900)*100;
}
const chinaPercent2 = percentageOfWorld2(1439);
const indiaPercent2 = percentageOfWorld2(1380);
const usaPercent2 = percentageOfWorld2(333);
console.log(chinaPercent2, indiaPercent2, usaPercent2);
*/

/*
LECTURE: Arrow Functions
1. Recreatethelastassignment,butthistimecreateanarrowfunctioncalled
   'percentageOfWorld3'

const percentageOfWorld3 = population => (population/7900)*100;

const chinaPercent3 = percentageOfWorld3(1439);
const indiaPercent3 = percentageOfWorld3(1380);
const usaPercent3 = percentageOfWorld3(333);
console.log(chinaPercent3, indiaPercent3, usaPercent3);
*/

/*
LECTURE: Functions Calling Other Functions
1. Createafunctioncalled'describePopulation'.Usethefunctiontypeyou like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
2. Tocalculatethepercentage,'describePopulation'callthe 'percentageOfWorld1' you created earlier
3. Call'describePopulation'withdatafor3countriesofyourchoice

function percentageOfWorld1(population){
    return (population/7900)*100;
}

function describePopulation(country, population){
    const countryPopPercent = percentageOfWorld1(population);
    const description =  `${country} has ${population} million people, which is about ${countryPopPercent}% of the world!`
    console.log(description);
}
describePopulation('China', 1439);
describePopulation('India', 1380);
describePopulation('USA', 333);
*/
/*
LECTURE: Introduction to Arrays
1. Createanarraycontaining4populationvaluesof4countriesofyourchoice. You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Logtotheconsolewhetherthearrayhas4elementsornot(trueorfalse)
3. Createanarraycalled'percentages'containingthepercentagesofthe
world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values


// const populations = ['USA', 'China', 'India', 'Mexico'];
// console.log(populations);
// console.log(populations.length  === 4);

// const usaPop = 333;
// const chinaPop = 1439;
// const indiaPop = 1380;
// const mexicoPop = 128;

// const percentages = [percentageOfWorld1(usaPop), percentageOfWorld1(chinaPop), percentageOfWorld1(indiaPop), percentageOfWorld1(mexicoPop)];
// console.log(percentages);

const populations = [333, 1439, 1380, 128];
console.log(populations);
console.log(populations.length  === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
];
console.log(percentages);
*/
/*

LECTURE: Basic Array Operations (Methods)
1. Createanarraycontainingalltheneighbouringcountriesofacountryofyour choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
2. Atsomepoint,anewcountrycalled'Utopia'iscreatedintheneighbourhoodof your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately,aftersometime,thenewcountryisdissolved.Soremoveitfrom the end of the array
4. Ifthe'neighbours'arraydoesnotincludethecountry‘Germany’,logtothe console: 'Probably not a central European country :D'
5. Changethenameofoneofyourneighbouringcountries.Todothat,findthe index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.



const usaNeighbors = ['Canada', 'Mexico'];
usaNeighbors.push('Utopia');
console.log(usaNeighbors);
usaNeighbors.pop();
console.log(usaNeighbors);
if (usaNeighbors.includes('Germany')) {
    console.log('Germany is a neighbor!');
} else{
    console.log('Probably not a central European country!');
}
usaNeighbors[usaNeighbors.indexOf('Canada')] = 'Cuba';
console.log(usaNeighbors);
*/
/*
LECTURE: Introduction to Objects
1. Createanobjectcalled'myCountry'foracountryofyourchoice,containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)


const myCountry = {
    country: 'USA',
    capital: 'Washington DC',
    language: 'English',
    population: 333,
    neighbours: ['Canada', 'Mexico']
};
console.log(myCountry);
*/
/*
LECTURE: Dot vs. Bracket Notation
1. Usingtheobjectfromthepreviousassignment,logastringlikethistothe console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
2. Increasethecountry'spopulationbytwomillionusingdotnotation,andthen decrease it by two million using brackets notation.


console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);
myCountry['population'] = myCountry['population'] - 2;
console.log(myCountry.population);
//betterway:
myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);
*/
/*
LECTURE: Object Methods
1. Addamethodcalled'describe'tothe'myCountry'object.Thismethod will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
2. Callthe'describe'method
3. Addamethodcalled'checkIsland'tothe'myCountry'object.This
method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.


const myCountry = {
    country: 'USA',
    capital: 'Washington DC',
    language: 'English',
    population: 333,
    neighbours: ['Canada', 'Mexico'],
    describe: function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },
    checkIsland: function(){
        this.isIsland = this.neighbours ===0 ? true : false;
        return this.isIsland;
    }
};
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
*/

/*
LECTURE: Iteration: The for Loop
1. Thereareelectionsinyourcountry!Inasmalltown,thereareonly50voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'


for (let voter = 1; voter <= 50; voter++){
    console.log(`Voter number ${voter} is currently voting!`);
}
*/

/*
LECTURE: Looping Arrays, Breaking and Continuing
1. Let'sbringbackthe'populations'arrayfromapreviousassignment
2. Useaforlooptocomputeanarraycalled'percentages2'containingthe
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirmthat'percentages2'containsexactlythesamevaluesasthe
'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is


const populations = [333, 1439, 1380, 128];
console.log(populations);
console.log(populations.length  === 4);

function percentageOfWorld1(population){
    return (population/7900)*100;
}

const percentages2 = [];

for (let i = 0; i < populations.length; i++){
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
];
console.log(percentages2);
*/

/*
LECTURE: Looping Backwards and Loops in Loops
1. Storethisarrayofarraysintoavariablecalled'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
2. Logonlytheneighbouringcountriestotheconsole,onebyone,nottheentire arrays. Log a string like 'Neighbour: Canada' for each country
3. Youwillneedaloopinsidealoopforthis.Thisisactuallyabittricky,sodon't worry if it's too difficult for you! But you can still try to figure this out anyway 😉


const listOfNeightbors = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeightbors.length; i++){
    for (let y = 0; y < listOfNeightbors[i].length; y++){
        console.log(`Neighbor: ${listOfNeightbors[i][y]}`);
    }
}
*/

/*
LECTURE: The while Loop
1. Recreatethechallengefromthelecture'LoopingArrays,BreakingandContinuing', but this time using a while loop (call the array 'percentages3')
2. Reflectonwhatsolutionyoulikebetterforthistask:theforlooporthewhile loop?
*/
const populations = [333, 1439, 1380, 128];
console.log(populations);
console.log(populations.length  === 4);
// first array no loop
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
];
console.log(percentages);
// second array with for loop
function percentageOfWorld1(population){
    return (population/7900)*100;
}

const percentages2 = [];

for (let i = 0; i < populations.length; i++){
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
// third array with while loop
const percentages3 = [];
let arrayPositon = 0;
while(arrayPositon < populations.length) {
    percentages3.push(percentageOfWorld1(populations[arrayPositon]));
    arrayPositon++;
}
console.log(percentages3);
