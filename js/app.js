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

const hideSections = function () {
  for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".content-section")[i].classList.add("hidden");
  }
};

const showClickedSection = function (sectionNumber) {
  if (
    document
      .querySelector(`.section-${sectionNumber}`)
      .classList.contains("hidden")
  ) {
    if (sectionNumber == 1) {
      hideSections();
      document.querySelector(`.section-1`).classList.remove("hidden");
    } else if (sectionNumber == 2) {
      hideSections();
      document.querySelector(`.section-2`).classList.remove("hidden");
    } else if (sectionNumber == 3) {
      hideSections();
      document.querySelector(`.section-3`).classList.remove("hidden");
    } else if (sectionNumber == 4) {
      hideSections();
      document.querySelector(`.section-4`).classList.remove("hidden");
    } else if (sectionNumber == 5) {
      hideSections();
      document.querySelector(`.section-5`).classList.remove("hidden");
    } else if (sectionNumber == 6) {
      hideSections();
      document.querySelector(`.section-6`).classList.remove("hidden");
    } else if (sectionNumber == 7) {
      hideSections();
      document.querySelector(`.section-7`).classList.remove("hidden");
    }
  }
};

// SIDE-BAR FUNCTIONALITY
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sb-bars");

toggleBtn.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
    sidebar.classList.add("side-bar-invisible");
  } else {
    sidebar.classList.add("show-sidebar");
    sidebar.classList.remove("side-bar-invisible");
  }
});

document.querySelector(".main").addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
    sidebar.classList.add("side-bar-invisible");
  } else {
    sidebar.classList.add("show-sidebar");
    sidebar.classList.remove("side-bar-invisible");
  }
});
