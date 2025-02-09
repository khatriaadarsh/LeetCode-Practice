// function sumOfNaturalNums(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumOfNaturalNums(10)); //55

// Sum of Array Numbers

// function sumOfArray(nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum;
// }

// console.log(sumOfArray([1, 2, 3, 4, 5]));

// While Loop

// Sum of Digits of Numbers

// function sumOfDigits(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// console.log(sumOfDigits(1324)); //10

// Do While Loop

// function countDigits(num) {
//   num = Math.abs(num);
//   let count = 0;
//   do {
//     count++;
//     num = Math.floor(num / 10);
//   } while (num > 0);
//   return count;
// }

// console.log(countDigits(131)); // 3

// ----> Check String is Palindrome or not

// function reverseStr(str) {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return str == reversedStr
//     ? "The given String is Palindrome"
//     : "Not Palindrome";
// }

// console.log(reverseStr("civic"));

// Fibonacci Sequence

// function fibinacci(n) {
//   if (n < 2) {
//     return n;
//   }
//   let curr = 1,
//     prev = 0,
//     next;
//   for (let i = 2; i <= n; i++) {
//     next = prev + curr;
//     prev = curr;
//     curr = next;
//   }
//   return next;
// }

// console.log(fibinacci(5));

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

//----------------> Missing Number in Array

// function missingNumber(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return (arr.length * (arr.length + 1)) / 2 - sum;
// }
// console.log(missingNumber([0, 1, 3]));

// --------------> unshift and shift with time complexity

// let arr = [1, 2, 3, 4, 5, 6];

// arr.unshift(0); // O(n) adding 0 in start shifting all elements in next index

// console.log(arr);

// arr.shift();

// console.log(arr); //O(1)  Removing 0 from start of Array is shifting all elements at starting position

// arr.forEach((val, i) => {
//   console.log(val, i);   // val: value of array and i: index
// });

// ===> find Element in Array

// const findElement = (arr, target) => {
//   for (let val of arr) {
//     if (val === target) {
//       return "Found";
//     }
//   }
//   return "Not Found";
// };

// console.log(findElement([1, 2, 3, 4, 5], 3));

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

// ----->  Learning LinkedList
// A Linked List is a linear data structure where elements (called nodes) are linked using pointers. Each node consists of:

// Data (value stored in the node)
// Next (a pointer/reference to the next node in the list)

// [10 | next] → [20 | next] → [30 | next] → [40 | null]

// Node Class represents each node in the list
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// //   LinkedList class to manage the list
// class LinkedList {
//   constructor() {
//     this.head = null; //Initially, the value of the head is empty
//   }
//   //   Add the node at the end
//   append(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let currentNode = this.head;
//     while (currentNode.next) {
//       currentNode = currentNode.next;
//     }
//     currentNode.next = newNode;
//   }

//   //   Print the linkedlist values
//   printList() {
//     let currentValue = this.head;
//     let listValue = "";
//     while (currentValue) {
//       listValue += currentValue.value + " -> ";
//       currentValue = currentValue.next;
//     }
//     console.log(listValue + "null");
//   }
// }

// const myList = new LinkedList();

// myList.append(10);

// myList.append(20);

// myList.append(30);

// myList.append(40);

// console.log("LinkedList....");

// myList.printList(); // prints the linkedlist to the console

// ----------> Two Sum

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// console.log(twoSum([3, 2, 3], 6)); // [0, 2]

// -------------> Merge Sorted Array

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

// ---------> Remove Elements from Array

// function removeELement(nums, val) {
//   return nums.filter((num) => num !== val);
// }

// console.log(removeELement([3, 2, 2, 3], 2)); // [1, 3, 4, 5]

// ---------------> Remove Duplicates from Sorted Array <-----------

// function removeDuplicate(nums) {
//   let newArr = [];
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       newArr[count++] = nums[i];
//     }
//   }
//   return newArr;
// }
// console.log(removeDuplicate([1, 1, 2, 2, 3, 4, 5]));

// --------------> Remove Duplicates from Sorted Array II <----------
// Example:
// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]

// function removeDuplicateII(nums) {
//   let newArr = [];
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 2]) {
//       nums[count++] = nums[i];
//     }
//   }
//   return newArr;
// }

// console.log(removeDuplicateII([0, 0, 1, 1, 1, 1, 2, 3, 3]));

// ------------> Majority Element in Array <---------------

// In this method o(n^2) is time complexity

// function majorityElements(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] == nums[i]) {
//         count++;
//       }
//       if (count > nums[i] / 2) {
//         return nums[i];
//       }
//     }
//   }
// }

// console.log(majorityElements([3, 2, 3]));

//In this method, the time complexity is o(n) times

// function majorityElement(nums) {
//   const hash = {};
//   let res = 0;
//   let majority = 0;
//   for (let n of nums) {
//     hash[n] = 1 + (hash[n] || 0);
//     if (hash[n] > majority) {
//       res = n;
//       majority = hash[n];
//     }
//   }
//   return res;
// }

// Optimization:
// If the majority element is guaranteed to appear more than half the time, you can use Boyer-Moore Voting Algorithm to solve this problem in
// O(n) O(n) time and O(1) O(1) space. Here’s

// function majorityElement(nums) {
//   let count = 0;
//   let candidate = null;
//   for (let num of nums) {
//     if (count == 0) {
//       candidate = num;
//     }
//     count += num === candidate ? 1 : -1;
//   }
//   return candidate;
// }

// console.log(majorityElement([3, 2, 3]));

//  Rotate Array

// function rotateArray(nums, k) {
//   return nums.concat(nums.splice(0, k));
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 4)); // [5, 6, 7, 8, 1, 2, 3, 4]

// function rotateArray(arr, num) {
//   num = num % arr.length; // Adjust the number to be within the array's length
//   arr.reverse(0, arr); // Reverse the array
//   arr.reverse(arr, num); // Convert the array
//   arr.reverse(arr, arr.length);
//   return arr;
// }
// console.log("Array One" + rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 3));

// function rotateArray(nums, k) {
//   let n = nums.length;
//   k = k % n;
//   if (k === 0) return;
//   let temp = nums.slice(-k);
//   for (let i = n - k - 1; i >= 0; i--) {
//     nums[i + k] = nums[i];
//   }
//   for (let i = 0; i < k; i++) {
//     nums[i] = temp[i];
//   }
//   return nums;
// }

// console.log("Array two" + rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [5, 6, 7, 8, 1, 2, 3, 4]

//-----------> Best time to buy and sell stock leetcode

// function sellStock(prices) {
//   let maxProfit = 0;
//   let minPrice = Infinity;
//   for (let i = 0; i < prices.length; i++) {
//     minPrice = Math.min(minPrice, prices[i]);
//     maxProfit = Math.max(maxProfit, prices[i] - minPrice);
//   }
//   return maxProfit;
// }

// console.log(sellStock([7, 1, 5, 3, 6, 4])); // 5
