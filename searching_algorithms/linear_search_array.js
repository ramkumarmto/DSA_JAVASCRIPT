
//Linear Search

// Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.

// JS inbuilt js methods 
// indexOf()
// includes()
// find()
// findIndex()
// some(), every()

// these all JS methods are linear in search and complexity is O(n);

function LinearSearch(arr, num){
    for( let i = 0; i< arr.length; i++){
        if (arr[i] === num) return i
    }
    return undefined;

}
console.log(LinearSearch([2,4,5,1,9], 1))
