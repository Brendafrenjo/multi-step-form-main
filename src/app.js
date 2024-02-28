function handleNextPage(event) {
  event.preventDefault();
  const clientName = document.getElementById("name");
  const emailInput = document.getElementById("email");
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
    const fisrtStepContainer = document.querySelector(".first-step-container");
    fisrtStepContainer.style.display = "none";
    errorMessage.style.display = "none";
  } else {
    //error if no email and name

    errorMessage.style.display = "inline-block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const nextStep = document.querySelector(".btn-next-step");
  nextStep.addEventListener("submit", handleNextPage);
});
