// Показ/приховування пароля
document.getElementById("show-password").addEventListener("change", function () {
    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});

// При завантаженні сторінки, задаємо правильний тип
window.addEventListener('load', function() {
    const passwordField = document.getElementById("password");
    const showPasswordCheckbox = document.getElementById("show-password");

    // Якщо чекбокс увімкнений, змінюємо тип на "text"
    if (showPasswordCheckbox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});
// Обробка логіну
document.getElementById("login-button").addEventListener("click", function (event) {
    event.preventDefault(); // не перезавантажувати сторінку

    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    // Проста перевірка
    if (username === "Oleksii" && password === "123") {
        // Редірект
        window.location.href = "main.html"; // зміни на свій файл
    } else {
        // Показати повідомлення про помилку
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Invalid username or password";
        errorMessage.style.color = "red";

    }
});
