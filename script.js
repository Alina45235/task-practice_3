/* ЗАДАЧА 1 - Создание массива
1. Создайте массив с тремя элементами разных типов
2. Выведите в консоль первый элемент массива
3. Выведите в консоль длину массива*/

const arr = [0, true, "text"];
console.log(arr[0]);
console.log("Длина массива: ", arr.length);

/* ЗАДАЧА 3 - Перебор элементов массива
1. Создайте массив с несколькими элементами
2. Используя один из методов массивов, переберите все элементы и выведите каждый элемент в консоль */

const arr2 = [1, 3, 4, 6, 77, 100];
arr2.forEach((item) => console.log(item));

/* ЗАДАЧА 5 - Добавление элементов в начало массива
 1. Добавьте элементы в начало массива, myArray = [true, null]:
  - сначала строку "Привет"
  - потом число 100
2. Выведите массив myArray и его длину в консоль */

const myArray = [true, null];
myArray.unshift("Привет", 100);
console.log(
  `Массив: ${myArray.map((item) => String(item)).join(", ")}; длина массива: ${myArray.length}`,
);

/* ЗАДАЧА 12 - Сравнение двух массивов
1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
2. Верните "true" если два массива равны, а именно:
  - имеют одинаковое количество элементов
  - все элементы совпадают, 
например, firstArray[0] === secondArray[0] и т. д.
3. В противном случае верните "false" */

function areArraysEqual(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }

  return true;
}
console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // false
console.log(areArraysEqual([1, 2], [1, 2, 3])); // false (разная длина)
console.log(areArraysEqual(["a", "b"], ["a", "b"])); // true

/* ЗАДАЧА 14 - Добавление уникальных элементов в массив
1. Создайте функцию "pushIfUnique" с двумя параметрами "inputArray" и "newElement"
2. Если "inputArray" уже содержит "newElement", выведите в консоль "{newElement} уже находится в массиве"
3. В противном случае добавьте "newElement" в "inputArray"
ПРИМЕЧАНИЕ: Мы предполагаем, что "inputArray" содержит элементы только примитивных типов*/
function pushIfUnique(inputArray, newElement) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === newElement) {
      return `${newElement} уже находится в массиве`;
    }
  }
  inputArray.push(newElement);
  return inputArray;
}

const array = [1, 2, 3, 4, 5];
console.log(pushIfUnique(array, 6));

/* ЗАДАЧА 16 – ввод и суммирование элементов массивом
Напишите функцию myInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

function myInput() {
  const numbers = [];

  while (true) {
    const input = prompt("Введите число:");

    if (input === null || input === "") {
      break;
    }

    const number = Number(input);

    if (isNaN(number)) {
      break;
    }

    numbers.push(number);
  }

  return numbers;
}

const resultArray = myInput();
console.log("Введенные числа:", resultArray);

function sumArray(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

console.log("Сумма введенных чисел:", sumArray(resultArray));

/* ЗАДАЧА 20 – получаем массив имён
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите функцию names , который преобразует их в массив имён.
Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
console.log( names ); // Вася, Петя, Маша*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

function names(usersArray) {
  const namesArray = [];
  for (let i = 0; i < usersArray.length; i++) {
    namesArray.push(usersArray[i].name);
  }
  return namesArray;
}

console.log(names(users).join(", "));

/* ЗАДАЧА 28 – число текстом
1. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.*/

function numberToText(number) {
  if (typeof number !== "number" || number < 10 || number > 99) {
    return "Ошибка: нужно двузначное число от 10 до 99";
  }

  const units = [
    "",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
  ];

  const teens = [
    "десять",
    "одиннадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать",
  ];

  const tens = [
    "",
    "",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто",
  ];

  const tensDigit = Math.floor(number / 10);
  const unitsDigit = number % 10;

  if (tensDigit === 1) {
    return teens[unitsDigit];
  }

  if (unitsDigit === 0) {
    return tens[tensDigit];
  } else {
    return `${tens[tensDigit]} ${units[unitsDigit]}`;
  }
}

console.log(numberToText(35)); // "тридцать пять"
console.log(numberToText(10)); // "десять"
console.log(numberToText(11)); // "одиннадцать"
console.log(numberToText(20)); // "двадцать"
console.log(numberToText(99)); // "девяносто девять"
console.log(numberToText(0)); // "Ошибка: нужно двузначное число от 10 до 99"
console.log(numberToText(100)); // "Ошибка: нужно двузначное число от 10 до 99"
console.log(numberToText(7)); // "Ошибка: нужно двузначное число от 10 до 99"

/* ЗАДАЧА 30 – аббревиатура
1. Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.
Например: "cascading style sheets" → "CSS" */

function createAbbreviation(phrase) {
  const words = phrase.split(" ");

  const abbreviation = words.map((word) => {
    if (word.length > 0) {
      return word[0].toUpperCase();
    }
    return "";
  });

  return abbreviation.join("");
}

console.log(createAbbreviation("cascading style sheets")); // "CSS"
console.log(createAbbreviation("hyper text transfer protocol")); // "HTTP"
console.log(createAbbreviation("world wide web")); // "WWW"
console.log(createAbbreviation("central processing unit")); // "CPU"
console.log(createAbbreviation("random access memory")); // "RAM"

/* ЗАДАЧА 31 – количество гласных
1. Написать функцию, которая считает количество гласных букв в переданной строке*/

function countVowels(str) {
  if (typeof str !== "string") {
    return 0;
  }

  const vowels = [
    "а",
    "е",
    "ё",
    "и",
    "о",
    "у",
    "ы",
    "э",
    "ю",
    "я",
    "a",
    "e",
    "i",
    "o",
    "u",
    "y",
  ];
  let count = 0;

  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    if (vowels.includes(lowerStr[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Привет, мир!")); // 3 (и, е, и)
console.log(countVowels("Hello, world!")); // 3 (e, o, o)
console.log(countVowels("Абракадабра")); // 5 (а, а, а, а, а)
console.log(countVowels("")); // 0
console.log(countVowels("БКЛМНПРСТ")); // 0
console.log(countVowels("aeiou")); // 5
console.log(countVowels("Ёжик")); // 2 (ё, и)

/* ЗАДАЧА 32 – спам
1. Написать функцию, для проверки спама в переданной строке. Функция возвращает true если строка содержит спам. Спамом считать следующие слова: 100%, бесплатно, увеличение продаж, только сегодня, не удаляйте.*/

function isSpam(text) {
  if (typeof text !== "string") {
    return false;
  }

  const spamWords = [
    "100%",
    "бесплатно",
    "увеличение продаж",
    "только сегодня",
    "не удаляйте",
  ];

  const lowerText = text.toLowerCase();

  for (let spamWord of spamWords) {
    if (lowerText.includes(spamWord.toLowerCase())) {
      return true;
    }
  }

  return false;
}

console.log(isSpam("Купите товар со скидкой 100%!")); // true
console.log(isSpam("Получите бесплатно подарок")); // true
console.log(isSpam("У нас увеличение продаж на этой неделе")); // true
console.log(isSpam("Только сегодня специальное предложение")); // true
console.log(isSpam("Не удаляйте это сообщение, оно важно")); // true
console.log(isSpam("Привет, как дела?")); // false
console.log(isSpam("")); // false

/* ЗАДАЧА 36 – самое длинное слово
1. Написать функцию, которая возвращает самое длинное слово из полученной строки*/

function findLongestWord(sentence) {
  if (typeof sentence !== "string" || sentence.trim() === "") {
    return "";
  }

  const cleanedSentence = sentence
    .replace(/[^\w\sа-яА-ЯёЁ-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const words = cleanedSentence.split(" ");

  const validWords = words.filter((word) => word.length > 0);

  if (validWords.length === 0) {
    return "";
  }

  let longestWord = validWords[0];

  for (let i = 1; i < validWords.length; i++) {
    if (validWords[i].length > longestWord.length) {
      longestWord = validWords[i];
    }
  }

  return longestWord;
}

// Тестирование функций
console.log(findLongestWord("Привет, как дела?")); // "Привет"
console.log(
  findLongestWord("JavaScript - это интересный язык программирования"),
); // "программирования"
console.log(findLongestWord("Hello world!")); // "Hello"
console.log(findLongestWord("")); // ""
console.log(findLongestWord("   ")); // ""
console.log(findLongestWord("Тест")); // "Тест"
