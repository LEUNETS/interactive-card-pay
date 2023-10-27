document.addEventListener('DOMContentLoaded', () => {
    const firstVideo = document.getElementById('firstVideo');
    const secondVideo = document.getElementById('secondVideo');
    const hoveredImage = document.getElementById('hoveredImage');
    const myIdDiv = document.getElementById('myIdDiv');

    //preload - загрузка видео вместе со страницей
    //loop повторение воспроизведения - для второго.

    console.log(firstVideo);

    firstVideo.addEventListener('timeupdate', () => {
        if (firstVideo.currentTime >= 6) {
            firstVideo.style.display = 'none';
            secondVideo.style.display = 'block';
            myIdDiv.style.display = 'flex';
        }
    });

    myIdDiv.addEventListener('mouseover', () => {
        secondVideo.style.display = 'none';
        hoveredImage.style.display = 'block';
    });

    // myIdDiv.addEventListener('mouseout', () => {
    //     hoveredImage.style.display = 'none';
    //     secondVideo.style.display = 'block';
    // });
});

myIdDiv.addEventListener("click", takeCard);
function takeCard() {
    alert('я просто стрелка');
};

// number.addEventListener("click", checkNumber);
// function checkNumber() {
//     if {
//     (max.length === 14)
//  } else {
//         alert('Длина не должна превышать 14 символов')
//     }
// }

const object = document.getElementById('myIdDiv');
const cardForm = document.getElementById('card-form');
const cardNumberInput = document.getElementById('card-number');
const expiryDateInput = document.getElementById('expiry-date');
const cvvInput = document.getElementById('cvv');
const rememberCardButton = document.getElementById('remember-card');
const clearFormButton = document.getElementById('clear-form');
const submitFormButton = document.getElementById('submit-form');

// // Получение элемента с классом hidden
// const hiddenElement = document.getElementById('card-form');

// // Удаление класса hidden для отображения элемента
// hiddenElement.classList.remove('hidden');

cardNumberInput.addEventListener('input', () => {
    // Позволяет вводить только цифры

    const cardNumberInput = document.getElementById('card-number');

    cardNumberInput.addEventListener('input', function (e) {
        // Удаляем все нецифровые символы из ввода
        const cardNumber = e.target.value.replace(/\D/g, '');

        // Разбиваем номер карты на части по 4 цифры
        const parts = cardNumber.match(/[\s\S]{1,4}/g);

        // Добавляем два пробела между каждой четверкой цифр
        const formattedCardNumber = parts ? parts.join('  ') : '';

        // Устанавливаем отформатированное значение в поле ввода
        e.target.value = formattedCardNumber;
    });
    cardNumberInput.value = cardNumberInput.value.replace(/\D/g, '');
});

expiryDateInput.addEventListener('input', () => {
    // Позволяет вводить только цифры и добавляет разделитель "/"
    expiryDateInput.value = expiryDateInput.value.replace(/\D/g, '');
    if (expiryDateInput.value.length >= 2) {
        expiryDateInput.value = expiryDateInput.value.substring(0, 2) + '/' + expiryDateInput.value.substring(2);
    }
});

cvvInput.addEventListener('input', () => {
    // Позволяет вводить только цифры
    cvvInput.value = cvvInput.value.replace(/\D/g, '');
});

// rememberCardButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (cardNumberInput.value.trim() !== '' && expiryDateInput.value.trim() !== '' && cvvInput.value.trim() !== '') {
//         localStorage.setItem('cardNumber', cardNumberInput.value);
//         localStorage.setItem('expiryDate', expiryDateInput.value);
//         localStorage.setItem('cvv', cvvInput.value);
//         alert('Данные карты сохранены в кэше браузера');
//     } 
//     else {
//         alert('Заполните все обязательные поля');
//     }
// });

// Запись данных в локальное хранилище (кэш браузера)
rememberCardButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (cardNumberInput.value.trim() !== '' && expiryDateInput.value.trim() !== '' && cvvInput.value.trim() !== '') {
        localStorage.setItem('cardNumber', cardNumberInput.value);
        localStorage.setItem('expiryDate', expiryDateInput.value);
        localStorage.setItem('cvv', cvvInput.value);
        alert('Данные карты сохранены в кэше браузера');
    } else {
        alert('Заполните все обязательные поля');
    }
});

// Получение данных из локального хранилища (кэш браузера)
// Этот код может быть использован при загрузке страницы для проверки наличия сохраненных данных
const savedCardNumber = localStorage.getItem('cardNumber');
const savedExpiryDate = localStorage.getItem('expiryDate');
const savedCVV = localStorage.getItem('cvv');

// Использование данных, полученных из кэша браузера
if (savedCardNumber && savedExpiryDate && savedCVV) {
    // Действия с данными, например, предзаполнение формы
    cardNumberInput.value = savedCardNumber;
    expiryDateInput.value = savedExpiryDate;
    cvvInput.value = savedCVV;
}

clearFormButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Предотвратить действие по умолчанию (в данном случае, обновление страницы)

    cardNumberInput.value = '';
    expiryDateInput.value = '';
    cvvInput.value = '';
});

submitFormButton.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    if (cardNumberInput.value.trim() === '' || expiryDateInput.value.trim() === '' || cvvInput.value.trim() === '') {
        alert('Заполните все обязательные поля');
    } else {
        // Здесь можно добавить логику для отправки формы, так как все поля заполнены
        alert('Товар оплачен!');
        window.location.reload(); // Перезагрузка страницы
    }
});


