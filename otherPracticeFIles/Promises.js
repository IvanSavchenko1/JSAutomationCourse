'use strict'
// function calc(a, b, callback) {
//     setTimeout(() => {
//         callback(a+b);
//       },1000);
//
// }
//
// calc(10, 10, (res) => {
//     console.log(`${res} is sum`)
// })

function calc(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number'){
      reject("your args should be numbers");
    }
    setTimeout(() => {
      resolve(a+b);
    },1000);
  })
}

calc(10,20).then((value) => {
  console.log(`first then ${value}`)
  return value;
}).then((newValue) => {
  newValue +=15
  console.log(`second then is ${newValue}`)
} ).catch((err) => {
  console.log(err)
})

