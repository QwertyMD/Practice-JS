const spin = document.getElementById("spin");
const wheel = document.getElementById("wheel");
let rotation = 0;

spin.addEventListener("click", () => {
  let times = Math.ceil(Math.random() * 1080 + 360);
  rotation += times;
  wheel.style.transform = `rotate(${rotation}deg)`;
});
