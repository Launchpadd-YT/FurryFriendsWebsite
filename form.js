const rate = document.querySelector('#rateForm');
const contact = document.querySelector('#contactForm');

rate.addEventListener('submit', (e) => {
	e.preventDefault();

	// Display a success message
	alert('Thank you for rating us!');
});

contact.addEventListener('submit', (e) => {
	e.preventDefault();

	// Display a success message
	alert('Thank you for contacting us!');
});
