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
//   let n = arr.length + 1;
//   let expectedSum = (n * (n + 1)) / 2;
//   return expectedSum - sum;
// }
// console.log(missingNumber([1, 2, 3, 5]));

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

// ====> Find Element by Index in Array
// const findELementByIndex = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == target) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(findELementByIndex([1, 2, 3, 4, 5, 6], 4));

// ====> Splice is used to add and remove elements from Array and Slice is used to create sub array and used for string
// --> Splice change the original and Slice don't change the original Array its just create copy of given Array or String
// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(1, 1);

// console.log(arr);

// arr.splice(4, 0, 11, 22, 33, 44, 55);

// console.log(arr);

// let subArray = arr.slice(4, 9);

// console.log(subArray);

// =====> Shallow Copy and Deep Copy in Array
//In Shallow copy the original Array is also change if change the new Array

// let arr = [11, 22, 33, 44, 55];

// let shallowCopy = arr;

// shallowCopy.splice(1, 3);

// console.log(arr, shallowCopy);  // [ 11, 55 ] [ 11, 55 ]  --> both Array is Changed

// ====> Deep Copy
// In Deep Copy the original Array is not change if change the new Array
// let arr = [11, 22, 33, 44, 55];
// Method 01
// let deepCopy01 = [...arr];
// deepCopy01.splice(1, 0, 1, 2, 3);
// console.log(deepCopy01, arr); //[ 11,  1,  2,  3, 22, 33, 44, 55] [ 11, 22, 33, 44, 55 ]
// // Method 02
// let deepCopy02 = Array.from(arr);
// deepCopy02.splice(1, 3, 12, 13, 14, 15);
// console.log(deepCopy02); //[ 11, 22, 33, 44, 55 ]  [ 11, 12, 13, 14, 15, 55 ]
// Method 03
// let deepCopy03 = arr.concat(); //If we can't pass any other arr in concat it create copy of Array
// deepCopy03.splice(5, 0, 66, 77);
// console.log(deepCopy03);

// ====> Concatination of Arrays

// let arr01 = [1, 2, 3, 4, 5];
// let arr02 = [11, 22, 33, 44, 55];
// let newArr = arr01.concat(arr02);
// console.log(newArr); //[1,  2,  3,  4,  5, 11, 22, 33, 44, 55]

// const compareArray = (arr01, arr02) => {
//   return arr01.length === arr02.length &&
//     arr01.every((i) => arr01[i] === arr02[i])
//     ? "Equal"
//     : "Not Equal";
// };
// console.log(compareArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));

// Map, Filter and Reduce
// --> Ma
// let arr = [1, 2, 3, 4, 5];
// let arr02 = arr.map((ele) => {
//   return ele * 2;
// });
// console.log(arr02);

// ==> Filter

// let arr03 = [11, 22, 33, 44, 55];
// let newArr = arr03.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(newArr);

// ==> Reduce -- Sum of Array

// let array = [12, 13, 14, 15, 16];
// let sumOfArr = array.reduce((val, ele) => {
//   return val + ele;
// });

// console.log(sumOfArr);

// ====>Flat

// ==>Flat do the nested array in side a array makes simple single array

// let nestedArray = [1, 2, [3, 4, [4, 5], 6], 7];
// let flatedArray = nestedArray.flat(2); //2 makes value third array inside a array also flated
// console.log(flatedArray);

// -----> Find vs Filter
// let numbers = [2, 4, 6, 8, 10];

// let findNumber = numbers.find((num) => num > 5);
// console.log(findNumber); //6

// let filterNumber = numbers.filter((num) => num > 5);
// console.log(filterNumber); //[ 6, 8, 10 ]

// ====================>String Methods <===================
// 1;charAt
// var str01 = "Aadarsh";
// console.log(str01.charAt(1)); // a

// 2;charCodeAt
// console.log(str01.charCodeAt(2));  //d = 100

// 3;includes
// console.log(str01.includes("a")); //true  show true if exist otherwise show false

// 4;indexOf
// console.log(str01.indexOf("d")); // 2  show index of string

// 5;lastIndexOf
// console.log(str01.lastIndexOf("a")); // 3

// 6;localeCompare
// let str02 = "Aadarsh";
// console.log(str01.localeCompare(str02)); //Compare both String if matched show 0 otherwise show -1

// =====> Replace ReplaceAll, subString, slice, and search

// let str = "Hello World Welcome to JavaScript Hello Program";

// console.log(str.replace("Hello", "Haloo"));

// //replaceAll
// console.log(str.replaceAll("Hello", "Haloo"));

// // The difference between substring and slice is substring doesn't contain negative number and slice also used in Array

// // subString
// console.log(str.substring(4, 15)); // o World Wel

// //slice
// console.log(str.slice(2, 10)); //llo Worl

// //Search
// console.log(str.search("Hello")); //In search if string found it 0 otherwise show -1

// console.log(str.split("")); //Seperate whole string into character in Array form  [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o','r', 'l', 'd', ' ', 'W', 'e', 'l', 'c','o', 'm', 'e', ' ', 't', 'o', ' ', 'J','a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', ' ', 'H', 'e', 'l', 'l', 'o', ' ','P', 'r', 'o', 'g', 'r', 'a', 'm']

// console.log(str.split(" ")); // Seperate only String into words in Array form  [ 'Hello', 'World', 'Welcome', 'to', 'JavaScript', 'Hello', 'Program' ]

// let subString = str.split(" ");

// console.log(subString.join()); // Hello,World,Welcome,to,JavaScript,Hello,Program

// console.log(subString.join("")); // HelloWorldWelcometoJavaScriptHelloProgram

// console.log(subString.join(" ")); // Hello World Welcome to JavaScript Hello Program

// console.log(str.toLocaleLowerCase());

// console.log(str.toLocaleUpperCase());

//=====> Convert number into String -- str.toString()  is used to convert the number into String

// let num = 13243;

// console.log(typeof num.toString()); //string

// Convert Object into String -- JSON.stringify(obj) is used to convert the Object into String

// let obj = {
//   name: "Aadarsh",
//   age: 21,
//   rollno: 102,
// };
// console.log(obj, JSON.stringify(obj));

// ------> Find the index of first occurence in a String -- LeetCode Question
// var isAnagram = function (s, t) {
//   return s.split("").sort().join() === t.split("").sort().join();
// };
// console.log(isAnagram("anagram", "nagaram"));

// ---------> Longest Common Prefix - longestCommonPrefix

// function longestCommonPrefix(strs) {
//   if (!strs.length) return "";
//   let prefix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, -1);
//       if (!prefix) return "";
//     }
//   }
//   return prefix;
// }
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
// console.log(longestCommonPrefix(["apple", "ape", "april"])); // Output: "ap"

// function mergeAlternately(word1, word2) {
//   let ans = "",
//     n = word1.length,
//     m = word2.length;
//   let i = 0;
//   while (i < n || i < m) {
//     if (i < n) {
//       ans += word1[i];
//     }
//     if (i < m) {
//       ans += word2[i];
//     }
//     i++;
//   }
//   return ans;
// }
// console.log(mergeAlternately("abcd", "pqr"));

// =======> Length Of Last Word in string
// ====> All tests will pass using this solution
// function lengthOfLastWord(str) {
// str = str.trim();
// let spStr = str.split(" ");
// spStr.reverse();
// return spStr[0].length;
//-----------> or using this will show same output
// return spStr[spStr.length - 1].split("").length;
// }
// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));

// let electronVote = ["Harry", "Ron", "Hermione", "Harry", "Ron", "Harry"];
// const tallyVotes = (votes) => {
//     return votes.reduce((acc, name) => ({
//         ...acc,
//         [name]: acc[name] ? acc[name] + 1 : 1
//     }), {});
// };

// console.log(tallyVotes(electronVote)); // { Harry: 3, Ron: 2, Hermione: 1 }

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

// ================> Recursion <==================
// Recursion is a programming technique where a function calls itself to solve a problem.
// It is often used to break down complex problems into smaller, more manageable sub-problems.
// This approach can simplify code and lead to elegant and concise solutions for certain types of problems.

// function fun(n) {
//   if (n == 0) {
//     return;
//   }
//   console.log("Func", n);
//   fun(n - 1);
// }
// fun(10);

//=======> Factorial of a number

// function fact(n) {
//   if (n <= 2) {
//     return n;
//   }
//   return n * fact(n - 1);
// }

// console.log(fact(4));

// function sumOfArr(arr, n) {
//   if (n === 0) {
//     return 0;
//   }
//   return arr[n - 1] + sumOfArr(arr, n - 1);
// }

// console.log(sumOfArr([1, 2, 3, 4, 5], 5));

// Mulitiplication of array;

// let arr = [1, 2, 3, 4, 5];
// let multi = 0;
// let red = arr.reduce((val, pro) => {
//   return val * pro;
// });
// console.log(red);

//====> Fibonacci - Recursion

// function fibinacci(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fibinacci(n - 1) + fibinacci(n - 2);
// }

// console.log(fibinacci(8));

// function isPowerOfTwo(n) {
//   var log_n = Math.log(n) / Math.log(2);
//   var log_n_floor = Math.floor(log_n);
//   return log_n - log_n_floor == 0;
// }
// console.log(isPowerOfTwo(4));

//===========> Object Problems

// let Obj = {
//   nickName: "DSA",
//   rollno: 1023,
//   semester: 6,
//   mids: function () {
//     return "Mids exam will heild in mid of  April";
//   },
//   final: () => {
//     return "Final Paper will heild in end of June";
//   },
// };
// console.log(Object.values(Obj));

// console.log(Obj.mids() + " | " + Obj.final());

// Object.keys(Obj).forEach((keys) => {
//   console.log(keys);
// });

// ========> Number of Good pairs
// function numIdenticalPairs(nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i < j && nums[i] == nums[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

// Swapping of two numbers using three variable and two

// let a = 4,
//   b = 6,
//   c;
// c = a;
// a = b;
// b = c;

// console.log(a, b);

// let num1 = 3,
//   num2 = 5;

// num1 = num1 + num2;
// num2 = num1 - num2;
// num1 = num1 - num2;

// console.log(num1, num2);

// let a = 11,
//   b = 12;

// let c = a + b + a++ + b++ + ++a + ++b;

// console.log(a, b, c); //13,14,73

// console.log(Math.round(10.4)); // 10

// console.log(Math.ceil(10.1)); // 11

// console.log(Math.floor(10.9));

// console.log(Math.cbrt(64)); //4

// console.log(Math.trunc(Math.random() * 1000 + 1000));

// let radius = 12;
// console.log((2 * Math.PI * radius).toFixed(2));

// let units = Number(prompt("Enter electricity unit: "));

// let amount = 0;

// if (units > 400) {
//   amount = (units - 400) * 13;
//   units = 400;
// }
// if (units > 200 && units <= 400) {
//   amount += (units - 200) * 8;
//   units = 200;
// }
// if (units > 100 && units <= 200) {
//   amount += (units - 100) * 6;
//   units = 100;
// }
// amount += units * 4;

// console.log("====================================");
// console.log(amount);
// console.log("====================================");

// let userInput = 4883;

// if (userInput >= 500) {
//   console.log("500 notes: " + Math.floor(userInput / 500));
//   userInput = userInput % 500;
// }
// if (userInput >= 200) {
//   console.log("200 notes: " + Math.floor(userInput / 200));
//   userInput = userInput % 200;
// }
// if (userInput >= 100) {
//   console.log("100 notes: " + Math.floor(userInput / 100));
//   userInput = userInput % 100;
// }
// if (userInput >= 50) {
//   console.log("50 notes: " + Math.floor(userInput / 50));
//   userInput = userInput % 50;
// }
// if (userInput >= 20) {
//   console.log("20 notes: " + Math.floor(userInput / 20));
//   userInput = userInput % 20;
// }
// if (userInput >= 10) {
//   console.log("10 notes: " + Math.floor(userInput / 10));
//   userInput = userInput % 10;
// }

// let n = 36;
// let fact = 1;

// if (isNaN(n)) {
//   console.log("Invalid number");
// } else {
//   if (n > 0) {
//     for (let i = 1; i <= Math.floor(n / 2); i++) {
//       if (n % i === 0) {
//         console.log(i);
//       }
//     }
//     console.log(n);
//   } else {
//     console.log("Number should be positive more then 0");
//   }
// }

// function repeatStr(n, s) {
//   return s.repeat(n);
// }

// console.log(repeatStr(4, "Hello"));

// let num = 26;
// let isPrime = true;
// for (let i = 0; i <= num; i++) {
//   if (num % 2 === 0) {
//     isPrime = false;
//     break;
//   }
// }
// console.log(isPrime);

// let num = 27;

// if (num % 2 !== 0) {
//   console.log("Number is prime");
// }

// function isPrimeNum(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;
//   for (let i = 3; i < Math.floor(Math.sqrt(num)); i += 2) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrimeNum(2));

// function sumOfdig(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// console.log(sumOfdig(1323));

// let num = 3232;

// function countPositivesSumNegatives(input) {
//   let countPostiveNums = 0;
//   let sumOfNegativeNumber = 0;
//   for (let i = 0; i <= input.length; i++) {
//     if (input[i] > 0) {
//       countPostiveNums++;
//     } else if (input[i] < 0) {
//       sumOfNegativeNumber += input[i];
//     }
//   }
//   return [countPostiveNums, sumOfNegativeNumber];
// }

// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );

const maxNumber = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(maxNumber([1, 2, 5, 4, 3]));

const minNumber = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

console.log(minNumber([12, 11, 33, 22, 12]));
