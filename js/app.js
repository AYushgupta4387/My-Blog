"use strict";

let clickedSection;

const changeColorOfSection = function (sectionNumber) {
  clickedSection = document.querySelector(`.section-btn-${sectionNumber}`);
  if ((clickedSection.style.backgroundColor = "#393e46")) {
    document.querySelector(".section-btn-1").style.backgroundColor = "#393e46";
    document.querySelector(".section-btn-2").style.backgroundColor = "#393e46";
    document.querySelector(".section-btn-3").style.backgroundColor = "#393e46";
    document.querySelector(".section-btn-4").style.backgroundColor = "#393e46";
    document.querySelector(".section-btn-5").style.backgroundColor = "#393e46";
    document.querySelector(".section-btn-6").style.backgroundColor = "#393e46";
    document.querySelector(".section-btn-7").style.backgroundColor = "#393e46";

    clickedSection.style.backgroundColor = "#222831";
  }
};

const showClickedSection = function (sectionNumber) {
  if (
    document
      .querySelector(`.section-${sectionNumber}`)
      .classList.contains("hidden")
  ) {
    if (sectionNumber == 1) {
      for (let i = 0; i < 7; i++) {
        document
          .querySelectorAll(".content-section")
          [i].classList.add("hidden");
      }
      document.querySelector(`.section-1`).classList.remove("hidden");
    } else if (sectionNumber == 2) {
      for (let i = 0; i < 7; i++) {
        document
          .querySelectorAll(".content-section")
          [i].classList.add("hidden");
      }
      document.querySelector(`.section-2`).classList.remove("hidden");
    } else if (sectionNumber == 3) {
      for (let i = 0; i < 7; i++) {
        document
          .querySelectorAll(".content-section")
          [i].classList.add("hidden");
      }
      document.querySelector(`.section-3`).classList.remove("hidden");
    } else if (sectionNumber == 4) {
      for (let i = 0; i < 7; i++) {
        document
          .querySelectorAll(".content-section")
          [i].classList.add("hidden");
      }
      document.querySelector(`.section-4`).classList.remove("hidden");
    } else if (sectionNumber == 5) {
      for (let i = 0; i < 7; i++) {
        document
          .querySelectorAll(".content-section")
          [i].classList.add("hidden");
      }
      document.querySelector(`.section-5`).classList.remove("hidden");
    } else if (sectionNumber == 6) {
      for (let i = 0; i < 7; i++) {
        document
          .querySelectorAll(".content-section")
          [i].classList.add("hidden");
      }
      document.querySelector(`.section-6`).classList.remove("hidden");
    } else if (sectionNumber == 7) {
      for (let i = 0; i < 7; i++) {
        document
          .querySelectorAll(".content-section")
          [i].classList.add("hidden");
      }
      document.querySelector(`.section-7`).classList.remove("hidden");
    }
  }
};

// SIDE-BAR FUNCTIONALITY
const toggleBtn = document.querySelector(".header__bars-btn");
const sidebar = document.querySelector(".side-bar");

const toggleBtn_2 = document.querySelector(".sb-bars");

toggleBtn.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
    sidebar.classList.add("side-bar-invisible");
  } else {
    sidebar.classList.add("show-sidebar");
    sidebar.classList.remove("side-bar-invisible");
  }
});

toggleBtn_2.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
    sidebar.classList.add("side-bar-invisible");
  } else {
    sidebar.classList.add("show-sidebar");
    sidebar.classList.remove("side-bar-invisible");
  }
});
