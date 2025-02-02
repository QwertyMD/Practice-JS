const coin = document.getElementById("coin");
const dice = document.getElementById("dice");
const rslt = document.querySelector(".result");

function coinFlip() {
  let res = Math.random() > 0.5 ? "HEAD" : "TAIL";
  rslt.innerHTML = `<h2>You got <span>${res}</span> !</h2>`;
}

function diceRoll() {
  let res = Math.ceil(Math.random() * 6);
  rslt.innerHTML = `<h2>You got <span>${res}</span> !</h2>`;
}

coin.addEventListener("click", () => {
  rslt.innerHTML = `<h2>Flipping...</h2>`;
  setTimeout(() => {
    coinFlip();
  }, 1000);
});

dice.addEventListener("click", () => {
  rslt.innerHTML = `<h2>Rolling...</h2>`;
  setTimeout(() => {
    diceRoll();
  }, 1000);
});
