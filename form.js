const rate = document.getElementById("rateForm");
const contact = document.getElementById("contactForm");

if (rate) {
	rate.addEventListener('submit', () => {
		// Display a success message
		alert("Thank you for rating us!");
	});
}


if (contact) {
	// Not called
	contact.addEventListener("submit", () => {
	  alert("Thank you for contacting us!");
	});
}
