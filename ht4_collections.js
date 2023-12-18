'use strict';

// перебрати масив і до кожного числа додати 5, і вивести результат в консоль
const array = [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9];

// через arrow function
array.forEach((i) => console.log(i+5));

// через function
// array.forEach(function(i){
//   console.log(i+5)
// })

// створити на базі масиву Set унікальних значень
const mySet = new Set(array);
console.log(mySet)

// ітерувати через сет і кожне число збільшити на 2, далі вивести суму всіх елементів

function setSum (a) {
  let sumOfSet = 0
  for (let value of a) {
    value += 2;
    sumOfSet += value;
  }
  console.log(sumOfSet);
}
setSum(mySet)

// через forEach
function setSumForIn(arr) {
  let sumOfSet = 0;
  arr.forEach((value) => {
    value +=2;
    sumOfSet += value;
  })
  console.log(sumOfSet)
}
setSumForIn(mySet);

//створити мапу з літерами алфівіту, і значеннями з сету {"a" : 1, "b" : 2 ....}
//зробити конкатенацію ключів з мапи.

let alphArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
let myMap = new Map;
function mapSetter (key, value) {
  for (let i = 0; i < value.size; i++) {
    myMap.set(key[i], Array.from(value)[i]);
  }
}

mapSetter(alphArray, mySet)
function concatMapKeys (map) {
  let concatKeys = '';
  for (let key of map.keys()) {
    concatKeys += key;
  }
  return concatKeys;
}
console.log(concatMapKeys(myMap))