const joke = document.querySelector(".joke");
const gen = document.getElementById("gen");

async function getJoke() {
  joke.innerHTML = `<h2>Generating...</h2>`;
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  joke.innerHTML = `<h2>${data.joke}<h2>`;
}

gen.addEventListener("click", () => {
  getJoke();
});
  