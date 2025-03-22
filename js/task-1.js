'use strict';

  function slugify(title) {
  // Создаємо змінну і перетворюємо  рядки  в нижній регістр
  const lowerCaseTitle = title.toLowerCase();
  
  // Создаємо змінну для масива Розбиваємо на слова
  const words = lowerCaseTitle.split(' ');

  // Создаємо змінну, об'єднуємо слова дефісом
  const slug = words.join('-');
  return slug;
 
}
// дивимося результат
  console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
  console.log(slugify("English for developer")); // "english-for-developer"
  console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
  console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"