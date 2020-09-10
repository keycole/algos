// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let sum = arr.reduce((a, b) => {return a + b}, 0);
    return sum;
};
