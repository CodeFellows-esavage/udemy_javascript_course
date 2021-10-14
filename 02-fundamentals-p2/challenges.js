'use strict';
//console.log("challenges.js is linked");

/*
Fundamentals Part 2 Coding Challenge 1



const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;
//data set 1
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
//data set 2
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win ${avgDolphins} to ${avgKoalas}!`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} to ${avgDolphins}!`);
    } else {
        console.log('No clear winner :(');
    }
}

checkWinner(avgDolphins, avgKoalas);
*/

//Challenge 2
function calcTip(bill){
    if(bill <= 50 || bill >= 300){
        return bill * 0.20;
    } else {
        return bill * 0.15;
    }
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
];
const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
];
console.log(bills);
console.log(tips);
console.log(totals);


