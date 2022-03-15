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

    //inserisco le celle all'interno del container 
    container.appendChild(boxes);

    //aggiungo un numero alla cella
    boxes.innerText = i + 1;

    //creo un evento che cambia colore delle celle al click
    boxes.addEventListener('click',
        () => {
            //aggiungo una classe che cambia il colore alla cella
            boxes.classList.toggle('green-cell');
    })
}


// ---------------------------- Functions ----------------------------------// 


// creo una funzione per avere la cella 
function createBox(){
    const item = document.createElement('div');
    item.classList.add('boxes');
    return item;
}



