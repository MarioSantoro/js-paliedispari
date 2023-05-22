function checkPalindromString(words) { 
   let reverseString = "";
  for(let i = words.length-1; i >= 0; i--){
    reverseString += words[i];
  }

  if(words === reverseString){
    console.log("La parola è palindroma");
  }else{
    console.log("La parola non è palindroma");
  }
}  


let str = prompt("Inserisci una parola che sia palindroma");
checkPalindromString(str);