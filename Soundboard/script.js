const item = document.getElementsByTagName("img");
const audio = document.getElementsByTagName("audio");

function stopPrev() {
  for (let i = 0; i < audio.length; i++) {
    audio[i].pause();
    audio[i].currentTime = 0;
  }
}

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", () => {
    stopPrev();
    audio[i].play();
  });
}
