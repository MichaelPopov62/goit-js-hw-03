'use strict';

function filterArray(numbers, value) {
//Створюємо новий масив 
  let newArray = [];

//створимо цикл для перевірки 
  for (let i = 0; i < numbers.length; i++) {

// викопистовуємо оператора для виконання умов
  if (numbers[i] > value) {

// приєднуємо значення до нового масиву
  newArray.push(numbers[i]);
     }
  }
// повертаємо результат
  return newArray;

}
// виводимо результат

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
