const content = document.querySelector(".content");
const squares = 2649;

for (i = 0; i <= squares; i++) {
  const create = document.createElement("div");
  create.classList.add("square");
  content.appendChild(create);
}

function randomCol(col) {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  col = `rgba(${r}, ${g}, ${b})`;
  return col;
}

const sqrs = document.querySelectorAll(".square");
sqrs.forEach((element) => {
  element.addEventListener("mouseover", () => {
    let color = randomCol();
    element.style.transition = "";
    element.style.backgroundColor = `${color}`;
    element.style.boxShadow = `0 0 2px 0 ${color}, 0 0 10px 0 ${color}`;
  });
  element.addEventListener("mouseout", () => {
    element.style.transition = `all ease 2s`;
    element.style.backgroundColor = "";
    element.style.boxShadow = "";
  });
});
