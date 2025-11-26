// headers.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("Pages/Footers/disclaimer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("disclaimer_Placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});