document.getElementById('submitButton').addEventListener('click', function () {
    // Очищаем сообщения об ошибках перед проверкой
    clearMessages();

    // Считываем значения из полей формы
    const productName = document.getElementById('productName').value.trim();
    const productQuantity = document.getElementById('productQuantity').value.trim();
    const customerEmail = document.getElementById('customerEmail').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    const deliveryAddress = document.getElementById('deliveryAddress').value.trim();
    const deliveryDate = document.getElementById('deliveryDate').value.trim();
    const deliveryTime = document.getElementById('deliveryTime').value.trim();

    let hasErrors = false;

    // Валидация полей
    if (!productName || productName.length < 2 || productName.length > 15) {
        showError('productNameError', 'Название продукта должно быть от 2 до 15 символов.', 'productName');
        hasErrors = true;
    } else {
        showSuccess('productNameError', 'Название продукта введено корректно!', 'productName');
    }

    if (!productQuantity || productQuantity <= 0) {
        showError('productQuantityError', 'Введите корректное количество.', 'productQuantity');
        hasErrors = true;
    } else {
        showSuccess('productQuantityError', 'Количество введено корректно!', 'productQuantity');
    }

    if (!validateEmail(customerEmail)) {
        showError('customerEmailError', 'Введите корректный Email.', 'customerEmail');
        hasErrors = true;
    } else {
        showSuccess('customerEmailError', 'Email введен корректно!', 'customerEmail');
    }

    if (!validatePhone(customerPhone)) {
        showError('customerPhoneError', 'Введите корректный телефон.', 'customerPhone');
        hasErrors = true;
    } else {
        showSuccess('customerPhoneError', 'Телефон введен корректно!', 'customerPhone');
    }

    if (!deliveryAddress) {
        showError('deliveryAddressError', 'Введите адрес доставки.', 'deliveryAddress');
        hasErrors = true;
    } else {
        showSuccess('deliveryAddressError', 'Адрес доставки введен корректно!', 'deliveryAddress');
    }

    if (!deliveryDate) {
        showError('deliveryDateError', 'Выберите дату доставки.', 'deliveryDate');
        hasErrors = true;
    } else {
        showSuccess('deliveryDateError', 'Дата доставки выбрана корректно!', 'deliveryDate');
    }

    if (!deliveryTime) {
        showError('deliveryTimeError', 'Выберите время доставки.', 'deliveryTime');
        hasErrors = true;
    } else {
        showSuccess('deliveryTimeError', 'Время доставки выбрано корректно!', 'deliveryTime');
    }

    // Если есть ошибки, не продолжаем
    if (hasErrors) return;

    // Если ошибок нет, выводим данные
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
        <h3>Ваш заказ:</h3>
        <p><strong>Продукт:</strong> ${productName}</p>
        <p><strong>Количество:</strong> ${productQuantity}</p>
        <p><strong>Email:</strong> ${customerEmail}</p>
        <p><strong>Телефон:</strong> ${customerPhone}</p>
        <p><strong>Адрес доставки:</strong> ${deliveryAddress}</p>
        <p><strong>Дата доставки:</strong> ${deliveryDate}</p>
        <p><strong>Время доставки:</strong> ${deliveryTime}</p>
    `;
});

// Показываем ошибку под нужным полем
function showError(elementId, message, inputId) {
    const errorElement = document.getElementById(elementId);
    const inputElement = document.getElementById(inputId);
    errorElement.textContent = message;
    errorElement.style.color = 'red';
    inputElement.style.borderColor = 'red';
}

// Показываем успешную валидацию под нужным полем
function showSuccess(elementId, message, inputId) {
    const successElement = document.getElementById(elementId);
    const inputElement = document.getElementById(inputId);
    successElement.textContent = message;
    successElement.style.color = 'green';
    inputElement.style.borderColor = 'green';
}

// Очищаем все сообщения об ошибках
function clearMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.textContent = '';
    });

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.borderColor = ''; // Сбрасываем цвет границы
    });
}

// Валидация email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Валидация телефона
function validatePhone(phone) {
    const re = /^\+?\d{10,15}$/;
    return re.test(phone);
}

// Изменение цвета заголовка блока "Что Вам необходимо?" при наведении
const featuresHeading = document.querySelector('.features h2');

featuresHeading.addEventListener('mouseover', () => {
    featuresHeading.style.color = 'yellow'; // Цвет при наведении
    featuresHeading.style.transition = 'color 0.3s'; // Плавный переход
});

//  Изменение текста кнопки Отправить заявку на Заявка отправлена

featuresHeading.addEventListener('mouseout', () => {
    featuresHeading.style.color = ''; // Возврат к стандартному стилю
});

const button = document.querySelector('#submitButton');

button.addEventListener('click', () => {
    button.textContent = button.textContent === 'Отправить заявку' ? 'Заявка отправлена!' : 'Отправить заявку';
});
