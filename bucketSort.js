'use strict';
const qSort = require('./quickSort');

//input: [4, 7, 2, 3, 10, 1, 19]
// we know that 1 is our lowest and 19 is our highest
// sort O(n)
// output: [1, 2, 3, 4, 7, 10, 19]

//find lowest value index and move it to beginning of array
//find largest value index and move to end of array
//[1, 4, 7, 2, 3, 10, 19]
// find range that the numbers would fall into 1-19
// 19 / length of array - 1 = Math.ceil(answer)
//which means length of each container is 4

//loop over to get new index values
//Math.Floor(index value / bucket range ) = index of bucket it goes to

// 0  1   2   3
//[] []  []  []

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bucketSort(array, min, max) {
  const range = max - min;
  const containers = Math.ceil(range / array.length + 1);
  const bucketContainer = new Array(containers);
  let result = [];

  //create our empty arrays
  for (let i = 0; i < bucketContainer.length; i++) {
    bucketContainer[i] = [];
  }

  //push indexs into their appropriate bucket based on their index
  for (let i = 0; i < array.length; i++) {
    //find appropriate index
    let index = Math.floor(array[i] / (containers - 1));
    //once you hit the max number assign it to the last array
    if (index > bucketContainer.length - 1) index = bucketContainer.length - 1;

    bucketContainer[index].push(array[i]);
  }

  //sort arrays inside of our bucket container
  for (let i = 0; i < bucketContainer.length; i++) {
    bucketContainer[i] = qSort(bucketContainer[i]);
  }

  //concating the arrays after they've been sorted
  for (let i = 0; i < bucketContainer.length; i++) {
    result = result.concat(bucketContainer[i]);
  }

  return result;
}

console.log(bucketSort([4, 7, 2, 3, 10, 1, 19, 33, 41, 66, 5, 90, 82], 1, 90));
