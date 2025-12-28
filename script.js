const menuToggel = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");
const li = document.querySelector("nav ul li");
const checkbox = document.getElementById("checkbox");

menuToggel.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

nav.addEventListener("click", function () {
  menuToggel.click();
});