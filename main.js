/* Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */



var listaNumeri = [];

// creo la lista dei numero da 1 a 100 e la inserisco nell'array vuoto che ho creato
for (var i = 1; i<=100; i++){
   listaNumeri.push(i);
}


for (var i = 0; i < listaNumeri.length; i++) {

    switch (true) {
         // controllo se un elemento della lista è multiplo di 3 e 5 lo sostituisco con la parola FizzBuzz
        case Number.isInteger(listaNumeri[i] / 5) && Number.isInteger(listaNumeri[i] / 3):
            listaNumeri[i]='FizzBuzz';
            break;
        // controllo se un elemento della lista è multiplo di 5 e lo sostituisco con la parola Buzz 
        case Number.isInteger(listaNumeri[i] / 5):
            listaNumeri[i]='Buzz';
            break;
        // controllo se un elemento della lista è multiplo di 3 e lo sostituisco con la parola Fizz
        case Number.isInteger(listaNumeri[i] / 3):
                listaNumeri[i]='Fizz';
            break;
    
    }
}

console.log(listaNumeri);

