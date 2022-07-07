const email = document.getElementById("user_email");
email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a correct e-mail address.");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

function check(input) {
  if (input.value != document.getElementById("password").value) {
    input.setCustomValidity("Password must match.");
  } else {
    input.setCustomValidity("");
  }
}
