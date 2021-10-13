//Coding Challenge #1
// all measurements in metric

//data set 1:
// const markMass >= 78;
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
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;
// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(markBMI, johnBMI);
// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);
//results in markBMI = 26.8, johnBMI = 27.4, false, (mark has a lower BMI)

//Coding Challenge #2:

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;
// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / (johnHeight * johnHeight);

// if(markBMI >johnBMI){
//     console.log("Mark's BMI is higher than John's!");
// } else {
//     console.log("John's BMI is higher than Mark's!");
// }

// if(markBMI >johnBMI){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`);
// }

//Coding Challenge #3
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//data
// const avgScoreDolphins = (96 + 108 + 89) / 3;
// const avgScoreKoalas = (88 + 91 + 110) / 3;
//bonus data set 1
// const avgScoreDolphins = (97 + 112 + 101) / 3;
// const avgScoreKoalas = (109 + 95 + 123) / 3;
//bonus data set 2
// const avgScoreDolphins = (97 + 112 + 101) / 3;
// const avgScoreKoalas = (109 + 95 + 106) / 3;

// console.log(avgScoreDolphins, avgScoreKoalas);

// if (avgScoreDolphins > avgScoreKoalas){
//     console.log("The Dolphins Win!");
// } else if (avgScoreDolphins === avgScoreKoalas){
//     console.log("The Dolphins and the Koalas Tied!");
// } else {
//     console.log("The Koalas Win!");
// }

//bonus 1 & 2
// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100){
//     console.log("The Dolphins Win!");
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100){
//     console.log("The Koalas Win!");
// } else if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= 100 && avgScoreKoalas >100){
//     console.log("The Dolphins and the Koalas Tied!");
// } else {
//     console.log("Everybody Looses!");
// }

//Coding Challenge #4
// Data 1: Test for bill values 275, 40 and 430

// let bill = 275;
// let bill = 40;
// let bill = 430;

//my solution
// const tipPercent = bill >= 50 && bill <= 300 ? 0.15 : 0.20;
// console.log(`The bill was $${bill}, the tip was ${bill * tipPercent}, and the total value was ${bill + (bill * tipPercent)}.`);

//instructor solution
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// console.log(`The bill was $${bill}, the tip was ${tip}, and the total value was ${bill + tip}.`);