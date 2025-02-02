const icon = document.querySelectorAll("svg");

icon.forEach((element) => {
  element.addEventListener("click", () => {
    const h3 = element.parentElement.parentElement.querySelector("h3");
    const svg = element.parentElement.querySelectorAll("svg");
    h3.classList.toggle("hidden");
    svg[0].classList.toggle("hidden");
    svg[1].classList.toggle("hidden");
  });
});
