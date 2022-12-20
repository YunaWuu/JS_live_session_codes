"use strict";

// global array
const arr = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

// save the old array
document.getElementById("beforeSort").innerHTML = arr;

// sort the array in ascending order
arr.sort(function (a, b) {
  return a - b;
});
document.getElementById("afterSort").innerHTML = arr;

// insert 19, 23, 30 at the end of the sorted array
arr.push(19, 23, 30);
arr.sort(function (a, b) {
  return a - b;
});
document.getElementById("insert").innerHTML = arr;


// remove 8, 31 from the array
arr.splice(2, 1);
arr.splice(-3, 1);
document.getElementById("remove").innerHTML = arr;


// This function takes two parameters: array and value, returns the index of target value if found, -1 otherwise
function sequentialSearch() {
  // get the target value
  let target = document.getElementById("txtSequential").value;
  // convert the entered value to a number
  target = parseFloat(target);
  // flags
  let found = false;
  let index = -1;

  // linear search - one match
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      found = true;
      document.getElementById("ansSequential").innerHTML = arr.indexOf(arr[i]);
      break;  // only one match, so break
    }
  }
  if (found == false)
    document.getElementById("ansSequential").innerHTML = index;
  //document.getElementById("ansSequential").innerHTML = "";
}


// This function takes two parameters: array and value, returns the index of the target element if found, -1 otherwise
function binarySearch() {
  // get the target value
  let targetValue = document.getElementById("txtBinary").value;
  // convert the entered value to a number
  targetValue = parseFloat(targetValue);
  let index = -1; // flag

  if (binarySearchRecursive(arr, targetValue, 0, arr.length - 1)) {
    document.getElementById("ansBinary").innerHTML = arr.indexOf(targetValue);
  } 
  else 
    document.getElementById("ansBinary").innerHTML = index;
}

function binarySearchRecursive(theArr, targetValue, start, end) {
  // base conditions
  if (start > end) {
    return false;
  }
  // find middle element
  let mid = Math.floor((start + end) / 2);

  // compare the middle element with target value
  if (theArr[mid] === targetValue) {
    // if found, return true
    return true;
  } 
  else if (theArr[mid] > targetValue) {
    return binarySearchRecursive(theArr, targetValue, start, mid - 1);
  } 
  else 
    return binarySearchRecursive(theArr, targetValue, mid + 1, end);
}
