var menuBtn = document.getElementsByClassName("menu-btn");
var closeMenuBtn = document.getElementsByClassName("close-menu-btn");
var mobileMenu = document.getElementsByClassName("mobile-menu");
var mobileOpacityLayer = document.getElementsByClassName(
  "mobile-opacity-layer"
);

var clickedBtn = function () {
  mobileMenu[0].classList.toggle("active");
  mobileOpacityLayer[0].classList.toggle("active");
};

menuBtn[0].addEventListener("click", clickedBtn);
closeMenuBtn[0].addEventListener("click", clickedBtn);
document.querySelectorAll(".mobile-page-link").forEach((mobilePageLinkBtn) => {
  mobilePageLinkBtn.addEventListener("click", clickedBtn);
});
