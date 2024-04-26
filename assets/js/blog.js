// This is where the output comes from
document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');

    function renderBlogPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];

        if (posts.length === 0) {
            postsContainer.innerHTML = '<p>Nothing here yet...</p>';
        } else {
            postsContainer.innerHTML = ''; 
// Input information comes into here 
            posts.forEach(function(post) {
                const postElement = document.createElement('div');
                postElement.classList.add('post');

                const titleElement = document.createElement('h3');
                titleElement.textContent = post.title;

                const contentElement = document.createElement('p');
                contentElement.textContent = post.content;

                const authorElement = document.createElement('h5');
                authorElement.textContent = `Author: ${post.username}`;

                postElement.appendChild(titleElement);
                postElement.appendChild(contentElement);
                postElement.appendChild(authorElement);

                postsContainer.appendChild(postElement);
            });
        }
    }
// Clears Local storage because vscode is incapable or unwilling to delete local storage.
    function clearLocalStorage() {
        localStorage.removeItem('posts');
        renderBlogPosts(); 
    }

    const clearLocalStorageButton = document.getElementById('clearLocalStorageButton');
    clearLocalStorageButton.addEventListener('click', clearLocalStorage);

    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    function initializeApp() {
        renderBlogPosts();
    }

    initializeApp();
});
