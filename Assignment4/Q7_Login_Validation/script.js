// Q7: Login Form Validation using RegExp

const loginForm = document.getElementById("loginForm");

const usernamePattern = /^.{5,}$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

loginForm.addEventListener("submit", event => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errors = [];

  if (!usernamePattern.test(username)) {
    errors.push("Username must be at least 5 characters long.");
  }
  if (password.length < 8) errors.push("Password must be at least 8 characters long.");
  if (!/[A-Z]/.test(password)) errors.push("Password must contain an uppercase letter.");
  if (!/[a-z]/.test(password)) errors.push("Password must contain a lowercase letter.");
  if (!/\d/.test(password)) errors.push("Password must contain a number.");
  if (!/[^A-Za-z0-9]/.test(password)) errors.push("Password must contain a special character.");

  const message = document.getElementById("message");
  message.textContent = errors.length ? errors.join("\n") : "Login validation successful!";
  message.style.color = errors.length ? "red" : "green";
});
