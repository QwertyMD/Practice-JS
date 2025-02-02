const content = document.querySelector(".container");
const boxes = 19;
for (i = 0; i <= boxes; i++) {
  const create = document.createElement("div");
  create.classList.add("box");
  content.appendChild(create);
}

function randomColor() {
  let color01 = Math.ceil(Math.random() * 255);
  let color02 = Math.ceil(Math.random() * 255);
  let color03 = Math.ceil(Math.random() * 255);
  return `rgb(${color01}, ${color02}, ${color03})`;
}

function setCol() {
  document.querySelectorAll(".box").forEach((element) => {
    element.style.backgroundColor = randomColor();
  });
}

setCol();

let toggle = document.getElementById("toggle");
let intervalID;
let isRunning = false;

toggle.addEventListener("click", () => {
  if (!isRunning) {
    intervalID = setInterval(() => {
      setCol();
    }, 300);
  } else {
    clearInterval(intervalID);
  }
  isRunning = !isRunning;
});
