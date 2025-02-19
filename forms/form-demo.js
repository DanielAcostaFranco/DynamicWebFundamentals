document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#checkoutForm");
  const paymentSelect = document.querySelector("#payment");
  const creditCardSection = document.querySelector("#creditCardSection");
  const paypalSection = document.querySelector("#paypalSection");
  const creditCardInput = document.querySelector("#creditcard");
  const paypalInput = document.querySelector("#paypalUser");

  function togglePaymentDetails() {
    // Hide both sections first
    creditCardSection.classList.add("hide");
    paypalSection.classList.add("hide");

    // Disable required fields
    creditCardInput.required = false;
    paypalInput.required = false;

    // Show and enable required fields based on selection
    if (paymentSelect.value === "creditcard") {
      creditCardSection.classList.remove("hide");
      creditCardInput.required = true;
    } else if (paymentSelect.value === "paypal") {
      paypalSection.classList.remove("hide");
      paypalInput.required = true;
    }
  }

  // Attach change event listener to payment select dropdown
  paymentSelect.addEventListener("change", togglePaymentDetails);

  // Attach submit event listener to form for validation
  form.addEventListener("submit", function (event) {
    const errors = [];
    if (!form.fullName.value.trim()) {
      errors.push("Full Name is required.");
    }
    if (!form.email.value.trim()) {
      errors.push("Email is required.");
    }
    if (!form.address.value.trim()) {
      errors.push("Address is required.");
    }
    if (!paymentSelect.value) {
      errors.push("Please select a payment method.");
    }

    // If there are errors, prevent form submission and display them
    if (errors.length > 0) {
      event.preventDefault();
      showErrors(errors);
    }
  });

  // Function to display error messages
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    errorEl.innerHTML = errors.map((error) => `<p>${error}</p>`).join("");
  }
});
