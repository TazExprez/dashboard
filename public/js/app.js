var menuBtn = document.getElementsByClassName("menu-btn");
// var mobileLogoBtn = document.getElementsByClassName("mobile-logo");
var mobileSideMenu = document.getElementById("mobile-side-menu");
var mobileOpacityLayer = document.getElementsByClassName(
  "mobile-opacity-layer"
);

var clickedBtn = function () {
  mobileSideMenu.classList.toggle("active");
  mobileOpacityLayer[0].classList.toggle("active");
};

// var closeMobileSideMenu = function () {
//   mobileSideMenu.classList.remove("active");
//   mobileOpacityLayer[0].classList.remove("active");
// };

menuBtn[0].addEventListener("click", clickedBtn);
// mobileLogoBtn[0].addEventListener("click", closeMobileSideMenu);
document.querySelectorAll(".mobile-page-link").forEach((mobilePageLinkBtn) => {
  mobilePageLinkBtn.addEventListener("click", clickedBtn);
});
