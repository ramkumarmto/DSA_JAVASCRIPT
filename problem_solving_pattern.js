// some common patterns are
// Frequency Counter
// Multiple Pointers
// Sliding Window
// Divide and Conquer
// Dynamic Programming
// Greedy Algorithms
// Backtracking
// Many more!

// it is not neccessary that all the problems come under this category
// but maximum of the problem you can solve by this way

//! Frequency Counter

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    // check square of elements of arr1 in arr2
    const correctIndex = arr2.indexOf(arr1[i] * arr1[i]);
    if (correctIndex === -1) return false;
    console.log("idx", correctIndex);

    arr2.splice(correctIndex, 1);
  }
  return true;
}

// console.log(same([1, 2, 3], [4, 1, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)

// but its bigO is n^2 and its worst complexity
// so we will solve this problem by frequency counter method

function sameByFrequencyCounterMethod(arr1, arr2) {
  // if (arr1.length !== arr2.length) return false;
  // store arr1 and arr2 elements into object with occurance
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    if (frequencyCounter1[arr1[i]] === undefined) {
      frequencyCounter1[arr1[i]] = 1;
    } else {
      frequencyCounter1[arr1[i]]++;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (frequencyCounter2[arr2[i]] === undefined) {
      frequencyCounter2[arr2[i]] = 1;
    } else {
      frequencyCounter2[arr2[i]]++;
    }
  }
  // console.log(frequencyCounter1, frequencyCounter2)
  // check keys of obj1 is present in obj2 or not
  for (let key in frequencyCounter1) {
    // console.log("keys", key)
    // check square of each key of frequencyCounter1 is present on frequencyCounter2 or not
    if (!(key * key) in frequencyCounter2) {
      return false;
    }
    // now check occurance is same or not
    if (frequencyCounter2[key * key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
// console.log(sameByFrequencyCounterMethod([1, 2, 3], [4, 1, 9])); // true
// console.log(sameByFrequencyCounterMethod([1, 2, 3], [1, 9]));  //false
//  console.log(sameByFrequencyCounterMethod([1, 2, 1], [4, 4, 1])) // false

function validAnagram(str1, str2) {
  // use this by frequency counter method
  if (str1.length !== str2.length) return false;
  if (str1.length === 0 && str2.length === 0) return true;
  // store char occurances in objs
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // for first string
  for (let i = 0; i < str1.length; i++) {
    if (frequencyCounter1[str1[i]] === undefined) {
      frequencyCounter1[str1[i]] = 1;
    } else {
      frequencyCounter1[str1[i]]++;
    }
  }
  // for second string
  for (let i = 0; i < str2.length; i++) {
    if (frequencyCounter2[str2[i]] === undefined) {
      frequencyCounter2[str2[i]] = 1;
    } else {
      frequencyCounter2[str2[i]]++;
    }
  }

  // console.log(frequencyCounter1, frequencyCounter2)
  for (let key in frequencyCounter1) {
    if (!key in frequencyCounter2) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
  // now check all keys are same are not

  // and leter check occurances are same or not

  // if all same return true otherwise false
}

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// console.log(validAnagram('anagram', 'nagaram')) // true
// console.log(validAnagram("rat","car") )
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

//! Multiple Pattern Problem

// here complexity is n^2
function sumZero(arr) {
  if (arr.length === 0) return undefined;
  // add first element with rest of element and check sum
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
// console.log(sumZero([-2, 0, 1, 3])) // undefined
// sumZero([1, 2, 3]); // undefined

// complexity is "n";
function sumZero(arr) {
  if (arr.length === 0) return undefined;
  // apply multiple pointer
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > 0) {
      right--;
    } else {
      left--;
    }
  }
}
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
// console.log(sumZero([-2, 0, 1, 2, 3]));

function countUniqueValues(arr) {
  // first solution is filter out duplicate elements and arr.length;
  // solve this by multiple pointer method
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
