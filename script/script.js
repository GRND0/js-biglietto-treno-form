//input dei dati
let kilometri = prompt ("Inserire kilometraggio")  ;
document.getElementById ("distanza").innerHTML = kilometri  +  " Km" ;
let age = prompt ("Inserire età viaggiatore") ;
document.getElementById("anni").innerHTML = age + " anni" ;

//costanti
const prezzoKilometrico = 0.21 ;
const scontoAnziani = 40 ;
const scontoMinori = 20 ;

//calcolo del prezzo senza riduzioni
let prezzoIntero = Number (kilometri) * prezzoKilometrico ;
console.log( typeof (prezzoIntero)) ;

//formule di calcolo degli sconti
let scontoDaUsare = 0 ;

if (age > 65) {
    scontoDaUsare = scontoAnziani ;
}
if (age < 18 ) {
    scontoDaUsare = scontoMinori ;
}

//calcolo del prezzo finale
let prezzoFinale = prezzoIntero - ((scontoDaUsare / 100 ) * prezzoIntero ) ;
console.log( typeof (prezzoFinale)) ;

//arrotondamento prezzo finale
let prezzoFormattato = prezzoFinale.toFixed(2) ;

//output
document.getElementById ("costo-finale").innerHTML = prezzoFormattato +  " €" ;
