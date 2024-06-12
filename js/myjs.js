let outPutUtente = document.querySelector('#messaggio')

let inputUtente = prompt('Scrivi una parola')

let risposta = isParolaPalindroma(inputUtente)
outPutUtente.append(risposta)