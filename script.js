'use strict';

// Declare cart variable in the outer scope
let cart = [];

/**
 * add event on element
 */
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
 * navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active when scroll down to 100px
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const coursesContainer = document.getElementById('courses');

  // Function to display courses
  function displayCourses(courses) {
    courses.forEach(course => {
      const courseElement = document.createElement('div');
      courseElement.innerHTML = `
        <p>${course.name} - $${course.price}</p>
        <button class="add-to-cart-btn" data-course-id="${course.id}">Add to Cart</button>
      `;
      coursesContainer.appendChild(courseElement);
    });

    // Add event listeners to "Add to Cart" buttons
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const courseId = btn.dataset.courseId;
        addToCart(courseId);
      });
    });
  }
});

function tryForFree() {
  // Navigate to signup.html
  window.location.href = "signup.html";
}

addEventOnElem(window, "scroll", activeElem);
