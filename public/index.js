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
update()
