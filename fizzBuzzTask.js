'use strict';

for (let i = 1; i <= 100; i++) {
  if ((i % 5 === 0) && (i % 3 === 0)) console.log("FizzBuzz");
  // or
  //if (i % (5*3) === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

/*
Switch statement solution
 */

// for (let i = 0; i <= 100; i++) {
//   switch (true) {
//     case (i % 5 === 0 && i % 3 === 0):
//       console.log("FizzBuzz");
//       break;
//     case i % 3 === 0:
//       console.log("Fizz");
//       break;
//     case i % 5 === 0:
//       console.log("Buzz");
//       break;
//     default:
//       console.log(i);
//       break;
//   }
// }