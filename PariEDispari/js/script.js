/**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const pariDispari = prompt('Scegli "pari" o "dispari": ');
console.log('Hai scelto: ', pariDispari);
const userNum = parseInt(prompt('Scegli un numero da 1 a 5: '));
console.log('Il tuo numero è: ', userNum);
const pcNum = randomPariDispari();
console.log('Il numero del pc è: ', pcNum);
const somma = userNum + pcNum;
console.log('la somma dei numeri è: ', somma);
const test = isPari(somma);

if((pariDispari === "pari" && test === true) || (pariDispari === "dispari" && test === false)){
  console.log("Hai Vinto!!!")
}
else if((pariDispari === "pari" && test === false) || (pariDispari === "dispari" && test === true)){
  console.log("Hai Perso!!!")
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