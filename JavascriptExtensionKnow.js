// (function programmer(){
// const x=(y=100)
// })()
// console.log(typeof x)
// console.log(typeof y)



// Reducer function
const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using a for loop and reducer to calculate the sum
const calculateSum = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sumReducer(sum, array[i]);
  }

  return sum;
};

// Call the function with the array of numbers
const result = calculateSum(numbers);

// Display the result
console.log("Sum:", result);
// Reducer function for calculating factorial
const factorialReducer = (accumulator, currentValue) => accumulator * currentValue;

// Number for which factorial is to be calculated
const number = 6;

// Array of numbers from 1 to the given number
const numbersArray = Array.from({ length: number }, (_, index) => index + 1);

// Calculate factorial using reducer
const factorial = numbersArray.reduce(factorialReducer, 1);

// Display the result
console.log(`Factorial of ${number} is: ${factorial}`);
