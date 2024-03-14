function handleNextPage(event) {
  event.preventDefault();

  const clientName = document.getElementById("name").value.trim();
  const emailInput = document.getElementById("email");
  const selectPlan = document.querySelector(".select-plan");
  const fisrtStepContainer = document.querySelector(".first-step-container");
  const emailAddress = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+?\d{1,3}(\s?\d{3}){3}$/;
  const clientNumber = document.getElementById("phone-number").value.trim();
  const errorMessages = document.querySelectorAll(".error-message");

  //hide all error messages initially
  errorMessages.forEach((message) => (message.style.display = "none"));
  if (
    //in case of successful processing
    clientName.length > 0 &&
    clientNumber.length > 0 &&
    emailAddress.length > 0 &&
    emailPattern.test(emailAddress) &&
    phonePattern.test(clientNumber)
  ) {
    fisrtStepContainer.style.display = "none";
    errorMessage.style.display = "none";
    selectPlan.style.display = "block";
  } else {
    //error if no email add name
    errorMessages.forEach((message) => (message.style.display = "block"));
    emailInput.style.borderColor = "hsl(354, 84%, 57%)";
    emailInput.style.setProperty("color", "hsl(354, 84%, 57%)");
  }
}

//Shift to Add Ons Page

function handleAddOnsPage(event) {
  event.preventDefault();
  const selectPlan = document.querySelector(".select-plan");
  const pickAddOns = document.querySelector(".pick-add-ons");

  if (condition) {
    selectPlan.style.display = "none";
    pickAddOns.style.display = "block";
  } else {
    // Handle the case when condition is not met
  }

  //Shift to Finishing up Page

  function handleFinishingUpPage(event) {
    event.preventDefault();
  }
}

//Shift to the Thank You Page

function handleConfirmation(event) {
  event.preventDefault();
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".the-form");
  const paymentPlan = document.querySelector(".payment-plan-button");
  const pickAddOnsBtn = document.querySelector(".add-ons-button");
  const confirmBtn = document.querySelector(".confirm-button");

  confirmBtn.addEventListener("click", handleConfirmation);
  pickAddOnsBtn.addEventListener("click", handleFinishingUpPage);
  paymentPlan.addEventListener("click", handleAddOnsPage);
  form.addEventListener("submit", handleNextPage);
});

//https://chat.openai.com/c/43fc1963-0421-4d6b-9916-b734258a673f
