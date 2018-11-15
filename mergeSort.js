'use strict';
/*
 * fn mergeSort()
 * Base case <= 1 return array
 * Get the middle of the array that's passed in
 * Create two arrays of the left and right halves
 * Call mergeSort recursively on both halves
 * Call merge and recreate a single array
 *
 * =========
 *
 * fn merge(left, right, and array)
 * Set indexes for left and right to track positions
 * Loop through the array while the left index is less than the left array's length and while the right index is less than the right array's length
 * Conditionally check whether the left value is less than the right value
 ** If so, the output is set to the left index on array
 ** Otherwise the output is set to the right index on array
 *
 * Loop over both left and right arrays
 * For every index in the array set the output index to the left array's index
 * For every index in the array set the output index to the right array's index
 * Return array
 */

const array = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5
];

let runCount = 0;

function mSort(array) {
  runCount++;

  // Base case
  if (array.length <= 1) {
    return array;
  }

  // Get the middle of the array that's passed in
  const middle = Math.floor(array.length / 2);

  // Create two arrays of the left and right halves
  let leftArray = array.slice(0, middle);
  let rightArray = array.slice(middle, array.length);

  // Call mergeSort recursively on both halves
  leftArray = mSort(leftArray);
  rightArray = mSort(rightArray);

  // Call merge and recreate a single array
  return merge(leftArray, rightArray, array);
}

function merge(leftArray, rightArray, array) {
  runCount++;
  // Set indexes for left and right to track positions
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  // Loop through the array while the left index is less than the left array's length and while the right index is less than the right array's length
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    runCount++;
    // Conditionally check whether the left value is less than the right value
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      // If so, the output is set to the left index on array
      array[outputIndex++] = leftArray[leftIndex++];
      // Increment
    } else {
      // Otherwise the output is set to the right index on array
      array[outputIndex++] = rightArray[rightIndex++];
      // Increment
    }
  }

  // Loop over both left and right arrays
  // Left
  for (let i = leftIndex; i < leftArray.length; i++) {
    runCount++;
    // For every index in the array set the output index to the left array's index
    array[outputIndex++] = leftArray[i];
  }

  // Right
  for (let i = rightIndex; i < rightArray.length; i++) {
    runCount++;
    array[outputIndex++] = rightArray[i];
  }

  // Return array
  return array;
}

console.log(mSort(array));
console.log('this is our count:', runCount);
