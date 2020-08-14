// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

var doubleTripleMap = function (arr) {
    let solvedArr = [];
    for (let x of arr) {
        let num;
        //if int % 2 = 0, multiply x 2
        //else, multiply x 3
        x % 2 == 0 ? num = (x * 2) : num = (x * 3);
        //push result to new array
        solvedArr.push(num);
    }
    //return new array
    return solvedArr;
}; 