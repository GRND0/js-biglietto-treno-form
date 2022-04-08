


const pulsanteInvio = document.getElementById("pulsante-invio");
console.log(pulsanteInvio);
pulsanteInvio.addEventListener("click",
    function () {
        //input dati utente
        const nomeCognome = document.getElementById("nome-cognome");
        const kilometri = document.getElementById("kilometri");
        const age = document.getElementById("age");
        const prezzoKilometrico = 0.21;
        const scontoAnziani = 40;
        const scontoMinori = 20;
        let prezzoIntero = Number(kilometri) * prezzoKilometrico;

        //calcolo dati
        //formule di calcolo degli sconti
        let scontoDaUsare = 0;

        if (age = maggiorenne) {
            scontoDaUsare = scontoAnziani;
        }
        if (age = minorenne) {
            scontoDaUsare = scontoMinori;
        }

        //calcolo del prezzo finale
        let prezzoFinale = prezzoIntero - ((scontoDaUsare / 100) * prezzoIntero);
        console.log(typeof (prezzoFinale));

        //arrotondamento prezzo finale
        let prezzoFormattato = prezzoFinale.toFixed(2);

        //output
        document.getElementById("costo").innerHTML = prezzoFormattato + " €";


        /* //output dati nel form a comparsa
         const outputAnagrafica = document.getElementById("output-anagrafica");
         outputAnagrafica.innerHTML = `${nomeCognome}`;
         const*/
    }
)