'use strict';

function makeArray(firstArray, secondArray, maxLength) {

// перевіряємо чі є maxLength  числом
  if (typeof maxLength !== 'number') {

//якщо аргумент не число тоді буде повідомлення але функція буде працювати
  return "Параметр maxLength повинен бути числом";
  }
//Створюємо новий масив шляхом обьеднання  масивів сгідно указаного порядка 
  let sumArray = firstArray.concat(secondArray);

//виконуємо умови 
  if (sumArray.length > maxLength) {

// повертаємо копію масиву
    return sumArray.slice(0, maxLength);
    
  }
  // якщо ні то тоді повертаємо новий масив
 else { return sumArray; }
}

// виводимо результат

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
