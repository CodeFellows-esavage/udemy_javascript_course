/*
Assignment 1
1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)
2. Logtheirvaluestotheconsole
*/
//let country = 'USA';
//let continent = `North America`;
//let popluation = 3.3;

//console.log(country, continent, popluation);

/*
LECTURE: Data Types
1. Declareavariablecalled'isIsland'andsetitsvalueaccordingtoyour country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
2. Logthetypesof'isIsland','population','country'and'language' to the console
*/

//let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof popluation);
// console.log(typeof country);
// console.log(typeof language);

/*
LECTURE: let, const and var
1. Setthevalueof'language'tothelanguagespokenwhereyoulive(some countries have multiple languages, but just choose one)
2. Thinkaboutwhichvariablesshouldbeconstvariables(whichvalueswillnever change, and which might change?). Then, change these variables to const.
3. Trytochangeoneofthechangedvariablesnow,andobservewhathappens
*/

// language = 'English';

// const country = 'USA';
// const continent = 'North America';
// let population = 333;
// const isIsland = true;

// console.log(country, continent, population, isIsland, language);
// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);


// country = 'Canada'; produces error

/*
LECTURE: Basic Operators
1. Ifyourcountrysplitinhalf,andeachhalfwouldcontainhalfthepopulation, then how many people would live in each half?
2. Increasethepopulationofyourcountryby1andlogtheresulttotheconsole
3. Finlandhasapopulationof6million.Doesyourcountryhavemorepeoplethan
Finland?
4. Theaveragepopulationofacountryis33millionpeople.Doesyourcountry
have less people than the average country?
5. Basedonthevariablesyoucreated,createanewvariable'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
*/

// console.log(population/2 +' '+'million');
// population++;
// console.log(population);
// const finlandPop = 6;
// console.log(population > finlandPop);
// const description = "The USA is in North America, and its 333 million people speak english."

//Coding Challenge #1
// all measurements in metric

//data set 1:
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(markBMI, johnBMI);
// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);
// results markBMI = 27.3, johnBMI = 24.2, true (mark has a higher BMI)

//data set 2:
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
//results in markBMI = 26.8, johnBMI = 27.4, false, (mark has a lower BMI)







