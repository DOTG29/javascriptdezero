
/*compteur de 1 a 10  ⭐*/ 

// for(let num = 1; num <= 10; num++){
//     console.log(num);
// }

/*table de 2  ⭐*/

// for(let i = 0; i <= 100;){
//     i = i + 2
//     console.log(i);
// }

/*table de 7  ⭐*/

// for (let a = 0; a <= 70; a+=7) {
//    console.log(a);
// }

/*table de 1 a 10  ⭐*/

// let result = '\n';
// for(let i = 1; i <= 10; i++){
    
//     for(let j = 1; j <= 10; j++){
//         result += (i*j) + " ";
//     }
//     result += '\n'
   
// }

// console.log(result);

/*aller de 10 a 30 2 par 2  ⭐*/

// for(let i = 10; i <= 30; i+=2){
//     console.log(i);
// }

/*changer celsius en fahrenheit  ⭐*/

// function changerCelEnFar(celsius){
//     let fahrenheit;
//     fahrenheit = celsius*9/5 + 32;
//     return fahrenheit;
//     }

// console.log(changerCelEnFar(52));

/*changer fahrenheit en celsius  ⭐*/

// function changerFarEnCel(fahrenheit){
//     let celsius;
//     celsius = (fahrenheit - 32) * 5/9;
//     return celsius;
//     }
    
// console.log(changerFarEnCel(125.6));

/*aditioner les nombre dans un tableau  ⭐*/

// let a = [10,20,50,10,10]
// let tab = 0;
// for(let i = 0; i < a.length;i++){
//     tab += a[i]
// }

// console.log(tab);

/*retourn tous les nombre positif d'un tableau  ⭐*/

//  function returnlespositive(tab){

//  let nump = []

//     for(let i = 0; i < tab.length; i++){
//         if(tab[i] > 0){
//             nump.push(tab[i])
//         }
//     }
//     return nump;
//  }
// console.log(returnlespositive([4,-5,8,-9,2,-3,12,5,9]));

/*sortir le nombre max du tableau  ⭐*/

// function maximum(max){
//     let tmp = max[0];
//     for(let i = 0; i < max.length; i++){
//          if(max[i] > tmp){
//             tmp = max[i];
//          }
//     }
//     return tmp
// }
// console.log(maximum([58,15,42,95,63,2,78,5]))

/*suit fibonatcci  ⭐*/

//  function fibonacci(nombre) {
//     let n1 = 0;
//     let n2 = 1;
//     let somme = 0;
      
//     for(let i = 2; i <= nombre; i++){
//        somme = n1 + n2; 
//        n1 = n2; 
//        n2 = somme; 
//     }
//         return nombre ? n2 : n1;
//     }
     
// console.log(fibonacci(6));



