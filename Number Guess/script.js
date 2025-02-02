const guess = document.getElementById("guess");
const hint = document.querySelector(".info");

function play() {
  hint.innerHTML = "";
  num = Math.round(Math.random() * 100);
  guess.addEventListener("click", ePlay);
  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      ePlay();
    }
  });
}

function ePlay() {
  let input = parseInt(document.getElementById("input").value);
  if (isNaN(input)) {
    hint.innerHTML = `<h2>Guess Something</h2>`;
    return;
  }
  hint.innerHTML = `<h2>Checking...</h2>`;
  setTimeout(() => {
    if (num < input) {
      hint.innerHTML = `<h2>Think Lower</h2>`;
    } else if (num > input) {
      hint.innerHTML = `<h2>Think Higher</h2>`;
    } else {
      hint.innerHTML = `<h2>Correct</h2>
                          <button id="again">Play Again</button>`;
      const again = document.getElementById("again");
      again.addEventListener("click", () => {
        hint.innerHTML = "";
        document.getElementById("input").value = "";
        play();
      });
    }
  }, 1000);
}

play();
