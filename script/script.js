
const pulsanteInvio = document.getElementById("pulsante-invio");
console.log(pulsanteInvio);
pulsanteInvio.addEventListener("click",
    function () {
        //input dati utente
        const nomeCognome = document.getElementById("nome-cognome").value;
        const kilometri = document.getElementById("kilometri").value;
        const age = document.getElementById("age").value;
        const prezzoKilometrico = 0.21;
        const scontoAnziani = 40;
        const scontoMinori = 20;
        let prezzoIntero = Number(kilometri) * prezzoKilometrico;

        //calcolo dati
        //formule di calcolo degli sconti
        let scontoDaUsare = 0;

        if (age == "anziani") {
            scontoDaUsare = scontoAnziani;
        }
        if (age == "minorenne") {
            scontoDaUsare = scontoMinori;
        }

        //calcolo del prezzo finale
        let prezzoFinale = prezzoIntero - ((scontoDaUsare / 100) * prezzoIntero);


        //arrotondamento prezzo finale
        let prezzoFormattato = prezzoFinale.toFixed(2);


        function getRandom() {
            // Genera numeri random tra 1 e 16
            return Math.floor((Math.random() * 15) + 1);
        }

        function getRandom1() {
            // Genera numeri random tra 1 e 16
            return Math.floor((Math.random() * 9999) + 1);
        }

        let nomeOfferta = ""

        if (age == "minorenne") {
            nomeOfferta = "Young"
        }
        if (age == "maggiorenne") {
            nomeOfferta = "Biglietto standard"
        }
        if (age == "anziani") {
            nomeOfferta = "Silver"
        }


        //output
        document.getElementById("costo").innerHTML = prezzoFormattato + " €";
        document.getElementById("offerta").innerHTML = nomeOfferta;
        document.getElementById("output-anagrafica").innerHTML = nomeCognome;
        document.getElementById("carrozza").innerHTML = getRandom();
        document.getElementById("codice-cp").innerHTML = "2" + getRandom1();
        //visibilità form output
        let campoOutput = document.getElementById("campo-output");
        campoOutput.classList.remove("d-none");
    }
);

//pulsante di svuotamento campi
let pulsanteAzzera = document.getElementById("pulsante-azzera");

pulsanteAzzera.addEventListener("click",
    function () {
        let campoOutput = document.getElementById("campo-output");
        campoOutput.classList.add("d-none");

        const nomeCognome = document.getElementById("nome-cognome");
        nomeCognome.value = "";

        const kilometri = document.getElementById("kilometri");
        kilometri.value = "";

        const age = document.getElementById("age");
        age.value = "default";
    }
)