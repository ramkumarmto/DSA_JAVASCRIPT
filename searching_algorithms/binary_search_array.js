// Binary search is a much faster form of search
// Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
// Binary search only works on sorted arrays!

function binarySearch(arr, num) {
  if (arr.length === 0) return null;
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== num && end >= start) {
    if (num > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === num) return middle;
  return -1;
}
console.log(binarySearch([1, 3, 5, 6, 10, 17, 21], 1));
