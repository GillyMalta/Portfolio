document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");

    // Map each link's text to an HTML file
    const pages = {
        "simply me": "simplyme.html",
        "my family": "myfamily.html",
        "hobbies": "hobbies.html",
        "contact": "contact.html"
    };

    // Select all links inside #bullets_Container
    const links = document.querySelectorAll("#bullets_Container a");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const linkText = link.textContent.trim().toLowerCase();
            const file = pages[linkText];

            if (!file) {
                contentDiv.innerHTML = `<p>No file mapped for: ${linkText}</p>`;
                return;
            }

            // Load HTML file
            fetch(file)
                .then(response => response.text())
                .then(html => {
                    contentDiv.innerHTML = html;
                })
                .catch(error => {
                    contentDiv.innerHTML = `<p>Error loading ${file}</p>`;
                });
        });
    });
});