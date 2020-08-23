let balance = 50000;
const payment = 2000;
const messagePr = `Общая стоимость зака ${payment} кредитов. Проверяем кол-во доступных средств на счету`;
let message;

console.log(messagePr);

if (payment <= balance) {
  balance - payment;
  console.log('Ok');
  message = `На счету осталось ${balance - payment} кредитов.`;
} else {
  message = `На счету не достаточно средств`;
}
console.log(message);

console.log('Операция завершена');
