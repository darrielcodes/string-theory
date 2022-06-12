// xify - returns the same string, but with every character replaced by an 'x'
console.log("xify:");

function xsify(str){
    let newString = "";

    for(let i = 0; i < str.length; i++){ // this is the index
        newString = newString + "x"
    }

    return newString
}

console.log(xsify("Hello"))
console.log(xsify("Hello There"))

console.log("\n")
// yellingChars - returns the given string with an exclamation point after each character
console.log("yellingChars:");

function yellingChars(str){
    let newStr1 = "";

    for(let i = 0; i < str.length; i++){
        newStr1 = newStr1 + str[i] + "!"
    }

    return newStr1
}

console.log(yellingChars("Goodness"))
console.log(yellingChars("Oh hello"))

console.log("\n")
// indexedChars - adds the index of each character before that character in the given string
console.log("indexedChars:");

function indexedChars(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        newStr = newStr + i + str[i]; 
    }

    return newStr
}

console.log(indexedChars("Hello"))
console.log(indexedChars("Bye"))

console.log("\n")
// exclaim - returns the given sentence with every question mark or period changed to an exclamation point
console.log("exclaim:");
//???????

function exclaim(str){
    let x = ""

    for(let i = 0; i < str.length; i++){
      if (str[i] === "?" || str[i] === "."){
        x = x + "!"}
      else {x = x + str[i]}
      
    }
    return x
}
console.log(exclaim("What are you doing?"))

console.log("\n")
// truncate - shortens a long string to 15 characters plus an ellipsis (...)
console.log("truncate:");

function truncate(str){
    let y = "";
    
    for (let i = 0; i < 15; i++){ 
       y = y + str[i] 
    }
 
return y + "...";
}

console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."));
console.log(truncate("Well, that's just, like, your opinion man."));

console.log("\n")
// ciEmailify - creates an email from a two-part name
console.log("ciEmalify:");

function ciEmailify(str){
    let newStr2 = "";

    for (let i =0; i < str.length; i++){
        if (str[i] === " "){
            //add period to code
            newStr2 += "."; // same as newStr2 = newStr2 + "."
        } else {
            newStr2 += str[i]
        }
        
    }

    return newStr2 + "@codeimmersives.com";

}
console.log(ciEmailify("Firstname Lastname")); // first.last@codeimmersives.com
console.log(ciEmailify("Saul Goodman"));

console.log("\n")
// reverse - reverses the given string
console.log("reverse:");

function reverse(str){
    let rev = ""

    for(let i = str.length-1; i >= 0; i--){
        rev = rev + str[i]
    }

    return rev
}

console.log(reverse("Colin"))
console.log(reverse("Arausem"))

console.log("\n")
// onlyVowels - returns only the vowels from a word
console.log("onlyVowels:");

function onlyVowels(str){
    let newString2 = ""

    for (let i = 0; i < str.length; i++){
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            newString2 = newString2 + str[i]
        }
    }
return newString2
}

console.log(onlyVowels("Just do it"));