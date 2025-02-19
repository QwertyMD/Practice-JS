const butt = document.getElementById("butt");
const scoreHandler = document.querySelector(".score");

butt.addEventListener("click", () => {
  let x = Math.round(Math.random() * (window.innerWidth - butt.offsetWidth));
  let y = Math.round(Math.random() * (window.innerHeight - butt.offsetHeight));
  butt.style.transform = `translate(${x}px, ${y}px)`;
  scoreHandler.textContent = `${Number(scoreHandler.textContent) + 1}`;
});
