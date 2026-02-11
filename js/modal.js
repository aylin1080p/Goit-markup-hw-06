document.addEventListener("DOMContentLoaded", function () {

  /* ================= MOBILE MENU ================= */

  const menuOpenBtn = document.querySelector("[data-menu-open]");
  const menuCloseBtn = document.querySelector("[data-menu-close]");
  const mobileMenu = document.querySelector("[data-menu]");

  if (menuOpenBtn && mobileMenu) {
    menuOpenBtn.addEventListener("click", () => {
      mobileMenu.classList.add("is-open");
    });
  }

  if (menuCloseBtn && mobileMenu) {
    menuCloseBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
    });
  }


  /* ================= MODAL ================= */

  const modalOpenBtns = document.querySelectorAll("[data-modal-open]");
  const modalCloseBtn = document.querySelector("[data-modal-close]");
  const backdrop = document.querySelector("[data-modal]");

  if (!backdrop) return;


  function openModal() {
    backdrop.classList.remove("is-hidden");

    // Mobile menu açıksa kapat
    if (mobileMenu) {
      mobileMenu.classList.remove("is-open");
    }
  }

  function closeModal() {
    backdrop.classList.add("is-hidden");
  }


  modalOpenBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  });


  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }


  backdrop.addEventListener("click", function (e) {
    if (e.target === backdrop) {
      closeModal();
    }
  });


  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });

});
