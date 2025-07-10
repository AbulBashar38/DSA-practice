// you are given an array of integers in which each subsequent value is not less then the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

// const squareArrayAndSort = (array) => {
//   if (!array.length) {
//     return [];
//   }
//   const newArray = new Array(array.length).fill(0);
//   let leftPointer = 0;
//   let rightPointer = array.length - 1;
//   for (let i = array.length - 1; i >= 0; i--) {
//     const leftPointerSquire = Math.pow(array[leftPointer], 2);
//     const rightPointerSquire = Math.pow(array[rightPointer], 2);

//     if (leftPointerSquire > rightPointerSquire) {
//       newArray[i] = leftPointerSquire;
//       leftPointer++;
//     } else {
//       newArray[i] = rightPointerSquire;
//       rightPointer--;
//     }
//   }
//   return newArray;
// };
// console.log(squareArrayAndSort([-3, -2, 1, 0, 1, 2, 3, 4, 5]));

// check if the array is monotonic or not:

// function isMonotonic(array) {
//   if (array.length === 0) {
//     return true;
//   }
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   if (firstElement < lastElement) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > array[i + 1]) {
//         return false;
//       }
//     }
//   } else if (firstElement === lastElement) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] !== array[i + 1]) {
//         return false;
//       }
//     }
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] < array[i + 1]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(isMonotonic([10, 9, 8, 7, 6]));

// find the largest

function getLargestNumber(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// find the minimum

function getLowestNumber(arr) {
  let lowest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }
  return lowest;
}

// get second largest

function getSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const array = [1, 3, 2, 4, 5, 2, 4, 8, 9, 10, 44, 34, 2, 3, 5, 4, 7];

const largest = getLargestNumber(array);
const secondLargest = getSecondLargest(array);
const lowest = getLowestNumber(array);

// console.log({ largest, secondLargest, lowest });

// pattern

/*
n = 4

* * * *
* * * *
* * * *
* * * *

*/

function pattern1(n) {
  for (let i = 0; i <= n; i++) {
    let pattern = "";
    for (let j = 0; j <= n; j++) {
      pattern += " *";
    }
    console.log(pattern);
    pattern = "";
  }
}
// pattern1(4);

/*
n = 4

* 
* * 
* * * 
* * * *

*/

function pattern2(n) {
  for (let i = 0; i <= n; i++) {
    let pattern = "";
    for (let j = 0; j < i + 1; j++) {
      pattern += " *";
    }
    console.log(pattern);
    pattern = "";
  }
}
// pattern2(4);

/*
n = 4

      * 
    * * 
  * * * 
* * * *

*/

function pattern3(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j < n - (i + 1); j++) {
      pattern += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      pattern += "*";
    }
    console.log(pattern);
    pattern = "";
  }
}

// pattern3(5);

/*
n = 4

1
1 0
1 0 1
1 0 1 0

*/

function pattern4(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j < i + 1; j++) {
      if (j % 2 === 0) {
        pattern += " 1";
      } else {
        pattern += " 0";
      }
    }
    console.log(pattern);
    pattern = "";
  }
}
pattern4(5);

/*
n = 7

1
0 1
0 1 0
1 0 1 0
1 0 1 0 1
0 1 0 1 0 1
0 1 0 1 0 1 0

*/
