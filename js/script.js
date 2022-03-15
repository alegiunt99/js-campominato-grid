console.log('JS OK!');

/* Creare una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

const difficoltà1 = document.getElementById('one-hundred');

const difficoltà2 = document.getElementById('eighty-one');

const difficoltà3 = document.getElementById('fourty-nine');

// Prendo i container per ogni Livello

let containerOne = document.querySelector('.container-1');

let containerTwo = document.querySelector('.container-2');

let containerThree = document.querySelector('.container-3');

// TUTTI display none

containerOne.style.display = 'none';

containerTwo.style.display = 'none';

containerThree.style.display = 'none';

// creo evento nel pulsante per scegliere la difficoltà 1 

difficoltà1.addEventListener('click', 
    function () {
    
        // Creo la griglia di 100 numeri

        // prendo il contenitore delle celle
        
        containerOne.style.display = 'flex';

        containerTwo.style.display = 'none';

        containerThree.style.display = 'none';

        // divido il contenitore in colonne e righe per creare le celle
        const column = 10;

        const row = 10;

        // calcolo il numero di celle totali
        const totalBoxes = column * row;

        //creo un ciclo per creare 100 box

        for (let i = 0; i < totalBoxes; i++){

            // utilizzo la funziome per creare una cella 
            const boxes = createBox();

            boxes.classList.add('boxes-100');

            //inserisco le celle all'interno del container 
            containerOne.appendChild(boxes);

            //aggiungo un numero alla cella
            boxes.innerText = i + 1;

            //creo un evento che cambia colore delle celle al click
            boxes.addEventListener('click',
                () => {
                    //aggiungo una classe che cambia il colore alla cella
                    boxes.classList.toggle('green-cell');
            })
}


})




// creo evento nel pulsante per scegliere la difficoltà 2 

difficoltà2.addEventListener('click', 
    function () {
    
        // Creo la griglia di 81 numeri

        // prendo il contenitore delle celle
        
        containerOne.style.display = 'none';

        containerTwo.style.display = 'flex';

        containerThree.style.display = 'none';
        // divido il contenitore in colonne e righe per creare le celle
        const column = 9;

        const row = 9;

        // calcolo il numero di celle totali
        const totalBoxes = column * row;

        //creo un ciclo per creare 100 box

        for (let i = 0; i < totalBoxes; i++){

            // utilizzo la funziome per creare una cella 
            const boxes = createBox();

            boxes.classList.add('boxes-81');

            //inserisco le celle all'interno del container 
            containerTwo.appendChild(boxes);

            //aggiungo un numero alla cella
            boxes.innerText = i + 1;

            //creo un evento che cambia colore delle celle al click
            boxes.addEventListener('click',
                () => {
                    //aggiungo una classe che cambia il colore alla cella
                    boxes.classList.toggle('green-cell');
            })
}


})





// creo evento nel pulsante per scegliere la difficoltà 3 

difficoltà3.addEventListener('click', 
    function () {
    
        // Creo la griglia di 49 numeri

        // prendo il contenitore delle celle

        containerOne.style.display = 'none';

        containerTwo.style.display = 'none';

        containerThree.style.display = 'flex';

        // divido il contenitore in colonne e righe per creare le celle
        const column = 7;

        const row = 7;

        // calcolo il numero di celle totali
        const totalBoxes = column * row;

        //creo un ciclo per creare 100 box

        for (let i = 0; i < totalBoxes; i++){

            // utilizzo la funziome per creare una cella 
            const boxes = createBox();

            boxes.classList.add('boxes-49');

            //inserisco le celle all'interno del container 
            containerThree.appendChild(boxes);

            //aggiungo un numero alla cella
            boxes.innerText = i + 1;

            //creo un evento che cambia colore delle celle al click
            boxes.addEventListener('click',
                () => {
                    //aggiungo una classe che cambia il colore alla cella
                    boxes.classList.toggle('green-cell');
            })
}


})


// ---------------------------- Functions ----------------------------------// 


// creo una funzione per avere la cella 
function createBox(){
    const item = document.createElement('div');
    return item;
}



