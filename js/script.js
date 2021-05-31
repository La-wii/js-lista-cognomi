// Chiedi all’utente la sua email
var email = prompt('Inserisci la tua e-mail');


// Controlla che sia nella lista di chi può accedere

var lista = ["rossi@gmail.com", "gialli@gmail.com", "verdi@gmail.com"];


for (i = 0; i < lista.length; i++) {
    if (email == lista[i]) {
        console.log('Puoi accedere');
    } else {
        console.log('Non puoi accedere');
    }

}   



// Stampa un messaggio appropriato sull’esito del controllo.