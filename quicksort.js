'use strict';
//input: 89 30 25 32 72
// output: 25 30 32 72 89

//quick sort function
// take array and get the start and end values.
// if start is greater than or equal to the end return array
//set middle to run partition function recursively
//(left) array runs quicksort passing in new end as current middle
//(right) array runs quicksort passing in new start as middle + 1
//return array once we're done

// partition function
// pivot is set to the array's end
// j marker is set to start
// loop through array with i set to start
// if value of array at index i is less than or equal to the pivot then swap
// run swap function passing array, i and j
// increment j
// run swap again after loop then run swap sending a new i equal to the end -1
// return j

//swap function sending in array, i and j
// set up temp equal to array at index i
// array at index i now should be set to array at index j
// array at index j is now set to temp

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function qSort(array, start = 0, end = array.length) {
  //base case
  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);

  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;

  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }

  swap(array, end - 1, j);
  return j;
}

console.log(
  qSort([
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
  ])
);
