'use strict'

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

async function someAsyncFunction(){
  try {
    let result = await calc("a", 10)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

someAsyncFunction()