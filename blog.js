// Get all the blog post elements
var blogPosts = document.querySelectorAll('.blog-post');

// Add a click event listener to each blog post
for (var i = 0; i < blogPosts.length; i++) {
	blogPosts[i].addEventListener('click', function() {
		// Get the URL of the blog post page
		var url = this.querySelector('a').getAttribute('href');

		 // Open the blog post page in a new tab/window
		window.open(url, '_blank');
	});
}
