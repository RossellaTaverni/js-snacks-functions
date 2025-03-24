/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const myName = 'Mario';


// Dichiara la funzione qui.
function saluto(stringa){
   
    // Otteniamo l'ora corrente
    const ora = new Date().getHours();  // Otteniamo l'ora in formato 24 ore (0-23)

   // Controlliamo in quale intervallo si trova l'ora corrente
    if (ora >= 6 && ora < 13) {
        console.log('Buongiorno ' + stringa + '!');
    } 
    else if (ora >= 12 && ora < 17) {
        console.log('Buon pomeriggio ' + stringa + '!');
    } 
    else{
        console.log('Buonasera ' + stringa + '!');
    } 
}


// Invoca la funzione qui e stampa il risultato in console
saluto(myName);



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.