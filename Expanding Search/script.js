const exp = document.getElementById("exp");
      const crt = document.querySelector(".create");
      const inp = document.getElementById("inp");
      let isCol = true;
      exp.addEventListener("click", () => {
        if (isCol) {
          inp.style.width = "300px";
          exp.style.transform = `translate(150px)`;
          exp.style.padding = "0";
        } else {
          inp.style.width = "";
          exp.style.transform = "";
          exp.style.padding = "";
        }
        isCol = !isCol;
      });