function handleNextPage(event) {
  event.preventDefault();
  const clientName = document.getElementById("name").value;
  const emailInput = document.getElementById("email");
  const selectPlan = document.querySelector("select-plan");
  const fisrtStepContainer = document.querySelector(".first-step-container");
  const emailAddress = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const clientNumber = document.getElementById("phone-number");
  const errorMessage = document.querySelector(".error-message");
  if (
    clientName.length > 0 &&
    clientNumber.length > 0 &&
    emailAddress.length > 0 &&
    emailPattern.test(emailAddress)
  ) {
    fisrtStepContainer.style.display = "none";
    errorMessage.style.display = "none";
    selectPlan.style.display = "block";
  } else {
    //error if no email and name

    errorMessage.style.display = "inline-block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const nextStep = document.querySelector(".btn-next-step");
  nextStep.addEventListener("submit", handleNextPage);
});

const firstIcon = document.querySelector(".fa-1");
firstIcon.classList.add(".active");
