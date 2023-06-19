// let a = document.getElementById("carre");
// const b = document.getElementById("carrebleu")
// const p = document.getElementById("paragraph")
// const p2 = document.getElementById("paragraphcache")
// let nomb = document.getElementById("nombre")
// let plus = document.getElementById("plus")
// let moins = document.getElementById("moins")
// let reset = document.getElementById("reset")



// function changeSise(sise){
//     sise = 50 - Math.abs(sise) * 2
//     nomb.style.fontSize = sise + "px"
    
// }

// function changeBorder(border){
//     if (border % 2 === 0) {
//         nomb.style.border = "1px solid blue"
//     }
//     else{
//         nomb.style.border = "none"
//     }
    
// }

// a.addEventListener("click",() => {
//     console.log("j'ai reusi")
// })

// b.addEventListener("click",() => {
//     console.log("j'ai reusi avec le bleu");
// })

// function changeColor(color) {
//     nomb.style.color = color
// }

// a.addEventListener("mouseenter", () => {
//     console.log("je suis entre");
// }) 

// a.addEventListener("mouseleave", () => {
//     console.log("je suis sortie");
// })

// p.addEventListener("click", () => {
//     console.log(p.innerHTML );
// })

// p.addEventListener("click", () => {
//     document.getElementById("paragraphcache").style.display = "block"
// })

// p.addEventListener("click", () => {
//     if(getComputedStyle(p2).display != "none"){
//         p2.style.display = "none"
//     }else {
//         p2.style.display = "block"
//     }
// })


// let nombre = 0;

// plus.addEventListener("click", () => {
    

    
    

    // if (nombre > -11 && nombre < 0) {
    //     fontSize += 2
    //     nomb.style.fontSize = fontSize + "px";
    // }
    // else  {
    //     fontSize -= 2
    //     nomb.style.fontSize = fontSize + "px";
    // }
    
    
    
    
//     if(nombre < 10){
//         moins.disabled = false;
//         nombre++;
//         nomb.textContent = nombre;
//         if(nombre == 0){
//             changeColor("red");
//         }else if(nombre == 1 || nombre == -1){
//             changeColor("orange");
//         }else{
//             changeColor("black");
//         }
//         changeSise(nombre);
//         changeBorder(nombre);
//     }
//     if(nombre === 10) {
//         plus.disabled = true;
//     }
    
    
    
// })

// moins.addEventListener("click", () => {

    

    // if (nombre < 11 && nombre > 0) {
    //     fontSize += 2
    //     nomb.style.fontSize = fontSize + "px";
    // }
    // else  {
    //     fontSize -= 2
    //     nomb.style.fontSize = fontSize + "px";
    // }
    
//     if(nombre > -10){
//         plus.disabled = false;
//         nombre-- ;
//         nomb.textContent = nombre;
//         if(nombre == 0){
//             changeColor("red");
//         }else if(nombre == 1  || nombre == -1){
//             changeColor("orange");
//         }else{
//             changeColor("black");
//         } 
//         changeSise(nombre);
//         changeBorder(nombre);
//     }
//     if(nombre === -10){
//         moins.disabled = true;
//     }
    
// })

// reset.addEventListener("click", () => {
//     nombre = 0;
//     nomb.textContent = nombre;
//     plus.disabled = false;
//     moins.disabled = false;
//     if(nombre == 0){
//         nomb.style.color = "red";
//         nomb.style.fontSize = "50px";
//     }else{
//         nomb.style.color = "black"
        
//     }   
//  })




//  let prenom = "Daan";
//  let age = 28;
//  let message;;
// let dat = 2022 - age;

// function fabriquerMessage(){
//     console.log("je fabrique le message");
// }

// function affichertraitement() {
//     console.log("j'ai fini de fabriquer le message");
// }
// function afficherlenombredelettre(nombredelettre) {
//     console.log(nombredelettre);
//     if (nombredelettre > 30) {
//         console.log("se message et long");
        
//     }
// }
// function affichelettre(a, n) {
//     console.log(a[n]);
//     return a[n]
// }
// function calculerlagedans5ans(p) {
//      return p + 5;
// }


// if(age >= 21){
//     console.log("dans 5 ans vous aurait " + calculerlagedans5ans(age) + "ans");
//     fabriquerMessage();
//     message = " vous etes majeur, vous etes nee en ";
//     afficherlenombredelettre(message.length);
//     let resultat = affichelettre(message, 1);
//     console.log(resultat);
//     affichertraitement();
// }else if(age >= 18){
//     console.log("dans 5 ans vous aurait " + calculerlagedans5ans(age) + "ans");
//     fabriquerMessage();
//     message = " vous etes majeur en France, vous etes nee en ";
//     afficherlenombredelettre(message.length);
//     let resultat = affichelettre(message, 1);
//     console.log(resultat);
//     affichertraitement();
// }else {
//     console.log("dans 5 ans vous aurait " + calculerlagedans5ans(age) + "ans");
//     fabriquerMessage();
//     message = " vous etes mineur, vous etes nee en ";
//     afficherlenombredelettre(message.length);
//     let resultat = affichelettre(message, 1);
//     console.log(resultat);
//     affichertraitement();
// }
// console.log("bonjour " + prenom + " tu as " + age + " ans" + message + dat);



// for(let num = 1; num <= 10; num++){
//     console.log(num);
// }

// for(let i = 1; i <= 100;){
//     i = i + 2
//     console.log(i);
// }

// for (let a = 0; a <= 70; a+=7) {
//    console.log(a);
// }



// let result = '\n';
// for(let i = 1; i <= 10; i++){
    
//     for(let j = 1; j <= 10; j++){
//         result += (i*j) + " ";
//     }
//     result += '\n'
//     console.log(result);
// }
	

// let somme = 0;
// let i = 1
// while(i <= 10){
//     somme = somme + i;
//     i = i + 1;
// }
// console.log(somme);

// let result = 1;
// for(let i = 1; i <= 10; i++){
//     result = result*i;
// }
// console.log(result);

// for(let i = 10; i <= 30; i+=2){
//     console.log(i);
// }

// function changerCelEnFar(celsius){
//     let fahrenheit;
//     fahrenheit = celsius*9/5 + 32;
//     return fahrenheit;
//     }

//     console.log(changerCelEnFar(52));


// function changerFarEnCel(fahrenheit){
//     let celsius;
//     celsius = fahrenheit - 32*5/9;
//     return celsius;
//     }
    
//     console.log(changerFarEnCel(52));
    


// let a = [1,2,5,10]
// let tab = 0;
// for(let i = 0; i < a.length;i++){
//     tab += a[i]
// }

// console.log(tab);



// let tab = [6,8,8,3,7];
// let tmp = 0;

// for(let i = 0; i < tab.length; i++){
//     tmp += tab[i];
// }
// console.log(tmp/5);
// console.log(tmp);





//  function returnlespositive(tab){

//  let nump = []

//     for(let i = 0; i < tab.length; i++){
//         if(tab[i] > 0){
//             nump.push(tab[i])
//         }
        
//     }
//     return nump;
//  }
// console.log(returnlespositive([4,-5,8,-9,2,-3]));


// let tab = [12,5,78,15151,500,857];
// console.log(Math.max(...tab));

// function maximum(max){
//     let tab = max[0];
//     for(let i = 0; i < max.length; i++){
//          if(max[i] > tab){
//             tmp = max[i];
//          }
//     }
//     return tmp
// }
// console.log()


// function fibonacci(nombre) {
//     let n1 = 0;
//     let n2 = 1;
//     let somme = 0;
  
//     for(let i = 2; i <= nombre; i++){
       
//        somme = n1 + n2; 
//        n1 = n2; 
//        n2 = somme; 
//     }
  
//     return nombre ? n2 : n1;
//  }
 
//  console.log(fibonacci(8));

 
//  function returnB(n){
//         for(i = 2; i < n-1; i++){
//             if(n % i === 0){
//                 return false
//             }
//         }
//         return true
//  }
//  console.log(returnB(95));


// let somme = 0;

// for(let i = 1; i <= 4;i++){
//     somme = somme + i;
    
// }
// console.log(somme);


 

// function prime(s){
//     for(let i = 2; i < s - 1;i++){
//         if(s % i === 0){
//             return false
//         }
//     }
//     return true
// }
// for(let j = 2; j < 541;j++){
//     if(prime(j)){
//         console.log(j);
//     }
// }
// console.log(prime(541 ));


// let arr = [1,2,3,4,5] 
// arr.push(arr.shift())
// console.log(arr);


// let t = [1,2,3,4,5]
// t.push(t.unshift(5))
// t.pop(t.pop())
// console.log(t);


// let arr = [1, 2, 3, 4, 5];                   
 
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }



// function returnS(str){
//     let Nstr = "";
//     for(let i = str.length -1; i >= 0; i--){
//         Nstr += str[i];
//     }
//     return Nstr;
// }

// console.log(returnS("hello"));




// let a = [1, 2]; 
// let b = [3, 4];
// let c = [];
// let combined = c.push(...a,...b);
// console.log(c);



// let tab1 = [1,2,3,4];
// let tab2 = [1,2,3,5];


// function Ftab(tab1,tab2){
//     let tmp = [...tab1, ...tab2];
//     let result = []

//   for (let i = 0; i < tmp.length; i++) {
//     const howMany = tmp.filter(el => el === tmp[i]).length
//     if(howMany <  2) {
//         result.push(tmp[i])
//     }
//   }
//   return result
// }

// console.log(Ftab(tab1, tab2));


  
//     let tab1 = [1,2,3,4,5]
//     let tab2 = [5,4,3,2,1]
//     let p = []

//     tab(tab1, tab2)

//  function tab(arr1,arr2){
    
//     for(let i = 0;i < arr1.length - 1;i++){
//         p.push(arr1[i])
//     }
//     return p
//  }
// console.log(p);





//   function tab(arr1){
//     let p = []
//     for(let i = 0; i < arr1.length -1; i++){
//         if(!p.includes(arr1[i])){
//             p.push(arr1[i])
//         }
//     }
//     return p
//   }

  
//   console.log(tab([1,2,3,3,4,5,5]));



//   function dragon(force,enemy){
    
//     let lvl = 1;
//     let puissance = force*lvl;
    
//     for(let i = 0; i < enemy.length; i++){
//         while (puissance <   enemy[i]) {
//             lvl++
//             puissance = force*lvl
//         }
//         puissance += Math.floor(enemy[i]/10)
//     }
    
       
//     return puissance
//   }
//   console.log(dragon(5,[12,38,45]));



// let number = 1.26;
// let result = number | 0;
// console.log(result);