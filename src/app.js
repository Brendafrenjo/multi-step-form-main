function handleNextPage(event) {
  event.preventDefault();
  const clientName = document.getElementById("name").value;
  const emailInput = document.getElementById("email");
  const selectPlan = document.querySelector(".select-plan");
  const fisrtStepContainer = document.querySelector(".first-step-container");
  const emailAddress = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const clientNumber = document.getElementById("phone-number");
  const errorMessage = document.querySelector(".error-message");
  if (
    //in case of successful processing
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
    errorMessage.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const nextStep = document.querySelector(".btn-next-step");
  nextStep.addEventListener("click", handleNextPage);
});

const firstIcon = document.querySelector(".fa-1");
firstIcon.classList.add("active-style");

//so I have to swithc from one tab to the next and like that like that. I have no idea how I woll do it but lest's see.
