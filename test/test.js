// var ourArray = [];

// function printArray() {
//   for (var i = 0; i < 67; i++) {
//     if (i > 2) break;
//     ourArray.push(i);
//   }
//   console.log(ourArray);
// }

// var arr = [12, 13, 65, 1, 9];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// fizz buzz

// var array = [];

// function printNums() {
//   for (var i = 0; i < 101; i++) {
//     array.push(i);
//   }
// }

// printNums();

// console.log(array);
// console.log(array[2]);

var apple = "Apple";

// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// reverse(apple);

// const numbers = [1, 1, 4, 6, -5];

// const reduced = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(reduced);

// const man = "Apple";

// function reversed(str) {
//   return str.split("").reduce((accumulator, currentValue) => {
//     return currentValue + accumulator;
//   }, "");
// }

// console.log(reversed(man));

// fucking with palindromes man

// function palindrhomie(str) {
//   const reverseString = str.split("").reduce((accumulator, currentValue) => {
//     return currentValue + accumulator;
//   }, "");

//   if (str === reverseString) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindrhomie("cbttbc"));

// function reverseNum(num) {
//   const sign = Math.sign(num);
//   const reversed = num
//     .toString()
//     .split("")
//     .reverse()
//     .join("");

//   return parseInt(reversed) * sign;
// }

// console.log(reverseNum(-5190));

// function fizzBuzz(n) {
//   for (var i = 1; i <= n; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// console.log(fizzBuzz(27));

// 1. print numbers to the console
// 2. if the number is a multiple of 3, print fizz
// 3. if the number is a multiple of 5, print buzz
// 4. if the number is both a multiple of 3 and 5, print fizz buzz
//

// const firstArray = [1, 2, 3, 4]

// function chunk (array, size) {

// const secondArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > size - 1) {
//       secondArray = array[i];
//     }
//   }

// }

// grab array
// grab chunk of n-1
// iterate through until array.length
//

const arrayOne = [1, 2, 3, 4, 5, 6, 7];

function fuckChunks(currentArray, chunks) {
  const newArray = [];

  newArray.push(currentArray.slice(0, chunks));

  for (var i = chunks; i < arrayOne.length; i++) {
    newArray.push
  }
  return newArray;
}

console.log(fuckChunks(arrayOne, 2));
