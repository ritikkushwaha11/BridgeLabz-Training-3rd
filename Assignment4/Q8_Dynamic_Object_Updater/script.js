// Q8: Dynamic Object Updater

const user = {
  name: "John",
  email: "john@mail.com",
  age: 21
};

const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const output = document.getElementById("output");

function displayUser() {
  output.textContent = JSON.stringify(user, null, 2);
}

// Load the current object values into the form.
nameInput.value = user.name;
emailInput.value = user.email;
ageInput.value = user.age;
displayUser();

userForm.addEventListener("submit", event => {
  event.preventDefault();

  // Update the same object with the entered form values.
  user.name = nameInput.value.trim();
  user.email = emailInput.value.trim();
  user.age = Number(ageInput.value);

  displayUser();
});
