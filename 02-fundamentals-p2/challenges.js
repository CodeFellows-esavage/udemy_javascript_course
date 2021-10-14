'use strict';
//console.log("challenges.js is linked");

/*
Fundamentals Part 2
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
2. Usethefunctiontocalculatetheaverageforbothteams
3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
5. Ignoredrawsthistime
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27



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
/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44
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
*/
/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
console.log(mark);
console.log(john);

mark.calcBMI() > john.calcBMI() ? console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`) : console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
*/
/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉 Bonus:
4. Bonus:Writeafunction'calcAverage'whichtakesanarraycalled'arr'as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill){
    if(bill <= 50 || bill >= 300){
        return bill * 0.20;
    } else {
        return bill * 0.15;
    }
}

for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    const total = bills[i] + tip;
    tips.push(tip);
    totals.push(total);
}
console.log(bills, tips, totals);

function calcAverage(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];  
    }
    let avg = sum / arr.length;
    console.log(sum, arr.length);
    return avg;
}

console.log(calcAverage(bills));
console.log(calcAverage(totals));
