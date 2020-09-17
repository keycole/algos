// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    arr.sort(function(a, b){return a-b});
    return (arr[(arr.length - 2)] * arr[(arr.length - 1)]);
};
