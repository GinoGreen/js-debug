/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
/* 1- Che cosa fa questo codice? 
    -Incremento di 1 la variabile i fin quando arriva a 5

   2- Sono presenti errori di sintassi?
    -No

   3- Sono presenti errori logici?
    -Si, bisogna sostituire maggiore con minore
*/



// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
/* 1- Che cosa fa questo codice? 
    -Incrementa 'num' di 5, se questo é pari

   2- Sono presenti errori di sintassi?
    -Si, nella condizione c'é un operatore di assgnazione (=) e non un operatore di ugualianza (== oppure ===)

   3- Sono presenti errori logici?
    -Si
*/


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
/* 1- Che cosa fa questo codice? 
    -É una funzione che fa ciclare 5 volte la variabile 'i', incrementandola, ad ogni ciclo, di 1

   2- Sono presenti errori di sintassi?
    -Si, bisogna sostituire la virgola con punto e virgola


   3- Sono presenti errori logici?
    -No
*/


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    console.log(evenNumbers);
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/* 1- Che cosa fa questo codice? 
    -Parte da un array (numbers) di numeri da 1 a 8 e copia i numeri pari in un altro array (evenNumbers)

   2- Sono presenti errori di sintassi?
    -A riga 69, rimuovere l'ultimo punto e virgola
    -A riga 69, rimuovere il '- 1' da 'numbers.length - 1'
    -A riga 70, sotituire 'numbers' con 'numbers[i]'
    -A riga 70, sotituire '=' con '==='
    -A riga 70, rimuovere il punto e virgola


   3- Sono presenti errori logici?
    -A riga 71, sostiuire 'i' con 'numbers[i]'
    -Spostare il return dopo e al di fuori del ciclo for (se ci interessa salvare l'array al di fuori della funzione)
*/