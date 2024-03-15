function handleNextPage(event) {
  event.preventDefault();
  const userName = document.getElementById("name").value.trim();
  const emailInput = document.getElementById("email").value.trim();
  const userPhone = document.getElementById("phone-number").value.trim();
  const firstStepContainer = document.querySelector(".first-step-container");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const selectPlan = document.querySelector(".select-plan");

  //error message
  const nameError = document.querySelector(".name-error");
  const emailError = document.querySelector(".email-error");
  const phoneError = document.querySelector(".phone-error");
  const emailFormatError = document.querySelector(".email-format-error");

  nameError.style.display = "none";
  emailError.style.display = "none";
  phoneError.style.display = "none";
  emailFormatError.style.display = "none";

  //Track indivdual errors
  let hasError = false;

  //Check individual fields
  if (userName.length === 0) {
    nameError.style.display = "inline-block";
    hasError = true;
  }

  if (emailInput.length === 0) {
    emailError.style.display = "inline-block";
    hasError = true;
  } else {
    if (!emailPattern.test(emailInput)) {
      emailFormatError.style.display = "inline-block";
      hasError = true;
    }
  }

  if (userPhone.length === 0) {
    phoneError.style.display = "inline-block";
    hasError = true;
  }

  if (!hasError) {
    firstStepContainer.style.display = "none";
    selectPlan.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.querySelector(".the-form");
  submitForm.addEventListener("submit", handleNextPage);
});
