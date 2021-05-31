// Chiedi all’utente la sua email
// var email = prompt('Inserisci la tua e-mail');


// Controlla che sia nella lista di chi può accedere

// var lista = ["rossi@gmail.com", "gialli@gmail.com", "verdi@gmail.com"];


// for (i = 0; i < lista.length; i++) {
//     if (email == lista[i]) {
//         console.log('Puoi accedere');
//     } else {
//         console.log('Non puoi accedere');
//     }

// }   

// Stampa un messaggio appropriato sull’esito del controllo.

// for (i = 0; i < lista.length; i++) {
//     if (email == lista[i]) {
//         alert('Puoi accedere');
//     } else {
//         alert('Non puoi accedere');
//     }

// }   

// SECONDO ESERCIZIO

// chiedi all’utente il cognome
var cognome = prompt('Scrvi il tuo cognome');

// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
listaCognomi.push(cognome);
console.log(listaCognomi);
// stampa la lista ordinata alfabeticamente
listaCognomi.sort();
console.log(listaCognomi);

document.getElementById("elenco").innerHTML = listaCognomi;


// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// tentativo 1
// listaCognomi.forEach(function(element) {
//     listaCognomi.push("<li>" + element + "</li>");
// });

// list.innerHTML = listaCognomi.join('');


// tentativo 2
// listaCognomi.indexOf() + 1;
// console.log(listaCognomi);

var posizione = listaCognomi.indexOf(cognome);
document.getElementById("tuaposizione").innerHTML = posizione + 1;

