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

//creo un ciclo per creare 100 box

for (let i = 0; i < totalBoxes; i++){

    // utilizzo la funziome per creare una cella 
    const boxes = createBox();

    //aggiungo la classe .boxes alle celle
    boxes.classList.add('boxes');

    //inserisco le celle all'interno del container 
    container.appendChild(boxes);
}


// ---------------------------- Functions ----------------------------------// 

// genero una funzione per avere un numero random 
function randomNumber(min, max) {
    
    const range = (max - min) + 1;


    // genero un numero random 
    const numeroRandom = Math.floor(Math.random() * range + min);
    

    return numeroRandom;
}


// creo una funzione per avere la cella 
function createBox(){
    const item = document.createElement('div');
    item.classList.add('cell');
    return item;
}




