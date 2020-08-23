// Задача №6

let input;
let total = 0;

do {
  input = prompt('Введи число');
  total = total + Number(input);
} while (input !== null);

alert(`Сумма введеных чисел ${total}`);
console.log(total);
