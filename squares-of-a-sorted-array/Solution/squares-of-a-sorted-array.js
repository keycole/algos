// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {
    //placeholder array for squared array values
    let newArr = [];
    //loop through the array, squaring each value
    //push the squared value to the placeholder array
    for (let x of arr){
        num = Math.pow(x, 2);
        newArr.push(num);
    };
    //sort the squared array to appear in ascending order
    //numbers must be squared first to account for negative numbers
    newArr.sort(function(a,b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    //return the newArray (squared, then sorted values)
    return newArr;
};
