// Задача №2

const invoice = 100;
const stock = 100;

const message =
  invoice <= stock
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';

console.log(message);
