const pics = [
  "https://4kwallpapers.com/images/walls/thumbs_3t/19141.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_3t/5505.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_3t/6687.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_3t/16104.jpg",
];

const body = document.querySelector("body");
const image = document.querySelector(".image");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let idx = 0;

function setImg() {
  const img = new Image();
  img.src = pics[idx];
  img.onload = () => {
    body.style.setProperty(`--bgImg`, `url("${img.src}")`);
    image.style.backgroundImage = `url("${img.src}")`;
  };
}

prev.addEventListener("click", () => {
  idx = idx == 0 ? pics.length - 1 : idx - 1;
  setImg();
});

next.addEventListener("click", () => {
  idx = idx == pics.length - 1 ? 0 : idx + 1;
  setImg();
});
