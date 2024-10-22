const container = document.querySelector(".next");
const button = document.querySelector(".fa-chevron-down");

button.addEventListener("click", () => {
  container.classList.toggle("active");
});
