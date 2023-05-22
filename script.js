function checkPalindromString(words) { 
    let len = words.length;
    
    for (let i = 0; i < 1; i++) {  
        if (words[i] !== words[len - 1 ]) {  
           console.log("La parola inserita non è palindroma");
        }else{
            console.log("La parola inserita è palindroma");
        }
    }
}  


let str = prompt("Inserisci una parola che sia palindroma");

checkPalindromString(str);