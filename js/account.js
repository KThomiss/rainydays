const form = document.querySelector("#errorForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#emailAdress");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const confirmPassword = document.querySelector("#confirmPassword");
const confirmPasswordError = document.querySelector("#confirmPasswordError");

function validateForm() {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastName.value, 0) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (validatePassword(password.value) === true) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }

    if (password.value === confirmPassword.value) {
        confirmPasswordError.style.display = "none";
    } else {
        confirmPasswordError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailRequirement = regEx.test(email);
    return emailRequirement
}

function validatePassword(password) {
    const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const passwordRequirement = regEx.test(password);
    return passwordRequirement
}