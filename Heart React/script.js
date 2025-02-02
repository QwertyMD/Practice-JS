const svg = document.querySelector("svg");
const img = document.querySelector("img");
const countInfo = document.querySelector(".counter");
let count = localStorage.getItem("myCount") || 0;
countInfo.innerHTML = `<h3>You liked <span>${count}</span> times !</h3>`;

img.addEventListener("dblclick", () => {
  count++;
  countInfo.innerHTML = `<h3>You liked <span>${count}</span> times !</h3>`;
  localStorage.setItem("myCount", count);

  svg.style.transition = "";
  svg.style.transform = "scale(3)";
  svg.addEventListener(
    "transitionend",
    () => {
      svg.style.transition = "all ease 0.3s";
      svg.style.transform = "scale(2.5)";
      svg.addEventListener(
        "transitionend",
        () => {
          setTimeout(() => {
            svg.style.transition = "all ease-in 0.2s";
            svg.style.transform = "";
          }, 400);
        },
        { once: true }
      );
    },
    { once: true }
  );
});
