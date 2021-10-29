/**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const pariDispari = "dispari";
const userNum ="2";
const pcNum = "2";
const somma = userNum + pcNum;
const test = isPari(somma);

if((pariDispari === "pari" && test === true) || (pariDispari === "dispari" && test === false)){
  console.log("Hai Vinto!!!")
}
else if((pariDispari === "pari" && test === false) || (pariDispari === "dispari" && test === true)){
  console.log("Hai Perso!!!")
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