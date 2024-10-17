// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для 
// хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой 
// список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием 
// уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию.
// Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать 
// true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. 
// Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

// class Library {
//     // Приватное свойство для хранения списка книг
//     #books;

//     constructor(initialBooks = []) {
//         // Проверка на наличие дубликатов в начальном списке книг
//         const uniqueBooks = [...new Set(initialBooks)];
//         if (uniqueBooks.length !== initialBooks.length) {
//             throw new Error('Начальный список книг не должен содержать дубликатов.');
//         }
        
//         this.#books = uniqueBooks;
//     }

//     // Геттер для получения текущего списка книг
//     get allBooks() {
//         return [...this.#books];
//     }

//     // Метод для добавления книги
//     addBook(title) {
//         if (this.#books.includes(title)) {
//             throw new Error(`Книга "${title}" уже существует в библиотеке.`);
//         }
//         this.#books.push(title);
//     }

//     // Метод для удаления книги
//     removeBook(title) {
//         const index = this.#books.indexOf(title);
//         if (index === -1) {
//             throw new Error(`Книга "${title}" не найдена в библиотеке.`);
//         }
//         this.#books.splice(index, 1);
//     }

//     // Метод для проверки наличия книги
//     hasBook(title) {
//         return this.#books.includes(title);
//     }
// }

// // Пример использования:
// const myLibrary = new Library(['1984', 'Brave New World']);

// console.log(myLibrary.allBooks); // ['1984', 'Brave New World']

// myLibrary.addBook('Fahrenheit 451');
// console.log(myLibrary.allBooks); // ['1984', 'Brave New World', 'Fahrenheit 451']

// try {
//     myLibrary.addBook('1984'); // Исключение: Книга "1984" уже существует в библиотеке.
// } catch (e) {
//     console.error(e.message); 
// }

// myLibrary.removeBook('Brave New World');
// console.log(myLibrary.allBooks); // ['1984', 'Fahrenheit 451']

// console.log(myLibrary.hasBook('1984')); // true
// console.log(myLibrary.hasBook('Brave New World')); // false


// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, 
// но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут 
// отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва 
// менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const reviewsContainer = document.getElementById('reviews');
const reviewInput = document.getElementById('reviewInput');
const submitReviewButton = document.getElementById('submitReview');

// Функция для отображения отзывов
function displayReviews(reviews) {
    reviewsContainer.innerHTML = ''; // Очистка контейнера
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-container';
        reviewElement.textContent = review.text;
        reviewsContainer.appendChild(reviewElement);
    });
}

// Функция для проверки длины отзыва и добавления его в контейнер
function addReview(text) {
    if (text.length < 50 || text.length > 500) {
        throw new Error('Отзыв должен состоять от 50 до 500 символов.');
    }

    // Создание уникального ID для нового отзыва
    const newReviewId = (initialData.reduce((max, product) => Math.max(max, product.reviews.length), 0) + 1).toString();

    const newReview = {
        id: newReviewId,
        text: text,
    };

    // Добавление отзыва к первому продукту (можно изменить логику по необходимости)
    initialData[0].reviews.push(newReview);
    displayReviews(initialData[0].reviews);
}

// Инициализация: отобразить первоначальные отзывы при загрузке
displayReviews(initialData[0].reviews);

// Обработчик события для кнопки отправки отзыва
submitReviewButton.addEventListener('click', () => {
    const reviewText = reviewInput.value;
    try {
        addReview(reviewText);
        reviewInput.value = ''; // Сброс текстового поля
    } catch (error) {
        alert(error.message); // Отображение сообщения об ошибке
    }
});