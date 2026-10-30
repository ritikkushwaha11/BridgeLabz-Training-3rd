// Q2: Student Form Validator using RegExp

const studentForm = document.getElementById("studentForm");

const patterns = {
  name: /^[A-Za-z ]+$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  phone: /^\d{10}$/,
  // At least one uppercase letter, one digit, and one special character.
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

function showValidation(field, isValid, message = "") {
  const input = document.getElementById(field);
  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
  document.getElementById(`${field}Error`).textContent = message;
}

studentForm.addEventListener("submit", event => {
  event.preventDefault();

  const values = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    password: document.getElementById("password").value
  };

  const messages = {
    name: "Name must contain alphabets only.",
    email: "Enter a valid email address.",
    phone: "Phone number must contain exactly 10 digits.",
    password: "Password needs an uppercase letter, a number, and a special character."
  };

  let allValid = true;
  Object.keys(patterns).forEach(field => {
    const valid = patterns[field].test(values[field]);
    showValidation(field, valid, valid ? "" : messages[field]);
    if (!valid) allValid = false;
  });

  document.getElementById("result").textContent =
    allValid ? "Registration successful!" : "Please correct the highlighted fields.";
});
