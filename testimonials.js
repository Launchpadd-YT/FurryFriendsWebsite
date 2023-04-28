// Randomize the order of the testimonials
const testimonialContainer = document.getElementById("testimonialContainer");

for (let i = testimonialContainer.children.length; i >= 0; i--) {
    testimonialContainer.appendChild(testimonialContainer.children[Math.random() * i | 0]);
}
