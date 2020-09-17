// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    const strArray = str.split("");
    let strObject = {};
    for (let item of strArray){    
        strObject[item] = strObject[item] + 1 || 1;  
       }
    return strObject;
};
