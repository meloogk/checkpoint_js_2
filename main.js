// String Manipulation Functions

// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 2. Count Characters
  function countCharacters(str) {
    return str.length;
  }
  
  // 3. Capitalize Words
  function capitalizeWords(sentence) {
    return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  
  // Array Functions
  
  // 4. Find Maximum in Array
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  // 5. Find Minimum in Array
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  // 6. Sum of Array
  function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  // 7. Filter Array (example: filter even numbers)
  function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
  }
  
  // Mathematical Functions
  
  // 8. Factorial
  function factorial(n) {
    if (n < 0) return "Undefined for negative numbers";
    return n === 0 ? 1 : n * factorial(n - 1);
  }
  
  // 9. Prime Number Check
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // 10. Fibonacci Sequence
  function fibonacciSequence(terms) {
    let sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, terms);
  }
  
  
  console.log("Reverse String:", reverseString("hello"));
  console.log("Count Characters:", countCharacters("hello"));
  console.log("Capitalize Words:", capitalizeWords("hello world"));
  console.log("Find Max:", findMax([1, 2, 3, 4, 5]));
  console.log("Find Min:", findMin([1, 2, 3, 4, 5]));
  console.log("Sum Array:", sumArray([1, 2, 3, 4, 5]));
  console.log("Filter Array (Even numbers):", filterArray([1, 2, 3, 4, 5], num => num % 2 === 0));
  console.log("Factorial:", factorial(5));
  console.log("Prime Check (7):", isPrime(7));
  console.log("Fibonacci Sequence:", fibonacciSequence(10));
  