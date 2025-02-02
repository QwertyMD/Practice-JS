const butt = document.getElementById("aura");
butt.addEventListener("click", () => {
  document.body.insertAdjacentHTML(
    "afterend",
    `<h3>Successfully achieved <span>${Math.round(
      Math.random() * 1000
    )}</span> aura points.</h3>`
  );
});
