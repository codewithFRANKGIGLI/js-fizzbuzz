// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
const numContainer = document.querySelector('#numbers');
console.log(numContainer);

for(let i = 1; i <= 100; i++) {
    // console.log(i);
    let fizzOrBuzz;
    if(i % 3 == 0 && i % 5 == 0) {
        // console.log('fizzbuzz');
        fizzOrBuzz = 'fizzbuzz';
    } else if(i % 3 == 0) {
        // console.log('fizz');
        fizzOrBuzz = 'fizz';
    } else if(i % 5 == 0) {
        // console.log('buzz');
        fizzOrBuzz = 'buzz';
    } else {
        // console.log(i);
    }
    const newBox = `<div class="box ${fizzOrBuzz}">${i}</div>`;
    numContainer.innerHTML += newBox;
}

// BONUS 1:
// Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare. FATTO

// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*,
// a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

