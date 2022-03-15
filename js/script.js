console.log('JS OK!');

/* Creare una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

// Creo la griglia di 100 numeri

// prendo il contenitore delle celle
const container = document.querySelector('.container');

// divido il contenitore in colonne e righe per creare le celle
const column = 10;

const row = 10;

// calcolo il numero di celle totali
const totalBoxes = column * row;

// creo il collegamento alla funziome er creare una cella 
const boxes = createBox();

// creo una cella 
function createBox(){
    const item = document.createElement('div');
    item.classList.add('cell');
    return item;
}




boxes.classList.add('boxes');

container.appendChild(boxes);