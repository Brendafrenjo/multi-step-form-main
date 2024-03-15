function handleNextPage(event) {
  event.preventDefault();
  const userName = document.getElementById("name").value.trim();
  const emailInput = document.getElementById("email").value.trim();
  const userPhone = document.getElementById("phone-number").value.trim();
  const firstStepContainer = document.querySelector(".first-step-container");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+?\d{1,3}(\s?\d{3}){3}$/;
  const selectPlan = document.querySelector(".select-plan");
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => (message.style.display = "none"));

  if (
    userName.length > 0 &&
    emailInput.length > 0 &&
    userPhone.length > 0 &&
    emailPattern.test(emailInput) &&
    phonePattern.test(userName)
  ) {
    //loads to the next page if all information is entered
    alert("registration successful");
    firstStepContainer.style.display = "none";
    selectPlan.style.display = "block";
  } else {
    //provides error message
    alert("registration failure");
    errorMessages.forEach(
      (message) => (message.style.display = "inline-block")
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.querySelector(".the-form");
  submitForm.addEventListener("submit", handleNextPage);
});
