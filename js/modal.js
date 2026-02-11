document.addEventListener("DOMContentLoaded", function () {

  const openBtn = document.querySelector("[data-modal-open]");
  const closeBtn = document.querySelector("[data-modal-close]");
  const backdrop = document.querySelector("[data-modal]");

  if (!openBtn || !closeBtn || !backdrop) return;

  // OPEN
  openBtn.addEventListener("click", function (event) {
    event.preventDefault();
    backdrop.classList.remove("is-hidden");
  });

  // CLOSE BUTTON
  closeBtn.addEventListener("click", function () {
    backdrop.classList.add("is-hidden");
  });

  // BACKDROP CLICK
  backdrop.addEventListener("click", function (event) {
    if (event.target === backdrop) {
      backdrop.classList.add("is-hidden");
    }
  });

  // ESC CLOSE
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      backdrop.classList.add("is-hidden");
    }
  });

});
