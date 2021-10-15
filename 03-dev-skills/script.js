// 'use strict';

// const x = '23';

// const phrase = "I'm going here.";

// const calcAge = birthYear => 2037 - birthYear;
// //VIDEO

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

//const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// function calcTempAmplitude(temps) {
//     let max = temps[0];
//     for (let i = 0; i < temps.length; i++){
//         if (temps[i] > max) max = temps[i];
//     }
//         console.log(max);
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++){
//         if (temps[i] < min) min = temps[i];
//     }
//         console.log(min);
//     return max - min;
// };
// calcTempAmplitude([3, 7, 4, 10]);
// console.log(calcTempAmplitude(temperatures));

// function calcTempAmplitude(temps) {
//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++){
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays

// function calcTempAmplitudeNew(t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++){
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew(temperatures);
// console.log(amplitudeNew);

//Code Wars Problem take a 10 number array and out put in phone number format "(XXX) XXX-XXXX"
//create phone number format array
// write each value from the input to the corresponding value in the phone number array
// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const phoneFormat = ['(', 'X', 'X', 'X', ') ', 'X', 'X', 'X', '-', 'X', 'X', 'X', 'X'];
// console.log(phoneFormat);

// function formatNumber (arr) {
//     let phoneNum = '';
//     for (i = 0; i < arr.length; i++){
//         if(i < 3){
//             phoneFormat[i + 1] = arr[i];
//         } else if (i >= 3 && i <= 5){
//             phoneFormat[i + 2] = arr[i];
            
//         } else {
//             phoneFormat[i + 3] = arr[i];
//         }
//     }
//     for (i = 0; i < phoneFormat.length; i++){
//         phoneNum += phoneFormat[i];
//     } 
//     return phoneNum;
// }
// console.log(formatNumber(input));
// //console.log(phoneFormat);

// function measureKelvin () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         // value: prompt('Degrees Celsius:')
//         value: 10,
//     };
//     console.table(measurement);
// const kelvin = Number(measurement.value) + 273;
// return kelvin;
// }
// console.log(measureKelvin());

// function calcTempAmplitudeBug(t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);

//     // let max = temps[0];
//     // let min = temps[0];
//     //introducing bug
//     let max = 0;
//     let min = 0;

//     for (let i = 0; i < temps.length; i++){
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug(temperatures);
// console.log(amplitudeBug);

/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data2:[12,5,-5,0,4]
GOOD LUCK 😀
*/

//Problem Solving:
//1. output template literal with temp and day number from array
// day = i position + 1
//2. create a variable that loops for the length of a given array and contiues to add

const data1 = [17, 21, 23];
const data2 = [12,5,-5,0,4];

function printForecast(arr){
    let forcast = '';
    for (let i = 0; i < arr.length; i++){
    forcast += `...${arr[i]}oC in ${i + 1} days`;
    }
    forcast += '...';
    return forcast;
}

console.log(printForecast(data1));
console.log(printForecast(data2));

