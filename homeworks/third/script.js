// Урок 3. Промисы. Хранилище
// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. 
// Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный 
// отзыв удаляется из LocalStorage).

// Получаем элементы DOM
const productNameInput = document.getElementById('productName');
const reviewTextInput = document.getElementById('reviewText');
const addReviewButton = document.getElementById('addReview');
const productList = document.getElementById('productList');

// Функция для добавления отзыва
const addReview = () => {
    const productName = productNameInput.value.trim();
    const reviewText = reviewTextInput.value.trim();
    
    if (!productName || !reviewText) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    const reviews = JSON.parse(localStorage.getItem(productName)) || [];
    reviews.push(reviewText);
    localStorage.setItem(productName, JSON.stringify(reviews));
    productNameInput.value = '';
    reviewTextInput.value = '';
    displayProducts();
};

// Функция для отображения всех продуктов
const displayProducts = () => {
    productList.innerHTML = '';
    const products = Object.keys(localStorage);
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        const productTitle = document.createElement('h3');
        productTitle.textContent = product;
        productDiv.appendChild(productTitle);
        
        const reviewList = document.createElement('div');
        reviewList.classList.add('reviews');
        const reviews = JSON.parse(localStorage.getItem(product));
        
        reviews.forEach((review, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.textContent = review;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.onclick = () => {
                deleteReview(product, index);
            };
            
            reviewDiv.appendChild(deleteButton);
            reviewList.appendChild(reviewDiv);
        });
        
        productDiv.appendChild(reviewList);
        productList.appendChild(productDiv);
    });
};

// Функция для удаления отзыва
const deleteReview = (productName, reviewIndex) => {
    const reviews = JSON.parse(localStorage.getItem(productName));
    reviews.splice(reviewIndex, 1);
    
    if (reviews.length === 0) {
        localStorage.removeItem(productName);
    } else {
        localStorage.setItem(productName, JSON.stringify(reviews));
    }
    
    displayProducts();
};

// Обработчик события для кнопки добавления отзыва
addReviewButton.addEventListener('click', addReview);

// Отображаем продукты при загрузке страницы
displayProducts();

