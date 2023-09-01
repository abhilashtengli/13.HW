const currmonth = document.getElementById("month");
const dayname = document.getElementById("day-name");
const daynumber = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

currmonth.innerText = date.toLocaleString("en", {
  month: "long",
});
dayname.innerText = date.toLocaleString("en", {
  weekday: "long",
});

daynumber.innerText = date.getDate();

year.innerText = date.getFullYear();
