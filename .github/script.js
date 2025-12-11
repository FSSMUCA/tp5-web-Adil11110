const { PureComponent } = require("react");

//EX1 :
let x = "150";
let y = 150;
let z = true;
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
x = Number(x);
console.log(typeof x);

// parce que le java scripte est un langague de type weakly

//EX2 : 
let prenome = "sara" , age = 22;
console.log("Je m'appelle " ,prenome , " et j'ai " ,(age+1), " ans");

//EX3 :

let nombre;
nombre = parseInt(prompt("entrer un nombre : "));
if(nombre<0){
    console.log("Nombre négatif");
}else if(nombr>=0 && nombre<=10){
    console.log("Petit");
}else if(nombr>=11 && nombre<=50){
    console.log("Moyen");
}else if(nombr>50){
    console.log("Grand");
}else if(nombr>50){
    console.log("Trés Grand");
}

//EX 4 : 

let min = Number(prompt("Entrez le nombre minimal : "));
let max = Number(prompt("Entrez le nombre maximal : "));
let i;
for(i=min;i<=max;i++){
    if(i%3==0){
        console.log("Three\n");
    }else if(i%5==0){
        console.log("Five\n");
    }else if (i%5==0 && i%3==0){
        console.log("Five/Three\n");
    }else{
        console.log("none\n");
    }
}

//EX5 : 

let n;
n = Number(prompt("entrer un nombre : "));
for(i=1;i<=10;i++){
    console.log(n," * ",i," = \n", i*n);
}

//EX 6 :

let somme1=0;
let somme2=0;
for(i=1;i<=50;i++){
    if(i%2==0){
        somme1 = somme1 + i;
    }else{
        somme2 = somme2 + i;
    }
    console.log("la somme des nombres paires est ",somme1);
    console.log("la somme des nombres impaires est ",somme2);
}

//EX7 : 

function verifierMotDePasse(mdp) {
    if (mdp.length >= 8 && mdp.includes('@')) {
        return true;
    } else {
        return false;
    }
}
let motDePasseUtilisateur = prompt("Entrez votre mot de passe :");
if (verifierMotDePasse(motDePasseUtilisateur)) {
    alert("Mot de passe valide");
} else {
    alert("Mot de passe non valide");
}

//EX8 :

function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}
let totalHT = parseFloat(prompt("Entrez le total HT :"));

let remise = parseFloat(prompt("Entrez la remise en % :"));

let totalFinal = totalAvecRemise(totalHT, remise);
alert("Le total final après remise est : " + totalFinal.toFixed(2) + " €");

//EX9 :

function factorielle(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

console.log("Factorielle de 5 : " + factorielle(5));

//EX10 :
//v1
function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}
console.log("Somme itérative de 1 à 5 : " + sommeIterative(5));
//v2
function sommeRecursive(n) {
    if (n == 0) {
        return 0;
    } else {
        return n + sommeRecursive(n - 1);
    }
}
console.log("Somme récursive de 1 à 5 : " + sommeRecursive(5));

// 1 - Quel code est le plus lisible ?
// verssion 1 pour les debutants
// 2 - Quel code est le plus performant ?
// verssion 1 est plus performant car la récursion peut consommer plus de memoire que la methode de les boucles
// 3 - La récursion peut-elle poser des problèmes ? Pourquoi ?
// Oui, si n est très grand, on peut dépasser la pile d’appels (stack overflow) et provoquer une erreur.
// 4 - Dans quels cas privilégier une boucle ?
// Pour des calculs simples et répétitifs, surtout si n est grand