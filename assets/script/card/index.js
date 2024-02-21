window.addEventListener("DOMContentLoaded", (event) => {
  console.log(123);
});

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(() => {
      document.querySelector("#loading-overlay").style.display = "none";
    }, 3000);
  }
};
