const toggle = document.getElementById("toggle");
const content = document.querySelector(".image");
const img = document.getElementById("img");
let isRunning = false;
let intID;

function gen() {
  let a = Math.ceil(Math.random() * 100000);
  const img = new Image();
  img.src = `https://picsum.photos/600/400?random=${a}`;
  img.onload = () => {
    content.style.backgroundImage = `url("${img.src}")`;
    content.style.boxShadow = "0 0 1rem 0 black";
  };
}
gen();

toggle.addEventListener("click", () => {
  if (!isRunning) {
    intID = setInterval(() => {
      gen();
    }, 2000);
  } else {
    clearInterval(intID);
  }
  isRunning = !isRunning;
});
