"use strict";

const form = document.querySelector(".form");
const btnSubmit = document.querySelector(".btn-submit");
const allInputs = document.querySelectorAll(".form-input");

//validating the input
const validateEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|mil|edu|biz|gov|info|name|museum|[a-zA-Z]{2})$/;

  return emailRegex.test(email);
};

/// Check all inputs
const checkData = function () {
  allInputs.forEach((input) => {
    const errorMsgEl = input.parentElement.nextElementSibling;

    if (input.id === "fname") {
      if (input.value === "") {
        return (errorMsgEl.textContent = "First Name can not be empty");
      } else {
        return (errorMsgEl.textContent = "");
      }
    }

    if (input.id === "lname") {
      if (input.value === "") {
        return (errorMsgEl.textContent = "Last Name can not be empty");
      } else {
        return (errorMsgEl.textContent = "");
      }
    }

    if (input.id === "email") {
      if (input.value === "") {
        return (errorMsgEl.textContent = "Email address can not be empty");
      } else if (!validateEmail(input.value)) {
        return (errorMsgEl.textContent = "Looks like this is not an email");
      } else {
        return (errorMsgEl.textContent = "");
      }
    }

    if (input.id === "password") {
      if (input.value === "") {
        return (errorMsgEl.textContent = "Password can not be empty");
      } else {
        return (errorMsgEl.textContent = "");
      }
    }
  });
};

///
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkData();
});
