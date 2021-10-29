/* Palindroma:
1. Chiedere all’utente di inserire una parola
2. Creare una funzione per capire se la parola inserita è palindroma */

const string = prompt("Inserisci una parola:");
const array = isPalindroma(string);
console.log("La parola inserita è palindroma?: ", array);

//Funzione Palindroma

function isPalindroma(string){
  const stringLeft = [];
  const stringRight = [];
  let boolean = false;
  if(!(string.length%2)){
    for(let i = 0; i < (string.length/2); i++){
      stringLeft.push(string.charAt(i));
    }
    console.log('StringLeft: ',stringLeft);

    for(let x = string.length - 1; x >= (string.length/2)  ; x--){

      stringRight.push(string.charAt(x));
    }
    console.log('StringRight: ',stringRight);
    
    for(let y = 0; y < stringLeft.length && y < stringRight.length; y++){
      if(stringLeft[y] = stringRight[y]){
        boolean = true;
      }
      else{
        boolean = false;
      }
    }

  }
  return boolean;
}
