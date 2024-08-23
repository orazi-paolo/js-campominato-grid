/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; 
*/

// MILESTONE 1 OK

// #MILESTONE 2 && MILESTONE 3 OK
// prendo dal dom gli elementi che mi servono
const buttonPlay = document.getElementById('play');
const grid = document.getElementById('grid');

// creo la variabile cell
let cell;

// quando clicco su play genero le celle con dentro i numeri
buttonPlay.addEventListener('click', function (){
    for(let i = 1; i <= 100; i++){
        cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerText = `${i}`;
        /* #MILESTONE 4  OK */
        // al click sulla cella stampo in console il suo contenuto
        cell.addEventListener('click', function(){
            console.log(this.textContent);
            // alla cella cliccata aggiungo due classi
            this.classList.add('bg-blue', 'color-white');
        })
        grid.appendChild(cell);
    }
})



