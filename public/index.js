// Menu Display

// const menu = document.querySelector("#menu");
// const burger = document.querySelector("#burger");

// burger.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });

// Copyright Auto Update

const copyright = document.querySelector("#copyrightDate");

let update = () => {
  let date = new Date();
  //   console.log(date);

  let year = date.getFullYear();
  //   console.log(year)

  copyright.innerHTML = year;
};
update();

// Dropdown Settings Here

// Product Dropdown
const dropBtn = document.querySelector("#dropbtn");
const dropdownContent = document.querySelector("#dropdown-content");

dropBtn.addEventListener("mouseover", function () {
  dropdownContent.classList.remove("hidden");
});

dropBtn.addEventListener("click", function () {
  dropdownContent.classList.add("hidden");
});

// Company Dropdown
const dropBtn2 = document.querySelector("#dropbtn-2");
const dropdownContent2 = document.querySelector("#dropdown-content-2");

dropBtn2.addEventListener("mouseover", function () {
  dropdownContent2.classList.remove("hidden");
});

dropBtn2.addEventListener("click", function () {
  dropdownContent2.classList.add("hidden");
});

// Connect Dropdown
const dropBtn3 = document.querySelector("#dropbtn-3");
const dropdownContent3 = document.querySelector("#dropdown-content-3");

dropBtn3.addEventListener("mouseover", function () {
  dropdownContent3.classList.remove("hidden");
});

dropBtn3.addEventListener("click", function () {
  dropdownContent3.classList.add("hidden");
});

// MobileMenu

const dropBtnMobile = document.querySelector("#dropbtn-mobile");
const dropdownContentMobile = document.querySelector(
  "#dropdown-content-mobile"
);

dropBtnMobile.addEventListener("click", () => {
  if (dropdownContentMobile.classList.contains("hidden")) {
    return dropdownContentMobile.classList.remove("hidden");
  } else {
    return dropdownContentMobile.classList.add("hidden");
  }
});

const dropBtnMobile2 = document.querySelector("#dropbtn-mobile-2");
const dropdownContentMobile2 = document.querySelector(
  "#dropdown-content-mobile-2"
);

dropBtnMobile2.addEventListener("click", () => {
  if (dropdownContentMobile2.classList.contains("hidden")) {
    return dropdownContentMobile2.classList.remove("hidden");
  } else {
    return dropdownContentMobile2.classList.add("hidden");
  }
});

const dropBtnMobile3 = document.querySelector("#dropbtn-mobile-3");
const dropdownContentMobile3 = document.querySelector(
  "#dropdown-content-mobile-3"
);

dropBtnMobile3.addEventListener("click", () => {
  if (dropdownContentMobile3.classList.contains("hidden")) {
    return dropdownContentMobile3.classList.remove("hidden");
  } else {
    return dropdownContentMobile3.classList.add("hidden");
  }
});
