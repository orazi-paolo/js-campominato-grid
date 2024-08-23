/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// MILESTONE 1 OK

// #MILESTONE 2 && MILESTONE 3 OK

// prendo dal dom gli elementi che mi servono
const buttonPlay = document.getElementById('play');
const grid = document.getElementById('grid');
const selectField = document.getElementById('difficulty');

// quando clicco su play genero le celle con dentro i numeri
buttonPlay.addEventListener('click', function (){
    grid.innerHTML = '';
    // se l utente ha scelto easy
    if(selectField.value === 'easy'){
        for(let i = 1; i <= 100; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell-easy');
            cell.innerText = `${i}`;
            grid.appendChild(cell);
            // al click sulla cella stampo in console il suo contenuto
            cell.addEventListener('click', function() {
                console.log(this.textContent);
                // se contiene già le classi le rimuovo al contrario le inserisco
                if (this.classList.contains('bg-blue') && this.classList.contains('color-white')) {
                    this.classList.remove('bg-blue', 'color-white');
                } else {
                    this.classList.add('bg-blue', 'color-white');
                }
            })
        }
        // se l utente ha scelto medium
    }else if(selectField.value === 'medium'){
        for(let i = 1; i <= 81; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell-medium');
            cell.innerText = `${i}`;
            grid.appendChild(cell);
            // al click sulla cella stampo in console il suo contenuto
            cell.addEventListener('click', function() {
                console.log(this.textContent);
                // se contiene già le classi le rimuovo al contrario le inserisco
                if (this.classList.contains('bg-blue') && this.classList.contains('color-white')) {
                    this.classList.remove('bg-blue', 'color-white');
                } else {
                    this.classList.add('bg-blue', 'color-white');
                }
            })
        } //se l utente ha scelto hard
    }else if(selectField.value === 'hard'){
        for(let i = 1; i <= 49; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell-hard');
            cell.innerText = `${i}`;
            grid.appendChild(cell);
            // al click sulla cella stampo in console il suo contenuto
            cell.addEventListener('click', function() {
                console.log(this.textContent);
                // se contiene già le classi le rimuovo al contrario le inserisco
                if (this.classList.contains('bg-blue') && this.classList.contains('color-white')) {
                    this.classList.remove('bg-blue', 'color-white');
                } else {
                    this.classList.add('bg-blue', 'color-white');
                }
            })
        }
    }
})



