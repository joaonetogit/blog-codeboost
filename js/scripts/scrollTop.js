const btnScrollTop = document.getElementById("js-scroll-top");

if (btnScrollTop) {
  btnScrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
