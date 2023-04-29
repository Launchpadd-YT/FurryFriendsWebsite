// Home Page

const slideshowImages = [
    "Slideshow/image1.jpg",
    "Slideshow/image2.jpg",
    "Slideshow/image3.jpg",
    "Slideshow/image4.jpg",
    "Slideshow.image5.jpg"
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    const slideshow = document.getElementById("slideshow");
    slideshow.style.backgroundImage = `url(${slideshowImages[currentImageIndex]})`;
    currentImageIndex++;
    if (currentImageIndex >= slideshowImages.length) {
        currentImageIndex = 0;
    }
}

changeBackgroundImage();
setInterval(changeBackgroundImage, 5000); // Change images every 5 seconds.

function quoteScroll() {
  document.getElementById('quote').scrollIntoView();
}


// Testimonials

// Randomize the order of the testimonials
const testimonialContainer = document.getElementById("testimonialContainer");

for (let i = testimonialContainer.children.length; i >= 0; i--) {
    testimonialContainer.appendChild(testimonialContainer.children[Math.random() * i | 0]);
}


// Blog

// Get all the blog post elements
var blogPosts = document.getElementsByClassName("blogPost");

// Add a click event listener to each blog post
for (var i = 0; i < blogPosts.length; i++) {
	blogPosts[i].addEventListener("click", function() {
		// Get the URL of the blog post page
		var url = this.querySelector("a").getAttribute("href");

		 // Open the blog post page in a new tab/window
		window.open(url, "_blank");
	});
}


// Forms

const rate = document.getElementById("rateForm");
const contact = document.getElementById("contactForm");

if (rate) {
  rate.addEventListener("submit", () => {
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
