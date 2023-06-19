/*Print numbers from 1 to 10 ⭐*/ 

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


/*Print the odd numbers less than 100 ⭐*/

// for (let i = 1; i <= 100; i = i+2) {
//     console.log(i);
// }


/*Print the multiplication table with 7 ⭐*/

// for (let i = 0; i <= 70; i = i+7) {
//     console.log(i);
// }


/*Print all the multiplication tables with numbers from 1 to 10 ⭐*/

// let result = '\n';
// for(let i = 1; i <= 10; i++){
    
//     for(let j = 1; j <= 10; j++){
//         result += (i*j) + " ";
//     }
//     result += '\n'
   
// }

// console.log(result);


/*Calculate the sum of numbers from 1 to 10 ⭐*/

// let somme = 0;
// let i = 1
// while(i <= 10){
//     somme = somme + i;
//     i = i + 1;
// }
// console.log(somme);


/*Calculate 10! ⭐*/

// let somme = 1;
// let i = 1
// while(i <= 10){
//     somme = somme * i;
//     i = i + 1;
// }
// console.log(somme);


/*Calculate the sum of even numbers greater than 10 and less than 30 ⭐*/

// let somme = 0;
// let i = 10;
// while(i <= 30){
//     somme += i;
//     i += 2;
// }
// console.log(somme);


/*Create a function that will convert from Celsius to Fahrenheit  ⭐*/

// function changerCelEnFar(celsius){
//     let fahrenheit;
//     fahrenheit = celsius*9/5 + 32;
//     return fahrenheit;
//     }

// console.log(changerCelEnFar(52));


/*Create a function that will convert from Fahrenheit to Celsius  ⭐*/


// function changerFarEnCel(fahrenheit){
//     let celsius;
//     celsius = (fahrenheit - 32) * 5/9;
//     return celsius;
//     }
    
// console.log(changerFarEnCel(125.6));


/*Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers  ⭐*/

//  function returnlespositive(tab){

//  let numP = []

//     for(let i = 0; i < tab.length; i++){
//         if(tab[i] > 0){
//             numP.push(tab[i])
//         }
//     }
//     return numP;
//  }
// console.log(returnlespositive([4,-5,8,720,-9,2,-3,12,5,9]));


/*Find the maximum number in an array of numbers  ⭐*/

// function maximum(max){
//     let numMax = max[0];
//     for(let i = 0; i < max.length; i++){
//          if(max[i] > numMax){
//             numMax = max[i];
//          }
//     }
//     return numMax
// }
// console.log(maximum([58,15,42,95,63,2,78,5]))


/*Print the first 10 Fibonacci numbers without recursion  ⭐*/