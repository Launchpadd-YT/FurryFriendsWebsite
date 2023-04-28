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
