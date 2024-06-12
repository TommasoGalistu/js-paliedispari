let outPutUtente = document.querySelector('#messaggio');
let linkGioco = document.querySelector('#linkGioco');
let bottoni = document.querySelectorAll('.close')

// chiedo un input all'utente
// let inputUtente = prompt('Scrivi una parola');

// // creao la risposta
// let risposta = isParolaPalindroma(inputUtente);
// outPutUtente.append(risposta);




// inizio gioco pari o dispari con click
linkGioco.addEventListener('click', () =>{
    console.log('click')
    for (let i = 0; i < bottoni.length; i++) {
        bottoni[i].className = 'open'
    }
});