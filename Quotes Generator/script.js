const q = document.getElementsByTagName("button");
const gen = document.querySelector(".info");
const pfp = document.querySelector(".pfp");
const text = document.querySelector(".text");

function perfecto() {
  pfp.style.height = "200px";
  pfp.style.width = "200px";
  gen.style.padding = "2rem";
  gen.style.height = "300px";
  gen.style.width = "400px";
  gen.style.margin = "3rem 1rem";
}

q[0].addEventListener("click", () => {
  pfp.style.backgroundImage = `url("https://avatarfiles.alphacoders.com/183/183166.jpg")`;
  text.innerHTML = `<h2>"The hardest choices require the strongest will." </h2>`;
  perfecto();
});

q[1].addEventListener("click", () => {
  pfp.style.backgroundImage = `url("https://avatarfiles.alphacoders.com/215/215811.jpg")`;
  text.innerHTML = `<h2>"I can do this all day." </h2>`;
  perfecto();
});

q[2].addEventListener("click", () => {
  pfp.style.backgroundImage = `url("https://avatarfiles.alphacoders.com/293/293614.jpg")`;
  text.innerHTML = `<h2>"I'd rather be a good man than a great king." </h2>`;
  perfecto();
});

q[3].addEventListener("click", () => {
  pfp.style.backgroundImage = `url("https://avatarfiles.alphacoders.com/100/100317.jpg")`;
  text.innerHTML = `<h2>"He may have been your father, boy, but he wasn't your daddy." </h2>`;
  perfecto();
});
