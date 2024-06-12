// funzione che valuta se una parola è palindroma o no
function isParolaPalindroma(parola){
    // toglie tutti quei caratteri speciali dalla parola
    let senzaCarSpeciali = parola.replace(/[!@#\$%\^\&*\)\(+=._-]+/g, '');
    // mette la parola tutta in minuscolo
    let parolaConfronto = senzaCarSpeciali.toLowerCase();
    // rende ogni lettera della parola un elemento di un array
    let arrParole = parolaConfronto.split('')
    // rigira l'array in maniera speculare
    let parolaReverse = arrParole.reverse(arrParole)
    // rende l'array una stringa senza spazi o virgole
    let parolaDef = parolaReverse.join('')

    // se è palindroma o no
    if(parolaConfronto === parolaDef){
        return 'La parola è palindroma'
    }else{
        return 'La parola NON è palindroma'
    }
    

}

function isFrasePalindroma(frase){
    // toglie tutti quei caratteri speciali dalla parola
    let senzaCarSpeciali = frase.replace(/[!@#\$%\^\&*\)\(+=._-]+/g, '');
    // mette la parola tutta in minuscolo
    let parolaConfronto = senzaCarSpeciali.toLowerCase();
    // rende ogni lettera della parola un elemento di un array
    let arrParole = parolaConfronto.split('')
    // rigira l'array in maniera speculare
    let parolaReverse = arrParole.reverse(arrParole)
    // rende l'array una stringa senza spazi o virgole
    let parolaDef = parolaReverse.join('')

    // se è palindroma o no
    if(parolaConfronto === parolaDef){
        return 'La parola è palindroma'
    }else{
        return 'La parola NON è palindroma'
    }


}


console.log(isParolaPalindroma('YAmaMAY'))