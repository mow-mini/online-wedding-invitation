const LOAD_TIME = 0;

window.addEventListener("DOMContentLoaded", (event) => {
  const openCardBtn = document.getElementById("open-card-btn");
  const cardCover = document.getElementById("card-cover");
  const cardDetail = document.getElementById("card-detail");
  setupCustomerName();
  if (openCardBtn && cardCover) {
    openCardBtn.addEventListener("click", () => {
      //   playAudio();
      setTimeout(() => {
        cardCover.classList.add("hidden");
        cardDetail.classList.remove("hidden");
        showLoadingLayer();
      }, 0);
    });
  }
});

function showLoadingLayer() {
  const loadingLayer = document.querySelector("#loading-overlay");
  loadingLayer.classList.toggle("flex");
  loadingLayer.classList.toggle("hidden");
  setTimeout(() => {
    loadingLayer.classList.toggle("flex");
    loadingLayer.classList.toggle("hidden");
  }, LOAD_TIME);
}

async function setupCustomerName() {
  const customerName = document.getElementById("customer-name");
  const name = "Quý Khách";
  customerName.innerText = name;
}

function playAudio() {
  const cardAudio = document.getElementById("card-audio");
  let volume = 0;
  let targetVolume = 0.35;
  if (cardAudio) {
    cardAudio.play();

    let interval = setInterval(function () {
      if (volume < targetVolume) {
        volume += 0.01;
        cardAudio.volume = volume;
      } else {
        clearInterval(interval);
      }
    }, 200);
  }
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(() => {
      //   document.querySelector("#loading-overlay").style.display = "none";
    }, LOAD_TIME);
  }
};
