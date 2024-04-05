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

function handlePrevious() {
  const firstStepContainer = document.querySelector(".first-step-container");
  const selectPlan = document.querySelector(".select-plan");

  firstStepContainer.style.display = "block";
  selectPlan.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.querySelector(".the-form");
  const selectPlan = document.querySelector(".payment-plan-button");
  const firstGoBack = document.querySelector(".first-go-back");
const addOns = document.querySelector(".addOns");

const paymentButtons = document.querySelectorAll(".payment");
const toggle = document.querySelector(".toggle");
const nextStepButton = document.querySelector(".btn-next-step");

  submitForm.addEventListener("submit", handleNextPage);
  firstGoBack.addEventListener("click", handlePrevious);

  selectPlan.addEventListener("click", function (event) {
    event.preventDefault();

   paymentButtons.forEach(function(payment) {
    payment.addEventListener("change", function() {
      if (document.querySelector(".payment:checked")) {
        selectPlan.style.display = "none";
        addOns.style.display = "block";
      } else {
        alert("Please select a payment plan");
      }
    });
  });

  nextStepButton.addEventListener("click", function() {
    if (!document.querySelector(".payment:checked")) {
      alert("Please select a payment plan");
    } else {
      // Proceed to the next step
    }
  });


  const firstToggle = document.querySelector(".first-toggle-icon");
  const secondToggle = document.querySelector(".second-toggle-icon");
  const freeMonths = document.querySelectorAll(".months-free");
  const spaceBetween = document.querySelector(".space-between");
  const yearly = document.querySelector(".yearly-sector");
  const monthly = document.querySelector(".monthly-section");
  const perMonth = document.querySelectorAll(".per-month");
  const perYear = document.querySelectorAll(".per-year");

  firstToggle.addEventListener("click", function () {
    firstToggle.style.display = "none";
    secondToggle.style.display = "inline-block";
    freeMonths.forEach(function (month) {
      month.style.display = "inline-block";
    });
    perMonth.forEach((month) => (month.style.display = "none"));
    perYear.forEach((year) => (year.style.display = "inline-block"));
    spaceBetween.style.display = "none";
    yearly.style.color = "hsl(213, 96%, 18%)";
    monthly.style.color = "hsl(231, 11%, 63%)";
  });

  secondToggle.addEventListener("click", function () {
    firstToggle.style.display = "inline-block";
    secondToggle.style.display = "none";
    freeMonths.forEach(function (month) {
      month.style.display = "none";
    });
    perMonth.forEach((month) => (month.style.display = "inline-block"));
    perYear.forEach((year) => (year.style.display = "none"));
    spaceBetween.style.display = "inline-block";
    yearly.style.color = "hsl(231, 11%, 63%)";
    monthly.style.color = "hsl(213, 96%, 18%)";
  });
});
