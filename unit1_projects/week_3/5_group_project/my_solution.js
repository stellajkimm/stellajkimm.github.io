// apparently we are given an array of numbers and are asked to do 3 things:

// 1 - total sum

// - create empty integer variable totalSum to add stuff from the for loop

// - set up default for-loop syntax
//   - incrementally sum array numbers to totalSum variable
  
// - console log totalSum to check



// 2 - average

// - create empty integer variable totalSum to add stuff from the for loop

// - set up default for-loop syntax
//   - incrementally sum array numbers to totalSum variable
//   - average equals totalSum divided by array length
  
// - console log average to check



// // 3 - median

// - create function that takes array as argument
//   - sort the array
//   - get the length of the array
//     - if the length is odd (by using modulus)
//        - return the middle value
//     -else
//        - get the two middle values
//        - calculate the average of the two values
//        - return the average
       
// - console log function with array to check



// TOTAL SUM

var sum = function (array) {
    var totalSum = 0;
    for (var i = 0; i < array.length; i++) {
      totalSum += array[i];
    }
    return totalSum;
}
 
console.log(totalSum);


// AVERAGE

var mean = function (array) {
    var totalSum = 0;
    for (var i = 0; i < array.length; i++) {
      totalSum += array[i];
    }
    var average = totalSum / array.length;
    return average;
}

console.log(average);

//  MEDIAN


var median = function(array) {
  array.sort();
  if (array.length % 2 !== 0) {
    return array[Math.floor(array.length/2)];
  }
  else {
    midvalue1 = array[(array.length / 2) - 1];
    midvalue2 = array[((array.length + 2)/2) - 1];
    return (midvalue1 + midvalue2) / 2;
  }
};