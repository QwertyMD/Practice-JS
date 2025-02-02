const poster = document.querySelector(".poster");
const dance = document.getElementById("dance");
const hug = document.getElementById("hug");
const laugh = document.getElementById("laugh");
const poke = document.getElementById("poke");
const smile = document.getElementById("smile");

async function implant(url) {
  poster.innerHTML = `<h1>Generating...</h1>`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  let idx = Math.floor(Math.random() * data.results.length);
  poster.innerHTML = `<img src="${data.results[idx].url}" alt="pic"></img>`;
}

dance.addEventListener("click", () => {
  implant("https://nekos.best/api/v2/dance?amount=100");
});

hug.addEventListener("click", () => {
  implant("https://nekos.best/api/v2/hug?amount=100");
});

laugh.addEventListener("click", () => {
  implant("https://nekos.best/api/v2/laugh?amount=100");
});

poke.addEventListener("click", () => {
  implant("https://nekos.best/api/v2/poke?amount=100");
});

smile.addEventListener("click", () => {
  implant("https://nekos.best/api/v2/smile?amount=100");
});
