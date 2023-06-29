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


// let num1 = 0;
// let num2 = 1;
// let somme = 0;
// const res = [0,1]
  
// for(let i = 1; i < 10; i++){

//     somme = num1 + num2; 
//     num1 = num2; 
//     num2 = somme; 

//     res.push(somme)
// }

// console.log(res);

/*Calculate the sum of digits of a positive integer number  ⭐*/


// let somme = 0;
// let i = 1

// while(i <= 9){
//     somme = somme + i;
//     i = i + 1;
// }

// console.log(somme);

/*Rotate an array to the left 1 position  ⭐*/

// let arr = [1,2,3,4,5] 
// arr.push(arr.shift())
// console.log(arr);

/*Rotate an array to the right 1 position  ⭐*/

// let t = [1,2,3,4,5]
// t.push(t.unshift(5))
// t.pop(t.pop())
// console.log(t);

/*Reverse an array  ⭐*/

// let arr = [1, 2, 3, 4, 5];
// let result = []                   
 
// for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i])
// }

// console.log(result);

/*Reverse a string  ⭐*/

// let str = "Ethan est null a brawl stars"
// let result = ""

// for (let i = str.length -1; i >= 0; i--) {
//     result += str[i] 
// }

// console.log(result);






 function tab(arr1,arr2){

    let p = []
    
    p.push(arr1)
    p.push(arr2)
concat
    return p
 }

console.log(tab([1, 2, 3, 4], [5, 6, 7, 8]));