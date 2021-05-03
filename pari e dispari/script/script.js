// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
 

// // scelta pari o dispari
var sceltaPariDispari = prompt("pari o dispari?"); 
console.log("hai scelto: " , sceltaPariDispari);

// utente sceglie numero da 1 a 5 
var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5")); 
console.log("Il numero del player è: " , numeroUtente);

// generanumero random da 1 a 5 per computer FUNZIONE
function randomNumber (min, max) {

    var number = Math.floor(Math.random() * (max - min) + min); 
    return number; 
}

var numeroRandomPc = randomNumber(1, 5); 
console.log("Il numero del pc è: ", numeroRandomPc);

// sommare num utente e num computer
var somma = numeroRandomPc + numeroUtente; 
console.log("la somma tra i due numeri è: " , somma);

// stabilire se somma è pari o dispari FUNZIONE
function pariODispari (somma) {
    
    if (somma % 2 == 0) {
        console.log("pari");
        return true; 
    } else {
        console.log("dispari");
        return false; 
    }
}

var sommaPariDispari = pariODispari(somma); 
console.log(sommaPariDispari);

// dichiara vincitore

if (sceltaPariDispari == "pari" && sommaPariDispari == true) {
    console.log("hai vinto");
} else if (sceltaPariDispari == "dispari" && sommaPariDispari == false){
    console.log("hai vinto");
} else {
    console.log("hai perso");
}
