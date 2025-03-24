/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/*function firstLetter(word){
    // Con Array.isArray andiamo a verificare che l'argomento passato alla funzione sia effettivamente un array
    if(Array.isArray(word)){
        // Con .map() applichiamo la logica a tutte le parole nell'array
        // restituendo un nuovo array con le iniziali in maiuscolo
        const letter = word.map(word => word.charAt(0).toUpperCase());
        return letter;
    }    
}*/

const firstLetter = (word) =>{
    if(Array.isArray(word)){
        const letter = word.map(word => word.charAt(0).toUpperCase());
        return letter;
    }    
}
// Invoca la funzione qui e stampa il risultato in console
firstLetter(names);
console.log(firstLetter(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]