function hideNavBar() {
  const hidden = document.querySelector("nav");
  hidden.classList.toggle("hidden-show");

  const inner_grid = document.querySelector(".inner-grid");
  inner_grid.classList.toggle("inner-grid-show");
}
