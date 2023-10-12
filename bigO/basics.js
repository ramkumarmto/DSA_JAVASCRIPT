// "Big O" notation is a mathematical notation used to describe the upper bound or worst-case time complexity of an algorithm

// give way to analyze the code complexity ( time and space )

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
