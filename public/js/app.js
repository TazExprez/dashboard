var menuBtn = document.getElementsByClassName("menu-btn");
var mobileSideMenu = document.getElementById("mobile-side-menu");
var mobileOpacityLayer = document.getElementsByClassName(
  "mobile-opacity-layer"
);

var clickedBtn = function () {
  mobileSideMenu.classList.toggle("active");
  mobileOpacityLayer[0].classList.toggle("active");
};

menuBtn[0].addEventListener("click", clickedBtn);
document.querySelectorAll(".mobile-page-link").forEach((mobilePageLinkBtn) => {
  mobilePageLinkBtn.addEventListener("click", clickedBtn);
});
