/**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


//Variabili
let pariDispari = prompt('Scegli "pari" o "dispari": ');
while(pariDispari !== "pari" && pariDispari !==  "dispari"){
  pariDispari = prompt('Errore: devi scegliere: "pari" o "dispari" (in minuscolo): ');
}
console.log('Hai scelto: ', pariDispari);

let userNum = parseInt(prompt('Scegli un numero da 1 a 5: '));
while(isNaN(userNum) || userNum > 5 || userNum < 1){
  userNum = parseInt(prompt('Errore: devi scegliere un numero da 1 a 5: '));
}
console.log('Il tuo numero è: ', userNum);

const pcNum = randomPariDispari();
console.log('Il numero del pc è: ', pcNum);

const somma = userNum + pcNum;
console.log('la somma dei numeri è: ', somma);

//Verifica Vincita
const test = isPari(somma);
switch(pariDispari){
  case 'pari' : 
    if(test === true){console.log("Hai Vinto!!!")}
    else if(test === false){console.log("Hai Perso!!!")}
    break;
  case 'dispari' : 
    if(test === false){console.log("Hai Vinto!!!")}
    else if(test === true){console.log("Hai Perso!!!")}
    break;
}

//funzione randomPariDispari
function randomPariDispari(){
  const num = (Math.floor(Math.random()*5) + 1);
  return num;
}

//funzione isPari
function isPari(num){
  let boolean = false;
  if(!(num%2)){
    boolean = true;
  }
  else{
    boolean = false;
  }

  return boolean;
}