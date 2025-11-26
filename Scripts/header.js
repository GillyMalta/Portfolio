// headers.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("/Pages/Headers/Headers.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header_Placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});