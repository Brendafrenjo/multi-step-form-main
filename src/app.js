function handleNextPage(e) {
  e.preventDefault();
  const clientName = document.getElementById("name");
  const emailAddress = document.getElementById("email");
  const clientNumber = document.getElementById("phone-number");
  if (clientName && emailAddress && clientNumber) {
    const fisrtStepContainer = document.querySelector(".first-step-container");
    fisrtStepContainer.style.display = "none";
  } else {
    //error if no email and name
    const errorMessage = document.querySelector(".error-message");
    errorMessage.style.display = "inline-block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const nextStep = document.querySelector(".btn-next-step");
  nextStep.addEventListener("cliCK", handleNextPage);
});
