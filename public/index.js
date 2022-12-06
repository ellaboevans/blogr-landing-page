// Menu Display

const menu = document.querySelector("#menu");
const burger = document.querySelector("#burger");

burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

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

dropBtn.addEventListener("click", function () {
  dropdownContent.classList.toggle("hidden");
});

// Company Dropdown
const dropBtn2 = document.querySelector("#dropbtn-2");
const dropdownContent2 = document.querySelector("#dropdown-content-2");

dropBtn2.addEventListener("click", function () {
  dropdownContent2.classList.toggle("hidden");
});

// Connect Dropdown
const dropBtn3 = document.querySelector("#dropbtn-3");
const dropdownContent3 = document.querySelector("#dropdown-content-3");

dropBtn3.addEventListener("click", function () {
  dropdownContent3.classList.toggle("hidden");
});
