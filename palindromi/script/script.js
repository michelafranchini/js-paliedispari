// 1 - Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Inserisci una parola
var parola = prompt("Inserisci una parola"); 
console.log(parola);

// scompongo le lettere
var parolaDivisa = parola.split(""); 
console.log(parolaDivisa);

// cambio l'ordine delle lettere 
parolaDivisa = parolaDivisa.reverse(); 
console.log(parolaDivisa);

// ricompogno la parola al contrario
var parolaInvertita = parolaDivisa.join(""); 
console.log(parolaInvertita);

if (parolaInvertita == parola)  {
    console.log("E' un palindromo");
} else {
    console.log("Non è palindromo");
}