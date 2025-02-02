const elemIdx = [
  "water",
  "flame",
  "sound",
  "insect",
  "mist",
  "serpent",
  "love",
  "wind",
  "stone",
];
const dropMenu = document.querySelector(".drop-menu");
const dropItems = document.querySelector(".drop-items");
const elemInfo = document.querySelector(".e-info");

elemIdx.forEach((e) => {
  const createElem = document.createElement("div");
  createElem.classList.add("element");
  createElem.textContent = e.toUpperCase();
  dropItems.appendChild(createElem);
});

dropMenu.addEventListener("click", () => {
  dropItems.classList.toggle("hidden-dropItems");
});

const selElem = document.getElementById("selected-elem");
const elems = document.querySelectorAll(".element");

let intID;
const elemObj = {
  WATER: "https://media1.tenor.com/m/esvSdkGf2bkAAAAC/giyuu.gif",
  FLAME: "https://media1.tenor.com/m/IBGsgQdULYwAAAAC/thank-you.gif",
  SOUND:
    "https://media1.tenor.com/m/-x82Ry0ylOAAAAAd/tengen-uzui-demon-slayer.gif",
  INSECT:
    "https://media1.tenor.com/m/aFbjNOPk6cAAAAAC/shinobu-kochou-kimetsu-no-yaiba.gif",
  MIST: "https://media1.tenor.com/m/8EYsL7kKCd4AAAAd/muichiro-tokito.gif",
  SERPENT:
    "https://media1.tenor.com/m/3jBPI8_vMfcAAAAC/obanai-obanai-iguro.gif",
  LOVE: "https://media1.tenor.com/m/okjfpFVYpNEAAAAC/anime-mitsuri-kanroji.gif",
  WIND: "https://media1.tenor.com/m/Ldjw_tK-aQwAAAAC/sanemi-sanemi-shinazugawa.gif",
  STONE:
    "https://media1.tenor.com/m/leh_gmlYFvIAAAAd/himejima-gyomei-kimetsu-no-yaiba.gif",
};

elems.forEach((e, idx) => {
  e.addEventListener("click", () => {
    selElem.textContent = e.textContent;
    dropItems.classList.add("hidden-dropItems");

    const img = new Image();
    img.src = elemObj[e.textContent];

    clearInterval(intID);
    elemInfo.innerHTML = "";
    const animeTxt = `Unleashing the ${e.textContent}...`;
    intID = setInterval(() => {
      elemInfo.innerHTML = `
            <h2>${animeTxt.slice(0, idx)}|</h2>
                            `;
      idx++;
      if (idx > animeTxt.length) {
        clearInterval(intID);
        setTimeout(() => {
          elemInfo.insertAdjacentHTML(
            "beforeend",
            `<img src="${img.src}" alt="gif">`
          );
        }, 500);
      }
    }, 100);
  });
});
