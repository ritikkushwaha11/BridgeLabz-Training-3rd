// Q5: Movie Ticket Booking (Objects + RegExp)

const bookingForm = document.getElementById("bookingForm");

const namePattern = /^[A-Za-z ]+$/;
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

bookingForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const seats = Number(document.getElementById("seats").value);
  const error = document.getElementById("error");
  const ticket = document.getElementById("ticket");

  const errors = [];
  if (!namePattern.test(name)) errors.push("Name must contain alphabets only.");
  if (!emailPattern.test(email)) errors.push("Enter a valid email address.");
  if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
    errors.push("Seats must be a whole number from 1 to 10.");
  }

  if (errors.length > 0) {
    error.textContent = errors.join(" ");
    ticket.textContent = "";
    return;
  }

  const booking = { name, email, seats };
  error.textContent = "";
  ticket.textContent =
    `Booking Confirmed\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
});
