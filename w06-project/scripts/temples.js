// Dynamic year and last modified
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector(
  "#lastModified"
).textContent = `Last Modified: ${document.lastModified}`;

// Hamburger Menu Toggle
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});
