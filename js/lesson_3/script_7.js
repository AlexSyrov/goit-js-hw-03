/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета

  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    this.transactions.push(amount);
    this.transactions.push(type);
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};

console.log(account.balance['']);

// console.log(account.deposit(50));
// //Счет пополнен на 50
// console.log(account.withdraw(22));
// //Со счета снято 22
// console.log(account.getBalance());
// // Баланс: 28
// console.log(account.withdraw(7));
// // Со счета снято 7
// console.log(account.getTransactionDetails(2));
// // { id: 2, type: "withdraw", amount: 7 }
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// // Транзакций deposit на сумму 50
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// //Транзакций withdraw на сумму 29
