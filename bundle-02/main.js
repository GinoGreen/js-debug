/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    console.log(message);
}
checkAge();

/* 1- Che cosa fa questo codice? 
    -la variabile message conterrá la stringa `Sei troppo giovane!...` se la variabile myAge contiene un numero minore di 18, altrimenti message conterrá la stringa `Hai più di 18 anni!`

   2- Sono presenti errori di sintassi?
    -Si, message non é una costante ma un variabile, quindi, a riga 16, sostituire 'const' con 'let'

   3- Sono presenti errori logici?
    -Si, se myAge é uguale a 18 allora la stringa `Hai più di 18 anni!` é scorretta.
*/

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

/* 1- Che cosa fa questo codice? 
    -Questa funzione ci dice quanti elementi contiene l'array 'colors'

   2- Sono presenti errori di sintassi?
    -A riga 40, sostituire 'lenght' con 'length'

   3- Sono presenti errori logici?
    -No
*/


// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

/* 1- Che cosa fa questo codice? 
    -Dato un numero inserito dall'utente, sommarlo al numero 12

   2- Sono presenti errori di sintassi?
    -No

   3- Sono presenti errori logici?
    -Si, aggiungere la funzione parseInt al prompt, altrimenti la variabile total conterrá un concatenazione di stringe dei numeri
*/


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

/* 1- Che cosa fa questo codice? 
    -Data l'email dell'utente, controlla se questa é prensente nell'array addresses, se si, grantAccess diventa true. Eventualmente il console.log sará `Accesso consentito!`, altrimenti `Accesso negato!`

   2- Sono presenti errori di sintassi?
   -No
   
   3- Sono presenti errori logici?
   -Si, grantAccess dove contenere un valore booleano, non una stringa, quindi rimuovere gli apici dove presenti
*/


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {

        grantAccess = true;            
        }
      }
        
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();

/* 1- Che cosa fa questo codice? 
    -Data l'email dell'utente, controlla se questa é lunga almeno 6 caratteri e se prensente nell'array addresses, se si, grantAccess diventa true. Eventualmente il console.log sará `Accesso consentito!`, altrimenti `Accesso negato!`

   2- Sono presenti errori di sintassi?
    -Manca una graffa di chiusura
   
   3- Sono presenti errori logici?
   -A riga 120, rimuovere gli apici a 'true'
*/

//////////////////// Allora ci sono due errore? ///////////////////