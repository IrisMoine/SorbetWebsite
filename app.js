window.addEventListener("scroll", function () {
  let pageX = window.pageXOffset;
  let main = document.querySelector("main");
  main.style.backgroundPosition = `-${pageX * 0.13}px -100px`;
});
