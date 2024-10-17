// // Задание 1 (тайминг 25 минут)
// // Давайте создадим класс для управления банковским счетом. В этом классе будет приватное
// // свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// // 1. Класс должен содержать приватное свойство #balance, которое инициализируется
// // значением 0 и представляет собой текущий баланс счета.
// // 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// // 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет.
// // Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте
// // ошибку.
// // 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
// // Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в
// // противном случае выбрасывайте ошибку.
// // 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
// // Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте
// // ошибку.

// class BankAccount {
//     //приватное свойство для хранения баланса
//     #balance = 0;
    
//     //Геттер для получения текущего баланса
//     get balance() {
//         return this.#balance;
//     }

//     set balance(balance) {
//         this.#balance = balance;
//     }
    
//     //Метод для внесения денег на счет 
//     deposit(cash) {
//         if (cash <= 0) {
//             throw new Error("Сумма депозита должна быть больше 0");
//         }
//         this.#balance += cash;
//         return this.#balance;
//     }
    
//     //withdraw(amount) Метод для снятия денег со счета
//     withdraw(cash) {
//         if (cash <= 0) {
//             throw new Error("Сумма для снятия должна быть больше 0");
//         }
//         if (this.#balance - cash < 0) {
//             throw new Error("Сумма для снятия больше суммы счета");
//         }
//         this.#balance -= cash;
//         return this.#balance;
//     }

//     constructor(balance) {
//         //конструктор для инициализации начального баланса
//         if (balance < 0) {
//             throw new Error("Баланс отрицательный");
//         }
//         this.#balance = balance;
//     }
// }

// let account = new BankAccount(500);
// console.log(account.balance);

// account.deposit(200);
// console.log(account.balance);


// account.withdraw(100);
// console.log(account.balance);

// Задание 2 (тайминг 35 минут)
// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
// некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
// наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
// и instanceof.
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
// PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
// действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
// возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
// Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного
// пользователя и дайте соответствующий ответ.

// class User {
//     #name;
//     #surname;
//     constructor(name, surname) {
//         this.#name = name;
//         this.#surname = surname;
//     }

//     get name() {
//         return this.#name;
//     }

//     get surname() {
//         return this.#surname;
//     }
// }

// class PremiumUser extends User {
//     constructor(name, surname) {
//         super(name, surname);
//     }
//     premiumAccount = null;
//     setPremiumAccount() {
//         this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1) //пример: установите срок действия на год вперед
//     }
// }

// class RegularUser extends User {
//     constructor(name, surname) {
//         super(name, surname);
//     }
// }

// function getAccountInfo(user) {
//     //премиум аккаунт действителен до такой-то даты или информация отсутствует 
//     //пользователь без премиум аккаунта
//     //Тип пользователя не определен

//     if (user instanceof PremiumUser) {
//         console.log(`Премиум аккаунт действителен до ${new Date(
//             user.premiumAccount).getFullYear()}` ?? 'Информация отсутствует',
//             user.name,
//             user.surname);
//     } else if (user instanceof RegularUser) {
//         console.log('Пользователь без премиум аккаунта', user.name, user.surname);
//     } else {
//         console.log('Тип пользователя не определен');
//     }
// }

// //проверка

// const regular = new RegularUser('Pavel', 'Sivkov');
// const premium = new PremiumUser('Ivan', 'Kondratyev');
// premium.setPremiumAccount();
// const premiumLim = new PremiumUser('Daria', 'Kondratyeva');

// getAccountInfo(regular);
// getAccountInfo(premium);
// getAccountInfo(premiumLim);


// Задание 3 (тайминг 15 минут)
// Вы создаете интерфейс, где пользователь вводит число.
// Ваша задача — проверить, является ли введенное значение числом или нет, и дать
// соответствующий ответ.
// 1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку
// "Проверить".
// 2. Добавьте место (например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция
// должна использовать try и catch для проверки вводимого значения.

// const comment = document.querySelector('.comment');
// const btn = document.querySelector('.btn');
// const num = document.querySelector('.num');
// btn.addEventListener('click', function (e) {
//     try {
//         const inputElement = num.value;
//         if (isNaN(inputElement)) {
//             throw new Error('This not a number');
//         }
//         comment.textContent = 'Good';
//     } catch (error) {
//         comment.textContent = error.message;
//     }
// });