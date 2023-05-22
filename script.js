// Esercizio Parole palindrome

/**
 * 
 * @param words An input string that we want to verify is a palindrome
 */
function checkPalindromString(words) { 
    let reverseString = "";
    // Created for which loops through the size of the string and reverses it into a new string
   for(let i = words.length-1; i >= 0; i--){
     reverseString += words[i];
   }

    //check if the strings are equal
   if(words === reverseString){
     console.log("La parola è palindroma");
   }else{
    console.log("La parola non è palindroma");
  }
}  


let str = prompt("Inserisci una parola che sia palindroma");

// Using Function
checkPalindromString(str);




//  Eserczio Pari o Dispari 

/**
 * 
 * @returns This function returns a random number between 1 a 5
 */
function RandomNumberCpu(){
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}

/**
 * 
 * @param sum this param it is the sum that will be checked
 * @returns This function returns a true if the sum is even otherwise false
 */
function SumOfTwoNumber(sum){
    if(sum % 2 == 0){
        return true;
    }else{
        return false;
    }
}


let Userchoice = prompt("Scegli tra Pari o Dispari");
let UserNumber = parseInt(prompt("Scegli un numero tra 1 e 5"));

// check if the user entered the right numbers
while(UserNumber < 1 || UserNumber > 5){
    UserNumber = parseInt(prompt("Hai scelto un numero non consentito prova di nuovo"));
}
let sum =0;

// Using the function for a randomNumber
let CpuNumber = RandomNumberCpu();
console.log(CpuNumber)
sum = CpuNumber + UserNumber;

console.log(sum)

// Checking user win
 if(Userchoice === "Pari" && SumOfTwoNumber(sum) == true){
    console.log("hai Vinto!!");
 }else if(Userchoice === "Dispari" && SumOfTwoNumber(sum) == false){
    console.log("hai Vinto!!");
 }else{
    console.log("hai Perso!!");
 }



