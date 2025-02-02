const img = document.querySelectorAll(".img");
img.forEach((img) => {
  let isCollapsed = true;
  img.addEventListener("click", () => {
    if (isCollapsed) {
      img.style.width = "50vw";
      img.style.height = "75vh";
    } else {
      img.style.width = "";
      img.style.height = "";
    }
    isCollapsed = !isCollapsed;
  });
});
