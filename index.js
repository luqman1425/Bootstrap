window.setInterval(timeUpdate, 1000);
const containerEl = document.querySelector(".h1");
let btnEl = document.querySelector("#sidebarCollapse");
let sidebarEl = document.querySelector("#sidebar");
let careerEl = document.querySelector("career");
careerEl = [
  "Web-Developer",
  "Freelancer",
  "Philanthropist",
  "Physicist",
  "Engineer",
];
let careerIndex = 0;
let characterIndex = 0;

function timeUpdate() {
  var date = new Date();
  var timeEl = document.getElementById("time");
  timeEl.innerHTML = date.toLocaleTimeString();
}

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am ${
    careerEl[careerIndex].slice(0, 1) === "E" ? "an" : "a"
  } ${careerEl[careerIndex].slice(0, characterIndex)}</h1>`;

  if (characterIndex == careerEl[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex == careerEl.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}

$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});