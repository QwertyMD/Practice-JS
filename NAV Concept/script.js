const svg = document.getElementById("exp");
const item = document.querySelector(".container");
const h3 = document.querySelectorAll("h3");
const main = document.querySelector(".main");
let isCollapsed = true;

svg.addEventListener("click", () => {
  if (isCollapsed) {
    item.style.transform = "translate(0)";
    svg.style.transform = "rotate(0.5turn)";
    svg.style.opacity = "1";
    main.style.filter = "blur(5px)";
  } else {
    item.style.transform = "";
    svg.style.transform = "";
    svg.style.opacity = "";
    main.style.filter = "";
  }
  isCollapsed = !isCollapsed;
});
