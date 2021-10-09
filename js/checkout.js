const form = document.querySelector("#errorForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#emailAdress");
const telephone = document.querySelector("#telephone");
const phoneError = document.querySelector("#phoneError");
const streetName = document.querySelector("#streetName");
const streetNameError = document.querySelector("#streetNameError");
const streetNumber = document.querySelector("#streetNumber");
const streetNumberError = document.querySelector("#streetNumberError");
const zipCode = document.querySelector("#zipCode");
const zipCodeError = document.querySelector("#zipCodeError");
const country = document.querySelector("#country");
const countryError = document.querySelector("#countryError");

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

    if (validatePhoneNumber(telephone.value) === true) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block";
    }

    if (checkLength(streetName.value, 0) === true) {
        streetNameError.style.display = "none";
    } else {
        streetNameError.style.display = "block";
    }

    if (checkLength(streetNumber.value, 0) === true) {
        streetNumberError.style.display = "none";
    } else {
        streetNumberError.style.display = "block";
    }

    if (checkLength(zipCode.value, 0) === true) {
        zipCodeError.style.display = "none";
    } else {
        zipCodeError.style.display = "block";
    }

    if (checkLength(country.value, 0) === true) {
        countryError.style.display = "none";
    } else {
        countryError.style.display = "block";
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

function validatePhoneNumber(telephone) {
    const regEx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    const numReq = regEx.test(telephone);
    return numReq
}