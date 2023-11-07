// Initialize an array
const numbers = [1, 2, 3, 4, 5];

// Push: Add elements to the end of the array
numbers.push(6, 7);
console.log("Push:", numbers);

// Pop: Remove the last element from the array
const popped = numbers.pop();
console.log("Pop:", popped, numbers);

// Unshift: Add elements to the beginning of the array
numbers.unshift(0);
console.log("Unshift:", numbers);

// Shift: Remove the first element from the array
const shifted = numbers.shift();
console.log("Shift:", shifted, numbers);

// Concat: Combine two arrays
const array1 = [8, 9];
const combinedArray = numbers.concat(array1);
console.log("Concat:", combinedArray);

// Join: Join array elements into a string
const fruits = ["apple", "banana", "cherry"];
const joinedString = fruits.join(", ");
console.log("Join:", joinedString);

// Slice: Create a new array from a portion of the original array
const slicedArray = combinedArray.slice(2, 6);
console.log("Slice:", slicedArray);

// Splice: Modify the original array by adding, removing, or replacing elements
combinedArray.splice(2, 2, "replacement1", "replacement2");
console.log("Splice:", combinedArray);

// IndexOf: Find the index of an element
const indexOfThree = combinedArray.indexOf(3);
console.log("IndexOf 3:", indexOfThree);

// LastIndexOf: Find the last index of an element
const lastIndexThree = combinedArray.lastIndexOf(3);
console.log("LastIndexOf 3:", lastIndexThree);
