const LOAD_TIME = 1500;

window.addEventListener("DOMContentLoaded", (event) => {
  const openCardBtn = document.getElementById("open-card-btn");
  const cardCover = document.getElementById("card-cover");
  if (openCardBtn && cardCover) {
    openCardBtn.addEventListener("click", () => {
      setTimeout(() => {
        cardCover.classList.add("hidden");
      }, 600);
    });
  }
});

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(() => {
      document.querySelector("#loading-overlay").style.display = "none";
    }, LOAD_TIME);
  }
};
