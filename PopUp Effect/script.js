const grts = ["Hello", "Hi", "Hello There", "Wassup", "Namaste", "Hey"];
const butt = document.getElementById("click");

function showPop() {
  let idx = Math.floor(Math.random() * grts.length);
  const msg = document.createElement("div");
  msg.classList.add("pop");
  msg.innerHTML = `
        <div class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffffff" fill="none">
            <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </div>
        <div class="txt"><h1>${grts[idx]}!</h1></div>`;
  document.body.appendChild(msg);

  requestAnimationFrame(() => {
    msg.style.transform = "scale(1)";
  });

  setTimeout(() => {
    msg.style.transform = "";
    msg.addEventListener("transitionend", () => {
      msg.remove();
    });
  }, 3000);

  const cls = msg.querySelector("svg");
  cls.addEventListener("click", () => {
    msg.style.transform = "";
    msg.addEventListener("transitionend", () => {
      msg.remove();
    });
  });
}

butt.addEventListener("click", () => {
  showPop();
});
