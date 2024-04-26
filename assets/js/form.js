document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blogForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = form.username.value.trim();
        const title = form.title.value.trim();
        const content = form.content.value.trim();

        if (username === '' || title === '' || content === '') {
            formMessage.textContent = 'Please complete all fields';
            return;
        }

        const post = {
            username: username,
            title: title,
            content: content
        };

        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));

        form.reset();
        formMessage.textContent = '';

        window.location.href = 'blog.html';
    });
});