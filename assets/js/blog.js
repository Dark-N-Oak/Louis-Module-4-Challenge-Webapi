// Logic specific to the blog page
document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');

    // Function to render blog posts
    function renderBlogPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];

        if (posts.length === 0) {
            postsContainer.innerHTML = '<p>No posts yet.</p>';
        } else {
            postsContainer.innerHTML = ''; // Clear previous posts

            posts.forEach(function(post) {
                const postElement = document.createElement('div');
                postElement.classList.add('post');

                const titleElement = document.createElement('h3');
                titleElement.textContent = post.title;

                const contentElement = document.createElement('p');
                contentElement.textContent = post.content;

                const authorElement = document.createElement('p');
                authorElement.textContent = `Author: ${post.username}`;

                postElement.appendChild(titleElement);
                postElement.appendChild(contentElement);
                postElement.appendChild(authorElement);

                postsContainer.appendChild(postElement);
            });
        }
    }

    // Function to clear localStorage
    function clearLocalStorage() {
        localStorage.removeItem('posts');
        renderBlogPosts(); // Re-render the posts container
    }

    // Event listener for the "Clear Local Storage" button
    const clearLocalStorageButton = document.getElementById('clearLocalStorageButton');
    clearLocalStorageButton.addEventListener('click', clearLocalStorage);

    // Event listener for the "Back" button
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // Function to check if dark mode is enabled
    function isDarkModeEnabled() {
        return document.body.classList.contains('dark-mode');
    }

    // Function to toggle between light and dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    // Function to initialize the application
    function initializeApp() {
        // Check if dark mode is enabled and update UI accordingly
        if (isDarkModeEnabled()) {
            // If dark mode is enabled, update UI elements
            // Example: Change button text, toggle classes, etc.
        }
        
        renderBlogPosts(); // Render initial blog posts
    }

    // Initialize the application when the DOM content is loaded
    initializeApp();
});
