if (screen.width >= 699 && screen.width <= 900) {
document.location = "/landscape/index.html";
}
if (screen.width <= 699) {
document.location = "/mobile/index.html";
}
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}