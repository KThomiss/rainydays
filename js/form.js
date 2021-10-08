const form = document.querySelector("#errorForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#emailAdress");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const phoneNumber = document.querySelector("#phoneError");
const streetName = document.querySelector("#streetName");
const streetNumber = document.querySelector("#streetNumber");
const zipCode = document.querySelector("#zipCode");
const country = document.querySelector("#country");
const textError = document.querySelector("#textError");

function validateForm() {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
    }

    if (checkLength(lastName.value, 0) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
    }

    if (checkLength(password.value, 5) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
    }

    if (checkLength(confirmPassword.value, 5) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
    }

    if (checkLength(phoneNumber.value) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
    }

    if (checkLength(streetName.value, 20) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
    }

    if (checkLength(streetNumber.value, 5) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
    }

    if (checkLength(zipCode.value, 3) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
    }

    if (checkLength(country.value, 20) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
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

function validatePhoneNumber(phoneNumber) {
    const regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const phoneNumReq = regEx.test(phoneNumber);
    return phoneNumReq
}
