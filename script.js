// script.js

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }
  
  /**
   * Navbar toggle
   */
  const navbar = document.querySelector("[data-navbar]");
  const navToggler = document.querySelectorAll("[data-nav-toggler]");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  
  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    document.querySelector(".nav-links ul").classList.toggle("active");
  }
  
  addEventOnElem(navToggler, "click", toggleNavbar);
  
  const closeNavbar = function () {
    navbar.classList.remove("active");
    document.querySelector(".nav-links ul").classList.remove("active");
  }
  
  addEventOnElem(navLinks, "click", closeNavbar);
  
  /**
   * Header active on scroll
   */
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  });
  