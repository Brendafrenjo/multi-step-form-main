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

function handleReturnToSelectPlan() {
  const selectPlan = document.querySelector(".select-plan");
  const addOns = document.querySelector(".pick-add-ons");

  selectPlan.style.display = "block";
  addOns.style.display = "none";
}

handleReturnToAddOns = () => {
  const addOns = document.querySelector(".pick-add-ons");
  const finishingUp = document.querySelector(".finishing-up");

  addOns.style.display = "block";
  finishingUp.style.display = "none";
};

handleFinishingPrice = (e) => {
  e.preventDefault();
  const monthlyPrice = document.querySelectorAll(".finishing-month");
  const yearlyPrice = document.querySelectorAll(".finishing-year");

  if (yearlyPrice[0].style.display === "inline-block") {
    monthlyPrice.forEach(function (month) {
      month.style.display = "inline-block";
    });

    yearlyPrice.forEach(function (year) {
      year.style.display = "none";
    });
  } else {
    monthlyPrice.forEach(function (month) {
      month.style.display = "none";
    });

    yearlyPrice.forEach(function (year) {
      year.style.display = "inline-block";
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.querySelector(".the-form");
  const selectPlanButton = document.querySelector(".payment-plan-button");
  const addOnsButtton = document.querySelector(".add-ons-button");
  const firstGoBack = document.querySelector(".first-go-back");
  const firstStepContainer = document.querySelector(".first-step-container");
  const selectPlan = document.querySelector(".select-plan");
  const addOns = document.querySelector(".pick-add-ons");
  const finishingUp = document.querySelector(".finishing-up");
  const secondGoBack = document.querySelector(".second-go-back");
  const thirdGoBack = document.querySelector(".confirm-go-back");
  const changeAccess = document.querySelector(".change-access");
  const confirmButton = document.querySelector(".confirm-button");
  const thankYou = document.querySelector(".thank-you");

  submitForm.addEventListener("submit", handleNextPage);
  firstGoBack.addEventListener("click", handlePrevious);
  secondGoBack.addEventListener("click", handleReturnToSelectPlan);
  thirdGoBack.addEventListener("click", handleReturnToAddOns);
  changeAccess.addEventListener("click", handleFinishingPrice);

  selectPlanButton.addEventListener("click", function (event) {
    event.preventDefault();

    //Check if a payment plan has been selected
    const selectedPayment = document.querySelector(".payment.active");
    if (selectedPayment) {
      const planTitle = selectedPayment.querySelector(".title").textContent;
      const planMonthlyPrice =
        selectedPayment.querySelector(".per-month").textContent;
      const planYearlyPrice =
        selectedPayment.querySelector(".per-year").textContent;

      // Store selected payment plan in localStorage
      localStorage.setItem(
        "paymentSelected",
        JSON.stringify({
          name: planTitle,
          priceMonthly: planMonthlyPrice,
          priceYearly: planYearlyPrice,
        })
      );

      //Confirm storage in the console
      console.log("Payment plan stored in localStorage:", {
        name: planTitle,
        priceMonthly: planMonthlyPrice,
        priceYearly: planYearlyPrice,
      });

      //navigate toadd-ons page
      selectPlan.style.display = "none";
      firstStepContainer.style.display = "none";
      addOns.style.display = "block";
    } else {
      alert("Please select a payment plan");
      console.log("No active payment plan selected.");
    }
  });

  const payments = document.querySelectorAll(".payment");
  console.log("Payments:", payments);

  payments.forEach(function (payment) {
    payment.addEventListener("click", function () {
      const isActive = payment.classList.contains("active");
      if (!isActive) {
        //check if there is an actice clas already
        payments.forEach(function (p) {
          p.classList.remove("active");
        });
        //Add active class to the clicked payment
        payment.classList.add("active");
      } else {
        //If the clicked payment is already active, remove active class
        payment.classList.remove("active");
      }
    });
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

  addOnsButtton.addEventListener("click", function (event) {
    event.preventDefault();

    //To check if any checkbox has been checked

    const selectedAddOns = [];
    const addsOnCheckboxes = document.querySelectorAll(".checkbox:checked");
    addsOnCheckboxes.forEach(function (addsOnCheckbox) {
      const addOn = addsOnCheckbox.closest(".online-service");
      const addOnName = addOn.querySelector(".services").textContent;
      const addOnPriceMonthly = addOn.querySelector(".plus-month").textContent;
      const addOnPriceYearly = addOn.querySelector(".plus-year").textContent;

      selectedAddOns.push({
        addsOnName: addOnName,
        addsOnPriceMonthly: addOnPriceMonthly,
        addsOnPriceYearly: addOnPriceYearly,
      });

      // Store the selected add-ons in localStorage
      if (selectedAddOns.length > 0) {
        localStorage.setItem("selectedAddOns", JSON.stringify(selectedAddOns));

        //confirm storage in the console
        console.log("Payment plan stored in the localStorage:", {
          addsOnName: addOnName,
          addsOnPriceMonthly: addOnPriceMonthly,
          addsOnPriceYearly: addOnPriceYearly,
        });

        //Navigate to finishing up page
        addOns.style.display = "none";
        firstStepContainer.style.display = "none";
        finishingUp.style.display = "block";
      } else {
        alert("Please select an add-on");
        console.log("No active payment plan selected.");
      }
    });

    const checkBoxes = document.querySelectorAll(".checkbox");
    console.log("Checkboxes:", checkBoxes);

    checkBoxes.forEach(function (checkBox) {
      checkBox.addEventListener("change", function () {
        const isActive = checkBox.checked;
        const onlineService = checkBox.closest(".online-service");

        if (isActive) {
          onlineService.classList.add("active");
        } else {
          onlineService.classList.remove("active");
        }
      });
      //Triger change event to apply initial state
      checkBox.dispatchEvent(new Event("change"));
    });
  });

  //Retrieve selected payment plan and add-ons from localStorage
  const paymentSelected = JSON.parse(localStorage.getItem("paymentSelected"));
  const selectedAddOns = JSON.parse(localStorage.getItem("selectedAddOns"));

  // Function to populate selected payment plan
  function populatePaymentPlanSection() {
    if (paymentSelected) {
      const selectedPaymentSection = document.getElementById(
        "selected-payment-section"
      );
      selectedPaymentSection.innerHTML = ""; // Clear any existing add-ons
      selectedPaymentSection.innerHTML = `
        <span class="first-services" id="selected-payment-section">
                <span class="checkbox-services">
                  <span>
                    <span class="arcade-monthly">${paymentSelected.name}(Monthly)</span>
                    <span class="arcade-yearly plus-year">${paymentSelected.name}(Yearly)</span>
                  </span>
                  <span class="finishing-selected-plan arcade-monthly"></span>
                  <div class="access">
                    <a href="/" class="change-access">Change</a>
                  </div></span
                ><span class="plus-month plus-plus finishing-month">$${paymentSelected.priceMonthly}</span
                ><span class="plus-year plus-plus finishing-year"
                  >$${paymentSelected.priceYearly}</span
                ></span
              >
        `;
    }
  }

  // To populate selected add-ons
  const selectedAddOnsSection = document.getElementById(
    "selected-add-ons-section"
  );
  if (selectedAddOns && selectedAddOnsSection.length > 0) {
    selectedAddOnsSection.innerHTML = ""; // Clear any existing add-ons
    selectedAddOns.forEach((addOn) => {
      selectedAddOnsSection.innerHTML += `
       <div class="finishing-up-change">
          <span class="finish-service">${addOn.addsOnName}</span>
          <span class="plus-month online-plus-plus finishing-month">${addOn.addsOnPriceMonthly}</span>
          <span class="plus-year online-plus-plus finishing-year">${addOn.addsOnPriceYearly}</span>
        </div>
      `;
    });
  }

  //To calculate and display total monthly and yearly costs
  let totalPricePerMonth = 0;
  let totalPricePerYear = 0;

  if (selectedPayment) {
    totalPricePerMonth += parseFloat(
      selectedPayment.priceMonthly.replace(/[^\d.-]/g, "")
    );
    totalPricePerYear += parseFloat(
      selectedPayment.priceYearly.replace(/[^\d.-]/g, "")
    );
  }

  if (selectedAddOns && selectedAddOns.length > 0) {
    selectedAddOns.forEach((addOn) => {
      totalPricePerMonth += parseFloat(
        addOn.priceMonthly.replace(/[^\d.-]/g, "")
      );
      totalPricePerYear += parseFloat(
        addOn.priceYearly.replace(/[^\d.-]/g, "")
      );
    });
  }

   const monthPriceElement = document.querySelector(".finishing-month");
   const yearPriceElement = document.querySelector(".finishing-year");
  // Display total price
  monthPriceElement.textContent = `+$${totalPricePerMonth.toFixed(2)}/mo`;
  yearPriceElement.textContent = `+$${totalPricePerYear.toFixed(2)}/yr`;

  // Event listener for "Confirm" button
  document
    .querySelector(".confirm-button")
    .addEventListener("click", function () {
      alert("Confirmed! Your selections have been saved.");
    });

    confirmButton.addEventListener("click", function (event) {
      event.preventDefault();
      //Navigate to thank you page
      finishingUp.style.display = "none";
       thankYou.style.display = "block";
    });
  
  populatePaymentPlanSection();
});

//
