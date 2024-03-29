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
    document.getElementById("name").style.borderColor = "hsl(354, 84%, 57%)";
    hasError = true;
  }

  if (emailInput.length === 0) {
    emailError.style.display = "inline-block";
    document.getElementById("email").style.borderColor = "hsl(354, 84%, 57%)";
    hasError = true;
  } else {
    if (!emailPattern.test(emailInput)) {
      emailFormatError.style.display = "inline-block";
      document.getElementById("email").style.borderColor = "hsl(354, 84%, 57%)";
      hasError = true;
    }
  }

  if (userPhone.length === 0) {
    phoneError.style.display = "inline-block";
    document.getElementById("phone-number").style.borderColor =
      "hsl(354, 84%, 57%)";
    hasError = true;
  }

  if (!hasError) {
    firstStepContainer.style.display = "none";
    selectPlan.style.display = "block";
  }
}

function handleChangetoAddOns(event) {
  event.preventDefault();
}

function handlePrevious() {
  const firstStepContainer = document.querySelector(".first-step-container");
  const selectPlan = document.querySelector(".select-plan");

  firstStepContainer.style.display = "block";
  selectPlan.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.querySelector(".the-form");
  const selectPlan = document.querySelector(".payment-plan-button");
  const firtsGoBack = document.querySelector(".first-go-back");

  submitForm.addEventListener("submit", handleNextPage);
  selectPlan.addEventListener("click", handleChangetoAddOns);
  firtsGoBack.addEventListener("click", handlePrevious);

});
