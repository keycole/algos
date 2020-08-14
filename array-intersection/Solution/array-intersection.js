// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
    //
    var z = arr1.filter(function(val) {
        return arr2.indexOf(val) != -1;
      });
      
      console.log("The value of z = ", z);
      return z;
};
