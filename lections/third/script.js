// Задание 1 (тайминг 30 минут)
// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве
// (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен
// имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой
// задержки — отображать новости на странице.
// 1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// 2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать
// задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для
// добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
// 3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное
// выполнение и ошибки с использованием then() и catch().
// 4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// 5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует
// её снова после завершения операции (будь то успешная загрузка или ошибка).


// const btn = document.querySelector('.load-button');
// const newsContainer = document.querySelector('.news-container');
// const mockDatabase = [
//     { title: 'Новость 1', content: 'Содержимое новости 1' },
//     { title: 'Новость 2', content: 'Содержание новости 2' },
// ];

// function fetchNews() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve(mockDatabase);
//             } else {
//                 reject('Ошибка загрузки новостей');
//             }
//         }, 2000);
//     });
// } 

// btn.addEventListener('click', function (e) {
//     fetchNews()
//         .then(data => {
//             data.forEach(news => {
//                 const newsP = document.createElement('p');
//                 newsP.textContent = news.content;
//                 const newsH = document.createElement('h2');
//                 newsH.textContent = news.title;
//                 newsContainer.appendChild(newsP);
//                 newsContainer.appendChild(newsH);
//             });
//         }).catch(error => {
//             newsContainer.textContent = `Ошибка ${error}`;
//         }); 
// });


// Задание 2 (тайминг 25 минут)
// Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage,
// а затем загружать или удалять сохраненные данные.
// Разработка Интерфейса:
// Создать HTML-страницу с:
// ● Одним текстовым полем для ввода данных пользователем.
// ● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
// ● Местом для отображения сохраненного текста.
// Программирование Логики на JavaScript:
// 1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
// 2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
// 3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее
// сообщение отображается на странице.


// document.getElementById('saveButton').addEventListener('click', function() {
//     const textInput = document.getElementById('textInput').value;
//     localStorage.setItem('savedText', textInput);
//     alert('Текст сохранен!');
// });

// document.getElementById('loadButton').addEventListener('click', function() {
//     const savedText = localStorage.getItem('savedText');
//     if (savedText) {
//         document.getElementById('savedText').innerText = savedText;
//     } else {
//         document.getElementById('savedText').innerText = 'Нет сохраненного текста.';
//     }
// });

// document.getElementById('clearButton').addEventListener('click', function() {
//     localStorage.removeItem('savedText');
//     document.getElementById('savedText').innerText = 'Сохраненный текст удален.';
// });


// Задание 3 (тайминг 35 минут)
// Создать интерактивную веб-страницу, где пользователи могут выбирать различные элементы мебели
// (например, столы, стулья, диваны) и их параметры (материал, цвет, стиль). Выбранные параметры должны
// быть сохранены так, чтобы при повторном посещении сайта пользователь мог видеть свой ранее собранный
// комплект мебели.
// 1. Пользователи могут выбирать из различных типов мебели (например, столы, стулья, диваны).
// 2. Для каждого типа мебели доступен выбор параметров (цвет, материал, стиль).
// 3. Предусмотреть кнопку "Сохранить комплект", при нажатии на которую текущий выбор пользователя
// сохраняется в localStorage.
// 4. При повторном посещении сайта автоматически загружать сохраненные параметры из localStorage и
// отображать ранее созданный комплект.
// 5. Предусмотреть возможность для пользователя очистить сохраненные настройки через специальную
// кнопку.
// 6. После нажатия на кнопку "Сохранить" на странице должен отображаться выбранный комплект.
// 7. При нажатии на кнопку "Очистить" должно появляться сообщение о том, что выбор не сделан и
// предыдущие настройки удалены.

// document.addEventListener('DOMContentLoaded', () {
//     const loadSettings = () => {
//         const savedSettings = localStorage.getItem('furnitureSet');
//         if (savedSettings) {
//             const settings = JSON.parse(savedSettings);
//             document.querySelector('#table-color').value = settings.tableColor;
//             document.querySelector('#table-material').value = settings.tableMaterial;
//             document.querySelector('#chair-color').value = settings.chairColor;
//             document.querySelector('#chair-material').value = settings.chairMaterial;
//         }
//     }

//     loadSettings();

//     document.querySelector('.save-btn').addEventListener('click', () => {
//         const furnitureSet = {
//             tableColor: document.querySelector('#table-color').value,
//             tableMaterial: document.querySelector('#table-material').value,
//             chairColor: document.querySelector('#chair-color').value,
//             chairMaterial: document.querySelector('#chair-material').value
//         };
//         localStorage.setItem('furnitureSet', JSON.stringify(furnitureSet));
//         alert('Комплект сохранен');
//     });

//     document.querySelector('.load-btn').addEventListener('click', () => {
//         loadSettings();
//     });

//     document.querySelector('.clear-btn').addEventListener('click', () => {
//         localStorage.removeItem('furnitureSet');
//         alert('Настройки очищены');

//         document.querySelector('#table-color').selectedIndex = 0;
//         document.querySelector('#table-material').selectedIndex = 0;
//         document.querySelector('#chair-color').selectedIndex = 0;
//         document.querySelector('#chair-material').selectedIndex = 0;
//     });
// });



// Задание 4* (тайминг 55 минут)
// Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и входить в
// систему, используя данные, сохраненные в LocalStorage.
// Приложение будет состоять из трёх основных страниц:
// 1. Страница регистрации:
// ○ Предлагает пользователю ввести логин и пароль.
// ○ После ввода данных, они сохраняются в LocalStorage.
// ○ Пользователь перенаправляется на страницу входа.
// 2. Страница входа:
// ○ Предлагает пользователю ввести логин и пароль.
// ○ Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется
// на страницу приветствия.
// ○ Если данные не совпадают, выводится сообщение об ошибке.
// 3. Страница приветствия:
// ○ Простое приветственное сообщение для авторизованного пользователя.
// ○ Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа.