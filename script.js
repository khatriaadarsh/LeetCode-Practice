// const numbers = [1, 2, 3, 4, 5];
// let reversedArr = numbers.slice().reverse();
// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(reversedArr); // [5, 4, 3, 2, 1]

// let arr = [3, 2, 5, 8, 10, 4, 50, 9, 6];

// let singleValue = arr.reduce((acc, val) => {
//     console.log('acc:', acc, 'val:', val);
//     return acc + val;
// }, 0);

// console.log(singleValue); // 15

// arr.sort((a, b) => {
//     console.log('b:', b, 'a:', a);
//     return b - a;
// });

// console.log(arr);

// function fibinacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibinacci(n - 1) + fibinacci(n - 2);
// }

// console.log(fibinacci(6)); // 5

// let arr = [11, 22, 33, 44];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum); // 110

// function fibinacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibinacci(n - 1) + fibinacci(n - 2);
// }

// console.log(fibinacci(10)); // 8

// let electronVote = ["Harry", "Ron", "Hermione", "Harry", "Ron", "Harry"];

// const tallyVotes = (votes) => {
//     return votes.reduce((acc, name) => ({
//         ...acc,
//         [name]: acc[name] ? acc[name] + 1 : 1
//     }), {});
// };

// console.log(tallyVotes(electronVote)); // { Harry: 3, Ron: 2, Hermione: 1 }

// function areAnagrams(str1, str2) {
//     return str1.split('').sort().join('').trim() === str2.split('').sort().join('').trim();
// }
// console.log(areAnagrams('listen', 'sil ent')); // true

// const currentInputValue = {
//     firstName: '',
//     lastName: '',
//     zipCode: '',
//     state: '',
// };

// const inputCriteria = {
//     firstName: [],
//     lastName: [],
//     zipCode: [],
//     state: [],
// };

// const validateInput = (inputValue, criteria) => {
//     return criteria.every((criteria) => criteria(inputValue))
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const Prime = [];
// function numbers(arr) {
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element % 2 == 1) {
//       Prime.push(element);
//     }
//   }
//   console.log(Prime);
// }
// numbers(arr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sure, here are 10 medium-level problems on arrays and loops for practice:

// 1. Find the Second Largest Element:
//    Write a function that takes an array of numbers and returns the second largest number in the array.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function secondLargest(arr) {
//   return arr.sort((a, b) => b - a)[1];
// }

// console.log(secondLargest(arr)); // 9

// 2. **Remove Duplicates**:
//    Write a function that takes an array and returns a new array with all duplicate elements removed.

// function removeDuplicates(arr) {
//   return arr.filter((value, index) => arr.indexOf(value) === index);
// }

// console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5];

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5; j++) {
//     (row += i), j;
//   }
//   console.log(row);
// }

// output:
// 1
// 22
// 333
// 4444
// 55555

// for (let i = 0; i <= 5; i++) {
//   let row = "";
//   for (let j = 5; j >= 0; j--) {
//     (row += i), j;
//   }
//   console.log(row);
// }

//     *
//    ***
//   *****
//  *******
// *********

// for (let i = 1; i < 5; i++) {
//   let row = " ".repeat(5 - i) + "*".repeat(2 * i - 1);
//   console.log(row);
// }

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//   ***
//    *

// for (let i = 1; i < 5; i++) {
//   let row = " ".repeat(5 - i) + "*".repeat(2 * i - 1);
//   console.log(row);
// }
// for (let i = 5; i >= 1; i--) {
//   let row = " ".repeat(5 - i) + "*".repeat(2 * i - 1);
//   console.log(row);
// }

// *   *
//  * *
//   *
//  * *
// *   *

// for (let i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 0; j < 5; j++) {
//     if (i === j || i + j === 5 - 1) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }

// 3. **Rotate Array**:
//    Write a function that rotates an array to the right by a given number of steps.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(rotatedArr); // [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]

// function factorial(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

// 4. Check Prime Number

// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(3));

// function rotateArray(nums, n) {
//   var newArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     nums = nums + [i];
//   }
// }
// rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 4);

// var arr = [11, 22, 33, 44, 55];

// arr.pop();

// console.log(arr);

// function mergeSortedArray(arr1, m, arr2, n) {
//   let newArr = [];
//   for (let i = 0; i < m; i++) {
//     newArr.push(arr1[i]);
//   }
//   for (let i = 0; i < n; i++) {
//     newArr.push(arr2[i]);
//   }
//   newArr.sort((a, b) => a - b);
//   return newArr;
// }

// console.log(mergeSortedArray([2, 1, 4, 3, 5], 3, [11, 22, 33, 44, 55], 2));
