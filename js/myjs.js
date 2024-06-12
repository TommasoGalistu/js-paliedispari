let outPutUtente = document.querySelector('#messaggio');
// secondo gioco
let linkGioco = document.querySelector('#linkGioco');
let fraseInizioGioco = document.querySelectorAll('.close.frase');
let bottoni = document.querySelectorAll('.close.bottoni');
let inputScelto = document.querySelector('.pariOdispari');
// container bottoni
let contBottoni = document.querySelector('.containerGioco');
let inputUtente = document.querySelectorAll('.close.selezione');
let buttonFinale = document.querySelector('#buttonGiocofinale');

// chiedo un input all'utente
// let inputUtente = prompt('Scrivi una parola');

// // creao la risposta
// let risposta = isParolaPalindroma(inputUtente);
// outPutUtente.append(risposta);




// inizio gioco pari o dispari con click
// faccio apparire il primo livello da completare
linkGioco.addEventListener('click', () => {
    fraseInizioGioco.className = 'open'

    for (let i = 0; i < bottoni.length; i++) {
        bottoni[i].className = 'open'
    }
});

// faccio selezionare al giocatore pari o dispari e attraverso un 
// input gli faccio inserire un numero
let sceltaGiocatore;
contBottoni.addEventListener('click', (event) => {
    // trovo il bottone se è pari o dispari
    let qualeButton = Array.from(bottoni).indexOf(event.target);
    sceltaGiocatore = qualeButton === 0 ? 'pari' : 'dispari';
    inputScelto.textContent = 'Hai scelto: ' + sceltaGiocatore;
    // faccio visualizzare la scritta per continuare il gioco
    inputUtente.forEach(element => {
        element.classList.remove('close')
        element.classList.add('open')
    });
    // faccio sparire i bottoni
    bottoni.forEach(element => {
        element.className = 'close'
    });

})




