let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");
let messageError = document.getElementById("messageError");
let submitError = document.getElementById("submitError");

function nameValidation() {
  let contactName = document.getElementById("contact-name").value;
  if (contactName.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!contactName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Please write full name";
    return false;
  } else {
    nameError.innerHTML = "";
    return true;
  }
}
function emailValidation() {
  let contactEmail = document.getElementById("contact-email").value;
  if (contactEmail.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!contactEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Please enter valid email";
    return false;
  } else {
    emailError.innerHTML = "";
    return true;
  }
}

function phoneValidation() {
  let contactPhone = document.getElementById("contact-phone").value;
  if (contactPhone.length == 0) {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }
  if (!contactPhone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Phone no should be 10 digit";
    return false;
  } else {
    phoneError.innerHTML = "";
    return true;
  }
}

function messageValidation() {
  let contactMessage = document.getElementById("contact-message").value;
  let required = 30;
  let left = required - contactMessage.length;
  if (left > 0) {
    messageError.innerHTML = `${left} more character required`;
    return false;
  } else {
    messageError.innerHTML = "";
    return true;
  }
}

function formValidation() {
  if (
    !nameValidation() ||
    !emailValidation() ||
    !phoneValidation() ||
    !messageValidation()
  ) {
    submitError.style.display = "block";

    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
