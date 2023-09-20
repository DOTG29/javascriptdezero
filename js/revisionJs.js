// exo 3.2

// let a = -5;
// let b = -10;

// if (a > 0 && b > 0 || a < 0 && b < 0) {
//     console.log("le produit est positif");
// }else {
//     console.log("le produit est negatif");
// }


// exo 3.3

// let a = "adrien";
// let b = "marie"
// let c = "joshua";

// if (a < b && b < c) {
//     console.log("oui");
// }else {
//     console.log("non");
// }

// exo 3.6

// let age = 5    ;

// if (age >= 12 ) {
//     console.log("tu est cadet");
// }else if (age >= 10) {
//     console.log("tu est minime");
// }else if (age >= 8) {
//     console.log("tu est pupille");
// }else if (age >= 6) {
//     console.log("tu est poussin");
// }else {
//     console.log("tu est trop jeune");
// }


// exo 4.3

// let secondeDonner = 49;
// let minuteDonner = 49;
// let heurDonner = 23;

// if (secondeDonner >= 59) {
//     minuteDonner ++;
//     secondeDonner = 0;
// }else {
//     secondeDonner++;
// }


// if (minuteDonner >= 59) {
//     heurDonner ++;
//     minuteDonner = 0;
// }

// if (heurDonner >= 24) {
//     heurDonner = 0;
// }

// let resultaDuTemps = `${heurDonner}:${minuteDonner}:${secondeDonner}`;

// console.log(resultaDuTemps);

// exo 4.4

// let p = 20;
// let prix = 0;

// if (p >= 30) {
//     prix = 10*0.1 + 20*0.09 + (p-30)*0.08;
// }else if (p > 10) {
//     prix = 10*0.1 + (p-10)*0.09;
// }else {
//     prix = p*0.1;
// }



// console.log(prix);

// exo 4.6

// let Daan = 25;
// let Ethan = 30;
// let Enzo = 18;
// let Ugo = 27;

// if (Ugo >= 50 || Enzo >= 50 || Ethan >= 50) {
//     console.log("Il a perdu");
// }

// if (Daan >= 50) {
//     console.log("Il est élu dès le premier tour");
// }else if(Daan >= 12.5 && Daan > Ugo && Daan > Enzo && Daan > Ethan) {
//     console.log("Il se trouve en ballottage favorable");
// }else {
//     console.log("Il se trouve en ballottage defavorable");
// }


// if (Daan >= 12.5) {
//     console.log("Il se trouve en 2 tour");
// }else {
//     console.log("Il est défavorable");
// }

//  exo 4.8

// let annee = 2022;
// let mois = 11;
// let jour = 30;

// let jourVerifier;
// let moisVerifier;
// let anneeVerifier;

// if (mois > 12) {
//     mois = false;
// }


// if (jour > 31) {
//     jour = false;
// }else if (jour <= 31 && mois% 2 === 0) {
//     jour = true;
//     mois = true;
// }else if (jour <= 30 && mois% 1 === 0) {
//     jour = true;
//     mois = true;
// }else {
//     jourVerifier = false;
//     moisVerifier = false;
// }

// if (annee% 1 === 0) {
//     annee = true;
// }else {
//     anneeVerifier = false;
// }
// if (annee% 4 === 0) {
//     annee = true;
// }else {
//     anneeVerifier = false;
// }

// if (annee === true && mois === true && jour === true) {
//     console.log("la date est bonne");
// }else {
//     console.log("la date est fausse");
// }

// exo 5.2

// let nomb = 8;

// while (nomb < 10 || nomb > 20) {
//     if (nomb < 10) {
//         nomb = prompt("Plus grand!")
//     }else if (nomb > 20) {
//         nomb = prompt("Plus petit!")
//     }
// }

// alert("le nombre est bien")

// exo 5.4

// let nombre = 7;
// let reesult = 0;
// for (let i = 1; i <= 10; i++) {
//     reesult = nombre*i
//     console.log(reesult);
// }

// exo 5.6 

// let result = 1;

// for (let i = 0; i < 8; i++) {
//     result += result * i;
// }

// console.log(result);


// exo 5.4

// let num = prompt("numero");
// let plus = 0;
// let cont = 0;
// let counter = 0;

// while (num > 0){
//     num = prompt("un autre");
//     cont++;
//     if (num > plus) {
//         plus = num;
//         counter = cont + 1;
//     }

// }


// alert(`ton plus grand est ${plus} a la place ${counter}`)


// exo 5.9



// let num = parseInt(prompt("numero"));
// let resultaDesCourse = num;
// let billetDeDix = 0;
// let billetDeCinq = 0;
// let piece = 0;

// while (num > 0){
//     num = parseInt(prompt("un autre"));
//     resultaDesCourse += num;
// }

// alert(`le total est de ${resultaDesCourse}`);
// // let argentArendre = argent - resultaDesCourse;

// while (argent > 0 ) {
//     let argentAPayer = parseInt(prompt(``))
//     resultaDesCourse -= argentAPayer;
// }




// while (argentArendre > 0) {
//     if (argentArendre >= 10) {
//         argentArendre -= 10;
//         billetDeDix++;
//     }else if (argentArendre >= 5) {
//         argentArendre -= 5;
//         billetDeCinq++;
//     }else if (argentArendre < 5) {
//         argentArendre -= 1;
//         piece++;
//     }
// }


// alert(`la caissière rend ${billetDeDix} billet de dix  ${billetDeCinq} billet de cinq et ${piece} piece de 1`)


// exo 5.10

// let n = 10;
// let facN = 1;
// let p = 3;
// let facP = 1;
// let nMoinP = n - p;
// let facNMoinP = 1;

// for (let i = 0; i < n; i++) {
//     facN += facN * i;
// }

// for (let i = 0; i < p; i++) {
//     facP += facP * i;
// }

// for (let i = 0; i < nMoinP; i++) {
//     facNMoinP += facNMoinP * i;
// }


// let x = facN / facNMoinP;
// let y = facN / (facP*facNMoinP);

// alert(`votre chance de gagner dans le désordre et de ${y} et votre chance de gagner dans l'ordre ${x} `)

// exo fibo 

let nomb = parseInt(prompt("choisi un nombre"))

function fibonacci(nombre) {
    let n1 = 0;
    let n2 = 1;
    let somme = 0;
  
    for(let i = 2; i <= nombre; i++){
       somme = n1 + n2; 
       n1 = n2; 
       n2 = somme; 
    }
  
    return nombre ? n2 : n1;
 }

 alert(`la suite de se nombre est ${fibonacci(nomb)}`);