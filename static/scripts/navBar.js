document.addEventListener("DOMContentLoaded", function() {
    fetch('NavBar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-bar').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});
