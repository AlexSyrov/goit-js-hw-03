// Задача №4

const orderPieces = 10;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces * pricePerDroid;
let balanceCredit = credits - totalPrice;
let message;
if (orderPieces == null) {
  message = CANCELED_BY_USER;
} else if (totalPrice > credits) {
  message = ACCESS_DENIED;
} else if (totalPrice <= credits && totalPrice >= 0) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
}

console.log(message);
