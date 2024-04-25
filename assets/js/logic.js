// General logic that might be used across multiple pages

// Function to toggle between light and dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Function to check if dark mode is enabled
function isDarkModeEnabled() {
    return document.body.classList.contains('dark-mode');
}

// Function to initialize the application
function initializeApp() {
    // Check if dark mode is enabled and update UI accordingly
    if (isDarkModeEnabled()) {
        // If dark mode is enabled, update UI elements
        // Example: Change button text, toggle classes, etc.
    }
}

// Initialize the application when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
