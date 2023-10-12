// "Big O" notation is a mathematical notation used to describe the upper bound or worst-case time complexity of an algorithm

// give way to analyze the code complexity ( time and space ).

// what is better code means ?
// Faster (most important)
// less memory intensive
// Readable

// will all machine will record same time ?
// no different machine will show different time, then how to measure ?
// we have to calculate number of operations.

function addUpN(n) {
  return (n * (n + 1)) / 2; // here only 3 operations
}

function addUpToNnumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;                          // 5n + 1 operations
  }
}
// conclusion : - first solution have only 3 operation to perform while second have to perform 5n+ 2 operation so offcourse first solution is much faster.


// O(f(n)) as n increases complexity increases.
// O(f(n) = n + 1) // linear
// O(f(n) = n^2 + 5n + 1) // quadratic
// O(f(n) = 1) // constant
// there are logarithmic complexity as well O(f(n) = logn), O(f(n) = nlogn
//Big O Notation is a way to formalize fuzzy counting 5n + 2 === 5n



// have to consider highest power of n 
// 5n^2 + n + 1 === n^2
// 5n + 2 === n

//! Rules
// some shorthand rule to remember, may not work for all cases but may be useful 
// arithmetic operation are constant 
// assignment is constant
//Accessing elements in an array (by index) or object (by key) is constant
//In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
// Certain searching algorithms have logarithmic time complexity.
// Efficient sorting algorithms involve logarithms.
// Recursion sometimes involves logarithmic space complexity.



// space complexity 
// how much memory needed to execute the algorithms
// Most primitives (booleans, numbers, undefined, null) are constant space.
// Strings require O(n) space (where n is the string length)
// Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)
// 




