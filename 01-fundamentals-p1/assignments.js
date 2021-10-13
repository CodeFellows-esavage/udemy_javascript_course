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

/*
LECTURE: Strings and Template Literals
1. Recreatethe'description'variablefromthelastassignment,thistime using the template literal syntax
const country = 'USA';
const continent = 'North America';
let population = 333;
const isIsland = true;
let language = 'English';

const description = `The ${country} is in ${continent}, and its ${population} million people speak ${language}.`
console.log(description);
*/

/*
LECTURE: Taking Decisions: if / else Statements
1. Ifyourcountry'spopulationisgreaterthat33million,logastringlikethistothe console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original
const country = 'USA';
const continent = 'North America';
let population = 333;
const isIsland = true;
let language = 'English';

const avgPop = 33;
if (population > avgPop){
    console.log(`The ${country}'s population is above average`);
} else {
    let popDiff = 33 - population;
    console.log(`The ${country}'s population is ${popDiff} million below average`);
}
*/

/*
LECTURE: Type Conversion and Coercion
1. Predicttheresultofthese5operationswithoutexecutingthem:
     '9' - '5'; result will be 4
     '19' - '13' + '17'; result will be '617'
     '19' - '13' + 17; result will be 23
     '123' < 57; result will be false
     5 + 6 + '4' + 9 - 4 - 2; result will be 1143
2. Executetheoperationstocheckifyouwereright

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
*/

/*
LECTURE: Equality Operators: == vs. ===
1. Declareavariable'numNeighbours'basedonapromptinputlikethis: prompt('How many neighbour countries does your country have?');
2. Ifthereisonly1neighbour,logtotheconsole'Only1border!'(uselooseequality == for now)
3. Useanelse-ifblocktolog'Morethan1border'incase'numNeighbours' is greater than 1
4. Useanelseblocktolog'Noborders'(thisblockwillbeexecutedwhen 'numNeighbours' is 0 or any other value)
5. Testthecodewithdifferentvaluesof'numNeighbours',including1and0.
6. Change==to===,andtestthecodeagain,withthesamevaluesof
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally,convert'numNeighbours'toanumber,andwatchwhathappensnow
when you input 1
8. Reflectonwhyweshouldusethe===operatorandtypeconversioninthis
situation

let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if(numNeighbours === 1){
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border!");
} else{
    console.log("No borders!");
    
}

*/

/*
LECTURE: Logical Operators
1. Commentoutthepreviouscodesothepromptdoesn'tgetintheway
2. Let'ssaySarahislookingforanewcountrytolivein.Shewantstoliveina
country that speaks english, has less than 50 million people and is not an
island.
3. WriteanifstatementtohelpSarahfigureoutifyourcountryisrightforher.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. Ifyoursistherightcountry,logastringlikethis:'YoushouldliveinPortugal:)'.If
not, log 'Portugal does not meet your criteria :('
5. Probablyyourcountrydoesnotmeetallthecriteria.Sogobackandtemporarily
change some variables in order to make the condition true (unless you live in Canada :D)

const country = 'USA';
const continent = 'North America';
let population = 333;
const isIsland = false;
let language = 'English';

console.log(Boolean(language === 'English'));
console.log(Boolean(population < 50));
console.log(Boolean(!isIsland));

if(language === 'English' && population < 50 && !isIsland){
    console.log(`You should live in ${country}!`);
} else {
    console.log(`${country} does not meet your requirements :(`);
}
*/

/*
LECTURE: The switch Statement
1. Useaswitchstatementtologthefollowingstringforthegiven'language': chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'


let language = 'hindi';

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log("MOST number of native speakers!")
        break;
    case 'spanish':
        console.log("2nd place in number of native speakers!")
        break;
    case 'english':
        console.log("3rd place in number of native speakers!")
        break;
    case 'hindi':
        console.log("Number 4")
        break;
    case 'arabic':
        console.log("5th most spoken language")
        break;
    default:
        console.log('great language too 😃')
}
*/

/*
LECTURE: The Conditional (Ternary) Operator
1. Ifyourcountry'spopulationisgreaterthan33million,usetheternaryoperator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!
2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original

const country = 'USA';
const continent = 'North America';
let population = 333;
const isIsland = false;
let language = 'English';

population > 33 ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average`);
*/