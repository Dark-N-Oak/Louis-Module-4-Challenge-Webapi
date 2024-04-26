//Dark Mode code
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var darkModeButton = document.getElementById("darkMode");
    if (darkModeButton.innerHTML === "☀️") {
        darkModeButton.innerHTML = "🌙";
    } else {
        darkModeButton.innerHTML = "☀️";
    }
}