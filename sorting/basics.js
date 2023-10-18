// Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

// Examples

// Sorting numbers from smallest to largest
// Sorting names alphabetically
// Sorting movies based on release year
// Sorting movies based on revenue


// Sorting is an incredibly common task, so it's good to know how it works
// There are many different ways to sort things, and different techniques have their own advantages and disadvantages
// Sorting sometimes has quirks, so it's good to understand how to navigate them



// rivise js inbuilt sort method
// why it behaves differently for number and string


const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  

  // alphabetical order from z to a
  const sortedItems = items.sort((a,b) =>{
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    
    if( nameA > nameB){
      return -1
    }
    if(nameA < nameB){
      return 1
    }
    return 0;
  })
  // alphabetical order
  const _sortedItems = items.sort((a,b) =>{
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    
    if( nameA > nameB){
      return 1
    }
    if(nameA < nameB){
      return -1
    }
    return 0;
  })
//   console.log(sortedItems)
