const { defaultCompare, Compare } = require("../utils");

function binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];

    if (compareFn(element, value) === Compare.LESS_THAN) {
      return binarySearchRecursive(array, value, mid + 1, high, compareFn);
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      return binarySearchRecursive(array, value, low, mid - 1, compareFn);
    } else {
      return mid;
    }
  }

  return -1;
}

function binarySearch(array, value, compareFn = defaultCompare) {
  const sorted = array.sort();
  const low = 0;
  const high = sorted.length - 1;

  return binarySearchRecursive(array, value, low, high, compareFn);
}

console.log(binarySearch([1, 3, 4, 2, 6, 5, 7, 12, 19, 13], 11));