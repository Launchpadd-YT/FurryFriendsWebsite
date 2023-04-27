const form = document.querySelector('#rateForm');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Get the form data
	const name = form.querySelector('#name').value;
	const email = form.querySelector('#email').value;
	const rating = form.querySelector('#rating').value;
	const comment = form.querySelector('#comment').value;

	// Perform validation
	if (!name || !email || !rating) {
		alert('Please fill in all required fields');
		return;
	}

	// Create a new object to store the form data
	const formData = {
		name,
		email,
		rating,
		comment
	};

	// Save the form data to a database or send it to a server
	console.log(formData);

	// Reset the form
	form.reset();

	// Display a success message
	alert('Thank you for rating us!');
});
