
// A sorting algorithm where the largest values bubble up to the top!

//psuedo code 

// Start looping from with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array


//! most basic version
// function bubbleSort(arr) {
//     // loop element throughout the array
//     let count = 0

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             count++
//             console.log(arr, arr[j], arr[j+1], count)
//             if (arr[j + 1] < arr[j]) {
//                 // swap
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//         console.log("ONE PASS")
//     }
//     console.log(arr)

// }

//! not sorting through allready bubbled element
// function bubbleSort(arr) {
//     // loop element throughout the array
//     let count = 0

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             count++
//             console.log(arr, arr[j], arr[j+1], count)
//             if (arr[j + 1] < arr[j]) {
//                 // swap
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//         console.log("ONE PASS")
//     }
//     console.log(arr)

// }





//! when elements are nearly sorted

function bubbleSort(arr) {
    // loop element throughout the array
    let count = 0
    let noSwap;

    for (let i = 0; i < arr.length; i++) {
        noSwap = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            count++
            console.log(arr, arr[j], arr[j+1], count)
            if (arr[j + 1] < arr[j]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false
            }
        }
        if(noSwap) break;
        console.log("ONE PASS")
    }
    console.log(arr)

}


console.log(bubbleSort([1, 7, 2, 4, 6]))




// O(n) complexity of bubble sort is 
// in worst complexity O(n^2)
// in best cases O(n)
