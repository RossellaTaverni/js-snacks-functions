/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter  = 'A'

// Dichiara la funzione qui.
/*function namesWhitA(word, lettera){
    // Con Array.isArray andiamo a verificare che l'argomento passato alla funzione sia effettivamente un array
    if(Array.isArray(word)){
        // Usiamo filter() per iterare su ogni parola nell'array. 
        // Il metodo filter() restituisce un nuovo array che contiene solo gli elementi che soddisfano una determinata condizione.
        // Otteniamo il primo carattere della parola con charAt(0).
        // Per non tener conto se la lettera è maiuscola o minuscola usiamo toLowerCase() sia sulla lettera che sul primo carattere della parola.
        return word.filter(word => word.charAt(0).toLowerCase() === lettera.toLowerCase());
    }
}*/

const namesWhitA = (word,lettera) =>{
    if(Array.isArray(word)){
        return word.filter(word => word.charAt(0).toLowerCase() === lettera.toLowerCase());
    } 
}
// Invoca la funzione qui e stampa il risultato in console
namesWhitA(names,letter);
console.log(namesWhitA(names,letter));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]