let outPutUtente = document.querySelector('#messaggio');
let linkGioco = document.querySelector('#linkGioco');


// chiedo un input all'utente
let inputUtente = prompt('Scrivi una parola');

// creao la risposta
let risposta = isParolaPalindroma(inputUtente);
outPutUtente.append(risposta);




// inizio gioco pari o dispari con click
linkGioco.addEventListener('click', () =>{
    let numeroUser = parseInt(prompt('scrivi un numero da 1 a 5 e gioca contro il computer'))
    
});