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

    myIdDiv.addEventListener('mouseout', () => {
        hoveredImage.style.display = 'none';
        secondVideo.style.display = 'block';
    });
});

myIdDiv.addEventListener("click", takeCard);

function takeCard() {
    //alert(1);
};

// console.log(checkNumber)
///.. Попытка написать самому))

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

object.addEventListener('click', () => {
    // при клике меняет на фото
    cardForm.style.display = 'block';
});



cardNumberInput.addEventListener('input', () => {
    // Позволяет вводить только цифры
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

rememberCardButton.addEventListener('click', () => {
    alert('Карта запомнена');
    // Место для доп. логики
});

clearFormButton.addEventListener('click', () => {
    cardNumberInput.value = '';
    expiryDateInput.value = '';
    cvvInput.value = '';
});

submitFormButton.addEventListener('click', () => {
    alert('Форма отправлена');
    // Добавьте логику отправки формы здесь
});