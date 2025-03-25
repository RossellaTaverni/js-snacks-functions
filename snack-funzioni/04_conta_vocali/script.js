/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const numeroVocali = myStringa(word);


// Dichiara la funzione qui.
function myStringa(parola){
    const vocali = ['a', 'e', 'i', 'o', 'u'];
    let conteggio = 0;

    for(let i=0; i<parola.length; i++){
        if(vocali.includes(parola[i])){
            // Se il carattere è una vocale, incrementa il conteggio
            conteggio++;
        }
    }
        
    return conteggio;
}



// Invoca la funzione qui e stampa il risultato in console
myStringa(word);
console.log(numeroVocali);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)