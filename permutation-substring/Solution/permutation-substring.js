// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    let myArray = sub.split("");
    let myAnswer = true;
    for(let x of myArray){
        if(str.includes(x) === false){
            myAnswer = false;
            break;
        }
    }
    return myAnswer;
};
